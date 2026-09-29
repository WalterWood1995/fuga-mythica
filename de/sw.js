/* 德语单词词根词缀速记 — offline shell */
const VERSION = "de-v1.1.0";
const CACHE = "de-wurzeln-" + VERSION;
const SHELL = ["./", "./index.html", "./app.js", "./ipa_de.js", "./chain_de.js", "./manifest.webmanifest", "../etymview.js"];
for (let i = 1; i <= 13; i++) SHELL.push("../vocab_de" + (i === 1 ? "" : i) + ".js");
for (let i = 1; i <= 11; i++) SHELL.push("../root_stories" + (i === 1 ? "" : i) + ".js");
for (let i = 1; i <= 23; i++) SHELL.push("../root_stories_de" + (i === 1 ? "" : i) + ".js");
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("de-wurzeln-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(CACHE).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit))));
});
