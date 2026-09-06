/* =====================================================
   FUGA MYTHICA — CURSUS (速认) core
   VOCAB[lang] = { name:{zh,en}, flag, roots:{id:[form,zh,en]}, words:[[word,zh,en,rootId], ...] }
   The Latin pack is assembled at runtime from WORDS / WORDS2 (already zh+en glossed),
   grouped by the root families in LATIN_ROOTS below.
   ===================================================== */
const VOCAB = {};
const CURSUS_GOAL = 8000;          /* words per language the learner is aiming for */

/* Latin root families: rootId -> [form, zh, en, [word keys]] */
const LATIN_ROOTS = {
  pater: ["pater / patr-", "父", "father", ["pater","patria"]],
  mater: ["mater / matr-", "母", "mother", ["mater","materia"]],
  rex:   ["rex / reg-", "王,统治", "king, rule", ["rex","regina","regnum","rego"]],
  deus:  ["deus / div-", "神", "god", ["deus","dea","divinus"]],
  aqua:  ["aqua", "水", "water", ["aqua"]],
  mare:  ["mare / mar-", "海", "sea", ["mare","nauta","navis"]],
  lux:   ["lux / luc- / lumen", "光", "light", ["lux","lucerna","luna"]],
  sol:   ["sol", "太阳", "sun", ["sol"]],
  stella:["stella", "星", "star", ["stella"]],
  terra: ["terra", "土地", "land", ["terra"]],
  caelum:["caelum", "天", "sky", ["caelum"]],
  ignis: ["ignis / flamma", "火", "fire", ["ignis","flamma","fax"]],
  ventus:["ventus", "风", "wind", ["ventus"]],
  domus: ["domus / domin-", "家,主人", "house, master", ["domus","dominus"]],
  porta: ["porta / port-", "门,运", "gate, carry", ["porta","portus","porto"]],
  via:   ["via", "路", "way", ["via","iter"]],
  manus: ["manus / manu-", "手", "hand", ["manus"]],
  pes:   ["pes / ped-", "脚", "foot", ["pes"]],
  caput: ["caput / capit-", "头", "head", ["caput"]],
  cor:   ["cor / cord-", "心", "heart", ["cor"]],
  corpus:["corpus / corpor-", "身体", "body", ["corpus"]],
  oculus:["oculus", "眼", "eye", ["oculus"]],
  vox:   ["vox / voc-", "声音,呼唤", "voice, call", ["vox","voco"]],
  vita:  ["vita / viv-", "生命", "life", ["vita","vivo"]],
  mors:  ["mors / mort-", "死", "death", ["mors"]],
  amor:  ["amor / am-", "爱", "love", ["amor","amicus","amo"]],
  bellum:["bellum", "战争", "war", ["bellum"]],
  arma:  ["arma / arm-", "武器", "arms", ["arma"]],
  miles: ["miles / milit-", "士兵", "soldier", ["miles"]],
  virtus:["vir / virtus", "男人,勇气", "man, courage", ["vir","virtus"]],
  fortis:["fortis / fort-", "强", "strong", ["fortis"]],
  magnus:["magnus / magn-", "大", "great", ["magnus"]],
  parvus:["parvus", "小", "small", ["parvus"]],
  novus: ["novus / nov-", "新", "new", ["novus"]],
  bonus: ["bonus / bene", "好", "good", ["bonus"]],
  malus: ["malus / mal-", "坏", "bad", ["malus"]],
  verum: ["verus / ver-", "真", "true", ["verus","veritas"]],
  liber: ["liber / liber-", "自由,书", "free, book", ["liber","libertas"]],
  scribo:["scrib- / script-", "写", "write", ["scribo","epistula"]],
  lego:  ["leg- / lect-", "读,选", "read, choose", ["lego"]],
  dico:  ["dic- / dict-", "说", "say", ["dico","verbum"]],
  video: ["vid- / vis-", "看", "see", ["video"]],
  audio: ["aud- / auris", "听", "hear", ["audio","auris"]],
  venio: ["ven- / vent-", "来", "come", ["venio"]],
  duco:  ["duc- / duct-", "引导", "lead", ["duco"]],
  facio: ["fac- / fact-", "做", "make", ["facio"]],
  pono:  ["pon- / posit-", "放", "place", ["pono"]],
  teneo: ["ten- / tent-", "持", "hold", ["teneo"]],
  capio: ["cap- / capt-", "抓", "take", ["capio"]],
  mitto: ["mitt- / miss-", "送", "send", ["mitto"]],
  curro: ["curr- / curs-", "跑", "run", ["curro"]],
  cado:  ["cad- / cas-", "落", "fall", ["cado"]],
  sto:   ["sta- / stat-", "站", "stand", ["sto","statua"]],
  sedeo: ["sed- / sess-", "坐", "sit", ["sedeo","sella"]],
  tempus:["tempus / tempor-", "时间", "time", ["tempus","tempestas"]],
  annus: ["annus", "年", "year", ["annus"]],
  dies:  ["dies", "日", "day", ["dies"]],
  nox:   ["nox / noct-", "夜", "night", ["nox"]],
  unus:  ["unus / uni-", "一", "one", ["unus"]],
  duo:   ["duo / bi-", "二", "two", ["duo"]],
  tres:  ["tres / tri-", "三", "three", ["tres"]],
  centum:["centum", "百", "hundred", ["centum"]],
  mille: ["mille", "千", "thousand", ["mille"]],
};

/* Build VOCAB.la from the story vocabulary once the data files are loaded. */
function buildLatinPack() {
  if (VOCAB.la) return VOCAB.la;
  const src = Object.assign({}, typeof WORDS !== "undefined" ? WORDS : {}, typeof WORDS2 !== "undefined" ? WORDS2 : {});
  const keyRoot = {};
  const roots = {};
  Object.keys(LATIN_ROOTS).forEach(id => {
    const r = LATIN_ROOTS[id];
    roots[id] = [r[0], r[1], r[2]];
    r[3].forEach(k => { keyRoot[k] = id; });
  });
  const words = Object.keys(src).map(k => [src[k][0], src[k][2], src[k][3], keyRoot[k] || null]);
  VOCAB.la = { name: { zh: "拉丁语", en: "Latin" }, flag: "🏛️", roots, words };
  return VOCAB.la;
}
