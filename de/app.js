/* =====================================================
   德语单词词根词缀速记 — app logic
   Roots come from the shared German pack (VOCAB.de) and the German root
   stories (ROOT_STORIES.de, with Latin loans reaching shared stories through
   deMap). Pronunciation: approximate IPA from ipa_de.js + real speech from
   the browser's German voice.
   ===================================================== */
const SAVE = "de-wurzeln-v1";
const UNIT = 10, PASS = 0.8, MAXQ = 12;
const P = VOCAB.de;
let save = { done: {}, best: {}, seen: {}, weak: {}, lang: "zh" };
let quiz = null, drill = null;

/* ---------- data ---------- */
(function index() {
  const seen = new Set(); const words = [];
  P.words.forEach(w => { if (!seen.has(w[0])) { seen.add(w[0]); words.push(w); } });
  P.words = words;
  P.byRoot = {}; P.byWord = {};
  words.forEach((w, i) => { P.byWord[w[0]] = i; if (w[3]) (P.byRoot[w[3]] = P.byRoot[w[3]] || []).push(i); });
  /* teachable roots: a real stem (not a theme bucket) with at least two words, biggest family first */
  P.list = Object.keys(P.roots)
    .filter(id => /^[-A-Za-zÀ-ɏ]/.test(P.roots[id][0]) && (P.byRoot[id] || []).length >= 2)
    .sort((a, b) => P.byRoot[b].length - P.byRoot[a].length);
})();
const zh = () => state.lang === "zh";
const gist = w => (zh() ? w[1] : w[2]);
const rootGist = r => (zh() ? r[1] : r[2]);
const story = id => {
  const e = ROOT_STORIES.de[id] || (ROOT_STORIES.deMap[id] && ROOT_STORIES.shared[ROOT_STORIES.deMap[id]])
    || (ROOT_STORIES.shared[id]) || (ROOT_STORIES.alias[id] && ROOT_STORIES.shared[ROOT_STORIES.alias[id]]);
  return e ? (zh() ? e[0] : e[1]) : "";
};
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const $ = s => document.querySelector(s);
function load() { try { const s = JSON.parse(localStorage.getItem(SAVE)); if (s) Object.assign(save, s); } catch (e) {} state.lang = save.lang || "zh"; }
function store() { try { localStorage.setItem(SAVE, JSON.stringify(save)); } catch (e) {} }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }

/* ---------- pronunciation ---------- */
let VOICE = null;
function pickVoice() {
  if (!("speechSynthesis" in window)) return null;
  const vs = speechSynthesis.getVoices();
  VOICE = vs.find(v => /^de([-_]|$)/i.test(v.lang)) || vs.find(v => /German|Deutsch/i.test(v.name)) || null;
  return VOICE;
}
if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function speak(text) {
  if (!("speechSynthesis" in window)) { alert("这台设备的浏览器不支持朗读。"); return; }
  const u = new SpeechSynthesisUtterance(String(text).replace(/^(der|die|das)\s+/, "$1 "));
  if (!VOICE) pickVoice();
  if (VOICE) u.voice = VOICE;
  u.lang = "de-DE"; u.rate = .9;
  speechSynthesis.cancel(); speechSynthesis.speak(u);
}
const ipa = w => (typeof ipaDe === "function" ? ipaDe(w) : "");
function wordCell(word, form) {
  return `${form ? mark(word, form) : esc(word)}<span class="ipa">[${esc(ipa(word))}]</span>`;
}
function speakBtn(word) { return `<button class="speak" data-say="${esc(word)}" title="朗读">🔊</button>`; }
document.addEventListener("click", e => {
  const b = e.target.closest && e.target.closest("[data-say]");
  if (b) { speak(b.dataset.say); return; }
  const g = e.target.closest && e.target.closest("[data-go]");
  if (g) go(g.dataset.go);
});

/* ---------- root highlighting (same idea as the main app) ---------- */
function forms(form) {
  return String(form).replace(/\([^)]*\)/g, " ").split(/[\/,·]/)
    .map(s => s.replace(/[-\s.…]/g, "").toLowerCase()).filter(s => s.length >= 2).sort((a, b) => b.length - a.length);
}
const fold = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
function mark(word, form) {
  const fs = forms(form), low = word.toLowerCase(), f2 = fold(word);
  for (const pass of [low, f2]) {
    if (pass.length !== word.length) continue;
    for (const f of fs) {
      const needle = pass === f2 ? fold(f) : f;
      const k = pass.indexOf(needle);
      if (k >= 0) return esc(word.slice(0, k)) + "<mark>" + esc(word.slice(k, k + needle.length)) + "</mark>" + esc(word.slice(k + needle.length));
    }
  }
  return esc(word);
}

