/* =====================================================
   FUGA MYTHICA — VIA GRAMMATICA: a second journey, one grammar road per
   study language. Ten stations each, one topic per station: scene → rule →
   paradigm table → history note → practice. 80% passes a station and opens
   the next. The Latin road lives here (GRAM_LA); the modern-language roads
   are added by gram_de.js, gram_fr.js, gram_it.js and gram_es.js through
   GRAM_ADD(), and the road shown follows the study language (TARGET).
   Progress lives in P().gram.done keyed by station id (modern ids carry a
   language prefix, de_…), separate from the map adventure.
   ===================================================== */
const GRAM_PASS = 0.8;
const gram = { i: 0, queue: [], q: 0, right: 0, wrong: [] };

const GR_I18N = {
  zh: { gr: "语法", grTitle: "语法之路",
        grStations: "已通关", grStart: "开始练习", grBack: "← 返回路线图", grHome: "← 返回首页", grLocked: "先通过上一站", grScene: "🏛️ 场景", grRule: "📐 规则", grTable: "📊 变化表", grNotes: "📜 历史与词源",
        grQ: "第 {n} / {m} 题", grWhy: "为什么", grDone: "本站完成", grPassMark: "🎓 通关!", grRetry: "再练一次", grNext: "下一站 →", grNeed: "答对 80% 即可通关", grScore: "成绩" },
  en: { gr: "Grammar", grTitle: "The Grammar Road",
        grStations: "passed", grStart: "Start practice", grBack: "← Back to the road", grHome: "← Back to home", grLocked: "Pass the previous station first", grScene: "🏛️ Scene", grRule: "📐 Rule", grTable: "📊 Paradigm", grNotes: "📜 History & origin",
        grQ: "Question {n} / {m}", grWhy: "Why", grDone: "Station complete", grPassMark: "🎓 Passed!", grRetry: "Practise again", grNext: "Next station →", grNeed: "80% passes the station", grScore: "Score" },
  de: { gr: "Grammatik", grTitle: "Der Grammatikweg",
        grStations: "bestanden", grStart: "Übung starten", grBack: "← Zurück zur Route", grHome: "← Zur Startseite", grLocked: "Erst die Station davor bestehen", grScene: "🏛️ Szene", grRule: "📐 Regel", grTable: "📊 Formentabelle", grNotes: "📜 Geschichte & Herkunft",
        grQ: "Frage {n} / {m}", grWhy: "Warum", grDone: "Station abgeschlossen", grPassMark: "🎓 Bestanden!", grRetry: "Noch einmal", grNext: "Nächste Station →", grNeed: "80 % bestehen die Station", grScore: "Ergebnis" },
  fr: { gr: "Grammaire", grTitle: "La route de la grammaire",
        grStations: "validées", grStart: "Commencer l'exercice", grBack: "← Retour à la route", grHome: "← Accueil", grLocked: "Validez d'abord l'étape précédente", grScene: "🏛️ Scène", grRule: "📐 Règle", grTable: "📊 Tableau", grNotes: "📜 Histoire et origine",
        grQ: "Question {n} / {m}", grWhy: "Pourquoi", grDone: "Étape terminée", grPassMark: "🎓 Validée !", grRetry: "Recommencer", grNext: "Étape suivante →", grNeed: "80 % pour valider", grScore: "Score" },
  es: { gr: "Gramática", grTitle: "El camino de la gramática",
        grStations: "superadas", grStart: "Empezar la práctica", grBack: "← Volver al camino", grHome: "← Inicio", grLocked: "Supera antes la estación anterior", grScene: "🏛️ Escena", grRule: "📐 Regla", grTable: "📊 Tabla", grNotes: "📜 Historia y origen",
        grQ: "Pregunta {n} / {m}", grWhy: "Por qué", grDone: "Estación completada", grPassMark: "🎓 ¡Superada!", grRetry: "Otra vez", grNext: "Siguiente estación →", grNeed: "El 80 % supera la estación", grScore: "Resultado" },
};
Object.keys(GR_I18N).forEach(l => { if (typeof I18N !== "undefined" && I18N[l]) Object.assign(I18N[l], GR_I18N[l]); });

