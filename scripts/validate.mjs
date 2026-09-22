import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const root=process.cwd();
const errors=[];const warnings=[];
const err=m=>errors.push(m);const warn=m=>warnings.push(m);
const read=f=>fs.readFileSync(path.join(root,f),'utf8');

const required=['index.html','styles.css','cases-data.js','app-core.js','manifest.webmanifest','sw.js','icon.svg','icon-192.png','icon-512.png','apple-touch-icon.png'];
for(const f of required)if(!fs.existsSync(path.join(root,f)))err(`Eksik dosya: ${f}`);

let APP_META,CASES;
try{
  const code=read('cases-data.js')+'\n;globalThis.__meta=APP_META;globalThis.__cases=CASES;';
  const box={};vm.createContext(box);vm.runInContext(code,box,{timeout:1000});APP_META=box.__meta;CASES=box.__cases;
}catch(e){err(`cases-data.js okunamadı: ${e.message}`)}

if(APP_META){
  if(APP_META.schemaVersion!==3)err('APP_META.schemaVersion 3 olmalı');
  if(!Array.isArray(APP_META.populations)||APP_META.populations.length!==3)err('3 population tanımı bekleniyor');
}
if(!Array.isArray(CASES)||!CASES.length)err('CASES boş veya dizi değil');

const roscCase=(CASES||[]).find(c=>c.code==='SB-ASH-Y-12');
if(!roscCase)err('SB-ASH-Y-12 Resüsitasyon Sonrası Bakım vakası eksik');
else{
  if(roscCase.title!=='Resüsitasyon Sonrası Bakım')err('SB-ASH-Y-12 resmî başlığı "Resüsitasyon Sonrası Bakım" olmalı');
  if(!String(roscCase.subtitle||'').includes('ROSC')||!String(roscCase.subtitle||'').toLocaleLowerCase('tr-TR').includes('spontan dolaşım'))err('SB-ASH-Y-12 kullanıcı açıklaması ROSC ve spontan dolaşımı açıklamalı');
}

const ids=new Set();const allowedAuthority=new Set(['DIRECT','SKKM','ALGORITHM']);const allowedRoutes=new Set(APP_META?.routes||[]);const allowedPop=new Set((APP_META?.populations||[]).map(p=>p.id));
if(APP_META?.routeLabels?.NEB!=='Nebülizasyon')err('NEB kullanıcı etiketi Nebülizasyon olmalı');
if(!APP_META?.routes?.includes('INHALER')||APP_META?.routeLabels?.INHALER!=='İnhaler')err('INHALER/İnhaler yol tanımı eksik');
if(APP_META?.authority?.DIRECT?.symbol!=='✓'||APP_META?.authority?.DIRECT?.visualLabel!=='SKKM/ÇM onayı gerektirmez')err('DIRECT yeşil/doğrudan sembol metası eksik');
if(APP_META?.authority?.SKKM?.symbol!=='◆'||APP_META?.authority?.SKKM?.visualLabel!=='SKKM/ÇM onayı gerekli')err('SKKM sarı/onay sembol metası eksik');
if(APP_META?.authority?.ALGORITHM?.symbol!=='•'||APP_META?.authority?.ALGORITHM?.visualLabel!=='Yetki simgesi doğrulanmadı')err('ALGORITHM nötr sembol metası eksik');
if(APP_META?.contentVersion!=='EK2-2026.08.25-adult-expansion-2-2026.09.22')err('contentVersion ikinci yetişkin genişleme sürümüyle eşleşmiyor');
const strokeCase=(CASES||[]).find(c=>c.id==='stroke');
if(!strokeCase||strokeCase.title!=='İnme / SVO')err('İnme / SVO başlığı korunmalı');
const seizureCase=(CASES||[]).find(c=>c.id==='seizure');
if(!seizureCase||seizureCase.title!=='Nöbet / Konvülziyon')err('Nöbet başlığı resmî SB-ASH-Y-19 adıyla Nöbet / Konvülziyon olmalı');
const beeCase=(CASES||[]).find(c=>c.id==='bee');
if(!beeCase||beeCase.severity?.mild?.label!=='Lokal reaksiyon'||beeCase.severity?.moderate?.label!=='Sistemik bulgu'||beeCase.severity?.severe?.label!=='Anafilaksi')err('Arı sokması klinik görünüm etiketleri eksik');
const medByName=(c,name)=>(c?.meds||[]).find(m=>m.name===name);
if(!beeCase?.source?.algorithmCodes?.includes('SB-ASH-Y-22')||beeCase?.source?.algorithmCodes?.includes('Y-22'))err('Arı sokması Anafilaksi kaynak kodu tam SB-ASH-Y-22 olmalı');
if(!String(medByName(beeCase,'Adrenalin')?.repeat||'').includes('5 dk'))err('Arı sokması adrenalin 5 dk tekrar bilgisi eksik');