/* ---------- screens ---------- */
function show(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("show"));
  $("#s-" + name).classList.add("show");
  document.querySelectorAll("[data-go]").forEach(b => b.classList.toggle("on", b.dataset.go === name));
  window.scrollTo(0, 0);
}
function go(name) {
  show(name);
  if (name === "home") renderHome();
  if (name === "list") renderList();
  if (name === "drill") renderDrill();
  if (name === "search") renderSearch();
  if (name === "chain") renderChain();
  if (name === "shop") renderShop();
}
function stats() {
  let lit = 0, words = 0, total = 0;
  P.list.forEach(id => { const n = P.byRoot[id].length; total += n; if (save.done[id]) { lit++; words += n; } });
  return { lit, roots: P.list.length, words, total };
}
function renderHome() {
  const s = stats();
  $("#home-stats").innerHTML = `
    <div class="stat"><b>${s.lit} / ${s.roots}</b><span>已点亮词根</span></div>
    <div class="stat"><b>${s.words}</b><span>已覆盖单词</span></div>
    <div class="stat"><b>${s.total}</b><span>词根课覆盖词</span></div>
    <div class="stat"><b>${Object.keys(save.weak).length}</b><span>待复习</span></div>`;
  $("#home-bar").style.width = (s.roots ? s.lit / s.roots * 100 : 0).toFixed(1) + "%";
  const next = P.list.find(id => !save.done[id]);
  $("#home-next").innerHTML = next
    ? `<h2 style="margin-top:0">下一个词根</h2><div class="row" data-root="${esc(next)}"><span class="rf">${esc(P.roots[next][0])}</span><span class="rg">${esc(rootGist(P.roots[next]))}</span><span class="rn">${P.byRoot[next].length} 词</span></div>`
    : `<h2 style="margin-top:0">全部点亮</h2><p class="hint">所有词根都练过了,去「速认」保持手感。</p>`;
  $("#btn-continue").onclick = () => { const id = P.list.find(x => !save.done[x]) || P.list[0]; openRoot(id); };
}
function renderList() {
  const s = stats();
  $("#list-lead").textContent = `${s.roots} 个词根,按词族大小排序;每 ${UNIT} 个一单元。点亮 ${s.lit} 个。`;
  const out = [];
  P.list.forEach((id, i) => {
    if (i % UNIT === 0) out.push(`<div class="unit-h">第 ${i / UNIT + 1} 单元</div>`);
    const r = P.roots[id], best = save.best[id];
    out.push(`<button class="row${save.done[id] ? " done" : ""}" data-root="${esc(id)}">
      <span class="rf">${esc(r[0])}</span><span class="rg">${esc(rootGist(r))}</span>
      <span class="rn">${story(id) ? "📜 " : ""}${P.byRoot[id].length} 词${best ? " · " + Math.round(best * 100) + "%" : ""}</span></button>`);
  });
  $("#list-box").innerHTML = out.join("");
}
document.addEventListener("click", e => {
  const b = e.target.closest && e.target.closest("[data-root]");
  if (b) openRoot(b.dataset.root);
});

/* ---------- one root ---------- */
function openRoot(id) {
  const r = P.roots[id], fam = P.byRoot[id].map(i => P.words[i]);
  const st = story(id);
  const famRows = fam.map(w => ({ w: `${mark(w[0], r[0])} ${speakBtn(w[0])}<span class="ipa">[${esc(ipa(w[0]))}]</span>`, g: gist(w) }));
  $("#root-box").innerHTML = `
    <div class="word-head">
      <div class="w">${esc(r[0])}</div>
      <div class="hint">🌱 ${esc(rootGist(r))} · ${fam.length} 个同根词</div>
    </div>
    ${typeof evBlockHtml === "function"
      ? evBlockHtml(st, { rootForm: r[0], rootGist: rootGist(r), family: famRows, famLabel: "🧩 同根词族" })
      : `<div class="etym">${st}</div>`}
    ${typeof stemAffixHtml === "function" ? stemAffixHtml(id) : ""}
    <div style="text-align:center;margin:18px 0"><button class="big-btn" id="btn-quiz">开始练习</button>
      <div class="hint" style="margin-top:6px">答对 80% 点亮这个词根</div></div>
    <div style="text-align:center"><button class="ghost" data-go="list">← 返回词根表</button></div>`;
  $("#btn-quiz").onclick = () => startQuiz(id);
  show("root");
}

