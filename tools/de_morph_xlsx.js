const M = require("./de_morph.js"), X = require("./mini_xlsx.js");
const out = process.argv[2] || "德语构词分析.xlsx";

const H1 = ["首字母", "核心词根", "词根义(中)", "词根义(英)", "词根ID",
  "前缀", "前缀义", "前缀类型", "复合前件", "连接成分",
  "核心词形", "后缀", "后缀义", "后缀词性/性别", "复合后件", "余部",
  "冠词", "完整单词", "读音 IPA", "中文", "English", "词根来源", "核心词识别", "有词源故事"];
const W1 = [6, 12, 14, 14, 9, 12, 26, 12, 12, 16, 10, 14, 26, 16, 12, 6, 5, 20, 18, 22, 22, 12, 12, 6];
const r1 = r => [r.letter, r.rootForm, r.rootZh, r.rootEn, r.rid,
  r.pre, r.preM, r.preT, r.comp1, r.link,
  r.core, r.suf, r.sufM, r.sufT, r.comp2, r.tail,
  r.art, r.word, r.ipa, r.zh, r.en, r.src, r.how, r.hasStory];

const H2 = ["首字母", "核心词根", "词根义(中)", "词根义(英)", "词根ID", "冠词", "完整单词", "读音 IPA", "中文", "English", "词根来源", "核心词识别", "有词源故事"];
const W2 = [6, 12, 14, 14, 9, 5, 18, 18, 22, 22, 12, 12, 6];
const r2 = r => [r.letter, r.rootForm, r.rootZh, r.rootEn, r.rid, r.art, r.word, r.ipa, r.zh, r.en, r.src, r.how, r.hasStory];

/* real examples + counts straight out of the analysed table */
const ALL = M.rows.concat(M.plainRows);
const exOf = (field, token) => ALL.filter(r => (r[field] || "").split(" + ").includes(token))
  .slice(0, 4).map(r => r.word + " " + r.zh).join(" · ");
const cntOf = (field, token) => ALL.filter(r => (r[field] || "").split(" + ").includes(token)).length;

/* root index: how big is each family */
const fam = {};
ALL.forEach(r => {
  const k = r.rootForm;
  (fam[k] = fam[k] || { letter: r.letter, form: k, zh: r.rootZh, en: r.rootEn, id: r.rid, n: 0, pre: new Set(), suf: new Set(), story: r.hasStory, ex: [] })
  fam[k].n++;
  if (r.pre) r.pre.split(" + ").forEach(x => fam[k].pre.add(x));
  if (r.suf) r.suf.split(" + ").forEach(x => fam[k].suf.add(x));
  if (fam[k].ex.length < 5) fam[k].ex.push(r.word);
});
const famRows = Object.values(fam).sort((a, b) => a.form.localeCompare(b.form, "de"))
  .map(f => [f.letter, f.form, f.zh, f.en, f.id, f.n, f.pre.size, f.suf.size,
             [...f.pre].join(" "), [...f.suf].join(" "), f.ex.join(" · "), f.story]);

const sheets = [
  { name: "① 前缀+词根+后缀", widths: W1, rows: [H1, ...M.rows.map(r1)] },
  { name: "② 无缀词(光词根)", widths: W2, rows: [H2, ...M.plainRows.map(r2)] },
  { name: "③ 词根总表", widths: [6, 14, 16, 16, 9, 7, 7, 7, 26, 26, 46, 6],
    rows: [["首字母", "核心词根", "词根义(中)", "词根义(英)", "词根ID", "本表词数", "带过的前缀数", "带过的后缀数", "出现过的前缀", "出现过的后缀", "例词", "有词源故事"], ...famRows] },
  { name: "④ 前缀表", widths: [10, 34, 18, 9, 56], rows: [["前缀", "意思", "可分/不可分", "本表词数", "表内例词"],
    ...M.PRE.map(p => [p[0] + "-", p[1], p[2], cntOf("pre", p[0] + "-"), exOf("pre", p[0] + "-")])
      .sort((a, b) => b[3] - a[3])] },
  { name: "⑤ 后缀表", widths: [12, 34, 20, 9, 56], rows: [["后缀", "意思", "词性 / 名词性别", "本表词数", "表内例词"],
    ...M.SUF.map(p => ["-" + p[0], p[1], p[2], cntOf("suf", "-" + p[0]), exOf("suf", "-" + p[0])])
      .sort((a, b) => b[3] - a[3])] },
  { name: "⑥ 连接成分", widths: [10, 44, 30], rows: [["接合成分", "什么时候出现", "例词"],
    ...M.FUGEN.map(f => ["-" + f[0] + "-", f[1], f[2]]),
    ["ge-…-t / ge-…-en", "过去分词的「框式」:前后同时加,夹住词根", "machen → gemacht;sprechen → gesprochen"],
    ["zu-", "不定式标记,可分动词里插在前缀与词根之间", "aufstehen → aufzustehen"]] },
  { name: "⑦ 词组", widths: [22, 24, 24, 12, 14], rows: [["词条", "中文", "English", "词根ID", "词根"], ...M.phrases] },
  { name: "⑧ 待归词根", widths: [22, 18, 24, 24, 16, 18], rows: [["单词", "中文", "English", "原分类ID", "原分类", "读音 IPA"], ...M.noRoot] },
  { name: "⑨ 未切分", widths: [12, 16, 22, 24], rows: [["词根ID", "词根", "单词", "中文"], ...M.skipped] },
  { name: "⑩ 怎么读这张表", widths: [18, 90], rows: [["栏目", "说明"],
    ["排序", "按「核心词根」的字母顺序;同一词根内部按单词字母顺序。所以同一族词是连着的。"],
    ["前缀 / 后缀", "只填真实存在的构词成分。空白表示该词这一侧没有词缀。"],
    ["前缀类型", "可分前缀在句中会被甩到句尾(ich stehe auf);不可分前缀永远粘着,且过去分词不加 ge-。"],
    ["复合前件 / 复合后件", "不是词缀,而是另一个独立的词。德语的长词大多是这样拼的:Abend+Dämmerung。"],
    ["连接成分", "复合词两半之间的粘合剂(Fugenelement),以及过去分词的 ge-…-t 框式。"],
    ["余部", "自动切分后剩下的 1–3 个字母,多为词干的元音/辅音变体。留着不删,方便你核对。"],
    ["核心词识别", "「同形」= 词根原形直接出现在词里;「换元音(Ablaut)」= 辅音骨架相同、元音变了,如 binden→Band。"],
    ["词根来源", "「词库标注」= 原词库已标好词根;「自动匹配(待核)」= 原来只按主题收录,由脚本按最长词根匹配,建议人工抽查。"],
    ["读音 IPA", "由规则转写生成,已对 24 个参考词逐条校对。"],
    ["统计", `带缀词 ${M.rows.length} 条;无缀词 ${M.plainRows.length} 条;词组 ${M.phrases.length};待归词根 ${M.noRoot.length};未切分 ${M.skipped.length}。`]] },
];
X.write(out, sheets);
console.log("wrote", out);
sheets.forEach(s => console.log("  " + s.name + ": " + (s.rows.length - 1) + " 行"));
