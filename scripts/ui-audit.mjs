import fs from 'node:fs';

const css=fs.readFileSync('styles.css','utf8');
const html=fs.readFileSync('index.html','utf8');
const sw=fs.readFileSync('sw.js','utf8');
const app=fs.readFileSync('app-core.js','utf8');
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
assert(css.includes(".first30-card")&&css.includes("border-left:4px solid var(--red)"),'İlk 30 saniye kritik vurgu kuralı eksik');
assert(css.includes(".critical-section")&&css.includes(".decision-section")&&css.includes(".meds-section"),'Kritik bölüm hiyerarşisi eksik');
assert(!html.includes('17 doğrulanmış yetişkin vaka'),'Hero içinde statik vaka sayısı kalmış');
assert(html.indexOf('id="populationTabs"')>html.indexOf('</header>'),'Hasta grubu sekmeleri sticky header içinde olmamalı');
assert(html.includes('class="library-strip"'),'Kompakt kütüphane özeti eksik');
assert(!css.includes('.corner-arrow{'),'Dekoratif corner arrow kuralı temizlenmemiş');
assert(css.includes("/* V0.6.1 dark surface hardening */"),'Koyu mod yüzey hardening bloğu eksik');
assert(css.includes(":root[data-theme='dark'] .quick-step")&&css.includes("background:var(--detail-panel-deep)!important"),'Koyu mod algoritma adımı explicit yüzeyi eksik');
assert(css.includes(":root[data-theme='dark'] .red-flag")&&css.includes("background:#2b202a!important"),'Koyu mod kırmızı bayrak yüzeyi eksik');
assert(css.includes(":root[data-theme='dark'] .branch.yes")&&css.includes(":root[data-theme='dark'] .branch.no"),'Koyu mod karar kutuları explicit değil');
assert(html.includes('styles.css?v=0.6.2')&&html.includes('app-core.js?v=0.6.2')&&html.includes('cases-data.js?v=0.6.2'),'Kritik asset cache-bust sürümü eksik');
assert(sw.includes("saha112-v062")&&sw.includes('NETWORK_FIRST_DESTINATIONS'),'Service worker kritik asset güncelleme stratejisi eksik');
assert(!app.includes('Kırmızı bayrak'),'Eski kullanıcı terimi hâlâ UI içinde');
assert(app.includes('Acil Uyarı Bulguları'),'Acil Uyarı Bulguları başlığı eksik');
assert(app.includes('Önceliği, müdahaleyi veya nakil kararını değiştirebilecek bulgular.'),'Acil uyarı açıklaması eksik');
assert(css.includes('.app-shell.detail-open>.context-panel'),'Detay görünümünde üst bağlam paneli gizlenmiyor');
assert(html.includes('aria-haspopup="dialog"')&&html.includes('aria-controls="sourceSheet"'),'Kaynak dialog erişilebilirlik ilişkisi eksik');

console.log(`Saha112 UI audit: ${errors.length} hata`);
for(const e of errors)console.error('ERROR '+e);
if(errors.length)process.exit(1);
