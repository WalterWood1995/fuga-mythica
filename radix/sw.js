/* Radix Latina — offline shell */
const VERSION = "radix-v1.1.0";
const CACHE = "radix-latina-" + VERSION;
const SHELL = ["./", "./index.html", "./app.js", "./letters.js", "./chain.js", "./laws.js", "./manifest.webmanifest", "../etymview.js"];
["en", "fr", "it", "es"].forEach(l => { const n = l === "en" ? 11 : 12; for (let i = 1; i <= n; i++) SHELL.push("../vocab_" + l + (i === 1 ? "" : i) + ".js"); });
for (let i = 1; i <= 11; i++) SHELL.push("../root_stories" + (i === 1 ? "" : i) + ".js");
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("radix-latina-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(CACHE).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(r => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => hit))));
});
