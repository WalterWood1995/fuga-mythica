/* =====================================================
   RADIX LATINA — 拉丁字母与造词法
   字母篇 letters.js · 音变篇 laws.js · 词族篇(VOCAB fr/it/es/en 按共用词根 id 并排)
   ===================================================== */
const SAVE = "radix-latina-v1";
const LANGS = [["la", "拉丁语"], ["fr", "法语"], ["it", "意大利语"], ["es", "西班牙语"], ["en", "英语"]];
const SPEAK = { fr: "fr-FR", it: "it-IT", es: "es-ES", en: "en-GB", la: "it-IT" };
let save = { letters: {}, laws: {}, roots: {}, score: 0 };
let quiz = null;

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function load() { try { const s = JSON.parse(localStorage.getItem(SAVE)); if (s) Object.assign(save, s); } catch (e) {} }
function store() { try { localStorage.setItem(SAVE, JSON.stringify(save)); } catch (e) {} }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }

/* ---------- index the four packs by the shared root id ---------- */
const PACKS = {};
["fr", "it", "es", "en"].forEach(l => {
  const p = VOCAB[l]; if (!p) return;
  const seen = new Set(), words = [];
  p.words.forEach(w => { if (!seen.has(w[0])) { seen.add(w[0]); words.push(w); } });
  p.words = words; p.byRoot = {};
  words.forEach((w, i) => { if (w[3]) (p.byRoot[w[3]] = p.byRoot[w[3]] || []).push(i); });
  PACKS[l] = p;
});
/* a root counts when a real Latin/Greek root form and at least two languages have it */
const ROOTS = (() => {
  const ids = new Set();
  Object.values(PACKS).forEach(p => Object.keys(p.byRoot).forEach(id => ids.add(id)));
  const out = [];
  ids.forEach(id => {
    const langs = Object.keys(PACKS).filter(l => (PACKS[l].byRoot[id] || []).length);
    if (langs.length < 2) return;
    const r = (PACKS[langs[0]].roots || {})[id];
    if (!r || !/^[-A-Za-zÀ-ɏ]/.test(r[0])) return;
    const n = langs.reduce((s, l) => s + PACKS[l].byRoot[id].length, 0);
    out.push({ id, form: r[0], gist: r[1], gistEn: r[2], langs, n, story: !!storyOf(id) });
  });
  return out.sort((a, b) => b.n - a.n);
})();
function storyOf(id) {
  const e = ROOT_STORIES.shared[id] || (ROOT_STORIES.alias[id] && ROOT_STORIES.shared[ROOT_STORIES.alias[id]]);
  return e ? e[0] : "";
}