/* ---------- practice ---------- */
function distractors(idx, rev) {
  const w = P.words[idx], used = new Set([gist(w)]), usedW = new Set([w[0]]), out = [];
  const add = i => { const x = P.words[i]; if (i === idx || used.has(gist(x)) || usedW.has(x[0])) return; used.add(gist(x)); usedW.add(x[0]); out.push(i); };
  if (rev && w[3] && P.byRoot[w[3]]) shuffle(P.byRoot[w[3]]).slice(0, 2).forEach(add);
  const near = []; for (let d = 1; d < 60 && near.length < 40; d++) { if (idx - d >= 0) near.push(idx - d); if (idx + d < P.words.length) near.push(idx + d); }
  shuffle(near).forEach(i => { if (out.length < 3) add(i); });
  let guard = 0; while (out.length < 3 && guard++ < 200) add(Math.floor(Math.random() * P.words.length));
  return shuffle([idx, ...out.slice(0, 3)]);
}
function startQuiz(id) {
  quiz = { id, queue: shuffle(P.byRoot[id]).slice(0, MAXQ), i: 0, right: 0, wrong: [] };
  nextQ(); show("quiz");
}
function nextQ() {
  if (quiz.i >= quiz.queue.length) return finishQuiz();
  const idx = quiz.queue[quiz.i], w = P.words[idx], r = P.roots[quiz.id];
  const rev = quiz.i % 2 === 1;                       /* 单数题:词→义;偶数题:义→词 */
  const opts = distractors(idx, rev);
  $("#quiz-box").innerHTML = `
    <div class="hud"><span>${quiz.i + 1} / ${quiz.queue.length}</span><span style="color:var(--accent);font-style:italic">${esc(r[0])}</span><span>✓ ${quiz.right}</span></div>
    <div class="card" style="text-align:center">
      <div class="hint">${rev ? "哪个词表示:" : "这个词是什么意思?"}</div>
      <div class="word-head">
        <div class="w">${rev ? esc(gist(w)) : mark(w[0], r[0])}</div>
        ${rev ? "" : `<div class="ipa">[${esc(ipa(w[0]))}] ${speakBtn(w[0])}</div>`}
      </div>
      <div class="opts" id="opts"></div>
      <div id="fb"></div>
    </div>`;
  const box = $("#opts");
  opts.forEach(i => {
    const b = document.createElement("button");
    b.className = "opt"; b.dataset.i = i;
    b.innerHTML = rev ? `${mark(P.words[i][0], P.roots[P.words[i][3]] ? P.roots[P.words[i][3]][0] : "")} <span class="ipa">[${esc(ipa(P.words[i][0]))}]</span>` : esc(gist(P.words[i]));
    b.onclick = () => answer(i);
    box.appendChild(b);
  });
}
function answer(chosen) {
  const idx = quiz.queue[quiz.i], w = P.words[idx], r = P.roots[quiz.id], ok = chosen === idx;
  document.querySelectorAll(".opt").forEach(b => { b.disabled = true; if (+b.dataset.i === idx) b.classList.add("correct"); else if (+b.dataset.i === chosen) b.classList.add("wrong"); });
  if (ok) { quiz.right++; delete save.weak[w[0]]; } else { quiz.wrong.push(idx); save.weak[w[0]] = (save.weak[w[0]] || 0) + 1; }
  save.seen[w[0]] = 1; store();
  quiz.i++;
  $("#fb").innerHTML = `<div class="card" style="margin-top:12px;text-align:left">
      <div style="color:${ok ? "var(--good)" : "var(--bad)"}">${ok ? "✓ 对了" : "✗ 再记一次"}</div>
      <div style="font-size:1.15em;margin:6px 0">${mark(w[0], r[0])} <span class="ipa">[${esc(ipa(w[0]))}]</span> ${speakBtn(w[0])} — <b>${esc(gist(w))}</b></div>
      <div class="hint">🌱 ${esc(r[0])} = ${esc(rootGist(r))}</div>
      <div style="text-align:center;margin-top:10px"><button class="big-btn" id="btn-next">下一题 →</button></div>
    </div>`;
  $("#btn-next").onclick = nextQ;
  $("#btn-next").focus();
}
function finishQuiz() {
  const sc = quiz.right / quiz.queue.length, id = quiz.id, r = P.roots[id];
  save.best[id] = Math.max(save.best[id] || 0, sc);
  if (sc >= PASS) save.done[id] = 1;
  store();
  const nextId = P.list[P.list.indexOf(id) + 1];
  $("#quiz-box").innerHTML = `
    <div class="word-head"><div class="w">${esc(r[0])}</div>
      <div class="hint">${sc >= PASS ? "🌱 词根已点亮!" : "再练一次就能点亮"}</div></div>
    <div class="stats"><div class="stat"><b>${quiz.right} / ${quiz.queue.length}</b><span>${Math.round(sc * 100)}%</span></div></div>
    ${quiz.wrong.length ? `<h2>再看一眼</h2><table class="tbl">${[...new Set(quiz.wrong)].map(i => {
      const w = P.words[i];
      return `<tr><td>${mark(w[0], r[0])}<span class="ipa">[${esc(ipa(w[0]))}]</span></td><td>${esc(gist(w))} ${speakBtn(w[0])}</td></tr>`;
    }).join("")}</table>` : ""}
    <div style="text-align:center;margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      ${nextId && sc >= PASS ? `<button class="big-btn" data-root="${esc(nextId)}">下一个词根 →</button>` : ""}
      <button class="ghost" data-root="${esc(id)}">再练一次</button>
      <button class="ghost" data-go="list">词根表</button>
    </div>`;
}

