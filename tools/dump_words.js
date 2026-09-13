/* dump every Cursus pack as JSON {lang: [[word, zh, en, root], ...]} (deduped, first wins) — used by spellcheck_vocab.py */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ROOT = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="([^"]+\.js)"/g)].map(m => m[1]).filter(f => /^(data|vocab)/.test(f));
const ctx = {}; vm.createContext(ctx);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
const V = vm.runInContext("VOCAB", ctx); V.la = vm.runInContext("buildLatinPack()", ctx);
const out = {};
for (const [lang, p] of Object.entries(V)) { const seen = new Set(); out[lang] = []; for (const w of p.words) { if (seen.has(w[0])) continue; seen.add(w[0]); out[lang].push([w[0], w[1], w[2], w[3] || ""]); } }
process.stdout.write(JSON.stringify(out));
