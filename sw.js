const CACHE = 'pocket-tracker-v20-2';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png', './cat-avatar.png', './assets/celebrations/cash-cat.png', './assets/celebrations/crying-money.png', './assets/celebrations/empty-plate.png', './assets/celebrations/wallet-cat.png', './assets/celebrations/money-hype.png', './assets/celebrations/cool-money.png', './assets/celebrations/tongue-out.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('pocket-tracker-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(fetch(req, {cache:'no-store'}).then(response => {
    if (response.ok && response.type === 'basic') {
      const copy = response.clone();
      event.waitUntil(caches.open(CACHE).then(cache => cache.put(req, copy)));
    }
    return response;
  }).catch(() => caches.match(req, {ignoreSearch:true}).then(r => r || caches.match('./index.html'))));
});
