/* =====================================================
   FUGA MYTHICA — morphology & word-family chains
   MORPH: key -> {
     m: [morphZh, morphEn]                    word-part breakdown of the Latin word
     f: [[word, partsZh, partsEn, zh, en]...] family chain: same root, different affixes
   }
   ===================================================== */
const MORPH = {
  /* ---- L1 Family & People ---- */
  pater: { m:["词根 patr-(父)+ 阳性词尾 -er","root patr- (father) + masculine ending -er"], f:[
    ["paternal","patern(父)+ -al(形容词尾:…的)","patern (father) + -al (adj.: of)","父亲的","of a father"],
    ["patriot","patri(父邦)+ -ot(人)","patri (fatherland) + -ot (person)","爱国者","one who loves the fatherland"],
    ["patron","patr(如父者)+ -on","patr (father-figure) + -on","赞助人;保护人","a protector, like a father"],
    ["patriarch","patri(父)+ arch(首领)","patri (father) + arch (chief)","家长;族长","father-ruler"]]},
  mater: { m:["词根 matr-(母)+ 阳性词尾 -er","root matr- (mother) + ending -er"], f:[
    ["maternal","matern(母)+ -al(…的)","matern (mother) + -al (adj.)","母亲的","of a mother"],
    ["matron","matr(母)+ -on(人)","matr (mother) + -on (person)","主妇;女总管","a motherly woman in charge"],
    ["matrix","matr(母)+ -ix","matr (mother) + -ix","母体;矩阵","the mother-structure things grow in"],
    ["metropolis","metro(母)+ polis(城)","metro (mother) + polis (city)","大都会=母城","the mother city"]]},
  filius: { m:["词根 fili-(子女)+ 阳性词尾 -us","root fili- (child) + masculine -us"], f:[
    ["filial","fili(子女)+ -al(…的)","fili (child) + -al (adj.)","孝顺的;子女的","of a son or daughter"],
    ["affiliate","af(去向)+ fili(子)+ -ate(动词尾)","af (to) + fili (child) + -ate (verb)","使隶属=收为\"子\"机构","to adopt as a child-branch"]]},
  filia: { m:["词根 fili-(子女)+ 阴性词尾 -a","root fili- (child) + feminine -a"], f:[
    ["fille (法)","fili(子女)→ 法语阴性","fili (child) → French feminine","女儿;女孩","daughter, girl (French)"],
    ["hija (西)","filia 的西语演变(f→h)","filia worn down in Spanish (f→h)","女儿","daughter (Spanish)"]]},
  rex: { m:["词根 reg-(统治)+ 主格词尾 -s(reg+s→rex)","root reg- (to rule) + -s (reg+s→rex)"], f:[
    ["regal","reg(王)+ -al(…的)","reg (king) + -al (adj.)","帝王的","kingly"],
    ["regulate","regul(规则=王的尺)+ -ate(动词)","regul (the king's rule(r)) + -ate","管理;调节","to keep to the rule"],
    ["direct","di(彻底)+ rect(引直,与 reg 同根)","di + rect (make straight, same root)","指挥;直接的","to steer straight"],
    ["rey (西) / roi (法)","rex 的西语/法语后代","rex in Spanish / French","国王","king"]]},
  regina: { m:["词根 reg-(统治)+ 阴性词尾 -ina","root reg- (rule) + feminine -ina"], f:[
    ["reign","reg-(统治)经法语进入英语","reg- via French","统治;在位","to rule"],
    ["regent","reg(统治)+ -ent(正在…的人)","reg (rule) + -ent (one who)","摄政者","one who rules for the crown"]]},
  puer: { m:["词根 puer-(孩童),本身就是中心词","root puer- (child), a bare root word"], f:[
    ["puerile","puer(孩童)+ -ile(…性质的)","puer (child) + -ile (adj.: like)","孩子气的","childish"],
    ["puericulture","puer(孩童)+ cultura(培育)","puer (child) + cultura (care)","育儿学","child-rearing science"]]},
  puella: { m:["puer(孩童)+ 指小词尾 -ella(小…)","puer (child) + diminutive -ella (little)"], f:[
    ["-ella 家族","umbrella(小影子)、novella(小故事)","umbrella (little shade), novella (little tale)","-ella=小巧可爱之物","-ella marks small, dear things"]]},
  femina: { m:["词根 femin-(女)+ 阴性词尾 -a","root femin- (woman) + feminine -a"], f:[
    ["feminine","femin(女)+ -ine(…的)","femin (woman) + -ine (adj.)","女性的","womanly"],
    ["female","femin → 法语 femelle → 英语","femin → French femelle → English","女性","female"],
    ["femme (法)","femina 的法语后代","femina in French","女人;妻子","woman, wife"]]},
  vir: { m:["词根 vir-(成年男子),裸词根词","root vir- (man), a bare root"], f:[
    ["virile","vir(男)+ -ile(…性质的)","vir (man) + -ile","有男子气概的","manly"],
    ["virtue","vir(男)+ -tus(抽象名词尾)","vir (man) + -tus (abstract noun)","美德(原=男子的勇武)","excellence (once: manly courage)"],
    ["triumvirate","tri(三)+ vir(男人)+ -ate","tri (three) + vir (man) + -ate","三头同盟","rule of three men"]]},
  frater: { m:["词根 fratr-(兄弟)+ 词尾 -er","root fratr- (brother) + -er"], f:[
    ["fraternal","fratern(兄弟)+ -al(…的)","fratern (brother) + -al","兄弟的","brotherly"],
    ["fraternity","fratern(兄弟)+ -ity(名词尾:状态)","fratern + -ity (noun: state)","兄弟会;手足情","a brotherhood"],
    ["frère (法) / fratello (意)","frater 的后代","frater's descendants","兄弟","brother"]]},
  soror: { m:["词根 soror-(姐妹),裸词根词","root soror- (sister)"], f:[
    ["sorority","soror(姐妹)+ -ity(状态)","soror (sister) + -ity","姐妹会","a sisterhood"],
    ["sœur (法)","soror 的法语后代","soror in French","姐妹","sister"]]},
  amicus: { m:["词根 am-(爱)+ -icus(有关联的人)","root am- (love) + -icus (person of)"], f:[
    ["amicable","amic(朋友)+ -able(能…的)","amic (friend) + -able","友好的","friendly"],
    ["amigo (西) / ami (法)","amicus 的后代","amicus's children","朋友","friend"],
    ["enemy","in(不)+ amicus(朋友)→ inimicus","in (not) + amicus → inimicus","敌人=\"非朋友\"!","an enemy is a not-friend!"],
    ["amateur","am(爱)+ -ateur(做…的人)","am (love) + -ateur (one who)","业余爱好者=为爱而做的人","one who does it for love"]]},
  populus: { m:["词根 popul-(人民)+ 阳性词尾 -us","root popul- (people) + -us"], f:[
    ["popular","popul(人民)+ -ar(…的)","popul (people) + -ar","受欢迎的=人民喜爱的","liked by the people"],
    ["population","popul + -ation(名词尾:总称)","popul + -ation","人口","all the people"],
    ["publish","publ(人民的)+ -ish","publ (of the people) + -ish","出版=向人民公开","to make public"],
    ["republic","res(事务)+ publica(人民的)","res (affair) + publica (of the people)","共和国=人民的事业","the people's affair"]]},
  deus: { m:["词根 de-/div-(神)+ 阳性词尾 -us","root de-/div- (god) + -us"], f:[
    ["divine","div(神)+ -ine(…的)","div (god) + -ine","神圣的","godly"],
    ["deity","de(神)+ -ity(名词尾)","de (god) + -ity","神明","a god"],
    ["adieu (法) / adiós (西)","a(向)+ dieu/Dios(神)","a (to) + dieu/Dios (God)","再见=把你托付给神","farewell = (I commend you) to God"]]},
  dea: { m:["词根 de-(神)+ 阴性词尾 -a","root de- (god) + feminine -a"], f:[
    ["diva","div(神)+ -a(阴性)→ 意语","div (god) + -a → Italian","歌剧女神=天后","the goddess of the opera stage"],
    ["Diana","女神名,同 div- 词根","the goddess's name, same root","狩猎与月亮女神","goddess of moon and hunt"]]},
  heros: { m:["希腊借词 heros(保护者→英雄)","Greek loanword heros (protector → hero)"], f:[
    ["heroic","hero + -ic(…的)","hero + -ic","英雄的","heroic"],
    ["heroine","hero + -ine(阴性词尾)","hero + -ine (feminine)","女英雄","a female hero"],
    ["heroism","hero + -ism(名词尾:精神)","hero + -ism","英雄主义","hero-spirit"]]},
  nomen: { m:["词根 nomin-(名)+ 中性词尾 -men","root nomin- (name) + neuter -men"], f:[
    ["nominate","nomin(名)+ -ate(动词尾)","nomin (name) + -ate","提名=喊出名字","to put a name forward"],
    ["noun","nomen 经法语磨损而来","nomen worn down via French","名词=命名之词","the naming word"],
    ["renown","re(反复)+ nown(名)","re (again) + nown (name)","名望=被反复提名","fame: named again and again"],
    ["anonymous","an(无)+ onym(名,希腊同根)+ -ous","an (without) + onym (name) + -ous","匿名的","without a name"]]},
  familia: { m:["famul-(仆人/家人)+ 集合词尾 -ia","famul- (household member) + collective -ia"], f:[
    ["familiar","famili(家)+ -ar(…的)","famili (household) + -ar","熟悉的=如家人般的","known like one's own family"],
    ["familiarize","famili + -ize(使…)","famili + -ize (make)","使熟悉","to make familiar"]]},
  domus: { m:["词根 dom-(家/屋)+ 词尾 -us","root dom- (house) + -us"], f:[
    ["domestic","domest(家)+ -ic(…的)","domest (home) + -ic","家庭的;国内的","of the home"],
    ["dominate","domin(一家之主)+ -ate","domin (master of the house) + -ate","支配","to be master"],
    ["dome","dom(屋)→ \"神之屋\"的圆顶","dom (house) → the round roof of God's house","圆顶","a dome"],
    ["madam","ma(我的)+ dame(女主人,dom- 阴性)","ma (my) + dame (house-lady)","夫人","my lady of the house"]]},

  /* ---- L2 Sea & Sailing ---- */
  navis: { m:["词根 nav-(船)+ 词尾 -is","root nav- (ship) + -is"], f:[
    ["naval","nav(船)+ -al(…的)","nav (ship) + -al","海军的","of ships"],
    ["navigate","nav(船)+ ig(驾驶,agere)+ -ate","nav (ship) + ig (drive) + -ate","航行=驾船","to drive a ship"],
    ["navy","nav → 法语 navie","nav → French navie","海军=船队","the fleet"],
    ["astronaut 的 -naut","希腊同根 naus(船)","Greek cousin naus (ship)","宇航员=星际水手","star-sailor"]]},
  aqua: { m:["词根 aqu-(水)+ 阴性词尾 -a","root aqu- (water) + feminine -a"], f:[
    ["aquarium","aqu(水)+ -arium(…的场所)","aqu (water) + -arium (place for)","水族馆","a place of water"],
    ["aquatic","aqu(水)+ -atic(…的)","aqu (water) + -atic","水生的","living in water"],
    ["aqueduct","aqu(水)+ duct(引导)","aqu (water) + duct (lead)","引水渠","a water-leader"],
    ["subaquatic","sub(下)+ aqu(水)+ -atic","sub (under) + aqu + -atic","水下的","under-water"]]},
  mare: { m:["词根 mar-(海)+ 中性词尾 -e","root mar- (sea) + neuter -e"], f:[
    ["marine","mar(海)+ -ine(…的)","mar (sea) + -ine","海洋的","of the sea"],
    ["submarine","sub(下)+ mar(海)+ -ine","sub (under) + mar (sea) + -ine","潜艇=海下之物","under-sea craft"],
    ["mariner","mar(海)+ -iner(从事者)","mar (sea) + -iner (worker)","水手","a seaman"],
    ["maritime","mar(海)+ -itime(邻近的)","mar (sea) + -itime","滨海的;海事的","by the sea"]]},
  ventus: { m:["词根 vent-(风)+ 词尾 -us","root vent- (wind) + -us"], f:[
    ["ventilate","vent(风)+ -ilate(使…通)","vent (wind) + -ilate","通风","to let wind through"],
    ["ventilation","vent + -ilation(名词)","vent + -ilation","通风系统","air flow"],
    ["hyperventilate","hyper(过度)+ ventilate","hyper (over) + ventilate","呼吸过度","to over-breathe"]]},
  caelum: { m:["词根 cael-(天)+ 中性词尾 -um","root cael- (sky) + neuter -um"], f:[
    ["celestial","celest(天)+ -ial(…的)","celest (sky) + -ial","天上的","heavenly"],
    ["ceiling","cael → 法语 ciel → 英语","cael → French ciel → English","天花板=室内的\"天\"","the room's own sky"],
    ["cerulean","cael 的亲戚 caeruleus","kin caeruleus","天青色","sky-blue"]]},
  stella: { m:["词根 stell-(星)+ 阴性词尾 -a","root stell- (star) + feminine -a"], f:[
    ["stellar","stell(星)+ -ar(…的)","stell (star) + -ar","星的;一流的","of the stars; brilliant"],
    ["constellation","con(共同)+ stell(星)+ -ation","con (together) + stell + -ation","星座=聚在一起的星","stars grouped together"],
    ["interstellar","inter(之间)+ stell(星)+ -ar","inter (between) + stell + -ar","星际的","between the stars"]]},
  sol: { m:["词根 sol-(太阳),裸词根词","root sol- (sun), bare root"], f:[
    ["solar","sol(日)+ -ar(…的)","sol (sun) + -ar","太阳的","of the sun"],
    ["parasol","para(挡)+ sol(日)","para (shield) + sol (sun)","阳伞","a sun-shield"],
    ["solstice","sol(日)+ stice(站住)","sol (sun) + stice (stand)","至日=太阳驻足之日","the day the sun stands still"],
    ["solarium","sol(日)+ -arium(场所)","sol + -arium (place)","日光房","a sun-room"]]},
  luna: { m:["词根 lun-(月)+ 阴性词尾 -a","root lun- (moon) + feminine -a"], f:[
    ["lunar","lun(月)+ -ar(…的)","lun (moon) + -ar","月球的","of the moon"],
    ["lunatic","lun(月)+ -atic(受…影响的)","lun (moon) + -atic (struck by)","疯癫的=被月亮迷了心窍","moon-struck"],
    ["lunette","lun(月)+ -ette(小)","lun (moon) + -ette (little)","半月窗","a little moon window"]]},
  nauta: { m:["希腊词根 nau-(船)+ 从业者词尾 -ta","Greek root nau- (ship) + doer ending -ta"], f:[
    ["nautical","naut(水手)+ -ical(…的)","naut (sailor) + -ical","航海的","of sailing"],
    ["astronaut","astro(星)+ naut(水手)","astro (star) + naut (sailor)","宇航员=星际水手","a star-sailor"],
    ["aeronaut","aero(空气)+ naut(水手)","aero (air) + naut","飞艇驾驶员=天空水手","an air-sailor"],
    ["Argonaut","Argo(阿尔戈号)+ naut","Argo + naut","阿尔戈英雄=金羊毛水手","sailor of the Argo"]]},
  insula: { m:["词根 insul-(岛)+ 阴性词尾 -a","root insul- (island) + -a"], f:[
    ["insulate","insul(岛)+ -ate(使…)","insul (island) + -ate (make)","隔绝=使成孤岛","to make an island of"],
    ["peninsula","paene(几乎)+ insula(岛)","paene (almost) + insula","半岛=几乎是岛","almost-an-island"],
    ["isolate","insula → 意语 isola + -ate","insula → Italian isola + -ate","孤立","to island someone"],
    ["insular","insul + -ar(…的)","insul + -ar","岛国心态的;封闭的","island-minded"]]},
  unda: { m:["词根 und-(波)+ 阴性词尾 -a","root und- (wave) + -a"], f:[
    ["undulate","und(波)+ -ulate(做…动作)","und (wave) + -ulate","波动起伏","to move in waves"],
    ["inundate","in(进入)+ und(波)+ -ate","in (in) + und (wave) + -ate","淹没=波浪涌入","to flood over"],
    ["abundant","ab(满出)+ und(波)+ -ant","ab (off) + und (wave) + -ant","丰沛的=如水漫溢","overflowing"],
    ["redundant","red(再三)+ und(波)+ -ant","red (again) + und + -ant","冗余的=一波又一波","wave upon wave too many"]]},
  tempestas: { m:["tempus(时间)+ -tas(名词尾:状态)","tempus (time) + -tas (noun: state)"], f:[
    ["tempest","tempestas 经法语进入英语","via French","暴风雨","a storm"],
    ["tempestuous","tempest + -uous(充满…的)","tempest + -uous (full of)","狂暴的","storm-full"]]},
  portus: { m:["词根 port-(港/门/运)+ 词尾 -us","root port- (harbor/carry) + -us"], f:[
    ["port","port(港)","port (harbor)","港口","harbor"],
    ["opportunity","ob(朝向)+ port(港)+ -unity","ob (toward) + port + -unity","机会=顺风入港","wind blowing you to harbor"],
    ["import / export","im(进)/ ex(出)+ port(运)","im (in) / ex (out) + port (carry)","进口/出口","carry in / carry out"],
    ["transport","trans(横越)+ port(运)","trans (across) + port","运输","carry across"]]},
  terra: { m:["词根 terr-(大地)+ 阴性词尾 -a","root terr- (earth) + -a"], f:[
    ["terrain","terr(地)+ -ain(名词尾)","terr (earth) + -ain","地形","the lie of the land"],
    ["territory","terr(地)+ -itory(范围)","terr + -itory (area)","领土","land under rule"],
    ["Mediterranean","medi(中间)+ terr(地)+ -anean","medi (middle) + terr + -anean","地中海=陆地中间的海","sea amid the lands"],
    ["extraterrestrial","extra(之外)+ terrestri(地球)+ -al","extra (beyond) + terrestri + -al","外星的(E.T.!)","beyond Earth (E.T.!)"]]},
  nubes: { m:["词根 nub-(云)+ 词尾 -es","root nub- (cloud) + -es"], f:[
    ["nuance","nub → 法语 nue(云)+ -ance","nub → French nue (cloud) + -ance","细微差别=云的明暗层次","the shadings of a cloud"],
    ["nube (西)","nubes 的西语后代","nubes in Spanish","云","cloud"]]},
  pluvia: { m:["词根 pluv-(雨)+ 阴性词尾 -ia","root pluv- (rain) + -ia"], f:[
    ["pluvial","pluv(雨)+ -ial(…的)","pluv (rain) + -ial","多雨的","rainy"],
    ["pluie (法) / lluvia (西)","pluvia 的后代","pluvia's children","雨","rain"]]},
  remus: { m:["词根 rem-(桨)+ 词尾 -us","root rem- (oar) + -us"], f:[
    ["trireme","tri(三)+ rem(桨)+ -e","tri (three) + rem (oar)","三列桨战船","three-oar-bank warship"],
    ["bireme","bi(二)+ rem(桨)","bi (two) + rem (oar)","双列桨船","two-bank ship"]]},
  velum: { m:["词根 vel-(帆/遮布)+ 中性词尾 -um","root vel- (sail/cloth) + -um"], f:[
    ["veil","vel(遮布)经法语进入英语","vel via French","面纱","a veil"],
    ["reveal","re(揭开)+ veal(面纱)","re (back) + veal (veil)","揭示=揭开面纱","to draw back the veil"],
    ["unveil","un(去除)+ veil(纱)","un (off) + veil","揭幕","to un-veil"]]},
  piscis: { m:["词根 pisc-(鱼)+ 词尾 -is","root pisc- (fish) + -is"], f:[
    ["Pisces","pisc 的复数=双鱼座","plural of piscis","双鱼座","the zodiac Fishes"],
    ["piscina","pisc(鱼)+ -ina(场所)","pisc (fish) + -ina (place)","鱼池;西语泳池!","fish-pond; Spanish for pool!"],
    ["piscatorial","piscator(渔夫)+ -ial","piscator (fisher) + -ial","捕鱼的","of fishing"]]},
  iter: { m:["词根 i-(走,ire)+ 名词尾 -ter","root i- (to go, ire) + -ter"], f:[
    ["itinerary","itiner(旅程)+ -ary(清单)","itiner (journey) + -ary","行程表","the journey list"],
    ["itinerant","itiner + -ant(正在…的)","itiner + -ant (one who)","巡回的","going about"],
    ["exit 的 -it","ex(出)+ it(走)——同一个\"走\"","ex (out) + it (go) — same go!","出口","the way out"]]},

  /* ---- L3 The Palace ---- */
  porta: { m:["词根 port-(门/运)+ 阴性词尾 -a","root port- (gate/carry) + -a"], f:[
    ["portal","port(门)+ -al(名词尾)","port (gate) + -al","大门;传送门","a great door"],
    ["porter","port(运)+ -er(人)","port (carry) + -er","门房;搬运工","door-keeper, carrier"],
    ["portable","port(运)+ -able(可…的)","port (carry) + -able","便携的","carryable"],
    ["porte (法) / puerta (西)","porta 的后代","porta's children","门","door"]]},
  ianua: { m:["门神 Ianus(雅努斯)+ 阴性词尾 -a","god Ianus (Janus) + -a"], f:[
    ["January","Ianu(门神)+ -ary(月份)","Ianu (door god) + -ary","一月=一年之门","the year's doorway"],
    ["janitor","ianu(门)+ -itor(看管人)","ianu (door) + -itor (keeper)","看门人","door-keeper"]]},
  murus: { m:["词根 mur-(墙)+ 词尾 -us","root mur- (wall) + -us"], f:[
    ["mural","mur(墙)+ -al(…的)","mur (wall) + -al","壁画","a wall painting"],
    ["intramural","intra(内)+ mur(墙)+ -al","intra (within) + mur + -al","校内的=墙内的","within the walls"],
    ["immure","im(进入)+ mure(墙)","im (in) + mure (wall)","禁闭=砌进墙里","to wall in"]]},
  turris: { m:["词根 turr-(塔)+ 词尾 -is","root turr- (tower) + -is"], f:[
    ["turret","turr(塔)+ -et(小)","turr (tower) + -et (little)","小塔;炮塔","a little tower"],
    ["tour (法) / torre (意/西)","turris 的后代","turris's children","塔","tower"]]},
  aula: { m:["希腊借词 aule(庭院→大厅)","Greek loan aule (courtyard → hall)"], f:[
    ["Aula","欧洲大学礼堂沿用原词","kept whole in European universities","大礼堂","the great hall"]]},
  mensa: { m:["词根 mens-(桌/量)+ 阴性词尾 -a","root mens- (table) + -a"], f:[
    ["mesa (西)","mensa 磨损而来","mensa worn down","桌子;平顶山","table; table-mountain"],
    ["Mensa","高智商俱乐部=圆桌之名","the round-table club","门萨俱乐部","the Mensa society"]]},
  sella: { m:["词根 sed-(坐)+ 指小词尾 -la(sed+la→sella)","root sed- (sit) + -la (sed+la→sella)"], f:[
    ["sedentary","sed(坐)+ -entary(习于…的)","sed (sit) + -entary","久坐的","sitting much"],
    ["saddle","sed- 的日耳曼亲戚","Germanic cousin of sed-","马鞍=骑手之座","the rider's seat"],
    ["session","sess(坐)+ -ion(名词尾)","sess (sit) + -ion","会议=一起坐","a sitting"],
    ["president","pre(在前)+ sid(坐)+ -ent(人)","pre (before) + sid (sit) + -ent","主席=坐在前面的人","the one seated in front"]]},
  lucerna: { m:["词根 luc-(光)+ 器具词尾 -erna","root luc- (light) + tool ending -erna"], f:[
    ["lucent","luc(光)+ -ent(正在…的)","luc (light) + -ent","发亮的","shining"],
    ["translucent","trans(透过)+ luc(光)+ -ent","trans (through) + luc + -ent","半透明的","letting light through"],
    ["elucidate","e(出)+ lucid(明亮)+ -ate","e (out) + lucid + -ate","阐明=把光放出来","to bring to light"]]},
  fenestra: { m:["词根 fenestr-(窗)+ 阴性词尾 -a","root fenestr- (window) + -a"], f:[
    ["defenestration","de(向外)+ fenestr(窗)+ -ation","de (out of) + fenestr + -ation","掷出窗外(布拉格事件!)","throwing out a window (Prague!)"],
    ["fenêtre (法) / Fenster (德)","fenestra 的后代","fenestra's children","窗","window"]]},
  tectum: { m:["词根 teg-/tect-(覆盖)+ 中性词尾 -um","root teg-/tect- (cover) + -um"], f:[
    ["protect","pro(在前)+ tect(盖)","pro (in front) + tect (cover)","保护=在前面遮挡","to cover in front"],
    ["detect","de(揭去)+ tect(盖)","de (off) + tect (cover)","侦查=揭开盖子","to take the cover off"],
    ["architect","archi(总)+ tect(建造)","archi (chief) + tect (builder)","建筑师=总建造者","the chief builder"]]},
  columna: { m:["词根 column-(柱)+ 阴性词尾 -a","root column- (pillar) + -a"], f:[
    ["column","柱→专栏(一柱文字)","pillar → a pillar of text","圆柱;专栏","pillar; newspaper column"],
    ["colonnade","colonn(柱)+ -ade(成排)","colonn + -ade (row of)","柱廊","a row of pillars"],
    ["colonel","意语 colonnello=纵队之首","Italian colonnello, head of the column","上校","leader of the column"]]},
  statua: { m:["词根 sta-(站)+ -tua(名词尾)","root sta- (stand) + -tua"], f:[
    ["static","stat(站)+ -ic(…的)","stat (stand) + -ic","静止的","standing still"],
    ["station","stat(站)+ -ion(地点)","stat + -ion (place)","车站=站立之处","a standing-place"],
    ["statue","stat(立)+ -ue","stat (stand) + -ue","雕像=立着的像","a standing image"],
    ["obstacle","ob(挡在前)+ sta(站)+ -cle","ob (against) + sta (stand) + -cle","障碍=站在路上的东西","what stands in the way"]]},
  hortus: { m:["词根 hort-(园)+ 词尾 -us","root hort- (garden) + -us"], f:[
    ["horticulture","horti(园)+ cultura(栽培)","horti (garden) + cultura","园艺学","garden-craft"],
    ["orchard","hort- 的日耳曼混合词","Germanic blend with hort-","果园","fruit garden"]]},
  fons: { m:["词根 font-(泉)+ 主格 -s","root font- (spring) + -s"], f:[
    ["fountain","font(泉)+ -ain","font (spring) + -ain","喷泉","a spring"],
    ["font","泉→\"源\":字体/洗礼池","spring → source: type / basin","字体;洗礼池","a source of letters or water"],
    ["fontanelle","font(泉)+ -anelle(小)","font + -anelle (little)","囟门=婴儿头顶的\"小泉\"","the baby's little spring"]]},
  aurum: { m:["词根 aur-(金)+ 中性词尾 -um","root aur- (gold) + -um"], f:[
    ["Au","化学符号=aurum 缩写","the symbol IS aurum","金元素符号","gold's symbol"],
    ["aureate","aure(金)+ -ate(…的)","aure (gold) + -ate","金色的","gilded"],
    ["oro (西) / or (法)","aurum 的后代","aurum's children","金子","gold"]]},
  argentum: { m:["词根 argent-(银/发亮)+ -um","root argent- (silver/shining) + -um"], f:[
    ["Ag","化学符号=argentum","the symbol IS argentum","银元素符号","silver's symbol"],
    ["Argentina","argent(银)+ -ina(之地)","argent (silver) + -ina (land)","阿根廷=白银之国","land of silver"],
    ["argent (法)","法语\"钱\"就是\"银\"","French for money = silver","钱;银","money, silver"]]},
  marmor: { m:["希腊借词 marmaros(闪亮之石)","Greek loan marmaros (shining stone)"], f:[
    ["marble","marmor 磨损而来","marmor worn down","大理石","marble"],
    ["marmoreal","marmor + -eal(…般的)","marmor + -eal","大理石般的","marble-like"]]},
  pictura: { m:["词根 pict-(画,pingere)+ -ura(名词尾:成果)","root pict- (paint) + -ura (result)"], f:[
    ["picture","pict(画)+ -ure","pict (paint) + -ure","图画","a painting"],
    ["pictogram","picto(画)+ gram(写)","picto (paint) + gram (write)","象形符号","picture-writing"],
    ["depict","de(完全)+ pict(画)","de (fully) + pict (paint)","描绘","to paint fully"],
    ["pigment","pig(画)+ -ment(名词尾:物)","pig (paint) + -ment (thing)","颜料","painting-stuff"]]},
  servus: { m:["词根 serv-(服务/看守)+ 词尾 -us","root serv- (serve/watch) + -us"], f:[
    ["service","serv(服务)+ -ice(名词尾)","serv + -ice","服务","serving"],
    ["servant","serv + -ant(人)","serv + -ant (one who)","仆人","one who serves"],
    ["conserve","con(完全)+ serve(看守)","con (fully) + serve (guard)","保存=好好看守","to guard well"],
    ["deserve","de(完全)+ serve(服务)","de (fully) + serve","应得=服务够了","to have served enough"]]},
  convivium: { m:["con(一起)+ viv(生活)+ -ium(名词尾)","con (together) + viv (live) + -ium"], f:[
    ["convivial","conviv(共餐)+ -ial(…的)","conviv + -ial","欢宴的","feast-happy"],
    ["vivid","viv(活)+ -id(…的)","viv (live) + -id","生动的=活生生的","life-like"],
    ["revive","re(再)+ vive(活)","re (again) + vive (live)","复活;复兴","to live again"],
    ["survive","sur(超过)+ vive(活)","sur (beyond) + vive","幸存=活得更久","to out-live"]]},

  /* ---- L4 The Princess's Gifts ---- */
  filum: { m:["词根 fil-(线)+ 中性词尾 -um","root fil- (thread) + -um"], f:[
    ["filament","fila(线)+ -ment(物)","fila (thread) + -ment","灯丝;细丝","a fine thread"],
    ["profile","pro(向前)+ file(线条)","pro (forth) + file (line)","轮廓;简介","the outline drawn forward"],
    ["file","串文件的线→档案","the thread that strung papers","档案","papers on a thread"],
    ["fillet","fil(线)+ -et(小)","fil + -et (little)","肉条;窄带","a little strip"]]},
  gladius: { m:["词根 gladi-(剑)+ 词尾 -us","root gladi- (sword) + -us"], f:[
    ["gladiator","gladi(剑)+ -ator(使用者)","gladi (sword) + -ator (user)","角斗士=用剑者","the swordsman"],
    ["gladiolus","gladi(剑)+ -olus(小)","gladi + -olus (little)","剑兰=小剑草","the little-sword flower"]]},
  donum: { m:["词根 don-/da-(给)+ 中性词尾 -um","root don-/da- (give) + -um"], f:[
    ["donate","don(给)+ -ate(动词尾)","don (give) + -ate","捐赠","to give"],
    ["donor","don(给)+ -or(人)","don + -or (one who)","捐赠者","a giver"],
    ["pardon","par(完全)+ don(给)","par (fully) + don (give)","原谅=完全给予","to give completely"],
    ["condone","con(全)+ done(给)","con + done (give)","宽恕","to overlook by giving"]]},
  corona: { m:["词根 coron-(冠/环)+ 阴性词尾 -a","root coron- (crown/ring) + -a"], f:[
    ["coronation","coron(冠)+ -ation(仪式)","coron (crown) + -ation","加冕礼","the crowning"],
    ["coroner","coron + -er(王冠官员)","coron + -er (crown officer)","验尸官(原为王室官)","the crown's officer"],
    ["corolla","coron + -lla(小)","coron + -lla (little)","花冠(花瓣一圈)","the flower's little crown"]]},
  anulus: { m:["anus(环)+ 指小词尾 -ulus(小)","anus (ring) + diminutive -ulus"], f:[
    ["annular","anul(环)+ -ar(…的)","anul (ring) + -ar","环形的","ring-shaped"],
    ["annulus","数学\"圆环\"原词照搬","kept whole in math","圆环","the ring shape"],
    ["anillo (西) / anneau (法)","anulus 的后代","anulus's children","戒指","ring"]]},
  gemma: { m:["词根 gemm-(芽/宝石)+ -a","root gemm- (bud/gem) + -a"], f:[
    ["gem","gemma 缩短而来","gemma shortened","宝石","a gem"],
    ["gemmate","gemm(芽)+ -ate","gemm (bud) + -ate","出芽繁殖","to bud"]]},
  arca: { m:["词根 arc-(收纳/箱)+ -a","root arc- (chest/enclose) + -a"], f:[
    ["ark","arca 直接进入英语","arca straight into English","方舟=大箱子","the great chest"],
    ["arcane","arc(箱)+ -ane(…的)","arc (chest) + -ane","神秘的=锁在箱底的","chest-locked secret"],
    ["arcanum","arc + -anum(中性名词)","arc + -anum","秘藏;奥义","a hidden thing"]]},
  clavis: { m:["词根 clav-(钥匙)+ 词尾 -is","root clav- (key) + -is"], f:[
    ["clef","clav → 法语=音乐谱号","clav → French: music clef","谱号=乐谱的钥匙","the key to the staff"],
    ["clavicle","clav(钥匙)+ -icle(小)","clav + -icle (little)","锁骨=小钥匙骨","the little-key bone"],
    ["enclave","en(围在内)+ clave(锁)","en (in) + clave (lock)","飞地=锁在里面的领土","land locked inside"],
    ["conclave","con(共同)+ clave(锁)","con (together) + clave","秘密会议=锁门共议","locked-in council"]]},
  charta: { m:["希腊借词 chartes(纸草页)","Greek loan chartes (papyrus sheet)"], f:[
    ["chart","charta 缩短","charta shortened","图表","a chart"],
    ["card","charta → 法语 carte","charta → French carte","卡片","a card"],
    ["charter","chart + -er(文书)","chart + -er (document)","特许状","a granted paper"],
    ["cartography","carta(图)+ graphy(绘写)","carta (map) + graphy (writing)","制图学","map-writing"]]},
  epistula: { m:["希腊 epi(向)+ stell(派送)+ -ula","Greek epi (to) + stell (send) + -ula"], f:[
    ["epistle","epistula 经法语而来","via French","书信","a letter"],
    ["epistolary","epistol + -ary(…的)","epistol + -ary","书信体的","in letters"]]},
  liber: { m:["词根 libr-(树皮→书)+ 词尾 -er","root libr- (bark → book) + -er"], f:[
    ["library","libr(书)+ -ary(场所)","libr (book) + -ary (place)","图书馆","a place of books"],
    ["librarian","library + -an(人)","library + -an (person)","图书管理员","the book-keeper"],
    ["libretto","libr → 意语+ -etto(小)","libr → Italian + -etto (little)","歌剧脚本=小书","the opera's little book"],
    ["libro (西/意) / livre (法)","liber 的后代","liber's children","书","book"]]},
  verbum: { m:["词根 verb-(词)+ 中性词尾 -um","root verb- (word) + -um"], f:[
    ["verb","verb(词)——句子的核心词","the key word of the sentence","动词","the action word"],
    ["verbal","verb + -al(…的)","verb + -al","口头的","in words"],
    ["proverb","pro(公开)+ verb(词)","pro (forth) + verb","谚语=公开流传之言","a word put forth"],
    ["adverb","ad(附于)+ verb(动词)","ad (to) + verb","副词=贴着动词的词","the word beside the verb"]]},
  consilium: { m:["con(共同)+ sil(商议)+ -ium(名词尾)","con (together) + sil (deliberate) + -ium"], f:[
    ["counsel","consilium 经法语","via French","忠告","advice"],
    ["counselor","counsel + -or(人)","counsel + -or","顾问","an adviser"],
    ["consult","con(共同)+ sult(商)","con + sult","咨询","to take counsel"]]},
  fides: { m:["词根 fid-(信)+ 词尾 -es","root fid- (trust) + -es"], f:[
    ["fidelity","fidel(忠)+ -ity(状态)","fidel (faithful) + -ity","忠诚","faithfulness"],
    ["confide","con(完全)+ fide(信)","con (fully) + fide (trust)","倾诉=完全信任","to trust fully"],
    ["confident","con + fid(信)+ -ent","con + fid + -ent","自信的=完全相信自己","fully trusting oneself"],
    ["defy","de(解除)+ fy(信)","de (un) + fy (trust)","挑衅=撕毁信任","to un-trust"]]},
  amor: { m:["词根 am-(爱)+ 名词尾 -or","root am- (love) + noun -or"], f:[
    ["amorous","amor + -ous(充满…的)","amor + -ous (full of)","多情的","love-full"],
    ["amateur","am(爱)+ -ateur(做…者)","am (love) + -ateur","业余爱好者=为爱而做","doer-for-love"],
    ["enamored","en(陷入)+ amor(爱)+ -ed","en (in) + amor + -ed","倾心的","fallen in love"],
    ["amiable","am(爱)+ -iable(可…的)","am + -iable","和蔼可亲的","lovable"]]},
  cor: { m:["词根 cord-(心),cor 为主格","root cord- (heart); cor is the bare form"], f:[
    ["cordial","cord(心)+ -ial(…的)","cord (heart) + -ial","真心的","from the heart"],
    ["courage","cor → 法语 cœur + -age","cor → French cœur + -age","勇气=心之力","heart-strength"],
    ["record","re(再)+ cord(心)","re (again) + cord (heart)","记录=重过一遍心","to run through the heart again"],
    ["accord","ac(去向)+ cord(心)","ac (to) + cord","一致=心心相印","heart to heart"],
    ["discord","dis(分离)+ cord(心)","dis (apart) + cord","不和=心的分离","hearts apart"]]},
  animus: { m:["词根 anim-(气息/心灵)+ -us","root anim- (breath/mind) + -us"], f:[
    ["animal","anim(气息)+ -al(之物)","anim (breath) + -al","动物=有气息的生灵","the breathing being"],
    ["animate","anim + -ate(使有…)","anim + -ate (give)","赋予生命;动画","to give breath"],
    ["unanimous","un(一)+ anim(心)+ -ous","un(us) (one) + anim + -ous","全体一致=一条心","of one mind"],
    ["magnanimous","magn(大)+ anim(心)+ -ous","magn (great) + anim + -ous","宽宏大量=大心量","great-hearted"]]},
  sapientia: { m:["sapi(有味/明智)+ -entia(名词尾:性质)","sapi (taste/be wise) + -entia (quality)"], f:[
    ["Homo sapiens","homo(人)+ sapiens(智慧的)","homo (human) + sapiens (wise)","智人","the wise human"],
    ["sapient","sapi + -ent(…的)","sapi + -ent","睿智的","wise"],
    ["savor / sabor (西)","同根:辨味=辨智","same root: to taste is to know","品味","to taste"]]},
  secretum: { m:["se(分开)+ cret(筛选)+ -um","se (apart) + cret (sift) + -um"], f:[
    ["secret","se + cret:被筛开的=隐藏的","sifted apart = hidden","秘密","the set-apart thing"],
    ["secretary","secret + -ary(管…的人)","secret + -ary (keeper)","秘书=管秘密的人","keeper of secrets"],
    ["secrete","分泌:悄悄送出","to send out quietly","分泌;藏匿","to hide away"]]},
  auxilium: { m:["词根 aug-/aux-(增援)+ -ilium","root aug-/aux- (increase) + -ilium"], f:[
    ["auxiliary","auxili + -ary(…的)","auxili + -ary","辅助的","helping"],
    ["augment","aug(增)+ -ment","aug (increase) + -ment","增加","to increase"]]},

  /* ---- L5 Into the Labyrinth ---- */
  lux: { m:["词根 luc-(光)+ 主格 -s(luc+s→lux)","root luc- (light) + -s (luc+s→lux)"], f:[
    ["lucid","luc(光)+ -id(…的)","luc (light) + -id","清晰的=透亮的","clear as light"],
    ["illuminate","il(进入)+ lumin(光)+ -ate","il (in) + lumin (light) + -ate","照亮","to light up"],
    ["Lucifer","luci(光)+ fer(带来)","luci (light) + fer (bring)","晨星=带光者","the light-bringer"],
    ["translucent","trans(透)+ luc(光)+ -ent","trans (through) + luc + -ent","半透明的","light-through"]]},
  tenebrae: { m:["词根 tenebr-(暗)+ 复数词尾 -ae","root tenebr- (dark) + plural -ae"], f:[
    ["tenebrous","tenebr + -ous(充满…的)","tenebr + -ous","阴暗的","darkness-full"],
    ["Tenebrae","教会\"暗夜礼\"沿用原词","kept whole in church rite","圣周暗礼","the service of shadows"]]},
  via: { m:["词根 vi-(路)+ 阴性词尾 -a","root vi- (way) + -a"], f:[
    ["viaduct","via(路)+ duct(引)","via (road) + duct (lead)","高架桥=引路之桥","a road-leader"],
    ["trivial","tri(三)+ vi(路)+ -al","tri (three) + vi (way) + -al","琐碎的=三岔路口闲谈","crossroads small-talk"],
    ["deviate","de(离开)+ vi(路)+ -ate","de (off) + vi (way) + -ate","偏离=离开道路","to leave the road"],
    ["obvious","ob(迎面)+ vi(路)+ -ous","ob (in the way) + vi + -ous","显然的=挡在路上的","right in the road"]]},
  umbra: { m:["词根 umbr-(影)+ 阴性词尾 -a","root umbr- (shade) + -a"], f:[
    ["umbrella","umbr(影)+ -ella(小)","umbr (shade) + -ella (little)","伞=小影子","a little shade"],
    ["sombrero (西)","s-+ombr(影)+ -ero","s- + ombr (shade) + -ero","宽檐帽=造影帽","the shade-making hat"],
    ["penumbra","paene(几乎)+ umbra(影)","paene (almost) + umbra","半影","the almost-shadow"],
    ["adumbrate","ad(加上)+ umbr(影)+ -ate","ad + umbr + -ate","勾勒轮廓=打上阴影","to sketch in shadow"]]},
  silentium: { m:["sil-(静)+ -entium(名词尾:状态)","sil- (be still) + -entium (state)"], f:[
    ["silent","sil + -ent(…的)","sil + -ent","安静的","still"],
    ["silencer","silence + -er(器具)","silence + -er (tool)","消音器","the quiet-maker"]]},
  timor: { m:["词根 tim-(怕)+ 名词尾 -or","root tim- (fear) + -or"], f:[
    ["timid","tim(怕)+ -id(…的)","tim (fear) + -id","胆小的","fearful"],
    ["intimidate","in(使)+ timid(怕)+ -ate","in (make) + timid + -ate","恐吓=使人害怕","to put fear in"],
    ["timorous","tim + -orous(多…的)","tim + -orous","战战兢兢的","fear-full"]]},
  ignis: { m:["词根 ign-(火)+ 词尾 -is","root ign- (fire) + -is"], f:[
    ["ignite","ign(火)+ -ite(使…)","ign (fire) + -ite","点燃","to set fire"],
    ["igneous","ign + -eous(…质的)","ign + -eous","火成的","fire-born"],
    ["ignition","ign + -ition(名词)","ign + -ition","点火装置","the fire-starter"]]},
  fax: { m:["词根 fac-(火把)+ 主格 -s","root fac- (torch) + -s"], f:[
    ["facula","fac(火把)+ -ula(小)","fac (torch) + -ula (little)","太阳光斑=小火把","the sun's little torch"]]},
  flamma: { m:["词根 flam-(燃)+ -ma(名词尾)","root flam- (blaze) + -ma"], f:[
    ["flame","flamma 缩短","flamma shortened","火焰","flame"],
    ["flammable","flamm + -able(易…的)","flamm + -able","易燃的","burnable"],
    ["flamingo","flam(火)+ -ingo","flam (flame) + -ingo","火烈鸟=火色鸟","the flame bird"],
    ["inflammation","in(内)+ flamm(火)+ -ation","in + flamm + -ation","炎症=体内起火","fire within"]]},
  saxum: { m:["词根 sax-(岩)+ 中性词尾 -um","root sax- (rock) + -um"], f:[
    ["saxifrage","saxi(岩)+ frag(碎)","saxi (rock) + frag (break)","虎耳草=碎岩草","the rock-breaker plant"],
    ["saxatile","sax + -atile(生长于…的)","sax + -atile","岩生的","rock-dwelling"]]},
  labyrinthus: { m:["希腊借词 labyrinthos(迷宫)","Greek loan labyrinthos"], f:[
    ["labyrinthine","labyrinth + -ine(…般的)","labyrinth + -ine","迷宫般的","maze-like"],
    ["labyrinthitis","labyrinth + -itis(炎症)","labyrinth + -itis","内耳迷路炎","inner-ear inflammation"]]},
  angulus: { m:["词根 angul-(角)+ 词尾 -us","root angul- (corner) + -us"], f:[
    ["angle","angul 缩短","angul shortened","角","angle"],
    ["triangle","tri(三)+ angle(角)","tri (three) + angle","三角形","three corners"],
    ["rectangle","rect(直)+ angle(角)","rect (right) + angle","矩形=直角形","right-cornered shape"],
    ["quadrangle","quadr(四)+ angle(角)","quadr (four) + angle","四方院","four corners"]]},
  dexter: { m:["词根 dextr-(右)+ 词尾 -er","root dextr- (right) + -er"], f:[
    ["dexterous","dextr(右手)+ -ous","dextr (right hand) + -ous","灵巧的","right-handed skilled"],
    ["ambidextrous","ambi(两边)+ dextr(右)+ -ous","ambi (both) + dextr + -ous","双手灵巧=两只右手","right-handed on both sides"],
    ["dexterity","dextr + -ity(名词)","dextr + -ity","灵巧","skillfulness"]]},
  sinister: { m:["词根 sinistr-(左)+ 词尾 -er","root sinistr- (left) + -er"], f:[
    ["sinister","占卜左侧=凶→阴险的","left side = ill omen → evil","阴险的","ominous"],
    ["sinistral","sinistr + -al(…的)","sinistr + -al","左旋的;左侧的","left-turning"]]},
  ante: { m:["前置词/前缀 ante-(在前)","preposition/prefix ante- (before)"], f:[
    ["a.m.","ante meridiem 缩写","ante meridiem","上午=正午之前","before midday"],
    ["antique","ante → antiquus(从前的)","ante → antiquus","古董=从前之物","a thing of before"],
    ["anticipate","anti(提前)+ cip(拿)+ -ate","anti (before) + cip (take) + -ate","预料=提前拿到","to take beforehand"],
    ["antecedent","ante(前)+ ced(走)+ -ent","ante + ced (go) + -ent","先行词=走在前面的","what goes before"]]},
  post: { m:["前置词/前缀 post-(在后)","preposition/prefix post- (after)"], f:[
    ["p.m.","post meridiem 缩写","post meridiem","下午=正午之后","after midday"],
    ["postpone","post(后)+ pone(放)","post (after) + pone (place)","推迟=放到后面","to place after"],
    ["postscript","post(后)+ script(写)= P.S.","post + script (write) = P.S.","附言=后写的话","written after"],
    ["posterity","poster(后来)+ -ity","poster (coming after) + -ity","后代","those who come after"]]},
  sub: { m:["前置词/前缀 sub-(在下)","preposition/prefix sub- (under)"], f:[
    ["submarine","sub(下)+ marine(海的)","sub + marine","潜艇","under-sea"],
    ["subway","sub(下)+ way(路)","sub + way","地铁=地下之路","the under-road"],
    ["subtitle","sub(下)+ title(标题)","sub + title","字幕;副标题","the under-title"],
    ["submit","sub(下)+ mit(送)","sub + mit (send)","提交=呈到下面","to send under"]]},
  super: { m:["前置词/前缀 super-(在上)","preposition/prefix super- (above)"], f:[
    ["superior","super + -ior(比较级:更…)","super + -ior (more)","更高的","higher"],
    ["supermarket","super(超)+ market","super + market","超市","the above-market"],
    ["supersonic","super(超)+ son(声)+ -ic","super + son (sound) + -ic","超音速的","above sound"],
    ["supreme","super 的最高级","superlative of super","至高的","highest of all"]]},
  intra: { m:["前缀 intra-(在内)","prefix intra- (within)"], f:[
    ["intranet","intra(内)+ net(网)","intra + net","内网","the inside net"],
    ["intravenous","intra(内)+ ven(静脉)+ -ous","intra + ven (vein) + -ous","静脉内的(IV)","within the vein"],
    ["intramural","intra(内)+ mur(墙)+ -al","intra + mur (wall) + -al","校内的","within the walls"]]},
  exitus: { m:["ex(出)+ it(走,ire)+ -us","ex (out) + it (go) + -us"], f:[
    ["exit","ex + it:走出去","ex + it: go out","出口","the way out"],
    ["transit","trans(横穿)+ it(走)","trans (across) + it (go)","运输;过境","going across"],
    ["initial","in(进入)+ it(走)+ -ial","in (in) + it (go) + -ial","开头的=刚走进去","just going in"],
    ["ambition","amb(四处)+ it(走)+ -ion","amb (around) + it + -ion","野心=四处奔走拉票","walking about for votes"]]},

  /* ---- L6 Senses & Body ---- */
  vox: { m:["词根 voc-(声/呼)+ 主格 -s(voc+s→vox)","root voc- (voice/call) + -s"], f:[
    ["vocal","voc(声)+ -al(…的)","voc (voice) + -al","嗓音的","of the voice"],
    ["advocate","ad(为…)+ voc(呼)+ -ate","ad (for) + voc (call) + -ate","倡导者=为人发声者","one who calls for another"],
    ["vocation","voc(召唤)+ -ation","voc (call) + -ation","职业=受到的召唤","one's calling"],
    ["provoke","pro(向前)+ voke(呼)","pro (forth) + voke (call)","激怒=挑起呼喊","to call forth"]]},
  auris: { m:["词根 aur-(耳)+ 词尾 -is","root aur- (ear) + -is"], f:[
    ["aural","aur(耳)+ -al(…的)","aur (ear) + -al","听觉的","of the ear"],
    ["auricle","aur + -icle(小)","aur + -icle (little)","耳廓;心耳","the little ear"],
    ["audio(亲戚)","aud(听)+ -io","aud (hear) + -io","音频","hearing-stuff"],
    ["audience","aud(听)+ -ience(众人)","aud (hear) + -ience","听众","the hearers"]]},
  oculus: { m:["词根 ocul-(眼)+ 词尾 -us","root ocul- (eye) + -us"], f:[
    ["ocular","ocul(眼)+ -ar(…的)","ocul (eye) + -ar","眼的","of the eye"],
    ["binoculars","bin(两)+ ocul(眼)+ -ars","bin (two) + ocul + -ars","双筒望远镜","two-eyes"],
    ["monocle","mon(单)+ ocle(眼)","mon (one) + ocle (eye)","单片眼镜","one-eye glass"],
    ["inoculate","in(植入)+ ocul(芽眼)+ -ate","in + ocul (bud-eye) + -ate","接种=植入\"芽眼\"","to graft a bud in"]]},
  manus: { m:["词根 man-(手)+ 词尾 -us","root man- (hand) + -us"], f:[
    ["manual","manu(手)+ -al(…的)","manu (hand) + -al","手动的;手册","by hand; handbook"],
    ["manufacture","manu(手)+ fact(做)+ -ure","manu (hand) + fact (make) + -ure","制造=用手做","made by hand"],
    ["manuscript","manu(手)+ script(写)","manu + script (write)","手稿","hand-written"],
    ["manage","man(手)+ -age:上手操控","man (hand) + -age","管理=拿在手里","to handle"],
    ["manicure","mani(手)+ cure(护理)","mani (hand) + cure (care)","美甲=护手","hand-care"]]},
  pes: { m:["词根 ped-(脚),pes 为主格","root ped- (foot); pes is the bare form"], f:[
    ["pedal","ped(脚)+ -al(之物)","ped (foot) + -al","踏板","the foot-thing"],
    ["pedestrian","pedestr(步行)+ -ian(人)","pedestr (on foot) + -ian","行人","the foot-goer"],
    ["centipede","centi(百)+ ped(脚)","centi (hundred) + ped","蜈蚣=百足虫","the hundred-footer"],
    ["expedition","ex(解开)+ ped(脚)+ -ition","ex (free) + ped (foot) + -ition","远征=放开脚步","feet set free"],
    ["impede","im(缚住)+ pede(脚)","im (in) + pede (foot)","阻碍=绊住脚","to shackle the feet"]]},
  caput: { m:["词根 capit-(头),caput 为主格","root capit- (head); caput is the bare form"], f:[
    ["capital","capit(头)+ -al(…的)","capit (head) + -al","首都;大写;资本","the head city/letter/money"],
    ["captain","capit + -ain(人)","capit + -ain","队长=头儿","the head man"],
    ["decapitate","de(去除)+ capit(头)+ -ate","de (off) + capit + -ate","斩首","to take the head off"],
    ["chapter","capit → 小标题 capitulum","capit → capitulum (little head)","章节=小头目","a little head of text"]]},
  corpus: { m:["词根 corpor-(身体),corpus 为主格","root corpor- (body); corpus is bare form"], f:[
    ["corporation","corpor(身体)+ -ation","corpor (body) + -ation","公司=拟成一个身体","made into one body"],
    ["corps","corpus → 法语:军团","corpus → French","军团=一个\"身体\"的兵","a body of troops"],
    ["corpse","corpus → 尸体","corpus → corpse","尸体","the body left behind"],
    ["incorporate","in(并入)+ corpor(体)+ -ate","in + corpor + -ate","并入=收进身体","to take into the body"]]},
  os: { m:["词根 or-(口),os 为主格","root or- (mouth); os is the bare form"], f:[
    ["oral","or(口)+ -al(…的)","or (mouth) + -al","口头的","by mouth"],
    ["orator","or(口)+ -ator(善用者)","or + -ator (master of)","演说家","a master of the mouth"],
    ["orifice","or(口)+ fic(做)+ -e","or (mouth) + fic (make)","开口","a made mouth"]]},
  nasus: { m:["词根 nas-(鼻)+ 词尾 -us","root nas- (nose) + -us"], f:[
    ["nasal","nas(鼻)+ -al(…的)","nas (nose) + -al","鼻音的","of the nose"],
    ["nasturtium","nas(鼻)+ turt(扭)","nas (nose) + turt (twist)","旱金莲=呛鼻花","the nose-twister flower"]]},
  digitus: { m:["词根 digit-(指)+ 词尾 -us","root digit- (finger) + -us"], f:[
    ["digit","手指→数字(掰指计数)","finger → number (finger-counting)","数字;手指","finger, number"],
    ["digital","digit + -al(…的)","digit + -al","数字的","of digits"],
    ["digitize","digit + -ize(化)","digit + -ize","数字化","to make digital"]]},
  bracchium: { m:["词根 bracchi-(臂)+ -um","root bracchi- (arm) + -um"], f:[
    ["bracelet","brac(臂)+ -elet(小物)","brac (arm) + -elet (little)","手镯=臂上小物","the little arm-thing"],
    ["embrace","em(收入)+ brace(双臂)","em (in) + brace (arms)","拥抱=揽入双臂","to take into the arms"],
    ["brace","支架=像手臂一样撑住","to hold like an arm","支撑","an arm-hold"]]},
  genu: { m:["词根 genu-(膝),裸词根词","root genu- (knee), bare root"], f:[
    ["genuflect","genu(膝)+ flect(弯)","genu (knee) + flect (bend)","屈膝礼","to bend the knee"],
    ["knee(亲戚)","印欧同根的日耳曼支","Germanic branch of the same root","膝盖","knee"]]},
  capillus: { m:["词根 capill-(发)+ 词尾 -us","root capill- (hair) + -us"], f:[
    ["capillary","capill(发)+ -ary(…般的)","capill (hair) + -ary","毛细血管=发丝管","the hair-thin vessel"]]},
  dens: { m:["词根 dent-(齿),dens 为主格","root dent- (tooth); dens is bare form"], f:[
    ["dental","dent(齿)+ -al(…的)","dent (tooth) + -al","牙齿的","of teeth"],
    ["dentist","dent + -ist(专业者)","dent + -ist","牙医","the tooth-doctor"],
    ["dandelion","dent de lion(法:狮子牙)","French dent de lion","蒲公英=狮齿草","lion's-tooth flower"],
    ["trident","tri(三)+ dent(齿)","tri (three) + dent","三叉戟=波塞冬的三齿","the three-tooth spear"],
    ["indent","in(咬入)+ dent(齿)","in + dent","缩进=咬进一口","to bite in"]]},
  lingua: { m:["词根 lingu-(舌/语)+ -a","root lingu- (tongue) + -a"], f:[
    ["language","lingu → 法语 langage","lingu → French","语言","tongue-craft"],
    ["bilingual","bi(二)+ lingu(语)+ -al","bi (two) + lingu + -al","双语的","two-tongued"],
    ["linguist","lingu + -ist(专家)","lingu + -ist","语言学家","a tongue-master"],
    ["linguine","lingu + -ine(小,复数)","lingu + -ine (little)","意面\"小舌头\"","little tongues pasta"]]},
  sanguis: { m:["词根 sanguin-(血),sanguis 为主格","root sanguin- (blood); bare form"], f:[
    ["sanguine","sanguin + -e(…的)","sanguin + -e","乐观的=多血质","full-blooded cheerful"],
    ["sangria","西语:血色饮料","Spanish: blood-colored drink","桑格利亚酒","the blood-red drink"],
    ["consanguinity","con(共同)+ sanguin(血)+ -ity","con + sanguin + -ity","血缘=同血","shared blood"]]},
  spiritus: { m:["spir-(呼吸)+ -itus(名词尾)","spir- (breathe) + -itus"], f:[
    ["spirit","spir(呼吸)→ 生命之气","spir (breathe) → life-breath","精神","the breath of life"],
    ["inspire","in(吸入)+ spire(气)","in + spire (breathe)","启发=吸入灵气","to breathe in"],
    ["expire","ex(呼出)+ spire(气)","ex (out) + spire","到期;断气","to breathe out (the last)"],
    ["respiration","re(反复)+ spir(呼吸)+ -ation","re (again) + spir + -ation","呼吸作用","breathing again and again"],
    ["conspire","con(一起)+ spire(呼吸)","con (together) + spire","密谋=同呼吸咬耳朵","to breathe together"]]},
  somnus: { m:["词根 somn-(眠)+ 词尾 -us","root somn- (sleep) + -us"], f:[
    ["insomnia","in(无)+ somn(眠)+ -ia","in (no) + somn + -ia","失眠","no-sleep"],
    ["somnambulist","somn(眠)+ ambul(走)+ -ist","somn (sleep) + ambul (walk) + -ist","梦游者=睡着走的人","the sleep-walker"],
    ["somnolent","somn + -olent(充满…的)","somn + -olent","昏昏欲睡的","sleep-full"]]},
  vita: { m:["词根 vit-(生命)+ 阴性词尾 -a","root vit- (life) + -a"], f:[
    ["vital","vit(生)+ -al(…的)","vit (life) + -al","生死攸关的","of life"],
    ["vitamin","vita(生命)+ amine(胺)","vita (life) + amine","维他命=生命之胺","the life-amine"],
    ["vitality","vital + -ity(名词)","vital + -ity","活力","life-force"],
    ["revitalize","re(再)+ vital(生)+ -ize","re (again) + vital + -ize","复兴=再赋生命","to give life again"]]},
  mors: { m:["词根 mort-(死),mors 为主格","root mort- (death); bare form"], f:[
    ["mortal","mort(死)+ -al(…的)","mort (death) + -al","凡人=会死的","death-bound"],
    ["immortal","im(不)+ mortal(会死的)","im (not) + mortal","不朽的","deathless"],
    ["mortgage","mort(死)+ gage(质押)","mort (dead) + gage (pledge)","房贷=\"死质押\"","the dead pledge"],
    ["mortician","mort + -ician(从业者)","mort + -ician","殡仪员","the death-worker"]]},

  /* ---- L7 The Beast's Den ---- */
  taurus: { m:["词根 taur-(公牛)+ 词尾 -us","root taur- (bull) + -us"], f:[
    ["Taurus","星座:金牛","the zodiac Bull","金牛座","the Bull"],
    ["toreador","toro(牛)+ -eador(斗者)","toro (bull) + -eador (fighter)","斗牛士","the bull-fighter"],
    ["Minotaur","Minos(米诺斯)+ taur(牛)","Minos + taur (bull)","米诺陶=米诺斯之牛","the bull of Minos"]]},
  leo: { m:["词根 leon-(狮),leo 为主格","root leon- (lion); bare form"], f:[
    ["lion","leon 经法语","leon via French","狮子","lion"],
    ["leonine","leon + -ine(…般的)","leon + -ine","狮子般的","lion-like"],
    ["leopard","leo(狮)+ pard(豹)","leo (lion) + pard (panther)","豹=狮豹合体(古人误会)","the lion-panther"],
    ["chameleon","chamai(地上)+ leon(狮)","chamai (ground) + leon","变色龙=地上小狮","the ground lion"]]},
  lupus: { m:["词根 lup-(狼)+ 词尾 -us","root lup- (wolf) + -us"], f:[
    ["lupine","lup(狼)+ -ine(…般的)","lup (wolf) + -ine","狼一般的","wolf-like"],
    ["lobo (西) / loup (法)","lupus 的后代","lupus's children","狼","wolf"],
    ["loup-garou (法)","loup(狼)+ garou(人狼)","loup (wolf) + garou","狼人","the werewolf"]]},
  serpens: { m:["serp-(爬行)+ -ens(正在…的)","serp- (creep) + -ens (one who is)"], f:[
    ["serpent","serp(爬)+ -ent:爬行者","serp (creep) + -ent","大蛇=爬行者","the creeper"],
    ["serpentine","serpent + -ine(…般的)","serpent + -ine","蜿蜒的","snake-winding"]]},
  aquila: { m:["词根 aquil-(鹰)+ -a","root aquil- (eagle) + -a"], f:[
    ["aquiline","aquil(鹰)+ -ine(…般的)","aquil (eagle) + -ine","鹰钩(鼻)的","eagle-like"],
    ["águila (西) / aigle (法)","aquila 的后代","aquila's children","鹰","eagle"]]},
  equus: { m:["词根 equ-(马)+ 词尾 -us","root equ- (horse) + -us"], f:[
    ["equestrian","equestr(骑马)+ -ian(人)","equestr (on horseback) + -ian","马术的;骑手","the horse-rider"],
    ["equine","equ(马)+ -ine(…的)","equ + -ine","马的","of horses"]]},
  canis: { m:["词根 can-(犬)+ 词尾 -is","root can- (dog) + -is"], f:[
    ["canine","can(犬)+ -ine(…的)","can (dog) + -ine","犬的;犬齿","of dogs; the dog-tooth"],
    ["kennel","can → 法语 chenil","can → French chenil","狗舍","the dog-house"],
    ["Canary Islands","can(犬)+ -aria(之地)","can + -aria (land of)","加那利群岛=狗岛","the Dog Islands"]]},
  felis: { m:["词根 fel-(猫)+ 词尾 -is","root fel- (cat) + -is"], f:[
    ["feline","fel(猫)+ -ine(…的)","fel (cat) + -ine","猫科的","cat-like"],
    ["Felidae","fel + -idae(科)","fel + -idae (family)","猫科","the cat family"]]},
  avis: { m:["词根 av-(鸟)+ 词尾 -is","root av- (bird) + -is"], f:[
    ["aviation","avi(鸟)+ -ation(行为)","avi (bird) + -ation","航空=学鸟飞","bird-flying"],
    ["aviary","avi + -ary(场所)","avi + -ary (place)","大鸟舍","a bird-house"],
    ["aviator","avi + -ator(人)","avi + -ator","飞行员","the bird-man"]]},
  ursus: { m:["词根 urs-(熊)+ 词尾 -us","root urs- (bear) + -us"], f:[
    ["Ursa Major","ursa(母熊)+ major(大)","ursa (she-bear) + major (greater)","大熊座","the Great Bear"],
    ["ursine","urs + -ine(…般的)","urs + -ine","熊一般的","bear-like"]]},
  aper: { m:["词根 apr-(野猪),aper 为主格","root apr- (boar); bare form"], f:[
    ["Aprilis?","无常见后代——罕见词根","few children — a rare root","(词根罕见)","(a rare root)"]]},
  cervus: { m:["词根 cerv-(鹿/角)+ 词尾 -us","root cerv- (deer/horn) + -us"], f:[
    ["cervine","cerv(鹿)+ -ine(…的)","cerv (deer) + -ine","鹿的","deer-like"],
    ["ciervo (西) / cerf (法)","cervus 的后代","cervus's children","鹿","deer"]]},
  vacca: { m:["词根 vacc-(母牛)+ -a","root vacc- (cow) + -a"], f:[
    ["vaccine","vacc(牛)+ -ine(来自…的)","vacc (cow) + -ine (from)","疫苗=来自牛(牛痘)","from the cow (cowpox)"],
    ["vaccinate","vaccine + -ate(动词)","vaccine + -ate","接种疫苗","to give the cow-gift"],
    ["vaca (西) / vache (法)","vacca 的后代","vacca's children","母牛","cow"]]},
  ovis: { m:["词根 ov-(羊)+ 词尾 -is","root ov- (sheep) + -is"], f:[
    ["ovine","ov(羊)+ -ine(…的)","ov (sheep) + -ine","绵羊的","sheep-like"],
    ["oveja (西)","ovis + 指小词尾","ovis + diminutive","绵羊","sheep"]]},
  capra: { m:["词根 capr-(山羊)+ -a","root capr- (goat) + -a"], f:[
    ["Capricorn","capri(山羊)+ corn(角)","capri (goat) + corn (horn)","摩羯座=山羊角","the goat-horn"],
    ["caper","像小山羊蹦跳","to leap like a kid","雀跃","goat-leaping"],
    ["capricious","capr(山羊)+ -icious","capr + -icious","任性的=像山羊乱跳","goat-jumpy, whimsical"]]},
  porcus: { m:["词根 porc-(猪)+ 词尾 -us","root porc- (pig) + -us"], f:[
    ["pork","porc 经法语=猪肉","porc via French","猪肉","pig-meat"],
    ["porcupine","porc(猪)+ espine(刺)","porc (pig) + espine (spine)","豪猪=带刺的猪","the thorn-pig"],
    ["porpoise","porc(猪)+ pois(鱼)","porc (pig) + pois (fish)","鼠海豚=猪鱼","the pig-fish"]]},
  mus: { m:["词根 mur-/mus-(鼠)","root mur-/mus- (mouse)"], f:[
    ["muscle","mus(鼠)+ -cle(小)","mus (mouse) + -cle (little)","肌肉=皮下小老鼠","the little mouse under the skin"],
    ["mussel","mus + -sel:鼠形贝","mus + -sel","贻贝=鼠形贝","the mouse-shaped shell"],
    ["murine","mur(鼠)+ -ine(…的)","mur + -ine","鼠类的","mouse-like"]]},
  rana: { m:["词根 ran-(蛙,拟声)+ -a","root ran- (frog, echoic) + -a"], f:[
    ["Ranidae","ran + -idae(科)","ran + -idae (family)","蛙科","the frog family"],
    ["ranita (西)","rana + -ita(小)","rana + -ita (little)","小青蛙","little frog"]]},
  apis: { m:["词根 ap-(蜂)+ 词尾 -is","root ap- (bee) + -is"], f:[
    ["apiary","api(蜂)+ -ary(场所)","api (bee) + -ary (place)","养蜂场","the bee-place"],
    ["apiculture","api + cultura(培育)","api + cultura","养蜂学","bee-keeping"]]},
  monstrum: { m:["mon-(警示)+ -strum(名词尾:之物)","mon- (warn) + -strum (thing)"], f:[
    ["monster","monstrum:神的警示物","the divine warning-thing","怪物","the warning"],
    ["demonstrate","de(完全)+ monstr(指示)+ -ate","de + monstr (show) + -ate","演示=明白指出","to show fully"],
    ["monitor","mon(警示)+ -itor(者)","mon (warn) + -itor","监视器;班长","the warner"],
    ["admonish","ad(向)+ mon(警示)+ -ish","ad + mon + -ish","告诫","to warn"]]},

  /* ---- L8 The Battle ---- */
  pugna: { m:["词根 pugn-(拳/斗)+ -a","root pugn- (fist/fight) + -a"], f:[
    ["pugnacious","pugn(斗)+ -acious(好…的)","pugn (fight) + -acious (fond of)","好斗的","fight-loving"],
    ["pugilist","pugil(拳手)+ -ist","pugil (boxer) + -ist","拳击手","the fist-fighter"],
    ["repugnant","re(相抗)+ pugn(斗)+ -ant","re (against) + pugn + -ant","令人反感的=顶着打的","fighting back at you"]]},
  bellum: { m:["词根 bell-(战)+ 中性词尾 -um","root bell- (war) + -um"], f:[
    ["rebel","re(再)+ bell(战)","re (again) + bell (war)","反叛=再次开战","to war again"],
    ["rebellion","rebel + -lion(名词)","rebel + -lion","叛乱","the re-warring"],
    ["belligerent","belli(战)+ ger(进行)+ -ent","belli (war) + ger (wage) + -ent","交战的","war-waging"],
    ["antebellum","ante(前)+ bellum(战)","ante (before) + bellum","战前的","before the war"]]},
  hasta: { m:["词根 hast-(矛)+ -a","root hast- (spear) + -a"], f:[
    ["hastati","hasta + -ati(队伍)","hasta + -ati (troops)","罗马矛兵","Rome's spearmen"],
    ["subhastare","sub(下)+ hasta(矛):矛下拍卖","sub + hasta: sale under the spear","西语 subasta=拍卖!","Spanish subasta = auction!"]]},
  scutum: { m:["词根 scut-(盾)+ -um","root scut- (shield) + -um"], f:[
    ["escutcheon","scut(盾)+ -cheon","scut (shield) + -cheon","盾徽","the shield of arms"],
    ["scutellum","scut + -ellum(小)","scut + -ellum (little)","小盾片(昆虫背板)","the beetle's little shield"]]},
  galea: { m:["词根 gale-(盔)+ -a","root gale- (helmet) + -a"], f:[
    ["galea (解剖)","头顶帽状腱膜沿用原词","kept whole in anatomy","帽状腱膜","the scalp's helmet"],
    ["galeate","gale + -ate(戴…的)","gale + -ate (wearing)","戴盔的","helmeted"]]},
  arma: { m:["词根 arm-(装备)+ 中性复数 -a","root arm- (fit out) + neuter plural -a"], f:[
    ["army","arm + -y:武装之众","arm + -y","军队","the armed host"],
    ["armor","arm + -or:护具","arm + -or","盔甲","the fitting-out"],
    ["alarm","all'arme!(意:拿武器!)","Italian all'arme! (to arms!)","警报=拿起武器!","the to-arms cry"],
    ["armistice","armi(武器)+ stice(停)","armi (arms) + stice (stand still)","停战=武器停下","arms standing still"],
    ["disarm","dis(解除)+ arm(武装)","dis (un) + arm","解除武装","to un-arm"]]},
  sagitta: { m:["词根 sagitt-(箭)+ -a","root sagitt- (arrow) + -a"], f:[
    ["Sagittarius","sagitt(箭)+ -arius(者)","sagitt (arrow) + -arius (one who)","射手座=持箭者","the arrow-man"],
    ["sagittal","sagitt + -al(…方向的)","sagitt + -al","矢状的=箭的方向","the arrow's way"]]},
  arcus: { m:["词根 arc-(弓/弧)+ 词尾 -us","root arc- (bow/curve) + -us"], f:[
    ["arc","arc(弧)","arc (curve)","弧线","a curve"],
    ["arch","arc → 建筑拱","arc → the built curve","拱门","the built bow"],
    ["archer","arch(弓)+ -er(人)","arch (bow) + -er","弓箭手","the bow-man"],
    ["arcade","arc + -ade(成排)","arc + -ade (row)","拱廊;街机厅","a row of arches"]]},
  hostis: { m:["词根 host-(敌/客)+ 词尾 -is","root host- (enemy/stranger) + -is"], f:[
    ["hostile","host(敌)+ -ile(…的)","host (enemy) + -ile","敌对的","enemy-like"],
    ["hostility","hostile + -ity(名词)","hostile + -ity","敌意","enemy-ness"],
    ["host(亲戚)","陌生人→客人→主人","stranger → guest → host","主人",": the stranger turned guest"]]},
  miles: { m:["词根 milit-(兵),miles 为主格","root milit- (soldier); bare form"], f:[
    ["military","milit(兵)+ -ary(…的)","milit + -ary","军事的","of soldiers"],
    ["militia","milit + -ia(集体)","milit + -ia (body)","民兵","the citizen-soldiery"],
    ["militant","milit + -ant(…的人)","milit + -ant","激进斗士","the fighting one"]]},
  fortis: { m:["词根 fort-(强)+ 词尾 -is","root fort- (strong) + -is"], f:[
    ["fort","fort(强)→ 坚固据点","fort (strong) → stronghold","堡垒","the strong place"],
    ["effort","ef(使出)+ fort(力)","ef (out) + fort (strength)","努力=使出力气","strength put out"],
    ["comfort","com(加强)+ fort(力)","com (fully) + fort","安慰=给人力量","to strengthen"],
    ["fortify","fort + -ify(使…)","fort + -ify (make)","加固","to make strong"],
    ["forte","意语:强音/强项","Italian: loud/strength","强项","one's strength"]]},
  magnus: { m:["词根 magn-(大)+ 词尾 -us","root magn- (great) + -us"], f:[
    ["magnify","magn(大)+ -ify(使…)","magn (great) + -ify","放大","to make great"],
    ["magnificent","magn + fic(做)+ -ent","magn + fic (make) + -ent","宏伟的=做得很大","done greatly"],
    ["magnitude","magn + -itude(程度)","magn + -itude (degree)","量级","greatness"],
    ["magnate","magn + -ate(人)","magn + -ate","巨头=大人物","the great one"]]},
  parvus: { m:["词根 parv-(小)+ 词尾 -us","root parv- (small) + -us"], f:[
    ["parvovirus","parvo(小)+ virus","parvo (small) + virus","细小病毒","the tiny virus"],
    ["parvenu (法)","parv(小)+ venu(来)","parv + venu (come)","暴发户=从小处爬上来的","one come up from small"]]},
  celer: { m:["词根 celer-(快),裸词根词","root celer- (swift), bare root"], f:[
    ["accelerate","ac(向)+ celer(快)+ -ate","ac (to) + celer + -ate","加速","to speed up"],
    ["celerity","celer + -ity(名词)","celer + -ity","神速","swiftness"],
    ["decelerate","de(减)+ celer(快)+ -ate","de (down) + celer + -ate","减速","to slow down"]]},
  tardus: { m:["词根 tard-(慢)+ 词尾 -us","root tard- (slow) + -us"], f:[
    ["tardy","tard(慢)+ -y(…的)","tard (slow) + -y","迟到的","slow-coming"],
    ["retard","re(往回)+ tard(慢)","re (back) + tard","延缓","to slow back"],
    ["ritardando (意)","音乐术语:渐慢","music: slowing","渐慢记号","gradually slower"]]},
  victoria: { m:["vict-(胜,vincere)+ -oria(名词尾)","vict- (conquer) + -oria"], f:[
    ["victory","victoria 经法语","via French","胜利","the conquering"],
    ["victorious","victori + -ous(…的)","victori + -ous","胜利的","conquering"],
    ["convince","con(彻底)+ vince(胜)","con (fully) + vince (conquer)","说服=彻底战胜疑虑","to conquer doubt"],
    ["invincible","in(不可)+ vinc(胜)+ -ible","in (not) + vinc + -ible","无敌的=不可战胜","unconquerable"]]},
  gloria: { m:["词根 glori-(荣耀)+ -a","root glori- (glory) + -a"], f:[
    ["glory","gloria 经法语","via French","荣耀","glory"],
    ["glorious","glori + -ous(充满…的)","glori + -ous","光荣的","glory-full"],
    ["glorify","glori + -fy(使…)","glori + -fy (make)","颂扬","to make glorious"]]},
  virtus: { m:["vir(男子)+ -tus(抽象名词尾)","vir (man) + -tus (abstract noun)"], f:[
    ["virtue","virtus 经法语","via French","美德","excellence"],
    ["virtuoso","virtu + -oso(富于…的)","virtu + -oso (full of)","大师=技艺超群者","master of his craft"],
    ["virtual","virtu + -al:有其效力的","virtu + -al: in effect","虚拟的=效力上等同","in power though not in form"]]},
  ferrum: { m:["词根 ferr-(铁)+ -um","root ferr- (iron) + -um"], f:[
    ["Fe","化学符号=ferrum","the symbol IS ferrum","铁元素符号","iron's symbol"],
    ["ferrous","ferr(铁)+ -ous(含…的)","ferr + -ous","含铁的","iron-bearing"],
    ["ferrocarril (西)","ferro(铁)+ carril(轨道)","ferro (iron) + carril (track)","铁路=铁之路","the iron road"],
    ["farrier","ferr → 钉马掌的铁匠","ferr → the horseshoe smith","蹄铁匠","the iron-man for horses"]]},
  clamor: { m:["clam-(呼喊)+ -or(名词尾)","clam- (cry out) + -or"], f:[
    ["claim","clam(喊)→ 喊出主张","clam (cry) → cry one's right","主张","to cry one's due"],
    ["exclaim","ex(向外)+ claim(喊)","ex (out) + claim","惊呼","to cry out"],
    ["proclaim","pro(公开)+ claim(喊)","pro (forth) + claim","宣告","to cry forth"],
    ["reclaim","re(要回)+ claim(喊)","re (back) + claim","收回;开垦","to cry back"]]},

  /* ---- L9 Numbers & Colors ---- */
  unus: { m:["词根 un-(一)+ 词尾 -us","root un- (one) + -us"], f:[
    ["unit","un(一)+ -it","un (one) + -it","单位","the one-thing"],
    ["unicorn","uni(一)+ corn(角)","uni (one) + corn (horn)","独角兽","the one-horn"],
    ["uniform","uni(一)+ form(形)","uni + form (shape)","制服=同一个样子","one shape for all"],
    ["union","un(一)+ -ion:合而为一","un + -ion","联盟","made into one"],
    ["universe","uni(一)+ verse(转)","uni + verse (turn)","宇宙=转成一体的万物","all turned into one"]]},
  duo: { m:["词根 du-(二)+ 词尾 -o","root du- (two) + -o"], f:[
    ["duet","du(二)+ -et","du (two) + -et","二重唱","a two-song"],
    ["dual","du + -al(…的)","du + -al","双重的","two-fold"],
    ["duel","du + -el:二人决斗","du + -el","决斗","a fight of two"],
    ["duplicate","du(二)+ plic(折)+ -ate","du + plic (fold) + -ate","复制=折成两份","folded in two"]]},
  tres: { m:["词根 tri-(三),tres 为主格","root tri- (three); tres is bare form"], f:[
    ["trio","tri(三)+ -o","tri + -o","三人组","a three-group"],
    ["triangle","tri(三)+ angle(角)","tri + angle","三角形","three-corner"],
    ["tripod","tri(三)+ pod(脚)","tri + pod (foot)","三脚架","three-foot"],
    ["tricycle","tri(三)+ cycle(轮)","tri + cycle (wheel)","三轮车","three-wheel"]]},
  quattuor: { m:["词根 quadr-/quart-(四)","root quadr-/quart- (four)"], f:[
    ["quarter","quart(四)+ -er:四分之一","quart (four) + -er","四分之一","one of four"],
    ["quartet","quart + -et","quart + -et","四重奏","a four-group"],
    ["quadruple","quadru(四)+ -ple(倍)","quadru + -ple (fold)","四倍","four-fold"],
    ["squad","ex+quadra:排成四方队","from quadra: formed in a square","小队","the squared band"]]},
  quinque: { m:["词根 quinqu-/quint-(五)","root quinqu-/quint- (five)"], f:[
    ["quintet","quint(五)+ -et","quint + -et","五重奏","a five-group"],
    ["quintuple","quintu + -ple(倍)","quintu + -ple","五倍","five-fold"],
    ["quintessence","quint(第五)+ essence(元素)","quint (fifth) + essence","精髓=第五元素","the fifth element"]]},
  sex: { m:["词根 sex-(六)","root sex- (six)"], f:[
    ["sextet","sext(六)+ -et","sext + -et","六重奏","a six-group"],
    ["sextant","sext + -ant:圆的六分之一","sext + -ant: a sixth of a circle","六分仪","the sixth-of-circle tool"],
    ["semester","sex(六)+ mestris(月)","sex (six) + mestris (month)","学期=六个月!","a six-month!"]]},
  septem: { m:["词根 sept-(七)","root sept- (seven)"], f:[
    ["September","septem + -ber:罗马历七月","septem + -ber: Rome's 7th month","九月(原七月)","the old seventh month"],
    ["septet","sept + -et","sept + -et","七重奏","a seven-group"],
    ["septuagenarian","septuagen(七十)+ -arian","septuagen (seventy) + -arian","七旬老人","a person in their 70s"]]},
  octo: { m:["词根 oct-(八)","root oct- (eight)"], f:[
    ["octopus","octo(八)+ pus(脚)","octo (eight) + pus (foot)","章鱼=八脚","the eight-foot"],
    ["octave","oct + -ave:第八度音","oct + -ave: the eighth note","八度","the eighth"],
    ["October","octo + -ber:罗马历八月","octo + -ber: Rome's 8th month","十月(原八月)","the old eighth month"],
    ["octagon","octa(八)+ gon(角)","octa + gon (corner)","八边形","eight-corner"]]},
  novem: { m:["词根 novem-(九)","root novem- (nine)"], f:[
    ["November","novem + -ber:罗马历九月","novem + -ber: Rome's 9th month","十一月(原九月)","the old ninth month"],
    ["novena","novem + -a:九日祈祷","novem + -a: nine days' prayer","九日敬礼","the nine-day rite"]]},
  decem: { m:["词根 dec-(十)","root dec- (ten)"], f:[
    ["December","decem + -ber:罗马历十月","decem + -ber: Rome's 10th month","十二月(原十月)","the old tenth month"],
    ["decimal","decim(十)+ -al(…的)","decim + -al","十进制的","by tens"],
    ["decimate","decim + -ate:十里抽一惩罚","decim + -ate: punish one in ten","大量毁灭(原:十一抽杀)","to take one in ten"],
    ["decathlon","deca(十)+ athlon(竞技)","deca + athlon (contest)","十项全能","ten-contest"]]},
  centum: { m:["词根 cent-(百)+ -um","root cent- (hundred) + -um"], f:[
    ["percent","per(每)+ cent(百)","per (each) + cent","百分比=每一百","for each hundred"],
    ["century","cent + -ury:一百年/百人队","cent + -ury","世纪;百人队","a hundred years/men"],
    ["centurion","centuri + -on(长官)","centuri + -on (officer)","百夫长","leader of a hundred"],
    ["centimeter","centi(百分之一)+ meter","centi (hundredth) + meter","厘米=1/100米","a hundredth-meter"]]},
  mille: { m:["词根 mill-(千)+ -e","root mill- (thousand) + -e"], f:[
    ["mile","mille passus(千步)缩短","from mille passus (1000 paces)","英里=罗马千步","the thousand paces"],
    ["millennium","mille(千)+ annus(年)+ -ium","mille + annus (year) + -ium","千年","a thousand years"],
    ["million","mille + -ion(加大)","mille + -ion (big)","百万=\"大千\"","the great thousand"],
    ["millimeter","milli(千分之一)+ meter","milli (thousandth) + meter","毫米","a thousandth-meter"]]},
  albus: { m:["词根 alb-(白)+ 词尾 -us","root alb- (white) + -us"], f:[
    ["album","alb(白)+ -um:白板→相册","alb (white) + -um: white tablet","相册=白板","the white tablet"],
    ["albino","alb + -ino(具…特征者)","alb + -ino","白化个体","the white one"],
    ["albumen","alb + -umen:蛋白","alb + -umen","蛋白=蛋的白","the egg's white"],
    ["Albion","alb:不列颠的白崖古名","alb: Britain's white cliffs","阿尔比恩=白崖之岛","the white-cliff isle"]]},
  niger: { m:["词根 nigr-(黑)+ 词尾 -er","root nigr- (black) + -er"], f:[
    ["denigrate","de(加深)+ nigr(黑)+ -ate","de + nigr (black) + -ate","诋毁=抹黑","to blacken"],
    ["Nigeria","nigr:大河\"黑水\"之名","nigr: the black river","尼日利亚","land of the black river"],
    ["negro (西) / noir (法)","niger 的后代","niger's children","黑色","black"]]},
  ruber: { m:["词根 rubr-(红)+ 词尾 -er","root rubr- (red) + -er"], f:[
    ["ruby","rub(红)+ -y:红宝石","rub (red) + -y","红宝石","the red stone"],
    ["rubric","rubr + -ic:红字标题","rubr + -ic: red-ink heading","标题;评分标准","the red heading"],
    ["rubella","rub + -ella(小):风疹","rub + -ella: little-red","风疹=小红疹","the little-red rash"]]},
  viridis: { m:["词根 vir(id)-(绿/生机)+ -is","root virid- (green/fresh) + -is"], f:[
    ["verdant","verd(绿)+ -ant(…的)","verd (green) + -ant","苍翠的","green-growing"],
    ["verdigris","verd(绿)+ gris(灰,法)","verd + gris (grey)","铜绿","the green of bronze"],
    ["verde (西/意) / vert (法)","viridis 的后代","viridis's children","绿色","green"]]},
  caeruleus: { m:["cael(天)+ -uleus(色彩词尾)","cael (sky) + color ending -uleus"], f:[
    ["cerulean","caerule + -an","caerule + -an","天青色","sky-blue"],
    ["cielo (西/意)","同根 caelum(天)","kin caelum (sky)","天空","sky"]]},
  flavus: { m:["词根 flav-(黄)+ 词尾 -us","root flav- (yellow) + -us"], f:[
    ["flavone","flav(黄)+ -one(化学词尾)","flav + -one (chem.)","黄酮","the yellow compound"],
    ["flavescent","flav + -escent(渐变…的)","flav + -escent (becoming)","渐黄的","turning yellow"]]},
  purpureus: { m:["purpura(紫螺紫)+ -eus(…色的)","purpura (murex purple) + -eus"], f:[
    ["purple","purpura 磨损而来","purpura worn down","紫色","purple"],
    ["purpura (医)","皮下出血性紫癜沿用原词","kept whole in medicine","紫癜","the purple rash"]]},
  color: { m:["词根 col-(遮盖→着色)+ -or(名词尾)","root col- (cover → tint) + -or"], f:[
    ["colorful","color + -ful(充满…的)","color + -ful","多彩的","color-full"],
    ["discolor","dis(失去)+ color(色)","dis (away) + color","褪色","to lose color"],
    ["Technicolor","techni(技术)+ color","techni + color","彩色电影技术","the color technique"]]},

  /* ---- L10 Freedom (boss) ---- */
  libertas: { m:["liber(自由的)+ -tas(名词尾:状态)","liber (free) + -tas (state)"], f:[
    ["liberty","libertas 经法语","via French","自由","freedom"],
    ["liberate","liber + -ate(使…)","liber + -ate","解放=使自由","to set free"],
    ["liberal","liber + -al(…的)","liber + -al","开明的;慷慨的","free-minded"],
    ["libre (西/法)","liber 的后代","liber's children","自由的","free"]]},
  felix: { m:["词根 felic-(丰饶/幸运),felix 为主格","root felic- (fruitful/lucky); bare form"], f:[
    ["felicity","felic + -ity(名词)","felic + -ity","幸福","happiness"],
    ["felicitations","felicit + -ations(复数)","felicit + -ations","恭贺之词","happy wishes"],
    ["feliz (西)","felix 的西语后代","felix in Spanish","幸福的(¡Feliz Navidad!)","happy (¡Feliz Navidad!)"]]},
  laetus: { m:["词根 laet-(欢)+ 词尾 -us","root laet- (glad) + -us"], f:[
    ["laetitia → Letitia","laet + -itia(名词):人名","laet + -itia → a name","喜悦→人名莱蒂西娅","joy → the name Letitia"]]},
  victor: { m:["vict-(胜)+ -or(做…的人)","vict- (conquer) + -or (one who)"], f:[
    ["victorious","victori + -ous","victori + -ous","获胜的","conquering"],
    ["Victoria","victor 的阴性","feminine of victor","维多利亚=胜利女神","lady Victory"],
    ["evict","e(出)+ vict(胜)","e (out) + vict","逐出=胜诉赶走","to conquer out"]]},
  patria: { m:["patr(父)+ -ia(之地)","patr (father) + -ia (land)"], f:[
    ["patriot","patri(父邦)+ -ot(人)","patri + -ot","爱国者","fatherland-lover"],
    ["expatriate","ex(离开)+ patri(祖国)+ -ate","ex (out of) + patri + -ate","侨民=离开祖国者","one out of the fatherland"],
    ["repatriate","re(回)+ patri(祖国)+ -ate","re (back) + patri + -ate","遣返=送回祖国","to send back home"]]},
  memoria: { m:["memor(记得的)+ -ia(名词尾)","memor (mindful) + -ia"], f:[
    ["memory","memoria 经法语","via French","记忆","memory"],
    ["memorial","memori + -al(之物)","memori + -al","纪念碑","the remembering-thing"],
    ["memorandum","memor + -andum(应…之事)","memor + -andum (to be done)","备忘录=应记之事","the thing to be remembered"],
    ["commemorate","com(共同)+ memor(记)+ -ate","com + memor + -ate","纪念=共同记住","to remember together"]]},
  fama: { m:["词根 fa-(说)+ -ma(名词尾)","root fa- (speak) + -ma"], f:[
    ["famous","fam + -ous(充满…的)","fam + -ous","著名的=被人常说的","much-spoken-of"],
    ["defame","de(贬)+ fame(名)","de (down) + fame","诽谤=毁名","to speak down"],
    ["infamous","in(坏)+ famous(有名)","in (ill) + famous","臭名昭著的","ill-famed"],
    ["infant","in(不)+ fant(会说话)","in (not) + fant (speaking)","婴儿=还不会说话的!","the not-yet-speaker!"]]},
  historia: { m:["希腊 histor(知情人)+ -ia","Greek histor (one who knows) + -ia"], f:[
    ["history","histor + -y","histor + -y","历史","the knowing"],
    ["story","historia 掉了头=story!","historia lost its head = story!","故事","the tale"],
    ["historian","histori + -an(人)","histori + -an","历史学家","the knower"],
    ["prehistoric","pre(之前)+ historic","pre (before) + historic","史前的","before the knowing"]]},
  finis: { m:["词根 fin-(界/终)+ 词尾 -is","root fin- (boundary/end) + -is"], f:[
    ["final","fin(终)+ -al(…的)","fin (end) + -al","最终的","of the end"],
    ["finish","fin + -ish(动词尾)","fin + -ish","完成","to end"],
    ["infinite","in(无)+ fin(界)+ -ite","in (no) + fin (bound) + -ite","无限的=没有边界","boundless"],
    ["define","de(划定)+ fine(界)","de + fine (bound)","定义=划定边界","to set the bounds"],
    ["refine","re(再)+ fine(精细)","re (again) + fine","提炼=一再收边","to finish again"]]},
  initium: { m:["in(进入)+ it(走)+ -ium(名词尾)","in (in) + it (go) + -ium"], f:[
    ["initial","initi + -al(…的)","initi + -al","起初的;首字母","of the beginning"],
    ["initiate","initi + -ate(动词)","initi + -ate","开创;引入门","to lead in"],
    ["initiative","initiat + -ive(倾向)","initiat + -ive","主动性=先走一步","the first-step spirit"]]},
  novus: { m:["词根 nov-(新)+ 词尾 -us","root nov- (new) + -us"], f:[
    ["novel","nov + -el:新颖的;小说","nov + -el","新颖的;小说=新故事","new; the new tale"],
    ["innovate","in(引入)+ nov(新)+ -ate","in + nov + -ate","创新=引入新的","to bring in the new"],
    ["renovate","re(再)+ nov(新)+ -ate","re (again) + nov + -ate","翻新","to make new again"],
    ["nova","nov 的阴性:新星","feminine nov: the new star","新星","the new star"]]},
  vetus: { m:["词根 veter-(老),vetus 为主格","root veter- (old); bare form"], f:[
    ["veteran","veter(老)+ -an(人)","veter (old) + -an","老兵;老手","the man of years"],
    ["inveterate","in(深入)+ veter(老)+ -ate","in + veter + -ate","积习已深的","grown old within"]]},
  semper: { m:["sem(一)+ per(贯穿)=\"一直\"","sem (one) + per (through) = ever"], f:[
    ["Semper Fidelis","semper(永远)+ fidelis(忠诚)","semper + fidelis","永远忠诚(海军陆战队)","Always Faithful (USMC)"],
    ["sempervirens","semper + virens(常绿)","semper + virens (green)","红杉学名=永远常绿","the evergreen's name"],
    ["sempre (意)","音乐术语:始终","music: always","(演奏)始终如一","always (in music)"]]},
  numquam: { m:["ne(不)+ umquam(任何时候)","ne (not) + umquam (ever)"], f:[
    ["numquam retro","numquam + retro(向后)","numquam + retro (backward)","格言:决不后退","motto: never backward"]]},
  hodie: { m:["hoc(这)+ die(日)缩合","hoc (this) + die (day) fused"], f:[
    ["hoy (西) / oggi (意)","hodie 的后代","hodie's children","今天","today"],
    ["aujourd'hui (法)","au jour de + hui(=hodie)","au jour de + hui (=hodie)","今天(hui 就是 hodie!)","today (hui IS hodie!)"]]},
  cras: { m:["词根 cras-(明日),裸词根词","root cras- (tomorrow), bare root"], f:[
    ["procrastinate","pro(向前推)+ crastin(明日的)+ -ate","pro (forward) + crastin (of tomorrow) + -ate","拖延=推到明天","to push to tomorrow"],
    ["procrastination","上词 + -ion(名词)","+ -ion","拖延症","the tomorrow-pushing"]]},
  heri: { m:["词根 hes-/her-(昨日)","root hes-/her- (yesterday)"], f:[
    ["hier (法) / ieri (意) / ayer (西)","heri 的后代","heri's children","昨天","yesterday"],
    ["hesternal","hestern + -al(…的)","hestern + -al","昨日的(罕用雅词)","of yesterday (rare)"]]},
  tempus: { m:["词根 tempor-(时),tempus 为主格","root tempor- (time); bare form"], f:[
    ["temporary","tempor(时)+ -ary(…的)","tempor + -ary","暂时的","for a time"],
    ["contemporary","con(同)+ tempor(时)+ -ary","con (same) + tempor + -ary","同时代的","of the same time"],
    ["tempo","意语:音乐速度","Italian: musical time","节奏速度","the music's time"],
    ["tense","tempus → 法语 tens:动词时态","tempus → French tens","(动词)时态","the verb's time"]]},
  annus: { m:["词根 ann-/enn-(年)+ -us","root ann-/enn- (year) + -us"], f:[
    ["annual","annu(年)+ -al(…的)","annu (year) + -al","每年的","yearly"],
    ["anniversary","anni(年)+ vers(转)+ -ary","anni + vers (turn) + -ary","周年=年之回转","the year's turning"],
    ["biennial","bi(二)+ enn(年)+ -ial","bi (two) + enn + -ial","两年一次的","every two years"],
    ["annals","ann + -als:编年史","ann + -als","编年史","the year-books"]]},
  dies: { m:["词根 di-(日/天空之光)+ -es","root di- (day/daylight) + -es"], f:[
    ["diary","di(日)+ -ary(簿册)","di (day) + -ary (book)","日记=逐日之书","the day-book"],
    ["per diem","per(每)+ diem(日)","per (each) + diem","按日津贴","by the day"],
    ["carpe diem","carpe(摘取)+ diem(日)","carpe (seize) + diem","及时行乐=摘下今天","seize the day"],
    ["meridian","meri(中)+ di(日)+ -an","meri (mid) + di (day) + -an","子午线=正午线","the midday line"]]},
};
