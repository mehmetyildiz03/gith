const CATEGORIES=['Tümü','Alerji','Solunum','Kardiyak','Çevresel'];
let state={category:'Tümü',query:'',current:null,favorites:new Set(JSON.parse(localStorage.getItem('saha112:favs')||'[]'))};

const $=s=>document.querySelector(s);
const featuredGrid=$('#featuredGrid'),caseList=$('#caseList'),filterRow=$('#filterRow'),caseCount=$('#caseCount'),mainView=$('#mainView'),detailView=$('#detailView'),sourceSheet=$('#sourceSheet');

function esc(s){return String(s).replace(/[&<>'\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[c]))}
function caseStyle(c){return `--accent:${c.accent};--soft:${c.soft}`}

function renderFeatured(){
  const f=CASES.filter(x=>x.featured).slice(0,3);
  featuredGrid.innerHTML=f.map((c,i)=>`<button class="featured-card ${i===0?'primary':''}" style="${caseStyle(c)}" data-open="${c.id}">
    <span class="corner-arrow">↗</span><div class="case-icon">${c.icon}</div><h4>${c.title}</h4><p>${c.subtitle}</p>${i===0?'<div class="severity-mini"><span class="g"></span><span class="a"></span><span class="r"></span></div>':''}<span class="code">${c.code}</span>
  </button>`).join('');
}
function renderFilters(){filterRow.innerHTML=CATEGORIES.map(x=>`<button class="filter-chip ${state.category===x?'active':''}" data-filter="${x}">${x}</button>`).join('')}
function filteredCases(){
  const q=state.query.trim().toLocaleLowerCase('tr-TR');
  return CASES.filter(c=>(state.category==='Tümü'||c.category===state.category)&&(!q||[c.title,c.subtitle,c.category,c.code,...c.quick,...c.redFlags,...(c.meds||[]).flatMap(m=>[m.name,m.dose])].join(' ').toLocaleLowerCase('tr-TR').includes(q)));
}
function renderCases(list=filteredCases()){
  caseCount.textContent=`${list.length} vaka`;
  caseList.innerHTML=list.length?list.map(c=>`<button class="case-row" style="${caseStyle(c)}" data-open="${c.id}"><div class="case-icon">${c.icon}</div><div class="row-copy"><h4>${c.title}</h4><p>${c.subtitle}</p><div class="row-meta"><span class="tag">${c.category}</span><span class="source-code">${c.code}</span></div></div><span class="chev">›</span></button>`).join(''):`<div class="empty-state"><div class="empty-icon">🔎</div><h3>Sonuç bulunamadı</h3><p>Aramayı kısalt veya farklı bir kategori seç.</p></div>`;
}
function renderAll(){renderFeatured();renderFilters();renderCases()}

function renderSeverity(c,level='mild'){
  if(!c.severity)return '';
  const s=c.severity[level];
  return `<div class="severity-card ${level}" id="severityCard"><div class="severity-head"><span class="level-dot"></span><strong>${s.label}</strong></div><ul>${s.bullets.map(b=>`<li>${b}</li>`).join('')}</ul><div class="action-box"><b>Ne yap?</b><p>${s.action}</p></div></div>`;
}
function renderMeds(c){
  if(!c.meds?.length)return '';
  return `<section class="detail-section"><h3><span class="tiny-icon">Rx</span> İlaç / uygulama özeti</h3><div class="med-list">${c.meds.map(m=>`<div class="med-card"><div class="med-top"><span class="med-pill">${esc(m.dose)}</span><div><strong>${esc(m.name)}</strong><p>${esc(m.note)}</p></div><span class="authority ${m.auth.includes('SKKM')?'skkm':''}">${esc(m.auth)}</span></div></div>`).join('')}</div></section>`;
}
function openCase(id){
  const c=CASES.find(x=>x.id===id);if(!c)return;state.current=id;
  const fav=state.favorites.has(id);
  detailView.innerHTML=`<header class="detail-top"><div class="detail-bar"><button class="back-btn" data-action="back" aria-label="Geri">‹</button><div class="detail-title"><div class="kicker">${c.category.toUpperCase()} • YETİŞKİN</div><h2>${c.title}</h2></div><button class="fav-btn ${fav?'active':''}" data-action="favorite" aria-label="Favori">${fav?'★':'☆'}</button></div><div class="source-ribbon"><span class="verified-dot">✓</span><span>${c.code} • Kaynak sayfa ${c.page}</span></div></header>
  <div class="detail-body" style="${caseStyle(c)}"><section class="detail-hero"><div class="big-icon">${c.icon}</div><div><h3>${c.title}</h3><p>${c.summary}</p></div></section>
  <section class="detail-section"><h3><span class="tiny-icon">↯</span> İlk bakışta algoritma</h3><div class="quick-steps">${c.quick.map(x=>`<div class="quick-step">${x}</div>`).join('')}</div></section>
  ${c.severity?`<section class="detail-section"><h3><span class="tiny-icon">3</span> Şiddeti ayır</h3><div class="severity-tabs"><button class="severity-tab active" data-level="mild">Hafif</button><button class="severity-tab" data-level="moderate">Orta</button><button class="severity-tab" data-level="severe">Ağır</button></div>${renderSeverity(c,'mild')}</section>`:''}
  <div class="detail-columns"><section class="detail-section"><h3><span class="tiny-icon">!</span> Kırmızı bayraklar</h3><div class="red-flag-list">${c.redFlags.map(r=>`<div class="red-flag"><strong>Uyarı:</strong> ${r}</div>`).join('')}</div></section>
  <section class="detail-section"><h3><span class="tiny-icon">◇</span> Karar noktası</h3><div class="decision-box"><div class="decision-question">${c.decision.q}</div><div class="decision-branches"><div class="branch yes"><b>EVET</b>${c.decision.yes}</div><div class="branch no"><b>HAYIR</b>${c.decision.no}</div></div></div></section></div>
  ${renderMeds(c)}
  <section class="detail-section"><h3><span class="tiny-icon">§</span> Kaynak</h3><div class="source-block"><p>İçerik, 25.08.2026 tarihli güncellenmiş Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları esas alınarak sadeleştirilmiştir. Bu ekran resmî belgenin yerine geçmez.</p><a href="https://dosyaism.saglik.gov.tr/Eklenti/285023/0/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari--yetiskin.pdf" target="_blank" rel="noopener">Resmî PDF’yi aç <span>↗</span></a></div></section>
  </div>`;
  mainView.classList.add('hidden');detailView.classList.remove('hidden');window.scrollTo(0,0);setNavActive('cases');
}
function backHome(){state.current=null;detailView.classList.add('hidden');mainView.classList.remove('hidden');setNavActive('home');window.scrollTo(0,0)}
function setNavActive(name){document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.nav===name))}
function showFavorites(){
  backHome();setNavActive('favorites');state.category='Tümü';state.query='';$('#searchInput').value='';renderFilters();renderCases(CASES.filter(c=>state.favorites.has(c.id)));caseCount.textContent=`${state.favorites.size} favori`;document.querySelector('#filterTitle').scrollIntoView({behavior:'smooth',block:'start'});
}

renderAll();

document.addEventListener('click',e=>{
  const open=e.target.closest('[data-open]');if(open){openCase(open.dataset.open);return}
  const filter=e.target.closest('[data-filter]');if(filter){state.category=filter.dataset.filter;renderFilters();renderCases();return}
  const action=e.target.closest('[data-action]')?.dataset.action;
  if(action==='show-all'){document.querySelector('#filterTitle').scrollIntoView({behavior:'smooth'});return}
  if(action==='back'){backHome();return}
  if(action==='favorite'&&state.current){const id=state.current;if(state.favorites.has(id))state.favorites.delete(id);else state.favorites.add(id);localStorage.setItem('saha112:favs',JSON.stringify([...state.favorites]));openCase(id);return}
  if(action==='close-sheet'){sourceSheet.classList.add('hidden');return}
  const sev=e.target.closest('[data-level]');if(sev&&state.current){document.querySelectorAll('.severity-tab').forEach(b=>b.classList.toggle('active',b===sev));const c=CASES.find(x=>x.id===state.current);$('#severityCard').outerHTML=renderSeverity(c,sev.dataset.level);return}
  const nav=e.target.closest('[data-nav]')?.dataset.nav;
  if(nav==='home'){backHome();return}
  if(nav==='cases'){backHome();setNavActive('cases');document.querySelector('#filterTitle').scrollIntoView({behavior:'smooth'});return}
  if(nav==='favorites'){showFavorites();return}
  if(e.target===sourceSheet)sourceSheet.classList.add('hidden');
});
$('#searchInput').addEventListener('input',e=>{state.query=e.target.value;renderCases();if(state.query)document.querySelector('#filterTitle').scrollIntoView({behavior:'smooth',block:'start'})});
$('#sourceBtn').addEventListener('click',()=>sourceSheet.classList.remove('hidden'));
window.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!sourceSheet.classList.contains('hidden'))sourceSheet.classList.add('hidden');else if(state.current)backHome();}});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
