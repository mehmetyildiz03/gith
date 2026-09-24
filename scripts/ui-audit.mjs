import fs from 'node:fs';

const css=fs.readFileSync('styles.css','utf8');
const html=fs.readFileSync('index.html','utf8');
const sw=fs.readFileSync('sw.js','utf8');
const app=fs.readFileSync('app-core.js','utf8');
const data=fs.readFileSync('cases-data.js','utf8');
const errors=[];
const assert=(ok,msg)=>{if(!ok)errors.push(msg)};

const hex=h=>{h=h.replace('#','');return [0,2,4].map(i=>parseInt(h.slice(i,i+2),16)/255)};
const lum=h=>hex(h).map(c=>c<=.03928?c/12.92:((c+.055)/1.055)**2.4).reduce((s,c,i)=>s+c*[.2126,.7152,.0722][i],0);
const contrast=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};

const dark={surface:'#182331',ink:'#edf4fb',ink2:'#cbd8e4',muted:'#94a8bb',blue:'#79aaff',cyan:'#55d1d7',green:'#55c98a',amber:'#f0ba57',red:'#f1848b',violet:'#a996ff'};
for(const key of ['ink','ink2','muted','blue','cyan','green','amber','red','violet']){
  const ratio=contrast(dark[key],dark.surface);
  assert(ratio>=4.5,`Dark contrast düşük: ${key} ${ratio.toFixed(2)}:1`);
}

