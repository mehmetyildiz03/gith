#!/usr/bin/env python3
import json
import os
import shutil
import tempfile
import threading
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlencode

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/"chrome-audit-results.json"
SCREEN_DIR=ROOT/"chrome-audit-screenshots"

SCENARIOS=[
  {"name":"phone-360-dark-standard-home","width":360,"height":800,"theme":"dark","mode":"standard","case":""},
  {"name":"phone-390-light-standard-home","width":390,"height":844,"theme":"light","mode":"standard","case":""},
  {"name":"phone-430-dark-field-home","width":430,"height":932,"theme":"dark","mode":"field","case":""},
  {"name":"phone-390-dark-field-acs","width":390,"height":844,"theme":"dark","mode":"field","case":"acs"},
  {"name":"phone-390-light-standard-bee","width":390,"height":844,"theme":"light","mode":"standard","case":"bee"},
  {"name":"phone-430-dark-standard-rosc","width":430,"height":932,"theme":"dark","mode":"standard","case":"rosc"},
  {"name":"tablet-768-light-standard-home","width":768,"height":1024,"theme":"light","mode":"standard","case":""},
  {"name":"tablet-800-dark-field-stroke","width":800,"height":1280,"theme":"dark","mode":"field","case":"stroke"},
  {"name":"tablet-1024-dark-standard-acs","width":1024,"height":768,"theme":"dark","mode":"standard","case":"acs"},
  {"name":"tablet-1280-light-field-bee","width":1280,"height":800,"theme":"light","mode":"field","case":"bee"},
  {"name":"phone-390-dark-standard-tachycardia","width":390,"height":844,"theme":"dark","mode":"standard","case":"tachycardia"},
  {"name":"tablet-768-light-standard-burn","width":768,"height":1024,"theme":"light","mode":"standard","case":"burn"},
  {"name":"phone-390-light-standard-brady","width":390,"height":844,"theme":"light","mode":"standard","case":"bradycardia"},
  {"name":"phone-430-dark-field-arrest","width":430,"height":932,"theme":"dark","mode":"field","case":"cardiac-arrest"},
  {"name":"phone-390-dark-standard-seizure","width":390,"height":844,"theme":"dark","mode":"standard","case":"seizure"},
  {"name":"phone-390-light-standard-hypoglycemia","width":390,"height":844,"theme":"light","mode":"standard","case":"hypoglycemia"},
  {"name":"phone-430-dark-standard-drowning","width":430,"height":932,"theme":"dark","mode":"standard","case":"drowning"},
  {"name":"tablet-768-dark-standard-trauma","width":768,"height":1024,"theme":"dark","mode":"standard","case":"trauma"},
]

