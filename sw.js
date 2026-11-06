1
2
3
4
5
6
7
8
9
10
11
// SW cleared - ESPOIR Finance 20h fix
self.addEventListener('install', function(e){self.skipWaiting();});
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){return caches.delete(k);}));
    }).then(function(){return self.clients.claim();})
  );
});
self.addEventListener('fetch', function(e){return;});
