import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const root=process.cwd();
const errors=[];const warnings=[];
const err=m=>errors.push(m);const warn=m=>warnings.push(m);
const read=f=>fs.readFileSync(path.join(root,f),'utf8');

const required=['index.html','styles.css','cases-data.js','app-core.js','manifest.webmanifest','sw.js','icon.svg','icon-192.png','icon-512.png','apple-touch-icon.png'];
for(const f of required)if(!fs.existsSync(path.join(root,f)))err(`Eksik dosya: ${f}`);

let APP_META,CASES,PROTOCOLS;
try{
  const code=read('cases-data.js')+'\n;globalThis.__meta=APP_META;globalThis.__cases=CASES;globalThis.__protocols=typeof PROTOCOLS!=="undefined"?PROTOCOLS:[];';
  const box={};vm.createContext(box);vm.runInContext(code,box,{timeout:1000});APP_META=box.__meta;CASES=box.__cases;PROTOCOLS=box.__protocols;
}catch(e){err(`cases-data.js okunamadı: ${e.message}`)}

if(APP_META){
  if(APP_META.schemaVersion!==5)err('APP_META.schemaVersion 5 olmalı');
  if(!Array.isArray(APP_META.populations)||APP_META.populations.length!==3)err('3 population tanımı bekleniyor');
}
if(!Array.isArray(CASES)||!CASES.length)err('CASES boş veya dizi değil');
if(!Array.isArray(PROTOCOLS)||PROTOCOLS.length!==2)err('PROTOCOLS tam olarak 2 doğrulanmış temel protokol içermeli');
const sceneProtocol=(PROTOCOLS||[]).find(p=>p.id==='scene-management');
if(!sceneProtocol||sceneProtocol.title!=='Olay Yeri Yönetimi'||sceneProtocol.code!=='SB-ASH-Y-01'||sceneProtocol.page!=='5')err('Y-01 Olay Yeri Yönetimi temel protokolü eksik veya kaynak izi bozuk');
if(sceneProtocol?.population!=='adult'||sceneProtocol?.clinicalStatus!=='reviewed'||sceneProtocol?.source?.reviewedAt!=='2026-09-23'||sceneProtocol?.source?.effectiveDate!=='2026-08-25')err('Y-01 protokol nüfus/inceleme/yürürlük metası bozuk');
const sceneFlow=sceneProtocol?.flow||[];
if(sceneFlow.length!==7)err('Y-01 olay yeri akışı 7 yapılandırılmış öğe içermeli');
for(const phrase of ['SKKM/ÇM ile iletişime geç','Gerekli kişisel koruyucu malzemelerini kullan','Olay yeri güvenliği var mı?','Hasta/Yaralı güvenliği var mı?','olabilecek vaka sayısını','triyaj yap','İhtiyaç duyulan ekip ve ekipmanı iste','Acil Olgu Yönetimi algoritmasına geç'])if(!JSON.stringify(sceneProtocol).includes(phrase))err(`Y-01 resmî akış öğesi eksik: ${phrase}`);
if(sceneFlow.filter(x=>x.skkmContact||x.noSkkmContact).length!==2)err('Y-01 resmî SKKM/ÇM telefon simgesi iki yerde yapılandırılmalı');
if(sceneFlow.some(x=>x.practitionerAuthority&&x.practitionerAuthority!=='ATT_AABT'))err('Y-01 uygulayıcı basamaklarında turuncu AABT kısıtı olmamalı');
if(sceneFlow.at(-1)?.type!=='transition'||sceneFlow.at(-1)?.targetCode!=='SB-ASH-Y-02')err('Y-01 sonu Acil Olgu Yönetimi SB-ASH-Y-02 geçişi olmalı');
if(sceneFlow.at(-1)?.targetProtocolId!=='emergency-case-management')err('Y-01 → Y-02 tek dokunuş protokol geçişi eksik');
const emergencyProtocol=(PROTOCOLS||[]).find(p=>p.id==='emergency-case-management');
if(!emergencyProtocol||emergencyProtocol.order!==2||emergencyProtocol.title!=='Acil Olgu Yönetimi'||emergencyProtocol.code!=='SB-ASH-Y-02'||emergencyProtocol.page!=='6–7')err('Y-02 Acil Olgu Yönetimi temel protokolü eksik veya kaynak izi bozuk');
if(emergencyProtocol?.population!=='adult'||emergencyProtocol?.clinicalStatus!=='reviewed'||emergencyProtocol?.source?.reviewedAt!=='2026-09-23'||emergencyProtocol?.source?.effectiveDate!=='2026-08-25')err('Y-02 protokol nüfus/inceleme/yürürlük metası bozuk');
const emergencyFlow=emergencyProtocol?.flow||[];
if(emergencyFlow.length!==8)err('Y-02 Acil Olgu Yönetimi akışı 8 yapılandırılmış öğe içermeli');
for(const phrase of ['Olay yeri güvenli mi?','Gerekli tüm ekipmanları al','Ekip ve Malzeme Yerleşimi','Birincil Değerlendirme','XABCDE','İkincil Değerlendirme','Ön tanıyı belirle','Ön tanıya göre ilgili algoritmaya git','Yeniden değerlendir'])if(!JSON.stringify(emergencyProtocol).includes(phrase))err(`Y-02 resmî akış öğesi eksik: ${phrase}`);
if(emergencyFlow.some(x=>x.skkmContact||x.noSkkmContact))err('Y-02 ana algoritmasında SKKM/ÇM telefon simgesi olmamalı');
if(emergencyFlow.some(x=>x.practitionerAuthority&&x.practitionerAuthority!=='ATT_AABT'))err('Y-02 uygulayıcı basamaklarında turuncu AABT kısıtı olmamalı');
if(emergencyFlow[0]?.yes!=='Gerekli ekipmanları alma basamağına geç.'||emergencyFlow[0]?.noTargetProtocolId!=='scene-management')err('Y-02 güvenlik kararı kısa yönlendirme / Y-01 geri dönüşü bozuk');
if(!emergencyFlow.some(x=>x.type==='transition'&&x.targetAction==='cases'))err('Y-02 ön tanı sonrası vaka algoritmaları kısayolu eksik');
const keyPointGroups=emergencyProtocol?.keyPoints||[];
if(keyPointGroups.length!==2||keyPointGroups.find(g=>g.id==='sample')?.items?.length!==6||keyPointGroups.find(g=>g.id==='xabcde')?.items?.length!==6)err('Y-02 SAMPLE/XABCDE hızlı hatırlatma grupları eksik');
for(const term of ['Belirtiler ve Bulgular','Alerjiler / Kötü Alışkanlıklar','Kullanılan İlaçlar','Tıbbi Özgeçmiş','Son İlaç-Gıda Alımı / Son Adet Tarihi','Çağrı Gerektiren Durum','Hayatı tehdit eden kanamaları tanı ve müdahale et','Hava yolu açıklığının kontrolünü sağla','Solunum desteği kontrolünü sağla','Dolaşım desteği kontrolünü sağla','Kısa nörolojik muayene','Hastanın kıyafetlerini çıkar, genel görünümünü kontrol et'])if(!JSON.stringify(emergencyProtocol).includes(term))err(`Y-02 Anahtar Noktalar öğesi eksik: ${term}`);
if(!['SB-ASH-Y-01','SB-ASH-Y-02'].every(code=>APP_META?.adultCoverage?.foundationalProtocols?.includes(code))||APP_META?.adultCoverage?.foundationalProtocolPending!==null||APP_META?.adultCoverage?.coveredAlgorithmRange!=='SB-ASH-Y-01–Y-41')err('Y-01/Y-02 temel protokol kapsam metası güncel değil');

const roscCase=(CASES||[]).find(c=>c.code==='SB-ASH-Y-12');
if(!roscCase)err('SB-ASH-Y-12 Resüsitasyon Sonrası Bakım vakası eksik');
else{
  if(roscCase.title!=='Resüsitasyon Sonrası Bakım')err('SB-ASH-Y-12 resmî başlığı "Resüsitasyon Sonrası Bakım" olmalı');
  if(!String(roscCase.subtitle||'').includes('ROSC')||!String(roscCase.subtitle||'').toLocaleLowerCase('tr-TR').includes('spontan dolaşım'))err('SB-ASH-Y-12 kullanıcı açıklaması ROSC ve spontan dolaşımı açıklamalı');
}
if(roscCase?.decisionIntegrated!==true||(roscCase?.algorithmSteps||[]).length!==1||(roscCase?.algorithmBranches||[]).length!==6)err('Y-12 ROSC yapılandırılmış ortak adım / 6 resmî üst kol / entegre karar yapısı eksik');
const roscHypo=(roscCase?.algorithmBranches||[]).find(b=>String(b.label).startsWith('Hipotansiyon'));
const roscEctopy=(roscCase?.algorithmBranches||[]).find(b=>String(b.label).startsWith('Ventriküler ektopi'));
if(roscHypo?.steps?.[0]?.approvalAuthority!=='DIRECT'||roscHypo?.steps?.[0]?.practitionerAuthority!=='ATT_AABT')err('Y-12 hipotansiyon neden araştırma basamağı turkuaz/DIRECT olmalı');
if(roscHypo?.steps?.[1]?.approvalAuthority!=='SKKM'||roscHypo?.steps?.[1]?.practitionerAuthority!=='AABT'||!String(roscHypo?.steps?.[1]?.html||'').includes('adrenalin 2–10 mcg/dk')||!String(roscHypo?.steps?.[1]?.html||'').includes('dopamin 5–20 mcg/kg/dk'))err('Y-12 hipotansiyon ilaç basamağı SKKM + AABT ve doğru dozlarda olmalı');
if(roscEctopy?.steps?.[0]?.approvalAuthority!=='SKKM'||roscEctopy?.steps?.[0]?.practitionerAuthority!=='AABT'||!String(roscEctopy?.steps?.[0]?.html||'').includes('lidokain 1–1,5 mg/kg')||!String(roscEctopy?.steps?.[0]?.html||'').includes('amiodaron 150 mg'))err('Y-12 ventriküler ektopi ilaç basamağı SKKM + AABT olmalı');
for(const label of ['Bradiaritmi','Hipo / Hiperglisemi','Taşiaritmi','Nöbet']){const b=(roscCase?.algorithmBranches||[]).find(x=>x.label===label);if(!b||b.steps?.[0]?.approvalAuthority!=='DIRECT'||b.steps?.[0]?.practitionerAuthority!=='ATT_AABT')err(`Y-12 yönlendirme kolu bozuk: ${label}`);}
if((roscCase?.algorithmBranches||[]).some(b=>b.label==='Arrest tekrarı'))err('Y-12 arrest tekrarı bağımsız üst dal olmamalı');
if((roscCase?.algorithmAfter||[]).length!==1||roscCase?.algorithmAfter?.[0]?.label!=='Arrest tekrar ederse'||roscCase?.algorithmAfter?.[0]?.approvalAuthority!=='DIRECT'||roscCase?.algorithmAfter?.[0]?.practitionerAuthority!=='ATT_AABT'||!String(roscCase?.algorithmAfter?.[0]?.html||'').includes('İlgili ritim algoritmasına git'))err('Y-12 arrest tekrarı resmî alt sonuç/geçiş yapısında olmalı');


