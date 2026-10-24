const CACHE = "preparamz-v13";
const FICHEIROS = [".", "index.html", "style.css", "app.js", "data/exames.js", "data/exames-9a.js", "data/exames-mat-2022-2020.js", "data/exames-mat-2019-2017.js", "data/figuras.js", "data/figuras-9a.js", "data/figuras-mat-2022-2020.js", "data/figuras-mat-2019-2017.js", "data/arquivo.js", "manifest.webmanifest", "icon.svg"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHEIROS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
