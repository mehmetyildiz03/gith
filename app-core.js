const STORAGE={theme:'saha112:theme',density:'saha112:density',favorites:'saha112:favs',recent:'saha112:recent',population:'saha112:population'};
const safeJSON=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}};
const state={
  theme:localStorage.getItem(STORAGE.theme)||'',
  density:localStorage.getItem(STORAGE.density)||'standard',
  population:localStorage.getItem(STORAGE.population)||'adult',
  category:'Tümü',query:'',view:'home',nav:'home',current:null,
  favorites:new Set(safeJSON(STORAGE.favorites,[])),recent:safeJSON(STORAGE.recent,[]),
  returnScrollY:0,returnNav:'home',protocolHistory:[]
};
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
const el={
  shell:$('.app-shell'),main:$('#mainView'),detail:$('#detailView'),source:$('#sourceSheet'),search:$('#searchInput'),
  featured:$('#featuredGrid'),featuredSection:$('#featuredSection'),protocolSection:$('#protocolSection'),protocols:$('#protocolGrid'),filters:$('#filterRow'),list:$('#caseList'),count:$('#caseCount'),
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
const latestReviewDate=()=>[...(CASES||[]),...(typeof PROTOCOLS!=='undefined'?PROTOCOLS:[])].filter(c=>c.clinicalStatus==='reviewed').map(c=>c.source?.reviewedAt).filter(Boolean).sort().at(-1)||'';
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

function algorithmStepSearch(step){return [step?.precondition,step?.html,step?.followUp?.label,step?.followUp?.html,step?.followUp?.transition,step?.followUp?.notice,APP_META.authority?.[step?.approvalAuthority]?.label,APP_META.practitionerAuthority?.[step?.practitionerAuthority]?.label,APP_META.practitionerAuthority?.[step?.practitionerAuthority]?.officialLabel]}
function algorithmBranchSearch(branches=[]){
  return branches.flatMap(branch=>[branch?.label,branch?.note,branch?.transition,...(branch?.notices||[]),...(branch?.steps||[]).flatMap(algorithmStepSearch),...algorithmBranchSearch(branch?.branches||[])]);
}
function searchText(c){
  const sev=c.severity?Object.values(c.severity).flatMap(s=>[s.label,...s.bullets,s.action]):[];
  const meds=(c.meds||[]).flatMap(m=>[m.name,m.dose,...(m.routes||[]).flatMap(r=>[r,routeLabel(r)]),m.repeat,m.maxDose,m.note,APP_META.authority[m.authority]?.label,APP_META.practitionerAuthority?.[m.practitionerAuthority||'UNVERIFIED']?.label,APP_META.practitionerAuthority?.[m.practitionerAuthority||'UNVERIFIED']?.officialLabel]);
  const algorithmSteps=(c.algorithmSteps||[]).flatMap(algorithmStepSearch);
  const algorithmBranches=algorithmBranchSearch(c.algorithmBranches||[]);
  const algorithmNotices=c.algorithmNotices||[];
  const algorithmAfter=(c.algorithmAfter||[]).flatMap(algorithmStepSearch);
  const referenceGroups=(c.referenceGroups||[]).flatMap(group=>[group.title,...(group.items||[]).flat()]);
  return [c.title,c.subtitle,c.category,c.code,c.summary,...c.criticalActions,...c.quick,...algorithmSteps,...algorithmNotices,...algorithmBranches,...algorithmAfter,...c.warningFindings,...referenceGroups,c.decision?.q,c.decision?.yes,c.decision?.no,...sev,...meds].filter(Boolean).map(strip).join(' ').toLocaleLowerCase('tr-TR');
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
function protocolSearchText(p){
  const flow=(p.flow||[]).flatMap(item=>[item.lead,item.question,item.yes,item.no,item.html,item.targetCode,item.buttonLabel,item.noButtonLabel]);
  const keyPoints=(p.keyPoints||[]).flatMap(group=>[group.title,...(group.items||[]).flat()]);
  return [p.title,p.subtitle,p.category,p.code,p.summary,p.helperText,...keyPoints,...flow].filter(Boolean).map(strip).join(' ').toLocaleLowerCase('tr-TR');
}
function renderProtocols(){
  if(!el.protocolSection||!el.protocols||typeof PROTOCOLS==='undefined')return;
  const q=state.query.trim().toLocaleLowerCase('tr-TR');
  const list=PROTOCOLS.filter(p=>p.population===state.population&&p.clinicalStatus==='reviewed'&&(!q||protocolSearchText(p).includes(q))).sort((a,b)=>(a.order||99)-(b.order||99));
  el.protocolSection.classList.toggle('hidden',list.length===0||state.view==='favorites');
  el.protocols.innerHTML=list.map(p=>`<button type="button" class="protocol-card" style="${caseStyle(p)}" data-protocol-open="${p.id}"><div class="protocol-card-icon">${esc(p.order||p.icon)}</div><div class="protocol-card-copy"><span>${p.order?`${p.order}. adım • `:''}${esc(p.code)}</span><strong>${esc(p.title)}</strong><p>${esc(p.subtitle)}</p></div><span class="chev">›</span></button>`).join('');
}
function protocolContactBadge(){return '<span class="protocol-contact-badge" aria-label="SKKM/ÇM ile iletişim">☎ SKKM/ÇM</span>'}
function protocolBranchLink(label,id){
  return id?`<button type="button" class="protocol-branch-link" data-protocol-open="${esc(id)}">${esc(label||'Protokolü aç')} <span>›</span></button>`:'';
}
function renderProtocolFlow(p){
  let n=0;
  return (p.flow||[]).map(item=>{
    if(item.type==='step'){
      n+=1;
      return `<div class="protocol-flow-step"><span class="protocol-step-no">${n}</span><div class="protocol-step-copy">${item.html}${item.skkmContact?protocolContactBadge():''}</div></div>`;
    }
    if(item.type==='decision'){
      const yesLink=protocolBranchLink(item.yesButtonLabel,item.yesTargetProtocolId);
      const noLink=protocolBranchLink(item.noButtonLabel,item.noTargetProtocolId);
      return `<div class="protocol-decision"><div class="protocol-decision-q">${item.lead?`<p>${esc(item.lead)}</p>`:''}<strong>${esc(item.question)}</strong></div><div class="protocol-decision-branches"><div class="protocol-branch yes"><b>EVET</b><span>${esc(item.yes)}</span>${yesLink}</div><div class="protocol-branch no"><b>HAYIR</b><span>${esc(item.no)}</span>${item.noSkkmContact?protocolContactBadge():''}${noLink}</div></div></div>`;
    }
    if(item.type==='transition'){
      const attrs=item.targetProtocolId?`data-protocol-open="${esc(item.targetProtocolId)}"`:item.targetAction?`data-protocol-action="${esc(item.targetAction)}"`:'';
      const tag=attrs?'button':'div';
      return `<${tag}${attrs?' type="button"':''} class="protocol-transition ${attrs?'interactive':''}" ${attrs}><span>→</span><div><strong>${esc(item.html)}</strong><small>${esc(item.targetCode||item.buttonLabel||'')}</small></div>${attrs?'<span class="protocol-transition-chev">›</span>':''}</${tag}>`;
    }
    return '';
  }).join('');
}
function renderProtocolKeyPoints(p){
  if(!p.keyPoints?.length)return '';
  return `<section class="detail-section protocol-keypoints-section" id="protocol-keypoints"><div class="detail-heading"><span class="tiny-icon">◎</span><div><h3>Hızlı hatırlatma</h3><p>İlk değerlendirmede gözden kaçmaması gereken çerçeve.</p></div></div><div class="protocol-keypoint-grid">${p.keyPoints.map(group=>`<article class="protocol-keypoint-card"><h4>${esc(group.title)}</h4><div class="protocol-keypoint-list">${(group.items||[]).map(([key,label])=>`<div class="protocol-keypoint-row${String(key).length>4?' long-key':''}"><b>${esc(key)}</b><span>${esc(label)}</span></div>`).join('')}</div></article>`).join('')}</div></section>`;
}
function openProtocol(id,{history='root'}={}){
  if(typeof PROTOCOLS==='undefined')return;
  const p=PROTOCOLS.find(x=>x.id===id&&x.population===state.population);if(!p)return;
  if(history==='root'){state.protocolHistory=[];state.returnScrollY=scrollY;state.returnNav=state.nav}
  else if(history==='push'&&state.current?.startsWith('protocol:'))state.protocolHistory.push(state.current.slice('protocol:'.length));
  state.current=`protocol:${id}`;
  const jumps=[];if(p.keyPoints?.length)jumps.push(['protocol-keypoints','Hatırlatma','']);jumps.push(['protocol-flow','Akış','critical'],['source','Kaynak','']);
  el.detail.innerHTML=`<header class="detail-top"><div class="detail-bar"><button type="button" class="back-btn" data-action="back" aria-label="Geri">‹</button><div class="detail-title"><div class="kicker">TEMEL PROTOKOL • ${p.order?`${p.order}. ADIM • `:''}${esc(p.category.toUpperCase())}</div><h2>${esc(p.title)}</h2></div><span class="detail-spacer" aria-hidden="true"></span></div><div class="source-ribbon"><span>§</span><span>${esc(p.code)} • PDF s.${esc(p.page)} • gözden geçirme ${formatDateTR(p.source.reviewedAt)}</span></div><div class="detail-jumps">${jumps.map(j=>`<button type="button" class="jump-chip ${j[2]}" data-jump="${j[0]}">${j[1]}</button>`).join('')}</div></header>
  <div class="detail-body" style="${caseStyle(p)}">
    <section class="case-summary protocol-summary"><span class="case-category">${p.order?`${p.order}. adım • `:''}Temel Protokol</span><p>${esc(p.summary)}</p><small>${esc(p.helperText||'Bu bölüm vaka kartı değildir; tüm vakalarda başvurulan temel akıştır.')}</small></section>
    ${renderProtocolKeyPoints(p)}
    <section class="detail-section emphasis" id="protocol-flow"><div class="detail-heading"><span class="tiny-icon">⌖</span><div><h3>Uygulama akışı</h3><p>Resmî ${esc(p.code)} sırası korunmuştur.</p></div></div><div class="protocol-flow">${renderProtocolFlow(p)}</div></section>
    ${renderSource(p)}
  </div>`;
  el.main.classList.add('hidden');el.detail.classList.remove('hidden');el.shell.classList.add('detail-open');scrollTo(0,0);
}
function backFromDetail(){
  if(state.current?.startsWith('protocol:')&&state.protocolHistory.length){
    const previous=state.protocolHistory.pop();openProtocol(previous,{history:'back'});return;
  }
  closeCase();
}
function showCaseLibraryFromProtocol(){
  state.current=null;state.protocolHistory=[];state.view='home';state.category='Tümü';state.query='';el.search.value='';
  el.detail.classList.add('hidden');el.main.classList.remove('hidden');el.shell.classList.remove('detail-open');setNav('cases');renderAll();
  requestAnimationFrame(()=>el.filterTitle.scrollIntoView({behavior:'smooth',block:'start'}));
}
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
function renderAll(){ensurePopulationAvailable();renderAppMeta();renderPopulations();renderFilters();renderStats();renderProtocols();renderFeatured();renderShortcuts();renderCases()}

function authorityBadge(m){return authorityMarkup(m.authority)}
function practitionerBadge(m){return practitionerMarkup(m.practitionerAuthority||'UNVERIFIED')}
function renderMeds(c){
  if(!c.meds?.length)return '';
  const hasSourceUnspecified=c.meds.some(m=>m.authority==='ALGORITHM');
  const neutralKey=hasSourceUnspecified?'<span class="inline-authority-key neutral-key">• Gri: kaynakta yetki belirtilmemiş</span>':'';
  return `<section class="detail-section meds-section" id="medications"><div class="detail-heading"><span class="tiny-icon">Rx</span><div><h3>İlaç / uygulama özeti</h3><p><span class="inline-authority-key direct-key">✓ Yeşil: SKKM/ÇM onayı yok</span> <span class="inline-authority-key skkm-key">◆ Sarı: SKKM/ÇM onayı</span> ${neutralKey}</p></div></div><div class="med-list">${c.meds.map(m=>`<article class="med-card"><div class="med-main"><div><strong>${esc(m.name)}</strong><span class="dose">${esc(m.dose)}</span></div><div class="med-badges" aria-label="Yetki göstergeleri">${authorityBadge(m)}${practitionerBadge(m)}</div></div><div class="med-meta"><span>Yol: <b>${esc((m.routes||[]).map(routeLabel).join(' / '))}</b></span>${m.repeat?`<span>Tekrar: <b>${esc(m.repeat)}</b></span>`:''}${m.maxDose?`<span>Maks: <b>${esc(m.maxDose)}</b></span>`:''}</div><p>${esc(m.note)}</p></article>`).join('')}</div><div class="authority-warning">“Yalnız AABT” yalnız resmî turuncu kutu doğrulandığında gösterilir. Gri yetki rozeti, ilaç/doz resmî kaynakta yer aldığı halde ilgili bölümde SKKM/ÇM veya uygulayıcı yetki kodlaması bulunmadığını ve çıkarım yapılmadığını belirtir.</div></section>`;
}
function renderActionStep(step,{branch=false}={}){
  const approval=step.approvalAuthority==='SKKM'?authorityMarkup('SKKM'):'';
  const restriction=practitionerMarkup(step.practitionerAuthority||'UNVERIFIED');
  const badges=[approval,restriction].filter(Boolean).join('');
  const cls=branch?'algo-step':'quick-step';
  const copyClass=branch?'algo-step-copy':'quick-step-copy';
  const precondition=step.precondition?`<div class="algo-precondition">${esc(step.precondition)}</div>`:'';
  const followUp=step.followUp?(()=>{
    const body=step.followUp.html?`<div>${step.followUp.html}</div>`:'';
    const transition=step.followUp.transition?`<div class="algo-transition"><span aria-hidden="true">→</span><strong>${esc(step.followUp.transition)}</strong></div>`:'';
    const notice=step.followUp.notice?`<div class="algo-notice"><span aria-hidden="true">!</span><p>${esc(step.followUp.notice)}</p></div>`:'';
    return `<div class="algo-step-followup"><span>${esc(step.followUp.label||'Devam')}</span>${body}${transition}${notice}</div>`;
  })():'';
  return `<div class="${cls}">${precondition}<div class="${copyClass}">${step.html}</div>${badges?`<div class="action-step-badges">${badges}</div>`:''}${followUp}</div>`;
}
function renderAlgorithmSteps(c){
  const steps=c.algorithmSteps?.length?c.algorithmSteps:(c.quick||[]).map(html=>({html}));
  return steps.map(step=>renderActionStep(step)).join('');
}
function renderAlgorithmNotices(c){
  if(!c.algorithmNotices?.length)return '';
  return `<div class="algorithm-notices">${c.algorithmNotices.map(note=>`<div class="algo-notice"><span aria-hidden="true">!</span><p>${esc(note)}</p></div>`).join('')}</div>`;
}
function renderAlgorithmBranch(branch,depth=0){
  const safeDepth=Math.min(depth,3);
  const triage=['green','yellow','red','black'].includes(branch.triageCode)?` triage-${branch.triageCode}`:'';
  const notices=(branch.notices||[]).map(note=>`<div class="algo-notice"><span aria-hidden="true">!</span><p>${esc(note)}</p></div>`).join('');
  const steps=(branch.steps||[]).map(step=>renderActionStep(step,{branch:true})).join('');
  const transition=branch.transition?`<div class="algo-transition"><span aria-hidden="true">→</span><strong>${esc(branch.transition)}</strong></div>`:'';
  const children=(branch.branches||[]).map(child=>renderAlgorithmBranch(child,depth+1)).join('');
  return `<section class="algo-branch algo-depth-${safeDepth}${triage}"><div class="algo-branch-head"><strong>${esc(branch.label)}</strong>${branch.note?`<p>${esc(branch.note)}</p>`:''}</div>${steps?`<div class="algo-branch-steps">${steps}</div>`:''}${transition}${notices}${children?`<div class="algo-branch-children">${children}</div>`:''}</section>`;
}
function algorithmBranchLayoutClass(c){
  return c.algorithmBranchLayout==='profiles'?' profiles':c.algorithmBranchLayout==='split'?' split':'';
}
function renderAlgorithmBranches(c){
  if(!c.algorithmBranches?.length)return '';
  const layout=algorithmBranchLayoutClass(c);
  return `<div class="algorithm-branches${layout}" aria-label="Algoritma dalları">${c.algorithmBranches.map(branch=>renderAlgorithmBranch(branch)).join('')}</div>`;
}
function renderAlgorithmAfter(c){
  if(!c.algorithmAfter?.length)return '';
  return `<div class="algorithm-after" aria-label="Algoritma sonrası geçiş">${c.algorithmAfter.map(step=>`<div class="algorithm-after-card"><span class="algorithm-after-arrow">→</span><div><strong>${esc(step.label||'Sonraki adım')}</strong><div>${step.html}</div></div></div>`).join('')}</div>`;
}
function renderSeverity(c,level='mild'){if(!c.severity)return '';const s=c.severity[level];return `<div class="severity-card ${level}" id="severityCard"><div class="severity-head"><span class="level-dot"></span><strong>${esc(s.label)}</strong></div><ul>${s.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul><div class="action-box"><b>Ne yap?</b><p>${esc(s.action)}</p></div></div>`}
function renderReferenceGroups(c){
  if(!c.referenceGroups?.length)return '';
  return `<section class="detail-section subdued-section" id="reference-points"><div class="detail-heading"><span class="tiny-icon">◎</span><div><h3>Resmî Anahtar Noktalar</h3><p>Ek‑2’deki tablo ve saha prosedürü bilgileri; ana algoritmadan ayrı gösterilir.</p></div></div><div class="protocol-keypoint-grid case-reference-grid">${c.referenceGroups.map(group=>`<article class="protocol-keypoint-card${group.wide?' wide':''}"><h4>${esc(group.title)}</h4><div class="protocol-keypoint-list">${(group.items||[]).map(([key,label])=>`<div class="protocol-keypoint-row"><b>${esc(key)}</b><span>${esc(label)}</span></div>`).join('')}</div></article>`).join('')}</div></section>`;
}
function renderSource(c){const s=c.source;const codes=s.algorithmCodes?.length?s.algorithmCodes.join(' + '):'Sayfa referansı';return `<section class="detail-section source-section subdued-section" id="source"><div class="detail-heading"><span class="tiny-icon">§</span><div><h3>Kaynak izi</h3><p>Bu kartın hangi resmî sürüme dayandığını gösterir.</p></div></div><div class="source-grid"><div><span>Belge</span><strong>${esc(s.documentId)}</strong></div><div><span>Kod</span><strong>${esc(codes)}</strong></div><div><span>PDF sayfa</span><strong>${esc(s.page)}</strong></div><div><span>İnceleme</span><strong>${esc(s.reviewedAt)}</strong></div></div><div class="source-actions"><a href="${esc(s.officialPageUrl)}" target="_blank" rel="noopener">Resmî sayfa ↗</a><a href="${esc(s.officialPdfUrl)}" target="_blank" rel="noopener">Ek‑2 PDF ↗</a></div><p class="source-disclaimer">Çevrimdışıyken vaka içeriği kullanılabilir; resmî dış bağlantılar internet gerektirebilir. Resmî belge her zaman son referanstır. Ek‑2, akış şemalarının bağlayıcı ve kesin talimat niteliğinde olmadığını; somut olayda mesleki bilgi, deneyim, klinik değerlendirme ve yürürlükteki mevzuatın gözetilmesi gerektiğini belirtir.</p></section>`}
function openCase(id){
  const c=CASES.find(x=>x.id===id&&x.population===state.population);if(!c)return;state.current=id;state.returnScrollY=scrollY;state.returnNav=state.nav;addRecent(id);renderShortcuts();const fav=state.favorites.has(id);
  const jumps=[['critical-actions','İlk adımlar','critical'],['algorithm','Algoritma',''],...(c.severity?[['severity','Klinik ayrım','']]:[]),['red-flags','Acil uyarılar','critical'],...(c.referenceGroups?.length?[['reference-points','Anahtar','']]:[]),...(c.meds?.length?[['medications','İlaçlar','']]:[]),...(!c.decisionIntegrated?[['decision','Karar','']]:[]),['source','Kaynak','']];
  el.detail.innerHTML=`<header class="detail-top"><div class="detail-bar"><button type="button" class="back-btn" data-action="back" aria-label="Geri">‹</button><div class="detail-title"><div class="kicker">${esc(popMeta(c.population).label.toUpperCase())} • ${esc(c.category.toUpperCase())}</div><h2>${esc(c.title)}</h2></div><button type="button" class="fav-btn ${fav?'active':''}" data-action="favorite" aria-label="${fav?'Favorilerden çıkar':'Favorilere ekle'}" aria-pressed="${fav}">${fav?'★':'☆'}</button></div><div class="source-ribbon"><span>§</span><span>${esc(c.code)} • PDF s.${esc(c.page)} • gözden geçirme ${formatDateTR(c.source.reviewedAt)}</span></div><div class="detail-jumps">${jumps.map(j=>`<button type="button" class="jump-chip ${j[2]}" data-jump="${j[0]}">${j[1]}</button>`).join('')}</div></header>
  <div class="field-banner"><strong>⚡ Hızlı Saha</strong><span>İlk Kritik Adımlar, acil uyarılar, karar ve dozlar önde; açıklayıcı bölümler geri planda.</span></div>
  <div class="detail-body" style="${caseStyle(c)}">
    <section class="first30-card" id="critical-actions"><div class="first30-head"><span>ÖNCE</span><div><strong>İlk Kritik Adımlar</strong><p>Önce bunları gör; ardından algoritma ve karar ayrıntısına ilerle.</p></div></div><ol>${c.criticalActions.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></section>
    <section class="case-summary"><span class="case-category">${esc(c.category)}</span><p>${esc(c.summary)}</p></section>
    <section class="detail-section emphasis" id="algorithm"><div class="detail-heading"><span class="tiny-icon">↯</span><div><h3>İlk bakışta algoritma</h3><p>Sıralamayı seri klinik yeniden değerlendirmeyle birlikte oku.</p></div></div><div class="quick-steps">${renderAlgorithmSteps(c)}</div>${renderAlgorithmNotices(c)}${renderAlgorithmBranches(c)}${renderAlgorithmAfter(c)}</section>
    ${c.severity?`<section class="detail-section" id="severity"><div class="detail-heading"><span class="tiny-icon">3</span><div><h3>${esc(c.severityView?.title||'Klinik ayrım')}</h3><p>${esc(c.severityView?.note||'Klinik ayrımı resmî kaynakla birlikte değerlendir.')}</p></div></div><div class="severity-tabs" role="tablist"><button type="button" role="tab" aria-selected="true" class="severity-tab active" data-level="mild">${esc(c.severity.mild.label)}</button><button type="button" role="tab" aria-selected="false" class="severity-tab" data-level="moderate">${esc(c.severity.moderate.label)}</button><button type="button" role="tab" aria-selected="false" class="severity-tab" data-level="severe">${esc(c.severity.severe.label)}</button></div>${renderSeverity(c)}</section>`:''}
    <div class="detail-columns ${c.decisionIntegrated?'single':''}"><section class="detail-section critical-section" id="red-flags"><div class="detail-heading"><span class="tiny-icon danger">!</span><div><h3>Acil Uyarı Bulguları</h3><p>Önceliği, müdahaleyi veya nakil kararını değiştirebilecek bulgular.</p></div></div><div class="red-flag-list">${c.warningFindings.map(r=>`<div class="red-flag">${esc(r)}</div>`).join('')}</div></section>${!c.decisionIntegrated?`<section class="detail-section decision-section" id="decision"><div class="detail-heading"><span class="tiny-icon">◇</span><div><h3>Karar noktası</h3><p>Şemadaki ana dallanma.</p></div></div><div class="decision-box"><strong>${esc(c.decision.q)}</strong><div class="decision-branches"><div class="branch yes"><b>EVET</b><span>${esc(c.decision.yes)}</span></div><div class="branch no"><b>HAYIR</b><span>${esc(c.decision.no)}</span></div></div></div></section>`:''}</div>
    ${renderReferenceGroups(c)}${renderMeds(c)}${renderSource(c)}
  </div>`;
  el.main.classList.add('hidden');el.detail.classList.remove('hidden');el.shell.classList.add('detail-open');scrollTo(0,0);
}
function closeCase(){state.current=null;state.protocolHistory=[];el.detail.classList.add('hidden');el.main.classList.remove('hidden');el.shell.classList.remove('detail-open');renderAll();setNav(state.returnNav||'home');requestAnimationFrame(()=>scrollTo(0,state.returnScrollY||0))}
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
  const protocolOpen=e.target.closest('[data-protocol-open]');if(protocolOpen){openProtocol(protocolOpen.dataset.protocolOpen,{history:state.current?.startsWith('protocol:')?'push':'root'});return}
  const protocolAction=e.target.closest('[data-protocol-action]')?.dataset.protocolAction;if(protocolAction==='cases'){showCaseLibraryFromProtocol();return}
  const open=e.target.closest('[data-open]');if(open){openCase(open.dataset.open);return}
  const pop=e.target.closest('[data-population]');if(pop){selectPopulation(pop.dataset.population);return}
  const filter=e.target.closest('[data-filter]');if(filter){state.category=filter.dataset.filter;renderFilters();renderCases();return}
  const jump=e.target.closest('[data-jump]');if(jump){const target=document.getElementById(jump.dataset.jump);if(target){const headerH=el.detail.querySelector('.detail-top')?.getBoundingClientRect().height||0;const top=Math.max(0,target.getBoundingClientRect().top+scrollY-headerH-8);scrollTo({top,behavior:'smooth'})}return}
  const level=e.target.closest('[data-level]');if(level&&state.current){$$('.severity-tab').forEach(b=>{const active=b===level;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active))});const c=CASES.find(x=>x.id===state.current);$('#severityCard').outerHTML=renderSeverity(c,level.dataset.level);return}
  const action=e.target.closest('[data-action]')?.dataset.action;
  if(action==='show-all'){el.filterTitle.scrollIntoView({behavior:'smooth'});return}
  if(action==='clear-recents'){state.recent=[];localStorage.removeItem(STORAGE.recent);renderShortcuts();return}
  if(action==='back'){backFromDetail();return}
  if(action==='favorite'&&state.current){const id=state.current;state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);localStorage.setItem(STORAGE.favorites,JSON.stringify([...state.favorites]));const b=e.target.closest('[data-action="favorite"]');const active=state.favorites.has(id);b.classList.toggle('active',active);b.textContent=active?'★':'☆';b.setAttribute('aria-pressed',String(active));b.setAttribute('aria-label',active?'Favorilerden çıkar':'Favorilere ekle');return}
  if(action==='close-sheet'){closeSourceSheet();return}
  if(action==='reload-app'){location.reload();return}
  const nav=e.target.closest('[data-nav]')?.dataset.nav;if(nav==='home'){showHome();return}if(nav==='cases'){showCases();return}if(nav==='favorites'){showFavorites();return}
  if(e.target===el.source)closeSourceSheet();
});
el.search.addEventListener('input',e=>{state.query=e.target.value;renderProtocols();renderCases();if(state.query)requestAnimationFrame(()=>{const protocolMatch=!el.protocolSection?.classList.contains('hidden')&&el.protocols?.children.length;const target=protocolMatch?el.protocolSection:el.filterTitle;target?.scrollIntoView({behavior:'smooth',block:'start'})})});
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