const ids=new Set();const allowedAuthority=new Set(['DIRECT','SKKM','ALGORITHM']);const allowedPractitionerAuthority=new Set(['ATT_AABT','AABT','UNVERIFIED']);const allowedRoutes=new Set(APP_META?.routes||[]);const allowedPop=new Set((APP_META?.populations||[]).map(p=>p.id));
if(APP_META?.routeLabels?.NEB!=='Nebülizasyon')err('NEB kullanıcı etiketi Nebülizasyon olmalı');
if(!APP_META?.routes?.includes('INHALER')||APP_META?.routeLabels?.INHALER!=='İnhaler')err('INHALER/İnhaler yol tanımı eksik');
if(!APP_META?.routes?.includes('SC')||APP_META?.routeLabels?.SC!=='Subkutan (SC)')err('SC/Subkutan yol tanımı eksik');
if(APP_META?.authority?.DIRECT?.symbol!=='✓'||APP_META?.authority?.DIRECT?.visualLabel!=='SKKM/ÇM onayı gerektirmez')err('DIRECT yeşil/doğrudan sembol metası eksik');
if(APP_META?.authority?.SKKM?.symbol!=='◆'||APP_META?.authority?.SKKM?.visualLabel!=='SKKM/ÇM onayı gerekli')err('SKKM sarı/onay sembol metası eksik');
if(APP_META?.authority?.ALGORITHM?.symbol!=='•'||APP_META?.authority?.ALGORITHM?.visualLabel!=='Kaynakta SKKM/ÇM yetkisi belirtilmemiş')err('ALGORITHM kaynakta belirtilmeyen yetki metası eksik');
if(APP_META?.contentVersion!=='EK2-2026.08.25-structured-flow-audit-fix-1-2026.09.24')err('contentVersion V0.42 yapılandırılmış akış audit-düzeltme sürümüyle eşleşmiyor');
if(APP_META?.productVersion!=='0.42')err('productVersion V0.42 olmalı');
if(APP_META?.practitionerAuthority?.ATT_AABT?.officialLabel!=='Acil Tıp Teknisyeni / Teknikeri'||APP_META?.practitionerAuthority?.AABT?.officialLabel!=='Acil Tıp Teknikeri'||APP_META?.practitionerAuthority?.UNVERIFIED?.symbol!=='□')err('ATT/AABT uygulayıcı yetki metası eksik veya bozuk');
for(const code of ['SB-ASH-Y-04','SB-ASH-Y-05','SB-ASH-Y-06','SB-ASH-Y-07','SB-ASH-Y-08','SB-ASH-Y-09','SB-ASH-Y-10','SB-ASH-Y-11','SB-ASH-Y-12','SB-ASH-Y-13','SB-ASH-Y-14','SB-ASH-Y-15','SB-ASH-Y-17','SB-ASH-Y-19','SB-ASH-Y-21','SB-ASH-Y-22','SB-ASH-Y-23','SB-ASH-Y-24','SB-ASH-Y-28','SB-ASH-Y-29','SB-ASH-Y-34','SB-ASH-Y-35','SB-ASH-Y-36','SB-ASH-Y-37','SB-ASH-Y-39','SB-ASH-Y-40'])if(!APP_META?.practitionerAudit?.verifiedMedicationCases?.includes(code))err(`Uygulayıcı yetki görsel audit izi eksik: ${code}`);
if(APP_META?.practitionerAudit?.adultMedicationCardsComplete!==true)err('Yetişkin ilaç kartları uygulayıcı audit tamamlama işareti eksik');
if(APP_META?.clinicalAudit?.scope?.includes('21 yetişkin')||APP_META?.integrityAudit?.scope?.includes('21 yetişkin'))err('Audit metadata hâlâ eski 21 yetişkin kapsamını gösteriyor');
if(APP_META?.adultCoverage?.verifiedCaseCards!==37||APP_META?.adultCoverage?.reviewedAt!=='2026-09-23')err('37 yetişkin kapsam metası güncel değil');
for(const code of ['SB-ASH-Y-04','SB-ASH-Y-05','SB-ASH-Y-06','SB-ASH-Y-07','SB-ASH-Y-08','SB-ASH-Y-09','SB-ASH-Y-10','SB-ASH-Y-11','SB-ASH-Y-12','SB-ASH-Y-13','SB-ASH-Y-14','SB-ASH-Y-17','SB-ASH-Y-18','SB-ASH-Y-22'])if(!APP_META?.actionAudit?.verifiedCases?.includes(code))err(`Adım bazlı eylem yetki audit izi eksik: ${code}`);
for(const code of ['SB-ASH-Y-08','SB-ASH-Y-09','SB-ASH-Y-10','SB-ASH-Y-11','SB-ASH-Y-12','SB-ASH-Y-13','SB-ASH-Y-14','SB-ASH-Y-17','SB-ASH-Y-22'])if(!APP_META?.actionAudit?.verifiedBranchCases?.includes(code))err(`Dallı algoritma audit izi eksik: ${code}`);
if(APP_META?.actionAudit?.reviewedAt!=='2026-09-24')err('Adım bazlı eylem yetki audit tarihi 2026-09-24 olmalı');
if(APP_META?.medicationContentAudit?.status!=='complete'||APP_META?.medicationContentAudit?.reviewedAt!=='2026-09-23')err('Yetişkin ilaç içerik audit metası eksik');
for(const code of ['SB-ASH-Y-05','SB-ASH-Y-09','SB-ASH-Y-10','SB-ASH-Y-11','SB-ASH-Y-22','SB-ASH-Y-23','SB-ASH-Y-29','SB-ASH-Y-40'])if(!APP_META?.medicationContentAudit?.correctedCases?.includes(code))err(`İlaç içerik audit düzeltme izi eksik: ${code}`);
if(!APP_META?.medicationContentAudit?.sourceUnspecifiedAuthorityItems?.includes('SB-ASH-Y-40/Midazolam'))err('Y-40 Midazolam kaynakta yetki kodlaması yok izi eksik');
if(APP_META?.actionAudit?.pilot!==true)err('Adım bazlı eylem yetki katmanı pilot/incremental işareti eksik');
const strokeCase=(CASES||[]).find(c=>c.id==='stroke');
if(!strokeCase||strokeCase.title!=='İnme / SVO')err('İnme / SVO başlığı korunmalı');
if(strokeCase?.code!=='SB-ASH-Y-18'||strokeCase?.page!=='32'||strokeCase?.source?.page!=='32'||strokeCase?.source?.reviewedAt!=='2026-09-24')err('Y-18 kaynak izi bozuldu');
if(strokeCase?.decisionIntegrated!==true||(strokeCase?.algorithmSteps||[]).length!==9)err('Y-18 dokuz basamaklı yapılandırılmış akış / entegre karar yapısı eksik');
for(const [idx,s] of (strokeCase?.algorithmSteps||[]).entries()){
  if(idx===8){
    if(s.approvalAuthority!=='SKKM'||s.practitionerAuthority!=='ATT_AABT')err('Y-18 uygun merkeze nakil basamağı SKKM + ATT/AABT olmalı');
  }else if(s.approvalAuthority!=='DIRECT'||s.practitionerAuthority!=='ATT_AABT')err(`Y-18 ortak basamak DIRECT + ATT/AABT olmalı: ${idx}`);
}
if((strokeCase?.algorithmSteps||[]).some(s=>s.practitionerAuthority==='AABT'))err('Y-18 resmî sayfada turuncu yalnız AABT kutusu olmamalı');
const y18Glucose=strokeCase?.algorithmSteps?.[4];
const y18BP=strokeCase?.algorithmSteps?.[7];
const y18Transport=strokeCase?.algorithmSteps?.[8];
if(!String(y18Glucose?.followUp?.label||'').includes('Glikoz <60 mg/dl')||y18Glucose?.followUp?.transition!=='DİYABETİK ACİLLER ALGORİTMASINA GİT')err('Y-18 hipoglisemi gri koşul/mavi geçişi bozuk');
if(!String(y18BP?.followUp?.notice||'').includes('tansiyonu düşürme'))err('Y-18 gri kan basıncı uyarısı eksik');
for(const required of ['Aspirasyon','%94–98','DAKŞ','BEFAST','30°','Kardiyak monitörizasyon','4,5 saat','6 saat'])if(!JSON.stringify(strokeCase).includes(required))err(`Y-18 kritik kaynak öğesi eksik: ${required}`);
if(!String(y18Transport?.html||'').includes('uygun merkeze naklet'))err('Y-18 son uygun merkez nakil basamağı eksik');

const seizureCase=(CASES||[]).find(c=>c.id==='seizure');
if(!seizureCase||seizureCase.title!=='Nöbet / Konvülziyon'||seizureCase.code!=='SB-ASH-Y-19'||seizureCase.page!=='33'||seizureCase.source?.page!=='33'||seizureCase.source?.reviewedAt!=='2026-09-24')err('Nöbet / Konvülziyon Y-19 kaynak izi bozuk');
if(seizureCase?.decisionIntegrated!==true||seizureCase?.algorithmBranchLayout!=='split'||(seizureCase?.algorithmSteps||[]).length!==5||(seizureCase?.algorithmBranches||[]).length!==2)err('Y-19 yapılandırılmış ortak akış / nöbet sonlandı-devam ediyor dalları eksik');
for(const [i,step] of (seizureCase?.algorithmSteps||[]).entries())if(step.approvalAuthority!=='DIRECT'||step.practitionerAuthority!=='ATT_AABT')err(`Y-19 ortak turkuaz basamak ATT/AABT + DIRECT olmalı: ${i}`);
const y19Glucose=seizureCase?.algorithmSteps?.[3];
if(y19Glucose?.followUp?.transition!=='DİYABETİK ACİLLER ALGORİTMASINA GİT'||!String(y19Glucose?.followUp?.label||'').includes('Glikoz <60 mg/dl'))err('Y-19 hipoglisemi gri koşul / mavi Diyabetik Aciller geçişi eksik');
if((seizureCase?.algorithmNotices||[]).length!==1||!seizureCase.algorithmNotices[0].includes('Hastayı engellemeye çalışma')||!seizureCase.algorithmNotices[0].includes('katlanmış battaniye'))err('Y-19 yaralanmayı önleme gri uyarısı eksik');
const y19Stopped=(seizureCase?.algorithmBranches||[]).find(b=>b.label==='Nöbet sonlandı');
const y19Ongoing=(seizureCase?.algorithmBranches||[]).find(b=>b.label==='Nöbet devam ediyor');
if(!y19Stopped||!y19Ongoing||(y19Stopped.steps||[]).length!==1||(y19Ongoing.steps||[]).length!==1)err('Y-19 ana sonlandı/devam ediyor dalları bozuk');
if(y19Stopped?.steps?.[0]?.approvalAuthority!=='DIRECT'||y19Stopped?.steps?.[0]?.practitionerAuthority!=='ATT_AABT'||!String(y19Stopped?.steps?.[0]?.html||'').includes('Postiktal'))err('Y-19 postiktal hava yolu turkuaz/DIRECT basamağı eksik');
if(y19Ongoing?.steps?.[0]?.approvalAuthority!=='SKKM'||y19Ongoing?.steps?.[0]?.practitionerAuthority!=='AABT'||!String(y19Ongoing?.steps?.[0]?.html||'').includes('Diazepam 5 mg IV yavaş puşe')||!String(y19Ongoing?.steps?.[0]?.html||'').includes('Midazolam 5 mg IV / 10 mg IM'))err('Y-19 ilk benzodiazepin SKKM + AABT basamağı bozuk');
const y19AfterBenzoStopped=(y19Ongoing?.branches||[]).find(b=>b.label==='İlk benzodiazepin sonrası nöbet sonlandı');
const y19AfterBenzoOngoing=(y19Ongoing?.branches||[]).find(b=>b.label==='İlk benzodiazepin sonrası nöbet devam ediyor');
if(!y19AfterBenzoStopped||!y19AfterBenzoOngoing||(y19AfterBenzoOngoing.steps||[]).length!==2)err('Y-19 benzodiazepin sonrası devam/sonlanma alt dalları eksik');
if(y19AfterBenzoOngoing?.steps?.[0]?.approvalAuthority!=='SKKM'||y19AfterBenzoOngoing?.steps?.[0]?.practitionerAuthority!=='AABT'||!String(y19AfterBenzoOngoing?.steps?.[0]?.html||'').includes('Fenitoin 20 mg/kg')||!String(y19AfterBenzoOngoing?.steps?.[0]?.html||'').includes('25 mg/kg/dk')||!String(y19AfterBenzoOngoing?.steps?.[0]?.html||'').includes('Valproik asit 40 mg/kg')||!String(y19AfterBenzoOngoing?.steps?.[0]?.html||'').includes('Levetirasetam 60 mg/kg'))err('Y-19 ikinci basamak antikonvülzan seçenekleri SKKM + AABT/doz bilgisi bozuk');
if(y19AfterBenzoOngoing?.steps?.[1]?.approvalAuthority!=='SKKM'||y19AfterBenzoOngoing?.steps?.[1]?.practitionerAuthority!=='AABT'||!String(y19AfterBenzoOngoing?.steps?.[1]?.html||'').includes('5 dk sonra')||!String(y19AfterBenzoOngoing?.steps?.[1]?.html||'').includes('Diazepam 5 mg IV yavaş puşe'))err('Y-19 5 dk sonraki benzodiazepin tekrar basamağı bozuk');
const y19FinalYes=(y19AfterBenzoOngoing?.branches||[]).find(b=>b.label==='Evet — nöbet devam ediyor');
const y19FinalNo=(y19AfterBenzoOngoing?.branches||[]).find(b=>b.label==='Hayır — nöbet sonlandı');
if(y19FinalYes?.steps?.[0]?.approvalAuthority!=='DIRECT'||y19FinalYes?.steps?.[0]?.practitionerAuthority!=='ATT_AABT'||!String(y19FinalYes?.steps?.[0]?.html||'').includes('İleri hava yolu uygulaması için hazırlan'))err('Y-19 son devam eden nöbet ileri hava yolu turkuaz basamağı eksik');
if(y19FinalNo?.steps?.[0]?.approvalAuthority!=='DIRECT'||y19FinalNo?.steps?.[0]?.practitionerAuthority!=='ATT_AABT'||!String(y19FinalNo?.steps?.[0]?.html||'').includes('Postiktal'))err('Y-19 sonlanan nöbet postiktal basamağı eksik');
if(!APP_META?.actionAudit?.verifiedCases?.includes('SB-ASH-Y-19')||!APP_META?.actionAudit?.verifiedBranchCases?.includes('SB-ASH-Y-19'))err('Y-19 actionAudit kapsamına eklenmemiş');
const beeCase=(CASES||[]).find(c=>c.id==='bee');
if(!beeCase||beeCase.severity?.mild?.label!=='Lokal reaksiyon'||beeCase.severity?.moderate?.label!=='Sistemik bulgu'||beeCase.severity?.severe?.label!=='Anafilaksi')err('Arı sokması klinik görünüm etiketleri eksik');
const medByName=(c,name)=>(c?.meds||[]).find(m=>m.name===name);
if(!beeCase?.source?.algorithmCodes?.includes('SB-ASH-Y-22')||beeCase?.source?.algorithmCodes?.includes('Y-22'))err('Arı sokması Anafilaksi kaynak kodu tam SB-ASH-Y-22 olmalı');
if(!String(medByName(beeCase,'Adrenalin')?.repeat||'').includes('5 dk'))err('Arı sokması adrenalin 5 dk tekrar bilgisi eksik');

