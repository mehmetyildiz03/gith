const STORAGE={theme:'saha112:theme',density:'saha112:density',favorites:'saha112:favs',recent:'saha112:recent',population:'saha112:population'};
const safeJSON=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}};
const state={
  theme:localStorage.getItem(STORAGE.theme)||'',
  density:localStorage.getItem(STORAGE.density)||'standard',
  population:localStorage.getItem(STORAGE.population)||'adult',
  category:'Tümü',query:'',view:'home',nav:'home',current:null,
  favorites:new Set(safeJSON(STORAGE.favorites,[])),recent:safeJSON(STORAGE.recent,[]),
  returnScrollY:0,returnNav:'home'
};
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const el={
  shell:$('.app-shell'),main:$('#mainView'),detail:$('#detailView'),source:$('#sourceSheet'),search:$('#searchInput'),
  featured:$('#featuredGrid'),featuredSection:$('#featuredSection'),filters:$('#filterRow'),list:$('#caseList'),count:$('#caseCount'),
  populations:$('#populationTabs'),shortcutSection:$('#shortcutSection'),shortcuts:$('#shortcutGrid'),clearRecents:$('#clearRecentsBtn'),
  statCases:$('#statCases'),statCasesText:$('#statCasesText'),statCategories:$('#statCategories'),filterTitle:$('#filterTitle'),
  themeToggle:$('#themeToggle'),fieldToggle:$('#fieldToggle'),themePill:$('#themePill'),modePill:$('#modePill'),
  network:$('#networkStatus'),offline:$('#offlineBanner'),updateBanner:$('#updateBanner'),sourceReviewMeta:$('#sourceReviewMeta'),sourceProductMeta:$('#sourceProductMeta'),productVersionChip:$('#productVersionChip'),authorityLegend:$('#authorityLegend'),themeMeta:$('meta[name="theme-color"]')
};
const strip=s=>String(s??'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const caseStyle=c=>`--accent:${c.accent};--case-soft:${c.soft}`;
const popMeta=id=>APP_META.populations.find(p=>p.id===id)||APP_META.populations[0];
const casesForPopulation=()=>CASES.filter(c=>c.population===state.population&&c.clinicalStatus==='reviewed');
const categories=()=>['Tümü',...new Set(casesForPopulation().map(c=>c.category))];
const routeLabel=route=>APP_META.routeLabels?.[route]||route;
const formatDateTR=iso=>{const m=String(iso||'').match(/^(\d{4})-(\d{2})-(\d{2})$/);return m?`${m[3]}.${m[2]}.${m[1]}`:String(iso||'—')};
const latestReviewDate=()=>CASES.filter(c=>c.clinicalStatus==='reviewed').map(c=>c.source?.reviewedAt).filter(Boolean).sort().at(-1)||'';
function authorityClass(key){return key==='DIRECT'?'direct':key==='SKKM'?'skkm':'algorithm'}
function authorityMarkup(key,{legend=false}={}){
  const a=APP_META.authority[key]||APP_META.authority.ALGORITHM;
  const cls=authorityClass(key);
  const badge=`<span class="authority ${cls}" data-authority="${esc(key)}" aria-label="${esc(a.label)}: ${esc(a.description)}" title="${esc(a.description)}"><span class="authority-symbol" aria-hidden="true">${esc(a.symbol||'•')}</span><span>${esc(a.label)}</span></span>`;
  return legend?`<div class="authority-legend-row">${badge}<div><strong>${esc(a.visualLabel||a.label)}</strong><p>${esc(a.description)}</p></div></div>`:badge;
}
function practitionerClass(key){return key==='AABT'?'aabt':'neutral'}
function practitionerMarkup(key,{legend=false}={}){
  const resolved=APP_META.practitionerAuthority?.[key]?key:'UNVERIFIED';
  const a=APP_META.practitionerAuthority?.[resolved]||{label:'Doğrulanmadı',officialLabel:'Uygulayıcı yetkisi doğrulanmadı',description:'Resmî kutu rengi doğrulanmadı.'};
  if(!legend&&resolved!=='AABT')return '';
  const displayLabel=resolved==='AABT'?'Yalnız AABT':a.label;
  const cls=practitionerClass(resolved);
  const badge=`<span class="practitioner ${cls}" data-practitioner="${esc(resolved)}" aria-label="Uygulayıcı: ${esc(a.officialLabel)}. ${esc(a.description)}" title="${esc(a.description)}"><span>${esc(displayLabel)}</span></span>`;
  return legend?`<div class="authority-legend-row practitioner-legend-row">${badge}<div><strong>${esc(a.officialLabel||a.label)}</strong><p>${esc(a.description)}</p></div></div>`:badge;
}
function renderAuthorityLegend(){
  if(!el.authorityLegend)return;
  const approval=['DIRECT','SKKM','ALGORITHM'].map(key=>authorityMarkup(key,{legend:true})).join('');
  const aabt=practitionerMarkup('AABT',{legend:true});
  el.authorityLegend.innerHTML=`<div class="authority-legend-group"><h4>SKKM/ÇM onayı</h4>${approval}</div><div class="authority-legend-group"><h4>Uygulayıcı kısıtı</h4><p class="legend-note">Kartlarda yalnız resmî turuncu kutu doğrulanmışsa “Yalnız AABT” gösterilir. Turkuaz “Acil Tıp Teknisyeni / Teknikeri” basamaklarında ek rozet gösterilmez. Rozet olmaması, henüz audit edilmemiş bir basamakta ATT yetkisini tek başına doğrulamaz.</p>${aabt}</div>`;
}
function renderAppMeta(){const version=`V${APP_META.productVersion}`;if(el.productVersionChip)el.productVersionChip.textContent=version;if(el.sourceProductMeta)el.sourceProductMeta.textContent=`Uygulama: ${version}`;if(el.sourceReviewMeta)el.sourceReviewMeta.textContent=`Kaynak seti son gözden geçirme: ${formatDateTR(latestReviewDate())}`;renderAuthorityLegend()}

function detectTheme(){if(['light','dark'].includes(state.theme))return state.theme;return matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
function applyTheme(theme){const t=theme||detectTheme();document.documentElement.dataset.theme=t;el.themeToggle?.setAttribute('aria-pressed',String(t==='dark'));el.themeToggle?.setAttribute('aria-label',t==='dark'?'Açık moda geç':'Koyu moda geç');if(el.themePill)el.themePill.textContent=t==='dark'?'Koyu':'Açık';el.themeMeta?.setAttribute('content',t==='dark'?'#0f1722':'#edf4f8')}
function toggleTheme(){state.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';localStorage.setItem(STORAGE.theme,state.theme);applyTheme(state.theme)}
function applyDensity(){const compact=state.density==='compact';document.documentElement.dataset.density=compact?'compact':'standard';el.fieldToggle?.classList.toggle('active',compact);el.fieldToggle?.setAttribute('aria-pressed',String(compact));el.fieldToggle?.setAttribute('aria-label',compact?'Hızlı Saha modunu kapat':'Hızlı Saha modunu aç');if(el.modePill){el.modePill.textContent=compact?'Hızlı Saha açık':'Standart görünüm';el.modePill.dataset.state=compact?'field':'standard'}}
function toggleDensity(){
  state.density=state.density==='compact'?'standard':'compact';
  localStorage.setItem(STORAGE.density,state.density);
  applyDensity();
  if(!state.current)renderCases();
}
function updateNetwork(){const online=navigator.onLine;el.network.dataset.state=online?'online':'offline';el.network.querySelector('span:last-child').textContent=online?'Çevrimiçi':'Çevrimdışı';el.offline.classList.toggle('hidden',online)}

function searchText(c){
  const sev=c.severity?Object.values(c.severity).flatMap(s=>[s.label,...s.bullets,s.action]):[];
  const meds=(c.meds||[]).flatMap(m=>[m.name,m.dose,...(m.routes||[]).flatMap(r=>[r,routeLabel(r)]),m.repeat,m.maxDose,m.note,APP_META.authority[m.authority]?.label,APP_META.practitionerAuthority?.[m.practitionerAuthority||'UNVERIFIED']?.label,APP_META.practitionerAuthority?.[m.practitionerAuthority||'UNVERIFIED']?.officialLabel]);
  const algorithmSteps=(c.algorithmSteps||[]).flatMap(s=>[s.html,APP_META.authority?.[s.approvalAuthority]?.label,APP_META.practitionerAuthority?.[s.practitionerAuthority]?.label,APP_META.practitionerAuthority?.[s.practitionerAuthority]?.officialLabel]);
  return [c.title,c.subtitle,c.category,c.code,c.summary,...c.criticalActions,...c.quick,...algorithmSteps,...c.warningFindings,c.decision?.q,c.decision?.yes,c.decision?.no,...sev,...meds].filter(Boolean).map(strip).join(' ').toLocaleLowerCase('tr-TR');
}
function priorityRank(c){return ({critical:0,high:1,standard:2}[c.uiPriority]??9)}
function visibleCases(){
  const q=state.query.trim().toLocaleLowerCase('tr-TR');
  let list=casesForPopulation().filter(c=>state.category==='Tümü'||c.category===state.category);
  if(state.view==='favorites')list=list.filter(c=>state.favorites.has(c.id));
  if(q)list=list.filter(c=>searchText(c).includes(q));
  if(state.density==='compact')list=[...list].sort((a,b)=>priorityRank(a)-priorityRank(b)||a.title.localeCompare(b.title,'tr'));
  return list;
}
function populationCount(id){return CASES.filter(c=>c.population===id&&c.clinicalStatus==='reviewed').length}
function ensurePopulationAvailable(){
  if(populationCount(state.population)>0)return;
  const fallback=APP_META.populations.find(p=>populationCount(p.id)>0);
  if(fallback){
    state.population=fallback.id;
    localStorage.setItem(STORAGE.population,fallback.id);
  }
}
function renderPopulations(){
  el.populations.innerHTML=APP_META.populations.map(p=>{
    const n=populationCount(p.id);
    const available=n>0;
    const active=available&&state.population===p.id;
    return `<button type="button" role="tab" aria-selected="${active}" aria-disabled="${!available}" ${available?'':'disabled'} class="population-tab ${active?'active':''} ${available?'':'pending'}" data-population="${p.id}"><span>${esc(p.label)}</span><small>${available?n:'Yakında'}</small></button>`;
  }).join('');
}
function renderFilters(){const cats=categories();if(!cats.includes(state.category))state.category='Tümü';el.filters.innerHTML=cats.map(c=>`<button type="button" aria-pressed="${state.category===c}" class="filter-chip ${state.category===c?'active':''}" data-filter="${esc(c)}">${esc(c)}</button>`).join('')}
function renderStats(){const all=casesForPopulation();el.statCases.textContent=String(all.length);el.statCategories.textContent=String(new Set(all.map(c=>c.category)).size);el.statCasesText.textContent=all.length?'Doğrulanmış içerik':`${popMeta(state.population).algorithmRange} • QA bekliyor`}
function emptyLibrary(){const p=popMeta(state.population);return `<div class="empty-state planned"><div class="empty-icon">◎</div><h3>${esc(p.label)} kütüphanesi QA aşamasında</h3><p>${esc(p.algorithmRange)} için altyapı hazır. Kaynak-kod-doz-yetki doğrulaması tamamlanmadan klinik kart yayınlanmıyor.</p></div>`}
function renderCases(){
  const base=casesForPopulation();const list=visibleCases();el.filterTitle.textContent=state.view==='favorites'?'Favoriler':'Vaka kütüphanesi';el.count.textContent=state.view==='favorites'?`${list.length} favori`:`${list.length} vaka`;
  if(!base.length){el.list.innerHTML=emptyLibrary();return}
  if(!list.length){el.list.innerHTML=`<div class="empty-state"><div class="empty-icon">${state.view==='favorites'?'☆':'⌕'}</div><h3>${state.view==='favorites'?'Favori vaka yok':'Sonuç bulunamadı'}</h3><p>${state.view==='favorites'?'Vaka ekranındaki yıldız ile hızlı erişime ekleyebilirsin.':'Arama veya kategori filtresini değiştir.'}</p></div>`;return}
  el.list.innerHTML=list.map(c=>`<button type="button" class="case-row ${c.uiPriority==='critical'?'priority-critical':''}" style="${caseStyle(c)}" data-open="${c.id}"><span class="case-accent"></span><div class="case-icon">${c.icon}</div><div class="row-copy"><div class="row-title"><h4>${esc(c.title)}</h4>${c.uiPriority==='critical'?'<span class="priority-badge">ÖNCELİKLİ</span>':''}</div><p>${esc(c.subtitle)}</p><div class="row-meta"><span class="tag">${esc(c.category)}</span><span class="source-code">${esc(c.code)}</span></div></div><span class="chev">›</span></button>`).join('');
}
function renderFeatured(){
  const f=casesForPopulation().filter(c=>c.uiFeatured).sort((a,b)=>priorityRank(a)-priorityRank(b)).slice(0,4);
  el.featuredSection.classList.toggle('hidden',f.length===0||state.view==='favorites');
  el.featured.innerHTML=f.map((c,i)=>`<button type="button" class="featured-card ${c.uiPriority==='critical'?'critical':''} ${i===0?'primary':''}" style="${caseStyle(c)}" data-open="${c.id}"><div class="featured-top"><div class="case-icon">${c.icon}</div>${c.uiPriority==='critical'?'<span class="featured-priority">ÖNCELİKLİ</span>':''}</div><span class="featured-kicker">${esc(c.category)}</span><h4>${esc(c.title)}</h4><p>${esc(c.subtitle)}</p><span class="code">${esc(c.code)}</span></button>`).join('');
}
function addRecent(id){state.recent=[id,...state.recent.filter(x=>x!==id)].slice(0,6);localStorage.setItem(STORAGE.recent,JSON.stringify(state.recent))}
function renderShortcuts(){
  const allowed=new Set(casesForPopulation().map(c=>c.id));const items=[];
  [...state.favorites].filter(id=>allowed.has(id)).slice(-3).reverse().forEach(id=>{const c=CASES.find(x=>x.id===id);if(c)items.push({c,kind:'FAVORİ'})});
  state.recent.filter(id=>allowed.has(id)&&!state.favorites.has(id)).slice(0,3).forEach(id=>{const c=CASES.find(x=>x.id===id);if(c)items.push({c,kind:'SON BAKILAN'})});
  el.shortcutSection.classList.toggle('hidden',items.length===0||state.view==='favorites');el.clearRecents.classList.toggle('hidden',state.recent.length===0);
  el.shortcuts.innerHTML=items.map(({c,kind})=>`<button type="button" class="shortcut-card" style="${caseStyle(c)}" data-open="${c.id}"><span class="shortcut-kind">${kind}</span><div class="case-icon">${c.icon}</div><div class="shortcut-copy"><strong>${esc(c.title)}</strong><span>${esc(c.category)} • ${esc(c.code)}</span></div></button>`).join('');
}
function renderAll(){ensurePopulationAvailable();renderAppMeta();renderPopulations();renderFilters();renderStats();renderFeatured();renderShortcuts();renderCases()}

function authorityBadge(m){return authorityMarkup(m.authority)}
function practitionerBadge(m){return practitionerMarkup(m.practitionerAuthority||'UNVERIFIED')}
function renderMeds(c){if(!c.meds?.length)return '';return `<section class="detail-section meds-section" id="medications"><div class="detail-heading"><span class="tiny-icon">Rx</span><div><h3>İlaç / uygulama özeti</h3><p><span class="inline-authority-key direct-key">✓ Yeşil: SKKM/ÇM onayı yok</span> <span class="inline-authority-key skkm-key">◆ Sarı: SKKM/ÇM onayı</span></p></div></div><div class="med-list">${c.meds.map(m=>`<article class="med-card"><div class="med-main"><div><strong>${esc(m.name)}</strong><span class="dose">${esc(m.dose)}</span></div><div class="med-badges" aria-label="Yetki göstergeleri">${authorityBadge(m)}${practitionerBadge(m)}</div></div><div class="med-meta"><span>Yol: <b>${esc((m.routes||[]).map(routeLabel).join(' / '))}</b></span>${m.repeat?`<span>Tekrar: <b>${esc(m.repeat)}</b></span>`:''}${m.maxDose?`<span>Maks: <b>${esc(m.maxDose)}</b></span>`:''}</div><p>${esc(m.note)}</p></article>`).join('')}</div><div class="authority-warning">“Yalnız AABT” rozeti yalnız resmî turuncu kutu görsel olarak doğrulandığında gösterilir. Rozet olmaması ATT yetkisini tek başına doğrulamaz; resmî şema ve kurum yetkisi esastır.</div></section>`}
function renderAlgorithmSteps(c){
  const steps=c.algorithmSteps?.length?c.algorithmSteps:(c.quick||[]).map(html=>({html}));
  return steps.map(step=>{
    const restriction=practitionerMarkup(step.practitionerAuthority||'UNVERIFIED');
    return `<div class="quick-step"><div class="quick-step-copy">${step.html}</div>${restriction?`<div class="quick-step-restriction">${restriction}</div>`:''}</div>`;
  }).join('');
}
function renderSeverity(c,level='mild'){if(!c.severity)return '';const s=c.severity[level];return `<div class="severity-card ${level}" id="severityCard"><div class="severity-head"><span class="level-dot"></span><strong>${esc(s.label)}</strong></div><ul>${s.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul><div class="action-box"><b>Ne yap?</b><p>${esc(s.action)}</p></div></div>`}
function renderSource(c){const s=c.source;const codes=s.algorithmCodes?.length?s.algorithmCodes.join(' + '):'Sayfa referansı';return `<section class="detail-section source-section subdued-section" id="source"><div class="detail-heading"><span class="tiny-icon">§</span><div><h3>Kaynak izi</h3><p>Bu kartın hangi resmî sürüme dayandığını gösterir.</p></div></div><div class="source-grid"><div><span>Belge</span><strong>${esc(s.documentId)}</strong></div><div><span>Kod</span><strong>${esc(codes)}</strong></div><div><span>PDF sayfa</span><strong>${esc(s.page)}</strong></div><div><span>İnceleme</span><strong>${esc(s.reviewedAt)}</strong></div></div><div class="source-actions"><a href="${esc(s.officialPageUrl)}" target="_blank" rel="noopener">Resmî sayfa ↗</a><a href="${esc(s.officialPdfUrl)}" target="_blank" rel="noopener">Ek‑2 PDF ↗</a></div><p class="source-disclaimer">Çevrimdışıyken vaka içeriği kullanılabilir; resmî dış bağlantılar internet gerektirebilir. Resmî belge her zaman son referanstır.</p></section>`}
function openCase(id){
  const c=CASES.find(x=>x.id===id&&x.population===state.population);if(!c)return;state.current=id;state.returnScrollY=scrollY;state.returnNav=state.nav;addRecent(id);renderShortcuts();const fav=state.favorites.has(id);
  const jumps=[['critical-actions','İlk adımlar','critical'],['algorithm','Algoritma',''],...(c.severity?[['severity','Klinik ayrım','']]:[]),['red-flags','Acil uyarılar','critical'],...(c.meds?.length?[['medications','İlaçlar','']]:[]),['decision','Karar',''],['source','Kaynak','']];
  el.detail.innerHTML=`<header class="detail-top"><div class="detail-bar"><button type="button" class="back-btn" data-action="back" aria-label="Geri">‹</button><div class="detail-title"><div class="kicker">${esc(popMeta(c.population).label.toUpperCase())} • ${esc(c.category.toUpperCase())}</div><h2>${esc(c.title)}</h2></div><button type="button" class="fav-btn ${fav?'active':''}" data-action="favorite" aria-label="${fav?'Favorilerden çıkar':'Favorilere ekle'}" aria-pressed="${fav}">${fav?'★':'☆'}</button></div><div class="source-ribbon"><span>§</span><span>${esc(c.code)} • PDF s.${esc(c.page)} • gözden geçirme ${formatDateTR(c.source.reviewedAt)}</span></div><div class="detail-jumps">${jumps.map(j=>`<button type="button" class="jump-chip ${j[2]}" data-jump="${j[0]}">${j[1]}</button>`).join('')}</div></header>
  <div class="field-banner"><strong>⚡ Hızlı Saha</strong><span>İlk Kritik Adımlar, acil uyarılar, karar ve dozlar önde; açıklayıcı bölümler geri planda.</span></div>
  <div class="detail-body" style="${caseStyle(c)}">
    <section class="first30-card" id="critical-actions"><div class="first30-head"><span>ÖNCE</span><div><strong>İlk Kritik Adımlar</strong><p>Önce bunları gör; ardından algoritma ve karar ayrıntısına ilerle.</p></div></div><ol>${c.criticalActions.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></section>
    <section class="case-summary"><span class="case-category">${esc(c.category)}</span><p>${esc(c.summary)}</p></section>
    <section class="detail-section emphasis" id="algorithm"><div class="detail-heading"><span class="tiny-icon">↯</span><div><h3>İlk bakışta algoritma</h3><p>Sıralamayı seri klinik yeniden değerlendirmeyle birlikte oku.</p></div></div><div class="quick-steps">${renderAlgorithmSteps(c)}</div></section>
    ${c.severity?`<section class="detail-section" id="severity"><div class="detail-heading"><span class="tiny-icon">3</span><div><h3>${esc(c.severityView?.title||'Klinik ayrım')}</h3><p>${esc(c.severityView?.note||'Klinik ayrımı resmî kaynakla birlikte değerlendir.')}</p></div></div><div class="severity-tabs" role="tablist"><button type="button" role="tab" aria-selected="true" class="severity-tab active" data-level="mild">${esc(c.severity.mild.label)}</button><button type="button" role="tab" aria-selected="false" class="severity-tab" data-level="moderate">${esc(c.severity.moderate.label)}</button><button type="button" role="tab" aria-selected="false" class="severity-tab" data-level="severe">${esc(c.severity.severe.label)}</button></div>${renderSeverity(c)}</section>`:''}
    <div class="detail-columns"><section class="detail-section critical-section" id="red-flags"><div class="detail-heading"><span class="tiny-icon danger">!</span><div><h3>Acil Uyarı Bulguları</h3><p>Önceliği, müdahaleyi veya nakil kararını değiştirebilecek bulgular.</p></div></div><div class="red-flag-list">${c.warningFindings.map(r=>`<div class="red-flag">${esc(r)}</div>`).join('')}</div></section><section class="detail-section decision-section" id="decision"><div class="detail-heading"><span class="tiny-icon">◇</span><div><h3>Karar noktası</h3><p>Şemadaki ana dallanma.</p></div></div><div class="decision-box"><strong>${esc(c.decision.q)}</strong><div class="decision-branches"><div class="branch yes"><b>EVET</b><span>${esc(c.decision.yes)}</span></div><div class="branch no"><b>HAYIR</b><span>${esc(c.decision.no)}</span></div></div></div></section></div>
    ${renderMeds(c)}${renderSource(c)}
  </div>`;
  el.main.classList.add('hidden');el.detail.classList.remove('hidden');el.shell.classList.add('detail-open');scrollTo(0,0);
}
function closeCase(){state.current=null;el.detail.classList.add('hidden');el.main.classList.remove('hidden');el.shell.classList.remove('detail-open');renderAll();setNav(state.returnNav||'home');requestAnimationFrame(()=>scrollTo(0,state.returnScrollY||0))}
function setNav(name){state.nav=name;$$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.nav===name))}
function showHome(top=true){state.view='home';state.current=null;el.detail.classList.add('hidden');el.main.classList.remove('hidden');el.shell.classList.remove('detail-open');setNav('home');renderAll();if(top)scrollTo(0,0)}
function showCases(){state.view='home';setNav('cases');renderAll();requestAnimationFrame(()=>el.filterTitle.scrollIntoView({behavior:'smooth',block:'start'}))}
function showFavorites(){state.view='favorites';state.category='Tümü';state.query='';el.search.value='';setNav('favorites');renderAll();requestAnimationFrame(()=>el.filterTitle.scrollIntoView({behavior:'smooth',block:'start'}))}
function selectPopulation(id){
  if(!APP_META.populations.some(p=>p.id===id)||populationCount(id)===0)return;
  state.population=id;state.category='Tümü';state.query='';state.view='home';el.search.value='';
  localStorage.setItem(STORAGE.population,id);renderAll();scrollTo(0,0);
}

applyTheme();applyDensity();updateNetwork();renderAll();
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change',()=>{if(!localStorage.getItem(STORAGE.theme))applyTheme()});
addEventListener('online',updateNetwork);addEventListener('offline',updateNetwork);

const sourceBtn=$('#sourceBtn');
let sourceReturnFocus=null;
function sourceFocusable(){return [...el.source.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(node=>!node.hidden)}
function openSourceSheet(){
  sourceReturnFocus=document.activeElement;
  el.source.classList.remove('hidden');
  document.documentElement.classList.add('dialog-open');
  sourceBtn?.setAttribute('aria-expanded','true');
  requestAnimationFrame(()=>sourceFocusable()[0]?.focus());
}
function closeSourceSheet(){
  if(el.source.classList.contains('hidden'))return;
  el.source.classList.add('hidden');
  document.documentElement.classList.remove('dialog-open');
  sourceBtn?.setAttribute('aria-expanded','false');
  requestAnimationFrame(()=>sourceReturnFocus?.focus?.());
}

document.addEventListener('click',e=>{
  const open=e.target.closest('[data-open]');if(open){openCase(open.dataset.open);return}
  const pop=e.target.closest('[data-population]');if(pop){selectPopulation(pop.dataset.population);return}
  const filter=e.target.closest('[data-filter]');if(filter){state.category=filter.dataset.filter;renderFilters();renderCases();return}
  const jump=e.target.closest('[data-jump]');if(jump){document.getElementById(jump.dataset.jump)?.scrollIntoView({behavior:'smooth',block:'start'});return}
  const level=e.target.closest('[data-level]');if(level&&state.current){$$('.severity-tab').forEach(b=>{const active=b===level;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active))});const c=CASES.find(x=>x.id===state.current);$('#severityCard').outerHTML=renderSeverity(c,level.dataset.level);return}
  const action=e.target.closest('[data-action]')?.dataset.action;
  if(action==='show-all'){el.filterTitle.scrollIntoView({behavior:'smooth'});return}
  if(action==='clear-recents'){state.recent=[];localStorage.removeItem(STORAGE.recent);renderShortcuts();return}
  if(action==='back'){closeCase();return}
  if(action==='favorite'&&state.current){const id=state.current;state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);localStorage.setItem(STORAGE.favorites,JSON.stringify([...state.favorites]));const b=e.target.closest('[data-action="favorite"]');const active=state.favorites.has(id);b.classList.toggle('active',active);b.textContent=active?'★':'☆';b.setAttribute('aria-pressed',String(active));b.setAttribute('aria-label',active?'Favorilerden çıkar':'Favorilere ekle');return}
  if(action==='close-sheet'){closeSourceSheet();return}
  if(action==='reload-app'){location.reload();return}
  const nav=e.target.closest('[data-nav]')?.dataset.nav;if(nav==='home'){showHome();return}if(nav==='cases'){showCases();return}if(nav==='favorites'){showFavorites();return}
  if(e.target===el.source)closeSourceSheet();
});
el.search.addEventListener('input',e=>{state.query=e.target.value;renderCases();if(state.query)el.filterTitle.scrollIntoView({behavior:'smooth',block:'start'})});
sourceBtn?.addEventListener('click',openSourceSheet);
el.themeToggle.addEventListener('click',toggleTheme);el.fieldToggle.addEventListener('click',toggleDensity);
addEventListener('keydown',e=>{
  const sourceOpen=!el.source.classList.contains('hidden');
  if(sourceOpen&&e.key==='Tab'){
    const focusable=sourceFocusable();if(!focusable.length)return;
    const first=focusable[0],last=focusable.at(-1);
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
  if(e.key==='Escape'){if(sourceOpen)closeSourceSheet();else if(state.current)closeCase()}
});
if('serviceWorker' in navigator)addEventListener('load',()=>{
  const hadController=Boolean(navigator.serviceWorker.controller);let notified=false;
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(hadController&&!notified){notified=true;el.updateBanner?.classList.remove('hidden')}});
  navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(reg=>reg.update()).catch(()=>{});
});
