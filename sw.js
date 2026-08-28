/*
  Service worker di HE Race.
  Strategia network-first: online si vede sempre l'ultima versione
  pubblicata, offline si ricade sulla copia in cache.
*/
const CACHE = "herace-shell-v1";

const SHELL = [
  "./",
  "./index.html",
  "./support.js",
  "./logo.png",
  "./titolo-herace.png",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;          // font e CDN: gestiti dal browser
  const skipCache = url.pathname.indexOf("herace-data.json") !== -1;

  e.respondWith(
    fetch(req).then(res => {
      if (!skipCache && res && res.ok && res.type === "basic") {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() =>
      caches.match(req, { ignoreSearch: true }).then(hit =>
        hit || (req.mode === "navigate" ? caches.match("./index.html") : Promise.reject(new Error("offline"))))
    )
  );
});