/* ---------- timed drill over everything already seen ---------- */
function renderDrill() {
  const pool = Object.keys(save.weak).concat(Object.keys(save.seen)).filter(w => P.byWord[w] !== undefined);
  $("#drill-box").innerHTML = `
    <h1>速认</h1>
    <p class="lead">限时认词:每题 6 秒。先出你答错过的词,再出新词。</p>
    <div class="stats">
      <div class="stat"><b>${Object.keys(save.weak).length}</b><span>答错过</span></div>
      <div class="stat"><b>${Object.keys(save.seen).length}</b><span>练过的词</span></div>
    </div>
    <div style="text-align:center;margin:16px 0"><button class="big-btn" id="btn-drill">开始 20 题</button></div>
    <p class="hint" style="text-align:center">${pool.length ? "" : "还没有练过的词,先去学一个词根。"}</p>`;
  $("#btn-drill").onclick = startDrill;
}
function startDrill() {
  const weak = Object.keys(save.weak).map(w => P.byWord[w]).filter(i => i !== undefined);
  const seen = Object.keys(save.seen).map(w => P.byWord[w]).filter(i => i !== undefined);
  let pool = shuffle(weak).slice(0, 8);
  pool = pool.concat(shuffle(seen).filter(i => !pool.includes(i)).slice(0, 20 - pool.length));
  if (pool.length < 20) pool = pool.concat(shuffle(P.words.map((w, i) => i)).filter(i => !pool.includes(i)).slice(0, 20 - pool.length));
  drill = { queue: pool, i: 0, right: 0, t: null, wrong: [] };
  drillNext();
}
function drillNext() {
  clearTimeout(drill.t);
  if (drill.i >= drill.queue.length) return drillDone();
  const idx = drill.queue[drill.i], w = P.words[idx];
  const opts = distractors(idx, false);
  $("#drill-box").innerHTML = `
    <div class="hud"><span>${drill.i + 1} / ${drill.queue.length}</span><span id="clock">6</span><span>✓ ${drill.right}</span></div>
    <div class="card" style="text-align:center">
      <div class="word-head"><div class="w">${esc(w[0])}</div><div class="ipa">[${esc(ipa(w[0]))}] ${speakBtn(w[0])}</div></div>
      <div class="opts" id="dopts"></div>
    </div>`;
  const box = $("#dopts");
  opts.forEach(i => { const b = document.createElement("button"); b.className = "opt"; b.textContent = gist(P.words[i]); b.onclick = () => drillAnswer(i === idx, idx); box.appendChild(b); });
  let left = 6;
  drill.t = setInterval(() => { left--; const c = $("#clock"); if (c) c.textContent = left; if (left <= 0) { clearInterval(drill.t); drillAnswer(false, idx); } }, 1000);
}
function drillAnswer(ok, idx) {
  clearInterval(drill.t);
  const w = P.words[idx];
  if (ok) { drill.right++; delete save.weak[w[0]]; } else { drill.wrong.push(idx); save.weak[w[0]] = (save.weak[w[0]] || 0) + 1; }
  save.seen[w[0]] = 1; store();
  drill.i++; drillNext();
}
function drillDone() {
  $("#drill-box").innerHTML = `
    <h1>本轮结束</h1>
    <div class="stats"><div class="stat"><b>${drill.right} / ${drill.queue.length}</b><span>答对</span></div>
      <div class="stat"><b>${drill.wrong.length}</b><span>进复习队列</span></div></div>
    ${drill.wrong.length ? `<table class="tbl">${[...new Set(drill.wrong)].map(i => { const w = P.words[i]; const r = P.roots[w[3]];
      return `<tr><td>${r ? mark(w[0], r[0]) : esc(w[0])}<span class="ipa">[${esc(ipa(w[0]))}]</span></td><td>${esc(gist(w))} ${speakBtn(w[0])}</td></tr>`; }).join("")}</table>` : ""}
    <div style="text-align:center;margin-top:16px"><button class="big-btn" id="btn-again">再来一轮</button>
      <button class="ghost" data-go="home">回首页</button></div>`;
  $("#btn-again").onclick = startDrill;
}

