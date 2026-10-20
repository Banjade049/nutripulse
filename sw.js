const CACHE_NAME = 'nutripulse-v1';
const STATIC_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './apple-touch-icon.png',
    './icon-192.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((k) => {
                    if (k !== CACHE_NAME) return caches.delete(k);
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // For local bridge sync API, bypass cache
    if (e.request.url.includes('/api/')) {
        return;
    }

    // Static assets: Cache-First, fallback to Network
    e.respondWith(
        caches.match(e.request).then((cached) => cached || fetch(e.request))
    );
});
