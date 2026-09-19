/* =====================================================
   FUGA MYTHICA — RADICES: a root-by-root course for every language pack
   (Latin, German, French, Italian, Spanish, English). Same method as the
   Latin adventure: 🌱 root & its story → 🔗 the word family, root highlighted
   → practice. Progress is saved per player, per language, per root.
   Loaded after the main inline script; uses its globals (VOCAB, curPack,
   rootStory, P, save, t, L, state, showScreen, shuffle, toast, renderPlayers).
   ===================================================== */
const RX_LANGS = ["la", "de", "fr", "it", "es", "en"];
const RX_UNIT = 10, RX_MAXQ = 12, RX_PASS = 0.8;
const rx = { lang: "de", root: null, queue: [], i: 0, right: 0, wrongs: [] };

const RX_I18N = {
  zh: { rx: "词根", rxTitle: "词根课堂 · Radices", rxDesc: "挑一门语言,沿着词根一条条往下学:先读这个词根的来历,再看它生出的整个词族(词根部分会高亮),最后做一轮练习。答对八成,这个词根就点亮。",
    rxAsk: "我想学 ——", rxLatinAdv: "神话密室冒险", rxCourse: "词根课堂", rxRoots: "已点亮词根", rxWords: "已覆盖单词", rxUnit: "第 {n} 单元", rxStory: "📜 词根的来历", rxMore: "展开全文", rxLess: "收起",
    rxFamily: "🔗 词族 · 词根 + 词缀", rxStart: "开始练习", rxBack: "← 返回词根列表", rxQ1: "这个词是什么意思?", rxQ2: "哪个词表示:", rxDone: "本词根练习完成", rxLit: "🌱 词根已点亮!", rxRetry: "再练一次", rxNext: "下一个词根 →",
    rxNoStory: "这个词根的故事还在撰写中,先从词族入手。", rxSpeed: "⚡ 去速认里限时复习", rxNeed: "答对 80% 即可点亮", rxHome: "← 返回首页" },
  en: { rx: "Roots", rxTitle: "Root Course · Radices", rxDesc: "Pick a language and work down its roots one by one: read where the root comes from, see the whole word family it produced (root highlighted), then practise. Score 80% and the root lights up.",
    rxAsk: "I want to learn —", rxLatinAdv: "Myth escape adventure", rxCourse: "Root course", rxRoots: "Roots lit", rxWords: "Words covered", rxUnit: "Unit {n}", rxStory: "📜 Where the root comes from", rxMore: "Read it all", rxLess: "Collapse",
    rxFamily: "🔗 Word family · root + affixes", rxStart: "Start practice", rxBack: "← Back to the roots", rxQ1: "What does this word mean?", rxQ2: "Which word means:", rxDone: "Root practice complete", rxLit: "🌱 Root lit!", rxRetry: "Practise again", rxNext: "Next root →",
    rxNoStory: "This root's story is still being written — start from the family.", rxSpeed: "⚡ Timed review in Sprint", rxNeed: "80% lights the root", rxHome: "← Back to home" },
  de: { rx: "Wurzeln", rxTitle: "Wurzelkurs · Radices", rxDesc: "Wähle eine Sprache und lerne sie Wurzel für Wurzel: erst die Herkunft der Wurzel, dann die ganze Wortfamilie (Wurzel hervorgehoben), dann die Übung. Ab 80 % leuchtet die Wurzel.",
    rxAsk: "Ich möchte lernen —", rxLatinAdv: "Mythen-Escape-Abenteuer", rxCourse: "Wurzelkurs", rxRoots: "Wurzeln erhellt", rxWords: "Wörter abgedeckt", rxUnit: "Einheit {n}", rxStory: "📜 Woher die Wurzel kommt", rxMore: "Ganz lesen", rxLess: "Einklappen",
    rxFamily: "🔗 Wortfamilie · Wurzel + Affixe", rxStart: "Übung starten", rxBack: "← Zurück zu den Wurzeln", rxQ1: "Was bedeutet dieses Wort?", rxQ2: "Welches Wort bedeutet:", rxDone: "Übung abgeschlossen", rxLit: "🌱 Wurzel erhellt!", rxRetry: "Noch einmal", rxNext: "Nächste Wurzel →",
    rxNoStory: "Die Geschichte dieser Wurzel wird noch geschrieben.", rxSpeed: "⚡ Im Sprint auf Zeit wiederholen", rxNeed: "80 % erhellen die Wurzel", rxHome: "← Zur Startseite" },
  fr: { rx: "Racines", rxTitle: "Cours de racines · Radices", rxDesc: "Choisissez une langue et apprenez-la racine par racine : l'origine de la racine, puis toute la famille de mots (racine surlignée), puis l'exercice. À 80 %, la racine s'allume.",
    rxAsk: "Je veux apprendre —", rxLatinAdv: "Aventure mythologique", rxCourse: "Cours de racines", rxRoots: "Racines allumées", rxWords: "Mots couverts", rxUnit: "Unité {n}", rxStory: "📜 D'où vient la racine", rxMore: "Tout lire", rxLess: "Réduire",
    rxFamily: "🔗 Famille de mots · racine + affixes", rxStart: "Commencer l'exercice", rxBack: "← Retour aux racines", rxQ1: "Que signifie ce mot ?", rxQ2: "Quel mot signifie :", rxDone: "Exercice terminé", rxLit: "🌱 Racine allumée !", rxRetry: "Recommencer", rxNext: "Racine suivante →",
    rxNoStory: "L'histoire de cette racine est en cours de rédaction.", rxSpeed: "⚡ Révision chronométrée", rxNeed: "80 % pour allumer la racine", rxHome: "← Accueil" },
  es: { rx: "Raíces", rxTitle: "Curso de raíces · Radices", rxDesc: "Elige un idioma y apréndelo raíz por raíz: primero el origen de la raíz, luego toda la familia de palabras (raíz resaltada), luego la práctica. Con un 80 % la raíz se enciende.",
    rxAsk: "Quiero aprender —", rxLatinAdv: "Aventura mitológica", rxCourse: "Curso de raíces", rxRoots: "Raíces encendidas", rxWords: "Palabras cubiertas", rxUnit: "Unidad {n}", rxStory: "📜 De dónde viene la raíz", rxMore: "Leer todo", rxLess: "Contraer",
    rxFamily: "🔗 Familia de palabras · raíz + afijos", rxStart: "Empezar la práctica", rxBack: "← Volver a las raíces", rxQ1: "¿Qué significa esta palabra?", rxQ2: "¿Qué palabra significa:", rxDone: "Práctica completada", rxLit: "🌱 ¡Raíz encendida!", rxRetry: "Otra vez", rxNext: "Siguiente raíz →",
    rxNoStory: "La historia de esta raíz aún se está escribiendo.", rxSpeed: "⚡ Repaso cronometrado", rxNeed: "El 80 % enciende la raíz", rxHome: "← Inicio" },
};
Object.keys(RX_I18N).forEach(l => { if (I18N[l]) Object.assign(I18N[l], RX_I18N[l]); });

