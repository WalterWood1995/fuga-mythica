/* =====================================================
   FUGA MYTHICA — ETYMVIEW: turns a long etymology story into a layered,
   collapsible view with a small mind map at the top.

     🌱 root ─┬─ 🌍 PIE root
              ├─ 🧬 cognates (chips, grouped by language)
              ├─ 🧩 same-root family
              └─ 📜 the story itself (sentence by sentence, collapsed)

   The prose is never thrown away: the parser only lifts chips out of it and
   splits it into sentences. Enumerations of compounds become chip grids.
   Exposes: evBlockHtml(story, opts) and evMapHtml(nodes).
   ===================================================== */
const EV_LANG_ZH = "原始印欧语|印欧语|原始日耳曼语|日耳曼语|西日耳曼语|北日耳曼语|古拉丁语|晚期拉丁语|中世纪拉丁语|俗拉丁语|俗拉丁|教会拉丁语|拉丁语|古希腊语|希腊语|梵语|古英语|中古英语|英语|古高地德语|中古高地德语|低地德语|中古低地德语|德语|荷兰语|中古荷兰语|哥特语|古挪威语|古撒克逊语|古法语|法语|意大利语|西班牙语|葡萄牙语|加泰罗尼亚语|俄语|立陶宛语|拉脱维亚语|古教会斯拉夫语|斯拉夫语|高卢语|古爱尔兰语|爱尔兰语|威尔士语|凯尔特语|阿拉伯语|波斯语|希伯来语|阿卡德语|土耳其语|法兰克语|伦巴第语|阿维斯陀语|赫梯语|亚美尼亚语|巴斯克语|努比亚语|奥斯坎语|吕底亚语|埃及语";
const EV_LANG_EN = "Proto-Indo-European|PIE|Proto-Germanic|Germanic|West Germanic|North Germanic|Old Latin|Late Latin|Medieval Latin|Vulgar Latin|Church Latin|Latin|Ancient Greek|Greek|Sanskrit|Old English|Middle English|English|Old High German|Middle High German|Low German|German|Dutch|Gothic|Old Norse|Old Saxon|Old French|French|Italian|Spanish|Portuguese|Catalan|Russian|Lithuanian|Latvian|Old Church Slavonic|Slavic|Gaulish|Old Irish|Irish|Welsh|Celtic|Arabic|Persian|Hebrew|Akkadian|Turkish|Frankish|Lombardic|Avestan|Hittite|Armenian|Basque|Nubian|Oscan|Lydian|Egyptian";
const EV_WORD = "[A-Za-z\u00C0-\u024F\u1E00-\u1EFF\u0300-\u036F\u2080-\u2089\u02B0-\u02FF\u1D2C-\u1D6A’'-]{2,}";

const EV_I18N = {
  zh: { evPie: "🌍 最早的词根", evCog: "🧬 同源词", evFam: "🧩 同根词族", evStory: "📜 词源故事", evLatin: "🏛️ 拉丁语源头",
        evRaw: "原文", evSent: "句", evItems: "个", evAll: "展开全部", evFold: "收起", evTapHint: "点一个分支展开" },
  en: { evPie: "🌍 Oldest root", evCog: "🧬 Cognates", evFam: "🧩 Same-root family", evStory: "📜 The story", evLatin: "🏛️ Latin source",
        evRaw: "Original text", evSent: "sentences", evItems: "items", evAll: "Show all", evFold: "Collapse", evTapHint: "tap a branch to open it" },
  de: { evPie: "🌍 Älteste Wurzel", evCog: "🧬 Verwandte Wörter", evFam: "🧩 Wortfamilie", evStory: "📜 Die Geschichte", evLatin: "🏛️ Lateinische Quelle",
        evRaw: "Originaltext", evSent: "Sätze", evItems: "Einträge", evAll: "Alles zeigen", evFold: "Einklappen", evTapHint: "Zweig antippen" },
  fr: { evPie: "🌍 Racine la plus ancienne", evCog: "🧬 Mots apparentés", evFam: "🧩 Famille de mots", evStory: "📜 L'histoire", evLatin: "🏛️ Source latine",
        evRaw: "Texte original", evSent: "phrases", evItems: "entrées", evAll: "Tout afficher", evFold: "Réduire", evTapHint: "touchez une branche" },
  es: { evPie: "🌍 Raíz más antigua", evCog: "🧬 Palabras emparentadas", evFam: "🧩 Familia de palabras", evStory: "📜 La historia", evLatin: "🏛️ Fuente latina",
        evRaw: "Texto original", evSent: "frases", evItems: "entradas", evAll: "Mostrar todo", evFold: "Contraer", evTapHint: "toca una rama" },
};
Object.keys(EV_I18N).forEach(l => { if (typeof I18N !== "undefined" && I18N[l]) Object.assign(I18N[l], EV_I18N[l]); });

