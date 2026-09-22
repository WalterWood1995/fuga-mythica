/* =====================================================
   FUGA MYTHICA — study-language switch for the MAP adventure.
   On the title screen the player chooses (1) the page language and
   (2) the language to learn. Every study language plays the same map;
   only the words change:
     la → the original Latin words and notes
     de/fr/it/es → the same 400 concepts in that language (tl.js), with the
                   answer card built from that language's root pack:
                   🌱 root + its story → 🔗 same-root family → 🏛️ Latin source.
   Map progress (chapter, level, scores, words, weak) is kept separately per
   study language: switching swaps the five fields in and out of p.prog.
   Loaded after the main inline script, tl.js and radix.js.
   ===================================================== */
const TGT_LANGS = ["la", "de", "fr", "it", "es"];
const TGT_FIELDS = ["chapter", "level", "scores", "words", "weak"];
const WORDS_LA = {};
Object.keys(WORDS).forEach(k => { WORDS_LA[k] = WORDS[k][0]; });
let TARGET = "la";

const TGT_I18N = {
  zh: { tgUi: "页面语言", tgLearn: "我要学", tgAnswerLa: "这个{L}词是什么意思?", tgAnswerM: "它的{L}是哪个?", tgFam: "🔗 同根词族(词根 + 词缀)",
        tgFromLa: "🏛️ 拉丁语源头", tgCousinLa: "🏛️ 拉丁语对应词", tgFromLaNote: "它从拉丁语的这个词演变而来:", tgCousinNote: "德语是日耳曼语,很多词与拉丁语是远亲,或者是借来的。对应的拉丁词:",
        tgNoRoot: "这个词在词根库里还没有拆分,先记住它的拉丁源头。", tgStudying: "正在学习", tgMore: "展开全文", tgLess: "收起" },
  en: { tgUi: "Page language", tgLearn: "I want to learn", tgAnswerLa: "What does this {L} word mean?", tgAnswerM: "Which is the {L} word for it?", tgFam: "🔗 Same-root family (root + affixes)",
        tgFromLa: "🏛️ Latin source", tgCousinLa: "🏛️ Latin counterpart", tgFromLaNote: "It grew out of this Latin word:", tgCousinNote: "German is a Germanic language: many words are distant cousins of Latin, or borrowed from it. The Latin counterpart:",
        tgNoRoot: "This word is not yet broken into roots — start from its Latin source.", tgStudying: "Studying", tgMore: "Read it all", tgLess: "Collapse" },
  de: { tgUi: "Seitensprache", tgLearn: "Ich lerne", tgAnswerLa: "Was bedeutet dieses Wort ({L})?", tgAnswerM: "Wie heißt es auf {L}?", tgFam: "🔗 Wortfamilie (Wurzel + Affixe)",
        tgFromLa: "🏛️ Lateinische Quelle", tgCousinLa: "🏛️ Lateinisches Gegenstück", tgFromLaNote: "Es entstand aus diesem lateinischen Wort:", tgCousinNote: "Deutsch ist germanisch: viele Wörter sind entfernte Verwandte des Lateinischen oder entlehnt. Das lateinische Gegenstück:",
        tgNoRoot: "Dieses Wort ist noch nicht in Wurzeln zerlegt.", tgStudying: "Du lernst", tgMore: "Ganz lesen", tgLess: "Einklappen" },
  fr: { tgUi: "Langue de la page", tgLearn: "J'apprends", tgAnswerLa: "Que signifie ce mot ({L}) ?", tgAnswerM: "Quel est le mot en {L} ?", tgFam: "🔗 Famille de mots (racine + affixes)",
        tgFromLa: "🏛️ Source latine", tgCousinLa: "🏛️ Équivalent latin", tgFromLaNote: "Il vient de ce mot latin :", tgCousinNote: "L'allemand est germanique : beaucoup de mots sont des cousins lointains du latin, ou empruntés. L'équivalent latin :",
        tgNoRoot: "Ce mot n'est pas encore décomposé en racines.", tgStudying: "Vous apprenez", tgMore: "Tout lire", tgLess: "Réduire" },
  es: { tgUi: "Idioma de la página", tgLearn: "Quiero aprender", tgAnswerLa: "¿Qué significa esta palabra ({L})?", tgAnswerM: "¿Cuál es la palabra en {L}?", tgFam: "🔗 Familia de palabras (raíz + afijos)",
        tgFromLa: "🏛️ Fuente latina", tgCousinLa: "🏛️ Equivalente latino", tgFromLaNote: "Viene de esta palabra latina:", tgCousinNote: "El alemán es germánico: muchas palabras son primas lejanas del latín, o préstamos. El equivalente latino:",
        tgNoRoot: "Esta palabra aún no está descompuesta en raíces.", tgStudying: "Aprendes", tgMore: "Leer todo", tgLess: "Contraer" },
};
Object.keys(TGT_I18N).forEach(l => { if (I18N[l]) Object.assign(I18N[l], TGT_I18N[l]); });

