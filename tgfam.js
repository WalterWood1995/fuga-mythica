/* =====================================================
   FUGA MYTHICA — TGFAM: same-root family words for the roots that the map
   adventure needs, so every answer card can show "🔗 same-root family".
   lang | rootId | word=中文=English ; word=中文=English ; …
   Words are only added when the pack does not already have them.
   Loaded after tgroots.js.
   ===================================================== */
const TGF_RAW = `
de|d_sohn|der Schwiegersohn=女婿=son-in-law;der Stiefsohn=继子=stepson;der Menschensohn=人子=the Son of Man
de|d_tochter|die Schwiegertochter=儿媳=daughter-in-law;die Stieftochter=继女=stepdaughter;die Tochtergesellschaft=子公司=subsidiary
de|d_magd|die Magd=女仆=maid;die Jungfrau?=少女、处女=maiden;das Mädel=姑娘=lass;die Maid=少女(古)=maid (archaic)
de|schwester|die Halbschwester=同父异母姐妹=half-sister;die Krankenschwester=护士=nurse;schwesterlich=姐妹般的=sisterly
de|g_famul|familiär=熟悉的、家常的=familiar;der Familienname=姓=surname;die Großfamilie=大家庭=extended family
de|insul|die Halbinsel=半岛=peninsula;isolieren=隔离=to isolate;der Insulaner=岛民=islander
de|d_well|die Wellenlänge=波长=wavelength;wallen=翻滚、沸腾=to surge;die Hitzewelle=热浪=heatwave
de|d_sturm|stürmen=冲锋、刮大风=to storm;der Stürmer=前锋=striker;stürmisch=暴风雨般的=stormy
de|d_hafen|der Flughafen=机场=airport;die Hafenstadt=港口城市=port city;der Seehafen=海港=seaport
de|d_wolk|der Wolkenkratzer=摩天楼=skyscraper;wolkig=多云的=cloudy;der Wolkenbruch=暴雨=cloudburst
de|d_ruder|rudern=划船=to row;das Ruderboot=划艇=rowing boat;der Ruderer=划船者=rower
de|d_segel|segeln=航行=to sail;das Segelboot=帆船=sailing boat;der Segelflieger=滑翔机驾驶员=glider pilot
de|mur|die Stadtmauer=城墙=city wall;mauern=砌墙=to build a wall;der Maurer=泥瓦匠=bricklayer
de|g_turr|der Kirchturm=教堂塔楼=church tower;der Leuchtturm=灯塔=lighthouse;türmen=堆起=to pile up
de|d_halle|die Turnhalle=体育馆=gym;die Markthalle=市场大厅=market hall;die Bahnhofshalle=车站大厅=station concourse
de|d_stuhl|der Rollstuhl=轮椅=wheelchair;der Lehrstuhl=教席=professorial chair;der Liegestuhl=躺椅=deckchair
de|g_lamp|die Lampe=灯=lamp;die Tischlampe=台灯=desk lamp;das Lampenfieber=怯场=stage fright
de|d_säul|die Wirbelsäule=脊柱=spine;die Säulenhalle=柱廊=colonnade;die Litfaßsäule=广告柱=advertising pillar
de|d_quell|quellen=涌出=to well up;der Quellcode=源代码=source code;die Quellenangabe=注明出处=citation
de|d_silber|silbern=银色的=silver;die Silberhochzeit=银婚=silver wedding;das Silbergeld=银币=silver coin
de|g_marmor|marmoriert=大理石纹的=marbled;die Marmorstatue=大理石雕像=marble statue;der Marmorkuchen=大理石蛋糕=marble cake
de|d_mahl|die Mahlzeit=一顿饭=meal;das Abendmahl=晚餐、圣餐=supper, Communion;das Gastmahl=宴会=banquet
de|d_faden|der rote Faden=主线=common thread;fädeln=穿线=to thread;die Fadennudeln=细面条=vermicelli
de|d_schwert|der Schwertfisch=剑鱼=swordfish;die Schwertlilie=鸢尾=iris;das Richtschwert=刽子手的剑=executioner's sword
de|d_schenk|schenken=赠送=to give;einschenken=斟满=to pour;die Schenke=小酒馆=tavern
de|coron|krönen=加冕=to crown;die Krönung=加冕礼=coronation;die Baumkrone=树冠=treetop
de|d_ring|ringen=摔跤=to wrestle;der Ehering=婚戒=wedding ring;die Ringstraße=环城路=ring road
de|d_truhe|die Schatztruhe=宝箱=treasure chest;die Kühltruhe=冷柜=chest freezer;die Truhenbank=带箱长凳=chest bench
de|chart|die Landkarte=地图=map;die Postkarte=明信片=postcard;die Speisekarte=菜单=menu
de|flam|flammend=燃烧的=flaming;entflammen=点燃=to inflame;die Stichflamme=火舌=jet of flame
de|d_fels|der Felsen=岩石=rock;felsenfest=坚如磐石=rock-solid;die Felswand=岩壁=rock face
de|g_labyr|labyrinthisch=迷宫般的=labyrinthine;der Irrgarten?=迷宫园=maze;das Heckenlabyrinth=树篱迷宫=hedge maze
de|d_ohr|der Ohrring=耳环=earring;die Ohrfeige=耳光=slap;der Ohrwurm=魔性旋律=earworm
de|corp|körperlich=身体的=physical;die Körperschaft=法人团体=corporation;der Korpus=主体=body, corpus
de|d_nas|das Nashorn=犀牛=rhinoceros;naseweis=自作聪明的=know-it-all;das Nasenbluten=流鼻血=nosebleed
de|d_finger|der Fingerabdruck=指纹=fingerprint;der Fingerhut=顶针=thimble;das Fingerspitzengefühl=分寸感=tact
de|d_knie|knien=跪=to kneel;der Kniefall=下跪=genuflection;die Kniescheibe=膝盖骨=kneecap
de|d_haar|haarig=多毛的=hairy;die Haarspalterei=吹毛求疵=hair-splitting;haarscharf=差之毫厘=by a hair's breadth
de|d_zung|der Zungenbrecher=绕口令=tongue-twister;züngeln=吐信=to flicker;die Landzunge=岬角=spit of land
de|d_stier|der Stierkampf=斗牛=bullfight;stieren?=瞪眼=to stare;das Stiernackige?=粗脖子=bull-necked
de|leo|die Löwin=母狮=lioness;löwenstark=狮子般强壮=lion-strong;der Löwenzahn=蒲公英=dandelion
de|d_wolf|die Wölfin=母狼=she-wolf;der Werwolf=狼人=werewolf;der Wolfshunger=饿狼般的饥饿=ravenous hunger
de|d_schlang|schlingen=缠绕、吞=to wind, to gulp;verschlingen=吞没=to devour;die Schlinge=套索=noose
de|d_adler|der Aar=鹰(诗)=eagle (poetic);der Bundesadler=联邦之鹰=federal eagle;der Adlerhorst=鹰巢=eyrie
de|d_bär|die Bärin=母熊=she-bear;der Bärendienst=帮倒忙=disservice;der Eisbär=北极熊=polar bear
de|d_eber|Eberhard=埃伯哈德(人名,野猪般强壮)=Eberhard (strong as a boar);die Eberesche?=花楸=rowan;der Keiler?=野公猪=wild boar
de|d_hirsch|das Hirschgeweih=鹿角=antlers;der Platzhirsch=地头蛇=top dog;der Hirschkäfer=锹甲=stag beetle
de|d_kuh|der Kuhhandel=讨价还价=horse-trading;die Kuhmilch=牛奶=cow's milk;die Milchkuh=奶牛=dairy cow
de|d_schaf|der Schäfer=牧羊人=shepherd;der Schäferhund=牧羊犬=German shepherd;der Schafskopf=傻瓜=blockhead
de|d_zieg|der Ziegenbock=公山羊=billy goat;das Zicklein=小山羊=kid;der Ziegenpeter=腮腺炎=mumps
de|d_schwein|das Sparschwein=储钱罐=piggy bank;das Wildschwein=野猪=wild boar;schweinisch=下流的=filthy
de|d_maus|die Mausefalle=捕鼠器=mousetrap;mausetot=死透了=stone dead;mausgrau=鼠灰色=mouse-grey
de|d_frosch|der Froschkönig=青蛙王子=Frog Prince;die Froschperspektive=仰视角度=worm's-eye view;der Laubfrosch=树蛙=tree frog
de|d_bien|der Bienenstock=蜂箱=beehive;die Bienenkönigin=蜂后=queen bee;der Bienenfleiß=勤劳=diligence
de|d_geheuer|ungeheuer=巨大的=tremendous;geheuer=安稳的=safe, trustworthy;nicht geheuer=可疑的=uncanny
de|d_speer|der Speerwurf=标枪=javelin;die Speerspitze=矛尖、先锋=spearhead;der Speerwerfer=标枪手=javelin thrower
de|d_schild|das Schild=招牌=sign;die Schildkröte=乌龟=tortoise;das Verkehrsschild=交通标志=road sign
de|g_helm|der Schutzhelm=安全帽=hard hat;der Fahrradhelm=自行车头盔=bike helmet;behelmt=戴头盔的=helmeted
de|d_waffe|der Waffenstillstand=停火=armistice;entwaffnen=缴械=to disarm;bewaffnet=武装的=armed
de|d_pfeil|die Pfeilspitze=箭头=arrowhead;pfeilschnell=箭一般快=swift as an arrow;die Pfeiltaste=方向键=arrow key
de|g_sold|soldatisch=军人的=soldierly;der Sold=军饷=soldier's pay;die Söldner=雇佣兵=mercenaries
de|d_tapfer|die Tapferkeit=勇敢=bravery;tapfer kämpfen=英勇作战=to fight bravely;der Tapferkeitsorden=英勇勋章=medal for bravery
de|d_ruhm|berühmt=著名的=famous;rühmen=称颂=to praise;ruhmreich=光荣的=glorious
de|d_tugend|tugendhaft=有德的=virtuous;taugen=有用=to be good for;tauglich=合格的=fit, suitable
de|d_vier|das Viertel=四分之一、城区=quarter;das Viereck=四边形=quadrilateral;vierzig=四十=forty
de|d_fünf|fünfzig=五十=fifty;das Fünfeck=五边形=pentagon;der Fünfkampf=五项全能=pentathlon
de|d_sechs|sechzig=六十=sixty;das Sechseck=六边形=hexagon;sechsfach=六倍=sixfold
de|d_sieben|siebzig=七十=seventy;der Siebenschläfer=睡鼠、七眠子日=dormouse;das Siebengebirge=七峰山=Seven Hills
de|d_acht8|achtzig=八十=eighty;das Achteck=八边形=octagon;die Achterbahn=过山车=roller coaster
de|d_neun|neunzig=九十=ninety;das Neunauge=七鳃鳗=lamprey;neunmalklug=自作聪明=smart-alecky
de|tausend|das Jahrtausend=千年=millennium;der Tausendfüßler=千足虫=millipede;tausendmal=一千次=a thousand times
de|weiß|das Eiweiß=蛋白、蛋白质=egg white, protein;weißlich=发白的=whitish;das Weißbrot=白面包=white bread
de|schwarz|schwärzen=涂黑=to blacken;der Schwarzmarkt=黑市=black market;schwarzfahren=逃票=to dodge the fare
de|grün|grünen=变绿=to turn green;die Grünen=绿党=the Greens;grünlich=发绿的=greenish
de|blau|bläulich=发蓝的=bluish;blaumachen=旷工=to skive;das Blaulicht=警灯=blue light
de|gelb|gelblich=发黄的=yellowish;die Gelbsucht=黄疸=jaundice;vergilben=泛黄=to yellow
de|g_purpur|der Purpur=紫色=purple;purpurrot=紫红色=crimson;die Purpurschnecke=骨螺=murex
de|d_froh|fröhlich=快乐的=cheerful;frohlocken=欢呼=to exult;der Frohsinn=欢快=gaiety
de|d_immer|immerhin=毕竟=after all;nimmer=不再=never again;das Immergrün=长春花=periwinkle
de|d_nie|niemals=从不=never;niemand=没有人=nobody;nirgends=无处=nowhere
de|d_heut|heutig=今天的=today's;heutzutage=如今=nowadays;die Heutigen=今人=people of today
de|d_gestern|vorgestern=前天=the day before yesterday;gestrig=昨天的=yesterday's;das Gestern=往昔=the past
de|d_lied|das Volkslied=民歌=folk song;das Kinderlied=童谣=nursery song;der Liederabend=艺术歌曲音乐会=song recital
de|g_lyr|die Lyrik=抒情诗=lyric poetry;lyrisch=抒情的=lyrical;der Leierkasten=手摇风琴=barrel organ
de|d_saite|das Saiteninstrument=弦乐器=stringed instrument;besaiten=装弦=to string;zartbesaitet=敏感的=sensitive
de|dic|dichten=写诗=to write poetry;das Gedicht=诗=poem;die Dichtung=文学作品=poetry
de|g_flaut|flöten=吹笛=to play the flute;der Flötist=长笛手=flautist;die Blockflöte=竖笛=recorder
de|d_trommel|trommeln=击鼓=to drum;das Trommelfell=鼓膜=eardrum;der Trommelwirbel=鼓点=drum roll
de|vert|die Verse=诗行(复)=verses;der Versfuß=音步=metrical foot;die Version=版本=version
de|fat|fabelhaft=极好的=fabulous;das Fabeltier=神话动物=mythical beast;fabulieren=编故事=to spin tales
de|d_bühne|das Bühnenbild=舞台布景=stage set;die Freilichtbühne=露天剧场=open-air stage;bühnenreif=可以上演的=stage-ready
de|g_theatr|theatralisch=做作的=theatrical;der Theaterplatz=剧院广场=theatre square;das Amphitheater=圆形剧场=amphitheatre
de|g_ech|echoen=回响=to echo;das Echolot=回声测深仪=echo sounder;die Echokammer=回音室=echo chamber
de|g_ros|rosig=玫瑰色的、乐观的=rosy;der Rosenkranz=念珠=rosary;das Rosenöl=玫瑰油=rose oil
de|g_lili|lilienweiß=百合般洁白=lily-white;die Taglilie=萱草=daylily;die Seerose?=睡莲=water lily
de|d_kraut|das Unkraut=杂草=weeds;das Sauerkraut=酸菜=sauerkraut;die Kräuter=香草(复)=herbs
de|d_wiese|die Blumenwiese=花草地=flower meadow;die Theresienwiese=特蕾莎草地=Theresienwiese;das Wiesel?=鼬=weasel
de|g_viper|die Kreuzotter?=极北蝰=adder;die Hornviper=角蝰=horned viper;das Viperngift=蝰蛇毒=viper venom
de|d_trän|tränen=流泪=to water;das Tränengas=催泪瓦斯=tear gas;die Freudenträne=喜悦的泪=tear of joy
de|d_trauer|trauern=哀悼=to mourn;traurig=悲伤的=sad;das Trauerspiel=悲剧=tragedy
de|d_asche|der Aschermittwoch=圣灰星期三=Ash Wednesday;Aschenputtel=灰姑娘=Cinderella;der Aschenbecher=烟灰缸=ashtray
de|g_imper|imperial=帝国的=imperial;der Imperialismus=帝国主义=imperialism;der Imperativ=命令式=imperative
de|g_thron|thronen=高坐=to sit enthroned;entthronen=废黜=to dethrone;der Thronfolger=王储=heir to the throne
de|g_scept|das Zepter schwingen=掌权=to wield the sceptre;das Königszepter=王杖=royal sceptre;der Zepterträger=持杖者=sceptre-bearer
de|d_hohl|hohl=空心的=hollow;aushöhlen=掏空=to hollow out;der Höhlenmensch=穴居人=caveman
de|crypt|die Krypta=地下墓室=crypt;kryptisch=隐晦的=cryptic;grotesk=怪诞的=grotesque
de|d_tal|das Neandertal=尼安德特河谷=Neander valley;die Talsperre=水坝=dam;talwärts=下游=downhill
de|d_ufer|uferlos=无边的=boundless;das Flussufer=河岸=riverbank;die Uferpromenade=滨水步道=waterfront
de|d_teich|der Deich=堤坝=dyke;der Karpfenteich=鲤鱼塘=carp pond;der Mühlteich=磨坊池=mill pond
de|d_sumpf|sumpfig=泥泞的=swampy;versumpfen=变成沼泽=to become swampy;das Sumpfgebiet=沼泽地=marshland
de|d_nebel|neblig=有雾的=foggy;das Nebelhorn=雾号=foghorn;vernebeln=掩盖=to obscure
de|d_frost|frieren=冻=to freeze;frostig=冰冷的=frosty;der Frostschutz=防冻=antifreeze
de|d_grau|grauen=使害怕=to dread;grausam=残忍的=cruel;grauenhaft=可怕的=horrible
de|d_kahn|die Kahnfahrt=泛舟=punt trip;der Lastkahn=驳船=barge;der Spreewaldkahn=施普雷森林平底船=Spreewald punt
de|mon|münzen=铸币=to mint;die Münzanstalt=造币厂=mint;das Münzgeld=硬币=coins
de|d_bell|bellen=狗吠=to bark;das Gebell=吠声=barking;anbellen=冲…吠=to bark at
de|d_kehl|der Kehlkopf=喉头=larynx;kehlig=喉音的=throaty;die Kehlkopfentzündung=喉炎=laryngitis
de|d_klau|klauen=偷=to pinch;die Vogelklaue=鸟爪=bird's claw;die Klauenseuche=口蹄疫=foot-and-mouth disease
de|d_schwanz|schwänzen=逃课=to skip class;schwanken=摇晃=to sway;die Schwanzflosse=尾鳍=tail fin
de|d_fell|das Pelzfell?=毛皮=fur pelt;das Trommelfell=鼓膜=eardrum;das Lammfell=羔羊皮=lambskin
de|g_best|bestialisch=兽性的=bestial;die Bestie=野兽=beast;das Biest=畜生、小坏蛋=beast, brat
de|g_drac|der Drachen=风筝=kite;die Drachenfliege?=蜻蜓=dragonfly;drakonisch=严酷的=draconian
de|d_ries|riesig=巨大的=huge;das Riesenrad=摩天轮=Ferris wheel;das Riesengebirge=巨人山脉=Giant Mountains
de|g_nymph|die Nymphenburg=宁芙堡=Nymphenburg Palace;die Wassernymphe=水中仙女=water nymph;die Nymphe (Insekt)?=若虫=nymph (insect)
de|d_gespenst|gespenstisch=阴森的=ghostly;das Schlossgespenst=古堡幽灵=castle ghost;das Hirngespinst?=幻想=figment
de|phen|die Phantasie=幻想=imagination;phantastisch=奇妙的=fantastic;das Phänomen=现象=phenomenon
de|d_meng|die Menschenmenge=人群=crowd;die Mengenlehre=集合论=set theory;vermengen=混合=to mix
de|d_strom|strömen=流淌=to stream;die Strömung=水流=current;der Stromausfall=停电=power cut
de|d_bach|das Bächlein=小溪=brooklet;die Bachstelze=鹡鸰=wagtail;der Wildbach=山涧=torrent
de|d_strudel|der Apfelstrudel=苹果卷=apple strudel;strudeln=打漩=to swirl;der Wasserstrudel=水涡=whirlpool
de|d_wirbel|die Wirbelsäule=脊柱=spine;der Wirbelsturm=旋风=cyclone;wirbeln=旋转=to whirl
de|d_tropf|tropfen=滴=to drip;der Tropfstein=钟乳石=dripstone;triefen=滴落=to drip
de|d_dampf|dampfen=冒汽=to steam;der Dampfer=汽船=steamer;die Dampfmaschine=蒸汽机=steam engine
de|d_schwefel|die Schwefelsäure=硫酸=sulfuric acid;schwefelig=含硫的=sulfurous;das Schwefelholz=火柴=match
de|d_hunger|hungern=挨饿=to go hungry;hungrig=饥饿的=hungry;die Hungersnot=饥荒=famine
de|d_becher|der Joghurtbecher=酸奶杯=yoghurt pot;der Zahnputzbecher=漱口杯=tooth mug;bechern=豪饮=to booze
de|d_schlamm|schlammig=泥泞的=muddy;die Schlammschlacht=互相抹黑=mudslinging;die Schlammlawine=泥石流=mudslide
de|g_murmur|das Gemurmel=低语=murmuring;vor sich hin murmeln=嘀咕=to mutter;das Murmeltier?=土拨鼠=marmot
de|g_caten|die Halskette=项链=necklace;die Kettenreaktion=连锁反应=chain reaction;verketten=连结=to link
de|d_fessel|fesseln=捆绑、吸引=to bind, to captivate;fesselnd=引人入胜的=gripping;entfesseln=释放=to unleash
de|d_folter|foltern=拷打=to torture;die Folterkammer=刑讯室=torture chamber;der Folterknecht=施刑者=torturer
de|d_rad|das Fahrrad=自行车=bicycle;radeln=骑车=to cycle;das Riesenrad=摩天轮=Ferris wheel
de|magn|majestätisch=威严的=majestic;der Magnat=巨头=magnate;maximal=最大的=maximum
de|d_zorn|zornig=愤怒的=angry;der Jähzorn=暴怒=violent temper;erzürnen=激怒=to anger
de|d_neid|neidisch=嫉妒的=envious;beneiden=羡慕=to envy;der Neidhammel=嫉妒鬼=envious person
de|d_erbarm|erbärmlich=可怜的、糟糕的=pitiful;barmherzig=慈悲的=merciful;die Barmherzigkeit=慈悲=mercy
de|d_mild|mildern=减轻=to mitigate;die Milde=宽和=clemency;die Mildtätigkeit=慈善=charity
de|g_templ|der Tempelberg=圣殿山=Temple Mount;der Tempelritter=圣殿骑士=Knight Templar;Tempelhof=滕珀尔霍夫(圣殿骑士的庄园)=Tempelhof
de|g_altar|das Altarbild=祭坛画=altarpiece;der Hochaltar=主祭坛=high altar;der Hausaltar=家中神龛=household shrine
de|d_opfer|opfern=献祭、牺牲=to sacrifice;das Todesopfer=死者=fatality;die Opferbereitschaft=牺牲精神=willingness to sacrifice
de|g_diadem|das Brillantdiadem=钻石冠冕=diamond tiara;das Stirnband?=头带=headband;die Tiara?=三重冕=tiara
de|d_bitter|die Bitterkeit=苦涩=bitterness;verbittert=怨恨的=embittered;der Magenbitter=苦味酒=bitters
de|d_sanft|die Sanftmut=温和=meekness;besänftigen=安抚=to soothe;sanftmütig=温顺的=gentle
de|d_wild|die Wildnis=荒野=wilderness;das Wildschwein=野猪=wild boar;wildfremd=完全陌生的=total stranger
de|d_staun|erstaunlich=惊人的=astonishing;das Erstaunen=惊讶=astonishment;bestaunen=惊叹=to marvel at
de|pac|der Pazifismus=和平主义=pacifism;der Pazifik=太平洋=Pacific;paktieren=结盟=to make a pact
de|d_blick|der Augenblick=瞬间=moment;der Überblick=概览=overview;blicken=看=to look
de|d_schreit|schreiten=跨步=to stride;der Fortschritt=进步=progress;überschreiten=越过=to exceed
de|d_flieh|fliehen=逃=to flee;der Flüchtling=难民=refugee;flüchtig=匆匆的=fleeting
de|d_eil|eilen=赶紧=to hurry;eilig=急迫的=urgent;der Eilzug=快车=fast train
de|d_irr|irren=迷路、犯错=to err;der Irrgarten?=迷宫=maze;das Irrlicht=鬼火=will-o'-the-wisp
de|d_ewig|ewiglich=永远地=everlastingly;verewigen=使不朽=to immortalize;die Ewigkeitsklausel=永恒条款=eternity clause
de|g_element|elementar=基本的=elementary;das Elementarteilchen=基本粒子=elementary particle;in seinem Element=如鱼得水=in one's element
de|harmon|harmonisch=和谐的=harmonious;harmonieren=协调=to harmonize;die Mundharmonika=口琴=harmonica
de|gen|genial=天才的=brilliant;das Genie=天才=genius;genetisch=遗传的=genetic
de|g_laur|das Lorbeerblatt=月桂叶=bay leaf;der Lorbeerkranz=桂冠=laurel wreath;sich auf seinen Lorbeeren ausruhen=吃老本=to rest on one's laurels
fr|g_garc|le gars=小伙子=lad;le garçonnet=小男孩=little boy;la garçonnière=单身公寓=bachelor flat
fr|juv|la jeunesse=青春=youth;juvénile=青少年的=juvenile;rajeunir=变年轻=to rejuvenate
fr|sœur|la belle-sœur=嫂子、姨子=sister-in-law;la demi-sœur=同父异母姐妹=half-sister;sororal=姐妹的=sororal
fr|g_famul|familial=家庭的=familial;familier=熟悉的=familiar;se familiariser=熟悉=to get used to
fr|mais|la maisonnette=小房子=cottage;la maisonnée=一家人=household;maison mère=总公司=parent company
fr|vent|venteux=多风的=windy;l'éventail=扇子=fan;la ventilation=通风=ventilation
fr|g_vague|la Nouvelle Vague=新浪潮=New Wave;vagues de chaleur=热浪=heatwaves;la vaguelette=小浪=ripple
fr|nuag|nuageux=多云的=cloudy;le nuage de lait=一点奶=dash of milk;sans nuage=无云=cloudless
fr|g_rem|ramer=划桨=to row;le rameur=桨手=rower;la trirème=三列桨战船=trireme
fr|mur|la muraille=城墙=rampart;murer=砌墙封住=to wall up;le muret=矮墙=low wall
fr|g_turr|la tourelle=小塔=turret;la tour de contrôle=塔台=control tower;le donjon?=主塔=keep
fr|g_saal|le salon=客厅=living room;la salle de bains=浴室=bathroom;la salle de classe=教室=classroom
fr|tabl|le tableau=画、黑板=picture, board;la tablette=平板=tablet;attabler=入座=to sit at table
fr|g_cathedr|la chaire=讲坛=pulpit;la cathédrale=主教座堂=cathedral;la chaise longue=躺椅=deckchair
fr|g_lamp|le lampadaire=路灯=street lamp;le lampion=灯笼=lantern;la lampe de poche=手电筒=torch
fr|fenêtr|la fenêtre de tir=发射窗口=launch window;la porte-fenêtre=落地窗=French window;défenestrer=扔出窗外=to defenestrate
fr|g_column|la colonnade=柱廊=colonnade;le colonel=上校=colonel;la colonne vertébrale=脊柱=spine
fr|g_jard|le jardinier=园丁=gardener;jardiner=园艺=to garden;la jardinière=花槽=planter
fr|g_font|la fontainerie?=泉水设施=fountain works;les fonts baptismaux=洗礼池=baptismal font;Fontainebleau=枫丹白露=Fontainebleau
fr|arg|argenté=银色的=silvery;l'argenterie=银器=silverware;argentin=阿根廷的=Argentinian
fr|g_marmor|marbré=大理石纹的=marbled;la marbrerie=大理石作坊=marble works;le marbrier=大理石匠=marble mason
fr|pict|peindre=画=to paint;le peintre=画家=painter;pittoresque=如画的=picturesque
fr|g_banc|le banc=长凳=bench;la banque=银行=bank;la banqueroute=破产=bankruptcy
fr|ép|l'épéiste=击剑手=fencer;le coup d'épée=一剑=sword stroke;l'espadon=剑鱼=swordfish
fr|g_anul|annulaire=环形的、无名指=annular, ring finger;l'annelet=小环=ringlet;les annélides=环节动物=annelids
fr|g_gemm|la gemmologie=宝石学=gemmology;le gemmologue=宝石学家=gemmologist;la gemmation=发芽=budding
fr|g_coffr|le coffre-fort=保险柜=safe;le coffret=小盒=casket;le coffrage=模板=formwork
fr|mutt|le mot de passe=密码=password;motus=别说出去=mum's the word;le mot-clé=关键词=keyword
fr|g_consul|conseiller=建议、顾问=to advise, adviser;le consul=领事=consul;consulter=咨询=to consult
fr|sap|sage=明智的=wise;savoir=知道=to know;savourer=品味=to savour
fr|g_tenebr|ténébreux=阴沉的=gloomy;l'obscurité?=昏暗=darkness;les Ténèbres (office)=晨祷仪式=Tenebrae
fr|voi|le voyage=旅行=journey;la voirie=道路系统=roads;dévoyer=使入歧途=to lead astray
fr|g_silent|silencieux=安静的=silent;le silencieux=消音器=silencer;silencieusement=静静地=silently
fr|feu|le feu d'artifice=烟火=fireworks;le foyer=炉灶、家=hearth, home;le feu rouge=红灯=red light
fr|tort|tordre=拧=to twist;la torsion=扭转=torsion;tortueux=曲折的=tortuous
fr|g_roc|la roche=岩石=rock;rocheux=多岩的=rocky;la rocaille=碎石饰=rockwork
fr|g_labyr|labyrinthique=迷宫般的=labyrinthine;le dédale?=迷宫(代达罗斯)=maze;le labyrinthe de l'oreille=内耳迷路=inner-ear labyrinth
fr|g_gauch|gaucher=左撇子=left-handed;la gauche=左派=the Left;gauchir=弯曲变形=to warp
fr|super|surtout=尤其=above all;survoler=飞越=to fly over;surnaturel=超自然的=supernatural
fr|g_intus|l'intestin=肠=intestine;au-dedans=在里面=inside;le dedans=内部=the inside
fr|oreil|l'oreiller=枕头=pillow;les boucles d'oreille=耳环=earrings;auriculaire=小指=little finger
fr|corps|corporel=身体的=bodily;le corset=紧身胸衣=corset;la corporation=行会=guild
fr|bouch|la bouchée=一口=mouthful;boucher=堵住=to plug;l'embouchure=河口=river mouth
fr|g_nas|nasal=鼻的=nasal;le naseau=鼻孔(马)=nostril;nasiller=用鼻音说=to speak nasally
fr|g_brach|le bracelet=手镯=bracelet;embrasser=拥抱、亲吻=to embrace, to kiss;le brassard=臂章=armband
fr|g_genu|la génuflexion=屈膝=genuflection;s'agenouiller=下跪=to kneel;la genouillère=护膝=knee pad
fr|g_capill|capillaire=毛细的=capillary;la chevelure=头发=head of hair;chevelu=长发的=long-haired
fr|sang|sanglant=血腥的=bloody;le sang-froid=冷静=composure;sanguin=血的=sanguine
fr|esprit|spirituel=精神的、机智的=spiritual, witty;inspirer=启发=to inspire;respirer=呼吸=to breathe
fr|somm|sommeiller=打盹=to doze;le somnifère=安眠药=sleeping pill;la somnolence=困倦=drowsiness
fr|g_taur|la tauromachie=斗牛=bullfighting;le Minotaure=米诺陶=Minotaur;le taurillon=小公牛=young bull
fr|leo|la lionne=母狮=lioness;le lionceau=幼狮=lion cub;léonin=狮子的=leonine
fr|lup|la louve=母狼=she-wolf;le louveteau=幼狼=wolf cub;le loup-garou=狼人=werewolf
fr|serp|serpenter=蜿蜒=to wind;la serpentine=蛇纹石=serpentine;le serpentin=彩带=streamer
fr|g_aquil|aquilin=鹰钩的=aquiline;l'aiglon=小鹰=eaglet;l'aigle royal=金雕=golden eagle
fr|chien|la chienne=母狗=bitch;le chiot=小狗=puppy;chenil=狗舍=kennel
fr|g_catt|le chaton=小猫=kitten;la chatte=母猫=she-cat;chatouiller?=挠痒=to tickle
fr|g_urs|l'ourse=母熊=she-bear;l'ourson=小熊=bear cub;la Grande Ourse=大熊座=Great Bear
fr|g_cerv|la biche?=母鹿=doe;le cervidé=鹿科=cervid;le Cervin=马特洪峰("鹿山")=the Matterhorn;le faon?=小鹿=fawn
fr|g_vacc|le vacher=牧牛人=cowherd;le vaccin=疫苗=vaccine;la vachette=小母牛=young cow
fr|g_mout|le mouton noir=害群之马=black sheep;moutonner=起白浪=to foam;moutonnier=盲从的=sheep-like
fr|g_capr|le chevreau=小山羊=kid;la chevrette=小母山羊=young she-goat;le caprice=任性=whim
fr|g_porc|le porcelet=小猪=piglet;la porcelaine=瓷器=porcelain;le porc-épic=豪猪=porcupine
fr|g_sorex|le souriceau=小老鼠=young mouse;sourire?=—=—;la souricière=捕鼠器=mousetrap
fr|g_ran|la grenouillère=泥泞处、连体睡衣=froggery, sleepsuit;la rainette=树蛙=tree frog;le Ranunculus=毛茛=buttercup
fr|g_api|l'apiculture=养蜂=beekeeping;l'apiculteur=养蜂人=beekeeper;l'abeille reine=蜂后=queen bee
fr|g_lanc|lancer=投掷=to throw;l'élan=冲劲=momentum;la lancette=柳叶刀=lancet
fr|bucc|la boucle=环扣、卷发=buckle, curl;boucler=扣上=to buckle;buccal=口腔的=buccal
fr|g_casc|le casque audio=耳机=headphones;casqué=戴头盔的=helmeted;la casquette=鸭舌帽=cap
fr|g_flech|la fléchette=飞镖=dart;flécher=标箭头=to signpost;fléché=有箭头的=arrowed
fr|g_inimic|inimitié=敌意=enmity;inamical=不友好的=unfriendly;ennemi juré=死敌=sworn enemy
fr|sold|la solde=军饷、打折=pay, sale;soldé=打折的=reduced;la soldatesque=兵痞=soldiery
fr|glor|glorieux=光荣的=glorious;glorifier=颂扬=to glorify;la gloriole=虚荣=vainglory
fr|ferr|ferreux=含铁的=ferrous;le fer à cheval=马蹄铁=horseshoe;la ferraille=废铁=scrap iron
fr|g_quinqu|quinze=十五=fifteen;cinquante=五十=fifty;la quinzaine=两周=fortnight
fr|g_sex|seize=十六=sixteen;soixante=六十=sixty;le sextant=六分仪=sextant
fr|sept|septante=七十(比利时、瑞士)=seventy (Belgian, Swiss);septembre=九月(原第七月)=September;le septuor=七重奏=septet
fr|blanc|blanchir=漂白=to whiten;la blancheur=洁白=whiteness;la carte blanche=全权=carte blanche
fr|noir|noircir=涂黑=to blacken;la noirceur=黑暗、邪恶=blackness;le film noir=黑色电影=film noir
fr|bleu|bleuâtre=发蓝的=bluish;le bleuet=矢车菊=cornflower;le cordon-bleu=高明厨师=cordon bleu
fr|g_galb|jaunir=变黄=to yellow;la jaunisse=黄疸=jaundice;le jaune d'œuf=蛋黄=egg yolk
fr|g_purpur|le pourpre=紫红色=crimson;empourprer=染紫红=to empurple;la pourpre cardinalice=红衣主教袍=cardinal's purple
fr|g_but|débuter=开始=to begin;le débutant=新手=beginner;le but=目标、进球=goal
fr|g_magis|mais=但是=but;désormais=从今以后=henceforth;jamais plus=再也不=never again
fr|g_heri|avant-hier=前天=the day before yesterday;hier soir=昨晚=last night;d'hier=昔日的=of yesterday
fr|mus|musical=音乐的=musical;le musicien=音乐家=musician;le musée=博物馆=museum
fr|g_lyr|lyrique=抒情的=lyrical;le lyrisme=抒情性=lyricism;l'art lyrique=歌剧艺术=opera
fr|g_chord|la cordelette=细绳=cord;accorder=调音=to tune;la corde vocale=声带=vocal cord
fr|cant|chanter=唱=to sing;la chanson=歌曲=song;le chanteur=歌手=singer
fr|g_art|l'artiste=艺术家=artist;l'artisan=工匠=craftsman;artificiel=人造的=artificial
fr|g_flaut|le flûtiste=长笛手=flautist;la flûte à bec=竖笛=recorder;flûté=笛音般的=fluting
fr|g_tambur|tambouriner=敲鼓=to drum;le tambourin=手鼓=tambourine;le tambour-major=鼓手长=drum major
fr|g_scen|la mise en scène=导演=staging;le scénario=剧本=screenplay;scénique=舞台的=scenic
fr|g_theatr|théâtral=戏剧的=theatrical;la théâtralité=戏剧性=theatricality;l'amphithéâtre=阶梯教室=amphitheatre
fr|g_forest|forestier=森林的=forest;la déforestation=砍伐森林=deforestation;le forestier=护林员=forester
fr|arbr|l'arbuste=灌木=shrub;arboricole=树栖的=tree-dwelling;l'arboretum=树木园=arboretum
fr|g_ech|l'échographie=超声检查=ultrasound;faire écho=呼应=to echo;l'échosondeur=回声测深仪=echo sounder
fr|nub|nuptial=婚礼的=nuptial;le nubile=适婚的=nubile;les noces d'or=金婚=golden wedding
fr|g_ros|le rosier=玫瑰丛=rosebush;rosé=桃红酒=rosé;la rosace=玫瑰窗=rose window
fr|g_lili|la fleur de lys=鸢尾花徽=fleur-de-lis;le lilas?=—=—;le liliacé=百合科=liliaceous
fr|herb|herbeux=长草的=grassy;l'herbier=植物标本集=herbarium;herbivore=食草的=herbivorous
fr|g_prat|la prairie=草原=prairie;le préau=学校风雨操场=covered playground;Pré-aux-Clercs=学子草地=Pré-aux-Clercs
fr|g_viper|la vipérine=蓝蓟=viper's bugloss;vipérin=毒蛇般的=viperish;le vipereau=小蝰蛇=young viper
fr|g_venen|venimeux=有毒的=venomous;envenimer=恶化=to poison, to embitter;le venin de serpent=蛇毒=snake venom
fr|lacrim|larmoyer=流泪=to water;lacrymal=泪的=lacrimal;lacrymogène=催泪的=tear-inducing
fr|g_funer|funèbre=葬礼的=funereal;funeste=致命的=fatal;le funérarium=殡仪馆=funeral parlour
fr|sepul|la sépulture=墓地、安葬=burial;sépulcral=阴森的=sepulchral;le Saint-Sépulcre=圣墓=Holy Sepulchre
fr|g_ciner|Cendrillon=灰姑娘=Cinderella;le cendrier=烟灰缸=ashtray;incinérer=焚化=to incinerate
fr|g_destin|destiner=注定=to destine;la destination=目的地=destination;la destinée=命运=destiny
fr|g_infer|inférieur=下面的=lower;l'enfer=地狱=hell;infernal=地狱般的=infernal
fr|g_imper|l'empereur=皇帝=emperor;impérial=帝国的=imperial;l'impératif=命令式=imperative
fr|g_thron|trôner=高坐=to sit enthroned;détrôner=废黜=to dethrone;le trône royal=王座=royal throne
fr|g_scept|sceptre royal=王杖=royal sceptre;le porte-sceptre=持杖者=sceptre-bearer;sceptique?=—=—
fr|crypt|la crypte=地下墓室=crypt;cryptique=隐晦的=cryptic;grotesque=怪诞的=grotesque
fr|g_abyss|abyssal=深渊的=abyssal;abîmer=损坏=to damage;s'abîmer=陷入=to sink into
fr|g_vall|le val=谷=vale;l'avalanche=雪崩=avalanche;en aval=下游=downstream
fr|g_stagn|stagner=停滞=to stagnate;la stagnation=停滞=stagnation;stagnant=不流动的=stagnant
fr|g_brouill|brouiller=搅乱=to scramble;le brouillon=草稿=draft;embrouiller=弄乱=to muddle
fr|guard|garder=看守=to keep;la garde=守卫=guard;le garde-robe=衣柜=wardrobe
fr|barc|l'embarcation=船只=craft;embarquer=上船=to board;débarquer=下船=to land
fr|g_ratis|radeau de sauvetage=救生筏=life raft;le radeau de la Méduse=梅杜萨之筏=Raft of the Medusa;le radelier=筏工=raftsman
fr|g_piec|le morceau?=一块=piece;dépecer=肢解=to cut up;la pièce de théâtre=剧本=play
fr|g_aboi|aboyer=吠=to bark;aux abois=穷途末路=at bay;l'aboyeur=吆喝者=barker
fr|g_gorg|la gorgée=一口=mouthful;engorger=阻塞=to clog;se rengorger=昂首=to strut
fr|g_griff|griffer=抓=to scratch;le griffon?=狮鹫=griffin;la griffe de luxe=名牌=designer label
fr|g_caud|la queue de cheval=马尾辫=ponytail;faire la queue=排队=to queue;couard=胆小的=cowardly
fr|g_pell|la pellicule=薄膜、胶片=film;la pelisse=皮大衣=fur coat;la peau de chagrin=驴皮(日益缩小)=shagreen
fr|g_drac|le dragonnier=龙血树=dragon tree;draconien=严酷的=draconian;le dragon (soldat)=龙骑兵=dragoon
fr|g_gigant|gigantesque=巨大的=gigantic;le gigantisme=巨人症=gigantism;la géante rouge=红巨星=red giant
fr|g_nymph|la nymphéa=睡莲=water lily;nymphal=若虫的=nymphal;la nymphe des bois=林中仙女=wood nymph
fr|âm|animé=活泼的、动画的=lively, animated;l'animal=动物=animal;unanime=一致的=unanimous
fr|g_foul|fouler=踩=to tread;le refoulement=压抑=repression;se défouler=发泄=to let off steam
fr|g_rivus|le ru=小溪=rill;dériver=派生、漂流=to derive, to drift;le rival=对手=rival
fr|g_lac|le lacustre=湖泊的=lacustrine;la lagune=潟湖=lagoon;le lac Léman=莱芒湖=Lake Geneva
fr|g_golf|le golfe=海湾=gulf;le Gulf Stream=湾流=Gulf Stream;s'engouffrer=涌入=to rush into
fr|turb|turbulent=动荡的=turbulent;la turbine=涡轮=turbine;troubler=扰乱=to disturb
fr|g_gutt|goutter=滴=to drip;le goutte-à-goutte=点滴=drip;la goutte (maladie)=痛风=gout
fr|g_umor|humide=湿的=humid;l'humeur=心情=mood;humecter=弄湿=to moisten
fr|g_ard|ardent=热烈的=ardent;ardemment=热烈地=ardently;l'ardoise?=—=—
fr|g_sulf|le sulfate=硫酸盐=sulfate;sulfureux=含硫的、邪恶的=sulfurous;soufré=含硫的=sulfured
fr|g_sit|assoiffé=口渴的=thirsty;la soif de savoir=求知欲=thirst for knowledge;désaltérer?=解渴=to quench thirst
fr|g_fames|la famine=饥荒=famine;affamé=饥饿的=starving;le crève-la-faim=饿死鬼=starveling
fr|g_cupp|la Coupe du monde=世界杯=World Cup;la coupole=圆顶=dome;la coupelle=小杯=small cup
fr|g_potio|potable=可饮用的=drinkable;le poison=毒药=poison;empoisonner=下毒=to poison
fr|g_boue|boueux=泥泞的=muddy;l'éboueur=清道夫=dustman;la gadoue?=泥浆=sludge
fr|g_murmur|murmurer=低语=to murmur;le murmure de l'eau=水声=babble of water;le marmonnement?=嘀咕=mumbling
fr|fund|profond=深的=deep;approfondir=深化=to deepen;le fond=底=bottom
fr|g_caten|enchaîner=锁住、连接=to chain, to link;la chaînette=细链=chain;déchaîner=放开=to unleash
fr|test|témoigner=作证=to testify;le témoignage=证词=testimony;le testament=遗嘱=will
fr|caus|causer=引起、聊天=to cause, to chat;la causalité=因果=causality;l'accusé=被告=defendant
fr|g_orgueil|orgueilleux=骄傲的=proud;s'enorgueillir=自豪=to pride oneself;l'orgueil blessé=受伤的自尊=wounded pride
fr|g_colere|coléreux=易怒的=hot-tempered;le choléra=霍乱=cholera;colérique=暴躁的=choleric
fr|miser|misérable=悲惨的=miserable;la misère=贫困=poverty;miséricordieux=慈悲的=merciful
fr|g_clem|clément=宽仁的=clement;inclément=恶劣的(天气)=inclement;Clément=克雷芒(名)=Clement
fr|prec|prier=祈祷、请求=to pray, to ask;la prière=祈祷=prayer;précaire=不稳定的=precarious
fr|g_templ|le templier=圣殿骑士=Templar;contempler=凝视=to contemplate;la contemplation=沉思=contemplation
fr|g_altar|le maître-autel=主祭坛=high altar;le retable?=祭坛画=altarpiece;l'autel des sacrifices=祭坛=altar of sacrifice
fr|g_thesaur|le trésorier=司库=treasurer;la trésorerie=财政部、资金=treasury;le thésauriseur=囤积者=hoarder
fr|g_diadem|diadémé=戴冠的=diademed;le bandeau?=头带=headband;la tiare?=三重冕=tiara
fr|g_suav|suave=柔美的=suave;persuader=说服=to persuade;la persuasion=说服力=persuasion
fr|g_amar|l'amertume=苦涩=bitterness;amèrement=苦涩地=bitterly;la mer amère?=—=—
fr|g_moll|molle=软的(阴性)=soft (fem.);le mollusque=软体动物=mollusc;amollir=使软化=to soften
fr|car|caresser=抚摸=to caress;la caresse=爱抚=caress;cher=亲爱的、贵的=dear
fr|g_fera|la férocité=凶猛=ferocity;fier=骄傲的=proud;farouche?=野性的=wild, shy
fr|stup|stupide=愚蠢的=stupid;stupéfier=使惊呆=to stupefy;stupéfiant=惊人的、毒品=astounding, narcotic
fr|g_retro|l'arrière-pays=腹地=hinterland;rétrograde=倒退的=retrograde;le rétroviseur=后视镜=rear-view mirror
fr|scend|descendre=下=to go down;ascendant=上升的=ascending;l'ascenseur=电梯=lift
fr|g_obscur|obscur=暗的=dark;obscurcir=使变暗=to darken;l'obscurantisme=蒙昧主义=obscurantism
fr|g_solicit|se soucier=关心=to care;soucieux=忧虑的=worried;insouciant=无忧无虑的=carefree
fr|g_pat|patient=有耐心的、病人=patient;impatient=不耐烦的=impatient;la passion=激情、受难=passion
fr|g_hate|se hâter=赶紧=to hurry;hâtif=仓促的=hasty;à la hâte=匆匆=in haste
fr|g_aetern|éternel=永恒的=eternal;éterniser=使持久=to drag out;éternellement=永远=forever
fr|g_element|élémentaire=基本的=elementary;les éléments=元素、要素=elements;l'élément chimique=化学元素=chemical element
fr|g_laur|le lauréat=获奖者=prize-winner;le baccalauréat=高中会考=baccalaureate;lauré=戴桂冠的=laurelled
it|sor|la sorellina=小妹妹=little sister;sororale=姐妹的=sororal;la sorellastra=继姐妹=stepsister
it|g_famul|familiare=熟悉的、家人=familiar, relative;il famiglio=仆役=servant;la famigliola=小家庭=little family
it|vent|ventoso=多风的=windy;il ventaglio=扇子=fan;il ventilatore=电扇=fan
it|nuvol|nuvoloso=多云的=cloudy;la nuvoletta=小云、对话框=little cloud, speech bubble;annuvolarsi=变阴=to cloud over
it|g_rem|remare=划船=to row;il rematore=桨手=rower;la trireme=三列桨战船=trireme
it|g_usc|uscire=出去=to go out;l'uscita=出口=exit;l'usciere=门房、法警=usher
it|mur|la muraglia=长城、城墙=great wall;murare=砌墙=to wall up;il muratore=泥瓦匠=bricklayer
it|g_turr|il torrione=大塔=keep;la torretta=小塔=turret;torreggiare=高耸=to tower
it|g_saal|il salone=大厅=hall;il salotto=客厅=living room;la sala da pranzo=餐厅=dining room
it|sed|sedersi=坐下=to sit down;la sede=所在地、总部=seat, headquarters;sedentario=久坐的=sedentary
it|g_luc|la luce=光=light;la lucciola=萤火虫=firefly;lucido=明亮的=shiny, lucid
it|finestr|il finestrino=车窗=car window;la finestrella=小窗=small window;finestrato=开窗的=windowed
it|g_column|il colonnato=柱廊=colonnade;il colonnello=上校=colonel;la colonnina=小柱=small column
it|g_jard|il giardiniere=园丁=gardener;il giardinaggio=园艺=gardening;il giardinetto=小花园=little garden
it|g_font|la fontana=喷泉=fountain;la fontanella=饮水台=drinking fountain;Fontana di Trevi=特雷维喷泉=Trevi Fountain
it|arg|argentato=银色的=silvery;l'argenteria=银器=silverware;argenteo=银的=silver
it|g_marmor|marmoreo=大理石的=marble;il marmista=大理石匠=marble mason;la marmitta?=—=—
it|pict|dipingere=画=to paint;il pittore=画家=painter;pittoresco=如画的=picturesque
it|g_banc|il banco=长凳、柜台=bench, counter;la banca=银行=bank;la bancarotta=破产=bankruptcy
it|spad|lo spadaccino=剑客=swordsman;lo spadino=短剑=small sword;le spade=黑桃=spades
it|g_anul|l'anulare=无名指=ring finger;anellato=环状的=ringed;gli anellidi=环节动物=annelids
it|g_gemm|gemmare=发芽=to bud;la gemmologia=宝石学=gemmology;gemmato=镶宝石的=jewelled
it|g_scrin|lo scrigno dei gioielli=首饰盒=jewel box;scrinium?=书卷箱=scroll case;lo scrittoio?=—=—
it|cart|la cartolina=明信片=postcard;il cartello=标牌=sign;la cartella=书包、文件夹=schoolbag, folder
it|parol|la parolaccia=脏话=swearword;parlare=说=to speak;la parola d'ordine=口令=password
it|g_consul|consigliare=建议=to advise;il consigliere=顾问=adviser;consultare=咨询=to consult
it|g_tenebr|tenebroso=阴暗的=gloomy;ottenebrare=遮蔽=to cloud;le tenebre della notte=夜色=darkness of night
it|vi|viaggiare=旅行=to travel;il viaggio=旅程=journey;deviare=偏离=to deviate
it|g_silent|silenzioso=安静的=silent;il silenziatore=消音器=silencer;silenziosamente=静静地=silently
it|g_sax|il sassolino=小石子=pebble;sassoso=多石的=stony;il sassofono?=—=—
it|g_labyr|labirintico=迷宫般的=labyrinthine;il dedalo?=迷宫=maze;labirintite=内耳炎=labyrinthitis
it|dext|la destra=右手、右派=right hand, the Right;la destrezza=灵巧=dexterity;destreggiarsi=周旋=to manoeuvre
it|g_sinistr|la sinistra=左手、左派=left hand, the Left;il sinistro=事故=accident;sinistrato=受灾的=stricken
it|sott|sottomarino=潜艇=submarine;sottolineare=强调=to underline;il sottotitolo=字幕=subtitle
it|g_intus|l'intestino=肠=intestine;addentrarsi=深入=to penetrate;di dentro=从里面=from inside
it|orecc|l'orecchino=耳环=earring;orecchiare=偷听=to eavesdrop;l'orecchietta=猫耳朵面=orecchiette
it|bocc|il boccone=一口=mouthful;la boccetta=小瓶=small bottle;imboccare=喂、驶入=to feed, to enter
it|g_nas|nasale=鼻的=nasal;il nasone=大鼻子=big nose;nasalizzare=鼻音化=to nasalize
it|g_brach|il bracciale=手镯=bracelet;abbracciare=拥抱=to hug;il bracciolo=扶手=armrest
it|g_genu|inginocchiarsi=下跪=to kneel;la ginocchiera=护膝=knee pad;la genuflessione=屈膝礼=genuflection
it|g_capill|la capigliatura=头发=head of hair;capillare=毛细的=capillary;i capelli d'angelo=天使发面=angel hair pasta
it|sangu|sanguinoso=血腥的=bloody;sanguigno=血的=blood;dissanguare=放血=to bleed dry
it|spirit|spirituale=精神的=spiritual;ispirare=启发=to inspire;respirare=呼吸=to breathe
it|sonn|sonnolento=困倦的=sleepy;il sonnellino=小睡=nap;la sonnolenza=困意=drowsiness
it|g_taur|il torero=斗牛士=bullfighter;la tauromachia=斗牛=bullfighting;il Minotauro=米诺陶=Minotaur
it|leo|la leonessa=母狮=lioness;il leoncino=幼狮=lion cub;leonino=狮子的=leonine
it|lup|la lupa=母狼=she-wolf;il lupacchiotto=幼狼=wolf cub;il lupo mannaro=狼人=werewolf
it|serp|serpeggiare=蜿蜒=to meander;la serpentina=盘山路=hairpin road;il serpentario=蛇园=snake house
it|g_aquil|aquilino=鹰钩的=aquiline;l'aquilotto=小鹰=eaglet;L'Aquila=拉奎拉(城)=L'Aquila
it|can|la cagna=母狗=bitch;il cagnolino=小狗=puppy;il canile=狗舍=kennel
it|g_catt|il gattino=小猫=kitten;la gatta=母猫=she-cat;gattonare=爬行=to crawl
it|g_urs|l'orsa=母熊=she-bear;l'orsacchiotto=泰迪熊=teddy bear;l'Orsa Maggiore=大熊座=Great Bear
it|g_cerv|la cerva=母鹿=hind;il cerbiatto=小鹿=fawn;cervino=鹿的=cervine
it|g_vacc|il vaccaro=牧牛人=cowherd;il vaccino=疫苗=vaccine;la vaccinazione=接种=vaccination
it|pecu|il pecoraio=牧羊人=shepherd;pecorino=羊奶酪=pecorino;pecuniario=金钱的=pecuniary
it|g_capr|il capretto=小山羊=kid;il capriolo=狍子=roe deer;il capriccio=随想=whim
it|g_porc|il porcellino=小猪=piglet;la porcellana=瓷器=porcelain;il porcospino=豪猪=porcupine
it|g_talp|la talpa=鼹鼠、内鬼=mole;Topolino=米老鼠=Mickey Mouse;la topaia=鼠窝=rat hole
it|g_ran|la ranocchia=小青蛙=little frog;il ranuncolo=毛茛=buttercup;la raganella=树蛙=tree frog
it|g_api|l'apicoltura=养蜂=beekeeping;l'apicoltore=养蜂人=beekeeper;l'apiario=蜂场=apiary
it|luct|lottare=斗争=to struggle;il lottatore=摔跤手=wrestler;la lotta libera=自由式摔跤=freestyle wrestling
it|g_lanc|lanciare=投掷=to throw;il lancio=投掷、发射=launch;lo slancio=冲劲=momentum
it|g_scut|lo scudiero=侍从=squire;lo scudetto=意甲冠军盾徽=league-champion badge;scudare?=—=—
it|g_helm|l'elmetto=钢盔=helmet;elmato=戴盔的=helmeted;l'elmo da cavaliere=骑士盔=knight's helm
it|g_flech|la frecciata=讽刺话=barb;frecciare=射箭=to shoot arrows;la freccia (auto)=转向灯=indicator
it|g_inimic|l'inimicizia=敌意=enmity;inimicarsi=树敌=to make an enemy of;nemico giurato=死敌=sworn enemy
it|picc|il piccolino=小家伙=little one;il piccolo (flauto)=短笛=piccolo;impiccolire=缩小=to shrink
it|glor|glorioso=光荣的=glorious;glorificare=颂扬=to glorify;la gloriola=虚荣=vainglory
it|ferr|la ferrovia=铁路=railway;il ferro da stiro=熨斗=iron;ferroso=含铁的=ferrous
it|g_quinqu|quindici=十五=fifteen;cinquanta=五十=fifty;il quintetto=五重奏=quintet
it|g_sex|sedici=十六=sixteen;sessanta=六十=sixty;il sestetto=六重奏=sextet
it|sept|settanta=七十=seventy;settembre=九月=September;il settimo=第七=seventh
it|g_novem|novanta=九十=ninety;novembre=十一月(原第九月)=November;il nono=第九=ninth
it|dec2|decimo=第十=tenth;decimale=十进制的=decimal;la decina=十个左右=about ten
it|bianc|biancastro=发白的=whitish;imbiancare=粉刷=to whitewash;la biancheria=床单衣物=linen
it|ner|nerastro=发黑的=blackish;annerire=变黑=to blacken;il nerofumo=烟黑=lampblack
it|verd|verdastro=发绿的=greenish;la verdura=蔬菜=vegetables;rinverdire=返青=to turn green again
it|g_azur|azzurrino=浅蓝的=light blue;gli Azzurri=意大利国家队=the Azzurri;l'azzurrite=蓝铜矿=azurite
it|g_galb|giallastro=发黄的=yellowish;ingiallire=泛黄=to yellow;il giallo=侦探小说=crime novel
it|g_purpur|la porpora=紫红=purple;porporino=紫红色的=purplish;il porporato=红衣主教=cardinal
it|felic|la felicità=幸福=happiness;felicitarsi=祝贺=to congratulate;infelice=不幸的=unhappy
it|g_laet|la letizia=欢乐=joy;allietare=使高兴=to cheer;il lieto fine=大团圆=happy ending
it|g_semper|sempreverde=常青的=evergreen;per sempre=永远=forever;sempiterno=永恒的=everlasting
it|g_magis|mai più=再也不=never again;giammai=决不=never ever;il maggiore=较大的=greater
it|matin|il mattino=早晨=morning;la mattina=上午=morning;mattiniero=早起的=early-rising
it|g_heri|l'altro ieri=前天=the day before yesterday;ieri sera=昨晚=last night;di ieri=昨天的=of yesterday
it|mus|musicale=音乐的=musical;il musicista=音乐家=musician;il museo=博物馆=museum
it|g_carm|l'incantesimo=咒语=spell;il carme=颂诗=ode;incantare=迷住=to enchant
it|g_lyr|lirico=抒情的=lyrical;la lirica=抒情诗、歌剧=lyric poetry, opera;il liricista=抒情诗人=lyricist
it|g_chord|accordare=调音=to tune;il cordone=绳索=cordon;la cordicella=细绳=string
it|g_art|l'artista=艺术家=artist;l'artigiano=工匠=craftsman;artificiale=人造的=artificial
it|g_flaut|il flautista=长笛手=flautist;il flauto dolce=竖笛=recorder;flautato=笛音般的=fluted
it|g_tambur|tamburellare=敲击=to drum;il tamburello=铃鼓=tambourine;il tamburino=鼓手=drummer boy
it|g_scen|lo scenario=布景、情景=scenery, scenario;la scenata=吵闹=scene, row;scenico=舞台的=scenic
it|g_theatr|teatrale=戏剧的=theatrical;l'anfiteatro=圆形剧场=amphitheatre;la teatralità=戏剧性=theatricality
it|silv|selvaggio=野生的=wild;la selvaggina=野味=game;silvestre=林中的=sylvan
it|alber|alberato=有树的=tree-lined;l'alberello=小树=sapling;l'albero genealogico=家谱=family tree
it|g_ech|l'ecografia=超声检查=ultrasound;fare eco=呼应=to echo;l'ecoscandaglio=回声测深仪=echo sounder
it|nub|nuziale=婚礼的=nuptial;nubile=未婚的(女)=unmarried;le nozze d'oro=金婚=golden wedding
it|g_ros|il roseto=玫瑰园=rose garden;roseo=粉红的=rosy;il rosario=念珠=rosary
it|g_lili|gigliato=饰百合花徽的=lily-decorated;il giglio fiorentino=佛罗伦萨百合=Florentine lily;liliaceo=百合科的=liliaceous
it|herb|erboso=长草的=grassy;l'erbario=植物标本集=herbarium;l'erborista=草药商=herbalist
it|g_prat|la prateria=草原=prairie;il pratolino=小草地=little meadow;prativo=草地的=meadow
it|g_viper|viperino=毒蛇般的=viperish;la viperetta=小蝰蛇=little viper;la vipera cornuta=角蝰=horned viper
it|g_venen|velenoso=有毒的=poisonous;avvelenare=下毒=to poison;l'avvelenamento=中毒=poisoning
it|lacrim|lacrimare=流泪=to weep;lacrimale=泪的=lacrimal;lacrimogeno=催泪的=tear-inducing
it|g_luctus|luttuoso=悲惨的=tragic;il lutto nazionale=国丧=national mourning;listato a lutto=镶黑边的=black-edged
it|g_funer|funebre=葬礼的=funereal;funesto=致命的=fatal;le pompe funebri=殡仪馆=undertaker's
it|sepul|seppellire=埋葬=to bury;la sepoltura=安葬=burial;sepolcrale=阴森的=sepulchral
it|g_ciner|Cenerentola=灰姑娘=Cinderella;il ceneriere=烟灰缸=ashtray;incenerire=焚化=to incinerate
it|g_infer|inferiore=下面的=lower;l'inferno=地狱=hell;infernale=地狱般的=infernal
it|g_imper|l'imperatore=皇帝=emperor;imperiale=帝国的=imperial;imperativo=命令式=imperative
it|g_thron|detronizzare=废黜=to dethrone;l'erede al trono=王储=heir to the throne;troneggiare=高踞=to sit enthroned
it|g_scept|lo scettro del potere=权杖=sceptre of power;scettrato=持杖的=sceptred;lo scettro regale=王杖=royal sceptre
it|g_spelunc|la speleologia=洞穴学=speleology;lo speleologo=洞穴学家=speleologist;speleologico=洞穴学的=speleological
it|g_abyss|abissale=深渊的=abysmal;inabissarsi=沉没=to sink;gli abissi marini=深海=ocean depths
it|g_vall|il vallone=山谷=valley;valligiano=山谷居民=valley-dweller;la vallata=大山谷=broad valley
it|g_collis|collinare=丘陵的=hilly;la collina=小山=hill;il Colle=意大利总统府=the Quirinal
it|g_palud|paludoso=沼泽的=marshy;il paludismo=疟疾=malaria;impaludare=变成沼泽=to become swampy
it|g_nebul|nebbioso=多雾的=foggy;la nebulosa=星云=nebula;nebuloso=模糊的=nebulous
it|custod|custodire=看守=to guard;la custodia=保管、盒子=custody, case;il custode del museo=馆员=museum guard
it|ject|traghettare=摆渡=to ferry;il traghetto=渡轮=ferry;la traiettoria=轨迹=trajectory
it|barc|il barcaiolo=船夫=boatman;imbarcare=上船=to embark;la barchetta=小船=little boat
it|g_zatter|le Zattere=筏子码头(威尼斯)=Zattere quay;la zattera di salvataggio=救生筏=life raft;zatteriere=筏工=raftsman
it|g_latrat|latrare=吠=to bark;il latratore=狂吠者=barker;latrante=吠叫的=barking
it|g_gul|goloso=贪吃的=greedy;la golosità=馋=gluttony;la golena?=河滩=floodplain
it|g_ungu|l'unghiata=抓痕=scratch;unghiato=有爪的=clawed;lo smalto per unghie=指甲油=nail polish
it|g_caud|codardo=胆小的=cowardly;la coda di cavallo=马尾辫=ponytail;fare la coda=排队=to queue
it|g_pell|la pelletteria=皮具=leather goods;la pellicola=薄膜、胶片=film;la pelliccia=毛皮大衣=fur coat
it|g_belu|belluino=兽性的=bestial;la belva feroce=猛兽=wild beast;imbelvirsi=变凶=to turn savage
it|g_drac|il dragone=龙、龙骑兵=dragon, dragoon;draconiano=严酷的=draconian;la dragoncella=龙蒿=tarragon
it|g_gigant|gigantesco=巨大的=gigantic;il gigantismo=巨人症=gigantism;giganteggiare=高耸=to tower
it|g_nymph|la ninfea=睡莲=water lily;il ninfeo=宁芙泉殿=nymphaeum;ninfale=仙女的=nymph-like
it|turb|turbare=扰乱=to disturb;il turbamento=不安=agitation;turbolento=动荡的=turbulent
it|obliv|obliare=遗忘=to forget;l'oblioso?=健忘的=forgetful;obliterare?=抹去、打票=to obliterate, to stamp
it|g_rivus|il ruscello=小溪=brook;derivare=派生=to derive;il rivale=对手=rival
it|g_lac|il laghetto=小湖=pond;lacustre=湖泊的=lacustrine;la laguna=潟湖=lagoon
it|g_gorg|gorgogliare=汩汩作响=to gurgle;il gorgheggio=颤音=trill;ingorgare=堵塞=to clog
it|g_gutt|gocciolare=滴=to drip;il gocciolio=滴答=dripping;la gotta=痛风=gout
it|g_umor|umido=湿的=damp;l'umidità=湿度=humidity;l'umorismo=幽默=humour
it|g_ard|ardente=热烈的=ardent;ardere=燃烧=to burn;l'arsura=灼热=scorching heat
it|cal|caldo=热的=hot;il calore=热量=heat;la caloria=卡路里=calorie
it|g_sulf|solforico=硫的=sulfuric;solfatara=硫质喷气孔=solfatara;zolfanello=火柴=match
it|g_sit|assetato=口渴的=thirsty;dissetare=解渴=to quench thirst;la sete di potere=权力欲=thirst for power
it|g_fames|affamato=饥饿的=starving;la carestia?=—=—;famelico=饥饿的=ravenous
it|g_cupp|la coppetta=小杯=small cup;la coppa del mondo=世界杯=World Cup;la cupola=圆顶=dome
it|g_potio|potabile=可饮用的=drinkable;la pozione magica=魔药=magic potion;il pozzo?=—=—
it|g_limus|limaccioso=泥泞的=muddy;la limonite?=—=—;il limo fluviale=河泥=river silt
it|g_murmur|mormorare=低语=to murmur;la mormorazione=流言=gossip;il mormorio del vento=风声=rustle of wind
it|g_carcer|carcerario=监狱的=prison;incarcerare=监禁=to imprison;scarcerare=释放=to release
it|g_caten|la catenella=细链=chain;incatenare=锁住=to chain;scatenare=放开=to unleash
it|g_vincl|vincolare=约束=to bind;vincolante=有约束力的=binding;svincolare=解除=to release
it|test|testimoniare=作证=to testify;la testimonianza=证词=testimony;il testamento=遗嘱=will
it|caus|causare=引起=to cause;la causalità=因果=causality;accusare=指控=to accuse
it|super|superbo=傲慢的、宏伟的=proud, superb;superiore=上面的=upper;superare=超过=to overcome
it|miser|misero=悲惨的=wretched;la miseria=贫困=poverty;misericordioso=慈悲的=merciful
it|g_clem|clemente=宽仁的=clement;inclemente=恶劣的=inclement;Clemente=克雷芒(名)=Clement
it|prec|pregare=祈祷=to pray;la preghiera=祈祷=prayer;precario=不稳定的=precarious
it|g_templ|il templare=圣殿骑士=Templar;contemplare=凝视=to contemplate;la contemplazione=沉思=contemplation
it|g_altar|l'altare maggiore=主祭坛=high altar;la pala d'altare=祭坛画=altarpiece;altarino=小神龛=small shrine
it|g_thesaur|il tesoriere=司库=treasurer;tesoreggiare=积攒=to hoard;la tesoreria=国库=treasury
it|g_diadem|diademato=戴冠的=diademed;la tiara?=三重冕=tiara;il cerchietto?=头箍=hairband
it|g_numen|numinoso=神圣可畏的=numinous;il nume tutelare=守护神=tutelary god;annuire=点头=to nod
it|g_amar|l'amarezza=苦涩=bitterness;amareggiare=使苦恼=to embitter;l'amarena=酸樱桃=sour cherry
it|g_moll|la molla=弹簧=spring;il mollusco=软体动物=mollusc;ammollire=使软=to soften
it|g_bland|blandire=奉承=to coax;la blandizia=甜言蜜语=blandishment;blandamente=温和地=mildly
it|stup|stupido=愚蠢的=stupid;stupire=使惊讶=to amaze;stupefacente=惊人的、毒品=amazing, drug
it|g_retro|retrocedere=后退=to retreat;retrogrado=倒退的=retrograde;il retrovisore=后视镜=rear-view mirror
it|tourn|tornare=回来=to return;il torneo=比赛=tournament;il tornio=车床=lathe
it|g_obscur|oscuro=暗的=dark;oscurare=使变暗=to darken;l'oscurantismo=蒙昧主义=obscurantism
it|g_pat|paziente=耐心的、病人=patient;impaziente=不耐烦的=impatient;la passione=激情=passion
it|g_frett|frettoloso=仓促的=hasty;affrettarsi=赶紧=to hurry;in fretta=匆匆=in a hurry
it|g_aetern|eterno=永恒的=eternal;eternare=使不朽=to immortalize;la Città Eterna=永恒之城=the Eternal City
it|g_element|elementare=基本的=elementary;la scuola elementare=小学=primary school;gli elementi=元素=elements
it|g_laur|il laureato=大学毕业生=graduate;la laurea=学位=degree;l'alloro poetico=桂冠=poet's laurel
it|g_praem|premiare=颁奖=to award;la premiazione=颁奖礼=prize-giving;premiato=获奖的=award-winning
it|g_vat|il vaticinio=预言=prophecy;vaticinare=预言=to prophesy;il Vaticano=梵蒂冈("先知之山"?存疑)=Vatican (disputed)
es|mujer|mujeriego=好色的=womanizing;la mujercita=小女人=little woman;la mujer fatal=红颜祸水=femme fatale
es|g_famul|familiar=熟悉的、亲属=familiar, relative;familiarizarse=熟悉=to get used to;la familia real=王室=royal family
es|vient|ventoso=多风的=windy;la ventisca=暴风雪=blizzard;el ventilador=电扇=fan
es|g_ola|el oleaje=海浪=swell;la ola de calor=热浪=heatwave;la ola mexicana=人浪=Mexican wave
es|g_rem|remar=划船=to row;el remero=桨手=rower;la trirreme=三列桨战船=trireme
es|mur|la muralla=城墙=wall;amurallar=筑墙=to wall in;el murete=矮墙=low wall
es|g_turr|el torreón=大塔=keep;la torreta=小塔=turret;torrear=筑塔=to build towers
es|g_saal|el salón=大厅=hall;la salita=小客厅=parlour;la sala de espera=候车室=waiting room
es|mensa|la mesita=小桌=small table;el mesero=服务员(拉美)=waiter;la sobremesa=饭后闲聊=after-dinner chat
es|sed|la sede=所在地=seat, headquarters;sentarse=坐下=to sit down;el sillón=扶手椅=armchair
es|ventan|la ventanilla=窗口=ticket window;el ventanal=大窗=large window;la ventanita=小窗=little window
es|g_column|la columnata=柱廊=colonnade;el columnista=专栏作家=columnist;la columna vertebral=脊柱=spine
es|g_jard|el jardinero=园丁=gardener;la jardinería=园艺=gardening;el jardín de infancia=幼儿园=kindergarten
es|g_font|la fontana=喷泉(雅)=fountain;el fontanero=水管工=plumber;la fuentecilla=小泉=little spring
es|g_marmor|marmóreo=大理石的=marble;el marmolista=大理石匠=marble mason;marmolado=大理石纹的=marbled
es|pict|pintar=画=to paint;el pintor=画家=painter;pintoresco=如画的=picturesque
es|g_banc|el banco=长凳、银行=bench, bank;la banca=银行业=banking;la bancarrota=破产=bankruptcy
es|espad|el espadachín=剑客=swordsman;el pez espada=剑鱼=swordfish;las espadas=宝剑花色=swords (cards)
es|g_anul|el anular=无名指=ring finger;anillado=环状的=ringed;los anélidos=环节动物=annelids
es|g_gemm|la gemología=宝石学=gemmology;el gemólogo=宝石学家=gemmologist;la yema=芽、蛋黄=bud, yolk
es|g_arca|arcano=神秘的=arcane;el arcón=大箱=large chest;el Arca de Noé=挪亚方舟=Noah's Ark
es|papel|la papelería=文具店=stationer's;el papeleo=文书工作=paperwork;empapelar=贴墙纸=to wallpaper
es|palabr|la palabrota=脏话=swearword;apalabrar=口头约定=to agree verbally;la palabrería=空话=empty talk
es|g_consul|aconsejar=建议=to advise;el consejero=顾问=adviser;el cónsul=领事=consul
es|g_tenebr|tenebroso=阴暗的=gloomy;el tenebrismo=暗色调主义=tenebrism;entenebrecer=使变暗=to darken
es|ví|viajar=旅行=to travel;el viaje=旅程=journey;desviar=改道=to divert
es|g_silent|silencioso=安静的=silent;silenciar=使沉默=to silence;el silenciador=消音器=silencer
es|tort|torcer=拧=to twist;la tortura=酷刑=torture;tortuoso=曲折的=tortuous
es|g_roc|rocoso=多岩的=rocky;el roquedal=岩地=rocky ground;la Roca de Gibraltar=直布罗陀巨岩=Rock of Gibraltar
es|g_labyr|laberíntico=迷宫般的=labyrinthine;el dédalo?=迷宫=maze;la laberintitis=内耳炎=labyrinthitis
es|g_izquierd|la izquierda=左手、左派=left hand, the Left;izquierdista=左翼的=left-wing;el zurdo?=左撇子=left-hander
es|despu|después de=在…之后=after;el después=将来=the future;pues=那么=well, then
es|g_intus|el intestino=肠=intestine;adentro=向里=inside;adentrarse=深入=to go deep into
es|orej|la orejera=护耳=earmuff;orejudo=大耳朵的=big-eared;el zarcillo?=—=—
es|oj|el ojal=扣眼=buttonhole;ojear=浏览=to glance at;el anteojo=望远镜=spyglass
es|cuerp|corporal=身体的=bodily;el corpiño=胸衣=bodice;la corporación=公司=corporation
es|boc|el bocado=一口=mouthful;el bocazas=大嘴巴=bigmouth;la bocina?=喇叭=horn;desembocar=流入=to flow into
es|g_nas|nasal=鼻的=nasal;las narices=鼻孔=nostrils;el narigón=大鼻子=big nose
es|g_brach|el brazalete=手镯=bracelet;abrazar=拥抱=to hug;el abrazo=拥抱=hug
es|g_capill|la cabellera=长发=head of hair;capilar=毛细的=capillary;el cabello de ángel=天使发(南瓜酱)=angel hair
es|sangr|sangriento=血腥的=bloody;la sangría=放血、桑格利亚酒=bloodletting, sangria;sangrar=流血=to bleed
es|espírit|espiritual=精神的=spiritual;inspirar=启发=to inspire;respirar=呼吸=to breathe
es|g_taur|el torero=斗牛士=bullfighter;la tauromaquia=斗牛=bullfighting;el toril=牛栏=bull pen
es|leo|la leona=母狮=lioness;el leoncillo=幼狮=lion cub;leonino=狮子的=leonine
es|lup|la loba=母狼=she-wolf;el lobezno=幼狼=wolf cub;lupino=狼的=lupine
es|serp|serpentear=蜿蜒=to wind;el serpentín=蛇管=coil;serpenteante=蜿蜒的=winding
es|g_aquil|aguileño=鹰钩的=aquiline;el aguilucho=小鹰=eaglet;el águila real=金雕=golden eagle
es|perr|la perra=母狗=bitch;la perrera=狗舍=kennel;el perrito=小狗=puppy
es|g_catt|el gatito=小猫=kitten;la gata=母猫=she-cat;gatear=爬行=to crawl
es|g_urs|la osa=母熊=she-bear;el osezno=小熊=bear cub;la Osa Mayor=大熊座=Great Bear
es|g_jabal|la jabalina=母野猪=wild sow;el jabato=小野猪=young boar;el jabalí verrugoso=疣猪=warthog
es|g_cerv|la cierva=母鹿=hind;el cervato=小鹿=fawn;la cerveza?=—=—
es|g_vacc|el vaquero=牛仔=cowboy;la vacuna=疫苗=vaccine;vacuno=牛的=bovine
es|g_ovis|ovino=羊的=ovine;el ovillo?=线团=ball of yarn;la ovejuela=小羊=little sheep
es|g_capr|el cabrito=小山羊=kid;el cabrero=牧羊人=goatherd;el capricho=任性=whim
es|g_cerd|la cerda=母猪、鬃毛=sow, bristle;el cerdito=小猪=piglet;cerdoso=多鬃毛的=bristly
es|g_raton|la rata=大鼠=rat;la ratonera=捕鼠器=mousetrap;el ratoncito Pérez=牙齿仙鼠=tooth mouse
es|g_ran|el renacuajo?=蝌蚪=tadpole;la ranita=小青蛙=little frog;el ranúnculo=毛茛=buttercup
es|g_api|la apicultura=养蜂=beekeeping;el apicultor=养蜂人=beekeeper;el abejorro=熊蜂=bumblebee
es|g_pelo|pelear=打斗=to fight;el peleador=斗士=fighter;el pelo=毛发=hair
es|g_lanc|lanzar=投掷=to throw;el lanzamiento=发射=launch;el lancero=枪骑兵=lancer
es|g_scut|el escudero=侍从=squire;escudar=保护=to shield;el escudo de armas=纹章=coat of arms
es|g_helm|el yelmo de Mambrino=曼布里诺头盔(《堂吉诃德》)=Mambrino's helmet;el almete?=头盔=armet;el helmo?=—=—
es|g_flech|flechar=射箭、一见钟情=to shoot, to smite;el flechazo=一见钟情=love at first sight;el flechero=弓箭手=archer
es|g_inimic|la enemistad=敌意=enmity;enemistarse=结怨=to fall out;el enemigo público=公敌=public enemy
es|sold|la soldada=军饷=pay;el soldadito=小兵=little soldier;soldar=焊接=to solder
es|fuert|la fortaleza=堡垒、坚毅=fortress, strength;fortalecer=加强=to strengthen;el esfuerzo=努力=effort
es|pequeñ|la pequeñez=渺小=smallness;empequeñecer=缩小=to diminish;el pequeñín=小不点=little one
es|glor|glorioso=光荣的=glorious;glorificar=颂扬=to glorify;la vanagloria=虚荣=vainglory
es|ferr|el ferrocarril=铁路=railway;la herradura=马蹄铁=horseshoe;la ferretería=五金店=hardware store
es|g_quinqu|quince=十五=fifteen;cincuenta=五十=fifty;el quinteto=五重奏=quintet
es|g_sex|dieciséis=十六=sixteen;sesenta=六十=sixty;el sexteto=六重奏=sextet
es|sept|setenta=七十=seventy;septiembre=九月=September;séptimo=第七=seventh
es|g_novem|noventa=九十=ninety;noviembre=十一月=November;noveno=第九=ninth
es|dec2|décimo=第十=tenth;decimal=十进制的=decimal;la decena=十个=ten or so
es|blanc|blanquear=漂白=to whiten;la blancura=洁白=whiteness;Casablanca=卡萨布兰卡=Casablanca
es|negr|negruzco=发黑的=blackish;ennegrecer=变黑=to blacken;la negrura=黑暗=blackness
es|verd|verdoso=发绿的=greenish;la verdura=蔬菜=vegetables;reverdecer=返青=to turn green again
es|g_azur|azulado=发蓝的=bluish;el azulejo=瓷砖=tile;azular=染蓝=to dye blue
es|g_purpur|purpúreo=紫色的=purple;purpurino=紫红的=purplish;el purpurado=红衣主教=cardinal
es|felic|la felicidad=幸福=happiness;felicitar=祝贺=to congratulate;infeliz=不幸的=unhappy
es|g_init|iniciar=开始=to begin;la iniciativa=倡议=initiative;el iniciado=入门者=initiate
es|g_semper|para siempre=永远=forever;siempreviva=长生草=houseleek;sempiterno=永恒的=everlasting
es|g_numquam|nunca jamás=永不=never ever;el País de Nunca Jamás=梦幻岛=Neverland;nunca más=再也不=never again
es|g_heri|anteayer=前天=the day before yesterday;ayer noche=昨晚=last night;el ayer=往昔=the past
es|mus|musical=音乐的=musical;el músico=音乐家=musician;el museo=博物馆=museum
es|g_lyr|lírico=抒情的=lyrical;la lírica=抒情诗=lyric poetry;el lirismo=抒情性=lyricism
es|g_chord|el cordel=细绳=string;acordar=约定、调音=to agree, to tune;el cordón=绳子=cord
es|g_art|el artista=艺术家=artist;el artesano=工匠=craftsman;artificial=人造的=artificial
es|g_flaut|el flautista=长笛手=flautist;la flauta dulce=竖笛=recorder;aflautado=尖细的=fluty
es|g_tambur|tamborilear=敲击=to drum;el tamboril=小鼓=small drum;el tamborilero=鼓手=drummer
es|g_scen|el escenario=舞台、场景=stage, setting;escénico=舞台的=scenic;la escenografía=舞台设计=set design
es|g_theatr|teatral=戏剧的=theatrical;el anfiteatro=圆形剧场=amphitheatre;la teatralidad=戏剧性=theatricality
es|silv|selvático=林中的=sylvan;salvaje=野生的=wild;silvestre=野生的=wild
es|árbol|la arboleda=树林=grove;arbóreo=树的=arboreal;el arbusto=灌木=shrub
es|g_ech|la ecografía=超声检查=ultrasound;hacerse eco=呼应=to echo;el ecosonda=回声测深仪=echo sounder
es|g_taed|la tea=松明=pine torch;atizar?=—=—;la teada?=松脂火=resinous fire
es|g_ros|el rosal=玫瑰丛=rosebush;rosado=粉红的=pink;el rosario=念珠=rosary
es|g_lili|el lirio de los valles=铃兰=lily of the valley;lirio azul=蓝鸢尾=blue iris;el liliáceo=百合科=liliaceous
es|herb|herboso=长草的=grassy;el herbolario=草药商=herbalist;herbívoro=食草的=herbivorous
es|g_prat|la pradera=草原=prairie;el Museo del Prado=普拉多博物馆=Prado Museum;el pradal=草地=meadow
es|g_viper|viperino=毒蛇般的=viperish;la lengua viperina=毒舌=viper's tongue;la víbora cornuda=角蝰=horned viper
es|g_venen|venenoso=有毒的=poisonous;envenenar=下毒=to poison;el envenenamiento=中毒=poisoning
es|gaud|gozar=享受=to enjoy;gozoso=欢乐的=joyful;el regocijo=喜悦=rejoicing
es|lacrim|lagrimear=流泪=to water;lacrimal=泪的=lacrimal;lacrimógeno=催泪的=tear-inducing
es|g_luctus|luctuoso=悲惨的=mournful;enlutado=穿丧服的=in mourning;el luto oficial=官方哀悼=official mourning
es|g_funer|fúnebre=葬礼的=funereal;funesto=致命的=fatal;la funeraria=殡仪馆=funeral home
es|sepul|sepultar=埋葬=to bury;la sepultura=坟墓=grave;el sepulturero=掘墓人=gravedigger
es|g_ciner|Cenicienta=灰姑娘=Cinderella;el cenicero=烟灰缸=ashtray;ceniciento=灰色的=ashen
es|g_infer|inferior=下面的=lower;el infierno=地狱=hell;infernal=地狱般的=infernal
es|g_imper|el emperador=皇帝=emperor;imperial=帝国的=imperial;el imperativo=命令式=imperative
es|g_thron|destronar=废黜=to dethrone;el heredero al trono=王储=heir to the throne;entronizar=拥立=to enthrone
es|g_scept|el cetro real=王杖=royal sceptre;empuñar el cetro=掌权=to wield the sceptre;cetrino?=—=—
es|crypt|la cripta=地下墓室=crypt;críptico=隐晦的=cryptic;grotesco=怪诞的=grotesque
es|g_abyss|abismal=深渊般的=abysmal;abismarse=陷入=to sink into;los abismos=深渊=the depths
es|g_vall|la vaguada?=谷底=valley floor;Valladolid?=巴利亚多利德=Valladolid;el vallecito=小山谷=little valley;valle abajo=顺谷而下=down the valley
es|g_stagn|estancarse=停滞=to stagnate;el estancamiento=停滞=stagnation;estanco=密封的、烟草店=watertight, tobacconist
es|g_pantan|pantanoso=沼泽的=marshy;empantanarse=陷入泥潭=to get bogged down;el pantano de agua=水库=reservoir
es|g_nebul|neblina=薄雾=mist;nebuloso=模糊的=nebulous;la nebulosa=星云=nebula
es|custod|custodiar=看守=to guard;la custodia=监护、圣体匣=custody, monstrance;el custodio del museo=馆员=museum guard
es|g_bals|balsear=筏渡=to ferry by raft;el balsero=筏民=rafter;la madera de balsa=轻木=balsa wood
es|g_latrat|ladrar=吠=to bark;el ladrador=吠叫者=barker;perro ladrador, poco mordedor=会叫的狗不咬人=barking dogs seldom bite
es|g_garg|la gárgara=漱口=gargle;gargarizar=漱口=to gargle;la gárgola=滴水兽=gargoyle
es|g_ungu|la uñeta=拨片=plectrum;el uñero=甲沟炎=ingrown nail;el ungüento?=药膏?=—
es|g_caud|la coleta=马尾辫=ponytail;hacer cola=排队=to queue;el colofón?=—=—
es|g_pell|el pellejo=兽皮=hide;la película=薄膜、电影=film;la peletería=皮货店=furrier's
es|g_best|bestial=兽性的=bestial;la bestialidad=兽行=brutality;el bestiario=动物寓言集=bestiary
es|g_drac|draconiano=严酷的=draconian;el dragón de Komodo=科莫多龙=Komodo dragon;el dragonero=龙血树=dragon tree
es|g_gigant|gigantesco=巨大的=gigantic;el gigantismo=巨人症=gigantism;la gigantona=巨人偶=giant figure
es|g_nymph|el nenúfar?=—=—;la ninfa del bosque=林中仙女=wood nymph;ninfal=若虫的=nymphal
es|turb|turbar=扰乱=to disturb;turbulento=动荡的=turbulent;la turbina=涡轮=turbine
es|g_arrug|el arroyuelo=小溪=rivulet;arroyar=冲出沟=to gully;el arroyo seco=干河床=dry gully
es|g_lac|lacustre=湖泊的=lacustrine;la laguna=潟湖=lagoon;el lago Titicaca=的的喀喀湖=Lake Titicaca
es|g_gutt|gotear=滴=to drip;la gotera=漏雨=leak;el cuentagotas=滴管=dropper
es|g_umor|húmedo=湿的=damp;la humedad=湿度=humidity;el humorista=幽默作家=humorist
es|g_ard|ardiente=热烈的=ardent;arder=燃烧=to burn;el ardid?=—=—
es|g_sulf|sulfúrico=硫的=sulfuric;azufrado=含硫的=sulfured;el sulfato=硫酸盐=sulfate
es|g_sit|sediento=口渴的=thirsty;la sed de venganza=复仇心=thirst for revenge;saciar la sed=解渴=to quench thirst
es|g_fames|hambriento=饥饿的=hungry;la hambruna=饥荒=famine;famélico=饿坏的=famished
es|g_cupp|la copita=小杯=small glass;la Copa del Mundo=世界杯=World Cup;la cúpula=圆顶=dome
es|g_potio|potable=可饮用的=drinkable;el potaje?=浓汤=stew;la pócima?=药水=brew
es|g_limus|limoso=多泥的=silty;el légamo?=淤泥=slime;el limo del Nilo=尼罗河淤泥=Nile silt
es|g_murmur|murmurar=低语、说闲话=to murmur, to gossip;la murmuración=闲话=gossip;el murmullo del agua=水声=babble
es|fund|profundo=深的=deep;profundizar=深化=to deepen;el fondo=底=bottom
es|g_carcer|carcelero=狱卒=jailer;encarcelar=监禁=to imprison;carcelario=监狱的=prison
es|g_caten|encadenar=锁住=to chain;la cadeneta=链式针=chain stitch;desencadenar=引发=to unleash
es|g_vincl|vincular=联系=to link;la vinculación=关联=link;desvincular=脱钩=to dissociate
es|test|testificar=作证=to testify;el testimonio=证词=testimony;el testamento=遗嘱=will
es|caus|causar=引起=to cause;la causalidad=因果=causality;acusar=指控=to accuse
es|lab|laborar=劳作=to toil;laborioso=勤劳的=laborious;el laboratorio=实验室=laboratory
es|super|soberbio=傲慢的、宏伟的=proud, superb;superior=上面的=upper;superar=超过=to overcome
es|miser|mísero=悲惨的=wretched;la miseria=贫困=poverty;misericordioso=慈悲的=merciful
es|g_clem|clemente=宽仁的=clement;inclemente=恶劣的=inclement;la inclemencia=恶劣天气=harshness
es|prec|la plegaria=祈祷=prayer;preces=祈祷文=prayers;precario=不稳定的=precarious
es|g_templ|el templario=圣殿骑士=Templar;contemplar=凝视=to contemplate;la contemplación=沉思=contemplation
es|g_altar|el altar mayor=主祭坛=high altar;el retablo?=祭坛画=altarpiece;el monaguillo?=—=—
es|g_thesaur|el tesorero=司库=treasurer;atesorar=珍藏=to treasure;la tesorería=国库=treasury
es|g_diadem|la tiara?=三重冕=tiara;la vincha?=头带=headband;diademado=戴冠的=diademed
es|g_numen|numinoso=神圣可畏的=numinous;el numen poético=诗兴=poetic inspiration;el numen tutelar=守护神=tutelary deity
es|g_bland|ablandar=使软化=to soften;la blandura=柔软=softness;blandir?=挥舞=to brandish
es|g_halag|halagar=奉承=to flatter;el halago=奉承话=flattery;halagüeño=令人满意的=promising
es|stup|estúpido=愚蠢的=stupid;estupefacto=惊呆的=stupefied;el estupefaciente=毒品=narcotic
es|pac|pactar=约定=to agree;el pacifismo=和平主义=pacifism;apaciguar=平息=to appease
es|g_obscur|oscuro=暗的=dark;oscurecer=变暗=to darken;el oscurantismo=蒙昧主义=obscurantism
es|g_cogit|cuidar=照顾=to look after;cuidadoso=细心的=careful;descuidar=疏忽=to neglect
es|g_pat|paciente=耐心的、病人=patient;impaciente=不耐烦的=impatient;la pasión=激情=passion
es|g_aetern|eterno=永恒的=eternal;eternizar=使持久=to drag on;eternamente=永远=eternally
es|g_element|elemental=基本的=elementary;los elementos=元素=elements;el elemento químico=化学元素=chemical element
es|g_laur|laureado=获奖的=prize-winning;la laureada=桂冠勋章=Laureate Cross;el laurel rosa=夹竹桃=oleander
es|g_praem|premiar=颁奖=to award;el premiado=获奖者=prize-winner;la premiación=颁奖礼=award ceremony
es|g_vat|el vaticinio=预言=prophecy;vaticinar=预言=to prophesy;el vate nacional=民族诗人=national bard
`;
(function tgfInstall() {
  if (typeof VOCAB === "undefined") return;
  const strip = s => s.toLowerCase().replace(/^(der|die|das|le|la|les|il|lo|gli|el|los|las)\s+/, "").replace(/^l'/, "").trim();
  const seen = {};
  TGF_RAW.trim().split("\n").forEach(line => {
    const [lang, id, list] = line.split("|");
    const p = VOCAB[lang];
    if (!p || !p.roots[id] || !list) return;
    if (!seen[lang]) { seen[lang] = new Set(); p.words.forEach(w => seen[lang].add(strip(w[0]))); }
    list.split(";").forEach(item => {
      const [word, zh, en] = item.split("=");
      /* "?=—=—" marks a candidate that was dropped as not truly same-root */
      if (!word || word.includes("?") || zh === "—" || seen[lang].has(strip(word))) return;
      p.words.push([word, zh, en, id]);
      seen[lang].add(strip(word));
    });
    p._norm = false; p._rx = null; p._tgIdx = null;
  });
})();
