const C = 'wiz-v1';
const FILES = ['./', 'index.html', 'manifest.json', 'icon.svg', 'vendor/react.min.js', 'vendor/react-dom.min.js', 'vendor/babel.min.js'];
self.addEventListener('install', e => e.waitUntil(caches.open(C).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