const anaphylaxisCase=(CASES||[]).find(c=>c.id==='anaphylaxis');
if(JSON.stringify(medByName(anaphylaxisCase,'Salbutamol')?.routes)!==JSON.stringify(['OTHER']))err('Anafilaksi salbutamol yolu resmî Y-22 kutusunda belirtilmediğinden OTHER/Şemaya göre olmalı');
if(medByName(anaphylaxisCase,'Adrenalin')?.authority!=='DIRECT'||!String(medByName(anaphylaxisCase,'Adrenalin')?.repeat||'').includes('5 dk'))err('Anafilaksi adrenalin doğrudan/5 dk tekrar bilgisi eksik');
const anaNaCl=medByName(anaphylaxisCase,'%0,9 NaCl');
if(anaNaCl?.dose!=='500 ml bolus'||!String(anaNaCl?.repeat||'').includes('adrenalin infüzyonu sonrası')||!JSON.stringify(anaphylaxisCase?.quick||[]).includes('1 mcg/dk IV infüzyonu'))err('Anafilaksi NaCl tekrar / IV adrenalin ileri basamak sırası eksik');
if(anaphylaxisCase?.decisionIntegrated!==true||(anaphylaxisCase?.algorithmSteps||[]).length!==3||(anaphylaxisCase?.algorithmBranches||[]).length!==1)err('Y-22 Anafilaksi yapılandırılmış akış / entegre karar yapısı eksik');
if(anaphylaxisCase?.algorithmSteps?.[1]?.approvalAuthority!=='DIRECT'||anaphylaxisCase?.algorithmSteps?.[1]?.practitionerAuthority!=='AABT'||!String(anaphylaxisCase?.algorithmSteps?.[1]?.html||'').includes('0,3–0,5 mg IM'))err('Y-22 ilk IM adrenalin DIRECT + AABT olmalı');
const anaHypoperfusion=anaphylaxisCase?.algorithmBranches?.[0];
if(anaHypoperfusion?.steps?.[0]?.approvalAuthority!=='DIRECT'||anaHypoperfusion?.steps?.[0]?.practitionerAuthority!=='AABT'||!String(anaHypoperfusion?.steps?.[0]?.html||'').includes('500 mL bolus'))err('Y-22 devam eden hipoperfüzyon tekrar IM adrenalin + NaCl DIRECT/AABT olmalı');
const anaNoImprove=anaHypoperfusion?.branches?.[0];
if(anaNoImprove?.label!=='Düzelme olmuyor'||anaNoImprove?.steps?.length!==4)err('Y-22 düzelmeme alt kolu eksik');
if(anaNoImprove?.steps?.[0]?.approvalAuthority!=='SKKM'||anaNoImprove?.steps?.[0]?.practitionerAuthority!=='AABT'||!String(anaNoImprove?.steps?.[0]?.html||'').includes('1 mcg/dk'))err('Y-22 IV adrenalin infüzyonu SKKM + AABT olmalı');
if(anaNoImprove?.steps?.[1]?.approvalAuthority!=='DIRECT'||anaNoImprove?.steps?.[1]?.practitionerAuthority!=='AABT'||!String(anaNoImprove?.steps?.[1]?.html||'').includes('500 mL'))err('Y-22 ikinci NaCl 500 mL telefon simgesiz AABT olmalı');
for(const idx of [2,3])if(anaNoImprove?.steps?.[idx]?.approvalAuthority!=='SKKM'||anaNoImprove?.steps?.[idx]?.practitionerAuthority!=='AABT')err(`Y-22 ileri ilaç basamağı SKKM + AABT olmalı: ${idx}`);


const asthmaCase=(CASES||[]).find(c=>c.id==='asthma');
const asthmaInitialSal=medByName(asthmaCase,'Salbutamol (ilk basamak)');
const asthmaInitialIpr=medByName(asthmaCase,'İpratropium bromür (ağır ilk basamak)');
const asthmaRepeat=medByName(asthmaCase,'Salbutamol + İpratropium (20 dk sonrası)');
if(!(JSON.stringify(asthmaCase?.criticalActions||[])+JSON.stringify(asthmaCase?.quick||[])).includes('>%93'))err('Astım resmî SpO2 >%93 hedefi eksik');
if(asthmaInitialSal?.authority!=='DIRECT'||!(asthmaInitialSal?.routes||[]).includes('INHALER')||!(asthmaInitialSal?.routes||[]).includes('NEB'))err('Astım ilk salbutamol INHALER/NEB + DIRECT olmalı');
if(asthmaInitialIpr?.authority!=='DIRECT'||!(asthmaInitialIpr?.routes||[]).includes('NEB'))err('Astım ağır ilk ipratropium NEB + DIRECT olmalı');
if(asthmaRepeat?.authority!=='SKKM'||!String(asthmaRepeat?.repeat||'').includes('20 dk')||!String(asthmaRepeat?.maxDose||'').includes('3'))err('Astım 20 dk tekrar bronkodilatör basamağı SKKM / maks 3 olmalı');
if(JSON.stringify(asthmaRepeat?.routes)!==JSON.stringify(['OTHER'])||!String(asthmaRepeat?.dose||'').includes('ipratropium 500 mcg inhaler')||!String(asthmaRepeat?.dose||'').includes('ipratropium 500 mcg nebül'))err('Astım 20 dk hafif-orta/ağır yol ayrımı tek INHALER/NEB genellemesine dönmemeli');
if(/2,5\s*mg/.test(String(asthmaRepeat?.dose||'')))err('Astım 20 dk salbutamol tekrar dozuna resmî Y-05 kutusunda olmayan 2,5 mg çıkarımı eklenmemeli');
if(medByName(asthmaCase,'Metilprednizolon')?.authority!=='SKKM'||medByName(asthmaCase,'Magnezyum sülfat')?.authority!=='SKKM')err('Astım steroid/magnezyum SKKM olmalı');
if((asthmaCase?.meds||[]).some(m=>String(m.name).toLocaleLowerCase('tr-TR').includes('adrenalin')))err('Yetişkin astım algoritmasında adrenalin ilaç kartı bulunmamalı');

const acsCase=(CASES||[]).find(c=>c.id==='acs'), nitrate=medByName(acsCase,'İzosorbid dinitrat');
if(!String(nitrate?.repeat||'').includes('3–5 dk')||!String(nitrate?.maxDose||'').includes('3 doz'))err('AKS nitrat tekrar/maksimum doz bilgisi eksik');

const tachyCase=(CASES||[]).find(c=>c.id==='tachycardia');
if(tachyCase?.title!=='Nabızlı Taşikardi'||tachyCase?.page!=='17')err('Nabızlı Taşikardi başlık/sayfa sabiti bozuldu');
const tachyText=JSON.stringify([tachyCase?.quick,tachyCase?.decision]);
for(const required of ['dar düzenli 100 J','dar düzensiz 200 J','geniş düzenli 100 J','defibrilasyon dozu'])if(!tachyText.includes(required))err(`Taşikardi enerji bilgisi eksik: ${required}`);
const tachyRequiredMeds=[
  ['Fentanil','1 mcg/kg'],
  ['Amiodaron — stabil geniş QRS','150 mg'],
  ['Magnezyum sülfat','2 g'],
  ['Adenozin','6 mg'],
  ['Metoprolol','5 mg'],
  ['Diltiazem','0,25 mg/kg'],
  ['Midazolam','0,1 mg/kg'],
  ['Amiodaron — kardiyoversiyon sonrası','300 mg']
];
for(const [name,dose] of tachyRequiredMeds){
  const m=medByName(tachyCase,name);
  if(!m||m.dose!==dose||m.authority!=='SKKM'||m.practitionerAuthority!=='AABT')err(`Taşikardi ilaç/doz/SKKM/AABT sabiti bozuldu: ${name}`);
}
if(!String(medByName(tachyCase,'Adenozin')?.repeat||'').includes('12 mg')||!String(medByName(tachyCase,'Adenozin')?.note||'').includes('20 mL'))err('Taşikardi adenozin ikinci doz / NaCl bolus bilgisi eksik');
if(!String(medByName(tachyCase,'Metoprolol')?.repeat||'').includes('3 kez')||!String(medByName(tachyCase,'Diltiazem')?.repeat||'').includes('0,35 mg/kg'))err('Taşikardi metoprolol/diltiazem tekrar bilgisi eksik');
if((tachyCase?.algorithmSteps||[]).length!==2)err('Y-08 ortak başlangıç algorithmSteps sayısı 2 olmalı');
if(tachyCase?.decisionIntegrated!==true)err('Y-08 dallı akış varken yinelenen Karar kutusu gizlenmeli');
if(tachyCase?.algorithmSteps?.[0]?.practitionerAuthority!=='ATT_AABT'||tachyCase?.algorithmSteps?.[0]?.approvalAuthority!=='DIRECT')err('Y-08 ortak başlangıç turkuaz/DIRECT olmalı');
if(tachyCase?.algorithmSteps?.[1]?.practitionerAuthority!=='AABT'||tachyCase?.algorithmSteps?.[1]?.approvalAuthority!=='SKKM')err('Y-08 fentanil turuncu/SKKM olmalı');
const tachyStable=(tachyCase?.algorithmBranches||[]).find(b=>b.label==='Stabil');
const tachyUnstable=(tachyCase?.algorithmBranches||[]).find(b=>b.label==='Anstabil');
if(!tachyStable||!tachyUnstable)err('Y-08 Stabil/Anstabil üst dalları eksik');
const wideQrs=(tachyStable?.branches||[]).find(b=>b.label==='Geniş QRS');
const narrowQrs=(tachyStable?.branches||[]).find(b=>b.label==='Dar QRS');
if(!wideQrs||!narrowQrs)err('Y-08 stabil Geniş/Dar QRS dalları eksik');
const narrowRegular=(narrowQrs?.branches||[]).find(b=>b.label==='Düzenli');
const vagalStep=(narrowRegular?.steps||[]).find(s=>String(s.html).includes('Vagal manevra'));
if(vagalStep?.approvalAuthority!=='DIRECT'||vagalStep?.practitionerAuthority!=='AABT')err('Y-08 vagal manevra turuncu fakat SKKM/ÇM telefon simgesiz olmalı');
const unstableCv=(tachyUnstable?.steps||[]).find(s=>String(s.html).includes('Senkronize kardiyoversiyon'));
if(unstableCv?.approvalAuthority!=='DIRECT'||unstableCv?.practitionerAuthority!=='AABT')err('Y-08 ilk anstabil kardiyoversiyon turuncu fakat SKKM/ÇM telefon simgesiz olmalı');
const unstableSed=(tachyUnstable?.steps||[]).find(s=>String(s.html).includes('midazolam'));
const unstableNoResponse=(tachyUnstable?.steps||[]).find(s=>String(s.html).includes('amiodaron 300 mg'));
if(unstableSed?.approvalAuthority!=='SKKM'||unstableNoResponse?.approvalAuthority!=='SKKM')err('Y-08 sedasyon/yanıtsızlık basamakları SKKM/ÇM telefon simgeli olmalı');
const wideRegular=(wideQrs?.branches||[]).find(b=>b.label==='Düzenli');
const stableCv=(wideRegular?.steps||[]).find(s=>String(s.html).includes('kardiyoversiyon'));
if(stableCv?.approvalAuthority!=='SKKM'||stableCv?.practitionerAuthority!=='AABT')err('Y-08 stabil geniş-düzenli yanıtsızlık kardiyoversiyonu turuncu/SKKM olmalı');