/* ---------- the ten Latin stations ---------- */
const GRAM_LA = [
{ id: "decl1", icon: "🏺",
  name: { zh: "第一变格法 · 阿里阿德涅的线", en: "First declension · Ariadne's thread" },
  scene: { zh: "阿里阿德涅把线团交给忒修斯。拉丁语里,同一个「女孩」会随着她在句中的角色换一个词尾:她做主语是 puella,被看见是 puellam,东西属于她是 puellae。词尾就是语法。",
           en: "Ariadne hands Theseus the thread. In Latin the same girl changes her ending with her role in the sentence: as subject puella, as object puellam, as owner puellae. The ending is the grammar." },
  rule: { zh: "第一变格法的词以 -a 结尾,绝大多数是阴性(例外:nauta 水手、poeta 诗人、agricola 农夫,都是男人做的职业,所以是阳性)。认准词尾:-a 主格,-am 宾格,-ae 属格/与格,-ā 夺格。复数的 -ae 是主格,-ās 是宾格,-ārum 是属格。",
          en: "First-declension nouns end in -a and are nearly all feminine (the exceptions — nauta a sailor, poeta a poet, agricola a farmer — are men's trades, and so masculine). Learn the endings: -a nominative, -am accusative, -ae genitive and dative, -ā ablative; in the plural -ae nominative, -ās accusative, -ārum genitive." },
  table: { cap: { zh: "puella 女孩(阴性)", en: "puella, a girl (feminine)" },
    head: [{ zh: "格", en: "Case" }, { zh: "单数", en: "Singular" }, { zh: "复数", en: "Plural" }, { zh: "作用", en: "Role" }],
    rows: [["主格 nom.|Nominative", "puella", "puellae", "主语|subject"],
           ["属格 gen.|Genitive", "puellae", "puellārum", "的|of"],
           ["与格 dat.|Dative", "puellae", "puellīs", "给|to, for"],
           ["宾格 acc.|Accusative", "puellam", "puellās", "直接宾语|direct object"],
           ["夺格 abl.|Ablative", "puellā", "puellīs", "用、凭、在|by, with, in"]] },
  notes: { zh: "「变格」拉丁语叫 declinatio(「弯下去」——词从主格「立着」的形状弯向别的形状),语法家把主格叫 casus rectus(直立的格),其余叫 casus obliqui(倾斜的格)。英语的 case、法语 cas 都来自 casus「落下」。夺格 ablativus 来自 auferre「拿走」,是拉丁语独有的格,希腊语没有。",
          en: "Declension is declinatio, a bending away: the word leans out of its upright nominative shape. Grammarians called the nominative casus rectus, the upright case, and the rest casus obliqui, the slanting ones. English case and French cas come from casus, a falling. The ablative, ablativus, is from auferre, to carry off — a case Latin has and Greek does not." },
  ex: [
    { q: { zh: "「女孩们」(复数主格)是哪个?", en: "Which form is 'the girls' (nominative plural)?" }, opts: ["puellae", "puellam", "puellās", "puellārum"], a: 0,
      why: { zh: "复数主格用 -ae。puellam 是单数宾格,puellās 是复数宾格,puellārum 是复数属格。", en: "The nominative plural ends in -ae. Puellam is accusative singular, puellās accusative plural, puellārum genitive plural." } },
    { q: { zh: "Rēgīna puellam videt(王后看见女孩)。puellam 是什么格?", en: "Rēgīna puellam videt — the queen sees the girl. What case is puellam?" },
      opts: [{ zh: "宾格(直接宾语)", en: "Accusative (direct object)" }, { zh: "主格(主语)", en: "Nominative (subject)" }, { zh: "属格(所属)", en: "Genitive (possession)" }, { zh: "夺格(工具)", en: "Ablative (means)" }], a: 0,
      why: { zh: "被「看见」的人是动作的承受者,用宾格 -am。主语 rēgīna 用主格。", en: "The person seen receives the action, so she stands in the accusative -am. The subject rēgīna is nominative." } },
    { q: { zh: "「女孩们的王冠」corōna ___ 该用哪个?", en: "The crown of the girls: corōna ___" }, opts: ["puellārum", "puellīs", "puellās", "puella"], a: 0,
      why: { zh: "「…的」用属格,复数属格是 -ārum。罗曼语后来丢掉了这个词尾,改用 de + 名词来表示所属。", en: "Of something is the genitive, and the genitive plural ends in -ārum. Romance later dropped it and used de plus the noun instead." } },
    { q: { zh: "下面哪个词虽然以 -a 结尾,却是阳性?", en: "Which of these -a nouns is masculine?" }, opts: ["nauta", "aqua", "terra", "stella"], a: 0,
      why: { zh: "nauta(水手)、poeta(诗人)、agricola(农夫)按第一变格法变化,但指的是男人,所以是阳性:nauta bonus(好水手),不是 bona。", en: "Nauta (sailor), poeta (poet) and agricola (farmer) decline like puella but denote men, so they are masculine: nauta bonus, not bona." } },
    { q: { zh: "「用水」(夺格单数)是哪个?", en: "With water (ablative singular)?" }, opts: ["aquā", "aquam", "aquae", "aquās"], a: 0,
      why: { zh: "夺格单数是长音 -ā,表示工具、方式、处所。它和主格 aqua 只差一个长音符号,古代碑文常常不标。", en: "The ablative singular is long -ā, used for means, manner and place. It differs from the nominative only by vowel length, which inscriptions often leave unmarked." } },
    { q: { zh: "Puellae rosam dō(我把玫瑰给女孩)。puellae 在这里是什么格?", en: "Puellae rosam dō — I give a rose to the girl. What case is puellae here?" },
      opts: [{ zh: "与格(给谁)", en: "Dative (to whom)" }, { zh: "属格(谁的)", en: "Genitive (whose)" }, { zh: "复数主格", en: "Nominative plural" }, { zh: "夺格", en: "Ablative" }], a: 0,
      why: { zh: "-ae 这个形有三种可能:属格单数、与格单数、主格复数。要靠句子判断。这里有「给」的动词 dō,所以是与格。", en: "The form -ae can be genitive singular, dative singular or nominative plural; the sentence decides. With dō, to give, it is dative." } },
    { q: { zh: "「女孩们看见岛」Puellae īnsulam vident。主语是哪个词?", en: "Puellae īnsulam vident — the girls see the island. Which word is the subject?" }, opts: ["puellae", "īnsulam", "vident", { zh: "没有主语", en: "there is none" }], a: 0,
      why: { zh: "动词 vident 是复数第三人称,所以主语是复数:puellae(主格复数)。īnsulam 带 -am,是宾语。", en: "The verb vident is third person plural, so the subject is plural: puellae. Īnsulam with -am is the object." } },
    { q: { zh: "拉丁语的语序比较自由,是因为:", en: "Latin word order is relatively free because:" },
      opts: [{ zh: "词尾已经标明了每个词的角色", en: "the endings already mark each word's role" }, { zh: "罗马人不讲究语法", en: "the Romans were careless about grammar" }, { zh: "动词必须放句末", en: "the verb must stand last" }, { zh: "名词没有单复数", en: "nouns have no number" }], a: 0,
      why: { zh: "Puella rosam videt 和 Rosam puella videt 意思一样,因为 -am 已经标明谁是宾语。动词常在句末是习惯,不是规则。", en: "Puella rosam videt and Rosam puella videt mean the same, because -am already marks the object. Verb-final order is a habit, not a rule." } },
  ] },

{ id: "decl2", icon: "⚔️",
  name: { zh: "第二变格法 · 国王与战争", en: "Second declension · King and war" },
  scene: { zh: "米诺斯王(dominus)、他的宫殿、还有那场战争(bellum)。第二变格法管着两类词:-us 结尾的阳性,和 -um 结尾的中性。中性有一条铁律:主格和宾格永远同形。",
           en: "King Minos (dominus), his palace, and the war (bellum). The second declension holds two kinds: masculines in -us and neuters in -um. The neuter follows one iron law: nominative and accusative are always identical." },
  rule: { zh: "阳性 dominus:-us 主格、-um 宾格、-ī 属格、-ō 与格/夺格;复数 -ī 主格、-ōs 宾格、-ōrum 属格、-īs 与格/夺格。中性 bellum:单数主格=宾格=bellum,复数主格=宾格=bella(中性复数永远以 -a 结尾)。另有 puer(男孩)、ager(田地)一类,主格没有 -us。",
          en: "Masculine dominus: -us nominative, -um accusative, -ī genitive, -ō dative and ablative; plural -ī, -ōs, -ōrum, -īs. Neuter bellum: nominative equals accusative in the singular, and in the plural both are bella — a neuter plural always ends in -a. A few, like puer (boy) and ager (field), have no -us in the nominative." },
  table: { cap: { zh: "dominus 主人(阳)· bellum 战争(中)", en: "dominus, lord (m.) · bellum, war (n.)" },
    head: [{ zh: "格", en: "Case" }, { zh: "阳性单/复", en: "Masc. sg./pl." }, { zh: "中性单/复", en: "Neut. sg./pl." }],
    rows: [["主格 nom.|Nominative", "dominus / dominī", "bellum / bella"],
           ["属格 gen.|Genitive", "dominī / dominōrum", "bellī / bellōrum"],
           ["与格 dat.|Dative", "dominō / dominīs", "bellō / bellīs"],
           ["宾格 acc.|Accusative", "dominum / dominōs", "bellum / bella"],
           ["夺格 abl.|Ablative", "dominō / dominīs", "bellō / bellīs"]] },
  notes: { zh: "中性 neutrum 是希腊语 oudeteron 的翻译,意思是「两者都不是」——既非阳性也非阴性。中性复数以 -a 结尾这条规则极其顽固:它一直活到意大利语里(il braccio 手臂 → le braccia 双臂、l'uovo → le uova 蛋),是拉丁中性在罗曼语里最后的遗迹。",
          en: "Neuter, neutrum, translates Greek oudeteron, neither of the two. The rule that neuter plurals end in -a proved extraordinarily tough: it survives in Italian (il braccio, the arm, becomes le braccia; l'uovo becomes le uova) — the last trace of the Latin neuter in Romance." },
  ex: [
    { q: { zh: "「战争们」(中性复数主格)是哪个?", en: "Wars (neuter nominative plural)?" }, opts: ["bella", "bellōrum", "bellum", "bellīs"], a: 0,
      why: { zh: "中性复数主格和宾格都是 -a。注意 bella 也可能是形容词 bellus 的阴性,靠上下文区分。", en: "Neuter plural nominative and accusative both end in -a. Note that bella can also be the feminine of the adjective bellus; context decides." } },
    { q: { zh: "Dominus servum vocat。谁在叫谁?", en: "Dominus servum vocat. Who calls whom?" },
      opts: [{ zh: "主人叫仆人", en: "the master calls the servant" }, { zh: "仆人叫主人", en: "the servant calls the master" }, { zh: "两人互相叫", en: "they call each other" }, { zh: "无法判断", en: "impossible to tell" }], a: 0,
      why: { zh: "dominus 带 -us 是主格(主语),servum 带 -um 是宾格(宾语)。即使把词序调成 Servum dominus vocat,意思也不变。", en: "Dominus with -us is nominative, the subject; servum with -um is accusative, the object. Reversing the order changes nothing." } },
    { q: { zh: "「国王的儿子」fīlius ___", en: "The son of the king: fīlius ___" }, opts: ["dominī", "dominō", "dominum", "dominīs"], a: 0,
      why: { zh: "属格单数 -ī 表示所属。字典里一个名词总是给两个形:dominus, dominī——第二个就是属格,用来判断它属于哪个变格法。", en: "The genitive singular -ī marks possession. A dictionary always gives two forms, dominus, dominī: the second tells you which declension the noun belongs to." } },
    { q: { zh: "中性词的哪两个格永远同形?", en: "Which two cases of a neuter noun are always identical?" },
      opts: [{ zh: "主格与宾格", en: "nominative and accusative" }, { zh: "属格与与格", en: "genitive and dative" }, { zh: "与格与夺格", en: "dative and ablative" }, { zh: "主格与属格", en: "nominative and genitive" }], a: 0,
      why: { zh: "这是所有中性词的通则,不只第二变格法:bellum/bellum、corpus/corpus、mare/mare。所以中性句子要靠动词和语境判断谁是主语。", en: "This holds for every neuter noun, not only the second declension: bellum, corpus, mare. With neuters you rely on the verb and the context to find the subject." } },
    { q: { zh: "puer 的属格是哪个?", en: "What is the genitive of puer?" }, opts: ["puerī", "pueris", "puerum", "puerō"], a: 0,
      why: { zh: "puer 虽然主格没有 -us,但属格 puerī 暴露了它是第二变格法。ager 则在属格里掉了 e:agrī。", en: "Puer has no -us, but its genitive puerī shows it is second declension. Ager loses its e in the genitive: agrī." } },
    { q: { zh: "「在战争中」(夺格单数)是哪个?", en: "In war (ablative singular)?" }, opts: ["bellō", "bellum", "bella", "bellī"], a: 0,
      why: { zh: "中性第二变格法的夺格单数也是 -ō,和阳性一样。In bellō 就是「在战争中」。", en: "The neuter ablative singular is -ō, like the masculine. In bellō means in war." } },
    { q: { zh: "Dominī servōs vocant 的意思是:", en: "Dominī servōs vocant means:" },
      opts: [{ zh: "主人们叫仆人们", en: "the masters call the servants" }, { zh: "主人的仆人在叫", en: "the master's servants call" }, { zh: "仆人们叫主人", en: "the servants call the master" }, { zh: "主人叫仆人", en: "the master calls the servant" }], a: 0,
      why: { zh: "动词 vocant 是复数,所以 dominī 是主格复数(不是属格单数),servōs 是宾格复数。动词的人称数是判断的关键。", en: "The verb vocant is plural, so dominī is nominative plural rather than genitive singular, and servōs is accusative plural. The verb's number settles the ambiguity." } },
    { q: { zh: "意大利语 le uova(蛋,复数)保留了拉丁语的什么?", en: "Italian le uova (eggs) preserves what from Latin?" },
      opts: [{ zh: "中性复数的 -a 词尾", en: "the -a of the neuter plural" }, { zh: "属格复数", en: "the genitive plural" }, { zh: "夺格", en: "the ablative" }, { zh: "呼格", en: "the vocative" }], a: 0,
      why: { zh: "拉丁 ōvum / ōva(单/复)。意大利语把中性复数的 -a 当成了阴性形,于是 uova 成了阴性复数——拉丁中性的化石。", en: "Latin ōvum, plural ōva. Italian reinterpreted the neuter plural -a as a feminine form, so uova became a feminine plural — a fossil of the Latin neuter." } },
  ] },

{ id: "adj", icon: "🛡️",
  name: { zh: "形容词一致 · 勇敢的英雄", en: "Agreement · The brave hero" },
  scene: { zh: "忒修斯是 fortis(勇敢的),他的剑是 magnus(大的),他的任务是 difficile(困难的)。拉丁语的形容词必须跟着名词走:同性、同数、同格——三样都要对上。",
           en: "Theseus is fortis, brave; his sword is magnus, great; his task is difficile, hard. A Latin adjective must follow its noun in gender, number and case — all three at once." },
  rule: { zh: "第一/二变格法的形容词有三套词尾:阳性 -us(像 dominus)、阴性 -a(像 puella)、中性 -um(像 bellum)。形容词不必紧挨着名词,但必须性数格一致:puella bona、dominus bonus、bellum bonum;复数 puellae bonae、dominī bonī、bella bona。",
          en: "An adjective of the first and second declension has three sets of endings: masculine -us like dominus, feminine -a like puella, neuter -um like bellum. It need not stand next to its noun, but it must agree in gender, number and case: puella bona, dominus bonus, bellum bonum; in the plural puellae bonae, dominī bonī, bella bona." },
  table: { cap: { zh: "bonus, bona, bonum 好的", en: "bonus, bona, bonum — good" },
    head: [{ zh: "格", en: "Case" }, { zh: "阳 m.", en: "Masc." }, { zh: "阴 f.", en: "Fem." }, { zh: "中 n.", en: "Neut." }],
    rows: [["主格单|Nom. sg.", "bonus", "bona", "bonum"],
           ["属格单|Gen. sg.", "bonī", "bonae", "bonī"],
           ["宾格单|Acc. sg.", "bonum", "bonam", "bonum"],
           ["夺格单|Abl. sg.", "bonō", "bonā", "bonō"],
           ["主格复|Nom. pl.", "bonī", "bonae", "bona"],
           ["宾格复|Acc. pl.", "bonōs", "bonās", "bona"]] },
  notes: { zh: "罗马人把形容词叫 nōmen adiectīvum(「加上去的名词」——adicere 投向、加上),名词叫 nōmen substantīvum(「自立的名词」)。英语 adjective、法语 adjectif 都是这个 adiectīvum。所以在古代语法里,形容词和名词本是一家,这也解释了为什么它们用同一套词尾。",
          en: "The Romans called the adjective nōmen adiectīvum, the added noun, from adicere, to throw to; the noun proper was nōmen substantīvum, the self-standing noun. English adjective and French adjectif come from adiectīvum. In ancient grammar the two were one family, which is why they share the same endings." },
  ex: [
    { q: { zh: "「好水手」(nauta 是阳性)该写成:", en: "A good sailor, with masculine nauta:" }, opts: ["nauta bonus", "nauta bona", "nautam bonus", "nautae bona"], a: 0,
      why: { zh: "nauta 虽然长得像第一变格法的阴性词,却是阳性,所以形容词用阳性 bonus。性跟着词的实际性别,不跟着词尾长相。", en: "Nauta looks like a first-declension feminine but is masculine, so the adjective is bonus. Gender follows the word's actual gender, not the look of its ending." } },
    { q: { zh: "Magna īnsula 中 magna 为什么用 -a?", en: "In magna īnsula, why does magna end in -a?" },
      opts: [{ zh: "因为 īnsula 是阴性单数主格", en: "because īnsula is feminine nominative singular" }, { zh: "因为形容词总是以 -a 结尾", en: "because adjectives always end in -a" }, { zh: "因为它是复数", en: "because it is plural" }, { zh: "因为它是中性", en: "because it is neuter" }], a: 0,
      why: { zh: "形容词的词尾由它修饰的名词决定:īnsula 阴性、单数、主格,magna 就取阴性单数主格。", en: "The adjective's ending is dictated by its noun: īnsula is feminine, singular, nominative, so magna takes those too." } },
    { q: { zh: "「大战争们」(中性复数主格)是:", en: "Great wars (neuter nominative plural):" }, opts: ["bella magna", "bellī magnī", "bellae magnae", "bellōs magnōs"], a: 0,
      why: { zh: "中性复数主格名词和形容词都以 -a 结尾:bella magna。这是整个拉丁语最容易和阴性单数混淆的形。", en: "Both noun and adjective take -a in the neuter nominative plural: bella magna. It is the form most easily confused with a feminine singular." } },
    { q: { zh: "Rēgīna bona rosās dat。bona 修饰谁?", en: "Rēgīna bona rosās dat. What does bona describe?" }, opts: ["rēgīna", "rosās", { zh: "动词 dat", en: "the verb dat" }, { zh: "无法判断", en: "impossible to tell" }], a: 0,
      why: { zh: "bona 是阴性单数主格,只能和同为阴性单数主格的 rēgīna 一致。rosās 是宾格复数,要配 bonās。", en: "Bona is feminine nominative singular and can only agree with rēgīna. Rosās is accusative plural and would need bonās." } },
    { q: { zh: "「和好朋友一起」cum amīcō ___", en: "With a good friend: cum amīcō ___" }, opts: ["bonō", "bonus", "bonum", "bonī"], a: 0,
      why: { zh: "介词 cum 要求夺格,amīcō 是夺格,形容词也必须是夺格 bonō。介词管名词,名词管形容词。", en: "Cum takes the ablative, amīcō is ablative, so the adjective must be ablative too: bonō. The preposition governs the noun, and the noun governs the adjective." } },
    { q: { zh: "下面哪一组不一致?", en: "Which pair does NOT agree?" }, opts: ["puellam bona", "puellam bonam", "puellae bonae", "puellā bonā"], a: 0,
      why: { zh: "puellam 是宾格,bona 是主格,格不一致。正确是 puellam bonam。", en: "Puellam is accusative while bona is nominative: the cases clash. The correct form is puellam bonam." } },
    { q: { zh: "形容词可以离开它的名词很远吗?", en: "May an adjective stand far from its noun?" },
      opts: [{ zh: "可以,因为词尾已经把它们绑在一起", en: "yes — the endings already bind them together" }, { zh: "不可以,必须紧挨着", en: "no, it must stand next to it" }, { zh: "只有诗歌里可以", en: "only in poetry" }, { zh: "只有中性词可以", en: "only with neuters" }], a: 0,
      why: { zh: "散文里也常常分开,诗歌里更是把它们甩到句子两端(所谓「黄金句」)。读者靠词尾把它们重新配对。", en: "Prose separates them often and poetry throws them to opposite ends of the line (the so-called golden line). The reader pairs them again by their endings." } },
    { q: { zh: "拉丁语 nōmen adiectīvum 的字面意思是:", en: "Latin nōmen adiectīvum literally means:" },
      opts: [{ zh: "加上去的名词", en: "the added noun" }, { zh: "描写的词", en: "the describing word" }, { zh: "第二个名词", en: "the second noun" }, { zh: "小名词", en: "the little noun" }], a: 0,
      why: { zh: "adicere = ad(向)+ iacere(投)——「投加到名词上的词」。英语 adjective 就是它。", en: "Adicere is ad plus iacere, to throw toward: the word thrown onto the noun. English adjective is that word." } },
  ] },

{ id: "pres", icon: "🔥",
  name: { zh: "动词现在时 · 我爱,我在", en: "Present tense · I love, I am" },
  scene: { zh: "俄耳甫斯唱道:「我爱」(amō)、「我歌唱」(cantō)、「我在」(sum)。拉丁语的动词不需要人称代词——词尾已经告诉你是谁在做:-ō 我、-s 你、-t 他。",
           en: "Orpheus sings: amō, I love; cantō, I sing; sum, I am. A Latin verb needs no pronoun — the ending already says who acts: -ō I, -s you, -t he or she." },
  rule: { zh: "第一变位(词干以 -ā- 结尾,如 amāre 爱):amō, amās, amat, amāmus, amātis, amant。人称词尾是 -ō/-m、-s、-t、-mus、-tis、-nt,这套词尾贯穿全部时态。最常用的动词 esse(是)不规则:sum, es, est, sumus, estis, sunt。",
          en: "First conjugation (stem in -ā-, as in amāre, to love): amō, amās, amat, amāmus, amātis, amant. The personal endings -ō/-m, -s, -t, -mus, -tis, -nt run through every tense. The commonest verb, esse, to be, is irregular: sum, es, est, sumus, estis, sunt." },
  table: { cap: { zh: "amāre 爱 · esse 是", en: "amāre, to love · esse, to be" },
    head: [{ zh: "人称", en: "Person" }, { zh: "amāre", en: "amāre" }, { zh: "esse", en: "esse" }, { zh: "意思", en: "Meaning" }],
    rows: [["1 单|1 sg.", "amō", "sum", "我|I"],
           ["2 单|2 sg.", "amās", "es", "你|you"],
           ["3 单|3 sg.", "amat", "est", "他/她/它|he, she, it"],
           ["1 复|1 pl.", "amāmus", "sumus", "我们|we"],
           ["2 复|2 pl.", "amātis", "estis", "你们|you (pl.)"],
           ["3 复|3 pl.", "amant", "sunt", "他们|they"]] },
  notes: { zh: "人称词尾来自印欧语的人称代词,与动词长在了一起:-mus 和 nōs(我们)、-tis 和 vōs(你们)同源。这就是为什么拉丁语不必说 ego amō——除非要强调「是我爱」。西班牙语 amo、意大利语 amo 至今保持这个习惯,法语却因为词尾读音磨平,又把代词找了回来:j'aime。",
          en: "The personal endings come from Indo-European pronouns fused onto the verb: -mus is kin to nōs, we, and -tis to vōs, you. That is why Latin need not say ego amō unless it means I am the one who loves. Spanish amo and Italian amo keep the habit; French, whose endings wore away in speech, took the pronoun back: j'aime." },
  ex: [
    { q: { zh: "「他们爱」是哪个?", en: "They love:" }, opts: ["amant", "amat", "amāmus", "amātis"], a: 0,
      why: { zh: "第三人称复数词尾是 -nt。amat 是「他爱」,amāmus 是「我们爱」,amātis 是「你们爱」。", en: "The third person plural ends in -nt. Amat is he loves, amāmus we love, amātis you love." } },
    { q: { zh: "Puellae cantant 的意思是:", en: "Puellae cantant means:" },
      opts: [{ zh: "女孩们在唱歌", en: "the girls are singing" }, { zh: "女孩在唱歌", en: "the girl is singing" }, { zh: "给女孩唱歌", en: "they sing to the girl" }, { zh: "女孩的歌", en: "the girl's song" }], a: 0,
      why: { zh: "动词 cantant 是复数,所以 puellae 必须读成主格复数。动词的数能帮你消解 -ae 的歧义。", en: "Cantant is plural, so puellae must be nominative plural. The verb's number resolves the ambiguity of -ae." } },
    { q: { zh: "「我们是」是哪个?", en: "We are:" }, opts: ["sumus", "estis", "sunt", "est"], a: 0,
      why: { zh: "esse 的第一人称复数是 sumus。注意 su- 和 es- 两个词干交替,这是印欧语最古老的动词之一的遗迹(英语 is/are 同样如此)。", en: "The first person plural of esse is sumus. Note the alternation of the stems su- and es-, a relic of one of the oldest Indo-European verbs — English is and are show the same split." } },
    { q: { zh: "拉丁语里 ego amō 和 amō 的区别是:", en: "The difference between ego amō and amō is:" },
      opts: [{ zh: "ego 是强调「我」", en: "ego emphasises the I" }, { zh: "ego 是必须的", en: "ego is obligatory" }, { zh: "意思完全不同", en: "they mean different things" }, { zh: "ego 表示过去", en: "ego marks the past" }], a: 0,
      why: { zh: "词尾 -ō 已经表示「我」,加上 ego 是为了对比或强调:Ego amō, tū nōn amās(我爱,你不爱)。", en: "The ending -ō already says I; ego is added for contrast or emphasis: Ego amō, tū nōn amās — I love, you do not." } },
    { q: { zh: "「你看见」vidēs 的词尾 -s 表示:", en: "In vidēs, you see, the ending -s marks:" },
      opts: [{ zh: "第二人称单数", en: "second person singular" }, { zh: "复数", en: "plural" }, { zh: "宾格", en: "the accusative" }, { zh: "将来时", en: "the future" }], a: 0,
      why: { zh: "-s 是第二人称单数的标记,在所有时态里都成立:amās、amābās、amāvistī。名词的 -s 则是另一回事(如 rēgēs)。", en: "-s marks the second person singular in every tense: amās, amābās, amāvistī. The -s of nouns such as rēgēs is a different matter." } },
    { q: { zh: "Nauta īnsulam amat。谁爱岛?", en: "Nauta īnsulam amat. Who loves the island?" },
      opts: [{ zh: "水手", en: "the sailor" }, { zh: "岛", en: "the island" }, { zh: "两者互相", en: "they love each other" }, { zh: "没说", en: "it is not said" }], a: 0,
      why: { zh: "nauta 是主格(主语),īnsulam 带 -am 是宾格(宾语),动词 amat 是单数第三人称,和 nauta 对应。", en: "Nauta is nominative, the subject; īnsulam with -am is the object; and the singular amat matches nauta." } },
    { q: { zh: "「你们在」是哪个?", en: "You (plural) are:" }, opts: ["estis", "sumus", "est", "sunt"], a: 0,
      why: { zh: "第二人称复数 estis。它的词尾 -tis 与代词 vōs 同源,法语 vous êtes 里的 -tes 就是它的后代。", en: "Second person plural estis. Its ending -tis is kin to the pronoun vōs, and survives in the -tes of French vous êtes." } },
    { q: { zh: "字典里动词 amō 后面常跟着 amāre,这个 amāre 是:", en: "Dictionaries list amō, then amāre. Amāre is:" },
      opts: [{ zh: "不定式,用来判断变位类别", en: "the infinitive, which tells you the conjugation" }, { zh: "过去式", en: "the past tense" }, { zh: "命令式", en: "the imperative" }, { zh: "被动态", en: "the passive" }], a: 0,
      why: { zh: "不定式的 -āre/-ēre/-ere/-īre 分别对应第一到第四变位。这就像名词要给属格一样,是辨别词类的钥匙。", en: "The infinitive endings -āre, -ēre, -ere, -īre mark the first to fourth conjugations, just as the genitive marks a noun's declension." } },
  ] },

{ id: "prep", icon: "🚪",
  name: { zh: "介词与格 · 进迷宫,还是在迷宫里", en: "Prepositions · Into the maze, or in it" },
  scene: { zh: "忒修斯走进迷宫(in labyrinthum),然后在迷宫里(in labyrinthō)摸索。同一个介词 in,换一个格,意思就从「进入」变成「在里面」。",
           en: "Theseus walks into the labyrinth, in labyrinthum, and then gropes about inside it, in labyrinthō. One preposition, two cases: motion into, or rest within." },
  rule: { zh: "宾格表示「去向、运动」:ad(到…去)、in(进入)、per(穿过)、trāns(越过)。夺格表示「位置、来源、方式」:in(在…里)、ex/ē(从…出来)、dē(从…下来、关于)、cum(和…一起)、sine(没有)、sub(在…下)、prō(为了)。in 和 sub 两面都能用,全看格。",
          en: "The accusative marks motion toward: ad (to), in (into), per (through), trāns (across). The ablative marks place, source and manner: in (in), ex or ē (out of), dē (down from, about), cum (with), sine (without), sub (under), prō (for). In and sub take either case, and the case decides the sense." },
  table: { cap: { zh: "同一个介词,两种格", en: "One preposition, two cases" },
    head: [{ zh: "短语", en: "Phrase" }, { zh: "格", en: "Case" }, { zh: "意思", en: "Meaning" }],
    rows: [["in īnsulam", "宾格 acc.|accusative", "到岛上去|onto the island"],
           ["in īnsulā", "夺格 abl.|ablative", "在岛上|on the island"],
           ["ad portam", "宾格 acc.|accusative", "到门口|to the gate"],
           ["ex aquā", "夺格 abl.|ablative", "从水里出来|out of the water"],
           ["cum amīcīs", "夺格 abl.|ablative", "和朋友们一起|with friends"],
           ["sine timōre", "夺格 abl.|ablative", "毫无恐惧|without fear"]] },
  notes: { zh: "罗马人把介词叫 praepositiō(「放在前面的东西」),因为它通常站在名词前面。有趣的是 cum 跟人称代词时要贴在后面写成一个词:mēcum(和我一起)、tēcum、nōbīscum——这是更古老的语序留下的化石。英语 with me 的词序反而是新的。",
          en: "The Romans called it praepositiō, a placing-in-front, since it usually stands before its noun. Curiously, cum is written after the personal pronouns and fused to them: mēcum, with me, tēcum, nōbīscum — a fossil of an older word order. English with me, by contrast, is the newer pattern." },
  ex: [
    { q: { zh: "「走进岛」该用哪个?", en: "Going onto the island:" }, opts: ["in īnsulam", "in īnsulā", "in īnsulae", "in īnsulīs"], a: 0,
      why: { zh: "有运动、有去向,用宾格 -am。如果是「在岛上生活」,就要用夺格 in īnsulā。", en: "Motion toward takes the accusative -am. Living on the island would take the ablative, in īnsulā." } },
    { q: { zh: "cum 后面必须跟哪个格?", en: "Cum must be followed by which case?" },
      opts: [{ zh: "夺格", en: "the ablative" }, { zh: "宾格", en: "the accusative" }, { zh: "属格", en: "the genitive" }, { zh: "与格", en: "the dative" }], a: 0,
      why: { zh: "cum 永远配夺格:cum amīcō、cum rēgīnā。它表示伴随,正是夺格的典型用法之一。", en: "Cum always takes the ablative: cum amīcō, cum rēgīnā. It expresses accompaniment, a classic ablative use." } },
    { q: { zh: "Ex aquā venit 的意思是:", en: "Ex aquā venit means:" },
      opts: [{ zh: "他从水里出来", en: "he comes out of the water" }, { zh: "他走进水里", en: "he goes into the water" }, { zh: "他在水里", en: "he is in the water" }, { zh: "他带着水", en: "he brings water" }], a: 0,
      why: { zh: "ex + 夺格表示「从…出来」。进入水里要说 in aquam(宾格)。", en: "Ex with the ablative means out of. Going into the water would be in aquam, accusative." } },
    { q: { zh: "「和我一起」拉丁语写成:", en: "With me in Latin is written:" }, opts: ["mēcum", "cum mē", "cum ego", "meus cum"], a: 0,
      why: { zh: "cum 与人称代词连写并后置:mēcum、tēcum、sēcum、nōbīscum、vōbīscum。这是古老语序的遗留。", en: "Cum is attached after the pronoun: mēcum, tēcum, sēcum, nōbīscum, vōbīscum — a survival of older word order." } },
    { q: { zh: "In silvā ambulat 中 silvā 是夺格,所以意思是:", en: "In silvā ambulat: silvā is ablative, so it means:" },
      opts: [{ zh: "他在林中散步", en: "he walks in the wood" }, { zh: "他走进树林", en: "he walks into the wood" }, { zh: "他走出树林", en: "he walks out of the wood" }, { zh: "他砍树", en: "he cuts the wood" }], a: 0,
      why: { zh: "夺格表位置:在林中走动。要表示「走进树林」得用宾格 in silvam。", en: "The ablative gives place: walking about inside the wood. Into the wood would be in silvam." } },
    { q: { zh: "下面哪个介词配宾格?", en: "Which preposition takes the accusative?" }, opts: ["ad", "ex", "cum", "sine"], a: 0,
      why: { zh: "ad(到…去)、per(穿过)、trāns(越过)配宾格;ex、cum、sine、dē 配夺格。", en: "Ad (to), per (through) and trāns (across) take the accusative; ex, cum, sine and dē take the ablative." } },
    { q: { zh: "法语 dans、西班牙语 en 都来自拉丁 in。为什么罗曼语不再区分两种格?", en: "French dans and Spanish en come from Latin in. Why did Romance stop distinguishing the two cases?" },
      opts: [{ zh: "因为名词的格词尾消失了", en: "because the case endings of nouns disappeared" }, { zh: "因为介词变多了", en: "because there were more prepositions" }, { zh: "因为语序固定了", en: "because word order became fixed" }, { zh: "因为中性消失了", en: "because the neuter disappeared" }], a: 0,
      why: { zh: "晚期拉丁语里词尾读音磨损,格的区别听不出来了,于是「进入」与「在里面」改用不同的介词或动词来表达。", en: "In late Latin the endings wore away and the case contrast became inaudible, so into and inside were expressed by different prepositions or verbs instead." } },
    { q: { zh: "「穿过迷宫」是:", en: "Through the labyrinth:" }, opts: ["per labyrinthum", "per labyrinthō", "in labyrinthō", "ex labyrinthō"], a: 0,
      why: { zh: "per 配宾格,表示穿越整个空间。ex labyrinthō 则是「从迷宫出来」。", en: "Per takes the accusative for movement through a space. Ex labyrinthō would be out of the labyrinth." } },
  ] },

{ id: "decl3", icon: "👑",
  name: { zh: "第三变格法 · 王与身体", en: "Third declension · The king and the body" },
  scene: { zh: "冥王(rēx)坐在王座上,他的名字(nōmen)无人敢说。第三变格法是最大也最乱的一类:主格千奇百怪,但属格一律是 -is,词干就藏在属格里。",
           en: "The king of the dead, rēx, sits on his throne, and his name, nōmen, no one dares say. The third declension is the largest and the wildest: the nominative takes any shape, but the genitive always ends in -is — and the stem hides there." },
  rule: { zh: "查字典记两个形:rēx, rēgis。去掉属格的 -is 得到词干 rēg-,所有其他形都加在词干上:rēgem、rēgī、rēge、rēgēs、rēgum。中性词(corpus, corporis;nōmen, nōminis)照样遵守「主格=宾格」,复数以 -a 结尾。",
          en: "Learn two forms: rēx, rēgis. Strip the genitive's -is and you have the stem rēg-, to which everything else attaches: rēgem, rēgī, rēge, rēgēs, rēgum. Neuters (corpus, corporis; nōmen, nōminis) still keep nominative equal to accusative, with -a in the plural." },
  table: { cap: { zh: "rēx 国王(阳)· corpus 身体(中)", en: "rēx, king (m.) · corpus, body (n.)" },
    head: [{ zh: "格", en: "Case" }, { zh: "单数", en: "Singular" }, { zh: "复数", en: "Plural" }],
    rows: [["主格 nom.|Nominative", "rēx / corpus", "rēgēs / corpora"],
           ["属格 gen.|Genitive", "rēgis / corporis", "rēgum / corporum"],
           ["与格 dat.|Dative", "rēgī / corporī", "rēgibus / corporibus"],
           ["宾格 acc.|Accusative", "rēgem / corpus", "rēgēs / corpora"],
           ["夺格 abl.|Ablative", "rēge / corpore", "rēgibus / corporibus"]] },
  notes: { zh: "rēx 的主格是 rēg + s 挤在一起写成 x,这种「词干末尾辅音 + s」的碰撞解释了第三变格法主格的各种怪样子:dux(< duc-s 领袖)、nox(< noct-s 夜)、urbs(城)。英语 rex、regal、regent、royal 都从这个词干来;而 rēgīna 是它的阴性。",
          en: "The nominative rēx is rēg plus s crushed into one letter, and that collision of stem-consonant with -s explains the odd shapes of third-declension nominatives: dux from duc-s, a leader; nox from noct-s, night; urbs, a city. English rex, regal, regent and royal all come from this stem, and rēgīna is its feminine." },
  ex: [
    { q: { zh: "rēx 的词干是什么?", en: "What is the stem of rēx?" }, opts: ["rēg-", "rēx-", "rē-", "rēgi-"], a: 0,
      why: { zh: "属格 rēgis 去掉 -is 就是词干 rēg-。所有其他格都建在它上面。", en: "Take the genitive rēgis and remove -is: the stem is rēg-, on which every other case is built." } },
    { q: { zh: "「国王们」(主格复数)是:", en: "Kings (nominative plural):" }, opts: ["rēgēs", "rēgum", "rēgibus", "rēgī"], a: 0,
      why: { zh: "第三变格法的主格复数(阳、阴)是 -ēs。rēgum 是属格复数,rēgibus 是与格/夺格复数。", en: "The masculine and feminine nominative plural ends in -ēs. Rēgum is genitive plural, rēgibus dative and ablative plural." } },
    { q: { zh: "corpora 是什么形?", en: "What form is corpora?" },
      opts: [{ zh: "中性复数主格/宾格", en: "neuter nominative or accusative plural" }, { zh: "阴性单数", en: "feminine singular" }, { zh: "属格单数", en: "genitive singular" }, { zh: "夺格复数", en: "ablative plural" }], a: 0,
      why: { zh: "中性复数一律 -a。英语 corpora(语料库的复数)直接借了这个形。", en: "Neuter plurals always end in -a. English borrowed the form outright in corpora, the plural of corpus." } },
    { q: { zh: "「给国王」(与格单数)是:", en: "To the king (dative singular):" }, opts: ["rēgī", "rēgis", "rēgem", "rēge"], a: 0,
      why: { zh: "第三变格法与格单数是 -ī。属格是 -is,两者只差一个字母,是常见的失分点。", en: "The third-declension dative singular is -ī; the genitive is -is. One letter apart, and a common slip." } },
    { q: { zh: "字典写 nōmen, nōminis。为什么要给第二个形?", en: "A dictionary gives nōmen, nōminis. Why the second form?" },
      opts: [{ zh: "因为词干只能从属格看出来", en: "because only the genitive shows the stem" }, { zh: "因为那是复数", en: "because it is the plural" }, { zh: "因为那是另一个词", en: "because it is another word" }, { zh: "为了表示中性", en: "to mark the neuter" }], a: 0,
      why: { zh: "nōmen 的词干是 nōmin-,从主格完全看不出来。同理 iter, itineris(旅程)的词干是 itiner-。", en: "The stem of nōmen is nōmin-, invisible in the nominative. Likewise iter, itineris, a journey, has the stem itiner-." } },
    { q: { zh: "Rēgem videō 的意思是:", en: "Rēgem videō means:" },
      opts: [{ zh: "我看见国王", en: "I see the king" }, { zh: "国王看见我", en: "the king sees me" }, { zh: "给国王看", en: "I show the king" }, { zh: "国王的视线", en: "the king's gaze" }], a: 0,
      why: { zh: "rēgem 是宾格,是被看的人;videō 的 -ō 表示「我」。拉丁语不需要说 ego。", en: "Rēgem is accusative, the one seen, and the -ō of videō says I. No ego needed." } },
    { q: { zh: "dux(领袖)的主格 x 是怎么来的?", en: "Where does the x of dux, a leader, come from?" },
      opts: [{ zh: "词干 duc- 加主格 -s", en: "the stem duc- plus the nominative -s" }, { zh: "是外来词", en: "it is a loanword" }, { zh: "是缩写", en: "it is an abbreviation" }, { zh: "是复数记号", en: "it marks the plural" }], a: 0,
      why: { zh: "duc + s = dux(属格 ducis)。同理 rēg + s = rēx、noct + s = nox。意大利语的 duce、英语的 duke 都从 duc- 来。", en: "Duc plus s gives dux, genitive ducis, exactly as rēg plus s gives rēx and noct plus s gives nox. Italian duce and English duke come from duc-." } },
    { q: { zh: "「城市们的」(属格复数,urbs, urbis)是:", en: "Of the cities (genitive plural of urbs, urbis):" }, opts: ["urbium", "urbēs", "urbibus", "urbem"], a: 0,
      why: { zh: "urbs 属于「i 词干」一类,属格复数是 -ium 而不是 -um。这类词的标志之一是主格以两个辅音结尾(-bs、-ns)。", en: "Urbs belongs to the i-stems, whose genitive plural is -ium rather than -um. One sign of the class is a nominative ending in two consonants, as in -bs or -ns." } },
  ] },

{ id: "impfut", icon: "⏳",
  name: { zh: "过去与将来 · 我曾爱,我将爱", en: "Imperfect and future · I was loving, I shall love" },
  scene: { zh: "俄耳甫斯回头的那一刻:他曾经拥有她(habēbam),他本将带她回去(dūcam)。拉丁语用两个插在词干和人称词尾之间的小音节,标出过去和将来。",
           en: "The moment Orpheus looks back: he was holding her, habēbam; he would have led her home, dūcam. Latin marks past and future with a small syllable wedged between stem and personal ending." },
  rule: { zh: "未完成时(过去持续、反复):词干 + -bā- + 人称词尾 → amābam, amābās, amābat, amābāmus, amābātis, amābant,意思是「我(当时)在爱、常爱」。将来时(第一、二变位):词干 + -bi- → amābō, amābis, amābit, amābimus, amābitis, amābunt。esse:eram(我曾是)、erō(我将是)。",
          en: "The imperfect (ongoing or repeated past) is stem plus -bā- plus the personal endings: amābam, amābās, amābat, amābāmus, amābātis, amābant — I was loving, I used to love. The future of the first and second conjugations is stem plus -bi-: amābō, amābis, amābit, amābimus, amābitis, amābunt. For esse: eram, I was; erō, I shall be." },
  table: { cap: { zh: "amāre 的三个时态", en: "Three tenses of amāre" },
    head: [{ zh: "人称", en: "Person" }, { zh: "现在", en: "Present" }, { zh: "未完成", en: "Imperfect" }, { zh: "将来", en: "Future" }],
    rows: [["1 单|1 sg.", "amō", "amābam", "amābō"],
           ["2 单|2 sg.", "amās", "amābās", "amābis"],
           ["3 单|3 sg.", "amat", "amābat", "amābit"],
           ["1 复|1 pl.", "amāmus", "amābāmus", "amābimus"],
           ["3 复|3 pl.", "amant", "amābant", "amābunt"],
           ["esse", "sum", "eram", "erō"]] },
  notes: { zh: "-bā- 与 -bi- 都来自动词词根 *bhū-「生成、存在」(拉丁 fuī、英语 be、德语 bin 同根)——「我爱 + 曾在」黏成了一个词。罗曼语的将来时又重复了一次同样的把戏:amāre habeō(我有待去爱)黏成了法语 j'aimerai、意大利语 amerò、西班牙语 amaré。词尾的 -ai/-ò/-é 就是 habeō 的残骸。",
          en: "Both -bā- and -bi- come from the verb root *bhū-, to become, to be (Latin fuī, English be, German bin). I love plus I was fused into one word. Romance then played the same trick again: amāre habeō, I have to love, fused into French j'aimerai, Italian amerò, Spanish amaré — the -ai, -ò and -é are the wreckage of habeō." },
  ex: [
    { q: { zh: "「我(当时)在爱」是:", en: "I was loving:" }, opts: ["amābam", "amō", "amābō", "amāvī"], a: 0,
      why: { zh: "-bam 是未完成时第一人称。amābō 是将来「我将爱」,amāvī 是完成「我爱过了」。", en: "-bam is the imperfect first person. Amābō is the future, I shall love; amāvī is the perfect, I have loved." } },
    { q: { zh: "amābit 的意思是:", en: "Amābit means:" }, opts: [{ zh: "他将爱", en: "he will love" }, { zh: "他曾爱", en: "he was loving" }, { zh: "他爱", en: "he loves" }, { zh: "他被爱", en: "he is loved" }], a: 0,
      why: { zh: "-bi- 是将来时的标记,-t 是第三人称单数。未完成时是 amābat,只差一个元音。", en: "-bi- marks the future and -t the third singular. The imperfect is amābat — one vowel apart." } },
    { q: { zh: "未完成时表示的是:", en: "The imperfect expresses:" },
      opts: [{ zh: "过去持续或反复的动作", en: "an ongoing or repeated action in the past" }, { zh: "刚刚完成的动作", en: "an action just completed" }, { zh: "将来的动作", en: "a future action" }, { zh: "命令", en: "a command" }], a: 0,
      why: { zh: "imperfectum 意思是「未完成的」。Rōmam vidēbam 是「我(那时)常看见罗马」,Rōmam vīdī 才是「我看过罗马了」。", en: "Imperfectum means unfinished. Rōmam vidēbam is I used to see Rome; Rōmam vīdī is I have seen Rome." } },
    { q: { zh: "「我们曾是」是:", en: "We were:" }, opts: ["erāmus", "sumus", "erimus", "fuimus"], a: 0,
      why: { zh: "esse 的未完成时是 eram, erās, erat, erāmus, erātis, erant。erimus 是将来「我们将是」。", en: "The imperfect of esse is eram, erās, erat, erāmus, erātis, erant. Erimus is the future, we shall be." } },
    { q: { zh: "法语 j'aimerai(我将爱)的词尾 -ai 来自:", en: "The -ai of French j'aimerai comes from:" },
      opts: [{ zh: "拉丁语 habeō(我有)", en: "Latin habeō, I have" }, { zh: "拉丁语 amābō", en: "Latin amābō" }, { zh: "拉丁语 sum", en: "Latin sum" }, { zh: "法兰克语", en: "Frankish" }], a: 0,
      why: { zh: "晚期拉丁用 amāre habeō(我有待去爱)表将来,两词黏合成 aimerai。罗曼语的将来时全部如此。", en: "Late Latin expressed the future as amāre habeō, I have to love; the two words fused into aimerai. Every Romance future is built this way." } },
    { q: { zh: "Rēx in īnsulā erat 的意思是:", en: "Rēx in īnsulā erat means:" },
      opts: [{ zh: "国王(当时)在岛上", en: "the king was on the island" }, { zh: "国王将去岛上", en: "the king will go to the island" }, { zh: "国王在岛上", en: "the king is on the island" }, { zh: "国王离开了岛", en: "the king left the island" }], a: 0,
      why: { zh: "erat 是 esse 的未完成时第三人称单数;in + 夺格 īnsulā 表示位置。", en: "Erat is the third singular imperfect of esse, and in with the ablative īnsulā gives place." } },
    { q: { zh: "-bā- 和 -bi- 这两个标记最早来自:", en: "The markers -bā- and -bi- originally come from:" },
      opts: [{ zh: "表示「存在」的动词词根", en: "a verb root meaning to be" }, { zh: "介词", en: "a preposition" }, { zh: "名词词尾", en: "a noun ending" }, { zh: "希腊语借词", en: "a Greek loan" }], a: 0,
      why: { zh: "来自印欧语 *bhū-(生成、存在),与 fuī、英语 be、德语 bin 同根。拉丁语把「爱」和「曾在」黏成一个词。", en: "From PIE *bhū-, to become or be, the root of fuī, English be and German bin. Latin glued love and was into a single word." } },
    { q: { zh: "下面哪个是将来时?", en: "Which of these is a future?" }, opts: ["cantābunt", "cantābant", "cantant", "cantāvērunt"], a: 0,
      why: { zh: "cantābunt「他们将唱」。cantābant 是「他们曾唱」,cantant 是「他们唱」,cantāvērunt 是「他们唱过了」。", en: "Cantābunt, they will sing. Cantābant is they were singing, cantant they sing, cantāvērunt they have sung." } },
  ] },

{ id: "perf", icon: "🗝️",
  name: { zh: "完成时 · 我来过,我看见,我征服", en: "Perfect tense · I came, I saw, I conquered" },
  scene: { zh: "恺撒的三个词:Vēnī, vīdī, vīcī。完成时讲一件已经做完的事。它有一套自己的词干和自己的人称词尾,必须单独记住。",
           en: "Caesar's three words: Vēnī, vīdī, vīcī — I came, I saw, I conquered. The perfect tells of something finished. It has a stem of its own and endings of its own, and both must be learnt." },
  rule: { zh: "完成时词干从字典第三个主要形来:amō, amāre, amāvī —— amāv- 就是完成词干。词尾固定:-ī, -istī, -it, -imus, -istis, -ērunt。许多常用动词的完成词干不规则:videō→vīdī、dīcō→dīxī、faciō→fēcī、sum→fuī、ferō→tulī。",
          en: "The perfect stem comes from the third principal part: amō, amāre, amāvī — the stem is amāv-. The endings are fixed: -ī, -istī, -it, -imus, -istis, -ērunt. Many common verbs have an irregular perfect stem: videō gives vīdī, dīcō gives dīxī, faciō gives fēcī, sum gives fuī, ferō gives tulī." },
  table: { cap: { zh: "完成时:amāvī 我爱过 · vīdī 我看见了", en: "Perfect: amāvī, I have loved · vīdī, I saw" },
    head: [{ zh: "人称", en: "Person" }, { zh: "amāre", en: "amāre" }, { zh: "vidēre", en: "vidēre" }, { zh: "esse", en: "esse" }],
    rows: [["1 单|1 sg.", "amāvī", "vīdī", "fuī"],
           ["2 单|2 sg.", "amāvistī", "vīdistī", "fuistī"],
           ["3 单|3 sg.", "amāvit", "vīdit", "fuit"],
           ["1 复|1 pl.", "amāvimus", "vīdimus", "fuimus"],
           ["2 复|2 pl.", "amāvistis", "vīdistis", "fuistis"],
           ["3 复|3 pl.", "amāvērunt", "vīdērunt", "fuērunt"]] },
  notes: { zh: "perfectum 意思就是「完成了的」(per + facere 做到底)。罗曼语把这套形保了下来:法语 je vis(我看见了)、西班牙语 vi、意大利语 vidi 都是 vīdī 的后代。同时罗曼语又造了一套新的完成时:habeō litterās scrīptās(我有信被写好)→ j'ai écrit、ho scritto、he escrito——与德语 ich habe geschrieben 走的是同一条路。",
          en: "Perfectum means carried through, per plus facere. Romance kept these forms: French je vis, Spanish vi, Italian vidi all descend from vīdī. Romance also built a second perfect: habeō litterās scrīptās, I have the letter written, became j'ai écrit, ho scritto, he escrito — the same road German took with ich habe geschrieben." },
  ex: [
    { q: { zh: "Vēnī, vīdī, vīcī 的时态是:", en: "What tense is Vēnī, vīdī, vīcī?" },
      opts: [{ zh: "完成时", en: "perfect" }, { zh: "未完成时", en: "imperfect" }, { zh: "现在时", en: "present" }, { zh: "将来时", en: "future" }], a: 0,
      why: { zh: "三个动词都带完成时第一人称 -ī:来过、看过、胜过。恺撒用完成时强调事情干净利落地做完了。", en: "All three carry the perfect first person -ī. Caesar chose the perfect to stress that each act was done and finished." } },
    { q: { zh: "「他们爱过」是:", en: "They have loved:" }, opts: ["amāvērunt", "amābant", "amant", "amābunt"], a: 0,
      why: { zh: "完成时第三人称复数是 -ērunt(诗歌里也作 -ēre)。amābant 是未完成「他们当时在爱」。", en: "The perfect third plural is -ērunt, or -ēre in poetry. Amābant is the imperfect, they were loving." } },
    { q: { zh: "字典给 videō, vidēre, vīdī, vīsum。完成词干是:", en: "A dictionary gives videō, vidēre, vīdī, vīsum. The perfect stem is:" }, opts: ["vīd-", "vid-", "vīs-", "vidē-"], a: 0,
      why: { zh: "第三个主要形 vīdī 去掉 -ī 得 vīd-。第四个形 vīsum 是分词词干,用于被动完成和 vision、visible 这类派生词。", en: "Take the third principal part vīdī and drop the -ī: vīd-. The fourth, vīsum, is the participial stem behind vision and visible." } },
    { q: { zh: "完成时和未完成时的区别是:", en: "The difference between perfect and imperfect is:" },
      opts: [{ zh: "完成时讲做完的事,未完成时讲当时持续的事", en: "the perfect reports a finished act, the imperfect an ongoing one" }, { zh: "完成时更客气", en: "the perfect is more polite" }, { zh: "完成时只用于第一人称", en: "the perfect is only first person" }, { zh: "没有区别", en: "there is none" }], a: 0,
      why: { zh: "Caesar pontem fēcit「恺撒(当时)把桥造好了」;Caesar pontem faciēbat「恺撒(那时)正在造桥」。历史叙述靠这组对比推进。", en: "Caesar pontem fēcit, Caesar built the bridge; Caesar pontem faciēbat, Caesar was building it. Narrative moves by this contrast." } },
    { q: { zh: "sum 的完成时第一人称是:", en: "The perfect first person of sum is:" }, opts: ["fuī", "eram", "erō", "sum"], a: 0,
      why: { zh: "sum 的完成词干是 fu-,与英语 be、德语 bin 的 b 同源。eram 是未完成时。", en: "The perfect stem of sum is fu-, cognate with the b of English be and German bin. Eram is the imperfect." } },
    { q: { zh: "法语 j'ai écrit 这种「助动词+分词」的完成时来自:", en: "The French compound perfect j'ai écrit comes from:" },
      opts: [{ zh: "拉丁语 habeō + 完成分词", en: "Latin habeō plus a perfect participle" }, { zh: "拉丁语 amāvī", en: "Latin amāvī" }, { zh: "希腊语", en: "Greek" }, { zh: "法兰克语", en: "Frankish" }], a: 0,
      why: { zh: "habeō litterās scrīptās(我有这封写好的信)→ 助动词化。德语 ich habe geschrieben、英语 I have written 都是同一条路。", en: "Habeō litterās scrīptās, I have the letter written, grammaticalised into an auxiliary. German ich habe geschrieben and English I have written took the same road." } },
    { q: { zh: "「你看见了」是:", en: "You saw:" }, opts: ["vīdistī", "vidēs", "vidēbās", "vidēbis"], a: 0,
      why: { zh: "完成时第二人称单数词尾是 -istī。vidēs 是现在时,vidēbās 是未完成时,vidēbis 是将来时。", en: "The perfect second singular ends in -istī. Vidēs is present, vidēbās imperfect, vidēbis future." } },
    { q: { zh: "perfectum 这个词的字面意思是:", en: "Perfectum literally means:" },
      opts: [{ zh: "彻底做完的", en: "carried right through" }, { zh: "完美的", en: "flawless" }, { zh: "过去的", en: "past" }, { zh: "很久以前的", en: "long ago" }], a: 0,
      why: { zh: "per(到底)+ facere(做)。英语 perfect 的「完美」义是从「做到底、无可再加」引申的。", en: "Per, through, plus facere, to do. The sense flawless in English perfect grew out of done right through, with nothing left to add." } },
  ] },

{ id: "conj4", icon: "📜",
  name: { zh: "四个变位 · 四条河的声音", en: "The four conjugations · Four rivers, four sounds" },
  scene: { zh: "冥界有四条河,拉丁语有四类动词。认一个动词属于哪一类,只看不定式的结尾:-āre、-ēre、-ere、-īre。认错了类,变出来的形就全错。",
           en: "The underworld has four rivers; Latin has four kinds of verb. To place a verb you look only at the end of its infinitive: -āre, -ēre, -ere, -īre. Misplace it and every form you build will be wrong." },
  rule: { zh: "第一变位 -āre(amō, amāre):第三人称 amat。第二变位 -ēre(moneō, monēre 警告):monet。第三变位 -ere(regō, regere 统治):regit——注意元音是短 e,第三人称变成 i。第四变位 -īre(audiō, audīre 听):audit。另有「第三变位 -iō」一小类(capiō, capere 抓):capit。",
          en: "First, -āre (amō, amāre): third person amat. Second, -ēre (moneō, monēre, to warn): monet. Third, -ere (regō, regere, to rule): regit — the vowel is short e and the third person turns it into i. Fourth, -īre (audiō, audīre, to hear): audit. A small mixed class, third in -iō (capiō, capere, to seize), gives capit." },
  table: { cap: { zh: "四个变位的现在时", en: "The present in all four conjugations" },
    head: [{ zh: "变位", en: "Conjugation" }, { zh: "不定式", en: "Infinitive" }, { zh: "我", en: "I" }, { zh: "他", en: "he" }, { zh: "他们", en: "they" }],
    rows: [["1", "amāre", "amō", "amat", "amant"],
           ["2", "monēre", "moneō", "monet", "monent"],
           ["3", "regere", "regō", "regit", "regunt"],
           ["3 -iō", "capere", "capiō", "capit", "capiunt"],
           ["4", "audīre", "audiō", "audit", "audiunt"]] },
  notes: { zh: "coniugātiō 意思是「把…套在一起」(con + iugum 轭)——像两头牛共用一副轭:同一类动词共用同一套词尾。第三变位在罗曼语里基本崩塌,并入了别的类;而第一变位 -āre 是唯一还在生产新词的「活类」:意大利语 cliccare(点击)、法语 googliser,都自动进第一变位。",
          en: "Coniugātiō means a yoking together, con plus iugum, a yoke: verbs of one class share one set of endings as two oxen share a yoke. The third conjugation largely collapsed in Romance and was absorbed into the others, while the first, -āre, is the only class still productive: Italian cliccare, to click, and French googliser join it automatically." },
  ex: [
    { q: { zh: "audīre 属于第几变位?", en: "Which conjugation is audīre?" }, opts: [{ zh: "第四", en: "fourth" }, { zh: "第一", en: "first" }, { zh: "第二", en: "second" }, { zh: "第三", en: "third" }], a: 0,
      why: { zh: "不定式以 -īre 结尾的是第四变位:audiō, audīs, audit, audīmus, audītis, audiunt。", en: "Infinitives in -īre belong to the fourth: audiō, audīs, audit, audīmus, audītis, audiunt." } },
    { q: { zh: "regō 的第三人称单数是:", en: "The third person singular of regō is:" }, opts: ["regit", "reget", "regat", "regīt"], a: 0,
      why: { zh: "第三变位的短 e 在第三人称里变成 i:regit。reget 其实是它的将来时「他将统治」。", en: "The short e of the third conjugation becomes i in the third person: regit. Reget is in fact its future, he will rule." } },
    { q: { zh: "怎么判断一个动词属于哪个变位?", en: "How do you tell a verb's conjugation?" },
      opts: [{ zh: "看不定式的结尾", en: "by the ending of the infinitive" }, { zh: "看第一人称", en: "by the first person" }, { zh: "看意思", en: "by its meaning" }, { zh: "看词的长度", en: "by its length" }], a: 0,
      why: { zh: "第一人称常常不够:moneō(二)和 audiō(四)都以 -eō/-iō 结尾。必须看 monēre 还是 audīre。", en: "The first person is often not enough: moneō (second) and audiō (fourth) look alike. You must see monēre against audīre." } },
    { q: { zh: "「他们听」是:", en: "They hear:" }, opts: ["audiunt", "audient", "audīmus", "audit"], a: 0,
      why: { zh: "第四变位第三人称复数是 -iunt。audient 是将来时「他们将听」。", en: "The fourth conjugation's third plural is -iunt. Audient is the future, they will hear." } },
    { q: { zh: "capere 是哪一类?", en: "Which class is capere?" },
      opts: [{ zh: "第三变位的 -iō 小类", en: "the -iō subclass of the third" }, { zh: "第一变位", en: "first" }, { zh: "第四变位", en: "fourth" }, { zh: "不规则动词", en: "irregular" }], a: 0,
      why: { zh: "它的不定式是短 -ere(第三变位),但第一人称是 capiō(像第四变位)。faciō、iaciō、fugiō 都属这一小类。", en: "Its infinitive has the short -ere of the third, but its first person capiō looks fourth. Faciō, iaciō and fugiō belong here too." } },
    { q: { zh: "coniugātiō 的字面意思是:", en: "Coniugātiō literally means:" },
      opts: [{ zh: "共用一副轭", en: "yoked together" }, { zh: "连接句子", en: "joining sentences" }, { zh: "动词变化", en: "verb change" }, { zh: "四个一组", en: "a group of four" }], a: 0,
      why: { zh: "con + iugum(轭)。同一类动词像共轭的牛一样,共用同一套词尾。英语 conjugal(夫妻的)也是这个轭。", en: "Con plus iugum, a yoke. Verbs of a class share endings as yoked oxen share a beam — and English conjugal comes from the same yoke." } },
    { q: { zh: "意大利语新动词 cliccare(点击)自动进入哪一类?", en: "The new Italian verb cliccare, to click, automatically joins which class?" },
      opts: [{ zh: "第一变位(-āre)", en: "the first, in -āre" }, { zh: "第二变位", en: "the second" }, { zh: "第三变位", en: "the third" }, { zh: "第四变位", en: "the fourth" }], a: 0,
      why: { zh: "-āre/-are 是罗曼语里唯一还在接收新词的变位。法语 googliser、西班牙语 tuitear 同理。", en: "-āre is the only conjugation still taking new verbs in Romance. French googliser and Spanish tuitear do the same." } },
    { q: { zh: "monēre 的「我」是:", en: "I warn, from monēre:" }, opts: ["moneō", "monō", "moniō", "monāre"], a: 0,
      why: { zh: "第二变位保留词干的 ē:moneō, monēs, monet。这个词根 mon- 还给了 monument(提醒物)、monster(凶兆)。", en: "The second conjugation keeps its ē: moneō, monēs, monet. The root mon- also gave monument, a reminder, and monster, a warning sign." } },
  ] },

{ id: "pass", icon: "🎭",
  name: { zh: "被动与分词 · 城破之后", en: "Passive and participles · After the city fell" },
  scene: { zh: "特洛伊城被攻破(urbs capta est)。攻破城的人不必出现——被动态让动作本身站到台前。再加上分词,拉丁语可以把一整句压缩成两个词:urbe captā「城既已攻下」。",
           en: "Troy is taken: urbs capta est. The taker need not appear — the passive puts the action itself in front. Add participles and Latin can compress a whole clause into two words: urbe captā, the city having been taken." },
  rule: { zh: "现在时被动:把主动词尾换成 -or, -ris, -tur, -mur, -minī, -ntur → amor(我被爱)、amātur(他被爱)、amantur。完成时被动是两个词:amātus est(他被爱过)、captī sunt(他们被抓了)——分词要和主语性数一致。分词有三个:现在主动 amāns(正在爱的)、完成被动 amātus(被爱过的)、将来主动 amātūrus(将要爱的)。",
          en: "Present passive: swap the active endings for -or, -ris, -tur, -mur, -minī, -ntur, giving amor, I am loved; amātur, he is loved; amantur, they are loved. The perfect passive is two words — amātus est, he was loved; captī sunt, they were captured — and the participle agrees with the subject in gender and number. There are three participles: present active amāns, loving; perfect passive amātus, loved; future active amātūrus, about to love." },
  table: { cap: { zh: "主动与被动", en: "Active and passive" },
    head: [{ zh: "形式", en: "Form" }, { zh: "主动", en: "Active" }, { zh: "被动", en: "Passive" }],
    rows: [["现在 1 单|Present 1 sg.", "amō 我爱|I love", "amor 我被爱|I am loved"],
           ["现在 3 单|Present 3 sg.", "amat", "amātur"],
           ["现在 3 复|Present 3 pl.", "amant", "amantur"],
           ["完成 3 单|Perfect 3 sg.", "amāvit", "amātus est"],
           ["完成 3 复|Perfect 3 pl.", "amāvērunt", "amātī sunt"],
           ["分词|Participles", "amāns 正在爱的|loving", "amātus 被爱过的|loved"]] },
  notes: { zh: "拉丁语的完成被动用「分词 + esse」,罗曼语把这套结构全盘继承:法语 il est aimé、意大利语 è amato、西班牙语 es amado。而「夺格独立结构」(ablātīvus absolūtus)如 urbe captā、Caesare duce(在恺撒的统帅下),是拉丁语最省字的句式,英语的 weather permitting、all things considered 正是同一个结构的残留。",
          en: "The Latin perfect passive is participle plus esse, and Romance took the whole pattern over: French il est aimé, Italian è amato, Spanish es amado. The ablative absolute — urbe captā, the city taken; Caesare duce, Caesar being leader — is Latin's most economical construction, and English weather permitting and all things considered are the same thing surviving." },
  ex: [
    { q: { zh: "amātur 的意思是:", en: "Amātur means:" }, opts: [{ zh: "他被爱", en: "he is loved" }, { zh: "他爱", en: "he loves" }, { zh: "他将爱", en: "he will love" }, { zh: "他曾爱", en: "he was loving" }], a: 0,
      why: { zh: "-tur 是被动第三人称单数。主动是 amat。", en: "-tur is the passive third singular; the active is amat." } },
    { q: { zh: "「他们被抓了」(完成被动)是:", en: "They were captured (perfect passive):" }, opts: ["captī sunt", "capiunt", "cēpērunt", "capiēbantur"], a: 0,
      why: { zh: "完成被动=完成分词+esse,分词随主语变化:captī(阳性复数)+ sunt。cēpērunt 是主动「他们抓住了」。", en: "Perfect passive is participle plus esse, the participle agreeing with the subject: captī, masculine plural, with sunt. Cēpērunt is active, they captured." } },
    { q: { zh: "Urbs ā rēge capta est 中 ā rēge 表示:", en: "In urbs ā rēge capta est, what does ā rēge express?" },
      opts: [{ zh: "动作的执行者(被谁)", en: "the agent — by whom" }, { zh: "地点", en: "the place" }, { zh: "时间", en: "the time" }, { zh: "工具", en: "the instrument" }], a: 0,
      why: { zh: "被动句里「被某人」用 ā/ab + 夺格(限于人)。如果是工具,直接用夺格不加介词:gladiō「用剑」。", en: "In a passive sentence the personal agent takes ā or ab with the ablative. An instrument takes the plain ablative with no preposition: gladiō, with a sword." } },
    { q: { zh: "amāns 是什么?", en: "What is amāns?" },
      opts: [{ zh: "现在主动分词「正在爱的」", en: "the present active participle, loving" }, { zh: "完成被动分词", en: "the perfect passive participle" }, { zh: "不定式", en: "the infinitive" }, { zh: "命令式", en: "the imperative" }], a: 0,
      why: { zh: "现在分词以 -ns 结尾,属格 -ntis。英语的 -ant/-ent(student、agent、patient)就是它。", en: "The present participle ends in -ns, genitive -ntis. The English -ant and -ent of student, agent and patient come straight from it." } },
    { q: { zh: "urbe captā 是什么结构?", en: "What construction is urbe captā?" },
      opts: [{ zh: "夺格独立结构", en: "an ablative absolute" }, { zh: "宾语", en: "a direct object" }, { zh: "属格短语", en: "a genitive phrase" }, { zh: "被动句主语", en: "the subject of a passive" }], a: 0,
      why: { zh: "两个夺格并置,独立于主句之外,表示伴随情况:「城既已攻下(之后)」。英语 the city having been taken 要五个词。", en: "Two ablatives standing apart from the main clause give an attendant circumstance: the city having been taken. English needs five words for Latin's two." } },
    { q: { zh: "法语 il est aimé 的结构直接继承自:", en: "French il est aimé directly continues:" },
      opts: [{ zh: "拉丁语的 amātus est", en: "Latin amātus est" }, { zh: "拉丁语的 amātur", en: "Latin amātur" }, { zh: "希腊语", en: "Greek" }, { zh: "法兰克语", en: "Frankish" }], a: 0,
      why: { zh: "罗曼语丢掉了 -tur 这种综合被动,全面采用「系动词+分词」的分析式被动。", en: "Romance dropped the synthetic passive in -tur and generalised the analytic one: copula plus participle." } },
    { q: { zh: "英语 weather permitting 相当于拉丁语的:", en: "English weather permitting corresponds to Latin's:" },
      opts: [{ zh: "夺格独立结构", en: "ablative absolute" }, { zh: "被动态", en: "passive voice" }, { zh: "属格", en: "genitive" }, { zh: "不定式", en: "infinitive" }], a: 0,
      why: { zh: "英语保留了几个化石短语:weather permitting、all things considered、God willing,都是独立分词结构。", en: "English keeps a few fossils — weather permitting, all things considered, God willing — all absolute participial phrases." } },
    { q: { zh: "完成被动分词 amātus 为什么有 -us/-a/-um 三个形?", en: "Why does the perfect participle amātus have -us, -a and -um?" },
      opts: [{ zh: "因为它是形容词,要和主语一致", en: "because it is an adjective and agrees with the subject" }, { zh: "因为它是名词", en: "because it is a noun" }, { zh: "因为它有三个时态", en: "because it has three tenses" }, { zh: "为了押韵", en: "for the sake of rhyme" }], a: 0,
      why: { zh: "分词是「动词形容词」:Puella amāta est(女孩被爱过)、Puerī amātī sunt(男孩们被爱过)——随主语的性数变化。", en: "A participle is a verbal adjective: Puella amāta est, the girl was loved; Puerī amātī sunt, the boys were loved — it follows the subject's gender and number." } },
  ] },
];