assert(css.includes(":root[data-theme=dark] .case-category"),'Koyu mod vaka accent metin override eksik');
assert(css.includes("color-mix(in srgb,var(--accent) 48%,white)"),'Accent metin aydınlatma kuralı eksik');
assert(css.includes(".first30-card")&&css.includes("border-left:4px solid var(--red)"),'İlk Kritik Adımlar vurgu kuralı eksik');
assert(css.includes(".critical-section")&&css.includes(".decision-section")&&css.includes(".meds-section"),'Kritik bölüm hiyerarşisi eksik');
assert(!html.includes('17 doğrulanmış yetişkin vaka'),'Hero içinde statik vaka sayısı kalmış');
assert(html.indexOf('id="populationTabs"')>html.indexOf('</header>'),'Hasta grubu sekmeleri sticky header içinde olmamalı');
assert(html.includes('class="library-strip"'),'Kompakt kütüphane özeti eksik');
assert(!css.includes('.corner-arrow{'),'Dekoratif corner arrow kuralı temizlenmemiş');
assert(css.includes("/* V0.6.1 dark surface hardening */"),'Koyu mod yüzey hardening bloğu eksik');
assert(css.includes(":root[data-theme='dark'] .quick-step")&&css.includes("background:var(--detail-panel-deep)!important"),'Koyu mod algoritma adımı explicit yüzeyi eksik');
assert(css.includes(":root[data-theme='dark'] .red-flag")&&css.includes("background:#2b202a!important"),'Koyu mod kırmızı bayrak yüzeyi eksik');
assert(css.includes(":root[data-theme='dark'] .branch.yes")&&css.includes(":root[data-theme='dark'] .branch.no"),'Koyu mod karar kutuları explicit değil');
assert(html.includes('styles.css?v=0.42')&&html.includes('app-core.js?v=0.42')&&html.includes('cases-data.js?v=0.42'),'Kritik asset cache-bust sürümü eksik');
assert(sw.includes("saha112-v042")&&sw.includes('NETWORK_FIRST_DESTINATIONS'),'Service worker kritik asset güncelleme stratejisi eksik');
assert(!app.includes('Kırmızı bayrak'),'Eski kullanıcı terimi hâlâ UI içinde');
assert(app.includes('Acil Uyarı Bulguları'),'Acil Uyarı Bulguları başlığı eksik');
assert(app.includes('Önceliği, müdahaleyi veya nakil kararını değiştirebilecek bulgular.'),'Acil uyarı açıklaması eksik');
assert(css.includes('.app-shell.detail-open>.context-panel'),'Detay görünümünde üst bağlam paneli gizlenmiyor');
assert(html.includes('aria-haspopup="dialog"')&&html.includes('aria-controls="sourceSheet"'),'Kaynak dialog erişilebilirlik ilişkisi eksik');
assert(app.includes('function priorityRank(c)')&&app.includes("state.density==='compact'"),'Hızlı Saha öncelik sıralaması eksik');
assert(app.includes("disabled")&&app.includes("Yakında")&&app.includes("populationCount"),'Boş hasta grupları pasif/Yakında davranışı eksik');
assert(css.includes('/* V0.7 field workflow */'),'Hızlı Saha görsel hiyerarşi bloğu eksik');
assert(css.includes(":root[data-density='compact'] .dose")&&css.includes('font-size:16px'),'Hızlı Saha doz vurgusu eksik');
assert(css.includes(":root[data-density='compact'] .critical-section")&&css.includes(":root[data-density='compact'] .decision-section")&&css.includes(":root[data-density='compact'] .meds-section"),'Hızlı Saha kritik bölüm vurguları eksik');
assert(!html.includes('Saha karar desteği')&&!html.includes('Resmî akış şemalarına bağlı')&&!html.includes('Sık kullandıkların')&&!html.includes('Kritik ve sık kullanılan vakalar'),'Eski/iddialı ürün dili kullanıcı arayüzünde kaldı');
assert(!html.includes('ilk 30 saniye')&&!app.includes('İlk 30 saniye')&&!app.includes('İlk 30 sn'),'İlk 30 saniye terminolojisi kaldı');
assert(app.includes('İlk Kritik Adımlar')&&app.includes('criticalActions'),'İlk Kritik Adımlar modeli/UI eksik');
assert(!app.includes('>KRİTİK<')&&app.includes('ÖNCELİKLİ'),'UI öncelik etiketi klinik KRİTİK ifadesinden ayrılmamış');
assert(html.includes('role="group" aria-label="Vaka kategorisi filtreleri"')&&app.includes('aria-pressed='),'Kategori filtre semantiği eksik');
assert(app.includes('routeLabel')&&app.includes('map(routeLabel)')&&data.includes('"NEB": "Nebülizasyon"'),'Nebülizasyon kullanıcı etiketi eksik');
assert(html.includes('sourceReviewMeta')&&app.includes('latestReviewDate'),'Dinamik kaynak gözden geçirme tarihi eksik');
assert(app.includes('PDF sayfa')&&app.includes('PDF s.'),'PDF sayfa etiketi açık değil');
assert(html.includes('updateBanner')&&app.includes('controllerchange')&&app.includes("reload-app"),'Pasif PWA güncelleme bildirimi eksik');
assert(app.includes('sourceFocusable')&&app.includes("e.key==='Tab'")&&css.includes('html.dialog-open'),'Kaynak dialog focus trap/scroll kilidi eksik');
assert(data.includes('"title": "İnme / SVO"'),'İnme / SVO başlığı korunmamış');
assert(data.includes('"reviewedAt": "2026-09-24"')&&data.includes('"Glikoz <60 mg/dl ve/veya hipoglisemi bulguları varsa"')&&data.includes('"Kan basıncı takibi"')&&data.includes('4,5 saat içinde trombolitik')&&data.includes('6 saat içinde endovasküler girişim'),'Y-18 yapılandırılmış inme akışı eksik');
assert(data.includes('"transition": "DİYABETİK ACİLLER ALGORİTMASINA GİT"')&&data.includes('"notice": "Tansiyon değerleri normalin üstünde olsa da tansiyonu düşürme."'),'Y-18 mavi geçiş / gri KB uyarısı semantiği eksik');