const arrestCase=(CASES||[]).find(c=>c.id==='cardiac-arrest');
const arrestText=JSON.stringify([arrestCase?.quick,arrestCase?.meds]);
const arrestAdrNonShock=medByName(arrestCase,'Adrenalin — şoklanamaz ritim');
const arrestAdrShock=medByName(arrestCase,'Adrenalin — şoklanır ritim');
if(JSON.stringify(arrestAdrNonShock?.routes)!==JSON.stringify(['IV','IO'])||arrestAdrNonShock?.dose!=='1 mg')err('Y-10 adrenalin 1 mg IV/IO kartı bozuk');
if(JSON.stringify(arrestAdrShock?.routes)!==JSON.stringify(['IV'])||arrestAdrShock?.dose!=='1 mg'||!String(arrestAdrShock?.repeat||'').includes('2. defibrilasyon sonrası'))err('Y-11 adrenalin 1 mg yalnız IV / 2. şok sonrası kartı bozuk');
if(medByName(arrestCase,'Amiodaron')?.dose!=='300 mg'||JSON.stringify(medByName(arrestCase,'Amiodaron')?.routes)!==JSON.stringify(['IV','IO'])||!String(medByName(arrestCase,'Amiodaron')?.repeat||'').includes('150 mg'))err('Y-11 amiodaron 300 mg + 150 mg IV/IO sırası bozuk');
if(medByName(arrestCase,'Lidokain')?.dose!=='1–1,5 mg/kg'||!String(medByName(arrestCase,'Lidokain')?.repeat||'').includes('0,5–0,75 mg/kg'))err('Y-11 lidokain başlangıç/5. şok tekrar dozu bozuk');
if(!JSON.stringify(arrestCase?.quick||[]).includes('bifazik 120–200 J')||!JSON.stringify(arrestCase?.quick||[]).includes('monofazik 360 J'))err('Arrest şok enerji anahtar noktaları eksik');
for(const forbidden of ['Atropin 3 mg','NaHCO₃ 1 mEq/kg'])if(arrestText.includes(forbidden))err(`2026 arrest algoritmasında kaldırılmış içerik var: ${forbidden}`);

if(roscCase?.page!=='23'||!JSON.stringify(roscCase).includes('MAP ≥65 mmHg')||!JSON.stringify(roscCase).includes('32–37,5°C'))err('Resüsitasyon Sonrası Bakım sayfa/hedef sabitleri bozuldu');

const hypoCase=(CASES||[]).find(c=>c.id==='hypoglycemia');
if(hypoCase?.title!=='Diyabetik Aciller'||hypoCase?.page!=='31')err('Diyabetik Aciller Y-17 başlık/sayfa sabiti bozuldu');
if(medByName(hypoCase,'Dekstroz')?.authority!=='DIRECT'||medByName(hypoCase,'Dekstroz')?.practitionerAuthority!=='AABT'||!String(medByName(hypoCase,'Dekstroz')?.repeat||'').includes('5–10 dk')||!JSON.stringify(hypoCase).includes('15 dk'))err('Diyabetik Aciller hipoglisemi dekstroz/tekrar sabitleri bozuldu');
const hyperNaCl=medByName(hypoCase,'%0,9 NaCl — hiperglisemi');
if(hyperNaCl?.dose!=='IV infüzyon'||hyperNaCl?.authority!=='DIRECT'||hyperNaCl?.practitionerAuthority!=='AABT'||!JSON.stringify(hypoCase).includes('>300 mg/dL'))err('Diyabetik Aciller hiperglisemi %0,9 NaCl kolu eksik');
const y17HyperStep=hypoCase?.algorithmBranches?.find(b=>String(b.label||'').startsWith('Hiperglisemi'))?.steps?.[0];
if(y17HyperStep?.followUp?.transition!=='HİPOVOLEMİK ŞOK ALGORİTMASINA GİT')err('Y-17 şok/dehidratasyon gri koşul + Hipovolemik Şok mavi geçişi eksik');

if(strokeCase?.page!=='32'||!JSON.stringify(strokeCase).includes('BEFAST')||!JSON.stringify(strokeCase).includes('%94–98')||!JSON.stringify(strokeCase).includes('30°'))err('İnme / SVO sayfa/BEFAST/O2/30° sabitleri bozuldu');
if(seizureCase?.page!=='33'||medByName(seizureCase,'Valproik asit')?.dose!=='40 mg/kg'||medByName(seizureCase,'Levetirasetam')?.dose!=='60 mg/kg')err('Nöbet sayfa/2026 ikinci basamak dozları bozuldu');
if(medByName(seizureCase,'Fenitoin')?.dose!=='20 mg/kg'||!String(medByName(seizureCase,'Fenitoin')?.note||'').includes('25 mg/kg/dk')||medByName(seizureCase,'Diazepam')?.authority!=='SKKM'||medByName(seizureCase,'Midazolam')?.authority!=='SKKM')err('Y-19 fenitoin infüzyon / benzodiazepin SKKM sabitleri bozuk');

const burnCase=(CASES||[]).find(c=>c.id==='burn');
if(!JSON.stringify(burnCase?.quick||[]).includes('(2 × VYA% × kg) / 16 mL/saat'))err('Yanık Parkland/Ringer Laktat 2026 formülü eksik');
if(medByName(burnCase,'Fentanil')?.dose!=='1 mcg/kg'||medByName(burnCase,'Fentanil')?.authority!=='SKKM')err('Yanık fentanil doz/yetki sabiti bozuldu');
if(medByName(burnCase,'Ringer Laktat')?.authority!=='DIRECT'||medByName(burnCase,'Ringer Laktat')?.practitionerAuthority!=='AABT'||!String(medByName(burnCase,'Ringer Laktat')?.repeat||'').includes('(2 × VYA% × kg) / 16 mL/saat'))err('Yanık Ringer Laktat doğrudan/AABT/formül kartı eksik');

const hyperthermiaCase=(CASES||[]).find(c=>c.id==='hyperthermia');
if(medByName(hyperthermiaCase,'%0,9 NaCl — ısı stresi')?.dose!=='1000–2000 mL bolus'||medByName(hyperthermiaCase,'%0,9 NaCl — ısı çarpması')?.dose!=='1000 mL bolus')err('Y-23 ısı stresi / ısı çarpması NaCl doz ayrımı bozuk');

const hypovolemicFlowCase=(CASES||[]).find(c=>c.id==='hypovolemic-shock');
if(hypovolemicFlowCase?.decisionIntegrated!==true||(hypovolemicFlowCase?.algorithmSteps||[]).length!==2||(hypovolemicFlowCase?.algorithmBranches||[]).length!==2)err('Y-13 Hipovolemik Şok yapılandırılmış Hemorajik/Non-hemorajik akışı eksik');
const hemorrhagic=(hypovolemicFlowCase?.algorithmBranches||[]).find(b=>b.label==='Hemorajik şok');
const nonHemorrhagic=(hypovolemicFlowCase?.algorithmBranches||[]).find(b=>b.label==='Non-hemorajik şok');
if(hemorrhagic?.steps?.[0]?.approvalAuthority!=='DIRECT'||hemorrhagic?.steps?.[0]?.practitionerAuthority!=='ATT_AABT')err('Y-13 hemorajik kanama kontrolü turkuaz/DIRECT olmalı');
if(hemorrhagic?.steps?.[1]?.approvalAuthority!=='DIRECT'||hemorrhagic?.steps?.[1]?.practitionerAuthority!=='AABT'||!String(hemorrhagic?.steps?.[1]?.html||'').includes('250–500 mL')||!String(hemorrhagic?.steps?.[1]?.html||'').includes('maksimum 1000 mL'))err('Y-13 hemorajik kristalloid DIRECT + AABT doz/hedef bilgisi bozuk');
if(nonHemorrhagic?.steps?.[0]?.approvalAuthority!=='DIRECT'||nonHemorrhagic?.steps?.[0]?.practitionerAuthority!=='AABT'||!String(nonHemorrhagic?.steps?.[0]?.html||'').includes('500–1000 mL'))err('Y-13 non-hemorajik sıvı DIRECT + AABT olmalı');
if(nonHemorrhagic?.steps?.[1]?.approvalAuthority!=='DIRECT'||nonHemorrhagic?.steps?.[1]?.practitionerAuthority!=='ATT_AABT'||!String(nonHemorrhagic?.steps?.[1]?.html||'').includes('MAP 65–70 mmHg'))err('Y-13 neden araştırma/MAP hedefi turkuaz/DIRECT olmalı');
if(nonHemorrhagic?.steps?.[2]?.approvalAuthority!=='SKKM'||nonHemorrhagic?.steps?.[2]?.practitionerAuthority!=='AABT'||!String(nonHemorrhagic?.steps?.[2]?.html||'').includes('MAP <65 mmHg'))err('Y-13 yanıtsız hipotansiyon vazopressör basamağı SKKM + AABT olmalı');

const adultAuditCases=(CASES||[]).filter(c=>c.population==='adult');
if(adultAuditCases.length!==37)err('Yetişkin kütüphanesi 37 doğrulanmış vaka olmalı');
for(const c of adultAuditCases)if(!['2026-09-21','2026-09-22','2026-09-23','2026-09-24'].includes(c.source?.reviewedAt))err(`${c.id}: beklenmeyen reviewedAt ${c.source?.reviewedAt}`);
for(const c of adultAuditCases)for(const m of (c.meds||[])){
  const sourceUnspecified=m.sourceAuthorityStatus==='KEYPOINT_NO_SYMBOL';
  if(sourceUnspecified){
    if(m.authority!=='ALGORITHM'||m.practitionerAuthority!=='UNVERIFIED')err(`${c.id}/${m.name}: kaynakta yetki kodlaması olmayan öğe ALGORITHM + UNVERIFIED kalmalı`);
  }else{
    if(!['DIRECT','SKKM'].includes(m.authority))err(`${c.id}/${m.name}: yetişkin ilaç yetkisi DIRECT veya SKKM olmalı`);
    if(!m.practitionerAuthority||m.practitionerAuthority==='UNVERIFIED')err(`${c.id}/${m.name}: yetişkin ilaç kartında uygulayıcı yetki audit sonucu eksik`);
  }
}
for(const id of ['koah','asthma','acs','bradycardia','tachycardia','cardiac-arrest','rosc','hypovolemic-shock','acute-heart-failure-cardiogenic-shock','agitated-patient','hypoglycemia','seizure','allergic-reaction','anaphylaxis','bee','hypothermia','hyperthermia','burn','ccb-beta-blocker-poisoning','cholinergic-poisoning','opioid-poisoning','tca-poisoning','crush-syndrome']){
  const c=(CASES||[]).find(x=>x.id===id);
  for(const m of c?.meds||[])if(m.practitionerAuthority!=='AABT')err(`${id}/${m.name}: resmî turuncu kutu AABT uygulayıcı kısıtı olarak kilitlenmeli`);
}

const crushCase=(CASES||[]).find(c=>c.id==='crush-syndrome');
if(!crushCase||crushCase.code!=='SB-ASH-Y-39'||crushCase.page!=='69'||crushCase.source?.page!=='68–69')err('Crush Sendromu Y-39 kaynak izi bozuk');
if(!JSON.stringify(crushCase).includes('1000 mL/saat')||!JSON.stringify(crushCase).includes('500 mL/saat')||!JSON.stringify(crushCase).includes('3000–6000 mL'))err('Crush sıvı basamakları eksik');
if(!JSON.stringify(crushCase).includes('Ringer Laktat')||!JSON.stringify(crushCase).includes('kullanma'))err('Crush potasyum içeren sıvı uyarısı eksik');
if(medByName(crushCase,'Kalsiyum glukonat %10')?.authority!=='SKKM'||medByName(crushCase,'Kalsiyum glukonat %10')?.dose!=='10–30 mL')err('Crush kalsiyum glukonat SKKM/doz bilgisi bozuk');

