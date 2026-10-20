const CACHE_NAME = 'nutripulse-v4';
const STATIC_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './apple-touch-icon.png',
    './icon-192.png'
];

self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((k) => {
                    if (k !== CACHE_NAME) {
                        return caches.delete(k);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    // For local bridge sync API, bypass cache
    if (e.request.url.includes('/api/')) {
        return;
    }

    // For HTML navigation requests: NETWORK-FIRST (Always fetch newest version, fallback to offline cache)
    if (e.request.mode === 'navigate' || e.request.destination === 'document' || e.request.url.endsWith('nutripulse/') || e.request.url.endsWith('index.html')) {
        e.respondWith(
            fetch(e.request)
                .then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const copy = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
                    }
                    return networkResponse;
                })
                .catch(() => {
                    return caches.match(e.request).then((res) => res || caches.match('./index.html') || caches.match('./'));
                })
        );
        return;
    }

    // Static assets (images, icons, manifest): Stale-While-Revalidate
    e.respondWith(
        caches.match(e.request).then((cached) => {
            const fetchPromise = fetch(e.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    caches.open(CACHE_NAME).then((cache) => cache.put(e.request, networkResponse.clone()));
                }
                return networkResponse;
            }).catch(() => {});
            return cached || fetchPromise;
        })
    );
});
