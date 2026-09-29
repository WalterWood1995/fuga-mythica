/* Generic prefix / root / suffix splitter for la · en · fr · it · es.
   Same method as de_morph.js: locate the vocabulary's own root in the word (literal first,
   then consonant skeleton for vowel alternation), read known prefixes to the left and
   known suffixes / endings to the right; leftovers are reported, never silently dropped.
   usage: node tools/rom_morph.js <lang>   → JSON on stdout */
const fs = require("fs"), vm = require("vm"), path = require("path");
const ROOT = path.resolve(__dirname, "..");
const { LANGS } = require("./lang_affix.js");
const LANG = process.argv[2];
const CFG = LANGS[LANG];
if (!CFG) { console.error("lang?", Object.keys(LANGS).join(" ")); process.exit(1); }

/* ---------- load the packs exactly as the main game does ---------- */
const noop = () => {};
const ctx = { console: { log: noop, warn: noop, error: noop }, window: {}, navigator: {},
  document: { addEventListener: noop, querySelector: () => null, getElementById: () => null, querySelectorAll: () => [], createElement: () => ({ style: {} }) },
  localStorage: { getItem: () => null, setItem: noop } };
vm.createContext(ctx);
vm.runInContext('var state={lang:"zh"};', ctx);
const html = fs.readFileSync(ROOT + "/index.html", "utf8");
for (const f of [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]).filter(f => /^(data|vocab|root_stories)/.test(f)))
  try { vm.runInContext(fs.readFileSync(ROOT + "/" + f, "utf8"), ctx, { filename: f }); } catch (e) { }
try { vm.runInContext("buildLatinPack()", ctx); } catch (e) { }
const X = vm.runInContext("({VOCAB, RS: typeof ROOT_STORIES!=='undefined'?ROOT_STORIES:{shared:{},alias:{}}})", ctx);
const P = X.VOCAB[LANG];
const story = id => !!(X.RS.shared && (X.RS.shared[id] || (X.RS.alias && X.RS.alias[id] && X.RS.shared[X.RS.alias[id]])));

/* ---------- helpers ---------- */
const low = s => s.toLowerCase();
const flat = s => low(s).replace(/ß/g, "ss").replace(/æ/g, "ae").replace(/œ/g, "oe").normalize("NFD").replace(/[̀-ͯ]/g, "");
const V = "aeiouy";
const PREMAP = {}, SUFMAP = {};
CFG.pre.forEach(p => PREMAP[flat(p[0])] = p);
CFG.suf.forEach(s => SUFMAP[flat(s[0])] = s);
const PRE_SORTED = Object.keys(PREMAP).sort((a, b) => b.length - a.length);
const SUF_SORTED = Object.keys(SUFMAP).sort((a, b) => b.length - a.length);

