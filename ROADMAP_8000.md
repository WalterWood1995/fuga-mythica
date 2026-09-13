# 通往 8000 词 · Cursus 内容路线图

## 现状(v0.48)

受众:全年龄段语言学习者,不限于儿童。优先级:欧洲语言(拉/英/德/法/意/西)优先,日语暂缓。

| 语种 | 词数(去重) | 词根家族 | 文件 |
|---|---|---|---|
| 德语 | 6607 | 687 | vocab_de.js + de2 … de13 |
| 法语 | 5651 | 774 | vocab_fr.js + fr2 … fr13 |
| 英语 | 5858 | 799 | vocab_en.js + en2 … en11 |
| 意大利语 | 5677 | 711 | vocab_it.js + it2 … it12 |
| 西班牙语 | 5666 | 731 | vocab_es.js + es2 … es12 |
| 拉丁语 | 5111 | 554 | 故事词汇自动组包 + vocab_la.js + la2 … la8 |
| 日语(暂缓) | 512 | 220 | vocab_ja.js |
| **合计** | **35082** | **4476** | |

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

四语主题词表(v0.31,en8/fr10/es9/it9):商业金融/法律政治/IT媒体/环境科学/健康/社会教育/宗教/艺术/旅行/天气,主表 topic_master.txt,脚本 split_topic.py(英语自动去 "the "/"to ")。第二张主题表(v0.32,en9/fr11/es10/it10):动作动词(烹饪/身体/移动/家务/工具/农事/职场/法律/IT/社交/思维)、性格与质地形容词、材料/工具/汽车/厨房/容器/形状/度量名词。第三张(v0.33,en10/fr12/es11/it11):副词与连接词、时间/频率/量词、爱好休闲、体育器材与赛事、音乐、国籍形容词、动物与其身体部位、花草树木果蔬、房屋外部与设施、办公室、性格/状态抽象名词。第四张(v0.34,en11/fr13/es12/it12):家庭关系与人生大事、个人护理、时尚细节与配饰、购物与店铺、餐厅菜品与饮品、机场/火车/酒店、紧急与安全、颜色色调、地理与国家名、节日庆典、电话与书信。德语 de13(v0.35):同一套日常主题(动词/形容词/材料工具/汽车厨房/家庭/护理/时尚/购物/餐饮/旅行/紧急/颜色/地理/节日/通信)的德语版,+514。

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


## 词根故事与审核(v0.36–v0.48)

**词根故事层** `root_stories.js`…`root_stories5.js`:`ROOT_STORIES.shared[id] = [zh, en]`,英/法/西/意共用 id;`alias` 表把重复 id(pon→pos、cap3→cap…)指向同一故事;`laMap`/`deMap` 预留给拉丁语和德语。速认答案卡在词根行下显示「📜 词根的来历」,大厅「📜 词根故事」按钮可浏览。写法:印欧语源与同源词 → 罗马/希腊的原始用法与制度背景(带年代) → 词义转折与进入现代语言的路径 → 排除同形异源词;不用谐音,不罗列衍生词。已写 521 个共用词根(v0.42),拉丁语通过 laMap 映射后 4970 个挂根词中 3672 个有故事;德语 `root_stories_de.js`/`_de2.js`(v0.43–v0.44):100 个本族词干故事(Ge-/ver-/-isch/wenden/recht/stehen/nehmen/geben/Kind/Gott/Geist…)+ deMap 把约 130 个拉丁-希腊借词 id 指向共用故事,6387 个挂根德语词中 2515 个有故事。

**审核工具** `tools/`:
- `audit_vocab.js`:结构(空字段/西里尔/尾数字)、包内重复、未定义词根、冠词与性(德语大写名词无冠词、罗曼语名词后缀无冠词)、释义栏(中文栏须含汉字、英文栏须拉丁字母且 <40 字)、词根归属启发式(词形不含词根变体者报 loose,多为合法变体,人工抽查)、**跨语种词根交叉比对**(同 id 在 en/fr/es/it 的释义不一致者列出;v0.41 已合并或改名 30 个语义冲突的 id:es cre/mil/quer/bell/tom/cas/mes/cerc,it re/cap2/cap3/donn/fa/mes/cerc/bell/cas,fr hom/ri/donn/lib/compr/bat/mot,en port2/ven2/mot/ther)。
- `spellcheck_vocab.py` + `dump_words.js`:用 hunspell 词典(LibreOffice/wooorm:en_GB、fr、es_ES、it_IT、de_DE_frami、la)逐词校验,去掉冠词后每个词元必须在词典中;spylls 实现,全库约 1 分钟。v0.41 结果:未知词 en 64(全为美式拼写/罕见词)、fr 12(合法古词与外来词)、es 66(词典缺的科学词与外来词;修正 el sinus→el seno)、it 25(合法)、de 3(修正 ander→andere)、la 67(中世纪/新拉丁语派生;删除 12 个无依据的近代造词)。
- 运行:`node tools/audit_vocab.js --out audit.json`;`python tools/spellcheck_vocab.py <dictDir> --out spell.json`(词典放在 scratchpad/dict)。

