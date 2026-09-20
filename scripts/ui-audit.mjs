import fs from 'node:fs';

const css=fs.readFileSync('styles.css','utf8');
const html=fs.readFileSync('index.html','utf8');
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

console.log(`Saha112 UI audit: ${errors.length} hata`);
for(const e of errors)console.error('ERROR '+e);
if(errors.length)process.exit(1);
