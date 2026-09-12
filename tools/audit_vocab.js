/* =====================================================
   FUGA MYTHICA — vocabulary audit
   node tools/audit_vocab.js [--fix-report out.json]
   Checks every Cursus pack loaded by index.html:
     1. structure: 4 fields, strings, no empty word/gist, no Cyrillic/odd chars, no trailing digits
     2. duplicates inside a pack (first wins at runtime — reported so the loser can be removed)
     3. undefined root ids
     4. article/gender sanity: de nouns need der/die/das; fr/es/it nouns need an article or be verbs/adjectives
     5. gist sanity: zh column must contain CJK, en column must be Latin script and short (< 40 chars)
     6. root membership: word should contain one of the root's stem forms (heuristic; reported as "loose")
     7. cross-language root comparison: same id in en/fr/es/it must share zh gist and en gist
   ===================================================== */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ROOT = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="([^"]+\.js)"/g)].map(m => m[1]).filter(f => /^(data|vocab|etym_stories|root_stories)/.test(f));
const ctx = {}; vm.createContext(ctx);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
const V = vm.runInContext("VOCAB", ctx); V.la = vm.runInContext("buildLatinPack()", ctx);
const R = vm.runInContext("typeof ROOT_STORIES==='undefined'?null:ROOT_STORIES", ctx);

const report = { structure: [], dup: [], badRoot: [], article: [], gist: [], loose: [], rootMismatch: [], summary: {} };
const CJK = /[一-鿿]/, CYR = /[Ѐ-ӿ]/, LATIN = /^[A-Za-zÀ-ÿŒœßĀ-ſ' .,;:/()\-–&*?!0-9]+$/;
const TAGS = new Set(["topic", "core", "germ", "arab", "celt"]);

/* stem forms of a root: split "sta / stit" -> ["sta","stit"]; strip hyphens, keep >=2 letters */
function stems(form) {
  return form.split(/[\/,]/).map(s => s.replace(/[-\s()]/g, "").toLowerCase()).filter(s => s.length >= 2);
}
function norm(w) { return w.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

for (const [lang, p] of Object.entries(V)) {
  const seen = new Map(); let n = 0;
  p.words.forEach((w, i) => {
    if (!Array.isArray(w) || w.length < 3 || typeof w[0] !== "string" || typeof w[1] !== "string" || typeof w[2] !== "string") { report.structure.push({ lang, i, w }); return; }
    const [word, zh, en, root] = w;
    if (!word.trim() || !zh.trim() || !en.trim()) report.structure.push({ lang, word, why: "empty field" });
    if (CYR.test(word + zh + en)) report.structure.push({ lang, word, why: "cyrillic" });
    if (/\d$/.test(word)) report.structure.push({ lang, word, why: "trailing digit" });
    if (seen.has(word)) { report.dup.push({ lang, word, first: seen.get(word), again: [zh, en, root] }); return; }
    seen.set(word, [zh, en, root]); n++;
    if (root && !p.roots[root]) report.badRoot.push({ lang, word, root });
    /* gist */
    if (!CJK.test(zh)) report.gist.push({ lang, word, why: "zh gist has no CJK", zh });
    if (!LATIN.test(en)) report.gist.push({ lang, word, why: "en gist has odd chars", en });
    if (en.length > 40) report.gist.push({ lang, word, why: "en gist too long", en });
    /* articles */
    if (lang === "de") {
      if (/^[A-ZÄÖÜ]/.test(word) && !/^(der|die|das) /.test(word) && !/ /.test(word.replace(/^(der|die|das) /, "")) && !/^[A-Z][a-zäöüß]+$/.test(word) === false) {
        /* single capitalised token without article: proper noun or missing article */
        if (!/^(Europa|Asien|Afrika|Nordamerika|Südamerika|Ozeanien|Deutschland|Frankreich|Spanien|Italien|England|China|Japan|Russland|Griechenland|Ägypten|Indien|Brasilien|Weihnachten|Ostern|Silvester|Heiligabend|Salzburg|Friedrich|Schneewittchen|Hallo|Prost|Entschuldigung|Willkommen|Achtung|Hilfe|Vorsicht|Übrigens|Einverstanden|Genau|Stimmt|Schade|Halloween)$/.test(word))
          report.article.push({ lang, word, why: "capitalised noun without article" });
      }
      if (/^(der|die|das) [a-zäöüß]/.test(word)) report.article.push({ lang, word, why: "article + lowercase noun" });
    }
    if (lang === "fr" || lang === "es" || lang === "it") {
      const art = { fr: /^(le|la|les|un|une) |^l'/, es: /^(el|la|los|las|un|una) /, it: /^(il|lo|la|i|gli|le|un|uno|una) |^l'/i }[lang];
      /* a capitalised bare word is a proper noun; a bare word ending in typical noun suffix without article is suspicious */
      const sfx = { fr: /(tion|té|eur|isme|iste|age|ance|ence)$/, es: /(ción|miento|dad|dor|ismo|ista|aje|ancia|encia)$/, it: /(zione|mento|tà|tore|ismo|ista|aggio|anza|enza)$/ }[lang];
      if (!art.test(word) && sfx.test(word) && !/^[A-Z]/.test(word) && !/ /.test(word)) report.article.push({ lang, word, why: "noun-like word without article" });
    }
    /* root membership */
    if (root && p.roots[root] && !TAGS.has(root)) {
      const st = stems(p.roots[root][0]); const nw = norm(word);
      if (st.length && !st.some(s => nw.includes(norm(s)))) report.loose.push({ lang, word, root, form: p.roots[root][0] });
    }
  });
  report.summary[lang] = { words: n, roots: Object.keys(p.roots).length };
}

/* cross-language root comparison */
const shared = {};
for (const lang of ["en", "fr", "es", "it"]) for (const [id, r] of Object.entries(V[lang].roots)) (shared[id] = shared[id] || {})[lang] = r;
for (const [id, byLang] of Object.entries(shared)) {
  const langs = Object.keys(byLang); if (langs.length < 2) continue;
  const zhs = new Set(langs.map(l => byLang[l][1])), ens = new Set(langs.map(l => byLang[l][2]));
  if (zhs.size > 1 || ens.size > 1) report.rootMismatch.push({ id, defs: Object.fromEntries(langs.map(l => [l, byLang[l]])) , story: R && (R.shared[id] || R.alias[id]) ? "yes" : "no" });
}
report.summary.rootMismatch = report.rootMismatch.length;
for (const k of ["structure", "dup", "badRoot", "article", "gist", "loose"]) report.summary[k] = report[k].length;

const out = process.argv.includes("--out") ? process.argv[process.argv.indexOf("--out") + 1] : null;
if (out) fs.writeFileSync(out, JSON.stringify(report, null, 1));
console.log(JSON.stringify(report.summary));
