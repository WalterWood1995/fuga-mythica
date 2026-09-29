/* =====================================================
   RADIX LATINA — 联想链:字母 → 意象 → 词根群 → 加前后缀成词
   两层分明:
     · hooks 里的「意象」是记忆钩子(靠字形与发音去联想),不是词源主张;
     · roots 里挂的词根、词义、以及点开后的来历,都是有据的。
   界面上会明确标注哪一层是联想、哪一层是史实。
   ===================================================== */
const CHAIN = {
A:{ line:"牛角尖 → 高处 → 张口说不 → 一口气",
  hooks:[
   {img:"🐂 倒过来的牛角:尖、角、弯弓、兵器", roots:["acr","ang","arc","arm"]},
   {img:"⛰️ 尖顶朝上:高、增、星空、空气", roots:["aug","astr","aer","alt"]},
   {img:"🚫 张开嘴说「不」:否定、相反、另一个", roots:["a","anti","ali"]},
   {img:"💨 一口气:呼吸、灵魂、爱、感觉", roots:["anim","am","aesth"]},
   {img:"🚶 两条腿在走:走、做、合适、田", roots:["ambul","act","apt","agr"]}]},
B:{ line:"房子的底 → 好与美 → 生命 → 喝",
  hooks:[
   {img:"🏠 房子的地基:底、基础、重压", roots:["bas","baro"]},
   {img:"🙂 好与美:善、美、优", roots:["bon","bel"]},
   {img:"🌱 生命:活着、生物", roots:["bio"]},
   {img:"🥤 张嘴喝、用力扔", roots:["bib","bolo"]}]},
C:{ line:"手掌抓 → 头与心 → 围一圈 → 看得清",
  hooks:[
   {img:"✋ 张开的手在抓:拿、取、抓住", roots:["cap","cap4","cid"]},
   {img:"❤️ 身体的中心:心、身体、头", roots:["cord","cardi","corp"]},
   {img:"⭕ 一个圈:圆、绕、十字、关起来", roots:["circ","cruc","clav","cav"]},
   {img:"🔆 看得清:亮、白、辨别、确定", roots:["clar","cand","cern","cert"]},
   {img:"🗣️ 喊出来:喊、召唤、信", roots:["clam","cit","cred"]},
   {img:"🚶 走与跑:走、跑、耕", roots:["ced","curr","cult","camp"]}]},
D:{ line:"两根手指 → 指着说 → 给出去 → 硬且久",
  hooks:[
   {img:"✌️ 两:二、十、分开", roots:["du","dec2","div"]},
   {img:"👉 指着说:说、教、意见", roots:["dic","doc","dox"]},
   {img:"🎁 手里给出:给、值得、得体", roots:["don","dign","dec"]},
   {img:"🪨 硬而久:硬、密、持久、痛", roots:["dur","dens","dol"]},
   {img:"🏠 屋里的主人:家、主、神", roots:["dom","dei"]},
   {img:"🐎 牵着走:引导、跑道、睡", roots:["duc","drom","dorm"]}]},
E:{ line:"向外 → 存在 → 平等 → 干活",
  hooks:[
   {img:"➡️ 往外走:出、外、上", roots:["ex","exo","epi"]},
   {img:"🫀 在这里:存在、是", roots:["ess"]},
   {img:"⚖️ 两边一样高:相等、公平", roots:["equ"]},
   {img:"🔨 使力气:工作、能量、学", roots:["ergo","stud"]},
   {img:"🏠 自家的地盘:家、环境、习俗", roots:["eco","eth"]}]},
F:{ line:"做出来 → 有形状 → 带着走 → 流动的火",
  hooks:[
   {img:"🛠️ 动手做:做、制作、形", roots:["fac","fabr","form"]},
   {img:"🤲 带着走:带、送、逃", roots:["fer","fug"]},
   {img:"🔥 火与花:火焰、炉、花、果", roots:["flam","foc","flor","fruct"]},
   {img:"🌊 流与弯:流、弯、折", roots:["flu","flect"]},
   {img:"🤝 说出来算数:说、信、名声、牢固", roots:["fat","fid","fam","firm"]},
   {img:"🧵 一条线到头:线、结束、界限", roots:["fil","fin"]}]},
G:{ line:"生出来 → 一步一步 → 刻下来 → 沉甸甸",
  hooks:[
   {img:"👶 生出来:生、种族、家族", roots:["gen","gyn","ger"]},
   {img:"👣 迈步:步、走、做", roots:["grad","gest"]},
   {img:"✍️ 刻与写:写、字、舌头", roots:["graph","gram","gloss"]},
   {img:"🪨 沉与大:重、大、群、球", roots:["grav","grand","greg","glob"]},
   {img:"🧠 知道并感谢", roots:["gnos","grat"]}]},
H:{ line:"人从土里来 → 抓住 → 招待客人 → 水与火",
  hooks:[
   {img:"🌍 土与人:土、人、相同", roots:["hum","homo"]},
   {img:"🤝 拿住、继承", roots:["hab","hered","heres"]},
   {img:"🚪 门口的客人(也可能是敌人)", roots:["host","hier"]},
   {img:"💧 水与湿:水、湿、睡", roots:["hydr","hygr","hypn"]},
   {img:"😱 发抖与过度", roots:["hor","hyper","heter"]}]},
I:{ line:"进去 → 不 → 一样 → 自己",
  hooks:[
   {img:"➡️ 一根竖线插进去:进入、之间", roots:["inter"]},
   {img:"🚫 竖线一挡:不、无", roots:["in"]},
   {img:"🖼️ 像与个人:像、图标、个人的", roots:["imag","icon","idio"]},
   {img:"🏝️ 孤立的一点:岛、完整、相等", roots:["insul","integr","iso"]}]},
J:{ line:"法与誓 → 判 → 扔 → 连接",
  hooks:[
   {img:"⚖️ 举手起誓:法、誓、正义", roots:["jur","just"]},
   {img:"👨‍⚖️ 判断", roots:["jud"]},
   {img:"🏹 投出去:扔、连接", roots:["ject","junct"]}]},
K:{ line:"拉丁人几乎不用 K",
  hooks:[{img:"📏 只在希腊借词里:千", roots:["kilo"]}]},
L:{ line:"举起 → 捡起来读 → 绑住 → 发光",
  hooks:[
   {img:"🪶 举起来、变轻", roots:["lev","long"]},
   {img:"👁️ 一个个捡起字:选、读、词、字母", roots:["leg","lex","liter","log"]},
   {img:"🪢 绑与界:绑、边界、线", roots:["lig","lim","lin","lat"]},
   {img:"💡 光与月:光、月、洗", roots:["lumin","lun","lav"]},
   {img:"🗣️ 说与玩:说、玩、赞美", roots:["loqu","lud","laud"]},
   {img:"🥛 奶与劳动", roots:["lact","lab"]}]},
M:{ line:"手在动 → 送出去 → 大与小 → 海与母",
  hooks:[
   {img:"✋ 手:手、命令、托付", roots:["man","mand"]},
   {img:"📤 动与送:动、送、放", roots:["mov","mitt"]},
   {img:"📏 大与小:大、小、多、量", roots:["magn","min","mult","meter"]},
   {img:"🌊 海与母:海、母、月、季", roots:["mar","mater","mens"]},
   {img:"💀 死与变:死、变、习俗", roots:["mort","mut","mor"]},
   {img:"😮 惊奇与神秘", roots:["mir","myst","mon"]}]},
N:{ line:"名字 → 数数 → 夜里出生 → 说不",
  hooks:[
   {img:"🏷️ 起名与标记:名、标记、宣告", roots:["nomin","not","nunc"]},
   {img:"🔢 数与新:数、新", roots:["numer","nov","neo"]},
   {img:"🌙 夜与生:夜、出生、养育", roots:["noct","nasc","nutr"]},
   {img:"🚫 摇头说不:否定、有害", roots:["neg","noc"]},
   {img:"⛵ 船与岛", roots:["nav","nes"]}]},
O:{ line:"一只眼 → 一张嘴 → 一个圆 → 全部",
  hooks:[
   {img:"👁️ 眼睛就是 O:眼、看、视觉", roots:["ocul","ops","ophthalm"]},
   {img:"👄 张开的嘴:口、说、歌、闻", roots:["or","od","ol"]},
   {img:"⭕ 圆与秩序:圆、轮、秩序、波", roots:["orb","ord","und"]},
   {img:"🌐 全部与选择", roots:["omni","opt","olig"]},
   {img:"🔨 干活与影子", roots:["oper","umbr"]}]},
P:{ line:"脚走路 → 放下 → 挂起来 → 父与民",
  hooks:[
   {img:"🦶 脚与步:脚、步、走过", roots:["ped","pass","port"]},
   {img:"📦 放与挂:放、挂、称、压", roots:["pos","pend","press"]},
   {img:"👨‍👩‍👧 父与民:父、人民、自己的", roots:["pater","pop","propr"]},
   {img:"➗ 分与折:部分、折、平", roots:["part","plic","plan","plat"]},
   {img:"🥇 最前面:第一、近、寻求", roots:["prim","prox","pet"]},
   {img:"💡 显现与光", roots:["phen","phot"]}]},
Q:{ line:"四条腿 → 安静 → 追问",
  hooks:[
   {img:"4️⃣ 四与多少", roots:["quadr","quot"]},
   {img:"🤫 安静", roots:["quies"]},
   {img:"❓ 追着问:寻求、追问", roots:["quir"]}]},
R:{ line:"国王直着走 → 轮子转 → 破开 → 笑",
  hooks:[
   {img:"👑 直与统治:统治、直、规矩", roots:["reg","rig"]},
   {img:"🎡 轮与光线:轮、光线、河岸", roots:["rot","radi","riv"]},
   {img:"💥 破与抓:破、抓、粗", roots:["rupt","rap","rud"]},
   {img:"😄 笑与回:笑、再一次", roots:["rid","re"]}]},
S:{ line:"站住 → 跟上 → 看、听、写 → 神圣",
  hooks:[
   {img:"🧍 站与坐:站、立、留", roots:["sta","sist","sed"]},
   {img:"🐾 跟随与跳", roots:["sequ","sult"]},
   {img:"👁️ 看、听、知、写", roots:["spec","son","sci","scrib"]},
   {img:"🙏 神圣与承诺", roots:["sacr","spond","sign"]},
   {img:"☀️ 太阳与星:太阳、星、独", roots:["sol","stell","sol2"]},
   {img:"😮‍💨 呼吸与希望", roots:["spir","sper","sent"]},
   {img:"🔓 松开与拉紧", roots:["solv","string","sec"]}]},
T:{ line:"拉紧 → 持住 → 盖上 → 时间",
  hooks:[
   {img:"🪢 拉与伸:拉、伸、织", roots:["tract","tend","tex"]},
   {img:"🤲 拿住与忍", roots:["ten","tol"]},
   {img:"🏠 盖与放:盖、放置", roots:["tect","thes"]},
   {img:"⏳ 时间与慢", roots:["temp","tard"]},
   {img:"🔊 声音与远", roots:["ton","tele"]},
   {img:"🙏 神与怕", roots:["theo","tim"]}]},
U:{ line:"一 → 用 → 城 → 最远",
  hooks:[
   {img:"1️⃣ 一与合一", roots:["un"]},
   {img:"🛠️ 使用", roots:["ut"]},
   {img:"🏛️ 城与远", roots:["urb","ult"]}]},
V:{ line:"来 → 看 → 转 → 活",
  hooks:[
   {img:"🚶 来与走:来、运、路", roots:["ven","veh","via"]},
   {img:"👀 看与真:看、真、叫", roots:["vid","ver","voc"]},
   {img:"🔄 转与滚:转、滚、倾向", roots:["vert","volv","verg"]},
   {img:"💪 活与强:活、强、胜", roots:["viv","val","vinc"]},
   {img:"🍷 酒与衣:酒、衣、空", roots:["vin","vest","vac"]},
   {img:"🗳️ 意愿与誓言", roots:["vol","vot"]}]},
W:{ line:"拉丁语没有 W", hooks:[{img:"🚫 拉丁语不用 W;日耳曼语的 w- 进法语常变 gu-(werra → guerre)", roots:[]}]},
X:{ line:"交叉 → 干、陌生",
  hooks:[{img:"❌ 交叉的两笔:X 在拉丁读 /ks/;希腊借词里有 xero-(干)、xen-(外来的,词族较小)", roots:["xero","xen"]}]},
Y:{ line:"希腊进口的字母",
  hooks:[{img:"🇬🇷 看到 y 就想希腊:hydr-(水)、hypn-(睡)、psych-(心)", roots:["hydr","hypn","psych"]}]},
Z:{ line:"被赶出去又请回来",
  hooks:[{img:"🦓 只在希腊借词里:zoo-(动物)、zym-(发酵)", roots:["zoo","zym"]}]},
};