assert(data.includes('"title": "Nabızlı Taşikardi"'),'Nabızlı Taşikardi başlığı eksik');
assert(data.includes('"contentVersion": "EK2-2026.08.25-structured-flow-audit-fix-1-2026.09.24"'),'V0.42 yapılandırılmış akış audit-düzeltme sürümü eksik');
assert(html.includes('id="authorityLegend"')&&!html.includes('<span class="authority direct">Doğrudan</span>'),'Yetki legendi dinamik veri kaynağına bağlı değil');
assert(app.includes("authorityMarkup")&&app.includes("authority-symbol")&&app.includes("✓ Yeşil: SKKM/ÇM onayı yok")&&app.includes("◆ Sarı: SKKM/ÇM onayı"),'Yetki sembol/yazı eşlemesi eksik');
assert(css.includes('.authority.direct{')&&css.includes('var(--greenSoft)')&&css.includes('.authority.skkm{')&&css.includes('var(--amberSoft)'),'Yeşil/sarı yetki renk semantiği eksik');
assert(data.includes('"symbol": "✓"')&&data.includes('"symbol": "◆"')&&data.includes('"symbol": "•"'),'Yetki sembol metası eksik');
assert((data.match(/"authority": "ALGORITHM"/g)||[]).length===1&&data.includes('"sourceAuthorityStatus": "KEYPOINT_NO_SYMBOL"'),'Yalnız kaynakta yetki kodlaması bulunmayan Y-40 Midazolam nötr yetkide kalmalı');
assert(data.includes('"title": "Nöbet / Konvülziyon"'),'Nöbet resmî başlığı eksik');
assert(data.includes('"title": "Hava Yolu Tıkanıklıkları"')&&data.includes('"title": "Astım"')&&data.includes('"title": "Bradikardi"'),'Resmî mevcut vaka başlıklarından biri eski');
assert(data.includes('"title": "Termal Yanık"')&&data.includes('"title": "Travmalı Hastada Acil Olgu Yönetimi"'),'Yanık/travma resmî başlıkları eksik');
assert(data.includes('"code": "SB-ASH-Y-38"')&&data.includes('"page": "67"'),'Travma Y-38/s.67 kaynak düzeltmesi eksik');
assert(data.includes('"subtitle": "X-ABCDE • kanama • hızlı nakil"')&&data.includes('"Hayır — hava yolu açık/güvenilir değilse"')&&data.includes('"Hayır — solunum stabil değilse"')&&data.includes('"transition": "ARREST YÖNETİMİ ALGORİTMASINA GİT"')&&data.includes('"transition": "HİPOVOLEMİK ŞOK ALGORİTMASINA GİT"')&&data.includes('"transition": "KAFA TRAVMALI HASTAYA YAKLAŞIM ALGORİTMASINA GİT"')&&data.includes('Tüm giysileri çıkararak vücut kontrolünü tamamla; hipotermiden koru.'),'Y-38 yapılandırılmış X-ABCDE saha akışı eksik');
assert(data.includes("oksijen desteği ile düzelmeyen, SpO₂'nin %94 altında kalması")&&data.includes('55 yaş üstü, yanık, hipotermi veya gebelik')&&(data.match(/"transition":/g)||[]).length>=6&&!data.includes('giysileri yararak')&&data.includes('Tüm giysileri çıkararak'),'Y-38 kritik travma tablosu / mavi geçiş / giysi ifadesi eksik');
assert(!data.includes('"code": "Ek-2 • Travma"'),'Eski travma kaynak kodu kaldı');
assert(!app.includes('--soft:${c.soft}')&&app.includes('--case-soft:${c.soft}')&&css.includes('var(--case-soft,var(--soft))'),'Case-local --soft tema çakışması düzeltilmemiş');
assert(app.includes("c.severityView?.title")&&app.includes("c.severity.mild.label")&&app.includes("c.severity.moderate.label")&&app.includes("c.severity.severe.label"),'Severity UI vaka verisine bağlı değil');
for(const id of ['koah','hypovolemic-shock','acute-heart-failure-cardiogenic-shock','altered-consciousness'])assert(data.includes(`"id": "${id}"`),`Yeni yetişkin vaka eksik: ${id}`);
assert(data.includes('"INHALER"')&&data.includes('"INHALER": "İnhaler"'),'İnhaler yol modeli eksik');
assert(data.includes('SpO₂ >%93'),'Astım resmî SpO2 >%93 hedefi eksik');
assert(app.includes("if(!legend&&resolved!=='AABT')return ''")&&app.includes("resolved==='AABT'?'Yalnız AABT':a.label"),'Uygulayıcı kısıtı yalnız doğrulanmış AABT durumunda görünmeli');
assert(app.includes('practitionerMarkup')&&app.includes('practitionerBadge')&&app.includes("m.practitionerAuthority||'UNVERIFIED'"),'Uygulayıcı yetki veri katmanı korunmalı');
assert(css.includes('.practitioner.aabt{')&&!css.includes('.practitioner.att-aabt{')&&!css.includes('.practitioner.unverified{'),'Kartlarda yalnız AABT kısıt rozeti stili kalmalı');
assert(data.includes('"schemaVersion": 5')&&html.includes('Veri şeması: v5'),'Veri şeması v5 temel protokol katmanına yükseltilmemiş');
assert(data.includes('"officialLabel": "Acil Tıp Teknisyeni / Teknikeri"')&&data.includes('"officialLabel": "Acil Tıp Teknikeri"'),'Resmî uygulayıcı lejant metaları eksik');
assert(data.includes('"adultMedicationCardsComplete": true'),'Yetişkin ilaç uygulayıcı auditi tamamlanmış olarak işaretlenmemiş');
assert(data.includes('"medicationContentAudit": {')&&data.includes('"status": "complete"'),'Yetişkin ilaç içerik audit metası eksik');
assert(data.includes('"name": "Ringer Laktat — rabdomiyoliz riski"')&&data.includes('"name": "IV sıvı tedavisi"')&&data.includes('"name": "Midazolam — ajite hasta (Anahtar Noktalar)"'),'Y-29/Y-40 tam audit ilaç-sıvı kartları eksik');
assert(data.includes('"sourceAuthorityStatus": "KEYPOINT_NO_SYMBOL"')&&data.includes('"authority": "ALGORITHM"'),'Kaynakta yetki kodlaması olmayan Y-40 Midazolam nötr kalmıyor');
assert(app.includes("step.approvalAuthority==='SKKM'?authorityMarkup('SKKM'):''")&&app.includes('action-step-badges'),'Yapılandırılmış algoritma adımlarında SKKM kısıt rozeti render edilmiyor');
assert(css.includes('/* V0.25 full audit readability + action authority */')&&css.includes('.action-step-badges{'),'V0.25 okunabilirlik/yetki UI katmanı eksik');
assert(css.includes('/* V0.26 real-screen mobile stabilization */')&&css.includes('-webkit-line-clamp:3')&&css.includes('.source-ribbon span:last-child{overflow-wrap:anywhere}'),'Mobil uzun başlık/kaynak şeridi stabilizasyonu eksik');
assert(data.includes('const PROTOCOLS = [')&&data.includes('"id": "scene-management"')&&data.includes('"code": "SB-ASH-Y-01"'),'Y-01 temel protokol veri katmanı eksik');
assert(data.includes('"id": "emergency-case-management"')&&data.includes('"code": "SB-ASH-Y-02"')&&data.includes('"keyPoints": [')&&data.includes('"id": "sample"')&&data.includes('"id": "xabcde"'),'Y-02 temel protokol/SAMPLE/XABCDE veri katmanı eksik');
assert(app.includes('function renderProtocolKeyPoints(p)')&&app.includes('function protocolBranchLink')&&app.includes('showCaseLibraryFromProtocol'),'Y-02 hızlı hatırlatma/protokoller arası navigasyon katmanı eksik');
assert(app.includes("state.query=e.target.value;renderProtocols();renderCases()")&&app.includes("const protocolMatch=!el.protocolSection?.classList.contains('hidden')&&el.protocols?.children.length"),'Arama kutusu temel protokolleri anlık filtrelemiyor veya protokol eşleşmesine öncelik vermiyor');
assert(app.includes("state.protocolHistory.push")&&app.includes("backFromDetail()"),'Temel protokoller arası geri navigasyon geçmişi eksik');
assert(css.includes('/* V0.28 protocol sequence + key points */')&&css.includes('.protocol-keypoint-grid{')&&css.includes('.protocol-branch-link{'),'Y-02 hızlı hatırlatma/protokol geçiş stilleri eksik');
assert(html.includes('Saha başlangıcı ve ilk değerlendirme'),'Temel Protokoller bölüm başlığı Y-01/Y-02 sırasını açıklamıyor');
assert(html.includes('id="protocolSection"')&&html.includes('id="protocolGrid"')&&html.includes('TEMEL PROTOKOLLER'),'Temel Protokoller ana ekran bölümü eksik');
assert(app.includes('function renderProtocols()')&&app.includes('function openProtocol(id,{history=')&&app.includes('function renderProtocolFlow(p)'),'Temel protokol render/açılış katmanı eksik');
assert(css.includes('/* V0.27 foundational protocol layer */')&&css.includes('.protocol-flow{')&&css.includes('.protocol-decision-branches{'),'Y-01 protokol görünüm katmanı eksik');
assert(app.includes("const protocolOpen=e.target.closest('[data-protocol-open]')"),'Temel protokol tıklama olayı eksik');
assert(app.includes("const headerH=el.detail.querySelector('.detail-top')?.getBoundingClientRect().height||0")&&app.includes("target.getBoundingClientRect().top+scrollY-headerH-8"),'Jump hedefleri sticky başlık gerçek yüksekliğine göre kaydırılmıyor');
assert(css.includes('font-size:12px;line-height:1.5')&&css.includes('.algo-branch-head strong{justify-self:start;font-size:13px'),'Algoritma metin okunabilirliği yükseltilmemiş');
assert(data.includes('"name": "Adrenalin — şoklanır ritim"')&&data.includes('"name": "Adrenalin — şoklanamaz ritim"'),'Arrest Y-10/Y-11 adrenalin yolları ayrı kartlara ayrılmamış');
assert(data.includes('"name": "%0,9 NaCl — ısı stresi"')&&data.includes('"name": "%0,9 NaCl — ısı çarpması"'),'Hipertermi sıvı dalları ayrı ilaç kartlarına ayrılmamış');
assert(data.includes('Salbutamol tekrar dozu kutuda ayrıca sayısal olarak yazılmadığından türetilmemiştir.'),'Astım 20 dk tekrar dozu çıkarım koruması eksik');
assert(data.includes('adrenalin infüzyonu sonrası 500 mL bolus basamağı tekrar yer alır'),'Anafilaksi ikinci NaCl 500 mL basamağı eksik');
assert(data.includes('"actionAudit": {')&&data.includes('"algorithmSteps": [')&&data.includes('"verifiedCases": ['),'Adım bazlı uygulayıcı yetki pilot verisi eksik');
for(const phrase of ['Ölümcül astım atağı','Asetilsalisilik asit 160–325 mg','yakın vital takibi'])assert(data.includes(phrase),`Lineer eylem yetki genişlemesi eksik: ${phrase}`);
assert(app.includes('function renderAlgorithmSteps(c)')&&app.includes('function renderActionStep')&&app.includes('action-step-badges'),'Yapılandırılmış algoritma adımı render katmanı eksik');
assert(data.includes('"id": "rosc"')&&data.includes('"label": "Hipotansiyon — SKB <90 mmHg"')&&data.includes('"label": "Ventriküler ektopi / sürekli olmayan VT"'),'Y-12 ROSC yapılandırılmış komplikasyon kolları eksik');
assert(data.includes('"id": "hypovolemic-shock"')&&data.includes('"label": "Hemorajik şok"')&&data.includes('"label": "Non-hemorajik şok"'),'Y-13 hemorajik/non-hemorajik yapılandırılmış dallar eksik');
assert(data.includes('"id": "anaphylaxis"')&&data.includes('"label": "Hipoperfüzyon sürüyor"')&&data.includes('"label": "Düzelme olmuyor"'),'Y-22 Anafilaksi hipoperfüzyon/düzelmeme dalları eksik');
assert((data.match(/"decisionIntegrated": true/g)||[]).length>=5,'Y-08/Y-09-11/Y-12/Y-13/Y-22 entegre karar işareti eksik');
assert(app.includes("!c.decisionIntegrated")&&app.includes("detail-columns ${c.decisionIntegrated?'single':''}"),'Entegre karar vakalarında yinelenen Karar bölümü/jump gizlenmiyor');
assert(css.includes('/* V0.30 high-priority structured flows */')&&css.includes('.detail-columns.single{grid-template-columns:minmax(0,1fr)}'),'Entegre karar tek kolon görünüm stili eksik');
assert(app.includes('function renderAlgorithmBranch')&&app.includes('function renderAlgorithmBranches')&&app.includes('algorithmBranchSearch'),'Dallı algoritma render/arama katmanı eksik');
assert(app.includes('function algorithmBranchLayoutClass(c)')&&!app.includes("if(c.algorithmBranchLayout==='split')layout=' split'"),'Branch layout runtime const yeniden-atama riski giderilmemiş');
assert(app.includes('algo-precondition')&&app.includes('algo-transition')&&app.includes('step.followUp.notice')&&app.includes('renderAlgorithmNotices(c)')&&css.includes('/* V0.38 source-geometry fidelity + runtime-safe flow polish */'),'Koşul/geçiş/gri uyarı render katmanı eksik');
assert(app.includes('function renderAlgorithmAfter(c)')&&app.includes('algo-step-followup')&&app.includes('step?.followUp?.label'),'ROSC alt geçişi / Y-11 takip dozu render-arama katmanı eksik');
assert(data.includes('"algorithmAfter": [')&&data.includes('"label": "Arrest tekrar ederse"')&&!data.includes('"label": "Arrest tekrarı"'),'Y-12 arrest tekrarında ilgili ritim geçişi yanlış üst dal olarak kalmış');
assert(data.includes('"followUp": {')&&data.includes('"Dirençli / tekrarlayan VF-nVT — 5. şok sonrası"'),'Y-11 3./5. şok okunabilir ayrımı eksik');
assert(css.includes('/* V0.31 source geometry + scanability polish */')&&css.includes('.algo-step-followup{')&&css.includes('.algorithm-after-card{'),'V0.31 kaynak geometrisi okunabilirlik stilleri eksik');
assert(data.includes('"id": "acute-heart-failure-cardiogenic-shock"')&&data.includes('"algorithmBranchLayout": "profiles"')&&data.includes('"label": "Normotansif dekompanse kalp yetmezliği"')&&data.includes('"label": "Hipertansif kalp yetmezliği"')&&data.includes('"label": "Kardiyojenik şok"'),'Y-14 üç profil yapılandırılmış akışı eksik');
assert(app.includes("c.algorithmBranchLayout==='profiles'?' profiles'"),'Y-14 profil yerleşimi render katmanı eksik');
assert(css.includes('/* V0.32 Y14 profile layout */')&&css.includes('.algorithm-branches.profiles')&&css.includes('grid-template-columns:repeat(3,minmax(0,1fr))'),'Y-14 profil masaüstü/tek kolon responsive stili eksik');
assert((data.match(/"decisionIntegrated": true/g)||[]).length>=13,'Y-38 dahil entegre karar işaretleri eksik');
assert(css.includes('.detail-jumps::after')&&css.includes('content:"›"'),'Mobil jump şeridinde devam göstergesi eksik');
assert(css.includes('/* V0.21 branched algorithm flow */')&&css.includes('.algorithm-branches{')&&css.includes('.algo-branch-children{'),'Dallı algoritma mobil/masaüstü stilleri eksik');
assert(css.includes('/* V0.23 branch layout hardening */')&&css.includes('.algo-depth-0>.algo-branch-children{grid-template-columns:repeat(2,minmax(0,1fr))}')&&!css.includes('.algorithm-branches{grid-template-columns:repeat(2,minmax(0,1fr))}'),'İç içe branch kolon sertleştirmesi eksik veya eski bozuk üst-seviye iki kolon kuralı kaldı');
assert(data.includes('"verifiedBranchCases": [')&&data.includes('"label": "Stabil"')&&data.includes('"label": "Anstabil"')&&data.includes('"label": "Geniş QRS"')&&data.includes('"label": "Dar QRS"'),'Y-08 dallı algoritma verisi eksik');
assert(data.includes('"label": "Nabız yok"')&&data.includes('"label": "Nabız var; solunum yok / gasping"')&&data.includes('"label": "Şoklanır — VF / nVT"')&&data.includes('"label": "Şoklanamaz — NEA / Asistoli"'),'Y-09/Y-10/Y-11 arrest dallı algoritma verisi eksik');
for(const phrase of ['1. defibrilasyon','2. defibrilasyon','3. defibrilasyon','Adrenalin 1 mg IV/IO'])assert(data.includes(phrase),`Arrest dallı akış öğesi eksik: ${phrase}`);
assert(data.includes('<strong>Vagal manevra uygula.</strong>')&&data.includes('<strong>Senkronize kardiyoversiyon:</strong>'),'Y-08 kritik dallı eylemleri eksik');
assert(css.includes('/* V0.19 structured action authority pilot */')&&css.includes('.quick-step-restriction'),'Algoritma adımı AABT kısıt stili eksik');
for(const medName of ['Ringer Laktat','%0,9 NaCl / Ringer Laktat','%0,9 NaCl — hipotansiyon'])assert(data.includes(`"name": "${medName}"`),`Eksik resmî sıvı ilaç kartı: ${medName}`);
for(const medName of ['Fentanil','Amiodaron — stabil geniş QRS','Magnezyum sülfat','Adenozin','Metoprolol','Diltiazem','Midazolam','Amiodaron — kardiyoversiyon sonrası'])assert(data.includes(`"name": "${medName}"`),`Taşikardi resmî ilaç basamağı eksik: ${medName}`);
assert(data.includes('"title": "Diyabetik Aciller"')&&data.includes('"name": "%0,9 NaCl — hiperglisemi"'),'Y-17 Diyabetik Aciller tam kapsamı eksik');
assert(data.includes('"algorithmBranchLayout": "split"')&&data.includes('"label": "Bilinci açık"')&&data.includes('"label": "Bilinci kapalı"')&&data.includes('"label": "Hiperglisemi — Glikoz >300 mg/dl"'),'Y-17 yapılandırılmış glikoz/bilinç dalları eksik');
assert(data.includes('"transition": "HİPOVOLEMİK ŞOK ALGORİTMASINA GİT"'),'Y-17 Hipovolemik Şok mavi geçişi eksik');
assert(app.includes("c.algorithmBranchLayout==='split'?' split'"),'Y-17 split branch render katmanı eksik');
assert(css.includes('/* V0.33 Y17 diabetic split flow */')&&css.includes('.algorithm-branches.split')&&css.includes('grid-template-columns:repeat(2,minmax(0,1fr))'),'Y-17 masaüstü iki kol / mobil tek kolon stili eksik');
assert(data.includes('"title": "Nöbet / Konvülziyon"'),'Nöbet / Konvülziyon resmî başlığı eksik');
assert(data.includes('"id": "seizure"')&&data.includes('"algorithmBranchLayout": "split"')&&data.includes('"label": "Nöbet sonlandı"')&&data.includes('"label": "Nöbet devam ediyor"')&&data.includes('"label": "İlk benzodiazepin sonrası nöbet devam ediyor"')&&data.includes('"transition": "DİYABETİK ACİLLER ALGORİTMASINA GİT"')&&data.includes('Fenitoin 20 mg/kg')&&data.includes('25 mg/kg/dk')&&data.includes('Valproik asit 40 mg/kg')&&data.includes('Levetirasetam 60 mg/kg')&&data.includes('"label": "Evet — nöbet devam ediyor"')&&data.includes('İleri hava yolu uygulaması için hazırlan.'),'Y-19 yapılandırılmış nöbet/ilaç/postiktal akışı eksik');
assert(data.includes('Hastayı engellemeye çalışma; yaralanmayı önlemek için hastanın başının altına yastık, katlanmış battaniye vb. yerleştir.'),'Y-19 yaralanmayı önleme gri uyarısı eksik');
for(const title of ['Ajite Hastaya Yaklaşım','Vertigo','Alerjik Reaksiyon','Hipotermide Arrest Yönetimi'])assert(data.includes(`"title": "${title}"`),`İkinci yetişkin paketinde eksik vaka: ${title}`);
assert(data.includes('"precondition": "Vücut ısısı <35°C ve bilinç kapalı ise"')&&data.includes('"transition": "HİPOTERMİ ALGORİTMASINA GİT"')&&data.includes('"transition": "ARREST YÖNETİMİ ALGORİTMASINA GİT"')&&data.includes("vücut sıcaklığı 30°C'ye ulaşıncaya kadar defibrilasyon ertelenmelidir")&&data.includes('SKKM/ÇM ile görüşerek ECMO merkezine yönlendirmeyi düşün')&&data.includes('Aktif dış ısıtma teknikleri')&&data.includes('42–46°C')&&data.includes('40–42°C'),'Y-25 koşul/geçiş/gri uyarı/ısıtma Anahtar Noktaları eksik');
for(const title of ['Crush Sendromu','Kafa Travmalı Hastaya Yaklaşım','Start Triyaj'])assert(data.includes(`"title": "${title}"`),`Beşinci yetişkin paketinde eksik vaka: ${title}`);
for(const code of ['SB-ASH-Y-39','SB-ASH-Y-40','SB-ASH-Y-41'])assert(data.includes(`"code": "${code}"`),`Beşinci yetişkin paketinde eksik kod: ${code}`);
assert(data.includes('"id": "head-trauma"')&&data.includes('"algorithmBranchLayout": "split"')&&data.includes('"label": "KŞ <60 mg/dL veya >300 mg/dL"')&&data.includes('"transition": "DİYABETİK ACİLLER ALGORİTMASINA GİT"')&&data.includes('"label": "60 mg/dL < KŞ <300 mg/dL"')&&data.includes('"transition": "NÖBET / KONVÜLZİYON ALGORİTMASINA GİT"')&&data.includes('"label": "KİBAS varsa"')&&data.includes('30–45° yukarıda olacak şekilde sevk edilmelidir'),'Y-40 yapılandırılmış glukoz/nöbet/KİBAS akışı eksik');
assert(data.includes('"label": "Yürüyenler — YEŞİL KOD"')&&data.includes('"triageCode": "black"')&&data.includes('"triageCode": "yellow"')&&data.includes('"label": "Komutlara uymuyorsa — KIRMIZI KOD"'),'Y-41 START yapılandırılmış karar ağacı eksik');
assert(data.includes('daha ciddi triyaj kodu verilebilir'),'Y-41 yeniden triyaj Anahtar Noktası eksik');
assert(data.includes('sadece renk kodu işaretlenir')&&data.includes('triyaj sırasında tedavi/KPR yapılmaz')&&data.includes('tek sağlık personeli')&&data.includes('birden fazla sağlık personeli'),'Y-41 triyaj uygulama Anahtar Noktaları eksik');
assert(app.includes("['green','yellow','red','black'].includes(branch.triageCode)")&&css.includes('/* V0.35 START triage outcome semantics */')&&css.includes('.algo-branch.triage-green')&&css.includes('.algo-branch.triage-black'),'Y-41 START triyaj sonuç görsel semantiği eksik');
assert(!app.includes("'severity','Şiddet'")&&app.includes("'severity','Klinik ayrım'"),'Arı sokması hızlı geçiş etiketi Klinik ayrım olmalı');
assert(css.includes('/* V0.8.1 touch target hardening */'),'Dokunma hedefi hardening bloğu eksik');
for(const selector of ['.icon-btn,','.search-wrap input{','.filter-chip{','.text-btn{','.jump-chip{','.severity-tab{','.source-actions a{']){
  assert(css.includes(selector),`Dokunma hedefi kuralı eksik: ${selector}`);
}
assert(css.includes('min-height:44px'),'44px minimum dokunma hedefi kuralı eksik');


