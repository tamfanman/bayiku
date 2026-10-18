/* Service worker Bayiku — dibuat otomatis oleh bangun-situs.js, jangan diedit tangan. */
const V = 'bayiku-b460c76360';
const SHELL = ['./', './index.html', './manifest.webmanifest',
               './ikon-192.png', './ikon-512.png', './ikon-180.png', './ikon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(k => Promise.all(k.filter(n => n !== V && n !== V + '-isi').map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;

  /* buka aplikasi: selalu dari simpanan dulu, biar jalan tanpa internet */
  if(req.mode === 'navigate'){
    e.respondWith(caches.match('./index.html').then(r => r || fetch(req)));
    return;
  }

  /* sisanya (ikon, huruf Google): simpanan dulu, kalau belum ada ambil lalu simpan */
  e.respondWith(caches.match(req).then(simpanan => {
    if(simpanan) return simpanan;
    return fetch(req).then(res => {
      if(res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')){
        const salinan = res.clone();
        caches.open(V + '-isi').then(c => c.put(req, salinan));
      }
      return res;
    }).catch(() => simpanan);
  }));
});
