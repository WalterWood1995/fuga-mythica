# 通往 8000 词 · Cursus 内容路线图

## 现状(v0.30)

受众:全年龄段语言学习者,不限于儿童。优先级:欧洲语言(拉/英/德/法/意/西)优先,日语暂缓。

| 语种 | 词数(去重) | 词根家族 | 文件 |
|---|---|---|---|
| 德语 | 6093 | 686 | vocab_de.js + de2 … de12 |
| 法语 | 4404 | 779 | vocab_fr.js + fr2 … fr9 |
| 英语 | 4462 | 801 | vocab_en.js + en2 … en7 |
| 意大利语 | 4409 | 717 | vocab_it.js + it2 … it8 |
| 西班牙语 | 4414 | 735 | vocab_es.js + es2 … es8 |
| 拉丁语 | 5131 | 554 | 故事词汇自动组包 + vocab_la.js + la2 … la8 |
| 日语(暂缓) | 512 | 220 | vocab_ja.js |
| **合计** | **29425** | **4492** | |

第 2 批(v0.22):前缀体系、后缀家族、拉丁词根第二组。
第 3 批(v0.23):拉丁词根第三组(agr/ambul/apt/cert/cult/dur/…/volv/vulner,学术与新闻词)+ 希腊词根在各语种中的形态;德语改走本族路线——强变化动词词干族(geh/steh/nehm/geb/seh/sprech/…)、可分前缀族(aus-/ein-/über-/unter-/durch-/um-)、复合词词尾(-haus/-zeug/-werk/-zeit);拉丁语补形容词/名词族与剩余高频动词干。

## 质量校对(v0.24)

- 英语包英文释义栏原为词源直译(produce = "make forth"、include = "shut in"),对英文界面学习者有误导;已把 843 条改为现代同义词。规则:**英文栏永远写现代常用义的短同义词,词源留给词根卡**。
- 拉丁语删除非古典/中世纪形:collabor、immuro、companio、correspondeo、districtus(名词)、intimido、felicito、collateralis、irradio、clarifico、purifico、insipidus;posthumus → postumus。晚期拉丁(如 revolutio、vulnerabilis)保留,读者在科学/教会文本中会遇到。
- 同一词在同一语种重复出现且中文略异的(如 transform 改变/转变)运行时取首个,不算错误。

第 4 批(v0.25):把 30 个最大的拉丁词根族(duc/port/scrib/mitt/fac/pos/ten/ven/cap/vid/dic/sta/ced/vert/leg/tract/fer/pend/sent/grad/form/gen/mov/reg/sequ/solv/tend/voc/val/viv/vinc/fin)在英/法/西/意四语种各填到 8–25 个派生词,共用同一套 root id;法语补法兰克语/高卢语底层词,西语补阿拉伯语/哥特语底层词,意语补伦巴第语/阿拉伯语底层词(rootId 用 germ/arab/celt 表示来源层,不是词根);德语补 50 个动词干族(komm/mach/sag/führ/folg/…/wend)和 Kraft/Mut/Recht 名词族;拉丁语补感受/言语/日常生活动词干与自然名词族。

第 5 批(v0.26):~110 个此前未建族的中频拉丁词根(ali/ang/arc/arm/bas/camp/cast/cav/cel/cern/circ/clar/clav/crim/cruc/culp/dam/dei/dens/dol/du/fam/fil/firm/flam/front/fruct/gel/grand/hered/hor/insul/lav/lim/lin/lun/mand/matur/mol/mor/nerv/noct/nunc/orb/pal/pauc/plan/plat/plor/prec/pred/propr/prox/quadr/quies/rar/rig/riv/rob/rud/ser/sid/solid/sper/stud/suad/sult/tal/tard/tect/tol/ton/tot/trud/vap/var/veh/vel/verb/verg/vic/vil/vin/vot…),英/法/西/意/拉五语种同一套 id;德语补 100 个名词/形容词干族(Hand/Haupt/Land/Stadt/Weg/Tag/Jahr/Welt/…/gleich/eigen/frei/wahr/Grund)的复合与派生。

德语冲刺 6000(v0.27,用户 2026-08-29 指定优先):de6 核心日常层(代词/介词/连词/副词/情态动词/数字/时间/身体/饮食/住所/家庭/服装/动物/基础形容词,标签 core);de7 又 100 个动词干族;de8 拉丁希腊借词族(-ieren/-tion/-ität/-ismus 学术层);de9 词缀族(-isch/-sam/-haft/-voll/-reich/-arm/-frei/-mäßig/-fähig/-wert;-er/-in/-nis/-ei/-ling/-chen/-ik/-ur;Ge-/Un-/Ur-/Erz-/Neben-/Gegen-/Vor-/Nach-/Rück-/Zwischen-/Selbst-);de10 又 90 个名词族;de11 十个主题域(职业/政法/科技/环境/文化/健康/运动/交通/学校/情感,标签为主题而非词根);de12 厨房/服装/居住/日常用语。法语 fr6:90 个新族 + core 层 + 希腊词根 + 派生词。

