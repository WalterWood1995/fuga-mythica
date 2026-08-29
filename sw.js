/* Fuga Mythica service worker */
const VERSION = "v0.18.0";
const SHELL_CACHE = "fuga-shell-" + VERSION;
const IMG_CACHE = "fuga-img-v1";
const FONT_CACHE = "fuga-font-v1";
const SHELL = [
  "./",
  "./index.html",
  "./etym_stories.js",
  "./meanings_i18n.js",
  "./word_art.js",
  "./intros.js",
  "./art_caps.js",
  "./latfam1.js",
  "./latfam2.js",
  "./data.js",
  "./words_morph.js",
  "./extras.js",
  "./data2.js",
  "./morph2.js",
  "./living.js",
  "./privacy.html",
  "./attributions.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(SHELL_CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k.startsWith("fuga-shell-") && k !== SHELL_CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;

  /* artwork: cache-first, populate on first view (works offline afterwards) */
  if (url.hostname.endsWith("wikimedia.org")) {
    e.respondWith(
      caches.open(IMG_CACHE).then(cache =>
        cache.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
          if (resp.ok || resp.type === "opaque") cache.put(e.request, resp.clone());
          return resp;
        }).catch(() => hit))
      )
    );
    return;
  }

  /* web fonts: cache-first, so an installed app keeps its typeface offline */
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(
      caches.open(FONT_CACHE).then(cache =>
        cache.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
          if (resp.ok || resp.type === "opaque") cache.put(e.request, resp.clone());
          return resp;
        }).catch(() => hit))
      )
    );
    return;
  }

  /* app shell: network-first so updates arrive, cache fallback for offline */
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(SHELL_CACHE).then(c => c.put(e.request, copy));
        return resp;
      }).catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
  }
});