const pseudo = (id, r) => id === "core" || id === "topic" || /^t_/.test(id) ||
  !/^[-(]?[A-Za-zÀ-žα-ω]/.test(r[0]) || /主题|核心|常用|无词根/.test(r[0] + r[1]);
const forms = rf => rf.split("/").map(s => flat(s.trim().replace(/[-–()]/g, ""))).filter(s => s.length > 1);

function skel(s) { const out = [], idx = []; for (let i = 0; i < s.length; i++) if (!V.includes(s[i])) { out.push(s[i]); idx.push(i); } return { s: out.join(""), idx }; }
function findStem(word, fs_) {
  const w = flat(word); let best = null;
  const take = (at, len, form, how, q) => {
    if (len < 2) return;
    if (!best || q > best.q || (q === best.q && at < best.at)) best = { at, len, form, how, q };
  };
  for (const f of fs_) { const k = w.indexOf(f); if (k >= 0) take(k, f.length, f, "同形", 100 + f.length / 100); }
  if (best) return best;
  /* one-letter wobble at the end of the root (fac/fic, -c/-g), common in Romance */
  for (const f of fs_) if (f.length >= 4) { const k = w.indexOf(f.slice(0, -1)); if (k >= 0) take(k, f.length - 1, f, "同形(略尾)", 80); }
  if (best) return best;
  const ws = skel(w);
  for (const f of fs_) {
    const fsk = skel(f); if (fsk.s.length < 2) continue;
    const lead = f.length - f.replace(/^[aeiouy]+/, "").length, trail = f.length - f.replace(/[aeiouy]+$/, "").length;
    let from = 0, k;
    while ((k = ws.s.indexOf(fsk.s, from)) >= 0) {
      from = k + 1;
      let a = ws.idx[k], b = ws.idx[k + fsk.s.length - 1] + 1;
      for (let n = 0; n < lead && a > 0 && V.includes(w[a - 1]); n++) a--;
      for (let n = 0; n < trail && b < w.length && V.includes(w[b]); n++) b++;
      if (b - a >= 3 && Math.abs(b - a - f.length) <= 2) take(a, b - a, f, "换元音", 50);
    }
  }
  return best;
}
/* all attested root forms, for spotting the other half of a compound */
const ALL = [];
Object.entries(P.roots).forEach(([id, r]) => { if (!pseudo(id, r)) forms(r[0]).forEach(f => { if (f.length >= 4 && !PREMAP[f] && !SUFMAP[f]) ALL.push({ f, id }); }); });
ALL.sort((a, b) => b.f.length - a.f.length);
const lexAt = z => { z = flat(z); for (const e of ALL) if (z.startsWith(e.f)) return e; return null; };
const bestRootFor = word => { const z = flat(word); for (const e of ALL) if (e.f.length >= 5 && z.includes(e.f)) return e; return null; };

function splitPre(zone) {                       /* must consume the whole zone to count as prefixes */
  let best = null;
  const go = (z, acc) => {
    if (!z) { if (!best || acc.length < best.length) best = acc; return; }
    for (const p of PRE_SORTED) if (z.startsWith(p)) go(z.slice(p.length), acc.concat([p]));
  };
  go(flat(zone), []);
  return best;
}
function peelSuf(zone) {
  const out = []; let s = flat(zone);
  while (s) {
    const hit = SUF_SORTED.find(p => s.endsWith(p) && (s.length === p.length || s.length - p.length >= 2));
    if (!hit) break;
    out.unshift(hit); s = s.slice(0, s.length - hit.length);
  }
  return { chain: out, rest: s };
}

/* ---------- walk ---------- */
const rows = [], plain = [], phrases = [], noRoot = [], skipped = [], seen = new Set();
P.words.forEach(w => {
  let [word, zh, en, rid] = w;
  let r = rid && P.roots[rid], src = "词库标注";
  let art = "";
  let b = String(word);
  const m = CFG.art && b.match(CFG.art);
  if (m) { art = m[0].trim(); b = b.slice(m[0].length); }
  b = b.replace(/,.*$/, "").trim();                              /* Latin headwords: "amo, amare" → amo */
  const k = flat(b); if (!k || seen.has(k)) return; seen.add(k);
  if (/\s/.test(b)) { phrases.push([word, zh, en, rid || "", r ? r[0] : ""]); return; }
  if (!r || pseudo(rid, r)) {
    const g = bestRootFor(b);
    if (!g) { noRoot.push([word, zh, en, rid || "", r ? r[0] : ""]); return; }
    rid = g.id; r = P.roots[rid]; src = "自动匹配(待核)";
  }
  const fs_ = forms(r[0]); if (!fs_.length) { skipped.push([rid, r[0], word, zh]); return; }
  const hit = findStem(b, fs_);
  if (!hit) { skipped.push([rid, r[0], word, zh]); return; }
  const fb = flat(b);
  const preZone = b.slice(0, hit.at), sufZone = b.slice(hit.at + hit.len);
  let core = b.slice(hit.at, hit.at + hit.len);

  let pre = [], comp1 = "", link = "", sufRoot = "";
  let preZ = preZone;
  if (SUFMAP[flat(core)] && preZone && flat(sufZone).length <= 2 && flat(preZone).length >= 2) {
    sufRoot = flat(core);                       /* the family is a suffix family */
    core = preZone; preZ = "";
    const sp0 = splitPre(core);                 /* strip real prefixes off the base */
    for (let cut = core.length - 2; cut >= 1; cut--) {
      const sp = splitPre(core.slice(0, cut));
      if (sp) { pre = sp; core = core.slice(cut); break; }
    }
  }
  if (preZ) {
    const sp = splitPre(preZ);
    if (sp) pre = sp; else {
      /* try: prefixes + a leftover lexeme (Romance compounds are rare, but exist) */
      const lx = lexAt(preZ);
      if (lx) { comp1 = preZ.slice(0, lx.f.length); const rest = preZ.slice(lx.f.length); if (rest) link = rest; }
      else comp1 = preZ;
    }
  }
  let suf = [], comp2 = "", tail = "";
  if (sufRoot && !sufZone) suf = [sufRoot];
  if (sufZone) {
    let z = sufZone;
    const lx = lexAt(z);
    if (lx && flat(z).length > lx.f.length) { comp2 = z.slice(0, lx.f.length); z = z.slice(lx.f.length); }
    const ps = peelSuf(z); suf = ps.chain;
    if (sufRoot) suf.unshift(sufRoot);
    if (ps.rest) { if (!comp2 && ps.rest.length >= 3) comp2 = ps.rest; else if (comp2 && ps.rest.length <= 2) comp2 += ps.rest; else tail = ps.rest; }
  }
  /* a prefix hidden inside the vocabulary's own root form (absolut- → ab + solut) */
  let famKey = r[0];
  if (!pre.length) {
    const fc = flat(core);
    for (const p of PRE_SORTED) {
      if (p.length < 2 || !fc.startsWith(p)) continue;
      const rest = fc.slice(p.length);
      if (rest.length >= 4 && ALL.some(e => e.f === rest || (rest.startsWith(e.f) && e.f.length >= 4))) {
        pre = [p]; core = core.slice(p.length); famKey = rest + "-"; break;
      }
    }
  }
  const rec = {
    rid, rootForm: r[0], famKey, rootZh: r[1], rootEn: r[2], hasStory: story(rid) ? "有" : "",
    pre: pre.map(p => PREMAP[p][0] + "-").join(" + "),
    preM: pre.map(p => PREMAP[p][1]).join(" / "),
    comp1: comp1 ? comp1 + "-" : "", link: link ? "-" + link + "-" : "",
    core, how: hit.how,
    comp2: comp2 ? "-" + comp2 : "", tail,
    suf: suf.map(s => "-" + SUFMAP[s][0]).join(" + "),
    sufM: suf.map(s => SUFMAP[s][1]).join(" / "),
    sufT: suf.map(s => SUFMAP[s][2]).join(" / "),
    art, word: b, full: word, zh, en, src,
  };
  /* endings alone (cavall-o, dom-us) are inflection, not word-building */
  const derivSuf = suf.some(x => SUFMAP[x][2] !== "词尾");
  (rec.pre || derivSuf || rec.comp1 || rec.comp2 || rec.link ? rows : plain).push(rec);
});
const key = r => flat(r.famKey).replace(/^-/, "") + "\u0000" + flat(r.word);
rows.sort((a, b) => key(a).localeCompare(key(b)));
plain.sort((a, b) => key(a).localeCompare(key(b)));

const count = (list, field, tok) => list.filter(r => (r[field] || "").split(" + ").includes(tok)).length;
const ALLR = rows.concat(plain);
const preTable = CFG.pre.map(p => [p[0] + "-", p[1], count(ALLR, "pre", p[0] + "-"),
  ALLR.filter(r => r.pre.split(" + ").includes(p[0] + "-")).slice(0, 4).map(r => r.word + " " + r.zh).join(" · ")]);
const sufTable = CFG.suf.map(s => ["-" + s[0], s[1], s[2], count(ALLR, "suf", "-" + s[0]),
  ALLR.filter(r => r.suf.split(" + ").includes("-" + s[0])).slice(0, 4).map(r => r.word + " " + r.zh).join(" · ")]);

process.stdout.write(JSON.stringify({ lang: LANG, name: CFG.name, rows, plain, phrases, noRoot, skipped, preTable, sufTable,
  stat: { words: ALLR.length, affixed: rows.length, plain: plain.length, phrases: phrases.length, noRoot: noRoot.length, skipped: skipped.length,
          families: new Set(ALLR.map(r => r.famKey)).size, auto: ALLR.filter(r => r.src !== "词库标注").length,
          ablaut: ALLR.filter(r => r.how === "换元音").length, compound: ALLR.filter(r => r.comp1 || r.comp2).length } }));