/* ---------- styles + screens ---------- */
(function rxInject() {
  const css = document.createElement("style");
  css.textContent = `
  .rx-ask { color: var(--text-dim); margin: 18px 0 8px; font-size: .95em; }
  .rx-unit { color: var(--gold); font-size: .9em; margin: 16px 0 6px; letter-spacing: .04em; }
  .rx-row { display: flex; align-items: center; gap: 10px; background: var(--panel); border: 1px solid var(--gold-dim); border-radius: 12px; padding: 10px 12px; margin-bottom: 6px; cursor: pointer; text-align: left; width: 100%; font-family: inherit; color: var(--text); font-size: .95em; }
  .rx-row:hover { border-color: var(--gold); }
  .rx-row.lit { border-color: var(--good); background: rgba(90,170,120,.10); }
  .rx-row .rx-form { color: var(--accent); font-style: italic; min-width: 6.5em; }
  .rx-row .rx-gist { flex: 1; line-height: 1.4; }
  .rx-row .rx-meta { color: var(--text-dim); font-size: .85em; white-space: nowrap; }
  .rx-head { text-align: center; margin: 12px 0 4px; }
  .rx-head .rx-big { font-size: 1.9em; color: var(--accent); font-style: italic; }
  .rx-head .rx-sub { color: var(--gold); margin-top: 4px; }
  .rx-story { max-height: 9.6em; overflow: hidden; position: relative; line-height: 1.75; }
  .rx-story.open { max-height: none; }
  .rx-story:not(.open)::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 3em; background: linear-gradient(transparent, var(--bg)); }
  .rx-tbl { width: 100%; border-collapse: collapse; margin-top: 6px; }
  .rx-tbl td { padding: 7px 8px; border-bottom: 1px solid rgba(232,182,76,.15); vertical-align: top; line-height: 1.45; }
  .rx-tbl td:first-child { white-space: nowrap; font-size: 1.05em; }
  .rx-tbl mark, .rx-word mark { background: none; color: var(--gold); font-weight: 700; border-bottom: 2px solid var(--gold-dim); }
  .rx-word { font-size: 1.7em; margin: 10px 0 14px; }
  .rx-opts { display: grid; gap: 8px; }
  .rx-opt { background: var(--panel2); border: 2px solid var(--gold-dim); border-radius: 12px; padding: 11px 12px; color: var(--text); font-family: inherit; font-size: 1em; cursor: pointer; line-height: 1.4; }
  .rx-opt.correct { border-color: var(--good); background: rgba(90,170,120,.18); }
  .rx-opt.wrong { border-color: var(--bad); background: rgba(200,80,80,.16); }
  .rx-lbl { color: var(--gold); font-size: .85em; margin: 14px 0 6px; }`;
  document.head.appendChild(css);

  const wrap = document.createElement("div");
  wrap.innerHTML = `
  <div class="screen" id="screen-radix">
    <h2 style="color:var(--gold);margin-top:10px">🌱 <span data-t="rxTitle"></span></h2>
    <p style="color:var(--text-dim);margin-top:6px;line-height:1.6" data-t="rxDesc"></p>
    <div class="cur-langs" id="rx-langs"></div>
    <div class="cur-stats" id="rx-stats"></div>
    <div class="cur-bar"><i id="rx-bar"></i></div>
    <div id="rx-list"></div>
    <div style="margin-top:14px;text-align:center"><span class="backlink" id="rx-home" data-t="rxHome"></span></div>
  </div>
  <div class="screen" id="screen-radix-lesson">
    <div id="rx-lesson"></div>
    <div style="margin-top:14px;text-align:center"><span class="backlink" id="rx-back" data-t="rxBack"></span></div>
  </div>`;
  const app = document.getElementById("app");
  while (wrap.firstElementChild) app.appendChild(wrap.firstElementChild);

  /* title-screen language chooser */
  const start = document.getElementById("btn-start");
  const ask = document.createElement("div");
  ask.innerHTML = `<div class="rx-ask" data-t="rxAsk"></div><div class="cur-langs" id="rx-title-langs" style="margin-top:0"></div>`;
  start.parentNode.insertBefore(ask, start.nextSibling);

  /* topbar pill */
  const pill = document.createElement("button");
  pill.className = "pill"; pill.id = "btn-radix"; pill.innerHTML = `🌱 <span data-t="rx"></span>`;
  const cursusBtn = document.getElementById("btn-cursus");
  cursusBtn.parentNode.insertBefore(pill, cursusBtn);
})();