const anaphylaxisCase=(CASES||[]).find(c=>c.id==='anaphylaxis');
if(medByName(anaphylaxisCase,'Adrenalin')?.authority!=='DIRECT'||!String(medByName(anaphylaxisCase,'Adrenalin')?.repeat||'').includes('5 dk'))err('Anafilaksi adrenalin doğrudan/5 dk tekrar bilgisi eksik');

const asthmaCase=(CASES||[]).find(c=>c.id==='asthma');
const asthmaInitialSal=medByName(asthmaCase,'Salbutamol (ilk basamak)');
const asthmaInitialIpr=medByName(asthmaCase,'İpratropium bromür (ağır ilk basamak)');
const asthmaRepeat=medByName(asthmaCase,'Salbutamol + İpratropium (20 dk sonrası)');
if(!(JSON.stringify(asthmaCase?.criticalActions||[])+JSON.stringify(asthmaCase?.quick||[])).includes('>%93'))err('Astım resmî SpO2 >%93 hedefi eksik');
if(asthmaInitialSal?.authority!=='DIRECT'||!(asthmaInitialSal?.routes||[]).includes('INHALER')||!(asthmaInitialSal?.routes||[]).includes('NEB'))err('Astım ilk salbutamol INHALER/NEB + DIRECT olmalı');
if(asthmaInitialIpr?.authority!=='DIRECT'||!(asthmaInitialIpr?.routes||[]).includes('NEB'))err('Astım ağır ilk ipratropium NEB + DIRECT olmalı');
if(asthmaRepeat?.authority!=='SKKM'||!String(asthmaRepeat?.repeat||'').includes('20 dk')||!String(asthmaRepeat?.maxDose||'').includes('3'))err('Astım 20 dk tekrar bronkodilatör basamağı SKKM / maks 3 olmalı');
if(medByName(asthmaCase,'Metilprednizolon')?.authority!=='SKKM'||medByName(asthmaCase,'Magnezyum sülfat')?.authority!=='SKKM')err('Astım steroid/magnezyum SKKM olmalı');
if((asthmaCase?.meds||[]).some(m=>String(m.name).toLocaleLowerCase('tr-TR').includes('adrenalin')))err('Yetişkin astım algoritmasında adrenalin ilaç kartı bulunmamalı');

const acsCase=(CASES||[]).find(c=>c.id==='acs'), nitrate=medByName(acsCase,'İzosorbid dinitrat');
if(!String(nitrate?.repeat||'').includes('3–5 dk')||!String(nitrate?.maxDose||'').includes('3 doz'))err('AKS nitrat tekrar/maksimum doz bilgisi eksik');

const tachyCase=(CASES||[]).find(c=>c.id==='tachycardia');
if(tachyCase?.title!=='Nabızlı Taşikardi'||tachyCase?.page!=='17')err('Nabızlı Taşikardi başlık/sayfa sabiti bozuldu');
const tachyText=JSON.stringify([tachyCase?.quick,tachyCase?.decision]);
for(const required of ['dar düzenli 100 J','dar düzensiz 200 J','geniş düzenli 100 J','defibrilasyon dozu'])if(!tachyText.includes(required))err(`Taşikardi enerji bilgisi eksik: ${required}`);
if(medByName(tachyCase,'Amiodaron')?.dose!=='150 mg'||!String(medByName(tachyCase,'Amiodaron')?.repeat||'').includes('10 dakika'))err('Taşikardi amiodaron 150 mg / 10 dk sabiti bozuldu');