/* ---------- search ---------- */
function renderSearch() { $("#q").focus(); }
$("#q").addEventListener("input", () => {
  const q = $("#q").value.trim().toLowerCase();
  if (q.length < 1) { $("#search-box").innerHTML = ""; return; }
  const hits = P.words.filter(w => w[0].toLowerCase().includes(q) || (w[1] || "").includes(q) || (w[2] || "").toLowerCase().includes(q)).slice(0, 40);
  $("#search-box").innerHTML = hits.length ? `<table class="tbl">${hits.map(w => {
    const r = P.roots[w[3]];
    return `<tr><td>${r ? mark(w[0], r[0]) : esc(w[0])}<span class="ipa">[${esc(ipa(w[0]))}]</span></td>
      <td>${esc(gist(w))} ${speakBtn(w[0])}${r && P.list.includes(w[3]) ? ` <button class="pill" data-root="${esc(w[3])}">🌱 ${esc(r[0])}</button>` : ""}</td></tr>`;
  }).join("")}</table>` : `<p class="hint">没找到。</p>`;
});

/* ---------- boot ---------- */
load();
$("#sel-lang").value = state.lang;
$("#sel-lang").onchange = e => { state.lang = e.target.value; save.lang = state.lang; store(); const cur = document.querySelector(".screen.show").id.slice(2); go(cur); };
$("#ver").textContent = "v1.0";
go("home");
if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});

/* =====================================================
   造词树:字母意象 → 词干 → 换元音(Ablaut) → 加前后缀
   ===================================================== */