/* ---------- one road per study language ---------- */
const GRAMS = { la: GRAM_LA };
function GRAM_ADD(lang, list) { (GRAMS[lang] = GRAMS[lang] || []).push(...list); }
const GRAM_META = {
  la: { title: { zh: "拉丁语语法之路 · Via Grammatica", en: "Via Grammatica · The Latin Grammar Road", de: "Via Grammatica · Der lateinische Grammatikweg", fr: "Via Grammatica · La route de la grammaire latine", es: "Via Grammatica · El camino de la gramática latina" },
        desc: { zh: "拉丁语的意思藏在词尾里。沿着这条路走十站,从名词的格到动词的时态,每站先读规则、看变化表,再做一轮练习。答对八成即可通关,下一站随之开启。", en: "In Latin the meaning sits in the endings. Ten stations lead from the cases of the noun to the tenses of the verb: read the rule, study the table, then practise. Score 80% to pass and open the next station.", de: "Im Lateinischen steckt die Bedeutung in den Endungen. Zehn Stationen führen von den Fällen zum Tempus: Regel lesen, Tabelle ansehen, üben. Ab 80 % ist die Station bestanden.", fr: "En latin le sens est dans les terminaisons. Dix étapes mènent des cas du nom aux temps du verbe : la règle, le tableau, puis l'exercice. 80 % suffisent pour passer.", es: "En latín el significado está en las terminaciones. Diez estaciones van de los casos del nombre a los tiempos del verbo: la regla, la tabla y la práctica. Con un 80 % se supera." } },
  de: { title: { zh: "德语语法之路 · Der Grammatikweg", en: "The German Grammar Road · Der Grammatikweg", de: "Der Grammatikweg · Deutsch", fr: "La route de la grammaire allemande", es: "El camino de la gramática alemana" },
        desc: { zh: "德语把意思放在冠词、词尾和词序里。十站从名词的性、复数和四个格,走到动词的完成时和可分前缀。每站先读规则、看变化表,再做一轮练习;答对八成即可通关,下一站随之开启。",
                en: "German carries its meaning in the articles, the endings and the word order. Ten stations lead from gender, plurals and the four cases to the perfect tense and separable prefixes: read the rule, study the table, then practise. Score 80% to pass and open the next station.",
                de: "Im Deutschen steckt die Bedeutung in Artikeln, Endungen und Wortstellung. Zehn Stationen führen von Genus, Plural und den vier Fällen bis zum Perfekt und den trennbaren Verben: Regel lesen, Tabelle ansehen, üben. Ab 80 % ist die Station bestanden.",
                fr: "En allemand le sens est dans les articles, les terminaisons et l'ordre des mots. Dix étapes mènent du genre et des quatre cas au parfait et aux verbes à particule : la règle, le tableau, puis l'exercice. 80 % suffisent pour passer.",
                es: "En alemán el significado está en los artículos, las terminaciones y el orden de las palabras. Diez estaciones van del género y los cuatro casos al perfecto y los verbos separables: la regla, la tabla y la práctica. Con un 80 % se supera." } },
  fr: { title: { zh: "法语语法之路 · La route de la grammaire", en: "The French Grammar Road · La route de la grammaire", de: "Der französische Grammatikweg", fr: "La route de la grammaire · Français", es: "El camino de la gramática francesa" },
        desc: { zh: "法语从拉丁语长出来,丢掉了名词的格,改用冠词和介词来标明关系。十站从名词的性与冠词,走到复合过去时、将来时、代词和虚拟式。每站先读规则、看变化表,再做一轮练习;答对八成即可通关。",
                en: "French grew out of Latin, lost the noun cases and let articles and prepositions do their work. Ten stations lead from gender and articles to the passé composé, the future, pronouns and the subjunctive: read the rule, study the table, then practise. Score 80% to pass.",
                de: "Das Französische ist aus dem Latein gewachsen, hat die Fälle verloren und lässt Artikel und Präpositionen ihre Arbeit tun. Zehn Stationen vom Genus bis zum Subjonctif: Regel, Tabelle, Übung. Ab 80 % ist die Station bestanden.",
                fr: "Le français est né du latin, a perdu les cas et confié leur travail aux articles et aux prépositions. Dix étapes mènent du genre au passé composé, au futur, aux pronoms et au subjonctif : la règle, le tableau, puis l'exercice. 80 % suffisent pour passer.",
                es: "El francés nació del latín, perdió los casos y dejó su trabajo a los artículos y las preposiciones. Diez estaciones van del género al passé composé, el futuro, los pronombres y el subjuntivo: la regla, la tabla y la práctica. Con un 80 % se supera." } },
  it: { title: { zh: "意大利语语法之路 · La via della grammatica", en: "The Italian Grammar Road · La via della grammatica", de: "Der italienische Grammatikweg", fr: "La route de la grammaire italienne", es: "El camino de la gramática italiana" },
        desc: { zh: "意大利语保留了拉丁语的元音词尾:复数不加 -s,而是把 -o 换成 -i、-a 换成 -e。十站从名词的性与冠词,走到近过去时、将来时、条件式和代词。每站先读规则、看变化表,再做一轮练习;答对八成即可通关。",
                en: "Italian kept the vowel endings of Latin: its plurals add no -s but turn -o into -i and -a into -e. Ten stations lead from gender and articles to the passato prossimo, the future, the conditional and pronouns: read the rule, study the table, then practise. Score 80% to pass.",
                de: "Das Italienische hat die Vokalendungen des Lateins bewahrt: Der Plural hängt kein -s an, sondern macht aus -o ein -i und aus -a ein -e. Zehn Stationen vom Genus bis zu den Pronomen: Regel, Tabelle, Übung. Ab 80 % ist die Station bestanden.",
                fr: "L'italien a gardé les voyelles finales du latin : son pluriel n'ajoute pas de -s, il change -o en -i et -a en -e. Dix étapes mènent du genre au passato prossimo, au futur, au conditionnel et aux pronoms. 80 % suffisent pour passer.",
                es: "El italiano conservó las vocales finales del latín: su plural no añade -s, cambia -o por -i y -a por -e. Diez estaciones van del género al passato prossimo, el futuro, el condicional y los pronombres. Con un 80 % se supera." } },
  es: { title: { zh: "西班牙语语法之路 · El camino de la gramática", en: "The Spanish Grammar Road · El camino de la gramática", de: "Der spanische Grammatikweg", fr: "La route de la grammaire espagnole", es: "El camino de la gramática · Español" },
        desc: { zh: "西班牙语有两个「是」,动词词尾标明人称,所以主语常常省略。十站从名词的性与冠词,走到 ser 与 estar、两种过去时、将来时和代词。每站先读规则、看变化表,再做一轮练习;答对八成即可通关。",
                en: "Spanish has two verbs for to be, and its verb endings mark the person, so the subject is often left out. Ten stations lead from gender and articles to ser and estar, the two past tenses, the future and pronouns: read the rule, study the table, then practise. Score 80% to pass.",
                de: "Das Spanische hat zwei Verben für ‚sein‘, und die Verbendung zeigt die Person, darum fällt das Subjekt oft weg. Zehn Stationen vom Genus über ser und estar bis zu den Pronomen: Regel, Tabelle, Übung. Ab 80 % ist die Station bestanden.",
                fr: "L'espagnol a deux verbes « être », et la terminaison du verbe marque la personne, si bien que le sujet tombe souvent. Dix étapes mènent du genre à ser et estar, aux deux passés, au futur et aux pronoms. 80 % suffisent pour passer.",
                es: "El español tiene dos verbos «ser» y «estar», y la terminación del verbo marca la persona, así que el sujeto suele omitirse. Diez estaciones van del género a ser y estar, los dos pasados, el futuro y los pronombres. Con un 80 % se supera." } },
};
let GRAM = GRAM_LA;
/* the road follows the study language; a language without stations falls back to Latin */
function grLang() { return typeof TARGET !== "undefined" && GRAMS[TARGET] && GRAMS[TARGET].length ? TARGET : "la"; }
function grSync() { GRAM = GRAMS[grLang()]; }