/* ---------- 前缀 / 后缀:加在词根前后,批量造词 ---------- */
const AFFIX = {
  pre: [
    { f:"ad- (a-, ac-, af-, ag-, al-, ap-, as-, at-)", m:"朝向、加强", ex:"ad+venire → advenir 到来 · ad+firmare → affirmer 肯定" },
    { f:"ab- / abs-", m:"离开", ex:"ab+ducere → abduct 拐走 · abs+tenere → abstenir 戒" },
    { f:"com- / con- (col-, cor-, co-)", m:"一起、彻底", ex:"con+venire → convenir 合适 · col+ligere → collect 收集" },
    { f:"de-", m:"向下、去掉、彻底", ex:"de+scendere → descendre 下 · de+forma → déformer 变形" },
    { f:"dis- / di- / dif-", m:"分开、否定", ex:"dis+ponere → disposer 安排 · dif+ferre → différer 不同" },
    { f:"ex- / e- / ef-", m:"出去、往外", ex:"ex+portare → exporter 出口 · e+ducere → éduquer 教育" },
    { f:"in- / im- / il- / ir-", m:"①进入 ②不", ex:"in+portare → importer 进口 · in+possibilis → impossible 不可能" },
    { f:"inter- / entre-", m:"在…之间", ex:"inter+venire → intervenir 介入 · inter+nationem → international" },
    { f:"ob- / oc- / of- / op-", m:"对着、挡住", ex:"ob+stare → obstacle 障碍 · op+ponere → opposer 反对" },
    { f:"per-", m:"穿过、彻底", ex:"per+manere → permanent 持久 · per+fectus → parfait 完美" },
    { f:"prae- / pré- / pre-", m:"在前、预先", ex:"prae+videre → prévoir 预见 · pre+ponere → preposition" },
    { f:"pro- / pour-", m:"向前、代替", ex:"pro+ducere → produire 生产 · pro+nomen → pronom 代词" },
    { f:"re- / ré-", m:"再、回", ex:"re+venire → revenir 回来 · re+facere → refaire 重做" },
    { f:"sub- / sou- / su-", m:"在下、稍微", ex:"sub+portare → supporter 支撑 · sub+urbs → suburb 郊区" },
    { f:"super- / sur-", m:"在上、超过", ex:"super+videre → superviser 监督 · sur+vivere → survivre 幸存" },
    { f:"trans- / tra-", m:"穿过、转移", ex:"trans+portare → transporter 运输 · tra+ducere → traduire 翻译" },
    { f:"circum- / circ-", m:"绕一圈", ex:"circum+stare → circonstance 情况" },
    { f:"contra- / contre-", m:"相反", ex:"contra+dicere → contredire 反驳" },
    { f:"se-", m:"分开、独自", ex:"se+parare → séparer 分开 · se+ducere → séduire 引诱" },
    { f:"ante- / anti-", m:"①在前 ②相反(希腊)", ex:"ante+cedere → antécédent 先行 · anti+biotikos → antibiotique" },
  ],
  suf: [
    { f:"-tiōnem → -tion / -zione / -ción", m:"动作或结果(名词)", ex:"actio → action / azione / acción" },
    { f:"-tōrem → -teur / -tore / -dor", m:"做这件事的人或工具", ex:"actor → acteur / attore / actor" },
    { f:"-bilis → -ble / -bile / -ble", m:"可…的", ex:"portabilis → portable 可携带的" },
    { f:"-ōsus → -eux / -oso / -oso", m:"充满…的", ex:"periculosus → dangereux / pericoloso / peligroso" },
    { f:"-ālis → -al / -ale / -al", m:"…的(形容词)", ex:"nationalis → national" },
    { f:"-ārium → -aire / -ario / -ero", m:"与…有关的人或地方", ex:"bibliothecarius → bibliothécaire 图书管理员" },
    { f:"-mentum → -ment / -mento / -miento", m:"动作的结果或工具", ex:"documentum → document / documento" },
    { f:"-antia → -ance / -anza / -ancia", m:"状态(名词)", ex:"substantia → substance / sostanza / sustancia" },
    { f:"-īvus → -if / -ivo / -ivo", m:"倾向于…的", ex:"activus → actif / attivo / activo" },
    { f:"-itātem → -ité / -ità / -idad", m:"抽象性质", ex:"libertatem → liberté / libertà / libertad" },
    { f:"-ficāre → -fier / -ficare / -ficar", m:"使成为", ex:"clarificare → clarifier 澄清" },
    { f:"-escere → -aître / -escere / -ecer", m:"开始变成", ex:"crescere → croître / crescere / crecer" },
    { f:"-ulus / -ellus → -eau / -ello / -illo", m:"小(指小后缀)", ex:"castellum → château / castello / castillo" },
    { f:"-ismus / -ista → -isme / -ismo · -iste / -ista", m:"主义 / 从事者", ex:"artista → artiste / artista" },
  ],
};