function chipStem(id) {
  const r = P.roots[id];
  if (!r || !(P.byRoot[id] || []).length) return "";
  return `<button class="pill" data-root="${esc(id)}" style="margin:0 4px 4px 0"><b style="color:var(--gold)">${esc(r[0])}</b> ${esc(rootGist(r))} <span class="hint">${P.byRoot[id].length}</span></button>`;
}
function renderChain(letter) {
  const keys = Object.keys(CHAIN_DE);
  const L = letter || save.chainLetter || "A";
  save.chainLetter = L; store();
  const c = CHAIN_DE[L];
  $("#chain-box").innerHTML = `
    <h1>造词树</h1>
    <p class="lead">先用字母的形象记住由它起头的核心词干,再靠<b>换元音</b>(德语强变化动词的 Ablaut)和<b>加前后缀</b>,把一个词干推成一串词。</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(42px,1fr));gap:6px;margin-bottom:12px">
      ${keys.map(k => `<button class="pill" style="text-align:center;font-size:1.05em${k === L ? ";border-color:var(--gold);color:var(--gold);background:var(--panel2)" : ""}" data-chain="${k}">${k}</button>`).join("")}
    </div>
    <div class="card"><div style="text-align:center;font-size:2.4em;color:var(--gold);font-family:Georgia,serif">${esc(L)}</div>
      <p style="text-align:center;margin:4px 0 0;color:var(--text-dim)">${esc(c.line)}</p></div>
    ${c.hooks.map(h => `<div class="card"><h2 style="margin:0 0 6px">${esc(h.img)}</h2>
      <div>${h.roots.map(chipStem).join("") || `<span class="hint">这个字母下暂时没有成族的词干。</span>`}</div></div>`).join("")}
    <p class="hint">⚠️「意象」是记忆钩子,靠字形和读音联想,<b>不是词源主张</b>;点开词干看到的来历都是有据的。</p>
    <div style="text-align:center;margin:14px 0"><button class="big-btn" data-go="shop">换元音 + 前后缀 →</button></div>`;
  show("chain");
}
function renderShop() {
  $("#shop-box").innerHTML = `
    <h1>换元音与加缀</h1>
    <h2>① 换元音:Ablaut</h2>
    <p class="hint" style="margin-top:0">德语最值钱的造词机制:同一副辅音骨架,换一个元音就换一个词。动词三态换完,再加后缀就是一串名词。</p>
    ${ABLAUT.map(a => `<div class="card">
      <b style="color:var(--gold)">${esc(a.name)}</b>
      <div style="font-size:1.05em;margin:4px 0">${esc(a.verbs)} ${speakBtn(a.verbs.split(" / ")[0])}</div>
      <div>→ ${esc(a.words)}</div>
      <div class="hint" style="margin-top:4px">同类还有:${esc(a.more)}</div></div>`).join("")}
    <h2>② 前缀:换一个前缀就是一个新词</h2>
    ${AFFIX_DE.pre.map(a => `<div class="card" style="padding:8px 12px"><b style="color:var(--gold)">${esc(a.f)}</b> <span class="hint">${esc(a.m)}</span><div style="font-size:.95em">${esc(a.ex)}</div></div>`).join("")}
    <h2>③ 后缀:决定词性与词性别</h2>
    ${AFFIX_DE.suf.map(a => `<div class="card" style="padding:8px 12px"><b style="color:var(--gold)">${esc(a.f)}</b> <span class="hint">${esc(a.m)}</span><div style="font-size:.95em">${esc(a.ex)}</div></div>`).join("")}
    <div style="text-align:center;margin:14px 0"><button class="ghost" data-go="chain">← 回造词树</button></div>`;
  show("shop");
}
/* 一个词干带哪些前缀:从词库里真实的词拆出来 */
const DE_PRE = ["be","ge","er","ver","zer","ent","miss","un","ur","auf","aus","ein","mit","nach","vor","über","unter","um","ab","an","zu","durch","hin","her","wieder","wider","gegen"];
function stemAffixHtml(id) {
  const r = P.roots[id]; if (!r) return "";
  const stem = forms(r[0])[0];
  if (!stem || stem.length < 3) return "";
  const by = {};
  (P.byRoot[id] || []).forEach(i => {
    const w = P.words[i], plain = w[0].replace(/^(der|die|das)\s+/, "");
    const k = plain.toLowerCase().indexOf(stem.slice(0, Math.max(3, stem.length - 1)));
    if (k <= 0) return;
    const pre = plain.slice(0, k).toLowerCase();
    const hit = DE_PRE.filter(p => pre === p || pre === p + "ge").sort((a, b) => b.length - a.length)[0];
    if (!hit) return;
    (by[hit] = by[hit] || []).push(`${plain} <span class="hint">${esc(gist(w))}</span>`);
  });
  const keys = Object.keys(by).sort((a, b) => by[b].length - by[a].length);
  if (!keys.length) return "";
  return `<div class="card"><h2 style="margin:0 0 6px">🧱 加前缀造出来的词</h2>` +
    keys.map(p => `<div style="margin-bottom:6px"><b style="color:var(--gold)">${esc(p)}-</b> ${by[p].slice(0, 8).join(" · ")}</div>`).join("") +
    `<p class="hint" style="margin:6px 0 0">前缀的意思见「造词树 → 换元音与加缀」。</p></div>`;
}
document.addEventListener("click", e => {
  const b = e.target.closest && e.target.closest("[data-chain]");
  if (b) renderChain(b.dataset.chain);
});