const headTraumaCase=(CASES||[]).find(c=>c.id==='head-trauma');
if(!headTraumaCase||headTraumaCase.code!=='SB-ASH-Y-40'||headTraumaCase.page!=='71'||headTraumaCase.source?.page!=='70–71'||headTraumaCase.source?.reviewedAt!=='2026-09-24')err('Kafa Travmalı Hastaya Yaklaşım Y-40 kaynak izi bozuk');
for(const required of ['GKS ≤8','%94–98','10/dk','20/dk','25/dk','SKB >100 mmHg','30–45°','Cushing Triadı','GKS\'nin 2 puan','Hemipleji','Anizokori'])if(!JSON.stringify(headTraumaCase).includes(required))err(`Y-40 kritik içerik eksik: ${required}`);
if(headTraumaCase?.decisionIntegrated!==true||headTraumaCase?.algorithmBranchLayout!=='split'||(headTraumaCase?.algorithmSteps||[]).length!==4||(headTraumaCase?.algorithmBranches||[]).length!==2)err('Y-40 ortak akış / glukoz split dalları eksik');
for(const [i,step] of (headTraumaCase?.algorithmSteps||[]).entries())if(step.approvalAuthority!=='DIRECT'||step.practitionerAuthority!=='ATT_AABT')err(`Y-40 ortak turkuaz basamak ATT/AABT + DIRECT olmalı: ${i}`);
const y40AbnormalGlucose=(headTraumaCase?.algorithmBranches||[]).find(b=>b.label==='KŞ <60 mg/dL veya >300 mg/dL');
const y40NormalGlucose=(headTraumaCase?.algorithmBranches||[]).find(b=>b.label==='60 mg/dL < KŞ <300 mg/dL');
const y40Seizure=(y40NormalGlucose?.branches||[]).find(b=>b.label==='Nöbet varsa');
const y40Icp=(y40NormalGlucose?.branches||[]).find(b=>b.label==='KİBAS varsa');
if(y40AbnormalGlucose?.transition!=='DİYABETİK ACİLLER ALGORİTMASINA GİT')err('Y-40 anormal glukoz mavi Diyabetik Aciller geçişi eksik');
if((y40NormalGlucose?.steps||[]).length!==1||y40NormalGlucose.steps[0].approvalAuthority!=='DIRECT'||y40NormalGlucose.steps[0].practitionerAuthority!=='AABT'||!String(y40NormalGlucose.steps[0].html||'').includes('SKB <strong>>100 mmHg</strong>'))err('Y-40 60–300 mg/dL turuncu IV sıvı/SKB basamağı bozuk');
if(y40Seizure?.transition!=='NÖBET / KONVÜLZİYON ALGORİTMASINA GİT')err('Y-40 nöbet mavi algoritma geçişi eksik');
if((y40Icp?.notices||[]).length!==1||!y40Icp.notices[0].includes('30–45°')||!y40Icp.notices[0].includes('Şok bulguları yoksa'))err('Y-40 KİBAS 30–45° gri Anahtar Nokta eksik');
const headFluid=medByName(headTraumaCase,'IV sıvı tedavisi');
const headMidazolam=medByName(headTraumaCase,'Midazolam — ajite hasta (Anahtar Noktalar)');
if(headFluid?.authority!=='DIRECT'||headFluid?.practitionerAuthority!=='AABT'||JSON.stringify(headFluid?.routes)!==JSON.stringify(['IV'])||!String(headFluid?.dose||'').includes('SKB >100 mmHg'))err('Y-40 IV sıvı tedavisi turuncu/DIRECT/SKB hedefi eksik');
if(headMidazolam?.dose!=='1–2,5 mg'||JSON.stringify(headMidazolam?.routes)!==JSON.stringify(['IV'])||!String(headMidazolam?.repeat||'').includes('3–5 dk')||headMidazolam?.authority!=='ALGORITHM'||headMidazolam?.practitionerAuthority!=='UNVERIFIED'||headMidazolam?.sourceAuthorityStatus!=='KEYPOINT_NO_SYMBOL')err('Y-40 Anahtar Noktalar midazolam kaynak/yetki-belirsizliği bilgisi bozuk');
if(!APP_META?.actionAudit?.verifiedCases?.includes('SB-ASH-Y-40')||!APP_META?.actionAudit?.verifiedBranchCases?.includes('SB-ASH-Y-40'))err('Y-40 actionAudit kapsamına eklenmemiş');

const startCase=(CASES||[]).find(c=>c.id==='start-triage');
if(!startCase||startCase.code!=='SB-ASH-Y-41'||startCase.page!=='73'||startCase.source?.page!=='72–73'||startCase.source?.reviewedAt!=='2026-09-24')err('Start Triyaj Y-41 kaynak izi bozuk');
for(const required of ['YEŞİL','SİYAH','KIRMIZI','SARI','<10/dk','>30/dk','KGD >2 sn','1 dakik'])if(!JSON.stringify(startCase).includes(required))err(`START triyaj kriteri eksik: ${required}`);
if(!JSON.stringify(startCase).includes('daha ciddi triyaj kodu verilebilir'))err('Y-41 yeniden triyajda daha ciddi kod verilebilmesi Anahtar Noktası eksik');
for(const term of ['sadece renk kodu işaretlenir','triyaj sırasında tedavi/KPR yapılmaz','tek sağlık personeli','birden fazla sağlık personeli','1 dk’dan kısa','Kanama kontrolü gibi hayat kurtarıcı müdahaleler'])if(!JSON.stringify(startCase).includes(term))err(`Y-41 Anahtar Nokta eksik: ${term}`);
if(startCase?.decisionIntegrated!==true||(startCase?.algorithmSteps||[]).length!==1||(startCase?.algorithmBranches||[]).length!==2)err('Y-41 START yapılandırılmış kök/yürüyen-yürüyemeyen akışı eksik');
if(startCase?.algorithmSteps?.[0]?.approvalAuthority!=='DIRECT'||startCase?.algorithmSteps?.[0]?.practitionerAuthority!=='ATT_AABT')err('Y-41 START seslen/güvenli alan ortak basamağı ATT/AABT + DIRECT olmalı');
const y41Green=(startCase?.algorithmBranches||[]).find(b=>b.triageCode==='green');
const y41NonWalking=(startCase?.algorithmBranches||[]).find(b=>b.label==='Yürüyemeyenler');
const y41NoBreath=(y41NonWalking?.branches||[]).find(b=>b.label==='Solunum yok');
const y41Breath=(y41NonWalking?.branches||[]).find(b=>b.label==='Solunum var');
if(!y41Green||!y41NonWalking||!y41NoBreath||!y41Breath)err('Y-41 START yürüyebilme/solunum ana dalları eksik');
if(y41NonWalking?.steps?.[0]?.approvalAuthority!=='DIRECT'||y41NonWalking?.steps?.[0]?.practitionerAuthority!=='ATT_AABT'||y41NoBreath?.steps?.[0]?.practitionerAuthority!=='ATT_AABT')err('Y-41 START değerlendirme/başa pozisyon basamak yetkisi bozuk');
const y41Outcomes=[];
const collectY41=(branches=[])=>{for(const b of branches){if(b.triageCode)y41Outcomes.push([b.label,b.triageCode]);collectY41(b.branches||[]);}};
collectY41(startCase?.algorithmBranches||[]);
if(y41Outcomes.filter(([,code])=>code==='red').length!==4||y41Outcomes.filter(([,code])=>code==='green').length!==1||y41Outcomes.filter(([,code])=>code==='yellow').length!==1||y41Outcomes.filter(([,code])=>code==='black').length!==1)err('Y-41 START renk sonuçlarının sayısı/geometrisi bozuk');
for(const phrase of ['Pozisyon sonrası solunum yok — SİYAH KOD','Pozisyon sonrası solunum var — KIRMIZI KOD','Solunum sayısı <10/dk veya >30/dk — KIRMIZI KOD','KGD >2 sn veya distal nabız yok — KIRMIZI KOD','Komutlara uyuyorsa — SARI KOD','Komutlara uymuyorsa — KIRMIZI KOD'])if(!JSON.stringify(startCase).includes(phrase))err(`Y-41 START dalı eksik: ${phrase}`);


const coveredAdultCodes=new Set();
for(const c of adultAuditCases)for(const code of (c.source?.algorithmCodes||[])){const m=String(code).match(/SB-ASH-Y-(\d+)/);if(m)coveredAdultCodes.add(Number(m[1]));}
for(let n=2;n<=41;n++)if(!coveredAdultCodes.has(n))err(`Yetişkin resmî algoritma kapsamı eksik: SB-ASH-Y-${String(n).padStart(2,'0')}`);
if(coveredAdultCodes.has(1))warn('SB-ASH-Y-01 vaka kartına dönüştürülmüş; Olay Yeri Yönetimi temel protokol olarak ayrı ele alınmalı');

const bradyCase=(CASES||[]).find(c=>c.id==='bradycardia');
if(medByName(bradyCase,'Dopamin')?.authority!=='SKKM'||medByName(bradyCase,'Adrenalin')?.authority!=='SKKM')err('Bradikardi dopamin/adrenalin SKKM telefon simgesiyle eşleşmiyor');

for(const name of ['Adrenalin — şoklanamaz ritim','Adrenalin — şoklanır ritim','Amiodaron','Lidokain'])if(medByName(arrestCase,name)?.authority!=='DIRECT')err(`Kardiyak Arrest ${name} telefon simgesiz/doğrudan olmalı`);
if(!String(medByName(arrestCase,'Lidokain')?.repeat||'').includes('0,5–0,75 mg/kg'))err('Arrest 5. şok sonrası lidokain tekrar dozu eksik');
if((arrestCase?.algorithmSteps||[]).length!==1)err('Arrest ortak başlangıç algorithmSteps sayısı 1 olmalı');
if(arrestCase?.decisionIntegrated!==true)err('Y-09/Y-10/Y-11 dallı akış varken yinelenen Karar kutusu gizlenmeli');
if(arrestCase?.algorithmSteps?.[0]?.approvalAuthority!=='DIRECT'||arrestCase?.algorithmSteps?.[0]?.practitionerAuthority!=='ATT_AABT')err('Arrest ortak nabız/solunum kontrolü turkuaz/DIRECT olmalı');
const arrestNoPulse=(arrestCase?.algorithmBranches||[]).find(b=>b.label==='Nabız yok');
const arrestBreathing=(arrestCase?.algorithmBranches||[]).find(b=>b.label==='Nabız var; solunum yok / gasping');
if(!arrestNoPulse||!arrestBreathing)err('Arrest Y-09 nabız var/nabız yok dalları eksik');
const shockableBranch=(arrestNoPulse?.branches||[]).find(b=>String(b.label).includes('Şoklanır'));
const nonShockBranch=(arrestNoPulse?.branches||[]).find(b=>String(b.label).includes('Şoklanamaz'));
if(!shockableBranch||!nonShockBranch)err('Arrest şoklanır/şoklanamaz alt dalları eksik');
for(const s of shockableBranch?.steps||[])if(s.approvalAuthority!=='DIRECT')err('Y-11 şoklanır ritimde telefon simgesiz basamak SKKM olarak işaretlenmiş');
for(const s of nonShockBranch?.steps||[])if(s.approvalAuthority!=='DIRECT')err('Y-10 şoklanamaz ritimde telefon simgesiz basamak SKKM olarak işaretlenmiş');
const firstShock=(shockableBranch?.steps||[]).find(s=>String(s.html).includes('1. defibrilasyon'));
const secondShock=(shockableBranch?.steps||[]).find(s=>String(s.html).includes('2. defibrilasyon'));
if(!String(secondShock?.html||'').includes('Adrenalin 1 mg IV')||String(secondShock?.html||'').includes('IV/IO'))err('Y-11 2. şok sonrası adrenalin yolu IV olmalı, IV/IO genellenmemeli');
const thirdShock=(shockableBranch?.steps||[]).find(s=>String(s.html).includes('3. defibrilasyon'));
if(firstShock?.practitionerAuthority!=='AABT'||secondShock?.practitionerAuthority!=='AABT'||thirdShock?.practitionerAuthority!=='AABT')err('Y-11 defibrilasyon/ilaç kutuları turuncu AABT olarak kilitlenmeli');
if(!String(thirdShock?.html||'').includes('amiodaron 300 mg IV/IO')||!String(thirdShock?.html||'').includes('lidokain 1–1,5 mg/kg IV/IO'))err('Y-11 3. şok antiaritmik başlangıç dozu bozuk');
if(thirdShock?.followUp?.label!=='Dirençli / tekrarlayan VF-nVT — 5. şok sonrası'||!String(thirdShock?.followUp?.html||'').includes('Amiodaron 150 mg IV/IO')||!String(thirdShock?.followUp?.html||'').includes('lidokain 0,5–0,75 mg/kg IV/IO'))err('Y-11 5. şok tekrar dozu aynı resmî ilaç kutusunun okunabilir devamı olarak korunmalı');
const nonShockAdrenaline=(nonShockBranch?.steps||[]).find(s=>String(s.html).includes('Adrenalin 1 mg'));
if(nonShockAdrenaline?.approvalAuthority!=='DIRECT'||nonShockAdrenaline?.practitionerAuthority!=='AABT')err('Y-10 adrenalin turuncu fakat SKKM/ÇM telefon simgesiz olmalı');
const shockableAirway=(shockableBranch?.steps||[]).find(s=>String(s.html).includes('ileri hava yolu'));
const nonShockAirway=(nonShockBranch?.steps||[]).find(s=>String(s.html).includes('ileri hava yolu'));
if(shockableAirway?.practitionerAuthority!=='ATT_AABT'||nonShockAirway?.practitionerAuthority!=='ATT_AABT')err('Arrest ileri hava yolu turkuaz ATT/AABT olarak kalmalı');

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
const electricalBurnAuditCase=(CASES||[]).find(c=>c.id==='electrical-burn');
const electricalRl=medByName(electricalBurnAuditCase,'Ringer Laktat — rabdomiyoliz riski');
if(electricalRl?.authority!=='DIRECT'||electricalRl?.practitionerAuthority!=='AABT'||JSON.stringify(electricalRl?.routes)!==JSON.stringify(['OTHER'])||!String(electricalRl?.dose||'').includes('Erken ve yeterli'))err('Y-29 Ringer Laktat turuncu/DIRECT ve kaynakta miktar-yol türetmeme kartı eksik');