HARNESS=r'''
<script>
(async()=>{
  const qs=new URLSearchParams(location.search);
  const theme=qs.get('theme')||'light';
  const mode=qs.get('mode')||'standard';
  if(qs.get('prepared')!=='1'){
    localStorage.setItem('saha112:theme',theme);
    localStorage.setItem('saha112:density',mode==='field'?'compact':'standard');
    const u=new URL(location.href);
    u.searchParams.set('prepared','1');
    location.replace(u);
    return;
  }

  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  await sleep(350);
  const target=qs.get('case')||'';
  if(target){
    const btn=document.querySelector('[data-open="'+target+'"]');
    if(btn){btn.click();await sleep(250)}
  }

  const visible=e=>{
    if(!e)return false;
    const cs=getComputedStyle(e),r=e.getBoundingClientRect();
    return cs.display!=='none'&&cs.visibility!=='hidden'&&Number(cs.opacity)!==0&&r.width>0&&r.height>0;
  };
  const text=e=>(e.innerText||e.getAttribute('aria-label')||'').trim().replace(/\s+/g,' ').slice(0,80);
  const ident=e=>({
    tag:e.tagName.toLowerCase(),
    id:e.id||'',
    cls:String(e.className||'').trim().replace(/\s+/g,'.').slice(0,100),
    text:text(e)
  });
  const rgb=s=>{
    const m=String(s).match(/rgba?\((\d+)[, ]+(\d+)[, ]+(\d+)(?:[, /]+([\d.]+))?\)/);
    return m?[+m[1],+m[2],+m[3],m[4]===undefined?1:+m[4]]:null;
  };
  const lum=v=>{
    const x=v.slice(0,3).map(c=>{c/=255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)});
    return .2126*x[0]+.7152*x[1]+.0722*x[2];
  };
  const ratio=(a,b)=>(Math.max(a,b)+.05)/(Math.min(a,b)+.05);
  const insideXScroll=e=>{
    for(let p=e.parentElement;p;p=p.parentElement){
      const cs=getComputedStyle(p);
      if((cs.overflowX==='auto'||cs.overflowX==='scroll')&&p.scrollWidth>p.clientWidth+2)return true;
    }
    return false;
  };

  const interactives=[...document.querySelectorAll('button,a,input,[role="button"]')].filter(visible);
  const smallTargets=interactives.map(e=>{
    const r=e.getBoundingClientRect();
    return {...ident(e),w:+r.width.toFixed(1),h:+r.height.toFixed(1)};
  }).filter(x=>x.w<44||x.h<44);

  const clipped=[...document.querySelectorAll('button,a,input,section,article,.case-row,.featured-card,.shortcut-card,.detail-section,.first30-card,.detail-top')]
    .filter(visible).flatMap(e=>{
      const r=e.getBoundingClientRect();
      if(insideXScroll(e))return [];
      if(r.left<-1||r.right>innerWidth+1)return [{...ident(e),left:+r.left.toFixed(1),right:+r.right.toFixed(1),vw:innerWidth}];
      return [];
    }).slice(0,30);

  const surfaces=[...document.querySelectorAll('.quick-step,.red-flag,.branch,.detail-section,.case-summary,.med-card,.first30-card,.case-row,.featured-card,.shortcut-card,.hero-card,.insight-card')].filter(visible);
  const paleDark=[];
  const lowContrast=[];
  if(theme==='dark'){
    for(const e of surfaces){
      const cs=getComputedStyle(e),bg=rgb(cs.backgroundColor),fg=rgb(cs.color);
      if(bg&&bg[3]>.8){
        const bl=lum(bg);
        if(bl>.62)paleDark.push({...ident(e),bg:cs.backgroundColor});
        if(fg&&fg[3]>.8){
          const cr=ratio(bl,lum(fg));
          if(cr<4.5)lowContrast.push({...ident(e),ratio:+cr.toFixed(2),bg:cs.backgroundColor,fg:cs.color});
        }
      }
    }
  }

  const criticalOrder=['critical-actions','algorithm','severity','red-flags','decision','medications','source']
    .map(id=>{
      const e=document.getElementById(id);
      return e&&visible(e)?{id,top:+e.getBoundingClientRect().top.toFixed(1)}:null;
    }).filter(Boolean);

  const result={
    viewport:{innerWidth,innerHeight,devicePixelRatio},
    screen:{width:screen.width,height:screen.height,availWidth:screen.availWidth,availHeight:screen.availHeight},
    theme:document.documentElement.dataset.theme||'',
    density:document.documentElement.dataset.density||'',
    target,
    targetOpened:target?Boolean(document.querySelector('#detailView:not(.hidden)')):true,
    horizontalOverflow:document.documentElement.scrollWidth>innerWidth+1,
    scrollWidth:document.documentElement.scrollWidth,
    smallTargetCount:smallTargets.length,
    smallTargets:smallTargets.slice(0,25),
    clippedCount:clipped.length,
    clipped,
    paleDarkCount:paleDark.length,
    paleDark:paleDark.slice(0,20),
    lowContrastCount:lowContrast.length,
    lowContrast:lowContrast.slice(0,20),
    modeLabel:(document.getElementById('modePill')?.textContent||'').trim(),
    filterSemantics:[...document.querySelectorAll('#filterRow button')].slice(0,8).map(e=>({
      text:text(e),pressed:e.getAttribute('aria-pressed'),role:e.getAttribute('role')
    })),
    detailOrder:criticalOrder,
    ua:navigator.userAgent,
    authorityBadges:[...document.querySelectorAll('#medications .authority')].filter(visible).map(e=>({
      text:text(e),authority:e.getAttribute('data-authority'),className:e.className
    })),
    unresolvedAuthorityCount:[...document.querySelectorAll('#medications .authority.algorithm')].filter(visible).length,
    maxTouchPoints:navigator.maxTouchPoints
  };

  let pre=document.getElementById('chromeAuditResult');
  if(!pre){
    pre=document.createElement('pre');
    pre.id='chromeAuditResult';
    pre.style.display='none';
    document.body.appendChild(pre);
  }
  pre.textContent=JSON.stringify(result);
})();
</script>
'''

PHONE_UA="Mozilla/5.0 (Linux; Android 15; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Mobile Safari/537.36"
TABLET_UA="Mozilla/5.0 (Linux; Android 15; Tablet) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36"

class Quiet(SimpleHTTPRequestHandler):
  def log_message(self,*args):
    pass

def browser_path():
  for name in ("google-chrome","google-chrome-stable","chromium","chromium-browser"):
    p=shutil.which(name)
    if p:return p
  raise RuntimeError("Chrome/Chromium bulunamadı")

def prepare_site(tmp):
  site=Path(tmp)/"site"
  shutil.copytree(ROOT,site,ignore=shutil.ignore_patterns(".git","chrome-audit-results.json"))
  index=site/"index.html"
  src=index.read_text(encoding="utf-8")
  if "</body>" not in src:
    raise RuntimeError("index.html body kapanışı bulunamadı")
  index.write_text(src.replace("</body>",HARNESS+"\n</body>"),encoding="utf-8")
  return site