/* ---------- data helpers ---------- */
function rxEsc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function rxGist(w) { return state.lang === "zh" ? w[1] : w[2]; }
/* teachable roots: a real morpheme (not a theme bucket) with a family of at least two words */
function rxRoots(lang) {
  const pack = curPack(lang);
  if (!pack._rx) {
    pack._rx = Object.keys(pack.roots)
      .filter(id => /^[-A-ɏ]/.test(pack.roots[id][0]) && (pack.byRoot[id] || []).length >= 2)
      .sort((a, b) => (pack.byRoot[b].length - pack.byRoot[a].length) || (pack.byRoot[a][0] - pack.byRoot[b][0]));
  }
  return pack._rx;
}
/* surface forms of a root entry: "spec- / spic- / spect-" → ["spect","spec","spic"] */
function rxForms(form) {
  return form.replace(/\([^)]*\)/g, " ").split(/[\/,·]/).map(s => s.replace(/[-\s.…]/g, "").toLowerCase())
    .filter(s => s.length >= 2).sort((a, b) => b.length - a.length);
}
const rxFold = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
function rxMark(word, form) {
  const forms = rxForms(form), low = word.toLowerCase(), fold = rxFold(word);
  for (const pass of [low, fold]) {
    if (pass.length !== word.length) continue;
    for (const f of forms) {
      const k = pass.indexOf(pass === fold ? rxFold(f) : f);
      if (k >= 0) { const n = (pass === fold ? rxFold(f) : f).length; return rxEsc(word.slice(0, k)) + "<mark>" + rxEsc(word.slice(k, k + n)) + "</mark>" + rxEsc(word.slice(k + n)); }
    }
  }
  return rxEsc(word);
}
function rxState() {
  const p = P();
  if (!p.radix) p.radix = { lang: rx.lang, done: {} };
  if (!p.radix.done[rx.lang]) p.radix.done[rx.lang] = {};
  return p.radix.done[rx.lang];
}
function rxLabel(k, n) { return t(k).replace("{n}", n); }