/* ---------- helpers ---------- */
function grT(k, a, b) { let s = typeof t === "function" ? t(k) : k; if (a !== undefined) s = s.replace("{n}", a); if (b !== undefined) s = s.replace("{m}", b); return s; }
function grL(v) { if (v == null) return ""; if (typeof v === "string") { if (v.includes("|")) { const p = v.split("|"); return state.lang === "zh" ? p[0] : p[1]; } return v; } if (v[state.lang]) return v[state.lang]; return state.lang === "zh" ? (v.zh || v.en) : (v.en || v.zh); }
function grEsc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function grState() { const p = P(); if (!p.gram) p.gram = { done: {} }; return p.gram; }
function grOpen(i) { return i === 0 || !!grState().done[GRAM[i - 1].id]; }

/* ---------- screens ---------- */
(function grInject() {
  const css = document.createElement("style");
  css.textContent = `
  .gr-road { margin: 14px 0; }
  .gr-st { display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; background: var(--panel); border: 1px solid var(--gold-dim); border-radius: 12px; padding: 11px 12px; margin-bottom: 7px; color: var(--text); font-family: inherit; font-size: .96em; cursor: pointer; position: relative; }
  .gr-st:not(:last-child)::after { content: ""; position: absolute; left: 26px; bottom: -7px; width: 2px; height: 7px; background: var(--gold-dim); }
  .gr-st .gr-ico { font-size: 1.3em; width: 1.6em; text-align: center; }
  .gr-st .gr-nm { flex: 1; line-height: 1.35; }
  .gr-st .gr-mark { color: var(--text-dim); font-size: .85em; white-space: nowrap; }
  .gr-st.done { border-color: var(--good); background: rgba(90,170,120,.10); }
  .gr-st.locked { opacity: .5; cursor: not-allowed; }
  .gr-st:not(.locked):hover { border-color: var(--gold); }
  .gr-head { text-align: center; margin: 10px 0 6px; }
  .gr-head .gr-big { font-size: 1.5em; color: var(--gold); }
  .gr-tbl { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: .93em; }
  .gr-tbl th { color: var(--gold); font-weight: 600; text-align: left; padding: 5px 7px; border-bottom: 1px solid var(--gold-dim); font-size: .9em; }
  .gr-tbl td { padding: 5px 7px; border-bottom: 1px solid rgba(232,182,76,.12); line-height: 1.45; }
  .gr-tbl td:first-child { color: var(--text-dim); white-space: nowrap; }
  .gr-tbl td.gr-f { color: var(--accent); font-style: italic; }
  .gr-opts { display: grid; gap: 8px; margin-top: 12px; }
  .gr-opt { background: var(--panel2); border: 2px solid var(--gold-dim); border-radius: 12px; padding: 11px 12px; color: var(--text); font-family: inherit; font-size: 1em; cursor: pointer; line-height: 1.4; text-align: left; }
  .gr-opt.correct { border-color: var(--good); background: rgba(90,170,120,.18); }
  .gr-opt.wrong { border-color: var(--bad); background: rgba(200,80,80,.16); }
  .gr-q { font-size: 1.08em; line-height: 1.6; margin-top: 6px; }
  .gr-lat { color: var(--accent); font-style: italic; }`;
  document.head.appendChild(css);

  const wrap = document.createElement("div");
  wrap.innerHTML = `
  <div class="screen" id="screen-gram">
    <h2 style="color:var(--gold);margin-top:10px">📐 <span id="gr-h"></span></h2>
    <div class="cur-langs" id="gr-langs" style="margin:8px 0 2px"></div>
    <p style="color:var(--text-dim);margin-top:6px;line-height:1.6" id="gr-desc"></p>
    <div class="cur-stats" id="gr-stats"></div>
    <div class="cur-bar"><i id="gr-bar"></i></div>
    <div class="gr-road" id="gr-road"></div>
    <div style="margin-top:14px;text-align:center"><span class="backlink" id="gr-home" data-t="grHome"></span></div>
  </div>
  <div class="screen" id="screen-gram-lesson">
    <div id="gr-lesson"></div>
    <div style="margin-top:14px;text-align:center"><span class="backlink" id="gr-back" data-t="grBack"></span></div>
  </div>`;
  const app = document.getElementById("app");
  while (wrap.firstElementChild) app.appendChild(wrap.firstElementChild);

  /* a second journey, offered on the title screen beside the map adventure */
  const tgBox = document.querySelector(".tg-box");
  if (tgBox) {
    const row = document.createElement("div");
    row.className = "tg-row";
    row.innerHTML = `<span></span><button class="cur-lang" id="gr-title">📐 <span data-t="grTitle"></span></button>`;
    tgBox.appendChild(row);
    row.querySelector("#gr-title").addEventListener("click", () => renderGram());
  }

  const pill = document.createElement("button");
  pill.className = "pill"; pill.id = "btn-gram"; pill.innerHTML = `📐 <span data-t="gr"></span>`;
  const anchor = document.getElementById("btn-radix") || document.getElementById("btn-cursus");
  anchor.parentNode.insertBefore(pill, anchor);
})();