const arrestCase=(CASES||[]).find(c=>c.id==='cardiac-arrest');
const arrestText=JSON.stringify([arrestCase?.quick,arrestCase?.meds]);
for(const forbidden of ['Atropin 3 mg','NaHCO₃ 1 mEq/kg'])if(arrestText.includes(forbidden))err(`2026 arrest algoritmasında kaldırılmış içerik var: ${forbidden}`);

if(roscCase?.page!=='23'||!JSON.stringify(roscCase).includes('MAP ≥65 mmHg')||!JSON.stringify(roscCase).includes('32–37,5°C'))err('Resüsitasyon Sonrası Bakım sayfa/hedef sabitleri bozuldu');

const hypoCase=(CASES||[]).find(c=>c.id==='hypoglycemia');
if(hypoCase?.page!=='31'||medByName(hypoCase,'Dekstroz')?.authority!=='DIRECT'||!String(medByName(hypoCase,'Dekstroz')?.repeat||'').includes('5–10 dk')||!JSON.stringify(hypoCase).includes('15 dk'))err('Hipoglisemi sayfa/15 dk oral tekrar/dekstroz sabitleri bozuldu');

if(strokeCase?.page!=='32'||!JSON.stringify(strokeCase).includes('BEFAST')||!JSON.stringify(strokeCase).includes('%94–98')||!JSON.stringify(strokeCase).includes('30°'))err('İnme / SVO sayfa/BEFAST/O2/30° sabitleri bozuldu');
if(seizureCase?.page!=='33'||medByName(seizureCase,'Valproik asit')?.dose!=='40 mg/kg'||medByName(seizureCase,'Levetirasetam')?.dose!=='60 mg/kg')err('Nöbet sayfa/2026 ikinci basamak dozları bozuldu');

const burnCase=(CASES||[]).find(c=>c.id==='burn');
if(!JSON.stringify(burnCase?.quick||[]).includes('(2 × VYA% × kg) / 16 mL/saat'))err('Yanık Parkland/Ringer Laktat 2026 formülü eksik');
if(medByName(burnCase,'Fentanil')?.dose!=='1 mcg/kg'||medByName(burnCase,'Fentanil')?.authority!=='SKKM')err('Yanık fentanil doz/yetki sabiti bozuldu');

const adultAuditCases=(CASES||[]).filter(c=>c.population==='adult');
if(adultAuditCases.length!==25)err('Yetişkin kütüphanesi 25 doğrulanmış vaka olmalı');
for(const c of adultAuditCases)if(!['2026-09-21','2026-09-22'].includes(c.source?.reviewedAt))err(`${c.id}: beklenmeyen reviewedAt ${c.source?.reviewedAt}`);
for(const c of adultAuditCases)for(const m of (c.meds||[]))if(!['DIRECT','SKKM'].includes(m.authority))err(`${c.id}/${m.name}: yetişkin ilaç yetkisi telefon simgesi auditinden sonra DIRECT veya SKKM olmalı`);

const bradyCase=(CASES||[]).find(c=>c.id==='bradycardia');
if(medByName(bradyCase,'Dopamin')?.authority!=='SKKM'||medByName(bradyCase,'Adrenalin')?.authority!=='SKKM')err('Bradikardi dopamin/adrenalin SKKM telefon simgesiyle eşleşmiyor');

for(const name of ['Adrenalin','Amiodaron','Lidokain'])if(medByName(arrestCase,name)?.authority!=='DIRECT')err(`Kardiyak Arrest ${name} telefon simgesiz/doğrudan olmalı`);
if(!String(medByName(arrestCase,'Lidokain')?.repeat||'').includes('0,5–0,75 mg/kg'))err('Arrest 5. şok sonrası lidokain tekrar dozu eksik');

if(!['%0,9 NaCl','Adrenalin','Dopamin','Amiodaron','Lidokain'].every(name=>medByName(roscCase,name)?.authority==='SKKM'))err('ROSC telefon simgeli ilaçların tamamı SKKM olmalı');
if(!JSON.stringify(roscCase).includes('2–10 mcg/dk')||!JSON.stringify(roscCase).includes('5–20 mcg/kg/dk'))err('ROSC hipotansiyon adrenalin/dopamin basamağı eksik');