其余语种冲 4000(v0.28):es6/it6 各 ~60 个拉丁族 + core 层 + 希腊词根 + 派生词;en6 日耳曼 core 层 + 40 个拉丁族;fr7 又 28 族 + topic 日常名词;la5 拉丁功能词 core 层;la6 90 个名词族 + -tio/-tor/-bilis/-osus 派生;la7 核心动词复合词(ad-/con-/de-/ex-/in-/per-/prae-/pro-/re-/sub-/trans-)+ 15 个主题域(t_mil/t_dom/t_nat/t_fauna/t_flora/t_cib/t_relig/t_iur/t_mar/t_corp/t_adj/t_adv/t_abstr/t_urb/t_ars);it7/es7/fr8 日常主题名词(topic 标签:星期月份/饮食/身体/住所/服装/购物/交通/学校/天气/动物/运动/文化/职业/情感)+ 少量派生词。

希腊科学/医学/文化词族(v0.29,en7/fr9/es8/it8):约 105 个新希腊词根(cardi/ophthalm/nephr/phot/astr/polit/econ/chem/math/gram/aut/homo/meta/para/epi/endo/exo/-itis/-oma/-osis/-ectomy/thes/phen/ops/aesth/ergo/meteor/myst 等),四语共用同一 id 与词根卡;源文件为 scratchpad 里的四语对照主表 greek_master.txt(en|fr|es|it|zh|gist|root),脚本 split_greek.py 拆分、filt.py 去重生成。

拉丁语 la8(v0.30):核心词干的派生层——-tio/-tor/-tus/-mentum/-culum 名词、-osus/-alis/-bilis/-ivus 形容词、频率动词、复合动词,约 1000 词,全部挂到已有词根 id。

下一步:法/西/意/英/拉各到 4000(法语已 3613),方法同 fr6:A 新族 B core 层 C 希腊词根 D 派生词:抽象名词、学术词、新闻词;文件命名 `vocab_xx3.js`,结构同第 2 批(IIFE 把 roots/words 合并进 VOCAB.xx)。

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
node -e "const fs=require('fs');const src=['data.js','data2.js','vocab_core.js','vocab_en.js','vocab_de.js','vocab_fr.js','vocab_it.js','vocab_es.js','vocab_ja.js','vocab_la.js','vocab_en2.js','vocab_fr2.js','vocab_es2.js','vocab_de2.js','vocab_it2.js','vocab_la2.js','vocab_en3.js','vocab_fr3.js','vocab_es3.js','vocab_de3.js','vocab_it3.js','vocab_la3.js','vocab_en4.js','vocab_fr4.js','vocab_es4.js','vocab_de4.js','vocab_it4.js','vocab_la4.js','vocab_en5.js','vocab_fr5.js','vocab_es5.js','vocab_de5.js','vocab_it5.js','vocab_fr6.js','vocab_de6.js','vocab_de7.js','vocab_de8.js','vocab_de9.js','vocab_de10.js','vocab_de11.js','vocab_de12.js'].map(f=>fs.readFileSync(f,'utf8')).join('\n');const V=new Function(src+';buildLatinPack();return VOCAB;')();for(const l in V){const p=V[l],bad=p.words.filter(w=>w[3]&&!p.roots[w[3]]);console.log(l,p.words.length,'badRoot',bad.length)}"
```

`badRoot` 必须为 0,然后 `sw.js` 的 `VERSION` 加一,再提交。

## 游戏机制(供调参)

`index.html` 顶部常量:`CUR_ROUND`(每轮题数 20)、`CUR_TIME`(限时 6 s)、`CUR_FAST`(算"快"的阈值 3.5 s)、`CUR_OPTS`(选项数 6)。

- 每轮 40% 复习(错过 / 未掌握的词,错得多的优先)+ 60% 新词。
- 干扰项:先取 1–2 个同根词,再取频率相邻词——同根词最容易混,这正是要练的。
- 掌握 = 连续两次 ≤3.5 s 答对;答错一次即取消掌握,回到复习池。
- 进度按玩家档案、按语种分别保存在 `players[name].cursus.prog[lang]`。
