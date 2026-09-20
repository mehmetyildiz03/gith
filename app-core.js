const CATEGORIES=['Tümü','Alerji','Solunum','Kardiyak','Çevresel'];
const THEME_KEY='saha112:theme';
const FAV_KEY='saha112:favs';
const RECENT_KEY='saha112:recent';
const DENSITY_KEY='saha112:density';
let state={
  category:'Tümü',query:'',current:null,
  favorites:new Set(JSON.parse(localStorage.getItem(FAV_KEY)||'[]')),
  recent:JSON.parse(localStorage.getItem(RECENT_KEY)||'[]'),
  theme:localStorage.getItem(THEME_KEY)||'',
  density:localStorage.getItem(DENSITY_KEY)||'standard'
};

const $=s=>document.querySelector(s);
const featuredGrid=$('#featuredGrid'),caseList=$('#caseList'),filterRow=$('#filterRow'),caseCount=$('#caseCount'),mainView=$('#mainView'),detailView=$('#detailView'),sourceSheet=$('#sourceSheet');
const themeToggle=$('#themeToggle'),fieldToggle=$('#fieldToggle'),themePill=$('#themePill'),modePill=$('#modePill'),themeMeta=document.querySelector('meta[name="theme-color"]');
const shortcutSection=$('#shortcutSection'),shortcutGrid=$('#shortcutGrid');