if(seizureCase?.title!=='Nöbet / Konvülziyon')err('SB-ASH-Y-19 resmî başlığı Nöbet / Konvülziyon olmalı');
for(const name of ['Diazepam','Midazolam','Fenitoin','Valproik asit','Levetirasetam'])if(medByName(seizureCase,name)?.authority!=='SKKM')err(`Nöbet ${name} SKKM telefon simgesiyle eşleşmiyor`);
if(!String(medByName(seizureCase,'Fenitoin')?.note||'').includes('25 mg/kg/dk'))err('Fenitoin resmî maksimum infüzyon hızı notu eksik');
if(!JSON.stringify(seizureCase).includes('5 dk sonra'))err('Nöbet 5 dk benzodiazepin tekrar basamağı eksik');

const airwayCase=(CASES||[]).find(c=>c.id==='airway');
if(airwayCase?.title!=='Hava Yolu Tıkanıklıkları'||airwayCase?.page!=='8')err('Hava Yolu Tıkanıklıkları resmî başlık/sayfa bozuldu');
if(asthmaCase?.title==='Astım Atağı')err('Astım resmî başlığı eski kaldı');
if(bradyCase?.title!=='Bradikardi'||bradyCase?.page!=='16')err('Bradikardi resmî başlık/sayfa bozuldu');
if(JSON.stringify(arrestCase?.source?.algorithmCodes)!==JSON.stringify(['SB-ASH-Y-09','SB-ASH-Y-10','SB-ASH-Y-11'])||arrestCase?.page!=='18–22')err('Kardiyak Arrest Y-09/Y-10/Y-11 kaynak izi bozuldu');
const drowningCase=(CASES||[]).find(c=>c.id==='drowning');
if(!String(drowningCase?.criticalActions?.[0]||'').includes('suya girme')||!String(drowningCase?.criticalActions?.[0]||'').includes('at-çek-uzat'))err('Suda Boğulma at-çek-uzat güvenlik kuralı eksik');
const hypothermiaCase=(CASES||[]).find(c=>c.id==='hypothermia');
if(!hypothermiaCase?.source?.algorithmCodes?.includes('SB-ASH-Y-25')||!JSON.stringify(hypothermiaCase).includes('60 sn'))err('Hipotermi Y-25/60 sn kaynak izi eksik');
if(burnCase?.title!=='Termal Yanık'||burnCase?.page!=='50'||burnCase?.source?.page!=='48–50'||!JSON.stringify(burnCase).includes('1 saatten kısa nakilde 500 mL'))err('Termal Yanık başlık/sayfa/kısa nakil sıvı basamağı bozuldu');
const traumaCase=(CASES||[]).find(c=>c.id==='trauma');
if(traumaCase?.title!=='Travmalı Hastada Acil Olgu Yönetimi'||traumaCase?.code!=='SB-ASH-Y-38'||traumaCase?.page!=='67'||!traumaCase?.source?.algorithmCodes?.includes('SB-ASH-Y-38')||!traumaCase?.source?.algorithmCodes?.includes('SB-ASH-Y-02'))err('Travma Y-38/Y-02 başlık-kod-sayfa kaynak izi bozuldu');

const koahCase=(CASES||[]).find(c=>c.id==='koah');
if(koahCase?.code!=='SB-ASH-Y-04'||koahCase?.page!=='10'||koahCase?.source?.page!=='9–10')err('KOAH Y-04 kaynak izi bozuldu');
if(!JSON.stringify(koahCase).includes('%88–92'))err('KOAH SpO2 %88–92 hedefi eksik');
if(medByName(koahCase,'Salbutamol (ilk basamak)')?.authority!=='DIRECT'||medByName(koahCase,'İpratropium bromür (ilk basamak)')?.authority!=='DIRECT')err('KOAH ilk bronkodilatörler DIRECT olmalı');
const koahRepeat=medByName(koahCase,'Salbutamol + İpratropium (20 dk sonrası)');
if(koahRepeat?.authority!=='SKKM'||!String(koahRepeat?.repeat||'').includes('20 dk')||!String(koahRepeat?.maxDose||'').includes('3'))err('KOAH 20 dk tekrar basamağı SKKM/maks 3 olmalı');
if(medByName(koahCase,'Metilprednizolon')?.dose!=='40 mg'||medByName(koahCase,'Metilprednizolon')?.authority!=='SKKM')err('KOAH metilprednizolon 40 mg SKKM olmalı');
if(!JSON.stringify(koahCase).includes('SKKM/ÇM ile ileri hava yolu')||!JSON.stringify(koahCase).includes('non-invaziv mekanik ventilasyonu'))err('Y-04 yanıtsız ağır KOAH telefon simgeli ileri hava yolu/NIMV basamağı eksik');