/* ---------- parsing ---------- */
function evParse(story, zh) {
  const langs = zh ? EV_LANG_ZH : EV_LANG_EN;
  const reCog = new RegExp("(" + langs + ")\\s*(\\*?" + EV_WORD + ")(?:[(（]([^)）]{0,16})[)）])?", "g");
  const rePie = zh
    ? new RegExp("(?:原始印欧语|印欧语)(?:根)?\\s*(\\*" + EV_WORD + ")(?:[(（]([^)）]{0,26})[)）])?")
    : new RegExp("(?:Proto-Indo-European|PIE)\\s*(\\*" + EV_WORD + ")(?:\\s*\\(([^)]{0,26})\\))?");
  const pieM = story.match(rePie);
  const pie = pieM ? { word: pieM[1], gloss: pieM[2] || "" } : null;
  const seen = new Set(), cognates = [];
  for (const m of story.matchAll(reCog)) {
    const lang = m[1], word = m[2], gloss = (m[3] || "").trim();
    if (/印欧|Indo-European|^PIE$/.test(lang)) continue;          /* the PIE root has its own branch */
    const key = lang + "|" + word;
    if (seen.has(key)) continue;
    seen.add(key);
    cognates.push({ lang, word, gloss });
  }
  const sentences = evSplit(story);
  return { pie, cognates, sentences };
}
/* split into sentences, but never inside brackets — the stories put "!" inside
   parentheses constantly, and naive splitting shreds them */
function evSplit(story) {
  const out = [];
  let depth = 0, buf = "";
  for (const ch of story) {
    if ("(（[【《“".includes(ch)) depth++;
    else if (")）]】》”".includes(ch)) depth = Math.max(0, depth - 1);
    buf += ch;
    if (depth === 0 && "。!?！？".includes(ch)) { out.push(buf.trim()); buf = ""; }
  }
  if (buf.trim()) out.push(buf.trim());
  return out.filter(Boolean);
}

/* a sentence that is mostly an enumeration of "Word gloss" pairs becomes a chip grid,
   which is what the long German compound lists really are */
