/* =====================================================
   FUGA MYTHICA — Chapter II morphology & word families
   ===================================================== */
const MORPH2 = {
  /* ---- L1 The Lyre ---- */
  musica: { m:["词根 mus-(缪斯)+ -ica(…之艺)","root mus- (Muse) + -ica (art of)"], f:[
    ["musician","music + -ian(人)","music + -ian (person)","音乐家","one of music"],
    ["museum","muse(缪斯)+ -um(场所)","muse + -um (place)","博物馆=缪斯殿","the Muses' hall"],
    ["musical","music + -al(…的)","music + -al","音乐的","of music"]]},
  carmen: { m:["词根 can-/carm-(唱)+ -men(名词尾)","root can-/carm- (sing) + -men"], f:[
    ["charm","carmen → 法语 charme","carmen → French charme","魅力=歌之魔力","song-magic"],
    ["charming","charm + -ing","charm + -ing","迷人的","spell-casting"]]},
  lyra: { m:["希腊借词 lyra(里拉琴)","Greek loan lyra"], f:[
    ["lyric","lyr(琴)+ -ic(…的)","lyr (lyre) + -ic","抒情的;歌词","sung to the lyre"],
    ["lyricist","lyric + -ist(人)","lyric + -ist","作词人","the lyric-maker"],
    ["Lyra","星座名原样保留","kept whole as a constellation","天琴座","the Lyre in the sky"]]},
  chorda: { m:["希腊 chorde(琴弦/肠线)","Greek chorde (gut-string)"], f:[
    ["chord","和弦=同拨数弦","strings struck together","和弦","a chord"],
    ["cord","粗线;脊髓 spinal cord","a rope; the spinal cord","绳;索","cord"]]},
  sonus: { m:["词根 son-(响)+ -us","root son- (sound) + -us"], f:[
    ["sonic","son + -ic(…的)","son + -ic","声音的","of sound"],
    ["resonate","re(回)+ son(响)+ -ate","re (back) + son + -ate","共鸣","to sound back"],
    ["unison","uni(一)+ son(声)","uni (one) + son","齐声","one sound"],
    ["consonant","con(共同)+ son + -ant","con + son + -ant","辅音=同响之音","sounding along"]]},
  cantus: { m:["词根 cant-(唱)+ -us","root cant- (sing) + -us"], f:[
    ["chant","cant → 法语","cant via French","吟唱","to chant"],
    ["enchant","en(施于)+ chant(唱)","en (upon) + chant","施魔法=唱进心里","to sing a spell upon"],
    ["cantata","cant + -ata(乐曲)","cant + -ata","康塔塔","a sung piece"],
    ["accent","ac(附加)+ cent(唱)","ac (to) + cent (sing)","口音=说话的歌调","the song in speech"]]},
  poeta: { m:["希腊 poie-(创作)+ -ta(者)","Greek poie- (make) + -ta (one who)"], f:[
    ["poem","poie + -m","poie + -m","诗=被创作之物","the made thing"],
    ["poetry","poet + -ry(总称)","poet + -ry","诗歌","the maker's art"]]},
  ars: { m:["词根 art-(技艺),ars 为主格","root art- (skill); bare form"], f:[
    ["artist","art + -ist(人)","art + -ist","艺术家","one of art"],
    ["artificial","arti(技)+ fic(做)+ -ial","arti + fic (make) + -ial","人工的=靠技艺做的","made by skill"],
    ["artisan","art + -isan(匠人)","art + -isan","工匠","the craftsman"]]},
  tibia: { m:["词根 tibi-(胫骨/骨笛)+ -a","root tibi- (shin/flute) + -a"], f:[
    ["tibia (解剖)","医学沿用原词","kept whole in anatomy","胫骨","the shin-bone"],
    ["tibial","tibi + -al(…的)","tibi + -al","胫骨的","of the shin"]]},
  tympanum: { m:["希腊 tympan-(鼓)+ -um","Greek tympan- (drum) + -um"], f:[
    ["timpani","意语复数=定音鼓","Italian plural","定音鼓","kettledrums"],
    ["tympanic","tympan + -ic","tympan + -ic","鼓膜的","of the eardrum"]]},
  numerus: { m:["词根 numer-(数)+ -us","root numer- (number) + -us"], f:[
    ["number","numer 经法语 nombre","numer via French","数字","number"],
    ["numerous","numer + -ous(多…的)","numer + -ous","众多的","many in number"],
    ["enumerate","e(逐个)+ numer + -ate","e (out) + numer + -ate","列举=逐个数","to count out"]]},
  versus: { m:["词根 vert-/vers-(转)+ -us","root vert-/vers- (turn) + -us"], f:[
    ["verse","vers(转行)→ 诗行","vers (the turn) → line","诗行","a verse"],
    ["version","vers + -ion","vers + -ion","版本=转出的样子","a turning"],
    ["reverse","re(向回)+ verse(转)","re (back) + verse","颠倒","turned back"],
    ["universe","uni(一)+ verse(转)","uni (one) + verse","宇宙","all turned to one"]]},
  fabula: { m:["词根 fa-(说)+ -bula(名词尾)","root fa- (speak) + -bula"], f:[
    ["fable","fabula 经法语","via French","寓言","a fable"],
    ["fabulous","fabul + -ous","fabul + -ous","神奇的=像故事的","story-like"],
    ["affable","af(易于)+ fa(说)+ -ble","af (to) + fa (speak) + -ble","和蔼可谈的","easy to speak to"]]},
  scaena: { m:["希腊 skene(舞台棚)+ -a","Greek skene (stage-tent) + -a"], f:[
    ["scene","scaena → scene","scaena → scene","场景","a scene"],
    ["scenario","意语:剧情梗概","Italian: plot outline","脚本","the scene-plan"],
    ["scenery","scene + -ry","scene + -ry","布景;风景","the staged view"]]},
  theatrum: { m:["希腊 thea-(观看)+ -trum(场所)","Greek thea- (watch) + -trum (place)"], f:[
    ["theater","观看之地","the watching-place","剧场","theater"],
    ["theatrical","theatr + -ical","theatr + -ical","戏剧性的","stage-like"]]},
  plausus: { m:["词根 plaud-/plaus-(拍手)+ -us","root plaud-/plaus- (clap) + -us"], f:[
    ["applaud","ap(向)+ plaud(拍手)","ap (to) + plaud","鼓掌","to clap for"],
    ["plausible","plaus + -ible(值得…的)","plaus + -ible","貌似可信=值得鼓掌","clap-worthy"],
    ["explode","ex(轰出)+ plode(拍)——观众把演员\"拍\"下台!","ex (off) + plode (clap) — clapped off stage!","爆炸(原:喝倒彩轰下台)","to clap off → blow up"]]},
  silva: { m:["词根 silv-(林)+ -a","root silv- (forest) + -a"], f:[
    ["sylvan","silv + -an(…的)","silv + -an","森林的","of the woods"],
    ["Pennsylvania","Penn + silv(林)+ -ania","Penn + silv + -ania","宾州=佩恩林地","Penn's woods"],
    ["Silvia","林中女孩(人名)","girl of the forest","西尔维娅","the name Silvia"]]},
  arbor: { m:["词根 arbor-(树),裸词根词","root arbor- (tree), bare root"], f:[
    ["arboretum","arbor + -etum(园)","arbor + -etum (garden)","树木园","a tree-garden"],
    ["arboreal","arbor + -eal(…的)","arbor + -eal","树栖的","tree-dwelling"]]},
  fera: { m:["词根 fer-(野)+ -a","root fer- (wild) + -a"], f:[
    ["feral","fer + -al(…的)","fer + -al","野生的","gone wild"],
    ["fierce","fer → 法语 fiers","fer via French","凶猛的","wild-hearted"],
    ["ferocious","feroc + -ious","feroc + -ious","凶残的","full of wildness"]]},
  echo: { m:["希腊女神名 Echo(回声)","Greek nymph-name Echo"], f:[
    ["echo","原样保留","kept whole","回声","echo"],
    ["echolocation","echo + location(定位)","echo + location","回声定位(蝙蝠!)","how bats see"]]},

  /* ---- L2 The Wedding ---- */
  sponsa: { m:["词根 spond-/spons-(许诺)+ 阴性 -a","root spond-/spons- (pledge) + -a"], f:[
    ["spouse","spons → 法语 espous","spons via French","配偶=彼此许诺者","the pledged one"],
    ["sponsor","spons + -or(者)","spons + -or","赞助人=担保者","the pledger"],
    ["respond","re(回)+ spond(许诺)","re (back) + spond","回应=回诺","to pledge back"]]},
  sponsus: { m:["spond-/spons-(许诺)+ 阳性 -us","spond-/spons- (pledge) + -us"], f:[
    ["esposo (西)","sponsus 的西语后代","in Spanish","丈夫","husband"],
    ["époux (法)","sponsus 的法语后代","in French","丈夫","husband"]]},
  nuptiae: { m:["词根 nub-/nupt-(出嫁)+ -iae","root nub-/nupt- (wed) + -iae"], f:[
    ["nuptial","nupti + -al(…的)","nupti + -al","婚礼的","of the wedding"],
    ["prenuptial","pre(婚前)+ nuptial","pre + nuptial","婚前的","before the wedding"]]},
  taeda: { m:["词根 taed-(松木火把)+ -a","root taed- (pine-torch) + -a"], f:[
    ["taeda (植物学)","湿地松学名 Pinus taeda","the loblolly pine Pinus taeda","火炬松","the torch-pine"]]},
  flos: { m:["词根 flor-(花),flos 为主格","root flor- (flower); bare form"], f:[
    ["floral","flor + -al(…的)","flor + -al","花的","of flowers"],
    ["flourish","flor + -ish(动词尾)","flor + -ish","繁荣=开花","to flower"],
    ["flora","flor + -a:花神/植物群","flor + -a","植物群","the flower-goddess's realm"],
    ["flour","谷物之\"花\"=最细的粉","the flower of the grain","面粉","the finest of the meal"]]},
  rosa: { m:["词根 ros-(玫瑰)+ -a","root ros- (rose) + -a"], f:[
    ["rosary","ros + -ary(一串)","ros + -ary","念珠=一串玫瑰","a garland of roses"],
    ["rosette","ros + -ette(小)","ros + -ette (little)","玫瑰花饰","a little rose"]]},
  lilium: { m:["词根 lili-(百合)+ -um","root lili- (lily) + -um"], f:[
    ["lily","lilium 缩短","lilium shortened","百合","lily"],
    ["fleur-de-lis","法语:百合之花","French: flower of the lily","法国王室纹章","the royal lily"]]},
  herba: { m:["词根 herb-(草)+ -a","root herb- (grass) + -a"], f:[
    ["herbal","herb + -al(…的)","herb + -al","草本的","of herbs"],
    ["herbivore","herbi(草)+ vor(吞吃)","herbi + vor (devour)","食草动物","the grass-eater"],
    ["herbicide","herbi + cid(杀)","herbi + cid (kill)","除草剂","the grass-killer"]]},
  pratum: { m:["词根 prat-(草地)+ -um","root prat- (meadow) + -um"], f:[
    ["prairie","prat → 法语 prairie","prat via French","大草原","the great meadow"],
    ["Prado","西语:草地→博物馆名","Spanish for meadow → the museum","普拉多","the Meadow Museum"]]},
  vipera: { m:["vivi(活)+ par(生产)+ -a 缩合","vivi (alive) + par (bear) fused"], f:[
    ["viper","vipera 缩短","shortened","毒蛇","viper"],
    ["viviparous","vivi + par + -ous","vivi + par + -ous","胎生的","live-bearing"]]},
  venenum: { m:["词根 venen-(药水/毒)+ -um","root venen- (potion/poison) + -um"], f:[
    ["venom","venen 经法语","via French","毒液","venom"],
    ["venomous","venom + -ous","venom + -ous","有毒的","full of venom"]]},
  vulnus: { m:["词根 vulner-(伤),vulnus 为主格","root vulner- (wound); bare form"], f:[
    ["vulnerable","vulner + -able(可…的)","vulner + -able","脆弱的=可受伤的","woundable"],
    ["invulnerable","in(不)+ vulnerable","in (not) + vulnerable","无懈可击的","unwoundable"]]},
  gaudium: { m:["词根 gaud-(欢)+ -ium","root gaud- (rejoice) + -ium"], f:[
    ["joy","gaud → 法语 joie","gaud via French joie","欢乐","joy"],
    ["rejoice","re(尽情)+ joice(欢)","re + joice","欢庆","to joy out loud"],
    ["gaudy","gaud + -y:过分欢庆=花哨","gaud + -y","花哨的","over-merry"]]},
  lacrima: { m:["词根 lacrim-(泪)+ -a","root lacrim- (tear) + -a"], f:[
    ["lacrimal","lacrim + -al(…的)","lacrim + -al","泪腺的","of tears"],
    ["lachrymose","lacrim + -ose(多…的)","lacrim + -ose","催泪的","tear-full"]]},
  dolor: { m:["词根 dol-(痛)+ -or(名词尾)","root dol- (grieve) + -or"], f:[
    ["condolence","con(共同)+ dol(痛)+ -ence","con + dol + -ence","吊唁=同悲","grieving together"],
    ["dolorous","dolor + -ous","dolor + -ous","悲痛的","grief-full"],
    ["indolent","in(不)+ dol(痛)+ -ent","in (not) + dol + -ent","懒惰的=怕吃苦的","avoiding all pain"]]},
  luctus: { m:["词根 lug-/luct-(哀悼)+ -us","root lug-/luct- (mourn) + -us"], f:[
    ["lugubrious","lugubr + -ious","lugubr + -ious","阴郁悲切的","mournful"]]},
  funus: { m:["词根 funer-(葬),funus 为主格","root funer- (funeral); bare form"], f:[
    ["funeral","funer + -al","funer + -al","葬礼","the funeral"],
    ["funereal","funer + -eal(…般的)","funer + -eal","如葬礼般阴沉的","funeral-like"]]},
  sepulcrum: { m:["sepel-(埋葬)+ -crum(场所)","sepel- (bury) + -crum (place)"], f:[
    ["sepulcher","sepulcrum 经法语","via French","陵墓","the burial place"],
    ["sepulchral","sepulchr + -al","sepulchr + -al","墓穴般的","tomb-like"]]},
  cinis: { m:["词根 ciner-(灰),cinis 为主格","root ciner- (ash); bare form"], f:[
    ["incinerate","in(成为)+ ciner(灰)+ -ate","in + ciner + -ate","焚化=化为灰","to turn to ash"],
    ["incinerator","incinerate + -or(器)","+ -or (machine)","焚化炉","the ash-maker"]]},
  fatum: { m:["词根 fa-(说)+ -tum(被…之事)","root fa- (speak) + -tum (thing spoken)"], f:[
    ["fate","fatum:神说定之事","the spoken doom","命运","fate"],
    ["fatal","fat + -al(…的)","fat + -al","致命的","fated to kill"],
    ["fairy","fata(命运女神)→ 法语 fée","fata → French fée","仙女","the fate-lady"]]},

  /* ---- L3 Gates Below ---- */
  inferi: { m:["词根 infer-(下方)+ -i(复数)","root infer- (below) + -i"], f:[
    ["inferior","infer + -ior(更…)","infer + -ior (more)","更低的","lower"],
    ["inferno","infer → 意语:地狱","infer → Italian","地狱之火","the world below"],
    ["infernal","infern + -al","infern + -al","地狱般的","hellish"]]},
  regnum: { m:["词根 reg-(统治)+ -num","root reg- (rule) + -num"], f:[
    ["reign","regnum 经法语","via French","统治","to reign"],
    ["interregnum","inter(之间)+ regnum","inter + regnum","王位空缺期","between reigns"]]},
  imperium: { m:["im+per(彻底准备/命令)+ -ium","im + per (command) + -ium"], f:[
    ["empire","imperium 经法语","via French","帝国","empire"],
    ["imperial","imperi + -al","imperi + -al","帝国的","of the empire"],
    ["imperative","imper + -ative","imper + -ative","命令式的;紧要的","commanding"]]},
  thronus: { m:["希腊 thronos(高座)","Greek thronos (high seat)"], f:[
    ["throne","thronus → throne","→ throne","王座","throne"],
    ["enthrone","en(置于)+ throne","en (upon) + throne","使登基","to seat on the throne"]]},
  sceptrum: { m:["希腊 skept-(倚仗)+ -rum","Greek skept- (lean on) + -rum"], f:[
    ["scepter","sceptrum → scepter","→ scepter","权杖","the ruling staff"]]},
  caverna: { m:["词根 cav-(空)+ -erna(场所)","root cav- (hollow) + -erna (place)"], f:[
    ["cave","cav → cave","cav → cave","洞","cave"],
    ["cavity","cav + -ity","cav + -ity","孔洞;蛀洞","a hollow"],
    ["excavate","ex(挖出)+ cav(空)+ -ate","ex (out) + cav + -ate","挖掘","to hollow out"]]},
  spelunca: { m:["希腊 spelynx(洞)+ -a","Greek spelynx (cave) + -a"], f:[
    ["spelunking","spelunc + -ing","spelunc + -ing","洞穴探险","caving"],
    ["speleology","speleo(洞)+ logy(学)","speleo + logy","洞穴学","cave-science"]]},
  abyssus: { m:["希腊 a(无)+ byssos(底)","Greek a (no) + byssos (bottom)"], f:[
    ["abyss","abyssus 缩短","shortened","深渊","the bottomless"],
    ["abyssal","abyss + -al","abyss + -al","深海的","of the deep"]]},
  vallis: { m:["词根 vall-(谷)+ -is","root vall- (valley) + -is"], f:[
    ["valley","vall 经法语 valée","via French","山谷","valley"],
    ["vale","诗歌用语","poetic form","谷","vale"]]},
  mons: { m:["词根 mont-(山),mons 为主格","root mont- (mountain); bare form"], f:[
    ["mountain","mont + -ain","mont + -ain","山","mountain"],
    ["Montana","mont + -ana(之地)","mont + -ana","蒙大拿=山地","mountain-land"],
    ["paramount","par(越过)+ amount(上山)","par + amount","至高无上的","above the mountain"],
    ["surmount","sur(越)+ mount(山)","sur (over) + mount","克服=翻山","to climb over"]]},
  collis: { m:["词根 coll-(丘)+ -is","root coll- (hill) + -is"], f:[
    ["collina (意)","coll + -ina","coll + -ina","丘陵","hill country"],
    ["hill","印欧同根的日耳曼支","the Germanic branch","小山","hill"]]},
  ripa: { m:["词根 rip-(岸)+ -a","root rip- (bank) + -a"], f:[
    ["riparian","rip + -arian(…的)","rip + -arian","河岸的","of the bank"],
    ["river","rip → 法语 rivière","rip via French rivière","河流(从\"岸\"变来!)","from bank to stream!"],
    ["arrive","ar(到达)+ rive(岸)","ar (to) + rive (bank)","到达=靠岸!","to reach the bank!"]]},
  fluvius: { m:["词根 flu-(流)+ -vius","root flu- (flow) + -vius"], f:[
    ["fluent","flu + -ent(正在…的)","flu + -ent","流利的","flowing"],
    ["fluid","flu + -id","flu + -id","流体","that which flows"],
    ["influence","in(流入)+ flu + -ence","in + flu + -ence","影响=流入的力量","a flowing-in"],
    ["influenza","意语:星辰\"流入\"的病=流感!","Italian: illness flowing from the stars = flu!","流感","the flu"]]},
  stagnum: { m:["词根 stagn-(死水)+ -um","root stagn- (standing water) + -um"], f:[
    ["stagnant","stagn + -ant","stagn + -ant","停滞的","unmoving"],
    ["stagnate","stagn + -ate","stagn + -ate","变死水","to still"]]},
  palus: { m:["词根 palud-(沼),palus 为主格","root palud- (marsh); bare form"], f:[
    ["paludal","palud + -al","palud + -al","沼泽的","of the marsh"]]},
  nebula: { m:["词根 nebul-(雾)+ -a","root nebul- (mist) + -a"], f:[
    ["nebula (天文)","星云沿用原词","kept whole in astronomy","星云","a sky-mist"],
    ["nebulous","nebul + -ous","nebul + -ous","模糊的","misty"]]},
  frigus: { m:["词根 frig-(寒),frigus 为主格","root frig- (cold); bare form"], f:[
    ["frigid","frig + -id(…的)","frig + -id","严寒的","icy"],
    ["refrigerator","re(再)+ friger(寒)+ -ator(器)","re + friger + -ator","冰箱","the cold-maker"]]},
  gelu: { m:["词根 gel-(冻),裸词根词","root gel- (freeze), bare root"], f:[
    ["gelatin","gel + -atin","gel + -atin","明胶","the frozen stuff"],
    ["gelato","意语:冰淇淋","Italian ice cream","冰淇淋","the frozen treat"],
    ["congeal","con(彻底)+ geal(冻)","con + geal","凝结","to freeze solid"]]},
  horror: { m:["词根 horr-(毛发直立)+ -or","root horr- (bristle) + -or"], f:[
    ["horrible","horr + -ible","horr + -ible","可怕的","hair-raising"],
    ["horrify","horr + -ify(使…)","horr + -ify","使恐惧","to make bristle"],
    ["abhor","ab(避开)+ hor(战栗)","ab (away) + hor","憎恶=吓得躲开","to shudder away from"]]},
  custos: { m:["词根 custod-(看守),custos 为主格","root custod- (guard); bare form"], f:[
    ["custody","custod + -y","custod + -y","监护;拘留","keeping"],
    ["custodian","custod + -ian(人)","custod + -ian","管理员","the keeper"]]},

  /* ---- L4 The Ferryman ---- */
  portitor: { m:["port(渡口)+ -itor(从业者)","port (crossing) + -itor (worker)"], f:[
    ["porter","port + -er(人)","port + -er","搬运工;门房","the carrier"],
    ["portage","port + -age","port + -age","陆运连水路","the carrying-place"]]},
  cymba: { m:["希腊 kymbe(小舟)+ -a","Greek kymbe (skiff) + -a"], f:[
    ["cymbal","同形词 cymbalum(钹)——碗形如小舟","kin cymbalum — bowl-shaped like a boat","钹","the cymbal"]]},
  ratis: { m:["词根 rat-(筏)+ -is","root rat- (raft) + -is"], f:[
    ["raft","日耳曼亲戚","the Germanic cousin","木筏","raft"]]},
  merces: { m:["词根 merc-(交易),merces=报酬","root merc- (trade); merces = pay"], f:[
    ["merchant","merc + -hant(人)","merc + -hant","商人","the trader"],
    ["mercenary","merc + -enary(为…的人)","merc + -enary","雇佣兵","the paid soldier"],
    ["mercy","merces → 法语:上天的报偿","merces → French: heaven's wage","怜悯","mercy"],
    ["market","merc + -atus","merc + -atus","市场","the trading place"]]},
  nummus: { m:["希腊 nomisma(通行币)","Greek nomisma (current coin)"], f:[
    ["numismatics","nomisma + -tics(学)","nomisma + -tics","钱币学","coin-study"]]},
  latratus: { m:["latr-(吠)+ -atus(名词尾)","latr- (bark) + -atus"], f:[
    ["latrant","latr + -ant","latr + -ant","狂吠的(雅词)","barking (rare)"]]},
  guttur: { m:["词根 guttur-(喉),裸词根词","root guttur- (throat), bare root"], f:[
    ["guttural","guttur + -al","guttur + -al","喉音的","from the throat"]]},
  ungula: { m:["unguis(指甲)+ -ula(小)","unguis (nail) + -ula (little)"], f:[
    ["ungulate","ungul + -ate(有…的)","ungul + -ate","有蹄类","the hoofed kind"]]},
  cauda: { m:["词根 caud-(尾)+ -a","root caud- (tail) + -a"], f:[
    ["coda","意语:乐曲的尾巴","Italian: the piece's tail","尾声","the coda"],
    ["queue","caud → 法语 queue","caud → French","队列=长尾","the waiting tail"],
    ["caudal","caud + -al","caud + -al","尾部的","of the tail"]]},
  pellis: { m:["词根 pell-(皮)+ -is","root pell- (skin) + -is"], f:[
    ["pelt","pellis → pelt","→ pelt","兽皮","the pelt"],
    ["pellicle","pell + -icle(小)","pell + -icle","薄膜=小皮","a little skin"]]},
  belua: { m:["词根 belu-(巨兽)+ -a","root belu- (beast) + -a"], f:[
    ["—","罕见词根,专属诗歌","a rare, poetic root","(巨兽)","(the vast beast)"]]},
  draco: { m:["希腊 drakon(巨蛇=凝视者)","Greek drakon (the staring one)"], f:[
    ["dragon","drakon → dragon","→ dragon","龙","dragon"],
    ["dragoon","龙骑兵","the dragon-soldier","龙骑兵","dragoon"],
    ["Draco","星座/人名","constellation & name","天龙座","the Dragon"]]},
  gigas: { m:["希腊 gigant-(巨人),gigas 为主格","Greek gigant- (giant); bare form"], f:[
    ["giant","gigant → giant","→ giant","巨人","giant"],
    ["gigantic","gigant + -ic","gigant + -ic","巨大的","giant-like"],
    ["gigabyte","giga(巨)+ byte","giga + byte","十亿字节","the giant byte"]]},
  nympha: { m:["希腊 nymphe(少女/仙女)","Greek nymphe (maiden)"], f:[
    ["nymph","nympha → nymph","→ nymph","宁芙","nymph"],
    ["water lily 学名 Nymphaea","睡莲=水仙女之花","the water-nymph's flower","睡莲属","Nymphaea"]]},
  anima: { m:["词根 anim-(气息)+ 阴性 -a","root anim- (breath) + -a"], f:[
    ["animation","anim + -ation","anim + -ation","动画=赋予灵魂","soul-giving"],
    ["animism","anim + -ism","anim + -ism","万物有灵论","all-things-have-souls"],
    ["equanimity","equ(平)+ anim(心)+ -ity","equ (even) + anim + -ity","平静=心的平衡","an even soul"]]},
  spectrum: { m:["词根 spec-(看)+ -trum(之物)","root spec- (look) + -trum (thing)"], f:[
    ["specter","spectrum → specter","→ specter","幽灵=显形之物","the appearing thing"],
    ["inspect","in(向内)+ spect(看)","in + spect","检查","to look into"],
    ["respect","re(再)+ spect(看)","re (again) + spect","尊重=再看一眼","worth a second look"],
    ["spectacular","spectacul + -ar","spectacul + -ar","壮观的","a great sight"]]},
  phantasma: { m:["希腊 phan-(显现)+ -tasma","Greek phan- (appear) + -tasma"], f:[
    ["phantom","phantasma 经法语","via French","幻影","phantom"],
    ["fantasy","phan + -tasy","phan + -tasy","幻想","the appearing dream"],
    ["emphasis","em(在内)+ phasis(显现)","em + phasis","强调=让它显出来","making it show"]]},
  turba: { m:["词根 turb-(搅动)+ -a","root turb- (stir) + -a"], f:[
    ["disturb","dis(彻底)+ turb(搅)","dis + turb","打扰","to stir apart"],
    ["turbulent","turb + -ulent(多…的)","turb + -ulent","动荡的","full of stirring"],
    ["turbine","turb + -ine","turb + -ine","涡轮","the whirler"],
    ["trouble","turb → 法语 trouble","turb via French","麻烦","the stirred water"]]},
  multitudo: { m:["mult-(多)+ -itudo(名词尾)","mult- (many) + -itudo"], f:[
    ["multiply","multi + ply(倍)","multi + ply (fold)","乘;繁殖","to make many-fold"],
    ["multimedia","multi + media","multi + media","多媒体","many media"],
    ["multitude","原词直传","kept whole","大众","the many"]]},
  ordo: { m:["词根 ordin-(排列),ordo 为主格","root ordin- (arrange); bare form"], f:[
    ["order","ordin → 法语 ordre","via French","秩序","order"],
    ["ordinary","ordin + -ary","ordin + -ary","平常的=按序的","in due order"],
    ["coordinate","co(共同)+ ordin + -ate","co + ordin + -ate","协调","to order together"],
    ["extraordinary","extra(超出)+ ordinary","extra + ordinary","非凡的=超出常序","beyond the order"]]},

  /* ---- L5 Waters of Forgetting ---- */
  oblivio: { m:["ob(覆盖)+ liv(抹平)+ -io","ob (over) + liv (smooth) + -io"], f:[
    ["oblivion","原词直传","kept whole","彻底遗忘","the great forgetting"],
    ["oblivious","oblivi + -ous","oblivi + -ous","浑然不觉的","forgetting all"]]},
  flumen: { m:["词根 flu-(流)+ -men(名词尾)","root flu- (flow) + -men"], f:[
    ["flume","flumen → flume","→ flume","水槽滑道","the flowing channel"],
    ["flux","flu + -x:流动","flu + -x","流量;变动","the flow"]]},
  rivus: { m:["词根 riv-(溪)+ -us","root riv- (brook) + -us"], f:[
    ["rival","riv + -al:同溪之人","riv + -al: sharing the brook","对手","the brook-sharer"],
    ["derive","de(引出)+ rive(溪)","de (from) + rive","源自=引溪水","to draw from the stream"],
    ["rivulet","riv + -ulet(小)","riv + -ulet","小溪","a little brook"]]},
  lacus: { m:["词根 lac-(湖)+ -us","root lac- (lake) + -us"], f:[
    ["lake","lac → lake","→ lake","湖","lake"],
    ["lagoon","lac + -una → 意语 laguna","lac + -una → laguna","潟湖","the lake-let"]]},
  gurges: { m:["词根 gurg-(吞旋),gurges 为主格","root gurg- (swirl); bare form"], f:[
    ["gorge","gurg → 法语:咽喉/峡谷","gurg via French","峡谷;吞咽","the swallowing throat"],
    ["regurgitate","re(向回)+ gurgit(吞)+ -ate","re + gurgit + -ate","反刍;倒灌","to swallow back up"]]},
  vortex: { m:["词根 vort-/vert-(转)+ -ex","root vort-/vert- (turn) + -ex"], f:[
    ["vortex","原词直传","kept whole","漩涡","the whirl"],
    ["vertigo","vert(转)+ -igo","vert + -igo","眩晕","the spinning"],
    ["convert","con(彻底)+ vert(转)","con + vert","转变","to turn about"]]},
  gutta: { m:["词根 gutt-(滴)+ -a","root gutt- (drop) + -a"], f:[
    ["gutter","gutt + -er:集水滴之槽","gutt + -er","排水沟","where drops run"],
    ["gout","gutta → 法语 goutte","via French goutte","痛风=\"滴\"病","the dropping disease"]]},
  umor: { m:["词根 um-(湿)+ -or(名词尾)","root um- (moist) + -or"], f:[
    ["humor","四体液定脾气→幽默","the four fluids fixed your mood","幽默","humor"],
    ["humid","um/hum + -id","hum + -id","潮湿的","moist"],
    ["humidity","humid + -ity","humid + -ity","湿度","moistness"]]},
  vapor: { m:["词根 vap-(汽)+ -or","root vap- (steam) + -or"], f:[
    ["evaporate","e(出)+ vapor + -ate","e (out) + vapor + -ate","蒸发","to steam away"],
    ["vaporize","vapor + -ize","vapor + -ize","汽化","to make steam"]]},
  ardor: { m:["词根 ard-(烧)+ -or","root ard- (burn) + -or"], f:[
    ["ardent","ard + -ent(正在…的)","ard + -ent","热切的","burning"],
    ["arson","ard/ars + -on","ars + -on","纵火罪","the burning crime"]]},
  aestus: { m:["词根 aest-(热/潮)+ -us","root aest- (heat/tide) + -us"], f:[
    ["estuary","aestu + -ary(场所)","aestu + -ary","入海口=潮进之处","where the tide surges"],
    ["estival","aestiv + -al","aestiv + -al","夏季的","of summer"]]},
  glacies: { m:["词根 glaci-(冰)+ -es","root glaci- (ice) + -es"], f:[
    ["glacier","glaci + -er","glaci + -er","冰川","the ice-river"],
    ["glacial","glaci + -al","glaci + -al","冰川的;极冷的","icy"],
    ["glance","滑过=像在冰上滑","to slide as on ice","扫视","the sliding look"]]},
  sulphur: { m:["词根 sulphur-(硫),裸词根词","root sulphur-, bare root"], f:[
    ["sulfuric","sulfur + -ic","sulfur + -ic","硫酸的","of sulfur"],
    ["sulfate","sulfur + -ate","sulfur + -ate","硫酸盐","the sulfur salt"]]},
  sitis: { m:["词根 sit-(渴)+ -is","root sit- (thirst) + -is"], f:[
    ["sed (西)","sitis 的西语后代","in Spanish","口渴","thirst"]]},
  fames: { m:["词根 fam-(饿)+ -es","root fam- (hunger) + -es"], f:[
    ["famine","fam + -ine","fam + -ine","饥荒","the great hunger"],
    ["famished","fam + -ished","fam + -ished","饿极的","starved"]]},
  poculum: { m:["po-(饮)+ -culum(器具)","po- (drink) + -culum (tool)"], f:[
    ["potable","pot(饮)+ -able","pot + -able","可饮用的","drinkable"]]},
  potio: { m:["词根 pot-(饮)+ -io","root pot- (drink) + -io"], f:[
    ["potion","potio → 法语:魔药","via French: the magic drink","魔药","potion"],
    ["poison","potio → 法语另一路:毒药!","the same word's darker road!","毒药","poison"],
    ["symposium","希腊 sym+posis:一起喝=研讨会!","Greek sym+posis: drinking together = symposium!","研讨会","the drinking-together"]]},
  limus: { m:["词根 lim-(泥)+ -us","root lim- (mud) + -us"], f:[
    ["slime","日耳曼亲戚","the Germanic cousin","黏泥","slime"],
    ["limo- (医)","淤泥系构词","mud-words in science","淤泥的","muddy"]]},
  murmur: { m:["拟声词根 mur-mur(低响重叠)","echoic mur-mur doubled"], f:[
    ["murmur","原样传下","kept whole","低语","murmur"],
    ["murmuration","murmur + -ation:椋鸟群舞!","murmur + -ation: a starling swarm!","椋鸟群飞","the whispering flock"]]},
  profundum: { m:["pro(向前)+ fund(底)+ -um","pro (forth) + fund (bottom) + -um"], f:[
    ["profound","直到底部的=深刻的","down to the bottom","深刻的","profound"],
    ["foundation","fund(底)+ -ation","fund + -ation","地基","the bottom-laying"],
    ["fundamental","fund + -amental","fund + -amental","根本的","of the bottom"]]},

  /* ---- L6 The Judges ---- */
  iudex: { m:["ius(法)+ dic(说)+ -ex(者)","ius (law) + dic (speak) + -ex"], f:[
    ["judge","iudex 经法语 juge","via French juge","法官","the law-speaker"],
    ["judicial","iudici + -al","iudici + -al","司法的","of judging"],
    ["prejudice","pre(预先)+ iudic(判)+ -e","pre + iudic","偏见=预先判决","judging beforehand"]]},
  iudicium: { m:["iudic(判)+ -ium(名词尾)","iudic (judge) + -ium"], f:[
    ["judgment","judge + -ment","judge + -ment","判决","the judging"],
    ["adjudicate","ad(向)+ iudic + -ate","ad + iudic + -ate","裁决","to judge upon"]]},
  lex: { m:["词根 leg-(法),lex 为主格","root leg- (law); bare form"], f:[
    ["legal","leg + -al(…的)","leg + -al","合法的","of law"],
    ["legislate","legis(法)+ lat(提出)","legis + lat (bring)","立法","to bring law"],
    ["legitimate","legitim + -ate","legitim + -ate","正当的","lawful"],
    ["loyal","leg → 法语 loial:守法=忠诚!","leg via French loial","忠诚的","law-true"],
    ["privilege","privi(私人)+ leg(法)","privi (private) + leg","特权=私人法","a private law"]]},
  ius: { m:["词根 iur-/ius-(法/正当)","root iur-/ius- (right)"], f:[
    ["just","ius + -t","ius + -t","公正的","right"],
    ["justice","iust + -ice","iust + -ice","正义","rightness"],
    ["jury","iur + -y:宣誓者","iur + -y (the sworn)","陪审团","the sworn ones"],
    ["injury","in(不)+ iur(法)+ -y","in (not) + iur + -y","伤害=不义之事","an un-right"]]},
  iustitia: { m:["iust(公正)+ -itia(名词尾)","iust (just) + -itia"], f:[
    ["justice","原词经法语","via French","正义","justice"],
    ["justify","iust + -ify(使…)","iust + -ify","证明正当","to make just"]]},
  crimen: { m:["cern-/cri-(筛别)+ -men","cern-/cri- (sift) + -men"], f:[
    ["criminal","crimin + -al","crimin + -al","罪犯","the charged one"],
    ["incriminate","in(归入)+ crimin + -ate","in + crimin + -ate","归罪","to charge in"],
    ["discriminate","dis(分开)+ crimin + -ate","dis + crimin + -ate","区别;歧视","to sift apart"]]},
  culpa: { m:["词根 culp-(过错)+ -a","root culp- (fault) + -a"], f:[
    ["culpable","culp + -able","culp + -able","有责的","blameworthy"],
    ["culprit","culp + -rit","culp + -rit","罪犯","the guilty one"],
    ["exculpate","ex(移出)+ culp + -ate","ex (out) + culp + -ate","开脱","to clear of blame"]]},
  poena: { m:["希腊 poine(赎罪金)+ -a","Greek poine (blood-price) + -a"], f:[
    ["penalty","poen + -alty","poen + -alty","处罚","the price"],
    ["punish","poen → pun + -ish","poen → pun + -ish","惩罚","to make pay"],
    ["pain","poena → 法语 peine","via French peine","疼痛=刑罚","suffering as sentence"],
    ["impunity","im(无)+ pun(罚)+ -ity","im (no) + pun + -ity","逍遥法外","escape from the price"]]},
  carcer: { m:["词根 carcer-(围栏),裸词根词","root carcer- (barred pen), bare root"], f:[
    ["incarcerate","in(关入)+ carcer + -ate","in + carcer + -ate","监禁","to pen in"],
    ["carcere (意)","原词直传","kept in Italian","监狱","prison"]]},
  catena: { m:["词根 caten-(链)+ -a","root caten- (chain) + -a"], f:[
    ["chain","caten → 法语 chaine","via French","链条","chain"],
    ["concatenate","con(连)+ caten + -ate","con + caten + -ate","串接","to chain together"]]},
  vinculum: { m:["vinc-(捆)+ -ulum(工具)","vinc- (bind) + -ulum (tool)"], f:[
    ["vinculum (数学)","原词直传","kept whole in math","分数线","the binding bar"],
    ["province","pro+vinc(征服束缚)之地","the bound land","行省","the bound territory"]]},
  veritas: { m:["ver(真)+ -itas(名词尾)","ver (true) + -itas"], f:[
    ["verify","ver + -ify(使确)","ver + -ify","验证","to make true"],
    ["verdict","ver(真)+ dict(说)","ver + dict (speak)","裁决=说出真相","truth spoken"],
    ["very","ver → 法语 verai:真正地→非常","ver via French verai","非常(原:真正)","truly → very"]]},
  testis: { m:["词根 test-(作证)+ -is","root test- (witness) + -is"], f:[
    ["testify","test + -ify","test + -ify","作证","to bear witness"],
    ["testament","test + -ament","test + -ament","遗嘱;圣约","the witnessed will"],
    ["protest","pro(公开)+ test(作证)","pro (forth) + test","抗议","to witness forth"],
    ["contest","con(对)+ test(作证)","con + test","竞争=对证","witnessing against"]]},
  causa: { m:["词根 caus-(案由)+ -a","root caus- (case) + -a"], f:[
    ["because","by + cause","by + cause","因为","by cause of"],
    ["excuse","ex(移出)+ cuse(案)","ex + cuse","借口=移出案由","out of the case"],
    ["accuse","ac(归入)+ cuse(案)","ac + cuse","控告","into the case"]]},
  sententia: { m:["sent-(感/思)+ -entia","sent- (feel) + -entia"], f:[
    ["sentence","判决/句子","the judge's saying","句子;判决","sentence"],
    ["sentiment","sent + -iment","sent + -iment","情感","the felt thing"],
    ["consent","con(同)+ sent(感)","con + sent","同意=同感","feeling together"],
    ["dissent","dis(异)+ sent(感)","dis + sent","异议","feeling apart"]]},
  innocens: { m:["in(不)+ noc(害)+ -ens","in (not) + noc (harm) + -ens"], f:[
    ["innocent","原词直传","kept whole","无辜的","doing no harm"],
    ["innocuous","in + nocu + -ous","in + nocu + -ous","无害的","harmless"]]},
  nocens: { m:["noc(害)+ -ens(正在…的)","noc (harm) + -ens"], f:[
    ["noxious","nox + -ious","nox + -ious","有害的","harmful"],
    ["obnoxious","ob(暴露于)+ nox + -ious","ob + nox + -ious","讨厌的","open to harm → offensive"]]},
  supplicium: { m:["sub(下)+ plic(弯折)+ -ium","sub (under) + plic (bend) + -ium"], f:[
    ["supplication","supplic + -ation","supplic + -ation","哀求","the kneeling plea"],
    ["supple","sub + ple:柔软可弯","sub + ple","柔韧的","bendable"]]},
  labor: { m:["词根 labor-(辛劳),裸词根词","root labor- (toil), bare root"], f:[
    ["laboratory","labor + -atory(场所)","labor + -atory","实验室=劳作之地","the toil-place"],
    ["collaborate","col(共同)+ labor + -ate","col + labor + -ate","协作","to toil together"],
    ["elaborate","e(用力做出)+ labor + -ate","e + labor + -ate","精心制作的","toiled out fully"]]},
  rota: { m:["词根 rot-(轮)+ -a","root rot- (wheel) + -a"], f:[
    ["rotate","rot + -ate","rot + -ate","旋转","to wheel"],
    ["rotary","rot + -ary","rot + -ary","旋转的","wheeling"],
    ["rotund","rot + -und:圆滚滚","rot + -und","圆胖的","wheel-round"],
    ["control","contra+rotulus(对账卷轴)","contra + rotulus (counter-roll)","控制=对账!","the counter-roll"]]},

  /* ---- L7 The Dark Throne ---- */
  dominus: { m:["dom(家)+ -inus(之主)","dom (house) + -inus (master of)"], f:[
    ["dominate","domin + -ate","domin + -ate","支配","to master"],
    ["domain","domin → 法语 domaine","via French","领地","the master's land"],
    ["dominion","domin + -ion","domin + -ion","统治权","mastery"],
    ["danger","dominarium → 法语:领主之权→危险!","dominarium via French: the lord's power → danger!","危险(原:领主权)","the lord's power"]]},
  domina: { m:["dom(家)+ -ina(女主)","dom (house) + -ina (mistress)"], f:[
    ["dame","domina → 法语 dame","via French dame","夫人","lady"],
    ["madonna","ma(我的)+ donna(女主)","ma (my) + donna","圣母;女士","my lady"],
    ["prima donna","首席女主角","the first lady of opera","歌剧女主","prima donna"]]},
  maiestas: { m:["mai-/mag-(大)+ -estas","mai-/mag- (great) + -estas"], f:[
    ["majesty","maiest → 法语","via French","陛下;威严","greatness"],
    ["majestic","majest + -ic","majest + -ic","庄严的","great in bearing"],
    ["major","mai + -or(更…)","mai + -or (more)","较大的;少校","greater"]]},
  potentia: { m:["pot-(能)+ -entia","pot- (be able) + -entia"], f:[
    ["potent","pot + -ent","pot + -ent","强效的","able"],
    ["potential","potent + -ial","potent + -ial","潜在的","able-to-be"],
    ["omnipotent","omni(全)+ potent","omni (all) + potent","全能的","all-able"]]},
  potestas: { m:["pot-(能)+ -estas(名词尾)","pot- (be able) + -estas"], f:[
    ["power","pot → 法语 pouvoir","via French pouvoir","力量","power"],
    ["possible","poss(能)+ -ible","poss + -ible","可能的","able to be"],
    ["possess","pot+sedere(坐拥)","pot + sedere (sit on)","占有=有力坐拥","to sit in power on"]]},
  honor: { m:["词根 honor-(尊荣),裸词根词","root honor-, bare root"], f:[
    ["honest","honor + -est","honor + -est","诚实的","honor-bound"],
    ["honorary","honor + -ary","honor + -ary","荣誉的","of honor"],
    ["dishonor","dis(失去)+ honor","dis + honor","耻辱","honor lost"]]},
  superbia: { m:["super(在上)+ -bia","super (above) + -bia"], f:[
    ["superb","superb(自视高→华美)","above-standing → splendid","华丽的","superb"]]},
  ira: { m:["词根 ir-(怒)+ -a","root ir- (wrath) + -a"], f:[
    ["irate","ir + -ate(…的)","ir + -ate","暴怒的","wrathful"],
    ["irascible","ir + -ascible(易…的)","ir + -ascible","易怒的","quick to wrath"]]},
  invidia: { m:["in(盯着)+ vid(看)+ -ia","in (upon) + vid (look) + -ia"], f:[
    ["envy","invidia 经法语 envie","via French envie","嫉妒","the staring sin"],
    ["invidious","invidi + -ous","invidi + -ous","招人嫉恨的","stare-drawing"],
    ["video","vid(看)家族的今日面孔","today's face of vid-","视频","the seeing"]]},
  misericordia: { m:["miser(可怜)+ cord(心)+ -ia","miser (wretched) + cord (heart) + -ia"], f:[
    ["misery","miser + -y","miser + -y","悲惨","wretchedness"],
    ["miser","守财奴=可怜人","the wretched hoarder","守财奴","the miser"],
    ["misericord","原词经法语","via French","慈悲座","the mercy-seat"]]},
  clementia: { m:["clement-(温和)+ -ia","clement- (mild) + -ia"], f:[
    ["clemency","clement + -cy","clement + -cy","宽赦","mildness"],
    ["inclement","in(不)+ clement","in (not) + clement","(天气)恶劣的","unmild"]]},
  preces: { m:["词根 prec-(祈求)+ -es","root prec- (pray) + -es"], f:[
    ["pray","prec → 法语 prier","via French prier","祈祷","to pray"],
    ["precarious","prec + -arious:全凭恳求的","prec + -arious","岌岌可危的","held by begging"],
    ["deprecate","de(求免)+ prec + -ate","de (away) + prec + -ate","反对;贬低","to pray away"]]},
  votum: { m:["vov-/vot-(立誓)+ -um","vov-/vot- (vow) + -um"], f:[
    ["vow","votum → 法语 vou","via French","誓言","the vow"],
    ["vote","vot + -e:表达意愿","vot + -e","投票","the declared wish"],
    ["devote","de(彻底)+ vote(许)","de + vote","奉献","to vow away"],
    ["devout","devot → 虔诚的","devot →","虔诚的","vow-keeping"]]},
  templum: { m:["词根 temp-(划出的圣域)+ -lum","root temp- (marked space) + -lum"], f:[
    ["temple","templum → temple","→ temple","神庙","temple"],
    ["contemplate","con + templ(观天圣域)+ -ate","con + templ + -ate","沉思=在圣域观天","to read the sacred sky"]]},
  ara: { m:["词根 ar-(祭坛)+ -a","root ar- (altar) + -a"], f:[
    ["Ara (天坛座)","星座沿用原词","kept as a constellation","天坛座","the Altar"]]},
  sacrificium: { m:["sacr(神圣)+ fic(做)+ -ium","sacr (holy) + fic (make) + -ium"], f:[
    ["sacred","sacr + -ed","sacr + -ed","神圣的","holy"],
    ["sacrifice","sacr + fic","sacr + fic","牺牲;祭献","the holy-making"],
    ["consecrate","con(完全)+ secr(圣)+ -ate","con + secr + -ate","祝圣","to make wholly holy"],
    ["sacrilege","sacr + leg(偷)","sacr + leg (steal)","亵渎=盗圣物","stealing the holy"]]},
  thesaurus: { m:["希腊 thesauros(宝库)","Greek thesauros (store-house)"], f:[
    ["treasure","thesaurus → 法语 tresor","via French tresor","宝藏","treasure"],
    ["treasury","treasure + -y","treasure + -y","国库","the treasure-house"],
    ["thesaurus","原词直传:词汇宝库","kept whole: a word-hoard","同义词典","the word-treasury"]]},
  opes: { m:["词根 op-(财力)+ -es","root op- (means) + -es"], f:[
    ["opulent","op + -ulent(富于…的)","op + -ulent","豪奢的","wealth-full"],
    ["copious","co + op + -ious","co + op + -ious","丰富的","with full means"],
    ["opus 的亲戚","op-(劳作→成果)","kin of opus (work)","作品","work"]]},
  diadema: { m:["希腊 dia(环绕)+ dema(缠带)","Greek dia (around) + dema (band)"], f:[
    ["diadem","原词经法语","via French","冠冕","the bound crown"]]},
  numen: { m:["nu-(点头)+ -men(名词尾)","nu- (nod) + -men"], f:[
    ["numinous","numin + -ous","numin + -ous","神圣感的","filled with the nod of gods"]]},

  /* ---- L8 The Song ---- */
  eloquentia: { m:["e(出)+ loqu(说)+ -entia","e (out) + loqu (speak) + -entia"], f:[
    ["eloquent","e + loqu + -ent","e + loqu + -ent","雄辩的","out-speaking"],
    ["loquacious","loqu + -acious(好…的)","loqu + -acious","健谈的","talk-loving"],
    ["colloquial","col(共同)+ loqu + -ial","col + loqu + -ial","口语的","of talking together"],
    ["ventriloquist","ventri(腹)+ loqu + -ist","ventri (belly) + loqu + -ist","腹语师!","the belly-speaker!"]]},
  suavitas: { m:["suav-(甜柔)+ -itas","suav- (sweet) + -itas"], f:[
    ["suave","suav + -e","suav + -e","温文尔雅的","smooth-sweet"],
    ["persuade","per(彻底)+ suade(以甜劝)","per + suade","说服","to sweeten through"],
    ["dissuade","dis(劝离)+ suade","dis + suade","劝阻","to sweeten away"]]},
  dulcis: { m:["词根 dulc-(甜)+ -is","root dulc- (sweet) + -is"], f:[
    ["dulcet","dulc + -et","dulc + -et","悦耳的","sweet-toned"],
    ["dolce (意)","音乐术语:柔美地","music: sweetly","柔美地","dolce"],
    ["dulce (西)","糖果;甜的","candy; sweet","甜食","sweet"]]},
  amarus: { m:["词根 amar-(苦)+ -us","root amar- (bitter) + -us"], f:[
    ["amaro (意)","苦味利口酒","the bitter liqueur","苦酒","amaro"],
    ["amargo (西)","苦的","bitter","苦的","bitter"]]},
  mollis: { m:["词根 moll-(软)+ -is","root moll- (soft) + -is"], f:[
    ["mollify","moll + -ify(使…)","moll + -ify","安抚=使变软","to soften"],
    ["emollient","e + moll + -ient","e + moll + -ient","润肤剂","the softener"],
    ["mollusk","moll + -usk:软体动物!","moll + -usk","软体动物","the soft one"]]},
  durus: { m:["词根 dur-(硬/久)+ -us","root dur- (hard/lasting) + -us"], f:[
    ["durable","dur + -able","dur + -able","耐用的","lasting"],
    ["endure","en(保持)+ dure(硬)","en + dure","忍耐","to stay hard"],
    ["duration","dur + -ation","dur + -ation","时长","the lasting"],
    ["obdurate","ob(顽)+ dur + -ate","ob + dur + -ate","顽固的","hardened against"]]},
  blandus: { m:["词根 bland-(柔言)+ -us","root bland- (soft-spoken) + -us"], f:[
    ["bland","bland → bland","→ bland","平淡的","mild"],
    ["blandishment","bland + -ishment","bland + -ishment","甜言蜜语","sweet coaxing"]]},
  ferox: { m:["fer(野)+ -ox(性情词尾)","fer (wild) + -ox (of temper)"], f:[
    ["ferocious","feroc + -ious","feroc + -ious","凶残的","wild-tempered"],
    ["ferocity","feroc + -ity","feroc + -ity","凶猛","wildness"]]},
  mirus: { m:["词根 mir-(惊奇)+ -us","root mir- (wonder) + -us"], f:[
    ["miracle","mir + -acle(之事)","mir + -acle","奇迹","a wonder-thing"],
    ["admire","ad(朝向)+ mire(惊叹)","ad + mire","赞叹","to wonder at"],
    ["mirror","mir + -or:看得出神之物","mir + -or","镜子","the wonder-glass"],
    ["mirage","mir + -age:沙漠幻景","mir + -age","海市蜃楼","the wonder-vision"]]},
  mirabilis: { m:["mir(惊奇)+ -abilis(值得…的)","mir + -abilis (worthy of)"], f:[
    ["marvel","mirabilia → 法语 merveille","via French merveille","奇观","marvel"],
    ["marvelous","marvel + -ous","marvel + -ous","奇妙的","full of marvel"]]},
  stupor: { m:["词根 stup-(呆立)+ -or","root stup- (be stunned) + -or"], f:[
    ["stupendous","stup + -endous(令人…的)","stup + -endous","惊人的","stunning"],
    ["stupefy","stup + -efy(使…)","stup + -efy","使目瞪口呆","to stun"],
    ["stupid","stup + -id:呆住的","stup + -id","愚蠢的(原:惊呆的)","stunned dull"]]},
  admiratio: { m:["ad(朝向)+ mir(惊叹)+ -atio","ad + mir + -atio"], f:[
    ["admiration","原词经法语","via French","赞叹","admiration"],
    ["admirable","admir + -able","admir + -able","令人钦佩的","wonder-worthy"]]},
  desiderium: { m:["de(自…)+ sider(星)+ -ium","de (from) + sider (star) + -ium"], f:[
    ["desire","desider → 法语 desir","via French","渴望=望星等待","star-waiting"],
    ["consider","con + sider(观星)","con + sider","考虑=细观星象","to read the stars"],
    ["sidereal","sider + -eal","sider + -eal","恒星的","of the stars"]]},
  spes: { m:["词根 sper-/spe-(希望)","root sper-/spe- (hope)"], f:[
    ["despair","de(失去)+ spair(希望)","de (away) + spair","绝望","hope lost"],
    ["desperate","desper + -ate","desper + -ate","孤注一掷的","past hoping"],
    ["prosper","pro(如)+ sper(所望)","pro + sper","昌盛=如愿","as hoped"],
    ["esperanza (西)","sper + -anza","sper + -anza","希望","hope"]]},
  promissum: { m:["pro(先)+ miss(送)+ -um","pro (ahead) + miss (send) + -um"], f:[
    ["promise","原词经法语","via French","承诺","the word sent ahead"],
    ["mission","miss + -ion","miss + -ion","使命=被派送","the sending"],
    ["dismiss","dis(散)+ miss(送)","dis + miss","解散","to send apart"],
    ["transmit","trans(跨)+ mit(送)","trans + mit","传送","to send across"]]},
  condicio: { m:["con(共同)+ dic(说定)+ -io","con + dic (declare) + -io"], f:[
    ["condition","原词经法语","via French","条件","the agreed terms"],
    ["conditional","condition + -al","condition + -al","有条件的","upon terms"],
    ["dictate","dict(说)+ -ate","dict + -ate","口述;命令","to speak down"]]},
  pactum: { m:["pac-(缔和)+ -tum","pac- (make peace) + -tum"], f:[
    ["pact","原词直传","kept whole","公约","the pact"],
    ["peace","pax → 法语 pais","pax via French","和平","peace"],
    ["pacify","pac + -ify","pac + -ify","平定","to make peace"],
    ["Pacific","和平之洋=太平洋!","the Peaceful Ocean!","太平洋","the Pacific"]]},
  foedus: { m:["词根 foeder-(盟约),foedus 为主格","root foeder- (league); bare form"], f:[
    ["federal","foeder + -al","foeder + -al","联邦的","by treaty"],
    ["federation","foeder + -ation","foeder + -ation","联盟","the leaguing"],
    ["confederate","con + foeder + -ate","con + foeder + -ate","同盟的","leagued together"]]},
  gratia: { m:["词根 grat-(悦/谢)+ -ia","root grat- (pleasing/thanks) + -ia"], f:[
    ["grace","gratia 经法语","via French","优雅;恩典","grace"],
    ["gratitude","grat + -itude","grat + -itude","感恩","thankfulness"],
    ["congratulate","con + grat + -ulate","con + grat + -ulate","祝贺","to wish joy with"],
    ["gracias (西) / grazie (意)","gratia 的后代","gratia's children","谢谢","thanks"],
    ["gratis","白送=只为感谢","for thanks alone","免费","free"]]},
  venia: { m:["词根 ven-(恩准)+ -ia","root ven- (favor) + -ia"], f:[
    ["venial","veni + -al","veni + -al","可宽恕的","pardonable"]]},

  /* ---- L9 Do Not Look Back ---- */
  aspectus: { m:["ad(朝向)+ spect(看)+ -us","ad (at) + spect (look) + -us"], f:[
    ["aspect","原词直传","kept whole","方面=看的角度","the angle of seeing"],
    ["spectator","spect + -ator(者)","spect + -ator","观众","the looker"],
    ["prospect","pro(向前)+ spect(看)","pro + spect","前景","the look ahead"],
    ["retrospect","retro(向后)+ spect","retro + spect","回顾","the look back"]]},
  visus: { m:["词根 vid-/vis-(看)+ -us","root vid-/vis- (see) + -us"], f:[
    ["vision","vis + -ion","vis + -ion","视觉;愿景","the seeing"],
    ["visible","vis + -ible","vis + -ible","可见的","seeable"],
    ["visit","vis + -it(去看)","vis + -it","拜访","to go see"],
    ["television","tele(远)+ vision","tele (far) + vision","电视=远观","far-seeing"],
    ["evident","e(明显)+ vid(看)+ -ent","e + vid + -ent","显然的","plain to see"]]},
  retro: { m:["前缀 retro-(向后)","prefix retro- (backward)"], f:[
    ["retrospect","retro + spect(看)","retro + spect","回顾","the backward look"],
    ["retrograde","retro + grade(走)","retro + grade (step)","倒退的","stepping back"],
    ["retro style","复古风","the backward-looking style","复古","retro"]]},
  gradus: { m:["词根 grad-(迈步)+ -us","root grad- (step) + -us"], f:[
    ["grade","grad + -e","grad + -e","等级;年级","a step"],
    ["gradual","grad + -ual","grad + -ual","逐步的","step by step"],
    ["graduate","grad + -uate","grad + -uate","毕业=升阶","to step up"],
    ["degrade","de(向下)+ grade","de (down) + grade","贬低","to step down"]]},
  passus: { m:["词根 pass-(跨步)+ -us","root pass- (stride) + -us"], f:[
    ["pace","passus → pace","→ pace","步速","the pace"],
    ["passage","pass + -age","pass + -age","通道","the passing-way"],
    ["passport","pass + port(港/门)","pass + port","护照=过港凭证","the pass-the-port paper"],
    ["surpass","sur(超)+ pass(步)","sur + pass","超越","to stride beyond"]]},
  cursus: { m:["词根 curr-/curs-(跑)+ -us","root curr-/curs- (run) + -us"], f:[
    ["course","cursus → 法语 cours","via French","课程;路线","the run"],
    ["cursor","curs + -or(者)","curs + -or","光标=奔跑者","the little runner"],
    ["current","curr + -ent","curr + -ent","当前的;水流","running now"],
    ["excursion","ex(外出)+ curs + -ion","ex + curs + -ion","远足","the run out"]]},
  fuga: { m:["词根 fug-(逃)+ -a","root fug- (flee) + -a"], f:[
    ["fugitive","fug + -itive(者)","fug + -itive","逃亡者","the fleeing one"],
    ["refuge","re(退回)+ fuge(逃)","re + fuge","避难所","the place fled to"],
    ["refugee","refuge + -ee(人)","refuge + -ee","难民","the sheltered one"],
    ["fugue","赋格曲:声部互逃互追","voices fleeing and chasing","赋格","the flight of voices"],
    ["centrifugal","centri(中心)+ fug(逃)+ -al","centri + fug + -al","离心的","center-fleeing"]]},
  reditus: { m:["re(回)+ it(走)+ -us","re (back) + it (go) + -us"], f:[
    ["—","it-(走)家族见 exit/transit","see exit, transit in the it- family","(返回)","(the going back)"]]},
  ascensus: { m:["ad(向上)+ scens(爬)+ -us","ad (up) + scens (climb) + -us"], f:[
    ["ascend","a + scend","a + scend","上升","to climb up"],
    ["ascent","a + scent","a + scent","攀登","the climb"],
    ["Ascension","宗教:升天节","the Ascension","升天","the rising"]]},
  descensus: { m:["de(向下)+ scens(爬)+ -us","de (down) + scens (climb) + -us"], f:[
    ["descend","de + scend","de + scend","下降","to climb down"],
    ["descendant","descend + -ant(人)","descend + -ant","后代","the one come down"],
    ["condescend","con + descend:屈尊","con + descend","屈尊","to step down to"]]},
  lumen: { m:["词根 luc-/lum-(光)+ -men","root luc-/lum- (light) + -men"], f:[
    ["luminous","lumin + -ous","lumin + -ous","发光的","light-full"],
    ["illuminate","il(进入)+ lumin + -ate","il + lumin + -ate","照亮","to light up"],
    ["luminary","lumin + -ary(者)","lumin + -ary","杰出人物=发光体","the shining one"]]},
  claritas: { m:["clar-(亮/清)+ -itas","clar- (clear) + -itas"], f:[
    ["clarity","clar + -ity","clar + -ity","清晰","clearness"],
    ["declare","de(彻底)+ clare(说清)","de + clare","宣告","to make clear"],
    ["clarify","clar + -ify","clar + -ify","澄清","to clear up"],
    ["clarinet","clar + -inet:清亮的小号","clar + -inet","单簧管","the clear-toned pipe"]]},
  obscuritas: { m:["ob(遮蔽)+ scur(覆盖)+ -itas","ob (over) + scur (cover) + -itas"], f:[
    ["obscure","ob + scure","ob + scure","晦暗的","covered over"],
    ["obscurity","obscure + -ity","obscure + -ity","默默无闻","the covered state"]]},
  dubium: { m:["du(二)+ -bium(处于…间)","du (two) + -bium (between)"], f:[
    ["doubt","dubit → 法语 doute","via French doute","怀疑","two minds"],
    ["dubious","dubi + -ous","dubi + -ous","可疑的","of two minds"],
    ["indubitable","in(无)+ dubit + -able","in + dubit + -able","毋庸置疑的","beyond two minds"]]},
  cura: { m:["词根 cur-(操心)+ -a","root cur- (care) + -a"], f:[
    ["cure","cur + -e:被照料→治愈","cur + -e","治愈","care given"],
    ["curious","cur + -ious(多…的)","cur + -ious","好奇的","full of care"],
    ["secure","se(无)+ cure(忧)","se (free of) + cure","安全的=无忧的","care-free"],
    ["accurate","ac(尽)+ cur + -ate","ac + cur + -ate","精确的=下足功夫的","done with full care"],
    ["curator","cur + -ator(者)","cur + -ator","策展人=照管者","the care-taker"]]},
  desperatio: { m:["de(失去)+ sper(希望)+ -atio","de + sper (hope) + -atio"], f:[
    ["desperation","原词经法语","via French","绝望","hope lost"],
    ["desperado","西语:亡命徒","Spanish: the hopeless one","亡命徒","desperado"]]},
  fiducia: { m:["fid(信)+ -ucia(名词尾)","fid (trust) + -ucia"], f:[
    ["fiduciary","fiduci + -ary","fiduci + -ary","受信托的","held in trust"],
    ["fid- 家族","见 fides:confide、confident…","see fides: confide, confident…","信任词族","the trust tree"]]},
  patientia: { m:["pat-(承受)+ -ientia","pat- (endure) + -ientia"], f:[
    ["patient","pat + -ient:忍耐者=病人","pat + -ient","病人;有耐心的","the enduring one"],
    ["passion","pass(承受)+ -ion:受难→激情","pass + -ion: suffering → passion","激情(原:受难)","what one undergoes"],
    ["compassion","com(共同)+ passion(受)","com + passion","同情=共同承受","suffering with"],
    ["compatible","com + pat + -ible","com + pat + -ible","相容的=能共处的","able to bear together"]]},
  festinatio: { m:["festin-(赶)+ -atio","festin- (hasten) + -atio"], f:[
    ["festina lente","赶+慢:从容不迫!","hasten slowly!","名言:慢慢地快","make haste slowly"]]},
  error: { m:["词根 err-(徘徊)+ -or","root err- (wander) + -or"], f:[
    ["err","err → err","→ err","犯错","to wander"],
    ["erratic","err + -atic","err + -atic","飘忽不定的","wandering"],
    ["aberration","ab(偏离)+ err + -ation","ab + err + -ation","偏差","the wandering off"],
    ["knight-errant","游侠骑士=四处漫游的骑士","the wandering knight","游侠","the errant knight"]]},

  /* ---- L10 The Eternal Song ---- */
  aeternitas: { m:["aetern-(永恒)+ -itas","aetern- (eternal) + -itas"], f:[
    ["eternal","aetern + -al","aetern + -al","永恒的","everlasting"],
    ["eternity","aetern + -ity","aetern + -ity","永恒","the everlasting"]]},
  immortalitas: { m:["im(不)+ mortal(会死)+ -itas","im (not) + mortal + -itas"], f:[
    ["immortal","im + mortal","im + mortal","不朽的","deathless"],
    ["immortalize","immortal + -ize","immortal + -ize","使不朽","to make deathless"]]},
  natura: { m:["nat-(诞生)+ -ura(名词尾)","nat- (be born) + -ura"], f:[
    ["natural","natur + -al","natur + -al","自然的","as born"],
    ["native","nat + -ive","nat + -ive","本地的=生于此的","born here"],
    ["nation","nat + -ion:同生之族","nat + -ion","民族","the born-together"],
    ["innate","in(生来)+ nate","in + nate","天生的","in-born"],
    ["Renaissance","re(再)+ naissance(诞生)","re + naissance","文艺复兴=再生!","the re-birth!"]]},
  mundus: { m:["词根 mund-(洁净/世界)+ -us","root mund- (world) + -us"], f:[
    ["mundane","mund + -ane","mund + -ane","尘世的","of this world"],
    ["mundo (西) / monde (法)","mundus 的后代","mundus's children","世界","world"]]},
  orbis: { m:["词根 orb-(圆)+ -is","root orb- (circle) + -is"], f:[
    ["orbit","orb + -it:绕圆之路","orb + -it","轨道","the circling path"],
    ["orb","orb → orb","→ orb","圆球","the sphere"],
    ["exorbitant","ex(出)+ orbit(轨道)+ -ant","ex + orbit + -ant","过分的=出轨的!","off the rails!"]]},
  principium: { m:["prim(第一)+ cip(拿)+ -ium","prim (first) + cip (take) + -ium"], f:[
    ["principle","princip + -le","princip + -le","原理","the first thing"],
    ["principal","princip + -al","princip + -al","首要的;校长","first in rank"],
    ["prince","princeps=第一人","princeps, the first man","王子","the first one"]]},
  elementum: { m:["词根 element-(基本)+ -um","root element- + -um"], f:[
    ["element","原词直传","kept whole","元素","element"],
    ["elementary","element + -ary","element + -ary","基础的","of the elements"]]},
  harmonia: { m:["希腊 harmos(接合)+ -ia","Greek harmos (joint) + -ia"], f:[
    ["harmony","原词经法语","via French","和谐","the joining"],
    ["harmonica","harmon + -ica","harmon + -ica","口琴","the joined-tone toy"],
    ["harmonize","harmon + -ize","harmon + -ize","使和谐","to join in tune"]]},
  concordia: { m:["con(共同)+ cord(心)+ -ia","con + cord (heart) + -ia"], f:[
    ["concord","con + cord","con + cord","和睦","hearts together"],
    ["Concorde","协和号飞机!","the Concorde jet!","协和号","the Concorde"]]},
  discordia: { m:["dis(分离)+ cord(心)+ -ia","dis (apart) + cord + -ia"], f:[
    ["discord","dis + cord","dis + cord","不和","hearts apart"],
    ["discordant","discord + -ant","discord + -ant","刺耳的;不和的","clashing"]]},
  genius: { m:["gen-(诞生)+ -ius(守护灵)","gen- (birth) + -ius (spirit)"], f:[
    ["genius","天才=生而有灵","born with the spirit","天才","genius"],
    ["genie","genius → 法语 génie","via French génie","精灵","genie"],
    ["generate","gen + -erate","gen + -erate","产生","to bring to birth"],
    ["gene","gen 的现代面孔:基因!","the modern face: gene!","基因","gene"]]},
  laurus: { m:["词根 laur-(月桂)+ -us","root laur- (laurel) + -us"], f:[
    ["laurel","laur + -el","laur + -el","月桂","laurel"],
    ["laureate","laur + -eate(戴…的)","laur + -eate","桂冠得主","laurel-crowned"],
    ["baccalaureate","bacca(果)+ laureate","bacca (berry) + laureate","学士学位=月桂果冠","the laurel-berry degree"]]},
  praemium: { m:["prae(先)+ em(拿)+ -ium","prae (before) + em (take) + -ium"], f:[
    ["premium","原词直传","kept whole","优质;保费","the first-taken"],
    ["exempt","ex(拿出)+ empt(拿)","ex + empt","豁免的","taken out"],
    ["redeem","red(回)+ eem(买)","red + eem","赎回","to buy back"]]},
  monumentum: { m:["mon(提醒)+ -mentum(之物)","mon (remind) + -mentum"], f:[
    ["monument","原词经法语","via French","纪念碑","the reminder"],
    ["monumental","monument + -al","monument + -al","不朽的;巨大的","monument-sized"]]},
  littera: { m:["词根 litter-(字母)+ -a","root litter- (letter) + -a"], f:[
    ["letter","littera 经法语","via French","字母;信","letter"],
    ["literal","litter + -al","litter + -al","字面的","by the letter"],
    ["literature","litter + -ature","litter + -ature","文学","the lettered art"],
    ["illiterate","il(不)+ literate","il (not) + literate","文盲的","unlettered"],
    ["obliterate","ob(抹去)+ litter + -ate","ob + litter + -ate","抹除=擦掉字母","to rub out the letters"]]},
  scriptor: { m:["scrib-/script-(写)+ -or(者)","scrib-/script- (write) + -or"], f:[
    ["scribe","scrib + -e","scrib + -e","抄写员","the writer"],
    ["script","script → script","→ script","剧本;字迹","the written thing"],
    ["describe","de(照样)+ scribe(写)","de + scribe","描写","to write down"],
    ["prescription","pre(预先)+ script + -ion","pre + script + -ion","处方=预先写定","the fore-written"],
    ["postscript","post(后)+ script","post + script","附言 P.S.","written after"]]},
  lector: { m:["leg-/lect-(读/选)+ -or(者)","leg-/lect- (read/pick) + -or"], f:[
    ["lecture","lect + -ure","lect + -ure","讲座","the reading"],
    ["legend","leg + -end(当读之事)","leg + -end (to be read)","传奇","what must be read"],
    ["select","se(挑出)+ lect(选)","se + lect","挑选","to pick out"],
    ["intellect","intel(在其间)+ lect(选)","intel + lect","智力=善于分辨","picking between"],
    ["elegant","e + leg(精选)+ -ant","e + leg + -ant","优雅的=精挑细选的","choicely picked"]]},
  vates: { m:["词根 vat-(通灵)+ -es","root vat- (seer) + -es"], f:[
    ["vatic","vat + -ic","vat + -ic","预言的","prophetic"],
    ["Vatican","vatic + -an(山)","vatic + -an (hill)","梵蒂冈=占卜者之山?","the seers' hill?"]]},
  opus: { m:["词根 oper-(劳作),opus 为主格","root oper- (work); bare form"], f:[
    ["opera","opus 的复数:诸多作品→歌剧","plural of opus: works → opera","歌剧","the works"],
    ["operate","oper + -ate","oper + -ate","操作;动手术","to work"],
    ["cooperate","co(共同)+ operate","co + operate","合作","to work together"],
    ["magnum opus","magnum(伟大)+ opus","magnum + opus","代表作","the great work"]]},
  auctor: { m:["aug-/auct-(使生长)+ -or(者)","aug-/auct- (make grow) + -or"], f:[
    ["author","auctor 经法语","via French","作者=使作品生长者","the grower of works"],
    ["authority","author + -ity","author + -ity","权威","the author's weight"],
    ["authentic","希腊亲戚 authentes","Greek kin authentes","真实的","from the author's own hand"],
    ["auction","auct(增)+ -ion:加价卖!","auct + -ion: growing bids!","拍卖","the growing price"]]},
};

Object.assign(MORPH, MORPH2);