/* =====================================================
   造词树:骨架 → 换元音 → 换辅音 → 换位置 → 加缀
   这四种操作都是有据的历史机制:
     换元音 = 印欧语元音交替(ablaut),拉丁语里成组出现;
     换辅音 = 格林定律等规则对应(拉丁 p ↔ 日耳曼 f 等);
     换位置 = metathesis,罗曼语里有成批实例;
     加缀   = 前缀后缀。
   每条都给真实的词,不编造。
   ===================================================== */
const SWAP = {
  vowel: {
    name: "换元音:同一副骨架,换个元音就是另一个词",
    why: "印欧语的词根本来就带「元音交替」(ablaut):同一串辅音,元音换成 e / o / 零,分别做动词、名词、完成体。拉丁语和希腊语里成组保留。",
    rows: [
      { skel:"l-g", core:"捡起、挑选", e:"legere 读、选", o:"希腊 logos 话、道理", zero:"lectus 被选的 → lecture", words:"élire 选举 · lecture 阅读 · logique 逻辑 · collection 收集" },
      { skel:"t-g", core:"盖", e:"tegere 盖", o:"toga 托加袍(盖在身上的)", zero:"tectum 屋顶", words:"protéger 保护 · toge 长袍 · détecter 揭开盖子 → 侦测" },
      { skel:"p-d", core:"脚", e:"希腊 pedon 地面", o:"希腊 pous/podos 脚", zero:"拉丁 pes/pedis 脚", words:"pédale 踏板 · podium 台 · piéton 行人 · pieuvre?(无关)" },
      { skel:"g-n", core:"生", e:"genus 种族", o:"希腊 gonos 后代", zero:"gnatus → natus 出生的", words:"genre 类 · gène 基因 · naître 出生 · nation 民族" },
      { skel:"f-r", core:"带", e:"ferre 带", o:"希腊 phoros 携带者", zero:"latus(用了另一个词根补位)", words:"transférer 转移 · métaphore 隐喻 · offrir 提供" },
      { skel:"d-c", core:"说、指", e:"dicere 说", o:"希腊 dokein 认为 → doxa", zero:"dictus 说过的", words:"dire 说 · dictionnaire 词典 · paradoxe 悖论 · indiquer 指出" },
      { skel:"c-p", core:"拿", e:"capere 拿", o:"拉丁 occupare 占", zero:"captus 被拿的 → captif", words:"capable 有能力的 · recevoir 收到 · concept 概念 · occuper 占据" },
      { skel:"s-d", core:"坐", e:"sedere 坐", o:"solium 座(o 级变体)", zero:"sessio 坐着 → session", words:"séance 会议 · résider 居住 · session 会期 · siège 座位" },
    ]
  },
  cons: {
    name: "换辅音:同一个印欧词,在不同语族换了一套辅音",
    why: "格林定律(Grimm 1822):日耳曼语整体换了一套辅音。所以英语的本族词与拉丁词看似两样,其实是同一个词的两种发音。掌握这张对应表,英语词与拉丁词根可以互相换算。",
    rows: [
      { pair:"拉丁 p ↔ 英语 f", ex:"pater / father · pes-pedis / foot · piscis / fish · plenus / full · pro / for" },
      { pair:"拉丁 t ↔ 英语 th", ex:"tres / three · tenuis / thin · tu / thou · frater / brother" },
      { pair:"拉丁 c(k) ↔ 英语 h", ex:"cornu / horn · canis / hound · cor-cordis / heart · centum / hundred · caput / head" },
      { pair:"拉丁 d ↔ 英语 t", ex:"duo / two · dens-dentis / tooth · domare / tame · decem / ten" },
      { pair:"拉丁 g ↔ 英语 k", ex:"genus / kin · gnoscere / know · granum / corn · gelu / cool" },
      { pair:"拉丁 f(< bh) ↔ 英语 b", ex:"frater / brother · ferre / bear · fagus / beech · fu-(be) / be" },
    ]
  },
  meta: {
    name: "换位置:辅音前后对调,也生出新词",
    why: "metathesis(换位)是真实且常见的音变,西班牙语、法语里有成批实例。认出它,就不会被拼写骗过去。",
    rows: [
      { from:"parabola(比喻)", to:"西 palabra 词", note:"r 与 l 对调" },
      { from:"periculum(危险)", to:"西 peligro", note:"r 与 l 对调" },
      { from:"miraculum(奇迹)", to:"西 milagro", note:"r 与 l 对调" },
      { from:"crocodilus", to:"西 cocodrilo 鳄鱼", note:"r 换了位置" },
      { from:"formaticum(奶酪)", to:"法 fromage", note:"r 前移" },
      { from:"*tenebras", to:"葡 trevas 黑暗", note:"r 前移" },
      { from:"integrare", to:"西 entregar 交付", note:"r 换位 + 元音变化" },
    ]
  },
};