const hypovolemicCase=(CASES||[]).find(c=>c.id==='hypovolemic-shock');
if(hypovolemicCase?.code!=='SB-ASH-Y-13'||hypovolemicCase?.page!=='24'||hypovolemicCase?.source?.page!=='24')err('Hipovolemik Şok Y-13/s.24 kaynak izi bozuldu');
if(!JSON.stringify(hypovolemicCase).includes('80–90 mmHg')||!JSON.stringify(hypovolemicCase).includes('MAP 65–70 mmHg'))err('Hipovolemik Şok SKB/MAP hedefleri eksik');
if(medByName(hypovolemicCase,'Kristalloid — hemorajik şok')?.authority!=='DIRECT'||medByName(hypovolemicCase,'Kristalloid — non-hemorajik şok')?.authority!=='DIRECT')err('Hipovolemik Şok kristalloid basamakları DIRECT olmalı');
if(medByName(hypovolemicCase,'Adrenalin')?.authority!=='SKKM'||medByName(hypovolemicCase,'Dopamin')?.authority!=='SKKM')err('Hipovolemik Şok vazopressör basamağı SKKM olmalı');

const heartFailureCase=(CASES||[]).find(c=>c.id==='acute-heart-failure-cardiogenic-shock');
if(heartFailureCase?.code!=='SB-ASH-Y-14'||heartFailureCase?.page!=='26'||heartFailureCase?.source?.page!=='25–26')err('Y-14 kaynak izi bozuldu');
if(!JSON.stringify(heartFailureCase).includes('%94–98'))err('Y-14 SpO2 %94–98 hedefi eksik');
for(const name of ['Furosemid','İzosorbid dinitrat','%0,9 NaCl','Dopamin'])if(medByName(heartFailureCase,name)?.authority!=='SKKM')err(`Y-14 ${name} SKKM telefon simgesiyle eşleşmiyor`);
if(medByName(heartFailureCase,'Furosemid')?.dose!=='20–40 mg'||medByName(heartFailureCase,'İzosorbid dinitrat')?.dose!=='5 mg'||medByName(heartFailureCase,'Dopamin')?.dose!=='2–5 mcg/kg/dk'||medByName(heartFailureCase,'Dopamin')?.maxDose!=='20 mcg/kg/dk')err('Y-14 ilaç doz sabitlerinden biri bozuldu');

const consciousnessCase=(CASES||[]).find(c=>c.id==='altered-consciousness');
if(consciousnessCase?.code!=='SB-ASH-Y-16'||consciousnessCase?.page!=='30'||consciousnessCase?.source?.page!=='29–30'||(consciousnessCase?.meds||[]).length)err('Bilinç Değişikliği Y-16 kaynak/ilaç yapısı bozuldu');
for(const term of ['Travmalı Hastada Acil Olgu Yönetimi','İnme / SVO','Nöbet / Konvülziyon','Zehirlenmelere Genel Yaklaşım','Diyabetik Aciller'])if(!JSON.stringify(consciousnessCase).includes(term))err(`Bilinç Değişikliği yönlendirmesi eksik: ${term}`);