/* ---------- speech ---------- */
let VOICES = [];
function loadVoices() { if ("speechSynthesis" in window) VOICES = speechSynthesis.getVoices(); }
if ("speechSynthesis" in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function speak(text, lang) {
  if (!("speechSynthesis" in window)) return;
  const code = SPEAK[lang] || "it-IT";
  const u = new SpeechSynthesisUtterance(String(text).replace(/\s*\(.*$/, ""));
  const v = VOICES.find(x => x.lang && x.lang.replace("_", "-").toLowerCase().startsWith(code.slice(0, 2)));
  if (v) u.voice = v;
  u.lang = code; u.rate = .9;
  speechSynthesis.cancel(); speechSynthesis.speak(u);
}
const sayBtn = (w, l) => `<button class="say" data-say="${esc(w)}" data-lang="${l}" title="朗读">🔊</button>`;
document.addEventListener("click", e => {
  const s = e.target.closest && e.target.closest("[data-say]");
  if (s) { speak(s.dataset.say, s.dataset.lang); return; }
  const g = e.target.closest && e.target.closest("[data-go]");
  if (g) { go(g.dataset.go); return; }
  const lt = e.target.closest && e.target.closest("[data-letter]");
  if (lt) { openLetter(+lt.dataset.letter); return; }
  const lw = e.target.closest && e.target.closest("[data-law]");
  if (lw) { openLaw(+lw.dataset.law); return; }
  const rt = e.target.closest && e.target.closest("[data-root]");
  if (rt) { openRoot(rt.dataset.root); return; }
});

/* ---------- nav ---------- */
function show(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("show"));
  $("#s-" + name).classList.add("show");
  document.querySelectorAll("[data-go]").forEach(b => b.classList.toggle("on", b.dataset.go === name));
  window.scrollTo(0, 0);
}
function go(name) {
  show(name);
  if (name === "home") renderHome();
  if (name === "letters") renderLetters();
  if (name === "laws") renderLaws();
  if (name === "roots") renderRoots();
  if (name === "quiz") startQuiz();
  if (name === "chain") renderChain();
  if (name === "shop") renderShop();
}
function renderHome() {
  $("#home-stats").innerHTML = `
    <div class="stat"><b>${Object.keys(save.letters).length} / ${LETTERS.length}</b><span>读过的字母</span></div>
    <div class="stat"><b>${Object.keys(save.laws).length} / ${LAWS.length}</b><span>学过的规律</span></div>
    <div class="stat"><b>${ROOTS.length}</b><span>跨语言词族</span></div>
    <div class="stat"><b>${save.score || 0}</b><span>练习答对</span></div>`;
}

/* ---------- 字母篇 ---------- */
function renderLetters() {
  $("#letters-grid").innerHTML = LETTERS.map((L, i) =>
    `<button class="lt${save.letters[L.id] ? " seen" : ""}" data-letter="${i}">${esc(L.id)}<small>${esc(L.short.slice(0, 6))}</small></button>`).join("");
}
function openLetter(i) {
  const L = LETTERS[i];
  save.letters[L.id] = 1; store();
  $("#letter-box").innerHTML = `
    <div class="glyph">${esc(L.id)}<small>${esc(L.g)}</small></div>
    <p class="lead" style="text-align:center">${esc(L.short)}</p>
    <div class="card"><h2 style="margin-top:0">来历</h2><p style="margin:0">${L.long}</p></div>
    <div class="card"><h2 style="margin-top:0">读音</h2><p style="margin:0">${L.sound}</p></div>
    <div class="card"><h2 style="margin-top:0">变身规则</h2><p style="margin:0">${L.shift}</p></div>
    <div style="display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap">
      ${i > 0 ? `<button class="ghost" data-letter="${i - 1}">← ${esc(LETTERS[i - 1].id)}</button>` : ""}
      <button class="ghost" data-go="letters">字母表</button>
      ${i < LETTERS.length - 1 ? `<button class="big-btn" data-letter="${i + 1}">${esc(LETTERS[i + 1].id)} →</button>` : ""}
    </div>`;
  show("letter");
}

/* ---------- 音变篇 ---------- */
function renderLaws() {
  const groups = [...new Set(LAWS.map(l => l.grp))];
  $("#laws-box").innerHTML = groups.map(g =>
    `<h2>${esc(g)}</h2>` + LAWS.map((l, i) => [l, i]).filter(([l]) => l.grp === g).map(([l, i]) =>
      `<button class="row" data-law="${i}"><b>${esc(l.name)}</b><span>${esc(l.rule.slice(0, 28))}…</span></button>`).join("")).join("");
}
function cmpTable(rows) {
  return `<div class="tw"><table class="cmp"><tr><th>拉丁</th><th>法</th><th>意</th><th>西</th><th>英</th></tr>` +
    rows.map(r => `<tr>${r.map((cell, k) => {
      const lang = ["la", "fr", "it", "es", "en"][k];
      const plain = String(cell).replace(/\s*\(.*$/, "");
      return `<td>${esc(cell)}${cell && cell !== "—" ? sayBtn(plain, lang) : ""}</td>`;
    }).join("")}</tr>`).join("") + `</table></div>`;
}
function openLaw(i) {
  const l = LAWS[i];
  save.laws[l.id] = 1; store();
  $("#law-box").innerHTML = `
    <h1>${esc(l.name)}</h1>
    <p class="lead"><span class="tag">${esc(l.grp)}</span>${esc(l.rule)}</p>
    <div class="card"><h2 style="margin-top:0">为什么会这样</h2><p style="margin:0">${esc(l.why)}</p></div>
    <div class="card"><h2 style="margin-top:0">对照</h2>${cmpTable(l.ex)}</div>
    <div class="card"><h2 style="margin-top:0">怎么反推</h2><p style="margin:0">${esc(l.back)}</p></div>
    <div style="display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap">
      ${i > 0 ? `<button class="ghost" data-law="${i - 1}">← 上一条</button>` : ""}
      <button class="ghost" data-go="laws">规律表</button>
      <button class="big-btn" data-go="quiz">练一练</button>
      ${i < LAWS.length - 1 ? `<button class="ghost" data-law="${i + 1}">下一条 →</button>` : ""}
    </div>`;
  show("law");
}

/* ---------- 词族篇 ---------- */
function renderRoots(filter) {
  const q = (filter || "").trim().toLowerCase();
  let list = ROOTS;
  if (q) {
    list = ROOTS.filter(r => r.id.includes(q) || r.form.toLowerCase().includes(q) || (r.gist || "").includes(q)
      || Object.keys(PACKS).some(l => (PACKS[l].byRoot[r.id] || []).some(i => PACKS[l].words[i][0].toLowerCase().includes(q))));
  }
  $("#roots-box").innerHTML = list.slice(0, 300).map(r =>
    `<button class="row" data-root="${esc(r.id)}"><b>${esc(r.form)}</b><span>${esc(r.gist)}</span>
      <span style="margin-left:auto">${r.story ? "📜 " : ""}${r.n} 词 · ${r.langs.length} 语</span></button>`).join("")
    || `<p class="hint">没找到。</p>`;
}
$("#q").addEventListener("input", e => renderRoots(e.target.value));
function openRoot(id) {
  const r = ROOTS.find(x => x.id === id); if (!r) return;
  save.roots[id] = 1; store();
  const cols = ["fr", "it", "es", "en"];
  const maxRows = Math.max(...cols.map(l => (PACKS[l].byRoot[id] || []).length));
  const rows = [];
  for (let i = 0; i < Math.min(maxRows, 8); i++) {
    rows.push(cols.map(l => {
      const list = PACKS[l].byRoot[id] || [];
      if (!list[i]) return "";
      const w = PACKS[l].words[list[i]];
      return `${esc(w[0])} ${sayBtn(w[0], l)}<div class="hint">${esc(w[1])}</div>`;
    }));
  }
  const story = storyOf(id);
  $("#root-box").innerHTML = `
    <div class="glyph" style="font-size:2em">${esc(r.form)}<small>${esc(r.gist)}</small></div>
    <div class="tw"><table class="cmp"><tr><th>法语</th><th>意大利语</th><th>西班牙语</th><th>英语</th></tr>
      ${rows.map(cells => `<tr>${cells.map(c => `<td style="color:var(--text);font-style:normal">${c}</td>`).join("")}</tr>`).join("")}</table></div>
    ${affixHtml(id)}
    ${story ? (typeof evBlockHtml === "function" ? evBlockHtml(story, { rootForm: r.form, rootGist: r.gist }) : `<div class="etym">${story}</div>`) : `<p class="hint">这个词根的来历还没写。</p>`}
    <div style="text-align:center;margin-top:14px"><button class="ghost" data-go="roots">← 词族表</button></div>`;
  show("root");
}

/* 一个词根在四种语言里带哪些前缀:从真实词里拆出来 */
/* 一个词根在四种语言里带哪些前缀:从真实词里拆出来。
   同一个前缀有很多变体(ad- 会写成 ac-/af-/ap-…),按规范形归并。 */
const PRE_CANON = [
  ["re-",    ["re", "ré", "ri", "ra", "r"]],
  ["ad-",    ["ad", "ac", "af", "ag", "al", "ap", "as", "at", "ab", "a"]],
  ["com-",   ["com", "con", "col", "cor", "co"]],
  ["in- (进入/不)", ["in", "im", "il", "ir", "en", "em"]],
  ["ex-",    ["ex", "ef", "es", "e"]],
  ["de-",    ["de", "dé", "di", "dis", "dif", "des"]],
  ["sub-",   ["sub", "sup", "sou", "sop", "sos", "su", "so"]],
  ["super-", ["super", "sur", "sopra", "sobre"]],
  ["trans-", ["trans", "tras", "tra", "tré"]],
  ["per-",   ["per", "par"]],
  ["pro-",   ["pro", "pour", "pur"]],
  ["pre-",   ["pré", "pre", "pri"]],
  ["inter-", ["inter", "entre"]],
  ["ob-",    ["ob", "oc", "of", "op"]],
  ["circum-",["circon", "circun", "circo", "circ"]],
  ["contra-",["contra", "contre", "contro"]],
];
function canonOf(pre) {
  let best = null;
  PRE_CANON.forEach(([canon, vars]) => vars.forEach(v => {
    if (pre === v && (!best || v.length > best.len)) best = { canon, len: v.length };
  }));
  return best ? best.canon : null;
}
function affixHtml(id) {
  const rows = [];
  Object.keys(PACKS).forEach(l => {
    (PACKS[l].byRoot[id] || []).forEach(i => {
      const w = PACKS[l].words[i];
      const plain = w[0].replace(/^(le |la |les |il |lo |gli |i |el |los |las |l'|the )/i, "");
      const root = (PACKS[l].roots[id] || [""])[0].replace(/\([^)]*\)/g, "").split(/[\/,]/)[0].replace(/[-\s]/g, "").toLowerCase();
      if (!root || root.length < 3) return;
      const stem = root.slice(0, Math.max(3, root.length - 1));
      const k = plain.toLowerCase().indexOf(stem);
      if (k <= 0) return;
      const pre = plain.slice(0, k).toLowerCase().replace(/[^a-zà-ÿ]/g, "");
      if (!pre || pre.length > 6) return;
      const canon = canonOf(pre);
      if (!canon) return;
      rows.push({ canon, pre, w: plain, g: w[1] });
    });
  });
  if (rows.length < 3) return "";
  const by = {};
  rows.forEach(r => (by[r.canon] = by[r.canon] || []).push(r));
  const keys = Object.keys(by).sort((a, b) => by[b].length - by[a].length).slice(0, 8);
  return `<div class="card"><h2 style="margin:0 0 6px">🧱 加前缀造出来的词</h2>` +
    keys.map(c => {
      const seen = new Set();
      const items = by[c].filter(r => { if (seen.has(r.w)) return false; seen.add(r.w); return true; }).slice(0, 6);
      return `<div style="margin-bottom:7px"><b style="color:var(--gold)">${esc(c)}</b> ` +
        items.map(r => `<span class="tag" style="color:var(--text)">${esc(r.w)} <span class="hint">${esc(r.g)}</span></span>`).join("") + `</div>`;
    }).join("") +
    `<p class="hint" style="margin:6px 0 0">每个前缀的意思见「造词工坊 → 前缀表」。</p></div>`;
}

/* ---------- 练习:用规律换字母 ---------- */
function buildQ() {
  const pool = LAWS.filter(l => l.ex && l.ex.length >= 3);
  const law = pool[Math.floor(Math.random() * pool.length)];
  const row = law.ex[Math.floor(Math.random() * law.ex.length)];
  const cols = [1, 2, 3].filter(k => row[k] && row[k] !== "—" && !/[()]/.test(row[k]));
  if (!cols.length) return buildQ();
  const col = cols[Math.floor(Math.random() * cols.length)];
  const names = { 1: "法语", 2: "意大利语", 3: "西班牙语" };
  const right = row[col];
  const wrong = [];
  const others = shuffle(law.ex.filter(x => x !== row));
  others.forEach(x => { if (wrong.length < 3 && x[col] && x[col] !== "—" && x[col] !== right) wrong.push(x[col]); });
  const others2 = shuffle(LAWS.filter(l => l !== law));
  for (const l of others2) { if (wrong.length >= 3) break; const x = l.ex[0]; if (x && x[col] && x[col] !== "—") wrong.push(x[col]); }
  return { law, latin: row[0], target: names[col], right, opts: shuffle([right, ...wrong.slice(0, 3)]), col };
}
function startQuiz() {
  quiz = { n: 0, right: 0, q: null };
  nextQ();
}
function nextQ() {
  if (quiz.n >= 10) return doneQuiz();
  quiz.q = buildQ(); quiz.n++;
  const q = quiz.q;
  $("#quiz-box").innerHTML = `
    <div class="hint" style="display:flex;justify-content:space-between"><span>${quiz.n} / 10</span><span>✓ ${quiz.right}</span></div>
    <div class="card" style="text-align:center">
      <div class="hint">按这条规律推:<b style="color:var(--gold)">${esc(q.law.name)}</b></div>
      <div class="glyph" style="font-size:1.8em">${esc(q.latin)}</div>
      <p style="margin:0 0 4px">它在<b>${q.target}</b>里是哪个?</p>
      <div class="opts" id="opts"></div>
      <div id="fb"></div>
    </div>`;
  const box = $("#opts");
  q.opts.forEach(o => {
    const b = document.createElement("button");
    b.className = "opt"; b.textContent = o;
    b.onclick = () => answer(o, b);
    box.appendChild(b);
  });
}
function answer(chosen, btn) {
  const q = quiz.q, ok = chosen === q.right;
  document.querySelectorAll(".opt").forEach(b => { b.disabled = true; if (b.textContent === q.right) b.classList.add("correct"); else if (b === btn) b.classList.add("wrong"); });
  if (ok) { quiz.right++; save.score = (save.score || 0) + 1; store(); }
  $("#fb").innerHTML = `<div class="card" style="margin-top:12px;text-align:left">
      <div style="color:${ok ? "var(--good)" : "var(--bad)"}">${ok ? "✓ 对了" : "✗ 再看一次规律"}</div>
      <div style="margin:6px 0"><b>${esc(q.latin)}</b> → <b style="color:var(--gold)">${esc(q.right)}</b> ${sayBtn(q.right, ["", "fr", "it", "es"][q.col])}</div>
      <div class="hint">${esc(q.law.rule)}</div>
      <div style="text-align:center;margin-top:10px"><button class="big-btn" id="next">下一题 →</button></div>
    </div>`;
  $("#next").onclick = nextQ;
  $("#next").focus();
}
function doneQuiz() {
  $("#quiz-box").innerHTML = `
    <h1>本轮结束</h1>
    <div class="stats"><div class="stat"><b>${quiz.right} / 10</b><span>答对</span></div>
      <div class="stat"><b>${save.score}</b><span>累计答对</span></div></div>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="big-btn" id="again">再来十题</button>
      <button class="ghost" data-go="laws">回规律表</button></div>`;
  $("#again").onclick = startQuiz;
}

/* ---------- boot ---------- */
load();
$("#ver").textContent = "v1.0";
renderHome();
go("home");
if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});

