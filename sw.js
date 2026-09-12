/* Fuga Mythica service worker */
const VERSION = "v0.35.0";
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
  "./vocab_core.js",
  "./vocab_en.js",
  "./vocab_de.js",
  "./vocab_fr.js",
  "./vocab_it.js",
  "./vocab_es.js",
  "./vocab_ja.js",
  "./vocab_la.js",
  "./vocab_en2.js",
  "./vocab_fr2.js",
  "./vocab_es2.js",
  "./vocab_de2.js",
  "./vocab_it2.js",
  "./vocab_la2.js",
  "./vocab_en3.js",
  "./vocab_fr3.js",
  "./vocab_es3.js",
  "./vocab_de3.js",
  "./vocab_it3.js",
  "./vocab_la3.js",
  "./vocab_en4.js",
  "./vocab_fr4.js",
  "./vocab_es4.js",
  "./vocab_de4.js",
  "./vocab_it4.js",
  "./vocab_la4.js",
  "./vocab_en5.js",
  "./vocab_fr5.js",
  "./vocab_es5.js",
  "./vocab_de5.js",
  "./vocab_it5.js",
  "./vocab_fr6.js",
  "./vocab_de6.js",
  "./vocab_de7.js",
  "./vocab_de8.js",
  "./vocab_de9.js",
  "./vocab_de10.js",
  "./vocab_de11.js",
  "./vocab_de12.js","./vocab_es6.js","./vocab_it6.js","./vocab_en6.js","./vocab_fr7.js","./vocab_la5.js","./vocab_la6.js","./vocab_la7.js","./vocab_it7.js","./vocab_es7.js","./vocab_fr8.js","./vocab_en7.js","./vocab_fr9.js","./vocab_es8.js","./vocab_it8.js","./vocab_la8.js","./vocab_en8.js","./vocab_fr10.js","./vocab_es9.js","./vocab_it9.js","./vocab_en9.js","./vocab_fr11.js","./vocab_es10.js","./vocab_it10.js","./vocab_en10.js","./vocab_fr12.js","./vocab_es11.js","./vocab_it11.js","./vocab_en11.js","./vocab_fr13.js","./vocab_es12.js","./vocab_it12.js","./vocab_de13.js",
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