/* ---------- lobby ---------- */
function rxLangButtons(box, onPick, current) {
  box.innerHTML = "";
  RX_LANGS.forEach(l => {
    if (l === "la" && typeof buildLatinPack === "function") buildLatinPack();
    const p = VOCAB[l]; if (!p) return;
    const b = document.createElement("button");
    b.className = "cur-lang" + (l === current ? " on" : "");
    b.textContent = p.flag + " " + L(p.name);
    b.addEventListener("click", () => onPick(l));
    box.appendChild(b);
  });
}
function renderRadix(lang) {
  if (!state.player || !state.players[state.player]) { window.rxPending = lang || rx.lang; toast(t("cursusNoPlayer")); renderPlayers(); return; }
  window.rxPending = null;
  rx.lang = lang || (P().radix && P().radix.lang) || rx.lang;
  const st = rxState(); P().radix.lang = rx.lang; save();
  rxLangButtons($("#rx-langs"), l => renderRadix(l), rx.lang);
  const pack = curPack(rx.lang), ids = rxRoots(rx.lang);
  let lit = 0, words = 0, total = 0;
  ids.forEach(id => { const n = pack.byRoot[id].length; total += n; if (st[id] && st[id].lit) { lit++; words += n; } });
  $("#rx-stats").innerHTML = `
    <div class="cur-stat"><b>${lit} / ${ids.length}</b><span>${t("rxRoots")}</span></div>
    <div class="cur-stat"><b>${words} / ${total}</b><span>${t("rxWords")}</span></div>`;
  $("#rx-bar").style.width = (ids.length ? lit / ids.length * 100 : 0).toFixed(2) + "%";
  const out = [];
  ids.forEach((id, k) => {
    if (k % RX_UNIT === 0) out.push(`<div class="rx-unit">${rxLabel("rxUnit", k / RX_UNIT + 1)}</div>`);
    const r = pack.roots[id], s = st[id], has = !!rootStory(rx.lang, id);
    out.push(`<button class="rx-row${s && s.lit ? " lit" : ""}" data-id="${rxEsc(id)}"><span class="rx-form">${rxEsc(r[0])}</span><span class="rx-gist">${rxEsc(state.lang === "zh" ? r[1] : r[2])}</span><span class="rx-meta">${has ? "📜 " : ""}${pack.byRoot[id].length}${s ? " · " + (s.lit ? "✓ " : "") + Math.round(s.best * 100) + "%" : ""}</span></button>`);
  });
  $("#rx-list").innerHTML = out.join("");
  $("#rx-list").querySelectorAll(".rx-row").forEach(b => b.addEventListener("click", () => rxLesson(b.dataset.id)));
  showScreen("screen-radix");
}

