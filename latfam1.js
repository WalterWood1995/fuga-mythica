/* =====================================================
   FUGA MYTHICA — LATFAM: Latin derivative families (Chapter I)
   key -> [[latinWord, partsZh, partsEn, glossZh, glossEn, modernHeir], ...]
   表格优先显示拉丁语衍生词;最后一列是它的现代后代(彩蛋)。
   ===================================================== */
const LATFAM = {
  /* ---- C1 L1 ---- */
  pater: [
    ["paternus","patern(父)+ -us(…的)","patern(father)+ -us(adj)","父亲的","fatherly","paternal"],
    ["patronus","patr(父)+ -onus(如…之人)","patr + -onus(one like)","保护人=如父者","protector, patron","patron"],
    ["patria","patr(父)+ -ia(之地)","patr + -ia(land)","祖国=父辈之地","fatherland","patriot"]],
  mater: [
    ["maternus","matern(母)+ -us(…的)","matern(mother)+ -us","母亲的","motherly","maternal"],
    ["matrona","matr(母)+ -ona(尊称)","matr + -ona","主妇;贵妇","married lady","matron"],
    ["materia","mater(母)+ -ia","mater + -ia","母质→材料!","mother-stuff → matter","matter, material"]],
  filius: [
    ["filiolus","fili(儿)+ -olus(小)","fili + -olus(little)","小儿子;爱子","dear little son",""],
    ["filialis","fili(子女)+ -alis(…的)","fili + -alis","子女的","of a child","filial"]],
  filia: [
    ["filiola","fili(女)+ -ola(小)","fili + -ola(little)","小女儿;爱女","dear little daughter",""],
    ["filialis","fili(子女)+ -alis(…的)","fili + -alis","子女的","of a child","filial"]],
  rex: [
    ["regalis","reg(王)+ -alis(…的)","reg(king)+ -alis","王的;华贵的","kingly","regal, royal"],
    ["regnum","reg(统治)+ -num(名词尾)","reg + -num","王国","kingdom","reign"],
    ["regere","reg(统治)+ -ere(动词尾)","reg + -ere(verb)","统治;引导","to rule","direct"]],
  regina: [
    ["regnare","regn(王国)+ -are(动词尾)","regn + -are","为王;统治","to reign","reign"],
    ["regia","reg(王)+ -ia(之所)","reg + -ia(place)","王宫","royal palace",""]],
  puer: [
    ["puerilis","puer(孩童)+ -ilis(…的)","puer + -ilis","孩子气的","childish","puerile"],
    ["pueritia","puer(孩童)+ -itia(名词尾)","puer + -itia","童年","boyhood",""]],
  puella: [
    ["puellaris","puell(少女)+ -aris(…的)","puell + -aris","少女的","girlish",""]],
  femina: [
    ["femineus","femin(女)+ -eus(…的)","femin + -eus","女性的","womanly","feminine"],
    ["femella","fem(女)+ -ella(小)","fem + -ella(little)","小女子","little woman","female"]],
  vir: [
    ["virilis","vir(男)+ -ilis(…的)","vir(man)+ -ilis","男子汉的","manly","virile"],
    ["virtus","vir(男)+ -tus(名词尾)","vir + -tus","男子气概→美德","manliness → virtue","virtue"]],
  frater: [
    ["fraternus","fratern(兄弟)+ -us(…的)","fratern + -us","兄弟的","brotherly","fraternal"],
    ["fraternitas","fratern(兄弟)+ -itas(状态)","fratern + -itas","手足情;兄弟会","brotherhood","fraternity"]],
  soror: [
    ["sororius","soror(姐妹)+ -ius(…的)","soror + -ius","姐妹的","sisterly","sorority"]],
  amicus: [
    ["amicitia","amic(朋友)+ -itia(名词尾)","amic + -itia","友谊","friendship",""],
    ["amare","am(爱)+ -are(动词尾)","am(love)+ -are","去爱","to love","amateur"],
    ["inimicus","in(不)+ imicus(朋友)","in(not)+ imicus","敌人=非友","enemy = un-friend","enemy"]],
  populus: [
    ["popularis","popul(人民)+ -aris(…的)","popul + -aris","人民的;受欢迎的","of the people","popular"],
    ["publicus","publ(人民)+ -icus(…的)","publ + -icus","公共的","public","public"]],
  deus: [
    ["divinus","div(神)+ -inus(…的)","div(god)+ -inus","神圣的","divine","divine"],
    ["divus","div(神)+ -us","div + -us","神化的(皇帝)","deified","diva"]],
  dea: [
    ["divina","div(神)+ -ina(阴性…的)","div + -ina","女神的;神圣的(她)","divine (she)","diva"]],
  heros: [
    ["heroicus","hero(英雄)+ -icus(…的)","hero + -icus","英雄的","heroic","heroic"],
    ["herois","hero(英雄)+ -is(阴性)","hero + -is(fem.)","女英雄","heroine","heroine"]],
  nomen: [
    ["nominare","nomin(名)+ -are(动词尾)","nomin + -are","命名;提名","to name","nominate"],
    ["cognomen","co(附加)+ gnomen(名)","co + gnomen","别号;家族名","surname",""],
    ["nominalis","nomin(名)+ -alis(…的)","nomin + -alis","名义上的","of names","nominal"]],
  familia: [
    ["familiaris","famili(家)+ -aris(…的)","famili + -aris","家里的→熟悉的","of the household","familiar"]],
  domus: [
    ["domesticus","dom(家)+ -esticus(…的)","dom + -esticus","家里的","of the home","domestic"],
    ["dominus","dom(家)+ -inus(之主)","dom + -inus(master)","一家之主","master","dominate"],
    ["domicilium","dom(家)+ -icilium","dom + -icilium","住所","dwelling","domicile"]],
  /* ---- C1 L2 ---- */
  navis: [
    ["navigare","nav(船)+ ig(驾)+ -are","nav + ig(drive)+ -are","航行","to sail","navigate"],
    ["navalis","nav(船)+ -alis(…的)","nav + -alis","船的;海军的","naval","naval"],
    ["navicula","nav(船)+ -icula(小)","nav + -icula(little)","小船","little boat",""]],
  aqua: [
    ["aquaticus","aqu(水)+ -aticus(…的)","aqu + -aticus","水生的","of water","aquatic"],
    ["aquarius","aqu(水)+ -arius(管…的)","aqu + -arius","管水人;水瓶座","water-carrier","Aquarius"],
    ["aquaeductus","aquae(水的)+ ductus(引道)","aquae + ductus","引水渠","water-leader","aqueduct"]],
  mare: [
    ["marinus","mar(海)+ -inus(…的)","mar + -inus","海的","of the sea","marine"],
    ["maritimus","mar(海)+ -itimus(靠…的)","mar + -itimus","滨海的","by the sea","maritime"]],
  ventus: [
    ["ventosus","vent(风)+ -osus(多…的)","vent + -osus(full of)","多风的","windy",""],
    ["ventilare","vent(风)+ -ilare(动词尾)","vent + -ilare","扇风;通风","to fan","ventilate"]],
  caelum: [
    ["caelestis","cael(天)+ -estis(…的)","cael + -estis","天上的","heavenly","celestial"],
    ["caeruleus","cael(天)+ -uleus(色)","cael + -uleus(color)","天蓝色的","sky-blue","cerulean"]],
  stella: [
    ["stellatus","stell(星)+ -atus(布满…的)","stell + -atus","布满星辰的","starred",""],
    ["stellifer","stelli(星)+ fer(带)","stelli + fer(bearing)","带星的","star-bearing",""]],
  sol: [
    ["solaris","sol(日)+ -aris(…的)","sol + -aris","太阳的","of the sun","solar"],
    ["solstitium","sol(日)+ stitium(驻停)","sol + stitium(standing)","至日","sun-standing","solstice"]],
  luna: [
    ["lunaris","lun(月)+ -aris(…的)","lun + -aris","月亮的","of the moon","lunar"],
    ["lunaticus","lun(月)+ -aticus(受…影响)","lun + -aticus","月癫的","moon-struck","lunatic"]],
  nauta: [
    ["nauticus","naut(水手)+ -icus(…的)","naut + -icus","航海的","nautical","nautical"],
    ["navigatio","navig(航行)+ -atio(名词尾)","navig + -atio","航行;航程","a sailing","navigation"]],
  insula: [
    ["insulanus","insul(岛)+ -anus(人)","insul + -anus(person)","岛民","islander",""],
    ["paeninsula","paene(几乎)+ insula(岛)","paene(almost)+ insula","半岛","almost-island","peninsula"]],
  unda: [
    ["undare","und(波)+ -are(动词尾)","und + -are","起波","to surge","undulate"],
    ["inundare","in(涌入)+ und(波)+ -are","in + und + -are","淹没","to flood","inundate"],
    ["abundare","ab(满出)+ und(波)+ -are","ab + und + -are","丰溢","to overflow","abundant"]],
  tempestas: [
    ["tempestivus","tempest(天时)+ -ivus(…的)","tempest + -ivus","合时宜的","timely",""],
    ["tempestuosus","tempest(风暴)+ -uosus(多…的)","tempest + -uosus","暴风雨的","stormy","tempestuous"]],
  portus: [
    ["opportunus","ob(朝向)+ portunus(入港的)","ob + portunus","顺风入港的→合宜的","toward-harbor → fitting","opportune"],
    ["portuosus","portu(港)+ -osus(多…的)","portu + -osus","多港湾的","rich in harbors",""]],
  terra: [
    ["terrenus","terr(地)+ -enus(…的)","terr + -enus","陆地的;尘世的","earthly","terrain"],
    ["terrestris","terr(地)+ -estris(…的)","terr + -estris","地上的","of the earth","terrestrial"],
    ["territorium","terr(地)+ -itorium(范围)","terr + -itorium","领地","territory","territory"]],
  nubes: [
    ["nubilus","nub(云)+ -ilus(…的)","nub + -ilus","多云的;阴沉的","cloudy",""],
    ["obnubere","ob(盖上)+ nubere(罩)","ob + nubere","蒙住;遮盖","to veil over",""]],
  pluvia: [
    ["pluvius","pluv(雨)+ -ius(…的)","pluv + -ius","带雨的","rainy","pluvial"],
    ["pluvialis","pluvi(雨)+ -alis(…的)","pluvi + -alis","雨水的","of rain","pluvial"]],
  remus: [
    ["remigare","rem(桨)+ ig(驱)+ -are","rem + ig + -are","划桨","to row",""],
    ["remex","rem(桨)+ -ex(操…者)","rem + -ex(worker)","桨手","rower",""]],
  velum: [
    ["velare","vel(遮布)+ -are(动词尾)","vel + -are","遮盖","to veil","veil"],
    ["revelare","re(揭开)+ vel(遮布)+ -are","re + vel + -are","揭示","to unveil","reveal"]],
  piscis: [
    ["piscari","pisc(鱼)+ -ari(动词尾)","pisc + -ari","捕鱼","to fish",""],
    ["piscator","pisc(鱼)+ -ator(从业者)","pisc + -ator","渔夫","fisherman",""],
    ["piscina","pisc(鱼)+ -ina(场所)","pisc + -ina(place)","鱼池→泳池","fish-pond → pool","piscina"]],
  iter: [
    ["itinerari","itiner(旅程)+ -ari(动词尾)","itiner + -ari","旅行","to journey","itinerant"],
    ["itinerarium","itiner(旅程)+ -arium(册)","itiner + -arium","行程录","route-book","itinerary"]],
  /* ---- C1 L3 ---- */
  porta: [
    ["porticus","port(门)+ -icus(名词尾)","port + -icus","柱廊;门廊","colonnade","portico, porch"],
    ["portula","port(门)+ -ula(小)","port + -ula(little)","小门","little gate",""]],
  ianua: [
    ["ianitor","ianu(门)+ -itor(看管人)","ianu + -itor(keeper)","看门人","door-keeper","janitor"],
    ["Ianuarius","Ianu(门神)+ -arius(月)","Ianu + -arius","一月=年之门","door-month","January"]],
  murus: [
    ["muralis","mur(墙)+ -alis(…的)","mur + -alis","墙上的","of walls","mural"]],
  turris: [
    ["turritus","turr(塔)+ -itus(有…的)","turr + -itus","有塔的;高耸的","towered","turret"]],
  aula: [
    ["aulicus","aul(宫廷)+ -icus(…的)","aul + -icus","宫廷的","of the court",""]],
  mensa: [
    ["mensula","mens(桌)+ -ula(小)","mens + -ula(little)","小桌","little table",""]],
  sella: [
    ["sedere","sed(坐)+ -ere(动词尾)","sed(sit)+ -ere","坐","to sit","sedentary"],
    ["sessio","sess(坐)+ -io(名词尾)","sess + -io","一坐;会议","a sitting","session"]],
  lucerna: [
    ["lucere","luc(光)+ -ere(动词尾)","luc(light)+ -ere","发光","to shine","lucent"],
    ["lucidus","luc(光)+ -idus(…的)","luc + -idus","明亮的;清晰的","bright, clear","lucid"]],
  fenestra: [
    ["fenestella","fenestr(窗)+ -ella(小)","fenestr + -ella(little)","小窗","little window",""]],
  tectum: [
    ["tegere","teg(盖)+ -ere(动词尾)","teg(cover)+ -ere","覆盖","to cover",""],
    ["protegere","pro(在前)+ tegere(盖)","pro + tegere","保护=前面遮挡","to cover in front","protect"],
    ["tegula","teg(盖)+ -ula(小物)","teg + -ula","瓦片","roof-tile","tile"]],
  columna: [
    ["columella","column(柱)+ -ella(小)","column + -ella(little)","小柱","little column",""]],
  statua: [
    ["statuere","statu(立)+ -ere(动词尾)","statu + -ere","设立;决定","to set up","statute"],
    ["statura","stat(站)+ -ura(名词尾)","stat + -ura","身高","standing height","stature"],
    ["status","stat(站)+ -us","stat + -us","站姿→状态","standing → state","status, state"]],
  hortus: [
    ["hortulus","hort(园)+ -ulus(小)","hort + -ulus(little)","小园子","little garden",""],
    ["hortulanus","hortul(园)+ -anus(人)","hortul + -anus","园丁","gardener",""]],
  fons: [
    ["fontanus","font(泉)+ -anus(…的)","font + -anus","泉水的","of a spring","fountain"],
    ["fonticulus","font(泉)+ -iculus(小)","font + -iculus(little)","小泉","little spring",""]],
  aurum: [
    ["aureus","aur(金)+ -eus(…质的)","aur(gold)+ -eus","金的;金币","golden","aureate"],
    ["auratus","aur(金)+ -atus(镀…的)","aur + -atus","镀金的","gilded",""],
    ["aurifex","auri(金)+ fex(制作者)","auri + fex(maker)","金匠","goldsmith",""]],
  argentum: [
    ["argenteus","argent(银)+ -eus(…质的)","argent + -eus","银的","of silver",""],
    ["argentarius","argent(银钱)+ -arius(从业者)","argent + -arius","银钱商=银行家","money-dealer, banker",""]],
  marmor: [
    ["marmoreus","marmor(大理石)+ -eus(…质的)","marmor + -eus","大理石的","of marble","marmoreal"]],
  pictura: [
    ["pingere","ping(画)+ -ere(动词尾)","ping(paint)+ -ere","绘画","to paint","paint"],
    ["pictor","pict(画)+ -or(者)","pict + -or","画家","painter","painter"],
    ["depingere","de(照样)+ pingere(画)","de + pingere","描绘","to depict","depict"]],
  servus: [
    ["servire","serv(仆)+ -ire(动词尾)","serv + -ire","服侍","to serve","serve"],
    ["servitus","serv(仆)+ -itus(状态)","serv + -itus","奴役","slavery","servitude"],
    ["conservare","con(完全)+ servare(看守)","con + servare","保存","to keep safe","conserve"]],
  convivium: [
    ["conviva","con(一起)+ viv(活/吃)+ -a(人)","con + viv + -a","同席宾客","fellow-feaster",""],
    ["vivere","viv(活)+ -ere(动词尾)","viv(live)+ -ere","活着","to live","vivid"]],
  /* ---- C1 L4 ---- */
  filum: [
    ["filamentum","fila(丝)+ -mentum(之物)","fila + -mentum","细丝","fine thread","filament"]],
  gladius: [
    ["gladiator","gladi(剑)+ -ator(使用者)","gladi + -ator","角斗士","swordsman","gladiator"],
    ["gladiolus","gladi(剑)+ -olus(小)","gladi + -olus(little)","小剑;剑兰","little sword","gladiolus"]],
  donum: [
    ["donare","don(给)+ -are(动词尾)","don(give)+ -are","赠送","to give","donate"],
    ["donatio","donat(赠)+ -io(名词尾)","donat + -io","捐赠","a giving","donation"],
    ["donator","donat(赠)+ -or(者)","donat + -or","赠予人","giver","donor"]],
  corona: [
    ["coronare","coron(冠)+ -are(动词尾)","coron + -are","加冕","to crown","coronation"],
    ["coronarius","coron(花环)+ -arius(…的)","coron + -arius","花冠的","of wreaths","coronary"]],
  anulus: [
    ["anularis","anul(环)+ -aris(…的)","anul + -aris","环状的;无名指的","ring-shaped","annular"],
    ["anellus","an(环)+ -ellus(更小)","an + -ellus(tiny)","小小环","tiny ring",""]],
  gemma: [
    ["gemmatus","gemm(宝石)+ -atus(镶…的)","gemm + -atus","镶宝石的","jewelled",""],
    ["gemmare","gemm(芽)+ -are(动词尾)","gemm(bud)+ -are","发芽;闪如宝石","to bud",""]],
  arca: [
    ["arcanus","arc(箱)+ -anus(…的)","arc(chest)+ -anus","箱底的=秘密的","chest-hidden, secret","arcane"],
    ["arcula","arc(箱)+ -ula(小)","arc + -ula(little)","小匣","little box",""]],
  clavis: [
    ["clavicula","clav(钥匙)+ -icula(小)","clav + -icula(little)","小钥匙→锁骨","little key","clavicle"],
    ["claudere","claud(关)+ -ere(动词尾)","claud(shut)+ -ere","关闭","to shut","close"],
    ["includere","in(在内)+ cludere(关)","in + cludere","关入;包含","to shut in","include"]],
  charta: [
    ["chartula","chart(纸)+ -ula(小)","chart + -ula(little)","小纸片;便条","little paper",""],
    ["chartarius","chart(纸)+ -arius(…的)","chart + -arius","纸的;文书的","of paper",""]],
  epistula: [
    ["epistularis","epistul(信)+ -aris(…的)","epistul + -aris","书信的","of letters","epistolary"]],
  liber: [
    ["libellus","lib(书)+ -ellus(小)","lib + -ellus(little)","小册子","little book","libel"],
    ["librarius","libr(书)+ -arius(从业者)","libr + -arius","抄书人;书商","book-copyist","library"]],
  verbum: [
    ["verbosus","verb(词)+ -osus(多…的)","verb + -osus(full of)","话多的","wordy","verbose"],
    ["proverbium","pro(公开)+ verbium(话)","pro + verbium","谚语","a fore-word","proverb"],
    ["adverbium","ad(附于)+ verbium(动词)","ad + verbium","副词","the word beside","adverb"]],
  consilium: [
    ["consiliarius","consili(谋)+ -arius(人)","consili + -arius","顾问","counsellor","counselor"],
    ["consulere","consul(商议)+ -ere","consul + -ere","商议;请教","to consult","consult"]],
  fides: [
    ["fidelis","fid(信)+ -elis(…的)","fid(trust)+ -elis","忠诚的","faithful","fidelity"],
    ["confidere","con(完全)+ fidere(信)","con + fidere","深信","to trust fully","confide"],
    ["perfidus","per(越过)+ fidus(信)","per(past)+ fidus","背信的","faith-breaking","perfidy"]],
  amor: [
    ["amare","am(爱)+ -are(动词尾)","am + -are","去爱","to love",""],
    ["amator","amat(爱)+ -or(者)","amat + -or","爱好者","lover","amateur"],
    ["amabilis","am(爱)+ -abilis(可…的)","am + -abilis","可爱的","lovable","amiable"]],
  cor: [
    ["cordatus","cord(心)+ -atus(有…的)","cord + -atus","有心智的","wise-hearted",""],
    ["concordia","con(同)+ cord(心)+ -ia","con + cord + -ia","同心;和睦","hearts together","concord"],
    ["misericors","miser(可怜)+ cors(心)","miser + cors","仁慈的","tender-hearted","misericord"]],
  animus: [
    ["animare","anim(气息)+ -are(动词尾)","anim + -are","赋予生气","to give breath","animate"],
    ["animal","anim(气息)+ -al(之物)","anim + -al","有气息之物=动物","breathing thing","animal"],
    ["unanimus","un(一)+ animus(心)","un(one)+ animus","一条心的","of one mind","unanimous"]],
  sapientia: [
    ["sapere","sap(品味)+ -ere(动词尾)","sap(taste)+ -ere","有味;明智","to taste, be wise",""],
    ["sapiens","sapi(明智)+ -ens(…的人)","sapi + -ens","智者","the wise one","Homo sapiens"],
    ["insipiens","in(不)+ sipiens(明智)","in(not)+ sipiens","愚人","unwise","insipid"]],
  secretum: [
    ["secernere","se(分开)+ cernere(筛)","se + cernere(sift)","筛开;分离","to set apart",""],
    ["secretarius","secret(机密)+ -arius(管…者)","secret + -arius","管密件者","keeper of secrets","secretary"]],
  auxilium: [
    ["auxiliaris","auxili(援)+ -aris(…的)","auxili + -aris","增援的","helping","auxiliary"],
    ["augere","aug(增)+ -ere(动词尾)","aug(increase)+ -ere","使增长","to increase","augment"]],
  /* ---- C1 L5 ---- */
  lux: [
    ["lucidus","luc(光)+ -idus(…的)","luc + -idus","透亮的","clear","lucid"],
    ["lucifer","luci(光)+ fer(带来)","luci + fer(bringing)","带光者=晨星","light-bringer","Lucifer"],
    ["elucidare","e(出)+ lucid(亮)+ -are","e + lucid + -are","阐明","to bring to light","elucidate"]],
  tenebrae: [
    ["tenebrosus","tenebr(暗)+ -osus(多…的)","tenebr + -osus","幽暗的","dark","tenebrous"]],
  via: [
    ["viator","via(路)+ -tor(行…者)","via + -tor","旅人","wayfarer",""],
    ["obvius","ob(迎面)+ vius(路的)","ob + vius","迎面的→显然的","in the way","obvious"],
    ["devius","de(偏离)+ vius(路的)","de + vius","偏离正道的","off-road","devious"]],
  umbra: [
    ["umbrosus","umbr(影)+ -osus(多…的)","umbr + -osus","多荫的","shady",""],
    ["umbraculum","umbr(影)+ -aculum(器具)","umbr + -aculum(tool)","凉棚;阳伞","shade-maker","umbrella"],
    ["adumbrare","ad(加上)+ umbr(影)+ -are","ad + umbr + -are","勾画轮廓","to sketch in shadow","adumbrate"]],
  silentium: [
    ["silere","sil(静)+ -ere(动词尾)","sil(be still)+ -ere","静默","to be silent","silent"],
    ["silens","sil(静)+ -ens(…的)","sil + -ens","寂静的","hushed","silent"]],
  timor: [
    ["timere","tim(怕)+ -ere(动词尾)","tim(fear)+ -ere","害怕","to fear",""],
    ["timidus","tim(怕)+ -idus(…的)","tim + -idus","胆小的","fearful","timid"]],
  ignis: [
    ["igneus","ign(火)+ -eus(…质的)","ign(fire)+ -eus","火的","fiery","igneous"],
    ["ignifer","igni(火)+ fer(带)","igni + fer(bearing)","带火的","fire-bearing",""]],
  fax: [
    ["facula","fac(火把)+ -ula(小)","fac(torch)+ -ula(little)","小火把","little torch","facula"]],
  flamma: [
    ["flammare","flamm(焰)+ -are(动词尾)","flamm + -are","燃烧","to blaze",""],
    ["inflammare","in(使起)+ flamm(焰)+ -are","in + flamm + -are","点燃;发炎","to set ablaze","inflame"],
    ["flammeus","flamm(焰)+ -eus(色的)","flamm + -eus","火色的;新娘红纱","flame-colored",""]],
  saxum: [
    ["saxeus","sax(岩)+ -eus(…质的)","sax(rock)+ -eus","岩石的","of rock",""],
    ["saxosus","sax(岩)+ -osus(多…的)","sax + -osus","多石的","rocky",""]],
  labyrinthus: [
    ["labyrintheus","labyrinth(迷宫)+ -eus(…的)","labyrinth + -eus","迷宫般的","labyrinthine","labyrinthine"]],
  angulus: [
    ["angularis","angul(角)+ -aris(…的)","angul + -aris","有角的","angular","angular"],
    ["triangulus","tri(三)+ angulus(角)","tri(three)+ angulus","三角形","three-cornered","triangle"]],
  dexter: [
    ["dexteritas","dexter(右/巧)+ -itas(名词尾)","dexter + -itas","灵巧","skill","dexterity"],
    ["dextra","dextr(右)+ -a(阴性)","dextr + -a","右手","the right hand",""]],
  sinister: [
    ["sinistra","sinistr(左)+ -a(阴性)","sinistr + -a","左手","the left hand",""]],
  ante: [
    ["antiquus","ant(前)+ -iquus(…的)","ant(before)+ -iquus","从前的;古老的","of former times","antique"],
    ["anterior","ante(前)+ -rior(更…)","ante + -rior(more)","更靠前的","more in front","anterior"],
    ["antecedere","ante(前)+ cedere(走)","ante + cedere(go)","先行","to go before","antecedent"]],
  post: [
    ["posterus","post(后)+ -erus(…的)","post + -erus","后来的","coming after","posterior"],
    ["posteritas","poster(后来)+ -itas(名词尾)","poster + -itas","后代","those after","posterity"],
    ["postponere","post(后)+ ponere(放)","post + ponere(place)","推迟","to place after","postpone"]],
  sub: [
    ["subire","sub(下)+ ire(走)","sub + ire(go)","从下走近;承受","to go under",""],
    ["subitus","sub(悄然)+ itus(来到)","sub + itus(come)","悄然而至的=突然的","come up unseen → sudden","sudden"]],
  super: [
    ["superare","super(在上)+ -are(动词尾)","super + -are","越过;胜过","to overtop",""],
    ["superbus","super(在上)+ -bus","super + -bus","自视高的=骄傲的","high-set, proud","superb"],
    ["superior","super(上)+ -ior(更…)","super + -ior(more)","更高的","higher","superior"]],
  intra: [
    ["intrare","intr(入内)+ -are(动词尾)","intr + -are","进入","to enter","enter"],
    ["introitus","intro(向内)+ itus(行走)","intro + itus(going)","入口;进场","a going-in","intro"]],
  exitus: [
    ["exire","ex(出)+ ire(走)","ex + ire(go)","走出","to go out","exit"],
    ["exitium","ex(出)+ itium(结局)","ex + itium","覆灭","a going-out → doom",""]],
  /* ---- C1 L6 ---- */
  vox: [
    ["vocare","voc(呼)+ -are(动词尾)","voc(call)+ -are","呼唤","to call","vocation"],
    ["vocalis","voc(声)+ -alis(…的)","voc + -alis","有声的;元音","voiced","vocal, vowel"],
    ["advocatus","ad(为)+ vocatus(被召来)","ad + vocatus(called)","被召来助言者=律师","one called to aid","advocate"]],
  auris: [
    ["auricula","aur(耳)+ -icula(小)","aur + -icula(little)","耳廓;小耳","little ear","auricle"],
    ["auscultare","aus(耳)+ cultare(倾听)","aus(ear)+ cultare","侧耳倾听","to listen close","auscultation"]],
  oculus: [
    ["ocellus","oc(眼)+ -ellus(小)","oc(eye)+ -ellus(little)","小眼睛;心肝宝贝","little eye, darling",""],
    ["ocularis","ocul(眼)+ -aris(…的)","ocul + -aris","眼睛的","of the eye","ocular"]],
  manus: [
    ["manica","man(手)+ -ica(之物)","man(hand)+ -ica","袖子;手铐","sleeve",""],
    ["manipulus","mani(手)+ pulus(一把)","mani + pulus","一把;一小队","a handful","manipulate"],
    ["manumittere","manu(从手)+ mittere(放出)","manu + mittere(send)","释奴=从手中放走","to free from the hand","manumission"]],
  pes: [
    ["pedester","ped(脚)+ -ester(…的)","ped(foot)+ -ester","步行的","on foot","pedestrian"],
    ["impedire","im(缚住)+ pedire(脚)","im + pedire(foot)","绊住","to shackle the feet","impede"],
    ["expedire","ex(解开)+ pedire(脚)","ex + pedire","放开脚=使畅行","to free the feet","expedite"]],
  caput: [
    ["capitalis","capit(头)+ -alis(…的)","capit + -alis","头等的;致命的","of the head","capital"],
    ["capitulum","capit(头)+ -ulum(小)","capit + -ulum(little)","小标题;章节","little head","chapter"],
    ["praeceps","prae(在前)+ ceps(头)","prae + ceps(head)","头朝前的=陡冲的","headlong","precipice"]],
  corpus: [
    ["corpusculum","corpus(体)+ -culum(小)","corpus + -culum(little)","微粒;小体","little body","corpuscle"],
    ["corporalis","corpor(体)+ -alis(…的)","corpor + -alis","身体的","bodily","corporal"]],
  os: [
    ["osculum","os(嘴)+ -culum(小)","os(mouth)+ -culum(little)","小嘴→亲吻!","little mouth → a kiss",""],
    ["orare","or(口)+ -are(动词尾)","or(mouth)+ -are","开口说;祈求","to speak, pray","orator"]],
  nasus: [
    ["nasutus","nas(鼻)+ -utus(大…的)","nas + -utus","大鼻子的;机敏毒舌的","big-nosed, sharp-witted",""]],
  digitus: [
    ["digitalis","digit(指)+ -alis(…的)","digit + -alis","手指的","of the finger","digital"],
    ["digitulus","digit(指)+ -ulus(小)","digit + -ulus(little)","小手指","little finger",""]],
  bracchium: [
    ["bracchialis","bracchi(臂)+ -alis(…的)","bracchi + -alis","手臂的","of the arm","brachial"]],
  genu: [
    ["geniculum","genu(膝)+ -culum(小)","genu + -culum(little)","小膝;茎节","little knee",""]],
  capillus: [
    ["capillaris","capill(发)+ -aris(…的)","capill + -aris","发丝般的","hair-fine","capillary"],
    ["capillatus","capill(发)+ -atus(有…的)","capill + -atus","长发的","long-haired",""]],
  dens: [
    ["dentatus","dent(齿)+ -atus(有…的)","dent + -atus","有齿的","toothed",""],
    ["dentifricium","denti(齿)+ fricium(摩擦剂)","denti + fricium(rub)","洁牙粉(古罗马已有!)","tooth-powder","dentifrice"],
    ["edentulus","e(无)+ dentulus(齿)","e(without)+ dentulus","无牙的","toothless",""]],
  lingua: [
    ["bilinguis","bi(二)+ linguis(舌)","bi + linguis","双语的","two-tongued","bilingual"],
    ["elinguis","e(无)+ linguis(舌)","e + linguis","无言的","tongue-less",""]],
  sanguis: [
    ["sanguineus","sanguin(血)+ -eus(…的)","sanguin + -eus","血的;血红的","of blood","sanguine"],
    ["exsanguis","ex(失去)+ sanguis(血)","ex + sanguis","失血的;苍白的","bloodless",""],
    ["consanguineus","con(同)+ sanguineus(血的)","con + sanguineus","同血缘的","of one blood","consanguinity"]],
  spiritus: [
    ["spirare","spir(呼吸)+ -are(动词尾)","spir(breathe)+ -are","呼吸","to breathe",""],
    ["inspirare","in(吸入)+ spirare(呼吸)","in + spirare","吸气;注入灵感","to breathe in","inspire"],
    ["respirare","re(反复)+ spirare(呼吸)","re + spirare","呼吸","to breathe again","respiration"],
    ["conspirare","con(一起)+ spirare(呼吸)","con + spirare","同气连枝=密谋","to breathe together","conspire"]],
  somnus: [
    ["somnium","somn(眠)+ -ium(名词尾)","somn + -ium","梦","a dream",""],
    ["somniare","somni(梦)+ -are(动词尾)","somni + -are","做梦","to dream",""],
    ["somnolentus","somn(眠)+ -olentus(满是…的)","somn + -olentus","昏昏欲睡的","sleep-heavy","somnolent"]],
  vita: [
    ["vitalis","vit(生命)+ -alis(…的)","vit(life)+ -alis","生命的","of life","vital"],
    ["vivere","viv(活)+ -ere(动词尾)","viv + -ere","活","to live",""],
    ["vivax","viv(活)+ -ax(善于…的)","viv + -ax","生命力强的","long-lived","vivacious"]],
  mors: [
    ["mori","mor(死)+ -i(动词尾)","mor(die)+ -i","死去","to die",""],
    ["mortalis","mort(死)+ -alis(…的)","mort + -alis","会死的;凡人","death-bound","mortal"],
    ["mortifer","morti(死)+ fer(带来)","morti + fer(bringing)","致命的","death-bringing",""]],
  /* ---- C1 L7 ---- */
  taurus: [
    ["taurinus","taur(牛)+ -inus(…的)","taur(bull)+ -inus","公牛的","of a bull","taurine"],
    ["Minotaurus","Mino(米诺斯)+ taurus(牛)","Minos + taurus","米诺斯之牛","the bull of Minos","Minotaur"]],
  leo: [
    ["leaena","le(狮)+ -aena(阴性)","le(lion)+ -aena(fem.)","母狮","lioness",""],
    ["leoninus","leon(狮)+ -inus(…的)","leon + -inus","狮子的","of a lion","leonine"]],
  lupus: [
    ["lupa","lup(狼)+ -a(阴性)","lup(wolf)+ -a","母狼(罗马之母!)","she-wolf",""],
    ["lupinus","lup(狼)+ -inus(…的)","lup + -inus","狼的","of a wolf","lupine"]],
  serpens: [
    ["serpere","serp(爬)+ -ere(动词尾)","serp(creep)+ -ere","爬行","to creep",""],
    ["serpentinus","serpent(蛇)+ -inus(…的)","serpent + -inus","蛇的;蜿蜒的","snaky","serpentine"]],
  aquila: [
    ["aquilinus","aquil(鹰)+ -inus(…的)","aquil + -inus","鹰的;鹰钩的","of an eagle","aquiline"],
    ["aquilifer","aquili(鹰旗)+ fer(执)","aquili + fer(bearing)","军团掌鹰旗手","eagle-bearer",""]],
  equus: [
    ["equa","equ(马)+ -a(阴性)","equ(horse)+ -a","母马","mare",""],
    ["eques","equ(马)+ -es(人)","equ + -es(man)","骑士;骑兵","horseman, knight","equestrian"],
    ["equitare","equit(骑)+ -are(动词尾)","equit + -are","骑马","to ride",""]],
  canis: [
    ["caninus","can(犬)+ -inus(…的)","can(dog)+ -inus","犬的;犬齿","of a dog","canine"],
    ["canicula","can(犬)+ -icula(小)","can + -icula(little)","小狗;天狼星→三伏天!","little dog; the Dog Star","canicular"]],
  felis: [
    ["felinus","fel(猫)+ -inus(…的)","fel(cat)+ -inus","猫的","of a cat","feline"]],
  avis: [
    ["avicula","av(鸟)+ -icula(小)","av(bird)+ -icula(little)","小鸟","little bird",""],
    ["aviarium","avi(鸟)+ -arium(场所)","avi + -arium(place)","鸟舍","bird-house","aviary"],
    ["auspicium","au(鸟)+ spicium(观看)","au(bird)+ spicium(watching)","观鸟占卜→吉兆","bird-watching omen","auspicious"]],
  ursus: [
    ["ursa","urs(熊)+ -a(阴性)","urs(bear)+ -a","母熊(大熊座!)","she-bear","Ursa Major"],
    ["ursinus","urs(熊)+ -inus(…的)","urs + -inus","熊的","of a bear","ursine"]],
  aper: [
    ["aprinus","apr(野猪)+ -inus(…的)","apr(boar)+ -inus","野猪的","of a boar",""]],
  cervus: [
    ["cerva","cerv(鹿)+ -a(阴性)","cerv(deer)+ -a","母鹿","hind",""],
    ["cervinus","cerv(鹿)+ -inus(…的)","cerv + -inus","鹿的","of a deer","cervine"]],
  vacca: [
    ["vaccinus","vacc(母牛)+ -inus(…的)","vacc(cow)+ -inus","母牛的(→牛痘!)","of the cow","vaccine"],
    ["vaccula","vacc(母牛)+ -ula(小)","vacc + -ula(little)","小母牛","little cow",""]],
  ovis: [
    ["ovile","ov(羊)+ -ile(圈舍)","ov(sheep)+ -ile(pen)","羊圈","sheepfold",""],
    ["ovillus","ov(羊)+ -illus(…的)","ov + -illus","绵羊的","of sheep","ovine"]],
  capra: [
    ["caper","capr(山羊)之阳性","masculine of capr(goat)","公山羊","he-goat","caper"],
    ["capella","cap(山羊)+ -ella(小)","cap + -ella(little)","小山羊;五车二星","little goat","Capella"],
    ["capreolus","capre(山羊)+ -olus(小)","capre + -olus","狍子;卷须","little wild goat",""]],
  porcus: [
    ["porcellus","porc(猪)+ -ellus(小)","porc(pig)+ -ellus(little)","小猪","piglet","porcelain!"],
    ["porcinus","porc(猪)+ -inus(…的)","porc + -inus","猪的","of pigs","porcine"]],
  mus: [
    ["musculus","mus(鼠)+ -culus(小)","mus(mouse)+ -culus(little)","小老鼠→肌肉!","little mouse → muscle","muscle"],
    ["muscipula","mus(鼠)+ cipula(捕具)","mus + cipula(catcher)","捕鼠器","mousetrap",""]],
  rana: [
    ["ranunculus","ran(蛙)+ -unculus(小小)","ran(frog)+ -unculus(tiny)","小青蛙→毛茛花!","tadpole-frog → buttercup","Ranunculus"],
    ["ranula","ran(蛙)+ -ula(小)","ran + -ula(little)","小蛙","little frog",""]],
  apis: [
    ["apicula","ap(蜂)+ -icula(小)","ap(bee)+ -icula(little)","小蜜蜂","little bee",""],
    ["apiarium","api(蜂)+ -arium(场所)","api + -arium(place)","蜂房","bee-house","apiary"]],
  monstrum: [
    ["monstrare","monstr(指示)+ -are(动词尾)","monstr(show)+ -are","指示;展示","to show",""],
    ["demonstrare","de(明白)+ monstrare(指示)","de + monstrare","论证;演示","to show fully","demonstrate"],
    ["monstruosus","monstru(怪)+ -osus(…的)","monstru + -osus","怪异的","monstrous","monstrous"]],
  /* ---- C1 L8 ---- */
  pugna: [
    ["pugnare","pugn(斗)+ -are(动词尾)","pugn(fight)+ -are","战斗","to fight",""],
    ["pugnax","pugn(斗)+ -ax(好…的)","pugn + -ax(prone to)","好斗的","combative","pugnacious"],
    ["oppugnare","ob(对着)+ pugnare(打)","ob + pugnare","攻打","to assault",""]],
  bellum: [
    ["bellator","bell(战)+ -ator(者)","bell(war)+ -ator","战士","warrior",""],
    ["bellicus","bell(战)+ -icus(…的)","bell + -icus","战争的","of war","bellicose"],
    ["rebellare","re(再)+ bellare(开战)","re + bellare","再战=造反","to war again","rebel"]],
  hasta: [
    ["hastatus","hast(矛)+ -atus(持…的)","hast(spear)+ -atus","持矛的;矛兵","spear-armed",""],
    ["hastile","hast(矛)+ -ile(杆)","hast + -ile","矛杆","spear-shaft",""]],
  scutum: [
    ["scutarius","scut(盾)+ -arius(执…者)","scut(shield)+ -arius","执盾卫士","shield-bearer",""],
    ["scutulum","scut(盾)+ -ulum(小)","scut + -ulum(little)","小盾","little shield","escutcheon"]],
  galea: [
    ["galeatus","gale(盔)+ -atus(戴…的)","gale(helmet)+ -atus","戴盔的","helmeted",""]],
  arma: [
    ["armare","arm(装备)+ -are(动词尾)","arm + -are","武装","to arm","arm"],
    ["armatura","armat(武装)+ -ura(名词尾)","armat + -ura","装备;甲胄","armor","armature"],
    ["armarium","arm(器械)+ -arium(柜)","arm + -arium(cabinet)","武器柜→衣柜","arms-chest → wardrobe","armoire"]],
  sagitta: [
    ["sagittarius","sagitt(箭)+ -arius(用…者)","sagitt(arrow)+ -arius","弓箭手;射手座","archer","Sagittarius"],
    ["sagittifer","sagitti(箭)+ fer(带)","sagitti + fer","带箭的","arrow-bearing",""]],
  arcus: [
    ["arcuatus","arcu(弓)+ -atus(成…形的)","arcu(bow)+ -atus","弓形的","bow-shaped","arcuate"]],
  hostis: [
    ["hostilis","host(敌)+ -ilis(…的)","host(enemy)+ -ilis","敌对的","of an enemy","hostile"],
    ["hostilitas","hostil(敌对)+ -itas(名词尾)","hostil + -itas","敌意","enmity","hostility"]],
  miles: [
    ["militare","milit(兵)+ -are(动词尾)","milit(soldier)+ -are","服役;作战","to soldier",""],
    ["militaris","milit(兵)+ -aris(…的)","milit + -aris","军事的","military","military"],
    ["militia","milit(兵)+ -ia(名词尾)","milit + -ia","兵役;军旅","military service","militia"]],
  fortis: [
    ["fortitudo","fort(勇)+ -itudo(名词尾)","fort(brave)+ -itudo","刚毅","courage","fortitude"],
    ["fortiter","fort(勇)+ -iter(副词尾)","fort + -iter(adv)","勇敢地","bravely",""],
    ["confortare","con(加强)+ fortare(使强)","con + fortare(strengthen)","加强→安慰","to strengthen","comfort"]],
  magnus: [
    ["magnitudo","magn(大)+ -itudo(名词尾)","magn(great)+ -itudo","大小;规模","greatness","magnitude"],
    ["magister","magis(更大)+ -ter(人)","magis(more)+ -ter","更大者=师傅/老师!","the greater one → master","master, maestro"],
    ["magnificus","magni(大)+ ficus(做的)","magni + ficus(making)","做得宏大的","grandly done","magnificent"]],
  parvus: [
    ["parvulus","parv(小)+ -ulus(更小)","parv(small)+ -ulus","幼小的;小娃","tiny, little one",""],
    ["parvitas","parv(小)+ -itas(名词尾)","parv + -itas","微小","smallness",""]],
  celer: [
    ["celeritas","celer(快)+ -itas(名词尾)","celer(swift)+ -itas","速度","swiftness","celerity"],
    ["accelerare","ac(向)+ celer(快)+ -are","ac + celer + -are","加速","to speed up","accelerate"]],
  tardus: [
    ["tarditas","tard(慢)+ -itas(名词尾)","tard(slow)+ -itas","迟缓","slowness",""],
    ["retardare","re(往回)+ tardare(放慢)","re + tardare","延缓","to slow back","retard"]],
  victoria: [
    ["vincere","vinc(胜)+ -ere(动词尾)","vinc(conquer)+ -ere","战胜","to conquer","convince"],
    ["victor","vict(胜)+ -or(者)","vict + -or","胜利者","winner","victor"],
    ["invictus","in(不)+ victus(被胜)","in(not)+ victus","不败的","unconquered","invincible"]],
  gloria: [
    ["gloriosus","glori(荣)+ -osus(满…的)","glori + -osus","光荣的","full of glory","glorious"],
    ["gloriari","glori(荣)+ -ari(动词尾)","glori + -ari","夸耀","to boast",""]],
  virtus: [
    ["virtuosus","virtu(德)+ -osus(有…的)","virtu + -osus","有德的;技艺高超的","full of virtue","virtuoso"]],
  ferrum: [
    ["ferreus","ferr(铁)+ -eus(…质的)","ferr(iron)+ -eus","铁的;铁石心肠的","of iron","ferrous"],
    ["ferramentum","ferr(铁)+ -amentum(器具)","ferr + -amentum(tool)","铁器","iron tool",""]],
  clamor: [
    ["clamare","clam(喊)+ -are(动词尾)","clam(shout)+ -are","呼喊","to shout","claim"],
    ["exclamare","ex(向外)+ clamare(喊)","ex + clamare","惊呼","to cry out","exclaim"],
    ["proclamare","pro(公开)+ clamare(喊)","pro + clamare","宣告","to cry forth","proclaim"]],
  /* ---- C1 L9 ---- */
  unus: [
    ["unicus","un(一)+ -icus(…的)","un(one)+ -icus","唯一的","one and only","unique"],
    ["unitas","un(一)+ -itas(名词尾)","un + -itas","统一;一体","oneness","unity"],
    ["universus","uni(一)+ versus(转成)","uni + versus(turned)","转成一体的=全体","turned into one","universe"]],
  duo: [
    ["dubius","du(二)+ -bius(处于…的)","du(two)+ -bius","两可的=怀疑的","of two minds","dubious"],
    ["duplex","du(二)+ plex(折)","du + plex(fold)","双重的","two-fold","duplex"],
    ["dualis","du(二)+ -alis(…的)","du + -alis","二的;双数","of two","dual"]],
  tres: [
    ["tertius","ter(三)+ -tius(第…)","ter(three)+ -tius","第三","third","tertiary"],
    ["triplex","tri(三)+ plex(折)","tri + plex(fold)","三重的","three-fold","triple"],
    ["trivium","tri(三)+ vium(路)","tri + vium(way)","三岔路口","three-ways","trivial"]],
  quattuor: [
    ["quartus","quart(四)+ -us(第…)","quart(four)+ -us","第四","fourth","quarter"],
    ["quadratus","quadr(四)+ -atus(成…形)","quadr + -atus","四方的","squared","quadrat, square"]],
  quinque: [
    ["quintus","quint(五)+ -us(第…)","quint(five)+ -us","第五(常用人名!)","fifth","quintet"],
    ["quincunx","quinc(五)+ unx(点)","quinc + unx","梅花五点阵","five-spot pattern","quincunx"]],
  sex: [
    ["sextus","sext(六)+ -us(第…)","sext(six)+ -us","第六","sixth","sextet"],
    ["sextans","sext(六)+ -ans(分之一)","sext + -ans","六分之一;六分仪","a sixth","sextant"]],
  septem: [
    ["septimus","septim(七)+ -us(第…)","septim(seven)+ -us","第七","seventh",""],
    ["septentrio","septem(七)+ trio(耕牛)","septem + trio(plough-ox)","七耕牛星=北斗→北方!","the seven plough-oxen → the North","septentrional"]],
  octo: [
    ["octavus","octav(八)+ -us(第…)","octav(eight)+ -us","第八(→屋大维!)","eighth","octave, Octavian"],
    ["October","octo(八)+ -ber(月)","octo + -ber(month)","八月(旧历)","the eighth month","October"]],
  novem: [
    ["nonus","non(九)+ -us(第…)","non(nine)+ -us","第九(→noon!)","ninth","noon"],
    ["November","novem(九)+ -ber(月)","novem + -ber","九月(旧历)","the ninth month","November"]],
  decem: [
    ["decimus","decim(十)+ -us(第…)","decim(ten)+ -us","第十","tenth","decimal"],
    ["decimare","decim(十)+ -are(动词尾)","decim + -are","十一抽杀","to take one in ten","decimate"],
    ["December","decem(十)+ -ber(月)","decem + -ber","十月(旧历)","the tenth month","December"]],
  centum: [
    ["centesimus","centesim(百)+ -us(第…)","centesim + -us","第一百;百分之一","hundredth","percent"],
    ["centurio","centuri(百人队)+ -o(长)","centuri + -o(leader)","百夫长","leader of 100","centurion"]],
  mille: [
    ["miliarium","mili(千)+ -arium(标石)","mili(thousand)+ -arium","里程碑=千步石","mile-stone","milestone"],
    ["millesimus","millesim(千)+ -us(第…)","millesim + -us","千分之一","thousandth","mill (‰)"]],
  albus: [
    ["albescere","alb(白)+ -escere(渐变)","alb(white)+ -escere(become)","渐渐变白","to whiten",""],
    ["albumen","alb(白)+ -umen(之物)","alb + -umen","蛋白","egg-white","albumen"]],
  niger: [
    ["nigrescere","nigr(黑)+ -escere(渐变)","nigr(black)+ -escere","渐渐变黑","to blacken",""],
    ["nigellus","nig(黑)+ -ellus(微)","nig + -ellus(slightly)","微黑的→黑种草","blackish","Nigella"]],
  ruber: [
    ["rubere","rub(红)+ -ere(动词尾)","rub(red)+ -ere","发红;脸红","to be red",""],
    ["rubor","rub(红)+ -or(名词尾)","rub + -or","红晕;羞愧","redness, blush",""]],
  viridis: [
    ["virere","vir(青翠)+ -ere(动词尾)","vir(be green)+ -ere","葱绿;有生机","to be green","verdant"],
    ["viridarium","virid(绿)+ -arium(场所)","virid + -arium(place)","园林","green pleasure-garden",""]],
  caeruleus: [
    ["caelum","cael(天)+ -um","cael(sky)+ -um","天空(蓝之源)","the sky","celestial"]],
  flavus: [
    ["flavescere","flav(金黄)+ -escere(渐变)","flav(golden)+ -escere","渐变金黄","to turn golden","flavescent"]],
  purpureus: [
    ["purpura","purpur(紫)+ -a","purpur + -a","紫色;紫袍","purple dye","purple"],
    ["purpuratus","purpur(紫袍)+ -atus(穿…的)","purpur + -atus","穿紫袍的=高官","purple-clad courtier",""]],
  color: [
    ["colorare","color(色)+ -are(动词尾)","color + -are","上色","to color","color"],
    ["discolor","dis(不同)+ color(色)","dis + color","异色的","of different color",""]],
  /* ---- C1 L10 ---- */
  libertas: [
    ["liber","liber(自由的)","liber(free)","自由的","free","liberal"],
    ["liberare","liber(自由)+ -are(动词尾)","liber + -are","解放","to set free","liberate"],
    ["libertus","libert(获释)+ -us(人)","libert + -us","获释奴","freedman",""]],
  felix: [
    ["felicitas","felic(幸福)+ -itas(名词尾)","felic(happy)+ -itas","幸福;好运","happiness","felicity"],
    ["feliciter","felic(幸福)+ -iter(副词尾)","felic + -iter(adv)","幸运地!(婚礼欢呼)","happily!",""],
    ["infelix","in(不)+ felix(幸运)","in(not)+ felix","不幸的","unlucky",""]],
  laetus: [
    ["laetitia","laet(欢)+ -itia(名词尾)","laet(glad)+ -itia","欢乐","joy","Letitia"],
    ["laetari","laet(欢)+ -ari(动词尾)","laet + -ari","欢欣","to rejoice",""]],
  victor: [
    ["victrix","vic(胜)+ -trix(女性者)","vic + -trix(she who)","女胜利者","conqueress",""],
    ["invictus","in(不)+ victus(被胜)","in + victus","不可战胜的","unconquered","invincible"]],
  patria: [
    ["patrius","patr(父辈)+ -ius(…的)","patr + -ius","父辈的;祖传的","ancestral",""],
    ["compatriota","com(同)+ patriota(同乡)","com + patriota","同胞","fellow-countryman","compatriot"]],
  memoria: [
    ["memor","memor(记得的)","memor(mindful)","记得的","mindful",""],
    ["memorabilis","memor(记)+ -abilis(值得…的)","memor + -abilis","值得纪念的","worth remembering","memorable"],
    ["commemorare","com(共同)+ memorare(记念)","com + memorare","共同纪念","to remember together","commemorate"]],
  fama: [
    ["famosus","fam(名声)+ -osus(多…的)","fam(fame)+ -osus","名声大的(好坏皆可)","much-talked-of","famous"],
    ["infamis","in(坏)+ famis(名声)","in(ill)+ famis","声名狼藉的","of ill fame","infamous"]],
  historia: [
    ["historicus","histori(史)+ -icus(…的/人)","histori + -icus","历史的;史家","historical","historic"]],
  finis: [
    ["finire","fin(终)+ -ire(动词尾)","fin(end)+ -ire","结束","to end","finish"],
    ["infinitus","in(无)+ finitus(有界的)","in(not)+ finitus","无限的","boundless","infinite"],
    ["definire","de(划定)+ finire(定界)","de + finire","界定","to bound off","define"]],
  initium: [
    ["inire","in(进入)+ ire(走)","in + ire(go)","进入;开始","to go in, begin",""],
    ["initiare","initi(开端)+ -are(动词尾)","initi + -are","开创;引入门","to initiate","initiate"]],
  novus: [
    ["novitas","nov(新)+ -itas(名词尾)","nov(new)+ -itas","新奇","newness","novelty"],
    ["renovare","re(再)+ novare(更新)","re + novare","翻新","to make new again","renovate"],
    ["novellus","nov(新)+ -ellus(小)","nov + -ellus(little)","崭新的;新苗","brand-new","novel"]],
  vetus: [
    ["vetustas","vetust(古老)+ -as(名词尾)","vetust(old)+ -as","古老;年代","great age",""],
    ["veteranus","veter(老)+ -anus(人)","veter + -anus(person)","老兵","man of long service","veteran"]],
  semper: [
    ["sempiternus","semper(永远)+ -ternus(…的)","semper + -ternus","永恒的","everlasting","sempiternal"]],
  numquam: [
    ["umquam","umquam(任何时候)","umquam(ever)","任何时候(否定后)","ever",""]],
  hodie: [
    ["hodiernus","hodie(今天)+ -rnus(…的)","hodie + -rnus","今天的","of today",""]],
  cras: [
    ["crastinus","crastin(明日)+ -us(…的)","crastin(of tomorrow)+ -us","明天的","of tomorrow",""],
    ["procrastinare","pro(往前推)+ crastinare(至明日)","pro + crastinare","拖到明天","to put off till tomorrow","procrastinate"]],
  heri: [
    ["hesternus","hestern(昨日)+ -us(…的)","hestern(of yesterday)+ -us","昨天的","of yesterday",""]],
  tempus: [
    ["temporalis","tempor(时)+ -alis(…的)","tempor(time)+ -alis","时间的;一时的","of time","temporal"],
    ["temperare","temper(按时)+ -are(动词尾)","temper + -are","调节;节制","to keep due measure","temper"]],
  annus: [
    ["annalis","ann(年)+ -alis(…的)","ann(year)+ -alis","年的→编年史","of the year","annals"],
    ["anniversarius","anni(年)+ versarius(回转的)","anni + versarius(turning)","周年的","year-turning","anniversary"],
    ["annona","ann(年)+ -ona","ann + -ona","年成;粮供","the year's yield",""]],
  dies: [
    ["diarium","di(日)+ -arium(册/份)","di(day)+ -arium","日记账;口粮","day-book","diary"],
    ["diurnus","diu(日)+ -rnus(…的)","diu + -rnus","白天的","of the day","journal"],
    ["meridies","meri(中)+ dies(日)","meri(mid)+ dies","正午","midday","meridian, a.m./p.m."]],
};
