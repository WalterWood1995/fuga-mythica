/* =====================================================
   FUGA MYTHICA — dictionary check of every Cursus word against hunspell dictionaries
   node tools/spellcheck_vocab.js <dictDir> <nspellModuleDir> [--out report.json]
   dictDir holds en_GB / fr / es_ES / it_IT / de_DE_frami / la  .dic+.aff
   Strips articles (der/die/das, le/la/les/l', el/la/los/las, il/lo/la/i/gli/le/l') and checks each remaining token.
   Multi-word phrases: every token must pass. Reports words with any unknown token.
   ===================================================== */
const fs = require("fs"), vm = require("vm"), path = require("path");
const [dictDir, nspellDir] = process.argv.slice(2);
const nspell = require(path.join(nspellDir, "nspell"));
const ROOT = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="([^"]+\.js)"/g)].map(m => m[1]).filter(f => /^(data|vocab)/.test(f));
const ctx = {}; vm.createContext(ctx);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
const V = vm.runInContext("VOCAB", ctx); V.la = vm.runInContext("buildLatinPack()", ctx);
const DICT = { en: "en_GB", fr: "fr", es: "es_ES", it: "it_IT", de: "de_DE_frami", la: "la" };
const ART = { de: /^(der|die|das|ein|eine)$/, fr: /^(le|la|les|l'|un|une|d'|de|du|des|à|au|aux|se|s'|en|y)$/i, es: /^(el|la|los|las|un|una|de|del|a|al|se|en|por|con)$/i, it: /^(il|lo|la|i|gli|le|l'|un|uno|una|di|del|della|a|al|alla|da|si|in|con|per)$/i, en: /^(the|a|an|to|of|in|on|at|by|for|with)$/i, la: /^$/ };
const report = {};
for (const [lang, name] of Object.entries(DICT)) {
  const aff = fs.readFileSync(path.join(dictDir, name + ".aff")), dic = fs.readFileSync(path.join(dictDir, name + ".dic"));
  const sp = nspell(aff, dic);
  const seen = new Set(); const bad = [];
  for (const w of V[lang].words) {
    if (seen.has(w[0])) continue; seen.add(w[0]);
    const toks = w[0].replace(/[’]/g, "'").split(/[\s\-–—,;:!?()…]+/).flatMap(t => t.includes("'") ? t.split(/(?<=')/) : [t]).map(t => t.trim()).filter(Boolean);
    const unknown = toks.filter(t => !ART[lang].test(t) && !/^\d+$/.test(t) && !/^[A-Z]/.test(t) && !sp.correct(t) && !sp.correct(t.toLowerCase()) && !sp.correct(t.charAt(0).toUpperCase() + t.slice(1)));
    if (unknown.length) bad.push([w[0], unknown.join("|"), w[3] || ""]);
  }
  report[lang] = { checked: seen.size, unknown: bad.length, items: bad };
  console.log(lang, "checked", seen.size, "unknown", bad.length);
}
const out = process.argv.includes("--out") ? process.argv[process.argv.indexOf("--out") + 1] : null;
if (out) fs.writeFileSync(out, JSON.stringify(report, null, 1));