const traumaCase=(CASES||[]).find(c=>c.id==='trauma');
if(traumaCase?.title!=='Travmalı Hastada Acil Olgu Yönetimi'||traumaCase?.code!=='SB-ASH-Y-38'||traumaCase?.page!=='67'||traumaCase?.source?.page!=='65–67 / 6–7'||traumaCase?.source?.reviewedAt!=='2026-09-24'||!traumaCase?.source?.algorithmCodes?.includes('SB-ASH-Y-38')||!traumaCase?.source?.algorithmCodes?.includes('SB-ASH-Y-02'))err('Travma Y-38/Y-02 başlık-kod-sayfa kaynak izi bozuldu');
if(traumaCase?.decisionIntegrated!==true||(traumaCase?.algorithmSteps||[]).length!==9||traumaCase?.algorithmBranches!==undefined)err('Y-38 lineer X-ABCDE + yan geçiş yapılandırılmış akışı bozuk');
for(const [i,s] of (traumaCase?.algorithmSteps||[]).entries())if(s.approvalAuthority!=='DIRECT'||s.practitionerAuthority!=='ATT_AABT')err(`Y-38 resmî turkuaz basamak ATT/AABT + DIRECT olmalı: ${i}`);
for(const required of ['travma mekanizmasını','hayatı tehdit eden kanama','Servikal ve spinal immobilizasyonu','SpO₂ <strong>&gt;%94</strong>','10–30/dk','iğne dekompresyonu','KGD &gt;2 sn','nabız &gt;120','SKB &lt;90','GKS=15','Tüm giysileri çıkararak','İkincil değerlendirmeyi nakil sırasında tamamla'])if(!JSON.stringify(traumaCase).includes(required))err(`Y-38 kritik akış öğesi eksik: ${required}`);
if(!String(traumaCase?.algorithmSteps?.[2]?.followUp?.html||'').includes('Orofaringeal')||!String(traumaCase?.algorithmSteps?.[2]?.followUp?.html||'').includes('aspire et'))err('Y-38 hava yolu düzeltici yan geçişi eksik');
if(!String(traumaCase?.algorithmSteps?.[3]?.followUp?.html||'').includes('Tansiyon pnömotoraks')||!String(traumaCase?.algorithmSteps?.[3]?.followUp?.html||'').includes('Hemotoraks'))err('Y-38 solunum düzeltici yan geçişi eksik');
if(!JSON.stringify(traumaCase?.warningFindings||[]).includes('Kanıt olabilecek materyallerin'))err('Y-38 kanıt/giysi koruma uyarısı eksik');
for(const term of ['anormal hızlı ya da yavaş solunum','oksijen desteği ile düzelmeyen','SpO₂\'nin %94 altında','açık pnömotoraks ya da yelken göğüs','GKS <13','geçirilen ya da geçirilmiş nöbet','duyusal ya da motor defisit','diz ve dirsek proksimalinde','ekstremite amputasyonları','KAH, KOAH, kanama bozuklukları','55 yaş üstü','yanık','hipotermi','gebelik'])if(!JSON.stringify(traumaCase?.warningFindings||[]).toLocaleLowerCase('tr-TR').includes(term.toLocaleLowerCase('tr-TR')))err(`Y-38 kritik travma tablosu öğesi eksik: ${term}`);
if((traumaCase?.algorithmSteps||[]).filter(s=>s.followUp?.transition).length!==3)err('Y-38 mavi algoritma geçişleri transition semantiğine ayrılmamış');
const y38CirculationFollow=traumaCase?.algorithmSteps?.[5]?.followUp;
if(!String(y38CirculationFollow?.html||'').includes('pelvisi sabitle')||y38CirculationFollow?.transition!=='HİPOVOLEMİK ŞOK ALGORİTMASINA GİT')err('Y-38 pelvis sabitleme turkuaz eylemi ile Hipovolemik Şok mavi geçişi ayrılmamış');
if(JSON.stringify(traumaCase).includes('giysileri yararak'))err('Y-38 resmî “giysileri çıkararak” ifadesi yararak şeklinde bozulmuş');

const koahCase=(CASES||[]).find(c=>c.id==='koah');
if(koahCase?.code!=='SB-ASH-Y-04'||koahCase?.page!=='10'||koahCase?.source?.page!=='9–10')err('KOAH Y-04 kaynak izi bozuldu');
if(!JSON.stringify(koahCase).includes('%88–92'))err('KOAH SpO2 %88–92 hedefi eksik');
if(!JSON.stringify(koahCase?.severity?.mild?.bullets||[]).includes('O₂ desteğine ihtiyaç olmaması'))err('KOAH hafif kriterinde O₂ desteğine ihtiyaç olmaması eksik');
if(!JSON.stringify(koahCase?.severity?.moderate?.bullets||[]).includes('Oksijen desteği ile hipoksemi görülmemesi'))err('KOAH orta kriterinde oksijen desteğiyle hipoksemi görülmemesi eksik');
if(JSON.stringify(koahCase).includes('hipoksemi görülebilir'))err('KOAH orta kriterinde resmî anlamı tersine çeviren hipoksemi ifadesi var');
if(JSON.stringify(koahCase).includes('20 dk sonra yanıt yoksa')||JSON.stringify(koahCase).includes('20 dk sonra yanıtsızlıkta'))err('KOAH 20 dk SKKM basamağına resmî şemada olmayan yanıtsızlık koşulu eklenmiş');
if(koahCase?.decision?.q!=='Ağır akut solunum yetmezliği bulguları var mı?')err('KOAH karar sorusu resmî hafif-orta/ağır ayrımıyla eşleşmiyor');
if(medByName(koahCase,'Salbutamol (ilk basamak)')?.authority!=='DIRECT'||medByName(koahCase,'İpratropium bromür (ilk basamak)')?.authority!=='DIRECT')err('KOAH ilk bronkodilatörler DIRECT olmalı');
const koahRepeat=medByName(koahCase,'Salbutamol + İpratropium (20 dk sonrası)');
if(koahRepeat?.authority!=='SKKM'||!String(koahRepeat?.repeat||'').includes('20 dk')||!String(koahRepeat?.maxDose||'').includes('3'))err('KOAH 20 dk tekrar basamağı SKKM/maks 3 olmalı');
if(medByName(koahCase,'Metilprednizolon')?.dose!=='40 mg'||medByName(koahCase,'Metilprednizolon')?.authority!=='SKKM')err('KOAH metilprednizolon 40 mg SKKM olmalı');
for(const m of koahCase?.meds||[])if(m.practitionerAuthority!=='AABT')err(`KOAH ${m.name}: resmî turuncu kutu AABT uygulayıcı yetkisi olarak kilitlenmeli`);
const koahSteps=koahCase?.algorithmSteps||[];
if(koahSteps.length!==4)err('KOAH adım bazlı yetki pilotu 4 yapılandırılmış adım içermeli');
const koahPractitionerExpected=['ATT_AABT','AABT','AABT','AABT'];
const koahApprovalExpected=['DIRECT','DIRECT','SKKM','SKKM'];
for(let i=0;i<4;i++){
  if(koahSteps[i]?.practitionerAuthority!==koahPractitionerExpected[i])err(`KOAH algorithmSteps[${i}] uygulayıcı yetkisi resmî kutu rengiyle eşleşmiyor`);
  if(koahSteps[i]?.approvalAuthority!==koahApprovalExpected[i])err(`KOAH algorithmSteps[${i}] SKKM/ÇM durumu resmî telefon simgesiyle eşleşmiyor`);
}
if(!JSON.stringify(koahCase).includes('SKKM/ÇM ile ileri hava yolu')||!JSON.stringify(koahCase).includes('non-invaziv mekanik ventilasyonu'))err('Y-04 yanıtsız ağır KOAH telefon simgeli ileri hava yolu/NIMV basamağı eksik');
const actionStepExpectations=[
  ['asthma',['ATT_AABT','AABT','AABT','AABT'],['DIRECT','DIRECT','SKKM','SKKM']],
  ['acs',['ATT_AABT','AABT','AABT','AABT'],['DIRECT','DIRECT','SKKM','SKKM']],
  ['bradycardia',['ATT_AABT','AABT','AABT','ATT_AABT'],['DIRECT','DIRECT','SKKM','DIRECT']]
];
for(const [id,practitionerExpected,approvalExpected] of actionStepExpectations){
  const c=(CASES||[]).find(x=>x.id===id);
  const steps=c?.algorithmSteps||[];
  if(steps.length!==4)err(`${id}: yapılandırılmış algoritma adımı sayısı 4 olmalı`);
  for(let i=0;i<4;i++){
    if(steps[i]?.practitionerAuthority!==practitionerExpected[i])err(`${id} algorithmSteps[${i}] uygulayıcı yetkisi resmî kutu rengiyle eşleşmiyor`);
    if(steps[i]?.approvalAuthority!==approvalExpected[i])err(`${id} algorithmSteps[${i}] SKKM/ÇM durumu resmî telefon simgesiyle eşleşmiyor`);
  }
}
if(!JSON.stringify(asthmaCase?.algorithmSteps||[]).includes('Ölümcül astım atağı'))err('Astım ölümcül atak yapılandırılmış adımı eksik');
if(!JSON.stringify(acsCase?.algorithmSteps||[]).includes('Asetilsalisilik asit 160–325 mg'))err('AKS ASA yapılandırılmış adımı eksik');
if(!JSON.stringify(bradyCase?.algorithmSteps||[]).includes('yakın vital takibi'))err('Bradikardi stabil yakın takip yapılandırılmış adımı eksik');

const hypovolemicCase=(CASES||[]).find(c=>c.id==='hypovolemic-shock');
if(hypovolemicCase?.code!=='SB-ASH-Y-13'||hypovolemicCase?.page!=='24'||hypovolemicCase?.source?.page!=='24')err('Hipovolemik Şok Y-13/s.24 kaynak izi bozuldu');
if(!JSON.stringify(hypovolemicCase).includes('80–90 mmHg')||!JSON.stringify(hypovolemicCase).includes('MAP 65–70 mmHg'))err('Hipovolemik Şok SKB/MAP hedefleri eksik');
if(medByName(hypovolemicCase,'Kristalloid — hemorajik şok')?.authority!=='DIRECT'||medByName(hypovolemicCase,'Kristalloid — non-hemorajik şok')?.authority!=='DIRECT')err('Hipovolemik Şok kristalloid basamakları DIRECT olmalı');
if(medByName(hypovolemicCase,'Adrenalin')?.authority!=='SKKM'||medByName(hypovolemicCase,'Dopamin')?.authority!=='SKKM')err('Hipovolemik Şok vazopressör basamağı SKKM olmalı');

const heartFailureCase=(CASES||[]).find(c=>c.id==='acute-heart-failure-cardiogenic-shock');
if(heartFailureCase?.source?.reviewedAt!=='2026-09-24')err('Y-14 son kaynak gözden geçirme tarihi güncel değil');
if(heartFailureCase?.code!=='SB-ASH-Y-14'||heartFailureCase?.page!=='26'||heartFailureCase?.source?.page!=='25–26')err('Y-14 kaynak izi bozuldu');
if(!JSON.stringify(heartFailureCase).includes('%94–98'))err('Y-14 SpO2 %94–98 hedefi eksik');
for(const name of ['Furosemid','İzosorbid dinitrat','%0,9 NaCl','Dopamin'])if(medByName(heartFailureCase,name)?.authority!=='SKKM')err(`Y-14 ${name} SKKM telefon simgesiyle eşleşmiyor`);
if(medByName(heartFailureCase,'Furosemid')?.dose!=='20–40 mg'||medByName(heartFailureCase,'İzosorbid dinitrat')?.dose!=='5 mg'||medByName(heartFailureCase,'Dopamin')?.dose!=='2–5 mcg/kg/dk'||medByName(heartFailureCase,'Dopamin')?.maxDose!=='20 mcg/kg/dk')err('Y-14 ilaç doz sabitlerinden biri bozuldu');
if(heartFailureCase?.decisionIntegrated!==true||heartFailureCase?.algorithmBranchLayout!=='profiles'||(heartFailureCase?.algorithmSteps||[]).length!==3||(heartFailureCase?.algorithmBranches||[]).length!==3)err('Y-14 ortak 3 başlangıç adımı / 3 hemodinamik profil / entegre karar yapısı eksik');
for(const s of (heartFailureCase?.algorithmSteps||[]))if(s.approvalAuthority!=='DIRECT'||s.practitionerAuthority!=='ATT_AABT')err('Y-14 ortak başlangıç basamakları turkuaz ATT/AABT + DIRECT olmalı');
const y14Norm=(heartFailureCase?.algorithmBranches||[]).find(b=>b.label==='Normotansif dekompanse kalp yetmezliği');
const y14Hyper=(heartFailureCase?.algorithmBranches||[]).find(b=>b.label==='Hipertansif kalp yetmezliği');
const y14Shock=(heartFailureCase?.algorithmBranches||[]).find(b=>b.label==='Kardiyojenik şok');
if(!y14Norm||!y14Hyper||!y14Shock)err('Y-14 üç resmî tedavi profili eksik');
for(const b of [y14Norm,y14Hyper,y14Shock])for(const s of (b?.steps||[]))if(s.approvalAuthority!=='SKKM'||s.practitionerAuthority!=='AABT')err(`Y-14 ${b?.label}: turuncu + SKKM/ÇM telefon simgesi eşleşmesi bozuk`);
if(!String(y14Norm?.note||'').includes('SKB >100 mmHg')||!JSON.stringify(y14Norm).includes('Furosemid 20–40 mg IV'))err('Y-14 normotansif profil SKB/furosemid bilgisi bozuk');
if(!String(y14Hyper?.note||'').includes('SKB >140 mmHg')||!JSON.stringify(y14Hyper).includes('İzosorbid dinitrat 5 mg SL')||!JSON.stringify(y14Hyper).includes('maksimum 3 doz')||!JSON.stringify(y14Hyper).includes('furosemid 20–40 mg IV')||!JSON.stringify(y14Hyper).includes('CPAP'))err('Y-14 hipertansif profil nitrat/furosemid/CPAP bilgisi bozuk');
if(!String(y14Shock?.note||'').includes('SKB genellikle <90 mmHg')||!JSON.stringify(y14Shock).includes('250 mL %0,9 NaCl')||!JSON.stringify(y14Shock).includes('Dopamin 2–5 mcg/kg/dk IV')||!JSON.stringify(y14Shock).includes('20 mcg/kg/dk'))err('Y-14 kardiyojenik şok sıvı/dopamin bilgisi bozuk');

