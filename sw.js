const C = 'wiz-v2';
const FILES = ['./', 'index.html', 'manifest.json', 'icon.png', 'vendor/react.min.js', 'vendor/react-dom.min.js', 'vendor/babel.min.js'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(C).then(c => c.addAll(FILES))); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
