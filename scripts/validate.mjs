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
  if(APP_META.schemaVersion!==2)err('APP_META.schemaVersion 2 olmalı');
  if(!Array.isArray(APP_META.populations)||APP_META.populations.length!==3)err('3 population tanımı bekleniyor');
}
if(!Array.isArray(CASES)||!CASES.length)err('CASES boş veya dizi değil');

const ids=new Set();const allowedAuthority=new Set(['DIRECT','SKKM','ALGORITHM']);const allowedRoutes=new Set(APP_META?.routes||[]);const allowedPop=new Set((APP_META?.populations||[]).map(p=>p.id));
for(const [i,c] of (CASES||[]).entries()){
  const at=`CASES[${i}] ${c?.id||'(id yok)'}`;
  for(const f of ['id','title','subtitle','category','population','summary','code','page','clinicalStatus'])if(!c?.[f])err(`${at}: ${f} eksik`);
  if(ids.has(c.id))err(`${at}: duplicate id`);ids.add(c.id);
  if(!allowedPop.has(c.population))err(`${at}: geçersiz population ${c.population}`);
  if(c.clinicalStatus!=='reviewed')warn(`${at}: clinicalStatus reviewed değil`);
  if(!Array.isArray(c.first30)||c.first30.length<2||c.first30.length>5)err(`${at}: first30 2-5 madde olmalı`);
  if(!Array.isArray(c.quick)||c.quick.length<2)err(`${at}: quick eksik`);
  if(!Array.isArray(c.redFlags)||!c.redFlags.length)err(`${at}: redFlags eksik`);
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