/* =====================================================
   造词树:字母意象 → 词根群 → 换元音/换辅音/换位置 → 加前后缀
   ===================================================== */
const KNOWN = (() => {
  const k = {};
  Object.keys(PACKS).forEach(l => {
    const p = PACKS[l];
    Object.entries(p.roots).forEach(([id, r]) => {
      if (!/^[-A-Za-z\u00C0-\u024F]/.test(r[0]) || !(p.byRoot[id] || []).length) return;
      k[id] = k[id] || { id, form: r[0], gist: r[1], n: 0 };
      k[id].n += p.byRoot[id].length;
    });
  });
  return k;
})();
function chipRoot(id) {
  const k = KNOWN[id];
  if (!k) return "";
  return `<button class="pill" data-root="${esc(id)}" style="margin:0 4px 4px 0"><b style="color:var(--gold)">${esc(k.form)}</b> ${esc(k.gist)} <span class="hint">${k.n}</span></button>`;
}
function renderChain(letter) {
  const keys = Object.keys(CHAIN);
  const L = letter || (save.chainLetter || "A");
  save.chainLetter = L; store();
  const c = CHAIN[L], meta = LETTERS.find(x => x.id === L) || {};
  $("#chain-box").innerHTML = `
    <h1>造词树</h1>
    <p class="lead">从字母的象形义出发,记住由它起头的核心词根;再靠<b>换元音、换辅音、换位置、加前后缀</b>四种真实的历史机制,把一个骨架推成一串词。</p>
    <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(44px,1fr));margin-bottom:12px">
      ${keys.map(k => `<button class="lt" style="font-size:1.05em;padding:6px 0${k === L ? ";border-color:var(--gold);background:var(--panel2)" : ""}" data-chain="${k}">${k}</button>`).join("")}
    </div>
    <div class="card">
      <div class="glyph" style="font-size:2.2em;margin:0">${esc(L)}<small>${esc(meta.g || "")}</small></div>
      <p style="text-align:center;margin:4px 0 0"><span class="tag">象形</span>${esc(meta.short || "")}</p>
      <p style="text-align:center;margin:6px 0 0;color:var(--text-dim)"><span class="tag">联想链</span>${esc(c.line)}</p>
    </div>
    ${c.hooks.map(h => `
      <div class="card">
        <h2 style="margin:0 0 6px">${esc(h.img)}</h2>
        <div>${h.roots.map(chipRoot).join("") || `<span class="hint">这个字母下暂时没有成族的词根。</span>`}</div>
      </div>`).join("")}
    <p class="hint" style="margin-top:10px">⚠️ 上面的「意象」是记忆钩子,靠字形和读音去联想,<b>不是词源主张</b>;点开任何一个词根,看到的来历都是有据的。</p>
    <div style="text-align:center;margin:14px 0"><button class="big-btn" data-go="shop">进造词工坊 →</button></div>`;
  show("chain");
}
function renderShop() {
  const v = SWAP.vowel, c = SWAP.cons, m = SWAP.meta;
  $("#shop-box").innerHTML = `
    <h1>造词工坊</h1>
    <p class="lead">四种操作,把一个骨架变成一串词。</p>

    <h2>① 换元音 <span class="hint">ablaut</span></h2>
    <p class="hint" style="margin-top:0">${esc(v.why)}</p>
    <div class="tw"><table class="cmp"><tr><th>骨架</th><th>核心义</th><th>e 级</th><th>o 级</th><th>零级</th></tr>
      ${v.rows.map(r => `<tr><td>${esc(r.skel)}</td><td style="color:var(--text)">${esc(r.core)}</td>
        <td style="color:var(--text)">${esc(r.e)}</td><td style="color:var(--text)">${esc(r.o)}</td><td style="color:var(--text)">${esc(r.zero)}</td></tr>
        <tr><td></td><td colspan="4" class="hint">→ ${esc(r.words)}</td></tr>`).join("")}</table></div>

    <h2>② 换辅音 <span class="hint">格林定律</span></h2>
    <p class="hint" style="margin-top:0">${esc(c.why)}</p>
    ${c.rows.map(r => `<div class="card" style="padding:9px 12px"><b style="color:var(--gold)">${esc(r.pair)}</b><div>${esc(r.ex)}</div></div>`).join("")}

    <h2>③ 换位置 <span class="hint">metathesis</span></h2>
    <p class="hint" style="margin-top:0">${esc(m.why)}</p>
    <div class="tw"><table class="cmp"><tr><th>拉丁/原形</th><th>换位后</th><th>怎么换的</th></tr>
      ${m.rows.map(r => `<tr><td>${esc(r.from)}</td><td style="color:var(--text)">${esc(r.to)}</td><td class="hint">${esc(r.note)}</td></tr>`).join("")}</table></div>

    <h2>④ 加前缀 / 后缀</h2>
    <p class="hint" style="margin-top:0">选一个词根,看它和各前缀拼出的真实词。</p>
    <div style="margin:8px 0">${["port", "duc", "fer", "pos", "ven", "spec", "tend", "cap", "scrib", "mitt"].map(chipRoot).join("")}</div>
    <h2 style="font-size:1em">前缀表</h2>
    ${AFFIX.pre.map(a => `<div class="card" style="padding:8px 12px"><b style="color:var(--gold)">${esc(a.f)}</b> <span class="hint">${esc(a.m)}</span><div style="font-size:.92em">${esc(a.ex)}</div></div>`).join("")}
    <h2 style="font-size:1em">后缀表</h2>
    ${AFFIX.suf.map(a => `<div class="card" style="padding:8px 12px"><b style="color:var(--gold)">${esc(a.f)}</b> <span class="hint">${esc(a.m)}</span><div style="font-size:.92em">${esc(a.ex)}</div></div>`).join("")}
    <div style="text-align:center;margin:14px 0"><button class="ghost" data-go="chain">← 回造词树</button></div>`;
  show("shop");
}
document.addEventListener("click", e => {
  const b = e.target.closest && e.target.closest("[data-chain]");
  if (b) renderChain(b.dataset.chain);
});