const diabeticCase=(CASES||[]).find(c=>c.id==='hypoglycemia');
if(diabeticCase?.source?.reviewedAt!=='2026-09-24')err('Y-17 son kaynak gözden geçirme tarihi güncel değil');
if(diabeticCase?.code!=='SB-ASH-Y-17'||diabeticCase?.page!=='31'||diabeticCase?.source?.page!=='31'||diabeticCase?.source?.reviewedAt!=='2026-09-24')err('Y-17 kaynak izi bozuldu');
if(diabeticCase?.decisionIntegrated!==true||diabeticCase?.algorithmBranchLayout!=='split'||(diabeticCase?.algorithmSteps||[]).length!==2||(diabeticCase?.algorithmBranches||[]).length!==2)err('Y-17 ortak başlangıç / hipoglisemi-hiperglisemi dallı yapısı eksik');
for(const s of (diabeticCase?.algorithmSteps||[]))if(s.approvalAuthority!=='DIRECT'||s.practitionerAuthority!=='ATT_AABT')err('Y-17 ortak başlangıç basamakları turkuaz ATT/AABT + DIRECT olmalı');
const y17Hypo=(diabeticCase?.algorithmBranches||[]).find(b=>String(b.label).startsWith('Hipoglisemi'));
const y17Hyper=(diabeticCase?.algorithmBranches||[]).find(b=>String(b.label).startsWith('Hiperglisemi'));
const y17Awake=(y17Hypo?.branches||[]).find(b=>b.label==='Bilinci açık');
const y17Unconscious=(y17Hypo?.branches||[]).find(b=>b.label==='Bilinci kapalı');
if(!y17Hypo||!y17Hyper||!y17Awake||!y17Unconscious)err('Y-17 resmî hipoglisemi/hiperglisemi ve bilinç dalları eksik');
if(!JSON.stringify(y17Hypo).includes('<60 mg/dl')||!JSON.stringify(y17Hyper).includes('>300 mg/dl'))err('Y-17 glikoz eşikleri bozuldu');
if((y17Awake?.steps||[]).length!==2||!JSON.stringify(y17Awake).includes('Ağızdan şekerli sıvı')||!JSON.stringify(y17Awake).includes("15 dk'da bir"))err('Y-17 bilinç açık hipoglisemi kolu eksik');
for(const s of (y17Awake?.steps||[]))if(s.approvalAuthority!=='DIRECT'||s.practitionerAuthority!=='ATT_AABT')err('Y-17 bilinç açık kolu turkuaz ATT/AABT + DIRECT olmalı');
if((y17Unconscious?.steps||[]).length!==3||!JSON.stringify(y17Unconscious).includes("25 g glikoz IV bolus")||!JSON.stringify(y17Unconscious).includes("5–10 dk'da bir"))err('Y-17 bilinç kapalı dekstroz/yeniden ölçüm akışı eksik');
if(y17Unconscious?.steps?.[0]?.approvalAuthority!=='DIRECT'||y17Unconscious?.steps?.[0]?.practitionerAuthority!=='AABT'||y17Unconscious?.steps?.[1]?.practitionerAuthority!=='ATT_AABT'||y17Unconscious?.steps?.[2]?.approvalAuthority!=='DIRECT'||y17Unconscious?.steps?.[2]?.practitionerAuthority!=='AABT')err('Y-17 bilinç kapalı turuncu/turkuaz uygulayıcı ayrımı bozuk');
const y17Saline=y17Hyper?.steps?.[0];
if(y17Saline?.approvalAuthority!=='DIRECT'||y17Saline?.practitionerAuthority!=='AABT'||!String(y17Saline?.html||'').includes('%0,9 NaCl IV infüzyon başla')||y17Saline?.followUp?.transition!=='HİPOVOLEMİK ŞOK ALGORİTMASINA GİT')err('Y-17 hiperglisemi NaCl / Hipovolemik Şok geçişi bozuk');
if(medByName(diabeticCase,'Dekstroz')?.authority!=='DIRECT'||medByName(diabeticCase,'Dekstroz')?.practitionerAuthority!=='AABT'||medByName(diabeticCase,'Dekstroz')?.dose!=='25 g glikoz (%10–%20 dekstrozdan)')err('Y-17 dekstroz ilaç kartı bozuk');
if(medByName(diabeticCase,'%0,9 NaCl — hiperglisemi')?.authority!=='DIRECT'||medByName(diabeticCase,'%0,9 NaCl — hiperglisemi')?.practitionerAuthority!=='AABT'||medByName(diabeticCase,'%0,9 NaCl — hiperglisemi')?.dose!=='IV infüzyon')err('Y-17 hiperglisemi NaCl kartı bozuk');
const y17BranchSteps=(branches=[])=>branches.flatMap(b=>[...(b.steps||[]),...y17BranchSteps(b.branches||[])]);
if([...(diabeticCase?.algorithmSteps||[]),...y17BranchSteps(diabeticCase?.algorithmBranches||[])].some(s=>s.approvalAuthority==='SKKM'))err('Y-17 resmî sayfada telefon simgesi olmadığı halde SKKM basamağı eklenmiş');


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
if(hypothermicArrestCase?.code!=='SB-ASH-Y-25'||hypothermicArrestCase?.page!=='43'||hypothermicArrestCase?.source?.page!=='42–43'||hypothermicArrestCase?.source?.reviewedAt!=='2026-09-24'||(hypothermicArrestCase?.meds||[]).length)err('Hipotermide Arrest Y-25 kaynak/ilaç yapısı bozuldu');
if(hypothermicArrestCase?.decisionIntegrated!==true||(hypothermicArrestCase?.algorithmSteps||[]).length!==2||(hypothermicArrestCase?.algorithmBranches||[]).length!==2)err('Y-25 yapılandırılmış akış bozuk');
if(hypothermicArrestCase?.algorithmSteps?.[1]?.precondition!=='Vücut ısısı <35°C ve bilinç kapalı ise'||hypothermicArrestCase?.algorithmSteps?.[1]?.html!=='<strong>En az 60 sn nabız kontrolü yap.</strong>')err('Y-25 gri önkoşul ile turkuaz 60 sn eylemi ayrılmamış');
for(const s of (hypothermicArrestCase?.algorithmSteps||[]))if(s.approvalAuthority!=='DIRECT'||s.practitionerAuthority!=='ATT_AABT')err('Y-25 gerçek eylem basamakları ATT/AABT + DIRECT olmalı');
if((hypothermicArrestCase?.algorithmNotices||[]).length!==2||!hypothermicArrestCase.algorithmNotices.some(n=>n.includes('30°C'))||!hypothermicArrestCase.algorithmNotices.some(n=>n.includes('SKKM/ÇM ile görüşerek ECMO')))err('Y-25 bağımsız defibrilasyon/ECMO gri uyarıları eksik');
const y25Pulse=(hypothermicArrestCase?.algorithmBranches||[]).find(b=>b.label==='Nabız var');
const y25NoPulse=(hypothermicArrestCase?.algorithmBranches||[]).find(b=>b.label==='Nabız yok');
const y25CprYes=(y25NoPulse?.branches||[]).find(b=>b.label==='Evet');
const y25CprNo=(y25NoPulse?.branches||[]).find(b=>b.label==='Hayır');
if(y25Pulse?.transition!=='HİPOTERMİ ALGORİTMASINA GİT'||y25Pulse?.steps?.length)err('Y-25 Hipotermi mavi geçişi eylem/yetki basamağına dönüştürülmüş');
if(y25NoPulse?.steps?.length!==1||!String(y25NoPulse.steps[0].html).includes('KPR başlama kriterleri var mı?'))err('Y-25 KPR başlama kriterleri turkuaz karar basamağı eksik');
if(y25CprYes?.transition!=='ARREST YÖNETİMİ ALGORİTMASINA GİT'||!String(y25CprYes?.steps?.[1]?.html||'').includes('&gt;35°C'))err('Y-25 Arrest mavi geçişi ayrılmamış');
if((y25CprYes?.notices||[]).length)err('Y-25 ECMO uyarısı KPR Evet koluna yanlış bağlanmış');
if(!String(y25CprYes?.steps?.[0]?.followUp?.html||'').includes('&lt;28°C')||!String(y25CprYes?.steps?.[0]?.followUp?.html||'').includes('&lt;20°C'))err('Y-25 aralıklı KPR kuralları eksik');
for(const term of ['karla/buzla kaplı','35 dk\'dan fazla çığ','ortam güvenliğinin sağlanamaması','bütün vücudun donması'])if(!String(y25CprNo?.note||'').includes(term))err(`Y-25 KPR endikasyonu olmayan durum eksik: ${term}`);
if(!String(y25CprNo?.steps?.[0]?.html||'').includes("KPR'ye başlama"))err('Y-25 KPR başlanmama sonucu eksik');
if(!String(hypothermicArrestCase?.quick?.[5]||'').includes('KPR endikasyonu olmayan')||String(hypothermicArrestCase?.quick?.[5]||'').includes('ECMO')||!String(hypothermicArrestCase?.quick?.[6]||'').includes('ECMO'))err('Y-25 KPR başlanmama kriterleri ile ECMO hızlı özetinde ayrılmamış');
for(const term of ['Uzun resüsitasyon süreleri önerilir','sert fiziksel hareketlerden kaçın','ölüm belirtisi değildir','Vücut ısısını takip et','Aktif dış ısıtma teknikleri','42–46°C','40–42°C'])if(!JSON.stringify(hypothermicArrestCase).includes(term))err(`Y-25 Anahtar Nokta eksik: ${term}`);

const electricalBurnCase=(CASES||[]).find(c=>c.id==='electrical-burn');
if(electricalBurnCase?.code!=='SB-ASH-Y-29'||electricalBurnCase?.page!=='51'||electricalBurnCase?.source?.page!=='51'||(electricalBurnCase?.meds||[]).length!==1)err('Elektrik Yanıkları Y-29 kaynak/ilaç yapısı bozuldu');
for(const term of ['10 metre','Ringer Laktat','Spinal immobilizasyon','Termal Yanık'])if(!JSON.stringify(electricalBurnCase).includes(term))err(`Y-29 Elektrik Yanıkları öğesi eksik: ${term}`);

const chemicalBurnCase=(CASES||[]).find(c=>c.id==='chemical-burn');
if(chemicalBurnCase?.code!=='SB-ASH-Y-30'||chemicalBurnCase?.page!=='52'||chemicalBurnCase?.source?.page!=='52'||(chemicalBurnCase?.meds||[]).length)err('Kimyasal Yanıklar Y-30 kaynak/ilaç yapısı bozuldu');
for(const term of ['KBRN','%0,9 NaCl','20 dk','Termal Yanık'])if(!JSON.stringify(chemicalBurnCase).includes(term))err(`Y-30 Kimyasal Yanık öğesi eksik: ${term}`);