const agitatedCase=(CASES||[]).find(c=>c.id==='agitated-patient');
if(agitatedCase?.code!=='SB-ASH-Y-15'||agitatedCase?.page!=='28'||agitatedCase?.source?.page!=='27–28')err('Ajite Hastaya Yaklaşım Y-15 kaynak izi bozuldu');
if(medByName(agitatedCase,'Midazolam')?.authority!=='SKKM'||medByName(agitatedCase,'Midazolam')?.dose!=='5 mg IM veya 2,5 mg IV')err('Y-15 midazolam doz/yetki sabiti bozuldu');
if(medByName(agitatedCase,'Diazepam')?.authority!=='SKKM'||medByName(agitatedCase,'Diazepam')?.dose!=='5 mg'||!String(medByName(agitatedCase,'Diazepam')?.repeat||'').includes('20 dk'))err('Y-15 diazepam doz/20 dk tekrar/yetki sabiti bozuldu');
if(!JSON.stringify(agitatedCase).includes('kolluk'))err('Y-15 kolluk desteği basamağı eksik');

const vertigoCase=(CASES||[]).find(c=>c.id==='vertigo');
if(vertigoCase?.code!=='SB-ASH-Y-20'||vertigoCase?.page!=='34'||vertigoCase?.source?.page!=='34'||(vertigoCase?.meds||[]).length)err('Vertigo Y-20 kaynak/ilaç yapısı bozuldu');
for(const term of ['BEFAST','vertikal','pür torsiyonel','Bağımsız ayakta duramama','İnme / SVO'])if(!JSON.stringify(vertigoCase).includes(term))err(`Y-20 Vertigo ana karar öğesi eksik: ${term}`);

const allergicCase=(CASES||[]).find(c=>c.id==='allergic-reaction');
if(allergicCase?.code!=='SB-ASH-Y-21'||allergicCase?.page!=='35'||allergicCase?.source?.page!=='35')err('Alerjik Reaksiyon Y-21 kaynak izi bozuldu');
if(medByName(allergicCase,'%0,9 NaCl')?.authority!=='DIRECT'||medByName(allergicCase,'%0,9 NaCl')?.dose!=='500 mL')err('Y-21 NaCl 500 mL DIRECT sabiti bozuldu');
if(medByName(allergicCase,'Feniramin maleat veya Difenhidramin')?.authority!=='SKKM'||medByName(allergicCase,'Feniramin maleat veya Difenhidramin')?.dose!=='45,5 mg / 25–50 mg')err('Y-21 antihistaminik doz/yetki sabiti bozuldu');
if(medByName(allergicCase,'Metilprednizolon')?.authority!=='SKKM'||medByName(allergicCase,'Metilprednizolon')?.dose!=='1–2 mg/kg'||medByName(allergicCase,'Metilprednizolon')?.maxDose!=='125 mg')err('Y-21 metilprednizolon sabiti bozuldu');
if(!JSON.stringify(allergicCase).includes('Anafilaksi algoritmasına geç'))err('Y-21 hayatı tehdit eden bulguda Anafilaksi geçişi eksik');

const hypothermicArrestCase=(CASES||[]).find(c=>c.id==='hypothermic-arrest');
if(hypothermicArrestCase?.code!=='SB-ASH-Y-25'||hypothermicArrestCase?.page!=='43'||hypothermicArrestCase?.source?.page!=='42–43'||(hypothermicArrestCase?.meds||[]).length)err('Hipotermide Arrest Y-25 kaynak/ilaç yapısı bozuldu');
for(const term of ['60 sn','<28°C: 5 dk KPR / 5 dk KPR\'siz','<20°C: 5 dk KPR / 10 dk KPR\'siz','<30°C','≥35°C','ECMO'])if(!JSON.stringify(hypothermicArrestCase).includes(term))err(`Y-25 hipotermi arrest kuralı eksik: ${term}`);