**v0.45(2026-09-13)词根故事第 7–9 批 + 德语第 3 批**:`root_stories7.js`(长尾:tir/scend/lent/super/mag/fig/her/orig/sat/turb/vad/nomos/phor/gran/terr2/vol2/tetr/thanat/ambi/aper/xero/tourn/car/guard/gir/tri/de/dem/ify/tempt/vag/crypt/gon/hem/lith/ox/tax/top/trop/arbit/cens/ego/foli/lax/liqu/orn/prec/pugn/sever/spers/stup/ting/tut 等 50 篇 + 罗曼语变体别名),`root_stories8.js`(拉丁词族 95 篇:aqu/carn/bell/mil/brev/vulg/quer/tac/sept/mur/cinct/sculp/ov/pud/cop/nex/custod/lib/libr/iter/frat/herman/dext/rog/scind/juv/juven/al/hon/man3/equ2/caball/per/vigil/pict/natat/pecu/avi/miser/cup/estim/morb/aed/glor/puer/ferr/fle/lic/fiss/od2/sepul/lucr/silv/niv/arbor/herb/bov/serp/unct/aur/hor2/re2/parv/felic/gaud/can/lup/leo/semin/caus/vent/vet/rub/frig/fund/verd/pauper/alter/ante/camin/pont/femin/coqu/manduc/pluv/pav/obliv/barc/luct/salv/plang/cort/joc/coup/gouv/hero/dulc/rich/vill/bel/trav/pays/schol/camb/soir + 约 350 条法/西/意专属词干别名,如 sav→sci、cœur→cord、puebl→pop、chiud→clav),`root_stories9.js`(希腊组合形式与前缀 78 篇:lacrim/contra/castr/tachy/morph/soph/cosm/therm/dyn/mania/eu/less/ful/agog/chrom/gastr/iatr/kilo/orth/plast/phag/sphere/fum/gymn/dendr/ethn/oste/spor/ax/pyr/techn/mech/hypo/paleo/dys/derm/neur/bibl/gam/pneum/schiz/xen/nec/venat/hepat/hist/lip/phyt/plut/rhin/sarc/scler/som/stereo/therio/pleb/post/extra/semi/hol/bar/arithm/ichthy/pseudo/rhiz/zym/pleth/brady/potam/thalass/pyret/nous/phys/mus/funct/zone/charact/cuss/arg/cancel + deMap 补充),`root_stories_de3.js`(73 篇:与拉丁 id 同名的德语本族词干/词缀 -in/-ur/un-/Mitte/-arm/holen/legen/fallen/fest/malen/neigen/Sonne/Haut/Not/-ung/an-/Auge/singen/Mond/passen/-bar/rot/-tum/Tod/mit-/Art/Mund + -chen/-reich/-frei/-ei/-ling/-haft/-ik/Ur-/fassen/aus-/treten/-wert/warten/greifen/fördern/-sam/ein-/lassen/-fähig/Land/nach-/über-/steigen/-nis/Arbeit/Stadt/Tag/Wasser/nutzen/Ehre/Sorge/hängen/Rück-/tun/Jahr/gut/unter-/Berg/schneiden/Schuld/treu/ent-/treiben/brennen/stoßen/Stimme/merken)。`rootStory()` 新增拉丁语回退:la 的 id 若与共用故事 key 相同直接取共用故事(la 词根 id 本就是拉丁词干)。验证脚本新增「别名泄漏」检查:别名 id 若同时是德语本族词干且无 de 故事则报警(已清零)。**现状:共用故事 759,德语 173,别名 555;有故事覆盖:英 3880/5858,法 3677/5651,西 3642/5666,意 3683/5677,德 2885/6607,拉 4132/4970;laMap 目标全部存在;共用词根仍缺故事 216 个(多为 2–4 词的小族)。**