function renderGram() {
  if (!state.player || !state.players[state.player]) { toast(t("cursusNoPlayer")); renderPlayers(); return; }
  grSync();
  const st = grState(), L0 = grLang(), M = GRAM_META[L0] || GRAM_META.la;
  $("#gr-h").textContent = grL(M.title);
  $("#gr-desc").textContent = grL(M.desc);
  const langs = $("#gr-langs");
  langs.innerHTML = "";
  (typeof TGT_LANGS !== "undefined" ? TGT_LANGS : ["la"]).filter(l => GRAMS[l] && GRAMS[l].length).forEach(l => {
    const b = document.createElement("button");
    b.className = "cur-lang" + (l === L0 ? " on" : "");
    b.textContent = (typeof tgFlag === "function" ? tgFlag(l) + " " : "") + (typeof tgName === "function" ? tgName(l) : l);
    b.addEventListener("click", () => { if (typeof tgChoose === "function") tgChoose(l); else renderGram(); });
    langs.appendChild(b);
  });
  const done = GRAM.filter(g => st.done[g.id]).length;
  $("#gr-stats").innerHTML = `<div class="cur-stat"><b>${done} / ${GRAM.length}</b><span>${t("grStations")}</span></div>`;
  $("#gr-bar").style.width = (done / GRAM.length * 100).toFixed(1) + "%";
  $("#gr-road").innerHTML = GRAM.map((g, i) => {
    const d = st.done[g.id], open = grOpen(i);
    return `<button class="gr-st${d ? " done" : ""}${open ? "" : " locked"}" data-i="${i}"${open ? "" : " disabled"}>
      <span class="gr-ico">${open ? g.icon : "🔒"}</span>
      <span class="gr-nm">${grEsc(grL(g.name))}</span>
      <span class="gr-mark">${d ? "✓ " + Math.round(d.best * 100) + "%" : open ? "" : t("grLocked")}</span></button>`;
  }).join("");
  $("#gr-road").querySelectorAll(".gr-st:not(.locked)").forEach(b => b.addEventListener("click", () => grLesson(+b.dataset.i)));
  showScreen("screen-gram");
}