/* ---------- lesson: 🌱 root → 📜 story → 🔗 family ---------- */
function rxLesson(id) {
  rx.root = id;
  const pack = curPack(rx.lang), r = pack.roots[id], fam = pack.byRoot[id].map(i => pack.words[i]);
  const story = rootStory(rx.lang, id);
  $("#rx-lesson").innerHTML = `
    <div class="rx-head"><div class="rx-big">${rxEsc(r[0])}</div><div class="rx-sub">🌱 ${rxEsc(state.lang === "zh" ? r[1] : r[2])} · ${pack.flag} ${rxEsc(L(pack.name))}</div></div>
    <div class="rx-lbl">${t("rxStory")}</div>
    ${story ? `<div class="etym rx-story" id="rx-story">${story}</div><div style="text-align:center;margin-top:4px"><span class="backlink" id="rx-more">${t("rxMore")}</span></div>` : `<div class="etym" style="color:var(--text-dim)">${t("rxNoStory")}</div>`}
    <div class="rx-lbl">${t("rxFamily")} (${fam.length})</div>
    <table class="rx-tbl">${fam.map(w => `<tr><td>${rxMark(w[0], r[0])}</td><td>${rxEsc(rxGist(w))}</td></tr>`).join("")}</table>
    <div style="text-align:center;margin-top:16px"><button class="big-btn" id="rx-go">${t("rxStart")}</button><div style="color:var(--text-dim);font-size:.85em;margin-top:6px">${t("rxNeed")}</div></div>`;
  const more = $("#rx-more");
  if (more) {
    const box = $("#rx-story");
    if (box.scrollHeight <= box.clientHeight + 4) { box.classList.add("open"); more.style.display = "none"; }
    more.addEventListener("click", () => { const open = box.classList.toggle("open"); more.textContent = t(open ? "rxLess" : "rxMore"); });
  }
  $("#rx-go").addEventListener("click", rxStartQuiz);
  showScreen("screen-radix-lesson");
  window.scrollTo(0, 0);
}