def run_scenario(browser,sc,url):
  options=Options()
  options.binary_location=browser
  for arg in ("--headless=new","--no-sandbox","--disable-gpu","--disable-dev-shm-usage","--hide-scrollbars"):
    options.add_argument(arg)
  options.add_experimental_option("mobileEmulation",{
    "deviceMetrics":{
      "width":sc["width"],
      "height":sc["height"],
      "pixelRatio":1.0,
      "touch":True,
      "mobile":True
    },
    "userAgent":PHONE_UA if sc["width"]<600 else TABLET_UA
  })
  driver=webdriver.Chrome(options=options)
  try:
    driver.get(url)
    WebDriverWait(driver,12).until(
      lambda d: d.execute_script("return (document.getElementById('chromeAuditResult')?.textContent?.length||0)>2")
    )
    payload=driver.execute_script("return JSON.parse(document.getElementById('chromeAuditResult').textContent)")
    SCREEN_DIR.mkdir(parents=True,exist_ok=True)
    driver.save_screenshot(str(SCREEN_DIR/(sc["name"]+".png")))
    return payload
  finally:
    driver.quit()

def run():
  browser=browser_path()
  if SCREEN_DIR.exists(): shutil.rmtree(SCREEN_DIR)
  SCREEN_DIR.mkdir(parents=True,exist_ok=True)
  results=[]
  with tempfile.TemporaryDirectory(prefix="saha112-chrome-") as tmp:
    site=prepare_site(tmp)
    old=os.getcwd()
    os.chdir(site)
    server=ThreadingHTTPServer(("127.0.0.1",0),Quiet)
    port=server.server_address[1]
    threading.Thread(target=server.serve_forever,daemon=True).start()
    try:
      for sc in SCENARIOS:
        url=f"http://127.0.0.1:{port}/?"+urlencode({
          "theme":sc["theme"],"mode":sc["mode"],"case":sc["case"]
        })
        try:
          payload=run_scenario(browser,sc,url)
          results.append({**sc,**payload})
        except Exception as e:
          results.append({**sc,"error":f"{type(e).__name__}: {e}"})
    finally:
      server.shutdown()
      server.server_close()
      os.chdir(old)

  summary={"browser":browser,"scenarioCount":len(results),"hardFailures":[],"warnings":[],"results":results}
  for r in results:
    name=r.get("name","?")
    vp=r.get("viewport") or {}
    if r.get("error"):
      summary["hardFailures"].append(f"{name}: {r['error']}")
      continue
    if vp.get("innerWidth")!=r.get("width"):
      summary["hardFailures"].append(f"{name}: istenen genişlik {r.get('width')}px, gerçek {vp.get('innerWidth')}px")
    if r.get("horizontalOverflow"):
      summary["hardFailures"].append(f"{name}: sayfa yatay taşıyor (scrollWidth {r.get('scrollWidth')}, viewport {vp.get('innerWidth')})")
    if r.get("clippedCount",0):
      summary["hardFailures"].append(f"{name}: {r['clippedCount']} görünür öğe viewport dışına taşıyor")
    if r.get("paleDarkCount",0):
      summary["hardFailures"].append(f"{name}: koyu modda {r['paleDarkCount']} açık/pale yüzey bulundu")
    if r.get("lowContrastCount",0):
      summary["hardFailures"].append(f"{name}: {r['lowContrastCount']} düşük kontrast yüzey bulundu")
    if r.get("case") and not r.get("targetOpened"):
      summary["hardFailures"].append(f"{name}: hedef vaka açılamadı")
    if r.get("unresolvedAuthorityCount",0):
      summary["hardFailures"].append(f"{name}: {r['unresolvedAuthorityCount']} gri/çözümlenmemiş ilaç yetkisi bulundu")
    if r.get("smallTargetCount",0):
      summary["warnings"].append(f"{name}: 44px altı {r['smallTargetCount']} etkileşim hedefi")

  OUT.write_text(json.dumps(summary,ensure_ascii=False,indent=2),encoding="utf-8")

  print(f"Chrome: {browser}")
  print(f"Senaryo: {len(results)}")
  print(f"Sert hata: {len(summary['hardFailures'])}")
  for x in summary["hardFailures"]: print("ERROR",x)
  print(f"Dokunma uyarısı: {len(summary['warnings'])}")
  for x in summary["warnings"]: print("WARN",x)
  print("\n--- Ayrıntılı özet ---")
  for r in results:
    print(json.dumps({
      "name":r.get("name"),
      "requested":[r.get("width"),r.get("height")],
      "viewport":r.get("viewport"),
      "screen":r.get("screen"),
      "theme":r.get("theme"),
      "density":r.get("density"),
      "target":r.get("target"),
      "horizontalOverflow":r.get("horizontalOverflow"),
      "clippedCount":r.get("clippedCount"),
      "paleDarkCount":r.get("paleDarkCount"),
      "lowContrastCount":r.get("lowContrastCount"),
      "smallTargetCount":r.get("smallTargetCount"),
      "modeLabel":r.get("modeLabel"),
      "detailOrder":r.get("detailOrder"),
      "smallTargets":r.get("smallTargets",[])[:10],
      "clipped":r.get("clipped",[])[:5],
      "paleDark":r.get("paleDark",[])[:5],
      "authorityBadges":r.get("authorityBadges",[]),
      "unresolvedAuthorityCount":r.get("unresolvedAuthorityCount"),
      "maxTouchPoints":r.get("maxTouchPoints")
    },ensure_ascii=False))
  return 1 if summary["hardFailures"] else 0

if __name__=="__main__":
  raise SystemExit(run())