function tgName(l) { if (l === "la" && typeof buildLatinPack === "function") buildLatinPack(); return VOCAB[l] ? L(VOCAB[l].name) : l; }
function tgFlag(l) { if (l === "la" && typeof buildLatinPack === "function") buildLatinPack(); return VOCAB[l] ? VOCAB[l].flag : ""; }

/* quiz prompts name the study language instead of "Latin" */
const _tgT = t;
t = function (k) {
  if (TARGET !== "la" && (k === "q_la2m" || k === "q_m2la")) return _tgT(k === "q_la2m" ? "tgAnswerLa" : "tgAnswerM").replace("{L}", tgName(TARGET));
  if (TARGET !== "la" && k === "famLabel") return _tgT("tgFam");
  return _tgT(k);
};

/* ---------- switching ---------- */
function applyTarget(T) {
  TARGET = TGT_LANGS.includes(T) ? T : "la";
  Object.keys(WORDS).forEach(k => {
    WORDS[k][0] = TARGET === "la" ? WORDS_LA[k] : ((TL[TARGET] && TL[TARGET][k]) || WORDS_LA[k]);
  });
  document.documentElement.setAttribute("data-target", TARGET);
  tgRenderChoosers();
}
/* move the current player's map progress to the chosen language's slot */
function tgSwapProgress(p, T) {
  const from = p.tgt || "la";
  if (from === T) return;
  p.prog = p.prog || {};
  const out = {}; TGT_FIELDS.forEach(f => out[f] = p[f]); p.prog[from] = out;
  const fresh = newProfile(), inn = p.prog[T] || {};
  TGT_FIELDS.forEach(f => p[f] = inn[f] !== undefined ? inn[f] : fresh[f]);
  p.tgt = T;
}
function setTarget(T) {
  state.target = T;
  if (state.player && state.players[state.player]) tgSwapProgress(P(), T);
  applyTarget(T); save();
}
function tgOnLogin() { setTarget(state.target || "la"); }

