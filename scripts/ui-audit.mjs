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
assert(html.includes('styles.css?v=0.8.1')&&html.includes('app-core.js?v=0.8.1')&&html.includes('cases-data.js?v=0.8.1'),'Kritik asset cache-bust sürümü eksik');
assert(sw.includes("saha112-v081")&&sw.includes('NETWORK_FIRST_DESTINATIONS'),'Service worker kritik asset güncelleme stratejisi eksik');
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
assert(data.includes('"title": "Nöbet / Status Epileptikus"'),'Status Epileptikus başlığı eksik');
assert(css.includes('/* V0.8.1 touch target hardening */'),'Dokunma hedefi hardening bloğu eksik');
for(const selector of ['.icon-btn,','.search-wrap input{','.filter-chip{','.text-btn{','.jump-chip{','.severity-tab{','.source-actions a{']){
  assert(css.includes(selector),`Dokunma hedefi kuralı eksik: ${selector}`);
}
assert(css.includes('min-height:44px'),'44px minimum dokunma hedefi kuralı eksik');

console.log(`Saha112 UI audit: ${errors.length} hata`);
for(const e of errors)console.error('ERROR '+e);
if(errors.length)process.exit(1);