**v0.46(2026-09-13)第 10 批 + 德语第 4 批**:`root_stories10.js`(最后一批罗曼语专属词干别名 ~160 条 + 35 篇小词族:metu/necess/alacr/cond/ost/tabul/veloc/nigr/macro/peri/mis/ont/pan2/nub/bucc/auris/soror/matin/fenestr/lect/mutt/rue/boat/mêm/spath/eccles/papyr/quirit/calce/percont/mensa/denar/coch/mulier/tocc),`root_stories_de4.js`(59 篇:ziehen/Macht/hoch/Wechsel/brauchen/fließen/schauen/wirken/halb/heben/schätzen/drehen/rühren/spannen/-mäßig/neben/gegen/selbst/fragen/Ende/Luft/um-/Nacht/bitten/weit/schießen/helfen/Glück/ander/biegen/sparen/wach/Dauer/klagen/rüsten/Zeit/Schule/kochen/Sieg/Herz/Meer/-los/Geld/Tür/Tisch/Bahn/be-/rechnen/Streit/gelten/Haupt/Leid/tauschen/Erbe/pflegen/Reiz/Steuer/wiegen/Strafe)。**现状:共用 794,德语 232,别名 717;覆盖:英 3888/5858,法 3751/5651,西 3700/5666,意 3791/5677,德 3469/6607,拉 4132/4970;共用词根只剩 37 个无故事(全是日耳曼/来源不明的罗曼语词:regal、march、gan、empez、niñ、rêv、bât、tomb、dans、petit、blanc、besoin、toma、busc、hall、bamb、bleu、frapp、perr、cam、call、scarp、sping、pequeñ、bianc…——按标准不硬编故事)。** 未覆盖的词主要是 topic/core/germ/arab/celt 分层标签(约 9100 词,本无词根)和德语其余 ~520 个本族词干。

**v0.47(2026-09-13)德语第 5 批** `root_stories_de5.js`(42 篇:Freund/tief/stark/warm/Anfang/lachen/bringen/Feuer/Stein/Blume/Tier/Kopf/Farbe/eins/Zweifel/ganz/waschen/fühlen/Lohn/Preis/setzen/Bett/ab-/richten/bleiben/Blut/Lust/Schutz/klingen/Lob/schicken/sperren/mischen/Mühe/prägen/Regel/sicher/Stamm/Stufe/Erz-/Zwischen-/Staat)。**德语 274 篇,覆盖 3805/6607;其余语种不变。** 下一步:德语剩余 ~480 个本族词干(les/haus/klein/gesund/kalt/flieg/himmel/fuß/zurück/durch/sach/mensch/frau/krieg/dank/ziel/brot/straß/jung/erd/feind/schmerz/eng/schlecht/langsam/hart/klar/falsch/traum/sink/mein/trenn/üb/hinder/tast/tröst/zöger/fluss/wind/regen/eis/amt/punkt/kreis/ort/sprach/flug…)。

**v0.48(2026-09-13)德语第 6 批** `root_stories_de6.js`(29 篇:lesen/-haus/klein/gesund/kalt/fliegen/Himmel/Fuß/zurück/durch/Sache/Mensch/Frau/Krieg/Dank/Ziel/Brot/Straße/jung/Erde/Feind/Schmerz/eng/schlecht/lang/hart/klar/falsch/Traum)。**德语 303 篇,覆盖 4008/6607(60.7%)。** 剩余 ~450 个德语本族词干,下批从 sink/mein/trenn/üb/hinder/tast/tröst/zöger/Fluss/Wind/Regen/Eis/Amt/Punkt/Kreis/Ort/Sprache/Flug/Dienst/schön/schnell/hoffen/wachsen/schwimmen/Vogel/Pferd/Ding/Wald/Stern/Morgen/Abend/Milch/Schiff/schwach/König/zer-/miss-/-ig/springen/werfen/liegen/wählen/Holz/Angst/Hass/weich/leer/Ordnung/atmen/schweigen/prüfen/retten/wagen/schmecken/stiften/tauchen/quälen 起。