for(const [i,c] of (CASES||[]).entries()){
  const at=`CASES[${i}] ${c?.id||'(id yok)'}`;
  for(const f of ['id','title','subtitle','category','population','summary','code','page','clinicalStatus'])if(!c?.[f])err(`${at}: ${f} eksik`);
  if(!['critical','high','standard'].includes(c.uiPriority))err(`${at}: uiPriority geçersiz`);
  if(typeof c.uiFeatured!=='boolean')err(`${at}: uiFeatured boolean olmalı`);
  if('priority' in c||'featured' in c||'first30' in c||'redFlags' in c)err(`${at}: eski UI veri alanları kullanılmamalı`);
  if(ids.has(c.id))err(`${at}: duplicate id`);ids.add(c.id);
  if(!allowedPop.has(c.population))err(`${at}: geçersiz population ${c.population}`);
  if(c.clinicalStatus!=='reviewed')warn(`${at}: clinicalStatus reviewed değil`);
  if(!Array.isArray(c.criticalActions)||c.criticalActions.length<2||c.criticalActions.length>5)err(`${at}: criticalActions 2-5 madde olmalı`);
  if(!Array.isArray(c.quick)||c.quick.length<2)err(`${at}: quick eksik`);
  if(!Array.isArray(c.warningFindings)||!c.warningFindings.length)err(`${at}: warningFindings eksik`);
  if(!c.decision?.q||!c.decision?.yes||!c.decision?.no)err(`${at}: decision eksik`);
  const s=c.source;
  if(!s?.documentId||!s?.effectiveDate||!s?.reviewedAt||!s?.officialPageUrl||!s?.officialPdfUrl||!s?.page)err(`${at}: kaynak izi eksik`);
  if(s?.effectiveDate!=='2026-08-25')warn(`${at}: beklenmeyen effectiveDate ${s?.effectiveDate}`);
  for(const [mi,m] of (c.meds||[]).entries()){
    const mt=`${at} meds[${mi}]`;
    if(!m.name||!m.dose)err(`${mt}: ad/doz eksik`);
    if(!allowedAuthority.has(m.authority))err(`${mt}: authority geçersiz (${m.authority})`);
    if(!Array.isArray(m.routes)||!m.routes.length)err(`${mt}: routes eksik`);
    for(const route of m.routes||[])if(!allowedRoutes.has(route))err(`${mt}: geçersiz route ${route}`);
    const doseText=String(m.dose||'');const doseLower=doseText.toLocaleLowerCase('tr-TR');const nonNumericInfusion=doseLower.includes('infüzyon');
    if(!/[0-9%]/.test(doseText)&&!nonNumericInfusion)warn(`${mt}: doz sayısal birim içermiyor (${m.dose})`);
    if(/[0-9]\s*(mg|mcg|g|ml|mL)/i.test(doseText)===false&&!nonNumericInfusion&&!doseText.includes('%'))warn(`${mt}: doz birimi gözden geçir (${m.dose})`);
  }
}

try{
  const html=read('index.html');
  const htmlIds=[...html.matchAll(/\sid=["']([^"']+)["']/g)].map(m=>m[1]);
  const dup=htmlIds.filter((id,i)=>htmlIds.indexOf(id)!==i);if(dup.length)err(`index.html duplicate id: ${[...new Set(dup)].join(', ')}`);
  const localRefs=[...html.matchAll(/(?:src|href)=["']\.\/([^"'#?]+)["']/g)].map(m=>m[1]);
  for(const ref of new Set(localRefs))if(!fs.existsSync(path.join(root,ref)))err(`index.html yerel referans eksik: ${ref}`);
}catch(e){err(`index.html doğrulama hatası: ${e.message}`)}

try{
  const manifest=JSON.parse(read('manifest.webmanifest'));
  if(!manifest.start_url||!manifest.scope)err('manifest start_url/scope eksik');
  for(const icon of manifest.icons||[]){const p=String(icon.src||'').replace(/^\.\//,'');if(!fs.existsSync(path.join(root,p)))err(`manifest icon eksik: ${p}`)}
}catch(e){err(`manifest JSON hatası: ${e.message}`)}

try{
  const sw=read('sw.js');
  for(const f of ['index.html','styles.css','cases-data.js','app-core.js','manifest.webmanifest','icon.svg'])if(!sw.includes(`./${f}`))err(`sw.js CORE içinde eksik: ${f}`);
}catch(e){err(`sw.js doğrulama hatası: ${e.message}`)}

console.log(`Saha112 QA: ${CASES?.length||0} vaka, ${errors.length} hata, ${warnings.length} uyarı`);
for(const w of warnings)console.warn(`WARN ${w}`);
for(const e of errors)console.error(`ERROR ${e}`);
if(errors.length)process.exit(1);