/* ---------- practice (untimed; alternates word→meaning and meaning→word) ---------- */
function rxStartQuiz() {
  const pack = curPack(rx.lang);
  Object.assign(rx, { queue: shuffle(pack.byRoot[rx.root].slice()).slice(0, RX_MAXQ), i: 0, right: 0, wrongs: [] });
  rxNextQ();
}
function rxDistractors(idx, sameRootFirst) {
  const pack = curPack(rx.lang), w = pack.words[idx], used = new Set([rxGist(w)]), usedW = new Set([w[0]]), out = [];
  const tryAdd = i => { const x = pack.words[i]; if (i === idx || used.has(rxGist(x)) || usedW.has(x[0])) return; used.add(rxGist(x)); usedW.add(x[0]); out.push(i); };
  if (sameRootFirst) shuffle(pack.byRoot[rx.root].slice()).slice(0, 2).forEach(tryAdd);
  const near = []; for (let d = 1; d < 60 && near.length < 40; d++) { if (idx - d >= 0) near.push(idx - d); if (idx + d < pack.words.length) near.push(idx + d); }
  shuffle(near).forEach(i => { if (out.length < 3) tryAdd(i); });
  let guard = 0; while (out.length < 3 && guard++ < 200) tryAdd(Math.floor(Math.random() * pack.words.length));
  return shuffle([idx, ...out.slice(0, 3)]);
}
function rxNextQ() {
  if (rx.i >= rx.queue.length) { rxFinish(); return; }
  const pack = curPack(rx.lang), r = pack.roots[rx.root], idx = rx.queue[rx.i], w = pack.words[idx];
  const rev = rx.i % 2 === 1;                       /* odd questions: meaning → word */
  const opts = rxDistractors(idx, rev);
  $("#rx-lesson").innerHTML = `
    <div style="display:flex;justify-content:space-between;color:var(--text-dim);font-size:.9em;margin-top:8px"><span>${rx.i + 1} / ${rx.queue.length}</span><span class="rx-form" style="color:var(--accent);font-style:italic">${rxEsc(r[0])}</span><span>✓ ${rx.right}</span></div>
    <div style="background:var(--panel);border:2px solid var(--chac);border-radius:var(--radius);padding:20px 16px;text-align:center;margin-top:10px">
      <div style="color:var(--text-dim);font-size:.9em">${t(rev ? "rxQ2" : "rxQ1")}</div>
      <div class="rx-word">${rev ? "<b>" + rxEsc(rxGist(w)) + "</b>" : rxMark(w[0], r[0])}</div>
      <div class="rx-opts" id="rx-opts"></div>
      <div id="rx-fb"></div>
    </div>`;
  const box = $("#rx-opts");
  opts.forEach(i => {
    const b = document.createElement("button");
    b.className = "rx-opt"; b.dataset.i = i;
    if (rev) b.innerHTML = rxMark(pack.words[i][0], pack.roots[pack.words[i][3]] ? pack.roots[pack.words[i][3]][0] : ""); else b.textContent = rxGist(pack.words[i]);
    b.addEventListener("click", () => rxAnswer(i));
    box.appendChild(b);
  });
  window.scrollTo(0, 0);
}
function rxAnswer(chosen) {
  const pack = curPack(rx.lang), r = pack.roots[rx.root], idx = rx.queue[rx.i], w = pack.words[idx], ok = chosen === idx;
  document.querySelectorAll(".rx-opt").forEach(b => { b.disabled = true; if (+b.dataset.i === idx) b.classList.add("correct"); else if (+b.dataset.i === chosen) b.classList.add("wrong"); });
  if (ok) rx.right++; else rx.wrongs.push(idx);
  rx.i++;
  $("#rx-fb").innerHTML = `<div class="ans-card" style="margin-top:12px">
      <div style="color:${ok ? "var(--good)" : "var(--bad)"};margin-bottom:6px">${ok ? t("rightMark") : t("wrongMark")}</div>
      <div class="ans-head"><span class="latin" style="color:var(--accent)">${rxMark(w[0], r[0])}</span> → <b>${rxEsc(rxGist(w))}</b></div>
      <div style="color:var(--text-dim);font-size:.9em;margin-top:6px">🌱 ${rxEsc(r[0])} = ${rxEsc(state.lang === "zh" ? r[1] : r[2])}</div>
      <div class="continue-wrap"><button class="continue-btn" id="rx-nextq">${t("nextQ")}</button></div></div>`;
  $("#rx-nextq").addEventListener("click", rxNextQ);
  $("#rx-nextq").focus();
}
function rxFinish() {
  const pack = curPack(rx.lang), r = pack.roots[rx.root], st = rxState();
  const score = rx.right / rx.queue.length, lit = score >= RX_PASS;
  const s = st[rx.root] = st[rx.root] || { best: 0, n: 0, lit: false };
  s.n++; s.best = Math.max(s.best, score); if (lit) s.lit = true; s.last = Date.now();
  save();
  const ids = rxRoots(rx.lang), k = ids.indexOf(rx.root), nextId = ids[k + 1];
  $("#rx-lesson").innerHTML = `
    <div class="rx-head"><div class="rx-big">${rxEsc(r[0])}</div><div class="rx-sub">${lit ? t("rxLit") : t("rxDone")}</div></div>
    <div class="cur-stats"><div class="cur-stat"><b>${rx.right} / ${rx.queue.length}</b><span>${Math.round(score * 100)}%</span></div></div>
    ${rx.wrongs.length ? `<div class="rx-lbl">${t("cursusWeakTitle")}</div><table class="rx-tbl">` + [...new Set(rx.wrongs)].map(i => `<tr><td>${rxMark(pack.words[i][0], r[0])}</td><td>${rxEsc(rxGist(pack.words[i]))}</td></tr>`).join("") + "</table>" : ""}
    <div class="continue-wrap" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px">
      ${nextId && lit ? `<button class="continue-btn" id="rx-next">${t("rxNext")}</button>` : ""}
      <button class="continue-btn" id="rx-retry" style="background:var(--panel2);color:var(--text)">${t("rxRetry")}</button>
    </div>`;
  if ($("#rx-next")) $("#rx-next").addEventListener("click", () => rxLesson(nextId));
  $("#rx-retry").addEventListener("click", () => rxLesson(rx.root));
}

/* ---------- wiring ---------- */
function rxRenderTitleLangs() {
  rxLangButtons($("#rx-title-langs"), l => {
    if (l === "la") { $("#btn-start").click(); return; }     /* Latin keeps its myth adventure; the root course is one tap away in the top bar */
    renderRadix(l);
  }, null);
  const la = $("#rx-title-langs").firstElementChild;
  if (la) la.textContent += " · " + t("rxLatinAdv");
}
$("#btn-radix").addEventListener("click", () => renderRadix());
$("#rx-home").addEventListener("click", () => showScreen("screen-title"));
$("#rx-back").addEventListener("click", () => renderRadix());
$("#sel-lang").addEventListener("change", () => {
  rxRenderTitleLangs();
  const shown = document.querySelector(".screen.show");
  if (shown && shown.id === "screen-radix") renderRadix();
  else if (shown && shown.id === "screen-radix-lesson" && rx.root && $("#rx-go")) rxLesson(rx.root);
});
if (typeof applyI18n === "function") applyI18n();
rxRenderTitleLangs();
