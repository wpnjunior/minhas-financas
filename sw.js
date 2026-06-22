const CACHE_NAME = 'fin-cache-v1';
const PRECACHE = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Ignora requisições que não sejam GET
  if (request.method !== 'GET') return;

  // Deixa chamadas pra API da Anthropic passarem direto pra rede (não cacheia)
  const url = new URL(request.url);
  if (url.hostname === 'api.anthropic.com') return;

  // Cache-first com fallback pra rede
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
