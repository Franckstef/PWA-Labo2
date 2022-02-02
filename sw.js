this.addEventListener('install', function(event) {
  console.log('[Service Worker] Installation en cours de v1');
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        console.log('[Service Worker] Mise en cache globale: app shell et contenu et tout et tout');
        return cache.addAll([
            '/index.html',
            '/index.css',
            '/index.js',
            '/icones/avionpapier.png',
            '/icones/icon-192x192.png',
            '/icones/icon-256x256.png',
            '/icones/icon-384x384.png',
            '/icones/icon-512x512.png',
            '/bootstrap-5.1.3-dist/css/bootstrap.min.css',
            '/icons-1.7.2/font/bootstrap-icons.css',
            '/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js',
            '/images/IMG_3578.JPG',
            '/images/IMG_3836.JPG',
            '/images/IMG_3976.JPG'
        ]);
      })
    );
  });

  this.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request).then((response) => {
        if (response !== undefined) {
            return response;
        } else {
            return fetch(event.request);
        }
    }))
 });

  this.addEventListener('activate', (e) => {
  console.log('Service worker activé, all good !');
});