function esc(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function caseStyle(c){return `--accent:${c.accent};--soft:${c.soft}`}
function detectTheme(){if(state.theme==='light'||state.theme==='dark')return state.theme;return window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
function applyTheme(theme){const t=theme||detectTheme();document.documentElement.setAttribute('data-theme',t);themePill.textContent=t==='dark'?'Koyu mod':'Açık mod';themeToggle?.setAttribute('aria-label',t==='dark'?'Açık moda geç':'Koyu moda geç');if(themeMeta)themeMeta.setAttribute('content',t==='dark'?'#0f1722':'#edf4f8')}
function toggleTheme(){const next=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';state.theme=next;localStorage.setItem(THEME_KEY,next);applyTheme(next)}
function applyDensity(){const compact=state.density==='compact';document.documentElement.setAttribute('data-density',compact?'compact':'standard');fieldToggle?.classList.toggle('active',compact);fieldToggle?.setAttribute('aria-label',compact?'Hızlı Saha modunu kapat':'Hızlı Saha modunu aç');if(modePill)modePill.textContent=compact?'Hızlı Saha':'Standart görünüm'}
function toggleDensity(){state.density=state.density==='compact'?'standard':'compact';localStorage.setItem(DENSITY_KEY,state.density);applyDensity()}

function renderFeatured(){const f=CASES.filter(x=>x.featured).slice(0,3);featuredGrid.innerHTML=f.map((c,i)=>`<button class="featured-card ${i===0?'primary':''}" style="${caseStyle(c)}" data-open="${c.id}"><span class="corner-arrow">↗</span><div class="case-icon">${c.icon}</div><h4>${c.title}</h4><p>${c.subtitle}</p>${i===0?'<div class="severity-mini"><span class="g"></span><span class="a"></span><span class="r"></span></div>':''}<span class="code">${c.code}</span></button>`).join('')}
function renderFilters(){filterRow.innerHTML=CATEGORIES.map(x=>`<button class="filter-chip ${state.category===x?'active':''}" data-filter="${x}">${x}</button>`).join('')}
function filteredCases(){const q=state.query.trim().toLocaleLowerCase('tr-TR');return CASES.filter(c=>(state.category==='Tümü'||c.category===state.category)&&(!q||[c.title,c.subtitle,c.category,c.code,...c.quick,...c.redFlags,...(c.meds||[]).flatMap(m=>[m.name,m.dose])].join(' ').toLocaleLowerCase('tr-TR').includes(q)))}
function renderCases(list=filteredCases()){caseCount.textContent=`${list.length} vaka`;const stats=$('#statCases');if(stats)stats.textContent=String(CASES.length);caseList.innerHTML=list.length?list.map(c=>`<button class="case-row" style="${caseStyle(c)}" data-open="${c.id}"><div class="case-icon">${c.icon}</div><div class="row-copy"><h4>${c.title}</h4><p>${c.subtitle}</p><div class="row-meta"><span class="tag">${c.category}</span><span class="source-code">${c.code}</span></div></div><span class="chev">›</span></button>`).join(''):`<div class="empty-state"><div class="empty-icon">🔎</div><h3>Sonuç bulunamadı</h3><p>Aramayı kısalt veya farklı bir kategori seç.</p></div>`}
function addRecent(id){state.recent=[id,...state.recent.filter(x=>x!==id)].slice(0,5);localStorage.setItem(RECENT_KEY,JSON.stringify(state.recent))}
function renderShortcuts(){
  const items=[];
  [...state.favorites].slice(0,3).forEach(id=>{const c=CASES.find(x=>x.id===id);if(c)items.push({c,kind:'FAVORİ'})});
  state.recent.filter(id=>!state.favorites.has(id)).slice(0,3).forEach(id=>{const c=CASES.find(x=>x.id===id);if(c)items.push({c,kind:'SON BAKILAN'})});
  shortcutSection.classList.toggle('hidden',items.length===0);
  shortcutGrid.innerHTML=items.map(({c,kind})=>`<button class="shortcut-card" style="${caseStyle(c)}" data-open="${c.id}"><span class="shortcut-kind">${kind}</span><div class="case-icon">${c.icon}</div><div class="shortcut-copy"><strong>${c.title}</strong><span>${c.category} • ${c.code}</span></div></button>`).join('');
}
function renderAll(){renderFeatured();renderFilters();renderCases();renderShortcuts()}

function renderSeverity(c,level='mild'){if(!c.severity)return '';const s=c.severity[level];return `<div class="severity-card ${level}" id="severityCard"><div class="severity-head"><span class="level-dot"></span><strong>${s.label}</strong></div><ul>${s.bullets.map(b=>`<li>${b}</li>`).join('')}</ul><div class="action-box"><b>Ne yap?</b><p>${s.action}</p></div></div>`}
function renderMeds(c){if(!c.meds?.length)return '';return `<section class="detail-section" id="medications"><h3><span class="tiny-icon">Rx</span> İlaç / uygulama özeti</h3><p class="section-subnote">Doz, yol ve yetki alanını birlikte kontrol et.</p><div class="med-list">${c.meds.map(m=>`<div class="med-card"><div class="med-top"><span class="med-pill">${esc(m.dose)}</span><div><strong>${esc(m.name)}</strong><p>${esc(m.note)}</p></div><span class="authority ${m.auth.includes('SKKM')?'skkm':''}">${esc(m.auth)}</span></div></div>`).join('')}</div></section>`}
function openCase(id){
  const c=CASES.find(x=>x.id===id);if(!c)return;state.current=id;addRecent(id);renderShortcuts();const fav=state.favorites.has(id);
  detailView.innerHTML=`<header class="detail-top"><div class="detail-bar"><button class="back-btn" data-action="back" aria-label="Geri">‹</button><div class="detail-title"><div class="kicker">${c.category.toUpperCase()} • YETİŞKİN</div><h2>${c.title}</h2></div><button class="fav-btn ${fav?'active':''}" data-action="favorite" aria-label="Favori">${fav?'★':'☆'}</button></div><div class="source-ribbon"><span class="verified-dot">✓</span><span>${c.code} • Kaynak sayfa ${c.page}</span></div><div class="detail-jumps"><button class="jump-chip" data-jump="algorithm">Algoritma</button>${c.severity?'<button class="jump-chip" data-jump="severity">Şiddet</button>':''}<button class="jump-chip critical" data-jump="red-flags">Kırmızı bayraklar</button>${c.meds?.length?'<button class="jump-chip" data-jump="medications">İlaçlar</button>':''}<button class="jump-chip" data-jump="decision">Karar</button></div></header>
  <div class="field-banner"><strong>⚡ Hızlı Saha aktif</strong><span>İkincil açıklamalar azaltıldı, kritik içerik öne alındı.</span></div>
  <div class="detail-body" style="${caseStyle(c)}"><section class="detail-hero"><div class="big-icon">${c.icon}</div><div><h3>${c.title}</h3><p>${c.summary}</p><div class="detail-stats"><div class="detail-stat"><span>Adım</span><strong>${c.quick.length}</strong></div><div class="detail-stat"><span>Kırmızı bayrak</span><strong>${c.redFlags.length}</strong></div><div class="detail-stat"><span>İlaç</span><strong>${c.meds?.length||0}</strong></div></div></div></section>
  <section class="detail-section emphasis" id="algorithm"><h3><span class="tiny-icon">↯</span> İlk bakışta algoritma</h3><p class="section-subnote">Sıralama klinik yeniden değerlendirmeyle birlikte okunmalıdır.</p><div class="quick-steps">${c.quick.map(x=>`<div class="quick-step">${x}</div>`).join('')}</div></section>
  ${c.severity?`<section class="detail-section" id="severity"><h3><span class="tiny-icon">3</span> Şiddeti ayır</h3><div class="severity-tabs"><button class="severity-tab active" data-level="mild">Hafif</button><button class="severity-tab" data-level="moderate">Orta</button><button class="severity-tab" data-level="severe">Ağır</button></div>${renderSeverity(c,'mild')}</section>`:''}
  <div class="detail-columns"><section class="detail-section" id="red-flags"><h3><span class="tiny-icon">!</span> Kırmızı bayraklar</h3><div class="red-flag-list">${c.redFlags.map(r=>`<div class="red-flag"><strong>Uyarı:</strong> ${r}</div>`).join('')}</div></section>
  <section class="detail-section" id="decision"><h3><span class="tiny-icon">◇</span> Karar noktası</h3><div class="decision-box"><div class="decision-question">${c.decision.q}</div><div class="decision-branches"><div class="branch yes"><b>EVET</b>${c.decision.yes}</div><div class="branch no"><b>HAYIR</b>${c.decision.no}</div></div></div></section></div>
  ${renderMeds(c)}
  <section class="detail-section" id="source"><h3><span class="tiny-icon">§</span> Kaynak</h3><div class="source-block"><p>İçerik, 25.08.2026 tarihli güncellenmiş Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları esas alınarak sadeleştirilmiştir. Bu ekran resmî belgenin yerine geçmez.</p><a href="https://dosyaism.saglik.gov.tr/Eklenti/285023/0/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari--yetiskin.pdf" target="_blank" rel="noopener">Resmî PDF’yi aç <span>↗</span></a></div></section></div>`;
  mainView.classList.add('hidden');detailView.classList.remove('hidden');window.scrollTo(0,0);setNavActive('cases');
}
function backHome(){state.current=null;detailView.classList.add('hidden');mainView.classList.remove('hidden');setNavActive('home');renderShortcuts();window.scrollTo(0,0)}
function setNavActive(name){document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.nav===name))}
function showFavorites(){backHome();setNavActive('favorites');state.category='Tümü';state.query='';$('#searchInput').value='';renderFilters();renderCases(CASES.filter(c=>state.favorites.has(c.id)));caseCount.textContent=`${state.favorites.size} favori`;document.querySelector('#filterTitle').scrollIntoView({behavior:'smooth',block:'start'})}

applyTheme();applyDensity();renderAll();
if(window.matchMedia){const mq=window.matchMedia('(prefers-color-scheme: dark)');if(mq.addEventListener){mq.addEventListener('change',()=>{if(!localStorage.getItem(THEME_KEY))applyTheme()})}}

document.addEventListener('click',e=>{
  const open=e.target.closest('[data-open]');if(open){openCase(open.dataset.open);return}
  const filter=e.target.closest('[data-filter]');if(filter){state.category=filter.dataset.filter;renderFilters();renderCases();return}
  const jump=e.target.closest('[data-jump]');if(jump){document.getElementById(jump.dataset.jump)?.scrollIntoView({behavior:'smooth',block:'start'});return}
  const action=e.target.closest('[data-action]')?.dataset.action;
  if(action==='show-all'){document.querySelector('#filterTitle').scrollIntoView({behavior:'smooth'});return}
  if(action==='clear-recents'){state.recent=[];localStorage.removeItem(RECENT_KEY);renderShortcuts();return}
  if(action==='back'){backHome();return}
  if(action==='favorite'&&state.current){const id=state.current;if(state.favorites.has(id))state.favorites.delete(id);else state.favorites.add(id);localStorage.setItem(FAV_KEY,JSON.stringify([...state.favorites]));renderShortcuts();openCase(id);return}
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
if(themeToggle)themeToggle.addEventListener('click',toggleTheme);
if(fieldToggle)fieldToggle.addEventListener('click',toggleDensity);
window.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!sourceSheet.classList.contains('hidden'))sourceSheet.classList.add('hidden');else if(state.current)backHome()}});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