const poisoningGeneralCase=(CASES||[]).find(c=>c.id==='poisoning-general');
if(poisoningGeneralCase?.code!=='SB-ASH-Y-31'||poisoningGeneralCase?.page!=='54'||poisoningGeneralCase?.source?.page!=='53–54'||(poisoningGeneralCase?.meds||[]).length)err('Zehirlenmelere Genel Yaklaşım Y-31 kaynak/ilaç yapısı bozuldu');
for(const term of ['SpO₂ %94–98','UZEM','DAKŞ','Sürekli gözlem'])if(!JSON.stringify(poisoningGeneralCase).includes(term))err(`Y-31 Genel Zehirlenme öğesi eksik: ${term}`);

const highDoseCase=(CASES||[]).find(c=>c.id==='high-dose-drug');
if(highDoseCase?.code!=='SB-ASH-Y-32'||highDoseCase?.page!=='55'||highDoseCase?.source?.page!=='55'||(highDoseCase?.meds||[]).length)err('Yüksek Doz İlaç Alımı Y-32 kaynak/ilaç yapısı bozuldu');
for(const term of ['Kolinerjik Ajanlarla Zehirlenme','Nöbet / Konvülziyon','Diyabetik Aciller','Narkotik / Opioid Zehirlenmeleri','Hipotermi'])if(!JSON.stringify(highDoseCase).includes(term))err(`Y-32 yönlendirme eksik: ${term}`);

const coCase=(CASES||[]).find(c=>c.id==='carbon-monoxide');
if(coCase?.code!=='SB-ASH-Y-33'||coCase?.page!=='56'||coCase?.source?.page!=='56'||(coCase?.meds||[]).length)err('Karbonmonoksit Y-33 kaynak/ilaç yapısı bozuldu');
for(const term of ['10 L/dk','PBV','Nöbet / Konvülziyon'])if(!JSON.stringify(coCase).includes(term))err(`Y-33 öğesi eksik: ${term}`);

const ccbCase=(CASES||[]).find(c=>c.id==='ccb-beta-blocker-poisoning');
if(ccbCase?.code!=='SB-ASH-Y-34'||ccbCase?.page!=='58'||ccbCase?.source?.page!=='57–58')err('KKB/Beta Bloker Y-34 kaynak izi bozuldu');
const calcium=medByName(ccbCase,'Kalsiyum glukonat');
if(calcium?.authority!=='SKKM'||calcium?.dose!=='3 ampul (30 mL)'||!(calcium?.routes||[]).includes('IV')||!String(calcium?.note||'').includes('100 mL %0,9 NaCl')||!String(calcium?.note||'').includes('10 dakikada'))err('Y-34 kalsiyum glukonat doz/yol/yetki sabiti bozuldu');
for(const term of ['SKB >90 mmHg','Bradikardi','Diyabetik Aciller'])if(!JSON.stringify(ccbCase).includes(term))err(`Y-34 karar öğesi eksik: ${term}`);

const cholinergicCase=(CASES||[]).find(c=>c.id==='cholinergic-poisoning');
if(cholinergicCase?.code!=='SB-ASH-Y-35'||cholinergicCase?.page!=='60'||cholinergicCase?.source?.page!=='59–60')err('Kolinerjik Y-35 kaynak izi bozuldu');
const cholAtropine=medByName(cholinergicCase,'Atropin');
if(cholAtropine?.authority!=='DIRECT'||cholAtropine?.dose!=='1–2 mg IV / 2–5 mg IM'||!String(cholAtropine?.repeat||'').includes('5 dk'))err('Y-35 atropin doz/yetki/tekrar sabiti bozuldu');
if(!JSON.stringify(cholinergicCase).includes('SLUDGE-BBB'))err('Y-35 SLUDGE-BBB klinik uyarısı eksik');

const opioidCase=(CASES||[]).find(c=>c.id==='opioid-poisoning');
if(opioidCase?.code!=='SB-ASH-Y-36'||opioidCase?.page!=='62'||opioidCase?.source?.page!=='61–62')err('Opioid Y-36 kaynak izi bozuldu');
if(medByName(opioidCase,'%0,9 NaCl — hipotansiyon')?.authority!=='DIRECT')err('Opioid hipotansiyon %0,9 NaCl doğrudan basamağı eksik');
const naloxone=medByName(opioidCase,'Nalokson');
if(naloxone?.authority!=='SKKM'||naloxone?.dose!=='0,4–2 mg'||naloxone?.maxDose!=='10 mg'||!(naloxone?.routes||[]).includes('SC')||!String(naloxone?.repeat||'').includes('2–3 dk'))err('Y-36 nalokson doz/yol/tekrar/yetki sabiti bozuldu');
for(const term of ['2 mg IV','0,1–0,4 mg','Diyabetik Aciller'])if(!JSON.stringify(opioidCase).includes(term))err(`Y-36 öğesi eksik: ${term}`);

const tcaCase=(CASES||[]).find(c=>c.id==='tca-poisoning');
if(tcaCase?.code!=='SB-ASH-Y-37'||tcaCase?.page!=='64'||tcaCase?.source?.page!=='63–64')err('TCA Y-37 kaynak izi bozuldu');
if(medByName(tcaCase,'%0,9 NaCl — hipotansiyon')?.authority!=='DIRECT')err('TCA hipotansiyon %0,9 NaCl doğrudan basamağı eksik');
const bicarbonate=medByName(tcaCase,'Sodyum bikarbonat (NaHCO₃)');
if(bicarbonate?.authority!=='SKKM'||bicarbonate?.dose!=='1–2 mEq/kg'||!String(bicarbonate?.repeat||'').includes('3–5 dk'))err('Y-37 NaHCO3 doz/tekrar/yetki sabiti bozuldu');
for(const term of ['QRS >0,10 sn','>100 ms','>160 ms'])if(!JSON.stringify(tcaCase).includes(term))err(`Y-37 QRS öğesi eksik: ${term}`);

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
  if(c.algorithmSteps!==undefined){
    const minAlgorithmSteps=Array.isArray(c.algorithmBranches)&&c.algorithmBranches.length?1:2;
    if(!Array.isArray(c.algorithmSteps)||c.algorithmSteps.length<minAlgorithmSteps)err(`${at}: algorithmSteps en az ${minAlgorithmSteps} adım olmalı`);
    for(const [si,step] of (c.algorithmSteps||[]).entries()){
      const st=`${at} algorithmSteps[${si}]`;
      if(!step?.html)err(`${st}: html eksik`);
      if(!allowedAuthority.has(step?.approvalAuthority))err(`${st}: approvalAuthority geçersiz (${step?.approvalAuthority})`);
      if(!allowedPractitionerAuthority.has(step?.practitionerAuthority))err(`${st}: practitionerAuthority geçersiz (${step?.practitionerAuthority})`);
      if(step?.precondition!==undefined&&typeof step.precondition!=='string')err(`${st}: precondition metin olmalı`);
      if(step?.followUp!==undefined){
        if(!step.followUp?.label)err(`${st}: followUp label eksik`);
        if(!(step.followUp?.html||step.followUp?.transition||step.followUp?.notice))err(`${st}: followUp içerik/transition/notice eksik`);
        if(step.followUp?.transition!==undefined&&typeof step.followUp.transition!=='string')err(`${st}: followUp transition metin olmalı`);
        if(step.followUp?.notice!==undefined&&typeof step.followUp.notice!=='string')err(`${st}: followUp notice metin olmalı`);
      }
    }
  }
  if(c.algorithmNotices!==undefined&&(!Array.isArray(c.algorithmNotices)||!c.algorithmNotices.length||c.algorithmNotices.some(n=>typeof n!=='string'||!n.trim())))err(`${at}: algorithmNotices geçerli metin listesi olmalı`);
  if(c.algorithmBranches!==undefined){
    if(!Array.isArray(c.algorithmBranches)||!c.algorithmBranches.length)err(`${at}: algorithmBranches boş/geçersiz`);
    const validateBranches=(branches,pathLabel)=>{
      for(const [bi,branch] of (branches||[]).entries()){
        const bt=`${pathLabel}[${bi}]`;
        if(!branch?.label)err(`${bt}: label eksik`);
        for(const [si,step] of (branch?.steps||[]).entries()){
          const st=`${bt}.steps[${si}]`;
          if(!step?.html)err(`${st}: html eksik`);
          if(!allowedAuthority.has(step?.approvalAuthority))err(`${st}: approvalAuthority geçersiz (${step?.approvalAuthority})`);
          if(!allowedPractitionerAuthority.has(step?.practitionerAuthority))err(`${st}: practitionerAuthority geçersiz (${step?.practitionerAuthority})`);
          if(step?.precondition!==undefined&&typeof step.precondition!=='string')err(`${st}: precondition metin olmalı`);
          if(step?.followUp!==undefined){
            if(!step.followUp?.label)err(`${st}: followUp label eksik`);
            if(!(step.followUp?.html||step.followUp?.transition||step.followUp?.notice))err(`${st}: followUp içerik/transition/notice eksik`);
            if(step.followUp?.transition!==undefined&&typeof step.followUp.transition!=='string')err(`${st}: followUp transition metin olmalı`);
            if(step.followUp?.notice!==undefined&&typeof step.followUp.notice!=='string')err(`${st}: followUp notice metin olmalı`);
          }
        }
        if(branch?.branches!==undefined){
          if(!Array.isArray(branch.branches)||!branch.branches.length)err(`${bt}: alt branches boş/geçersiz`);
          else validateBranches(branch.branches,`${bt}.branches`);
        }
        const validTriageTerminal=['green','yellow','red','black'].includes(branch?.triageCode);
        if(branch?.triageCode!==undefined&&!validTriageTerminal)err(`${bt}: geçersiz triageCode (${branch?.triageCode})`);
        if(branch?.transition!==undefined&&typeof branch.transition!=='string')err(`${bt}: transition metin olmalı`);
        if(branch?.notices!==undefined&&(!Array.isArray(branch.notices)||branch.notices.some(n=>typeof n!=='string'||!n.trim())))err(`${bt}: notices geçerli metin listesi olmalı`);
        if(!(branch?.steps?.length||branch?.branches?.length||validTriageTerminal||branch?.transition||branch?.notices?.length))err(`${bt}: steps, branches, transition, notices veya geçerli terminal triageCode içermeli`);
      }
    };
    validateBranches(c.algorithmBranches,`${at} algorithmBranches`);
  }
  if(c.algorithmAfter!==undefined){
    if(!Array.isArray(c.algorithmAfter)||!c.algorithmAfter.length)err(`${at}: algorithmAfter boş/geçersiz`);
    for(const [ai,step] of (c.algorithmAfter||[]).entries()){
      const st=`${at} algorithmAfter[${ai}]`;
      if(!step?.label||!step?.html)err(`${st}: label/html eksik`);
      if(!allowedAuthority.has(step?.approvalAuthority))err(`${st}: approvalAuthority geçersiz (${step?.approvalAuthority})`);
      if(!allowedPractitionerAuthority.has(step?.practitionerAuthority))err(`${st}: practitionerAuthority geçersiz (${step?.practitionerAuthority})`);
    }
  }
  if(!Array.isArray(c.warningFindings)||!c.warningFindings.length)err(`${at}: warningFindings eksik`);
  if(!c.decision?.q||!c.decision?.yes||!c.decision?.no)err(`${at}: decision eksik`);
  const s=c.source;
  if(!s?.documentId||!s?.effectiveDate||!s?.reviewedAt||!s?.officialPageUrl||!s?.officialPdfUrl||!s?.page)err(`${at}: kaynak izi eksik`);
  if(s?.effectiveDate!=='2026-08-25')warn(`${at}: beklenmeyen effectiveDate ${s?.effectiveDate}`);
  for(const [mi,m] of (c.meds||[]).entries()){
    const mt=`${at} meds[${mi}]`;
    if(!m.name||!m.dose)err(`${mt}: ad/doz eksik`);
    if(!allowedAuthority.has(m.authority))err(`${mt}: authority geçersiz (${m.authority})`);
    const practitionerKey=m.practitionerAuthority||'UNVERIFIED';
    if(!allowedPractitionerAuthority.has(practitionerKey))err(`${mt}: practitionerAuthority geçersiz (${practitionerKey})`);
    if(!Array.isArray(m.routes)||!m.routes.length)err(`${mt}: routes eksik`);
    for(const route of m.routes||[])if(!allowedRoutes.has(route))err(`${mt}: geçersiz route ${route}`);
    const doseText=String(m.dose||'');const doseLower=doseText.toLocaleLowerCase('tr-TR');const nonNumericInfusion=doseLower.includes('infüzyon');
    if(!/[0-9%]/.test(doseText)&&!nonNumericInfusion)warn(`${mt}: doz sayısal birim içermiyor (${m.dose})`);
    if(/[0-9]\s*(mg|mcg|mEq|g|ml|mL)/i.test(doseText)===false&&!nonNumericInfusion&&!doseText.includes('%'))warn(`${mt}: doz birimi gözden geçir (${m.dose})`);
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