function grTableHtml(g) {
  const T = g.table;
  return `<div style="color:var(--text-dim);font-size:.88em;margin-bottom:2px">${grEsc(grL(T.cap))}</div>
    <table class="gr-tbl"><tr>${T.head.map(h => `<th>${grEsc(grL(h))}</th>`).join("")}</tr>
    ${T.rows.map(r => `<tr>${r.map((c, i) => `<td class="${i > 0 ? "gr-f" : ""}">${grEsc(grL(c))}</td>`).join("")}</tr>`).join("")}</table>`;
}

function grLesson(i) {
  gram.i = i;
  const g = GRAM[i];
  $("#gr-lesson").innerHTML = `
    <div class="gr-head"><div style="font-size:2em">${g.icon}</div><div class="gr-big">${grEsc(grL(g.name))}</div></div>
    <details class="ev-sec" open><summary>${t("grScene")}</summary><div class="ev-body"><p class="ev-p">${grEsc(grL(g.scene))}</p></div></details>
    <details class="ev-sec" open><summary>${t("grRule")}</summary><div class="ev-body"><p class="ev-p">${grEsc(grL(g.rule))}</p></div></details>
    <details class="ev-sec" open><summary>${t("grTable")}</summary><div class="ev-body">${grTableHtml(g)}</div></details>
    <details class="ev-sec"><summary>${t("grNotes")}</summary><div class="ev-body"><p class="ev-p">${grEsc(grL(g.notes))}</p></div></details>
    <div style="text-align:center;margin-top:16px"><button class="big-btn" id="gr-go">${t("grStart")}</button>
      <div style="color:var(--text-dim);font-size:.85em;margin-top:6px">${t("grNeed")}</div></div>`;
  $("#gr-go").addEventListener("click", grStart);
  showScreen("screen-gram-lesson");
  window.scrollTo(0, 0);
}