/* ---------- answer card for modern study languages ---------- */
const tgStrip = s => s.toLowerCase().replace(/^(der|die|das|le|la|les|il|lo|gli|el|los|las)\s+/, "").replace(/^l'/, "").trim();
function tgLookup(T, key) {
  const pack = curPack(T);
  if (!pack._tgIdx) { pack._tgIdx = {}; pack.words.forEach((w, i) => { const s = tgStrip(w[0]); if (!(s in pack._tgIdx)) pack._tgIdx[s] = i; }); }
  const word = TL[T] && TL[T][key];
  const i = word ? pack._tgIdx[tgStrip(word)] : undefined;
  if (i === undefined) return null;
  const w = pack.words[i], r = w[3] && pack.roots[w[3]];
  const realRoot = r && /^[-A-Za-zÀ-ɏ]/.test(r[0]);
  return { pack, i, id: realRoot ? w[3] : null, root: realRoot ? r : null };
}
function tgInfoHtml(key) {
  const zh = state.lang === "zh", T = TARGET, w = WORDS[key];
  let html = "";
  if (typeof WORD_ART !== "undefined" && WORD_ART[key]) {
    const cap = typeof WORD_ART_CAP !== "undefined" && WORD_ART_CAP[key] ? L(WORD_ART_CAP[key]) : "";
    html += `<div class="word-art-wrap"><img class="word-art" loading="lazy" referrerpolicy="no-referrer" src="${WORD_ART_URL(WORD_ART[key])}" onclick="this.classList.toggle('expanded')" alt="">${cap ? `<div class="word-art-cap">${cap}</div>` : ""}</div>`;
  }
  const hit = tgLookup(T, key);
  /* 1. 🌱 root and its story, in the study language's own root pack */
  html += `<div class="etym-label">${t("morphLabel")}</div>`;
  if (hit && hit.root) {
    html += `<div class="etym"><span class="latin" style="color:var(--accent);font-style:italic">${rxMark(w[0], hit.root[0])}</span> · 🌱 <i style="color:var(--accent)">${rxEsc(hit.root[0])}</i> = ${rxEsc(zh ? hit.root[1] : hit.root[2])}</div>`;
    const story = rootStory(T, hit.id);
    if (story) html += `<div class="etym rx-story" style="margin-top:4px">${story}</div><div style="text-align:center"><span class="backlink tg-more">${t("tgMore")}</span></div>`;
    /* 2. 🔗 same-root family */
    const sibs = (hit.pack.byRoot[hit.id] || []).filter(i => i !== hit.i).slice(0, 8);
    if (sibs.length) html += `<div class="etym-label" style="margin-top:10px">${t("famLabel")}</div><table class="rx-tbl">` +
      sibs.map(i => { const x = hit.pack.words[i]; return `<tr><td>${rxMark(x[0], hit.root[0])}</td><td>${rxEsc(zh ? x[1] : x[2])}</td></tr>`; }).join("") + "</table>";
  } else {
    html += `<div class="etym" style="color:var(--text-dim)">${t("tgNoRoot")}</div>`;
  }
  /* 3. 🏛️ the Latin word behind it: ancestor for Romance, counterpart for German */
  const romance = T !== "de";
  html += `<div class="etym-label" style="margin-top:10px">${t(romance ? "tgFromLa" : "tgCousinLa")}</div>
    <div class="etym">${t(romance ? "tgFromLaNote" : "tgCousinNote")} <span class="latin" style="color:var(--accent);font-style:italic">${WORDS_LA[key]}</span></div>
    <div class="etym" style="margin-top:4px">${etymOf(key, zh)}</div>`;
  return html;
}
const _tgInfo = wordInfoHtml;
wordInfoHtml = function (key) { return TARGET === "la" ? _tgInfo(key) : tgInfoHtml(key); };
document.addEventListener("click", e => {
  if (!e.target.classList || !e.target.classList.contains("tg-more")) return;
  const box = e.target.parentNode.previousElementSibling;
  const open = box.classList.toggle("open"); e.target.textContent = t(open ? "tgLess" : "tgMore");
});

/* map status shows the study language (called from renderMap) */
function tgMapPrefix() { return `${tgFlag(TARGET)} ${t("tgStudying")} ${tgName(TARGET)} · `; }

/* ---------- choosers: title screen + top bar ---------- */
(function tgInject() {
  const css = document.createElement("style");
  css.textContent = `
  .tg-box { margin: 18px auto 4px; max-width: 520px; }
  .tg-row { display: flex; align-items: center; justify-content: center; gap: 10px; flex-wrap: wrap; margin: 8px 0; }
  .tg-row > span { color: var(--text-dim); font-size: .95em; min-width: 5.5em; text-align: right; }
  .tg-row select { font-size: 1em; padding: 6px 10px; }
  #sel-target { margin-right: 4px; }
  .ans-card mark { background: none; color: var(--gold); font-weight: 700; border-bottom: 2px solid var(--gold-dim); }`;
  document.head.appendChild(css);

  const start = document.getElementById("btn-start");
  const box = document.createElement("div");
  box.className = "tg-box";
  box.innerHTML = `
    <div class="tg-row"><span data-t="tgUi"></span><select class="pill" id="tg-ui"></select></div>
    <div class="tg-row"><span data-t="tgLearn"></span><div class="cur-langs" id="tg-langs" style="margin:0"></div></div>`;
  start.parentNode.insertBefore(box, start);
  /* page-language select mirrors the top-bar one */
  const top = document.getElementById("sel-lang"), ui = document.getElementById("tg-ui");
  ui.innerHTML = top.innerHTML;
  ui.addEventListener("change", () => { top.value = ui.value; top.dispatchEvent(new Event("change")); });
  top.addEventListener("change", () => { ui.value = top.value; tgRenderChoosers(); });

  /* compact study-language select in the top bar */
  const sel = document.createElement("select");
  sel.className = "pill"; sel.id = "sel-target"; sel.title = "Study language";
  top.parentNode.insertBefore(sel, top.nextSibling);
  sel.addEventListener("change", () => tgChoose(sel.value));
})();
function tgChoose(T) {
  setTarget(T);
  const shown = document.querySelector(".screen.show");
  if (!shown) return;
  if (shown.id === "screen-map") renderMap();
  else if (shown.id === "screen-codex") renderCodex();
  else if (shown.id === "screen-chapter" && typeof viewChapter !== "undefined") openChapter(viewChapter);
  else if (shown.id === "screen-quiz") renderMap();          /* a half-played level belongs to the old language */
}
function tgRenderChoosers() {
  const box = document.getElementById("tg-langs"), sel = document.getElementById("sel-target");
  if (!box || !sel) return;
  box.innerHTML = ""; sel.innerHTML = "";
  TGT_LANGS.forEach(l => {
    const b = document.createElement("button");
    b.className = "cur-lang" + (l === TARGET ? " on" : "");
    b.textContent = tgFlag(l) + " " + tgName(l);
    b.addEventListener("click", () => tgChoose(l));
    box.appendChild(b);
    const o = document.createElement("option"); o.value = l; o.textContent = tgFlag(l) + " " + tgName(l);
    sel.appendChild(o);
  });
  sel.value = TARGET;
  const ui = document.getElementById("tg-ui"); if (ui) ui.value = state.lang;
}

/* ---------- boot ---------- */
if (state.player && state.players[state.player]) {
  const p = P();
  state.target = state.target || p.tgt || "la";
  tgSwapProgress(p, state.target);
}
applyTarget(state.target || "la");
applyI18n();
