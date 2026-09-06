# 通往 8000 词 · Cursus 内容路线图

## 现状(v0.20)

| 语种 | 词数 | 词根家族 | 来源 |
|---|---|---|---|
| 拉丁语 | 400 | 63 | 故事关卡词汇(data.js / data2.js),运行时自动组包 |
| 德语 | 1044 | 262 | vocab_de.js |
| 法语 | 825 | 295 | vocab_fr.js |
| 意大利语 | 828 | 278 | vocab_it.js |
| 西班牙语 | 816 | 280 | vocab_es.js |
| 日语 | 512 | 220 个汉字 | vocab_ja.js |

## 词条格式(所有语种一致)

```js
VOCAB.xx = {
  name: { zh, en }, flag,
  roots: { rootId: [词根形态, 中文大意, 英文大意] },
  words: [ [单词, 中文大意, 英文大意, rootId], ... ]   // 数组顺序 = 频率顺序
};
```

- 释义故意只写**大意**(2–4 个字),目标是阅读时瞬间反应,不是精确用法。
- `rootId` 为空也可以(拉丁语大部分如此),但有词根的词在答错时会展示同根家族——这是记忆效率的来源,尽量都填。
- 顺序即难度:游戏从数组头部开始出新词,越靠前越常用。
- 重复词条会在加载时自动去重(保留第一次出现的)。

## 扩充节奏

每语种按 **500 词一批** 追加到 `vocab_xx.js` 末尾(`words` 数组内),批次对应频率区间:

| 批次 | 频率区间 | 内容重点 |
|---|---|---|
| 1(已完成) | 1–1000 | 核心动词/名词 + 最大的词根家族 |
| 2 | 1000–2000 | 前缀派生(ver-/be-/ent-, re-/dé-/pré-…)、日常名词 |
| 3 | 2000–3500 | 抽象名词、学术词(拉丁/希腊词根在各语种的同形词) |
| 4 | 3500–5000 | 新闻/科普高频词 |
| 5 | 5000–8000 | 文学阅读词,B2–C1 |

日语的"词根"= 汉字。批次 2 起按 JLPT N3→N1 汉字表扩,每字 3–6 个复合词。

拉丁语:`vocab_core.js` 的 `LATIN_ROOTS` 只需补 `rootId -> [形态, 中, 英, [WORDS 里的 key…]]`;新故事章节加词后自动进池。也可以在 `LATIN_ROOTS` 之外单独建 `vocab_la.js` 追加非故事词(格式同其他语种,会与自动组包合并)。

## 每批追加后的检查

```bash
node -e "const fs=require('fs');const src=['data.js','data2.js','vocab_core.js','vocab_de.js','vocab_fr.js','vocab_it.js','vocab_es.js','vocab_ja.js'].map(f=>fs.readFileSync(f,'utf8')).join('\n');const V=new Function(src+';buildLatinPack();return VOCAB;')();for(const l in V){const p=V[l],bad=p.words.filter(w=>w[3]&&!p.roots[w[3]]);console.log(l,p.words.length,'badRoot',bad.length)}"
```

`badRoot` 必须为 0,然后 `sw.js` 的 `VERSION` 加一,再提交。

## 游戏机制(供调参)

`index.html` 顶部常量:`CUR_ROUND`(每轮题数 20)、`CUR_TIME`(限时 6 s)、`CUR_FAST`(算"快"的阈值 3.5 s)、`CUR_OPTS`(选项数 6)。

- 每轮 40% 复习(错过 / 未掌握的词,错得多的优先)+ 60% 新词。
- 干扰项:先取 1–2 个同根词,再取频率相邻词——同根词最容易混,这正是要练的。
- 掌握 = 连续两次 ≤3.5 s 答对;答错一次即取消掌握,回到复习池。
- 进度按玩家档案、按语种分别保存在 `players[name].cursus.prog[lang]`。