function grStart() {
  const g = GRAM[gram.i];
  Object.assign(gram, { queue: shuffle(g.ex.map((_, k) => k)), q: 0, right: 0, wrong: [] });
  grQuestion();
}
function grQuestion() {
  const g = GRAM[gram.i];
  if (gram.q >= gram.queue.length) { grFinish(); return; }
  const item = g.ex[gram.queue[gram.q]];
  const order = shuffle(item.opts.map((_, k) => k));
  $("#gr-lesson").innerHTML = `
    <div style="display:flex;justify-content:space-between;color:var(--text-dim);font-size:.9em;margin-top:8px">
      <span>${grT("grQ", gram.q + 1, gram.queue.length)}</span><span>${g.icon} ${grEsc(grL(g.name))}</span><span>✓ ${gram.right}</span></div>
    <div style="background:var(--panel);border:2px solid var(--chac);border-radius:var(--radius);padding:18px 15px;margin-top:10px">
      <div class="gr-q">${grEsc(grL(item.q))}</div>
      <div class="gr-opts" id="gr-opts"></div>
      <div id="gr-fb"></div>
    </div>`;
  const box = $("#gr-opts");
  order.forEach(k => {
    const b = document.createElement("button");
    b.className = "gr-opt"; b.dataset.k = k;
    const o = item.opts[k];
    b.innerHTML = typeof o === "string" ? `<span class="gr-lat">${grEsc(o)}</span>` : grEsc(grL(o));
    b.addEventListener("click", () => grAnswer(k, item));
    box.appendChild(b);
  });
  window.scrollTo(0, 0);
}
function grAnswer(k, item) {
  const ok = k === item.a;
  document.querySelectorAll(".gr-opt").forEach(b => { b.disabled = true; if (+b.dataset.k === item.a) b.classList.add("correct"); else if (+b.dataset.k === k) b.classList.add("wrong"); });
  if (ok) gram.right++; else gram.wrong.push(item);
  gram.q++;
  $("#gr-fb").innerHTML = `<div class="ans-card" style="margin-top:12px">
      <div style="color:${ok ? "var(--good)" : "var(--bad)"};margin-bottom:6px">${ok ? t("rightMark") : t("wrongMark")}</div>
      <div class="etym-label" style="color:var(--gold);font-size:.85em">${t("grWhy")}</div>
      <div class="ev-p">${grEsc(grL(item.why))}</div>
      <div class="continue-wrap"><button class="continue-btn" id="gr-next">${t("nextQ")}</button></div></div>`;
  $("#gr-next").addEventListener("click", grQuestion);
  $("#gr-next").focus();
}
function grFinish() {
  const g = GRAM[gram.i], st = grState();
  const score = gram.right / gram.queue.length, pass = score >= GRAM_PASS;
  const rec = st.done[g.id] || { best: 0, n: 0 };
  rec.n++; rec.best = Math.max(rec.best, score);
  if (pass || st.done[g.id]) st.done[g.id] = rec;
  save();
  const next = GRAM[gram.i + 1];
  $("#gr-lesson").innerHTML = `
    <div class="gr-head"><div style="font-size:2em">${pass ? "🎓" : "💪"}</div>
      <div class="gr-big">${pass ? t("grPassMark") : t("grDone")}</div></div>
    <div class="cur-stats"><div class="cur-stat"><b>${gram.right} / ${gram.queue.length}</b><span>${Math.round(score * 100)}%</span></div></div>
    ${gram.wrong.length ? `<div class="etym-label" style="color:var(--gold);font-size:.85em;margin-top:10px">${t("cursusWeakTitle")}</div>` +
      gram.wrong.map(w => `<div class="ev-p" style="font-size:.92em">${grEsc(grL(w.q))}<br><span style="color:var(--text-dim)">${grEsc(grL(w.why))}</span></div>`).join("") : ""}
    <div class="continue-wrap" style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px">
      ${pass && next ? `<button class="continue-btn" id="gr-nextst">${t("grNext")}</button>` : ""}
      <button class="continue-btn" id="gr-retry" style="background:var(--panel2);color:var(--text)">${t("grRetry")}</button>
      <button class="continue-btn" id="gr-road2" style="background:var(--panel2);color:var(--text)">${t("grBack")}</button>
    </div>`;
  if ($("#gr-nextst")) $("#gr-nextst").addEventListener("click", () => grLesson(gram.i + 1));
  $("#gr-retry").addEventListener("click", () => grLesson(gram.i));
  $("#gr-road2").addEventListener("click", renderGram);
  window.scrollTo(0, 0);
}

$("#btn-gram").addEventListener("click", renderGram);
$("#gr-home").addEventListener("click", () => showScreen("screen-title"));
$("#gr-back").addEventListener("click", renderGram);
$("#sel-lang").addEventListener("change", () => {
  const shown = document.querySelector(".screen.show");
  if (shown && shown.id === "screen-gram") renderGram();
});
if (typeof tgChoose === "function") {
  const _grChoose = tgChoose;
  tgChoose = function (T) {
    _grChoose(T);
    const shown = document.querySelector(".screen.show");
    if (shown && (shown.id === "screen-gram" || shown.id === "screen-gram-lesson")) renderGram();
  };
}
if (typeof applyI18n === "function") applyI18n();
