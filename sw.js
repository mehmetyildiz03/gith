const CACHE='saha112-v012';
const CORE=['./','./index.html','./styles.css?v=0.12','./cases-data.js?v=0.12','./app-core.js?v=0.12','./manifest.webmanifest?v=0.12','./icon.svg','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
const NETWORK_FIRST_DESTINATIONS=new Set(['style','script','manifest']);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET')return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;

  if(request.mode==='navigate'){
    event.respondWith(
      fetch(request).then(response=>{
        if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy))}
        return response;
      }).catch(()=>caches.match('./index.html'))
    );
    return;
  }

  if(NETWORK_FIRST_DESTINATIONS.has(request.destination)){
    event.respondWith(
      fetch(request).then(response=>{
        if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy))}
        return response;
      }).catch(()=>caches.match(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached=>{
      const network=fetch(request).then(response=>{
        if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy))}
        return response;
      });
      return cached||network;
    })
  );
});
