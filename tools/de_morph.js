const fs = require("fs"), vm = require("vm");
const ROOT = "C:/Users/wu_ha/Documents/Game - Luka";
const ctx = { console, window: {} }; vm.createContext(ctx);
vm.runInContext("var VOCAB={}; var ROOT_STORIES={shared:{},de:{},la:{},laMap:{},deMap:{},alias:{}}; var state={lang:'zh'};", ctx);
const html = fs.readFileSync(ROOT + "/de/index.html", "utf8");
for (const f of [...html.matchAll(/<script src="\.\.\/([^"]+)"/g)].map(m => m[1]))
  try { vm.runInContext(fs.readFileSync(ROOT + "/" + f, "utf8"), ctx, { filename: f }); } catch (e) { }
try { vm.runInContext(fs.readFileSync(ROOT + "/de/ipa_de.js", "utf8"), ctx); } catch (e) { console.log("ipa fail", e.message); }
const X = vm.runInContext("({VOCAB, RS:ROOT_STORIES, ipaDe: typeof ipaDe==='function'?ipaDe:null})", ctx);
const P = X.VOCAB.de;
const story = id => !!(X.RS.de[id] || X.RS.shared[id] || X.RS.deMap[id] || (X.RS.alias[id] && (X.RS.de[X.RS.alias[id]] || X.RS.shared[X.RS.alias[id]])));

/* ---------- affix inventories ---------- */
const PRE = [
  ["un", "不、非(否定)", "不可分·名/形"], ["ur", "最初的、原始的", "不可分·名"], ["miss", "错、坏", "不可分"],
  ["be", "使…、把不及物变及物", "不可分·动"], ["ge", "完成、集合(也作过去分词框式)", "不可分"],
  ["er", "做成、开始、致死", "不可分·动"], ["ver", "弄错、用尽、改变、消失", "不可分·动"],
  ["zer", "弄碎、拆散", "不可分·动"], ["ent", "去掉、脱离、开始", "不可分·动"],
  ["emp", "ent- 在 f 前的变体", "不可分·动"],
  ["auf", "向上、打开", "可分"], ["aus", "出来、到尽头", "可分"], ["ein", "进入", "可分"],
  ["mit", "一起", "可分"], ["nach", "在后、追、事后", "可分"], ["vor", "在前、预先", "可分"],
  ["über", "越过、过度", "可分/不可分"], ["unter", "在下、中断", "可分/不可分"],
  ["um", "围绕、改变方向", "可分/不可分"], ["ab", "离开、去掉、完成", "可分"],
  ["an", "靠近、开始", "可分"], ["zu", "朝向、关上、增加", "可分"], ["durch", "穿过、彻底", "可分/不可分"],
  ["hin", "离说话人而去", "可分"], ["her", "朝说话人而来", "可分"],
  ["wieder", "再一次", "可分"], ["wider", "反抗、相对", "不可分"], ["gegen", "相对、反", "可分"],
  ["voll", "满、完成", "可分/不可分"], ["fort", "继续、离开", "可分"], ["weg", "走开", "可分"],
  ["zurück", "回来", "可分"], ["zusammen", "一起、合拢", "可分"], ["empor", "向上", "可分"],
  ["dar", "呈现、摆出", "可分"], ["bei", "附加、在旁", "可分"], ["los", "脱开、开始", "可分"],
];
const PREMAP = {}; PRE.forEach(p => PREMAP[p[0]] = p);
const PRE_SORTED = PRE.map(p => p[0]).sort((a, b) => b.length - a.length);

const SUF = [
  ["ungen", "-ung 的复数", "阴性名词·复数"], ["ung", "动作或其结果", "阴性名词"],
  ["keiten", "-keit 的复数", "阴性名词·复数"], ["keit", "抽象性质(接在 -ig/-lich 后)", "阴性名词"],
  ["heiten", "-heit 的复数", "阴性名词·复数"], ["heit", "抽象性质", "阴性名词"],
  ["schaften", "-schaft 的复数", "阴性名词·复数"], ["schaft", "关系、集体、身份", "阴性名词"],
  ["nisse", "-nis 的复数", "中性名词·复数"], ["nis", "结果、状态", "中性名词"],
  ["tümer", "-tum 的复数", "中性名词·复数"], ["tum", "领域、身份、状态", "中性名词"],
  ["lingen", "-ling 的复数", "阳性名词·复数"], ["ling", "(常带贬义的)人", "阳性名词"],
  ["chen", "小称(一律中性)", "中性名词"], ["lein", "小称(一律中性)", "中性名词"],
  ["innen", "-in 的复数", "阴性名词·复数"], ["in", "女性", "阴性名词"],
  ["lerin", "女性从业者", "阴性名词"], ["ler", "从事者(带 -l-)", "阳性名词"],
  ["ner", "从事者(带 -n-)", "阳性名词"], ["er", "做这件事的人或工具(也作比较级/复数)", "阳性名词"],
  ["erei", "反复做的行当或场所", "阴性名词"], ["ei", "行当、场所", "阴性名词"],
  ["entlich", "-ent + -lich(固定组合)", "形容词"], ["lings", "以…的方式", "副词"],
  ["lich", "…的、每…的", "形容词"], ["ig", "具有…的", "形容词"], ["isch", "属于…的(民族、学科)", "形容词"],
  ["bar", "可…的", "形容词"], ["sam", "倾向于…的", "形容词"], ["los", "没有…的", "形容词"],
  ["voll", "充满…的", "形容词"], ["haft", "具有…性质的", "形容词"], ["mäßig", "按照…的", "形容词"],
  ["artig", "…样式的", "形容词"], ["reich", "富于…的", "形容词"], ["arm", "缺…的", "形容词"],
  ["fach", "…倍、…重", "形容词/副词"], ["wärts", "朝…方向", "副词"], ["weise", "以…方式", "副词"],
  ["end", "现在分词", "形容词"],
  ["igkeiten", "-igkeit 的复数", "阴性名词·复数"], ["igkeit", "-ig + -keit 抽象性质", "阴性名词"],
  ["ationen", "-ation 的复数", "阴性名词·复数"], ["ation", "动作或结果(外来)", "阴性名词"],
  ["us", "拉丁/希腊阳性词尾", "阳性名词"], ["et", "弱变化分词或第三人称(词干以 d/t 结尾)", "动词变位"],
  ["est", "第二人称(词干以 d/t 结尾)", "动词变位"], ["ten", "弱变化过去时复数", "动词变位"],
  ["ismus", "主义、体系", "阳性名词"], ["isten", "-ist 的复数", "阳性名词·复数"], ["ist", "从事者、主义者", "阳性名词"],
  ["ität", "抽象性质(外来词的 -heit)", "阴性名词"], ["tät", "抽象性质", "阴性名词"],
  ["ionen", "-ion 的复数", "阴性名词·复数"], ["tion", "动作或结果(外来词的 -ung)", "阴性名词"], ["sion", "动作或结果", "阴性名词"], ["ion", "动作或结果", "阴性名词"],
  ["enten", "-ent 的复数", "阳性名词·复数"], ["ent", "做这件事的人(外来)", "阳性名词"], ["ant", "做这件事的人(外来)", "阳性名词"],
  ["enz", "状态、性质", "阴性名词"], ["anz", "状态、性质", "阴性名词"],
  ["eur", "从事者(法语来源)", "阳性名词"], ["or", "从事者、装置(拉丁来源)", "阳性名词"],
  ["atur", "结果、集合", "阴性名词"], ["ur", "结果、行业", "阴性名词"],
  ["abel", "可…的(外来)", "形容词"], ["ibel", "可…的(外来)", "形容词"],
  ["iell", "属于…的", "形容词"], ["ell", "属于…的", "形容词"], ["ual", "属于…的", "形容词"], ["al", "属于…的", "形容词"],
  ["iv", "有…倾向的", "形容词"], ["ös", "多…的", "形容词"], ["är", "属于…的", "形容词"],
  ["ieren", "外来词动词化", "动词不定式"], ["eln", "反复或减弱的动作", "动词不定式"], ["ern", "动词化", "动词不定式"],
  ["en", "不定式 / 复数 / 强变化过去分词", "动词或名词"],
  ["st", "第二人称单数", "动词变位"], ["te", "弱变化过去时", "动词变位"],
  ["t", "第三人称单数 / 弱变化过去分词", "动词变位"],
  ["e", "名词化或阴性化(也作第一人称单数)", "名词或动词"],
];
const SUFMAP = {}; SUF.forEach(s => SUFMAP[s[0]] = s);
const SUF_SORTED = SUF.map(s => s[0]).sort((a, b) => b.length - a.length);

/* Fugenelemente */
const FUGEN = [
  ["s", "最常见的接合 -s-,多见于以 -ung/-heit/-keit/-schaft 结尾的前件", "Arbeitsplatz, Liebeslied"],
  ["es", "-s- 在单音节后的加长形", "Tageslicht, Landesgrenze"],
  ["en", "来自弱变化名词的复数或第二格", "Sonnenschein, Herzenswunsch"],
  ["n", "同 -en-,前件已以 -e 结尾", "Straßenbahn, Blumenstrauß"],
  ["er", "来自 -er 复数的前件", "Kindergarten, Bücherregal"],
  ["e", "旧第二格或复数留下的 -e-", "Hundehütte, Badezimmer"],
];
const FU_FORMS = ["es", "en", "s"];   /* only the unambiguous ones */

const NL = String.fromCharCode(10);
const forms = rf => rf.split("/").map(s => s.trim().replace(/[-–]/g, "")).filter(s => s.length > 1);
const bare = w => w.replace(/^(der|die|das)\s+/, "");
const art = w => { const m = /^(der|die|das)\s+/.exec(w); return m ? m[1] : ""; };
const low = s => s.toLowerCase();
const flat = s => low(s).replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss");

/* ---- stem location: exact match first, then consonant-skeleton (Ablaut) match ---- */
const V = "aeiouy";
function skel(s){ const out=[], idx=[]; for(let i=0;i<s.length;i++){ if(!V.includes(s[i])){ out.push(s[i]); idx.push(i); } } return {s:out.join(""), idx}; }
function findStem(word, fs_){
  const w = flat(word);
  let best = null;
  const take = (at,len,form,how,q) => {
    if (len < 2) return;
    if (!best || q > best.q || (q === best.q && len > best.len) || (q === best.q && len === best.len && at < best.at))
      best = { at, len, form, how, q };
  };
  /* 1. literal, allowing one trailing char of the root form to be dropped */
  for (const f of fs_){ const ff = flat(f);
    for (let cut = 0; cut <= 0; cut++){
      const probe = ff.slice(0, ff.length - cut), k = w.indexOf(probe);
      if (k >= 0) take(k, probe.length, f, cut ? "同形(略尾)" : "同形", 100 - cut + probe.length/100);
    }
  }
  if (best) return best;
  /* 2. consonant skeleton: catches Ablaut (kommen/Kunft, sitzen/setzen, recht/richt) */
  const ws = skel(w);
  for (const f of fs_){ const ff = flat(f), fsk = skel(ff);
    if (fsk.s.length < 2) continue;
    const lead = ff.length - ff.replace(/^[aeiouy]+/, "").length;
    const trail = ff.length - ff.replace(/[aeiouy]+$/, "").length;
    let from = 0, k;
    while ((k = ws.s.indexOf(fsk.s, from)) >= 0){
      from = k + 1;
      let a = ws.idx[k], b = ws.idx[k + fsk.s.length - 1] + 1;
      for (let n = 0; n < lead && a > 0 && V.includes(w[a-1]); n++) a--;
      for (let n = 0; n < trail && b < w.length && V.includes(w[b]); n++) b++;
      const len = b - a;
      if (len >= 3 && Math.abs(len - ff.length) <= 2) take(a, len, f, "换元音(Ablaut)", 50 + len/100);
    }
  }
  return best;
}
function greedy(zone, list) {
  const out = []; let s = low(zone);
  while (s) { const hit = list.find(p => s.startsWith(p)); if (!hit) break; out.push(hit); s = s.slice(hit.length); }
  return { chain: out, rest: s };
}
function greedyEnd(zone, list) {   /* peel suffixes from the END inward */
  const out = []; let s = low(zone);
  while (s) { const hit = list.find(p => s.endsWith(p) && s.length > p.length - 1); if (!hit) break; out.unshift(hit); s = s.slice(0, s.length - hit.length); }
  return { chain: out, rest: s };
}


/* ---- a lexeme index over every real root: lets us spot the other half of a compound ---- */
const realRoot0 = rf => /^[-]?[A-Za-zÄÖÜäöüß]/.test(rf) && !rf.includes("主题") && !rf.includes(":") && !rf.includes("：");
const ALL_FORMS = [];
Object.entries(P.roots).forEach(([id, r]) => {
  if (!realRoot0(r[0])) return;
  forms(r[0]).forEach(f => { if (f.length >= 3) ALL_FORMS.push({ f: flat(f), raw: f, id }); });
});
ALL_FORMS.sort((a, b) => b.f.length - a.f.length);
function lexAt(zone, min) {                  /* is another root sitting at the head of this zone? */
  const z = flat(zone); min = min || 3;
  for (let cut = 0; cut <= 0; cut++)
    for (const e of ALL_FORMS) {
      if (e.f.length - cut < min) continue;
      const pr = e.f.slice(0, e.f.length - cut);
      if (PREMAP[pr] || SUFMAP[pr]) continue;
      const probe = e.f.slice(0, e.f.length - cut);
      if (z.startsWith(probe)) return { len: probe.length, id: e.id, raw: e.raw };
    }
  return null;
}
function bestRootFor(word) {                  /* longest root form that literally occurs in the word */
  const z = flat(word);
  for (const e of ALL_FORMS) {
    if (e.f.length < 4) break;
    if (z.includes(e.f)) return e;
  }
  return null;
}
const FU_SET = ["es", "en", "er", "s", "n", "e"];
function peelSuf(zone) {                     /* suffixes from the right, never below 3 remaining chars */
  const out = []; let s = low(zone);
  while (s) {
    const hit = SUF_SORTED.find(p => s.endsWith(p) && (s.length - p.length === 0 || s.length - p.length >= 2));
    if (!hit) break;
    out.unshift(hit); s = s.slice(0, s.length - hit.length);
  }
  return { chain: out, rest: s };
}

const rows = [], plainRows = [], skipped = [], phrases = [], noRoot = [];
const seen = new Set();
const realRoot = rf => /^[-]?[A-Za-zÄÖÜäöüß]/.test(rf) && !rf.includes("主题") && !rf.includes(":") && !rf.includes("：");

P.words.forEach(w => {
  let [word, zh, en, rid] = w;
  let r = rid && P.roots[rid], src = "词库标注";
  const b = bare(word);
  if (seen.has(flat(b))) return; seen.add(flat(b));
  if (/\s/.test(b)) { phrases.push([word, zh, en, rid || "", r ? r[0] : ""]); return; }
  if (!r || !realRoot(r[0])) {                    /* filed under a theme bucket: try to find its root */
    const g = bestRootFor(b);
    if (!g) { noRoot.push([word, zh, en, rid || "", r ? r[0] : "", X.ipaDe ? X.ipaDe(b) : ""]); return; }
    r = P.roots[g.id]; rid = g.id; src = "自动匹配(待核)";
  }
  const fs_ = forms(r[0]);
  if (!fs_.length) return;
  const hit = findStem(b, fs_);
  if (!hit) { skipped.push([rid, r[0], word, zh]); return; }
  const preZone = b.slice(0, hit.at), sufZone = b.slice(hit.at + hit.len);
  let core = b.slice(hit.at, hit.at + hit.len);

  /* --- prefix zone: known prefixes, then any other lexeme (compound first element) --- */
  let preChain = [], comp1 = "", comp1id = "", links = [];
  {
    let z = preZone;
    while (z) {
      const hit = PRE_SORTED.find(p => low(z).startsWith(p));
      if (hit) { preChain.push(hit); z = z.slice(hit.length); continue; }
      const lx = lexAt(z);
      if (lx && !comp1) { comp1 = z.slice(0, lx.len); comp1id = lx.id; z = z.slice(lx.len);
        const fu = FU_SET.find(f => low(z) === f); if (fu) { links.push("-" + fu + "-"); z = ""; }
        continue; }
      break;
    }
    if (z) { if (comp1) comp1 += z; else comp1 = z; }
  }
  /* --- suffix zone: optional linking element, another lexeme, then suffixes --- */
  let sufChain = [], comp2 = "", comp2id = "", tail = "";
  {
    let z = sufZone;
    if (z) {
      const fu = FU_SET.filter(f => low(z).startsWith(f) && z.length > f.length + 2)
        .sort((x, y) => y.length - x.length).find(f => lexAt(z.slice(f.length), 4));
      if (fu) { links.push("-" + fu + "-"); z = z.slice(fu.length); }
      const lx = lexAt(z, 4);
      if (lx) { comp2 = z.slice(0, lx.len); comp2id = lx.id; z = z.slice(lx.len); }
      const ps = peelSuf(z);
      sufChain = ps.chain;
      if (ps.rest) {
        const fu2 = FU_SET.find(f => low(ps.rest) === f);
        if (fu2) links.push("-" + fu2 + "-");
        else if (!comp2) { if (ps.rest.length >= 3) comp2 = ps.rest; else tail = ps.rest; }
        else if (ps.rest.length <= 2) comp2 += ps.rest;      /* stem-final letter of that lexeme */
        else tail = ps.rest;
      }
    }
  }
  let link = links.join(" + ");
  const circum = (preChain[0] === "ge" && /(t|en)$/.test(low(sufZone)) && sufChain.length)
    ? "ge-…-" + (low(sufZone).endsWith("en") ? "en" : "t") : "";
  if (circum) link = link ? link + " + " + circum : circum;

  if (!preChain.length && comp2 && PREMAP[low(core)]) {
    preChain = [low(core)]; core = comp2.replace(/^-/, ""); comp2 = ""; comp2id = "";
    link = links.filter(Boolean).join(" + ");
  }
  const rec = {
    letter: (flat(fs_[0]).replace(/^-/, "")[0] || "?").toUpperCase(),
    rootForm: r[0], rid, rootZh: r[1], rootEn: r[2], hasStory: story(rid) ? "有" : "",
    pre: preChain.map(p => p + "-").join(" + "),
    preM: preChain.map(p => (PREMAP[p] || [, ""])[1]).join(" / "),
    preT: preChain.map(p => (PREMAP[p] || [, , ""])[2]).join(" / "),
    comp1: comp1 ? comp1 + "-" : "", comp1id, comp2: comp2 ? "-" + comp2 : "", comp2id, link,
    core, coreForm: hit.form, how: hit.how,
    suf: sufChain.map(s => "-" + s).join(" + "),
    sufM: sufChain.map(s => (SUFMAP[s] || [, ""])[1]).join(" / "),
    sufT: sufChain.map(s => (SUFMAP[s] || [, , ""])[2]).join(" / "),
    tail,
    art: art(word), word: b, zh, en, ipa: X.ipaDe ? X.ipaDe(b) : "", src,
  };
  (rec.pre || rec.suf || rec.comp1 || rec.comp2 || rec.link ? rows : plainRows).push(rec);
});
const key = r => flat(r.rootForm).replace(/^-/, "") + "\u0000" + flat(r.word);
rows.sort((a, b) => key(a).localeCompare(key(b), "de"));
plainRows.sort((a, b) => key(a).localeCompare(key(b), "de"));

module.exports = { rows, plainRows, skipped, phrases, noRoot, PRE, SUF, FUGEN, P, story, forms, flat };
if (require.main === module) {
  console.log("affixed:", rows.length, "| plain:", plainRows.length, "| phrases:", phrases.length, "| no real root:", noRoot.length, "| unmatched:", skipped.length);
  const f=r=>[r.pre,r.comp1,r.link,r.core,r.comp2,r.suf,r.tail&&"yu:"+r.tail,r.word,r.zh,r.how].filter(Boolean).join(" | ");
  console.log(rows.slice(0,18).map(f).join(NL));
  console.log(NL+"-- unmatched: "+skipped.slice(0,25).map(s=>s[2]+"("+s[1]+")").join(" "));
  const t=rows.filter(r=>r.tail); console.log(NL+"-- tail: "+t.length+" "+t.slice(0,25).map(r=>r.word+">"+r.tail).join(" "));
  const ab=rows.filter(r=>r.how!=="同形"); console.log(NL+"-- non-identical: "+ab.length+" "+ab.slice(0,20).map(r=>r.word+"="+r.core+"("+r.coreForm+")").join(" "));
}