function evChipsOf(sentence, zh) {
  if (sentence.length < 60) return null;
  const re = zh
    ? /([A-Za-zÀ-ɏ][A-Za-zÀ-ɏ'’ -]{2,30}?)\s*[(（]?\s*([一-鿿][^,，;；:：(（)）]{0,13})/g
    : /([A-Za-zÀ-ɏ][A-Za-zÀ-ɏ'’ -]{2,30}?)\s*\(([^()]{2,26})\)/g;
  const chips = [], seen = new Set();
  let covered = 0;
  for (const m of sentence.matchAll(re)) {
    const w = m[1].trim();
    const g = m[2].trim().replace(/^[是即指就]/, "").replace(/[!！。,，]+$/, "").trim();
    covered += m[0].length;
    if (w.length < 2 || seen.has(w)) continue;
    seen.add(w);
    if (!g || /^[的也在与和把]/.test(g)) continue;   /* a fragment of the sentence, not a gloss */
    chips.push({ w, g });
  }
  return chips.length >= 8 && covered > sentence.length * 0.62 ? chips : null;
}

/* ---------- rendering ---------- */
function evEsc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function evShort(s) { return String(s).split(/[(（]/)[0].trim(); }
function evT(k) { return typeof t === "function" ? t(k) : k; }
let EV_SEQ = 0;

/* the little mind map: a root node with branches that open their section */
function evMapHtml(root, branches, id) {
  return `<div class="ev-map">
    ${root.form ? `<div class="ev-root"><b>${evEsc(root.form)}</b>${root.gist ? `<span>${evEsc(root.gist)}</span>` : ""}</div>` : ""}
    <div class="ev-branches">${branches.map(b =>
      `<button class="ev-br" type="button" data-ev="${id}" data-sec="${b.sec}"><i>${b.icon}</i>${evEsc(b.label)}${b.n ? `<em>${b.n}</em>` : ""}</button>`).join("")}</div>
  </div>`;
}
/* one collapsible section */
function evSec(id, sec, title, body, open) {
  return `<details class="ev-sec" data-ev="${id}" data-sec="${sec}"${open ? " open" : ""}><summary>${title}</summary><div class="ev-body">${body}</div></details>`;
}
/* story → mind map + layered sections. opts: {rootForm, rootGist, family:[{w,g}], latin:{word,note}, famLabel} */
function evBlockHtml(story, opts) {
  opts = opts || {};
  const zh = typeof state !== "undefined" && state.lang === "zh";
  const id = "ev" + (++EV_SEQ);
  const p = story ? evParse(story, zh) : { pie: null, cognates: [], sentences: [] };
  const fam = opts.family || [];
  const branches = [], secs = [];

  if (p.pie) {
    branches.push({ sec: "pie", icon: "🌍", label: p.pie.word });
    secs.push(evSec(id, "pie", `${evT("evPie")} <span class="ev-n">${evEsc(p.pie.word)}</span>`,
      `<div class="ev-pie"><b>${evEsc(p.pie.word)}</b>${p.pie.gloss ? `<span>${evEsc(p.pie.gloss)}</span>` : ""}</div>`, false));
  }
  if (p.cognates.length) {
    branches.push({ sec: "cog", icon: "", label: evT("evCog"), n: p.cognates.length });
    secs.push(evSec(id, "cog", `${evT("evCog")} <span class="ev-n">${p.cognates.length}</span>`,
      `<div class="ev-chips">${p.cognates.map(c =>
        `<span class="ev-chip"><i>${evEsc(c.lang)}</i> <b>${evEsc(c.word)}</b>${c.gloss ? `<em>${evEsc(c.gloss)}</em>` : ""}</span>`).join("")}</div>`, p.cognates.length <= 10));
  }
  if (fam.length) {
    branches.push({ sec: "fam", icon: "", label: evT("evFam"), n: fam.length });
    secs.push(evSec(id, "fam", `${opts.famLabel || evT("evFam")} <span class="ev-n">${fam.length}</span>`,
      `<table class="rx-tbl">${fam.map(f => `<tr><td>${f.w}</td><td>${evEsc(f.g)}</td></tr>`).join("")}</table>`, false));
  }
  if (opts.latin) {
    branches.push({ sec: "la", icon: "🏛️", label: opts.latin.word });
    secs.push(evSec(id, "la", `${opts.latinLabel || evT("evLatin")} <span class="ev-n">${evEsc(opts.latin.word)}</span>`,
      `${opts.latin.lead ? `<div class="ev-lead">${opts.latin.lead}</div>` : ""}<div class="ev-latin"><b>${evEsc(opts.latin.word)}</b></div>${opts.latin.note ? `<div class="ev-note">${opts.latin.note}</div>` : ""}`, false));
  }
  if (p.sentences.length) {
    const body = p.sentences.map(s => {
      const chips = evChipsOf(s, zh);
      if (chips) return `<div class="ev-chips ev-words">${chips.map(c => `<span class="ev-chip"><b>${evEsc(c.w)}</b><em>${evEsc(c.g)}</em></span>`).join("")}</div>`
        + `<details class="ev-raw"><summary>${evT("evRaw")}</summary><p class="ev-p">${s}</p></details>`;
      return `<p class="ev-p">${s}</p>`;
    }).join("");
    branches.push({ sec: "story", icon: "", label: evT("evStory"), n: p.sentences.length });
    secs.push(evSec(id, "story", `${evT("evStory")} <span class="ev-n">${p.sentences.length} ${evT("evSent")}</span>`, body, !branches.length));
  }
  (opts.extra || []).forEach(x => {
    if (!x || !x.html) return;
    branches.push({ sec: x.sec, icon: x.icon || "", label: evShort(x.label), n: x.n });
    secs.push(evSec(id, x.sec, `${x.label}${x.n ? ` <span class="ev-n">${x.n}</span>` : ""}`, x.html, false));
  });
  if (!branches.length) return story ? `<div class="etym">${story}</div>` : "";
  secs[0] = secs[0].replace('<details class="ev-sec"', '<details class="ev-sec" open');   /* first branch starts open */
  const rootForm = opts.rootForm || (p.pie ? p.pie.word : "");
  return `<div class="ev" id="${id}">${evMapHtml({ form: rootForm, gist: opts.rootGist || "" }, branches, id)}${secs.join("")}</div>`;
}

/* branch buttons open their section */
document.addEventListener("click", e => {
  const b = e.target.closest && e.target.closest(".ev-br");
  if (!b) return;
  const box = document.getElementById(b.dataset.ev);
  if (!box) return;
  const d = box.querySelector(`details.ev-sec[data-sec="${b.dataset.sec}"]`);
  if (!d) return;
  box.querySelectorAll(".ev-br").forEach(x => x.classList.remove("on"));
  d.open = !d.open;
  if (d.open) { b.classList.add("on"); d.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
});

(function evCss() {
  const css = document.createElement("style");
  css.textContent = `
  .ev { margin-top: 6px; }
  .ev-map { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin: 4px 0 10px; }
  .ev-root { background: var(--panel2); border: 2px solid var(--gold); border-radius: 14px; padding: 7px 12px; color: var(--accent); font-style: italic; white-space: nowrap; }
  .ev-root span { color: var(--text-dim); font-style: normal; font-size: .85em; margin-left: 6px; }
  .ev-branches { display: flex; flex-wrap: wrap; gap: 6px; position: relative; padding-left: 14px; }
  .ev-map > .ev-branches:first-child { padding-left: 0; }
  .ev-map > .ev-branches:first-child::before { display: none; }
  .ev-branches::before { content: ""; position: absolute; left: 0; top: 50%; width: 12px; height: 2px; background: var(--gold-dim); }
  .ev-br { background: var(--panel); border: 1px solid var(--gold-dim); border-radius: 20px; padding: 5px 11px; color: var(--text); font-family: inherit; font-size: .88em; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; line-height: 1.3; }
  .ev-br i { font-style: normal; }
  .ev-br em { font-style: normal; color: var(--text-dim); font-size: .85em; }
  .ev-br:hover, .ev-br.on { border-color: var(--gold); background: var(--panel2); }
  .ev-sec { border-left: 2px solid var(--gold-dim); margin: 0 0 6px 6px; padding-left: 10px; }
  .ev-sec > summary { cursor: pointer; color: var(--gold); font-size: .88em; padding: 3px 0; list-style: none; }
  .ev-sec > summary::-webkit-details-marker { display: none; }
  .ev-sec > summary::before { content: "▸ "; color: var(--gold-dim); }
  .ev-sec[open] > summary::before { content: "▾ "; }
  .ev-sec .ev-n { color: var(--text-dim); font-size: .9em; }
  .ev-body { padding: 2px 0 6px; }
  .ev-chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .ev-chip { background: rgba(232,182,76,.07); border: 1px solid var(--gold-dim); border-radius: 10px; padding: 4px 9px; font-size: .9em; line-height: 1.4; }
  .ev-chip i { font-style: normal; color: var(--text-dim); font-size: .82em; margin-right: 3px; }
  .ev-chip b { color: var(--accent); font-weight: 600; }
  .ev-chip em { font-style: normal; color: var(--text-dim); margin-left: 5px; font-size: .88em; }
  .ev-words .ev-chip b { color: var(--text); }
  .ev-pie { font-size: 1.15em; color: var(--accent); }
  .ev-pie span { color: var(--text-dim); font-size: .8em; margin-left: 8px; }
  .ev-p { margin: 0 0 7px; line-height: 1.75; font-size: .95em; }
  .ev-p:last-child { margin-bottom: 0; }
  .ev-raw { margin: 4px 0 8px; }
  .ev-raw > summary { cursor: pointer; color: var(--text-dim); font-size: .82em; }
  .ev-latin { font-size: 1.1em; color: var(--accent); font-style: italic; }
  .ev-lead, .ev-note { color: var(--text-dim); font-size: .9em; line-height: 1.7; margin-top: 4px; }
  @media (max-width: 480px) {
    .ev-branches { padding-left: 0; }
    .ev-branches::before { display: none; }
    .ev-map { gap: 6px; }
  }`;
  document.head.appendChild(css);
})();