try{
  const start=app.indexOf('function renderActionStep');
  const end=app.indexOf('function renderAlgorithmAfter');
  assert(start>=0&&end>start,'Renderer runtime smoke fonksiyon bloğu bulunamadı');
  if(start>=0&&end>start){
    const source=app.slice(start,end);
    const escSmoke=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    const api=new Function('authorityMarkup','practitionerMarkup','esc',`${source}; return {renderActionStep,renderAlgorithmBranch,renderAlgorithmBranches,algorithmBranchLayoutClass,renderAlgorithmNotices};`)(
      key=>`<i data-authority="${key}"></i>`,
      key=>key==='AABT'?'<i data-practitioner="AABT"></i>':'',
      escSmoke
    );
    assert(api.algorithmBranchLayoutClass({algorithmBranchLayout:'split'})===' split','Runtime smoke: split layout sonucu yanlış');
    assert(api.algorithmBranchLayoutClass({algorithmBranchLayout:'profiles'})===' profiles','Runtime smoke: profiles layout sonucu yanlış');
    assert(api.algorithmBranchLayoutClass({})==='','Runtime smoke: varsayılan layout sonucu yanlış');
    assert(api.renderAlgorithmBranches({algorithmBranchLayout:'split',algorithmBranches:[{label:'A',steps:[{html:'x',approvalAuthority:'DIRECT',practitionerAuthority:'ATT_AABT'}]}]}).includes('algorithm-branches split'),'Runtime smoke: split render başarısız');
    const terminal=api.renderAlgorithmBranches({algorithmBranches:[{label:'Yeşil',triageCode:'green'},{label:'Geçiş',transition:'ALGORİTMAYA GİT'}]});
    assert(terminal.includes('triage-green')&&terminal.includes('algo-transition'),'Runtime smoke: terminal triage/transition render başarısız');
    assert(api.renderActionStep({precondition:'Koşul',html:'Eylem',approvalAuthority:'DIRECT',practitionerAuthority:'ATT_AABT'}).includes('algo-precondition'),'Runtime smoke: precondition render başarısız');
    const transitionStep=api.renderActionStep({html:'Eylem',approvalAuthority:'DIRECT',practitionerAuthority:'AABT',followUp:{label:'Hayır',transition:'ALGORİTMAYA GİT'}});
    assert(transitionStep.includes('algo-step-followup')&&transitionStep.includes('algo-transition')&&transitionStep.includes('ALGORİTMAYA GİT'),'Runtime smoke: followUp transition render başarısız');
    assert(transitionStep.indexOf('action-step-badges')>=0&&transitionStep.indexOf('action-step-badges')<transitionStep.indexOf('algo-step-followup'),'Runtime smoke: AABT/SKKM rozeti followUp koşul/geçişinin altına taşmış');
    const noticeStep=api.renderActionStep({html:'Eylem',approvalAuthority:'DIRECT',practitionerAuthority:'ATT_AABT',followUp:{label:'Uyarı',notice:'Gri uyarı'}});
    assert(noticeStep.includes('algo-notice')&&noticeStep.includes('Gri uyarı'),'Runtime smoke: followUp notice render başarısız');
    assert(api.renderAlgorithmNotices({algorithmNotices:['Uyarı']}).includes('algo-notice'),'Runtime smoke: gri uyarı render başarısız');
  }
}catch(e){errors.push('Renderer runtime smoke: '+e.message)}

console.log(`Saha112 UI audit: ${errors.length} hata`);
for(const e of errors)console.error('ERROR '+e);
if(errors.length)process.exit(1);
