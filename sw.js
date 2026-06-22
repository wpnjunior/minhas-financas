const CACHE_NAME = 'fin-cache-v2';
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

  // Navegação/HTML: rede primeiro (pega versão nova quando online), cache só offline.
  if (request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    event.respondWith(
      fetch(request).then((r) => { const cp = r.clone(); caches.open(CACHE_NAME).then((c) => c.put(request, cp)); return r; })
        .catch(() => caches.match(request).then((c) => c || caches.match('./index.html')))
    );
    return;
  }
  // Resto (manifest, ícone): cache primeiro.
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request)));
});
