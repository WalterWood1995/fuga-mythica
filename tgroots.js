/* =====================================================
   FUGA MYTHICA — TGROOTS: gives every map-adventure word a real root in
   its study language. Loaded after the vocab packs, the root stories and
   tl.js, before tgt.js.
   TGR_MAP  key | fr | it | es | de   — each cell "rootId:highlight" or "-"
   TGR_META id  | 中文义 | English gist   — for roots new to a pack
   At load it (1) adds missing roots to VOCAB[lang].roots, (2) files the word
   under that root (adding it to the pack if absent), (3) lets German reach
   shared Latin-root stories through ROOT_STORIES.deMap.
   ===================================================== */
const TGR_MAP_RAW = `
puella|juv:jeun|g_ragazz:ragazz|-|d_magd:mäd
puer|g_garc:garç|g_ragazz:ragazz|-|-
remus|g_rem:ram|g_rem:rem|g_rem:rem|d_ruder:ruder
ianua|port:port|g_usc:usc|-|-
lucerna|g_lamp:lamp|g_luc:luc|cand:cand|g_lamp:lamp
columna|g_column:colonn|g_column:colonn|g_column:column|d_säul:säul
convivium|g_banc:banqu|g_banc:banch|g_banc:banqu|d_mahl:mahl
anulus|g_anul:ann|g_anul:anell|g_anul:anill|d_ring:ring
gemma|g_gemm:gemm|g_gemm:gemm|g_gemm:gem|-
consilium|g_consul:conseil|g_consul:consigl|g_consul:consej|-
tenebrae|g_tenebr:ténèbr|g_tenebr:tenebr|g_tenebr:tinieb|-
fax|tort:torch|g_fac:fiacc|tort:torch|g_fac:fack
labyrinthus|g_labyr:labyrinth|g_labyr:labirint|g_labyr:laberint|g_labyr:labyrinth
sinister|g_gauch:gauch|g_sinistr:sinistr|g_izquierd:izquierd|-
capillus|g_capill:cheveu|g_capill:capell|g_capill:cabell|d_haar:haar
taurus|g_taur:taur|g_taur:tor|g_taur:tor|d_stier:stier
leo|leo:lion|leo:leon|leo:león|leo:löwe
aquila|g_aquil:aigl|g_aquil:aquil|g_aquil:águil|d_adler:adler
felis|g_catt:chat|g_catt:gatt|g_catt:gat|katz:katz
cervus|g_cerv:cerf|g_cerv:cerv|g_cerv:cierv|d_hirsch:hirsch
capra|g_capr:chèvr|g_capr:capr|g_capr:cabr|d_zieg:zieg
rana|g_ran:grenouill|g_ran:ran|g_ran:ran|d_frosch:frosch
hasta|g_lanc:lanc|g_lanc:lanc|g_lanc:lanz|d_speer:speer
scutum|bucc:boucl|g_scut:scud|g_scut:escud|d_schild:schild
arma|arm:arm|arm:arm|arm:arm|d_waffe:waff
hostis|g_inimic:ennemi|g_inimic:nemic|g_inimic:enemig|-
gloria|glor:gloir|glor:glori|glor:glori|d_ruhm:ruhm
clamor|clam:clam|clam:clam|clam:clam|-
purpureus|g_purpur:pourpr|g_purpur:purpur|g_purpur:púrpur|g_purpur:purpur
initium|g_but:but|-|g_init:inic|-
musica|mus:musi|mus:music|mus:músic|mus:musik
lyra|g_lyr:lyr|g_lyr:lir|g_lyr:lir|g_lyr:leier
cantus|cant:chant|-|-|-
ars|g_art:art|g_art:arte|g_art:arte|-
fera|g_best:bête|g_fera:fier|g_fera:fier|tier:tier
echo|g_ech:écho|g_ech:eco|g_ech:eco|g_ech:echo
nuptiae|nub:noce|nub:nozz|nub:nupci|-
taeda|flam:flamb|g_fac:face|g_taed:tea|g_fac:fackel
pratum|g_prat:pré|g_prat:prat|g_prat:prad|d_wiese:wiese
vipera|g_viper:vipèr|g_viper:viper|g_viper:víbor|g_viper:viper
venenum|g_venen:venin|g_venen:velen|g_venen:venen|geb:gift
lacrima|lacrim:larm|lacrim:lacrim|lacrim:lágrim|d_trän:trän
sepulcrum|sepul:sépulcr|sepul:sepolcr|sepul:sepulcr|d_grab:grab
cinis|g_ciner:cendr|g_ciner:cener|g_ciner:ceniz|d_asche:asche
fatum|g_destin:destin|fat:fat|fat:had|-
inferi|g_infer:enfer|g_infer:infer|g_infer:infiern|-
thronus|g_thron:trôn|g_thron:tron|g_thron:tron|g_thron:thron
sceptrum|g_scept:sceptr|g_scept:scettr|g_scept:cetr|g_scept:zepter
abyssus|g_abyss:abîm|g_abyss:abiss|g_abyss:abism|-
stagnum|g_stagn:étang|-|g_stagn:estanq|d_teich:teich
nebula|g_brouill:brouill|g_nebul:nebb|g_nebul:niebl|d_nebel:nebel
custos|guard:gard|custod:custod|custod:custod|-
portitor|pass:pass|ject:traghett|barc:barqu|fahr:fähr
cymba|barc:barqu|barc:barc|barc:barc|d_kahn:kahn
ratis|g_ratis:radeau|g_zatter:zatter|g_bals:bals|-
latratus|g_aboi:aboi|g_latrat:latrat|g_latrat:ladrid|d_bell:bell
guttur|g_gorg:gorg|g_gul:gol|g_garg:gargant|d_kehl:kehl
belua|g_best:bête|g_belu:belv|g_best:besti|-
draco|g_drac:dragon|g_drac:drag|g_drac:dragón|g_drac:drach
gigas|g_gigant:géant|g_gigant:gigant|g_gigant:gigant|d_ries:ries
nympha|g_nymph:nymph|g_nymph:ninf|g_nymph:ninf|g_nymph:nymph
rivus|g_rivus:ruiss|g_rivus:riv|-|-
gurges|g_golf:gouffr|g_gorg:gorg|mol:molin|d_strudel:strudel
vortex|turb:tourbill|vert:vort|vert:vórt|d_wirbel:wirbel
ardor|g_ard:ard|g_ard:ard|g_ard:ard|glanz:glut
sulphur|g_sulf:soufr|g_sulf:zolf|g_sulf:azufr|d_schwefel:schwefel
poculum|g_cupp:coup|g_cupp:copp|g_cupp:cop|d_becher:becher
potio|g_potio:potion|g_potio:pozion|g_potio:poción|trink:trank
murmur|g_murmur:murmur|g_murmur:mormor|g_murmur:murmull|g_murmur:murmel
causa|caus:caus|caus:caus|caus:caus|-
supplicium|plic:plic|plic:pliz|plic:plic|d_folter:folter
invidia|vid:envi|-|-|d_neid:neid
misericordia|miser:miséri|miser:miseri|miser:miseri|d_erbarm:erbarm
clementia|g_clem:clém|g_clem:clem|g_clem:clem|d_mild:mild
preces|prec:pri|prec:pregh|prec:pleg|bitt:bet
ara|g_altar:autel|g_altar:altar|g_altar:altar|g_altar:altar
thesaurus|g_thesaur:trésor|g_thesaur:tesor|g_thesaur:tesor|-
diadema|g_diadem:diadèm|g_diadem:diadem|g_diadem:diadem|g_diadem:diadem
numen|vol:volont|g_numen:num|g_numen:numen|gott:gött
suavitas|g_suav:suav|-|-|d_süß:süß
amarus|g_amar:amer|g_amar:amar|g_amar:amarg|d_bitter:bitter
mollis|g_moll:mou|g_moll:moll|g_bland:bland|-
blandus|car:caress|g_bland:bland|g_halag:halag|d_sanft:sanft
ferox|g_fera:féroc|g_fera:feroc|g_fera:feroz|d_wild:wild
stupor|stup:stup|stup:stup|stup:estup|d_staun:staun
admiratio|mir:mir|mir:mir|mir:mir|wunder:wunder
retro|g_retro:arrière|g_retro:dietro|trans:trás|-
ascensus|scend:ascen|scend:asce|scend:ascen|-
cura|g_solicit:souci|-|g_cogit:cuid|-
festinatio|g_hate:hât|-|-|d_eil:eil
aeternitas|g_aetern:étern|g_aetern:etern|g_aetern:etern|d_ewig:ewig
immortalitas|mort:mort|mort:mort|mort:mort|sterb:sterb
elementum|g_element:élément|g_element:element|g_element:element|-
laurus|g_laur:laur|g_laur:allor|g_laur:laurel|g_laur:lorbeer
praemium|pend:pens|-|g_praem:premi|-
vates|dei:devin|g_vat:vat|g_vat:vat|seh:seh
familia|g_famul:famill|g_famul:famigl|g_famul:famili|g_famul:famili
unda|g_vague:vague|-|g_ola:ola|d_well:well
murus|mur:mur|mur:mur|mur:mur|mur:mauer
aula|g_saal:sall|g_saal:sal|g_saal:sal|d_halle:hall
sella|g_cathedr:chais|sed:sed|sed:sill|d_stuhl:stuhl
hortus|g_jard:jardin|g_jard:giardin|g_jard:jardín|gart:gart
fons|g_font:fontain|-|-|d_quell:quell
marmor|g_marmor:marbr|g_marmor:marm|g_marmor:mármol|g_marmor:marmor
pictura|pict:pein|pict:pitt|pict:pint|-
arca|g_coffr:coffr|g_scrin:scrign|g_arca:arca|d_truhe:truhe
sapientia|sap:sag|-|-|-
silentium|g_silent:silen|g_silent:silen|g_silent:silen|-
saxum|g_roc:roch|g_sax:sass|g_roc:roc|d_fels:fels
super|super:sur|-|-|-
intra|g_intus:dedans|g_intus:dentro|g_intus:dentro|-
nasus|g_nas:nez|g_nas:nas|g_nas:nariz|d_nas:nase
bracchium|g_brach:bras|g_brach:bracc|g_brach:braz|-
genu|g_genu:genou|g_genu:ginocch|rot:rodill|d_knie:knie
lupus|lup:loup|lup:lup|lup:lob|d_wolf:wolf
serpens|serp:serpent|serp:serpent|serp:serpient|d_schlang:schlang
ursus|g_urs:ours|g_urs:ors|g_urs:os|d_bär:bär
aper|sing:sangli|sing:cinghial|g_jabal:jabal|d_eber:eber
vacca|g_vacc:vach|g_vacc:vacc|g_vacc:vac|d_kuh:kuh
ovis|g_mout:mout|pecu:pecor|g_ovis:ovej|d_schaf:schaf
porcus|g_porc:porc|g_porc:porc|g_cerd:cerd|d_schwein:schwein
mus|g_sorex:souris|g_talp:top|g_raton:rat|d_maus:maus
apis|g_api:abeill|g_api:ap|g_api:abej|d_bien:bien
galea|g_casc:casqu|g_helm:elm|g_helm:yelm|g_helm:helm
sagitta|g_flech:flèch|g_flech:frecc|g_flech:flech|d_pfeil:pfeil
ferrum|ferr:fer|ferr:ferr|ferr:hierr|-
quinque|g_quinqu:cinq|g_quinqu:cinqu|g_quinqu:cinc|d_fünf:fünf
sex|g_sex:six|g_sex:sei|g_sex:seis|d_sechs:sechs
septem|sept:sept|sept:sett|sept:siet|d_sieben:sieben
decem|dec2:dix|dec2:dieci|dec2:diez|-
novem|-|g_novem:nove|g_novem:nueve|d_neun:neun
flavus|g_galb:jaun|g_galb:giall|g_amar:amarill|-
numquam|g_magis:jamais|g_magis:mai|g_numquam:nunca|d_nie:nie
cras|matin:main|matin:mani|-|-
heri|g_heri:hier|g_heri:ieri|g_heri:ayer|d_gestern:gestern
chorda|g_chord:cord|g_chord:cord|g_chord:cuerd|d_saite:saite
tibia|g_flaut:flût|g_flaut:flaut|g_flaut:flaut|g_flaut:flöte
tympanum|g_tambur:tambour|g_tambur:tambur|g_tambur:tambor|d_trommel:trommel
scaena|g_scen:scèn|g_scen:scen|g_scen:escen|d_bühne:bühne
theatrum|g_theatr:théâtr|g_theatr:teatr|g_theatr:teatr|g_theatr:theater
plausus|plaud:applaud|-|-|-
silva|g_forest:forêt|silv:selv|silv:selv|-
rosa|g_ros:ros|g_ros:ros|g_ros:ros|g_ros:ros
lilium|g_lili:lis|g_lili:gigli|g_lili:lirio|g_lili:lilie
herba|herb:herb|herb:erb|herb:hierb|d_kraut:kraut
luctus|dol:deuil|g_luctus:lutt|g_luctus:lut|-
funus|g_funer:funéraill|g_funer:funeral|g_funer:funeral|d_grab:gräb
imperium|g_imper:empir|g_imper:imper|g_imper:imperi|g_imper:imperium
spelunca|crypt:grott|g_spelunc:spelonc|crypt:grut|crypt:grott
vallis|g_vall:vallée|g_vall:vall|g_vall:vall|d_tal:tal
nummus|g_piec:pièce|mon:monet|mon:moned|mon:münz
ungula|g_griff:griff|g_ungu:ungh|g_ungu:uña|d_klau:klaue
cauda|g_caud:queue|g_caud:cod|g_caud:col|d_schwanz:schwanz
pellis|g_pell:peau|g_pell:pell|g_pell:piel|d_fell:fell
lacus|g_lac:lac|g_lac:lag|g_lac:lag|d_see:see
gutta|g_gutt:goutt|g_gutt:gocc|g_gutt:got|d_tropf:tropf
umor|g_umor:humid|g_umor:umor|g_umor:humor|nass:feucht
sitis|g_sit:soif|g_sit:set|g_sit:sed|trock:durst
fames|g_fames:faim|g_fames:fame|g_fames:hambre|d_hunger:hunger
limus|g_boue:boue|g_limus:lim|g_limus:lim|d_schlamm:schlamm
profundum|fund:fond|-|fund:fund|-
carcer|prehend:pris|g_carcer:carcer|g_carcer:cárcel|-
catena|g_caten:chaîn|g_caten:caten|g_caten:caden|g_caten:kett
testis|test:tém|test:testimon|test:testig|-
superbia|g_orgueil:orgueil|super:superb|super:soberb|-
ira|g_colere:colèr|-|-|d_zorn:zorn
templum|g_templ:templ|g_templ:tempi|g_templ:templ|g_templ:tempel
foedus|lig:allia|lig:allea|lig:alia|-
obscuritas|g_obscur:obscur|g_obscur:oscur|g_obscur:oscur|-
patientia|g_pat:patien|g_pat:pazien|g_pat:pacien|-
turris|-|g_turr:torr|g_turr:torr|g_turr:turm
argentum|-|arg:argent|plat:plat|d_silber:silber
animus|-|anim:anim|-|-
dexter|-|dext:destr|-|-
felix|-|felic:felic|felic:feliz|-
laetus|-|g_laet:liet|-|d_froh:froh
carmen|-|g_carm:carm|-|d_lied:lied
collis|-|g_collis:coll|-|hoch:hüg
palus|-|g_palud:palud|g_pantan:pantan|d_sumpf:sumpf
merces|-|merc:merced|-|-
spectrum|-|spec:spettr|spec:espectr|d_gespenst:gespenst
turba|-|turb:turb|turb:turb|d_meng:meng
oblivio|-|obliv:obli|-|-
aestus|-|cal:cal|-|-
vinculum|-|g_vincl:vincol|g_vincl:víncul|d_fessel:fessel
potestas|-|pot:potest|pot:potest|-
mirus|-|mir:mir|-|-
pactum|-|pac:patt|pac:pact|pac:pakt
pugna|-|luct:lott|g_pelo:pele|-
semper|-|g_semper:sempr|g_semper:siempr|d_immer:immer
caeruleus|-|g_azur:azzurr|g_azur:azul|-
gaudium|-|-|gaud:goz|-
labor|-|-|lab:labor|-
potentia|-|-|pot:potenc|-
descensus|-|-|scend:descen|-
filius|-|-|-|d_sohn:sohn
filia|-|-|-|d_tochter:tochter
ventus|-|-|-|wind:wind
insula|-|-|-|insul:insel
tempestas|-|-|-|d_sturm:sturm
portus|-|-|-|d_hafen:hafen
nubes|-|-|-|d_wolk:wolk
pluvia|-|-|-|regen:regen
tectum|-|-|-|deck:dach
donum|-|-|-|d_schenk:schenk
filum|-|-|-|d_faden:faden
charta|-|-|-|chart:kart
epistula|-|-|-|brief:brief
vox|-|-|-|stimm:stimm
auris|-|-|-|d_ohr:ohr
corpus|-|-|-|corp:körper
digitus|-|-|-|d_finger:finger
lingua|-|-|-|d_zung:zung
miles|-|-|-|g_sold:soldat
quattuor|-|-|-|d_vier:vier
octo|-|-|-|d_acht8:acht
hodie|-|-|-|d_heut:heut
poeta|-|-|-|dic:dicht
sponsa|-|-|-|d_braut:braut
sponsus|-|-|-|d_braut:bräut
flumen|-|-|-|d_strom:strom
glacies|-|-|-|eis:eis
rota|-|-|-|d_rad:rad
sacrificium|-|-|-|d_opfer:opfer
dulcis|-|-|-|d_süß:süß
nauta|-|-|-|d_see:see
velum|-|-|-|d_segel:segel
aurum|-|-|-|glanz:gold
gladius|-|-|-|d_schwert:schwert
corona|-|-|-|coron:kron
flamma|-|-|-|flam:flamm
monstrum|-|-|-|d_geheuer:geheuer
fortis|-|-|-|d_tapfer:tapfer
virtus|-|-|-|d_tugend:tugend
versus|-|-|-|vert:vers
fabula|-|-|-|fat:fab
caverna|-|-|-|d_hohl:höhl
ripa|-|-|-|d_ufer:ufer
horror|-|-|-|d_grau:grauen
phantasma|-|-|-|phen:phant
multitudo|-|-|-|zahl:zahl
vapor|-|-|-|d_dampf:dampf
sententia|-|-|-|sprech:spruch
maiestas|-|-|-|magn:majest
eloquentia|-|-|-|red:red
mirabilis|-|-|-|wunder:wunder
venia|-|-|-|zeig:zeih
aspectus|-|-|-|d_blick:blick
fuga|-|-|-|d_flieh:flucht
lumen|-|-|-|licht:licht
error|-|-|-|d_irr:irr
harmonia|-|-|-|harmon:harmon
concordia|-|-|-|trag:tracht
discordia|-|-|-|trag:tracht
genius|-|-|-|gen:geni
auctor|-|-|-|heb:heb
gelu|-|-|-|d_frost:frost
belua|-|-|-|g_best:besti
elementum|-|-|-|!g_element:element
turris|!g_turr:tour|-|-|-
turba|!g_foul:foul|-|-|-
fama|!nomin:nomm|-|-|-
votum|!vot:vœu|-|-|-
fons|-|!g_font:font|!g_font:fuent|-
reditus|=:tour|!tourn:torn|-|=:rück
praemium|-|!g_praem:premi|-|-
rivus|-|-|!g_arrug:arroy|!d_bach:bach
luctus|-|-|-|!d_trauer:trauer
passus|=:pas|-|-|!d_schreit:schritt
filia|=:fill|-|-|-
regina|=:rein|-|=:rein|-
vir|=:homm|-|-|-
dea|=:dé|=:de|-|-
tectum|=:toit|-|-|-
fides|=:foi|-|=:fe|-
animus|=:cour|-|-|-
virtus|=:vert|-|-|-
quattuor|=:quat|-|-|-
laetus|=:joy|-|-|-
victor|=:vainqu|-|-|-
semper|=:tou|-|-|-
sponsa|=:épou|-|=:espos|-
sponsus|=:épou|-|=:espos|-
regnum|=:roy|-|=:rein|-
fluvius|=:fleuv|=:fium|-|-
flumen|=:fleuv|=:fium|-|-
phantasma|=:fant|=:fant|=:fant|-
glacies|=:glac|=:ghiacc|-|-
poena|=:pein|-|-|-
desiderium|=:dési|-|-|-
spes|=:espo|-|-|-
promissum|=:mess|-|=:mes|-
gratia|=:grâ|=:graz|=:graci|-
descensus|=:descen|=:sce|-|-
lumen|=:lu|-|-|-
dubium|=:dou|-|-|-
desperatio|=:espo|-|-|=:zweifl
fiducia|=:fian|-|=:fianz|=:trau
principium|=:cip|=:cip|=:cip|-
scriptor|=:écri|-|=:escrit|-
auctor|=:aut|-|-|-
femina|-|=:donn|-|-
clavis|-|=:chia|-|-
secretum|-|=:gret|-|-
hodie|-|=:oggi|=:hoy|-
plausus|-|=:plaus|=:plaus|-
ius|-|=:dirit|-|-
maiestas|-|=:maest|=:majest|-
invidia|-|=:vid|-|-
harmonia|-|=:armon|=:armon|-
tempestas|-|-|=:temp|-
servus|-|-|=:sierv|-
timor|-|-|=:tem|-
monstrum|-|-|=:monstr|-
collis|-|-|=:colin|-
gelu|-|-|=:hel|-
anima|-|-|=:alma|-
iudex|-|-|=:juez|-
iudicium|-|-|=:juic|-
opes|-|-|=:riqu|-
suavitas|-|-|=:suav|-
visus|-|-|=:vist|-
cursus|-|-|=:carr|-
festinatio|-|!g_frett:frett|=:pris|-
porta|-|-|-|=:tor
intra|-|-|-|=:inn
ars|-|-|-|=:kun
ratis|-|-|-|=:floß
aestus|-|-|-|=:hitz
`;
const TGR_META_RAW = `
g_ragazz|男孩/女孩|boy, girl
g_garc|男孩|boy
g_rem|桨|oar
g_usc|门口|doorway
g_lamp|灯|lamp
g_luc|光|light
g_column|柱、耸起|column, rise
g_banc|长凳、宴席|bench, feast
g_anul|环|ring
g_gemm|芽、宝石|bud, gem
g_consul|商议|deliberate
g_tenebr|黑暗|darkness
g_fac|火把|torch
g_labyr|迷宫|labyrinth
g_gauch|左、歪|left, crooked
g_sinistr|左|left
g_izquierd|左(巴斯克语)|left (Basque)
g_capill|头发|hair
g_taur|公牛|bull
g_aquil|鹰|eagle
g_catt|猫|cat
g_cerv|鹿|stag
g_capr|山羊|goat
g_ran|青蛙|frog
g_lanc|长矛、投掷|lance, hurl
g_scut|盾|shield
g_inimic|敌人(不+友)|enemy (not-friend)
g_purpur|紫色|purple
g_but|靶、目标|target, goal
g_init|进入、开始|go in, begin
g_lyr|里拉琴|lyre
g_art|技艺|skill, art
g_best|野兽|beast
g_fera|野的|wild
g_ech|回声|echo
g_taed|松明火把|pine torch
g_prat|草地|meadow
g_viper|蝰蛇(胎生)|viper (live-bearing)
g_venen|毒药(爱药)|poison (love-potion)
g_ciner|灰|ash
g_destin|注定|destine
g_infer|下面、冥界|below, underworld
g_thron|宝座|throne
g_scept|权杖|sceptre
g_abyss|无底|bottomless
g_stagn|池、停滞|pool, standing
g_brouill|雾、搅乱|fog, muddle
g_nebul|雾|mist
g_rivus|溪|brook
g_ratis|木筏|raft
g_zatter|木筏|raft
g_bals|木筏|raft
g_aboi|狗吠|bark
g_latrat|狗吠|bark
g_gorg|喉、漩涡|throat, whirl
g_gul|喉、贪食|throat, gluttony
g_garg|喉(拟声)|throat (imitative)
g_belu|巨兽|monster
g_drac|龙(凝视者)|dragon (the starer)
g_gigant|巨人|giant
g_nymph|仙女、新娘|nymph, bride
g_golf|海湾、深渊|gulf, abyss
g_ard|燃烧|burn
g_sulf|硫|sulfur
g_cupp|杯|cup
g_potio|喝、药剂|drink, potion
g_murmur|低语|murmur
g_clem|宽仁|mercy
g_altar|祭坛|altar
g_thesaur|宝库|treasury
g_diadem|头带、冠冕|diadem
g_numen|点头、神意|nod, divine will
g_suav|甜|sweet
g_amar|苦|bitter
g_moll|软|soft
g_bland|温柔|gentle
g_halag|奉承|flatter
g_retro|向后|backwards
g_solicit|搅动、担忧|stir, worry
g_cogit|思虑、照料|think, care
g_hate|急|haste
g_aetern|永恒|eternal
g_element|元素|element
g_laur|月桂|laurel
g_praem|奖赏|reward
g_vat|先知诗人|seer-poet
g_famul|家仆、家庭|household
g_vague|波浪|wave
g_ola|波浪|wave
g_saal|大厅|hall
g_cathedr|座椅|seat
g_jard|围起的园子|enclosed garden
g_font|泉|spring
g_marmor|大理石|marble
g_coffr|箱子|chest
g_scrin|匣子|box
g_arca|箱、柜|chest
g_silent|寂静|silence
g_roc|岩石|rock
g_sax|石头|stone
g_intus|里面|within
g_nas|鼻|nose
g_brach|手臂|arm
g_genu|膝|knee
g_urs|熊|bear
g_jabal|山里的(阿拉伯语)|of the mountain (Arabic)
g_vacc|母牛|cow
g_mout|阉羊(高卢语)|wether (Gaulish)
g_ovis|羊|sheep
g_porc|猪|pig
g_cerd|鬃毛、猪|bristle, pig
g_sorex|鼩鼱、老鼠|shrew, mouse
g_talp|鼹鼠→老鼠|mole, mouse
g_raton|鼠|rat, mouse
g_api|蜜蜂|bee
g_casc|壳、头盔|shell, helmet
g_helm|头盔|helmet
g_flech|箭(飞的)|arrow (the flier)
g_quinqu|五|five
g_sex|六|six
g_novem|九|nine
g_galb|黄|yellow
g_magis|更多|more
g_numquam|从不|never
g_heri|昨天|yesterday
g_chord|弦|string
g_flaut|笛|flute
g_tambur|鼓|drum
g_scen|舞台|stage
g_theatr|看、剧场|watch, theatre
g_forest|森林|forest
g_ros|玫瑰|rose
g_lili|百合|lily
g_funer|葬礼|funeral
g_imper|命令|command
g_spelunc|洞穴|cave
g_vall|山谷|valley
g_piec|一块|piece
g_griff|抓、爪|grip, claw
g_ungu|指甲、爪|nail, claw
g_caud|尾巴|tail
g_pell|皮|skin
g_lac|湖|lake
g_gutt|滴|drop
g_umor|液体、湿气|moisture
g_sit|渴|thirst
g_fames|饥饿|hunger
g_boue|泥(高卢语)|mud (Gaulish)
g_limus|淤泥|silt
g_carcer|监狱|prison
g_caten|锁链|chain
g_orgueil|骄傲(法兰克语)|pride (Frankish)
g_colere|胆汁、愤怒|bile, anger
g_templ|划出的圣域|marked-out precinct
g_obscur|暗|dark
g_pat|忍受|suffer
g_turr|塔|tower
g_laet|欢喜|glad
g_carm|歌、咒语|song, spell
g_collis|山丘|hill
g_palud|沼泽|marsh
g_pantan|沼泽|marsh
g_luctus|哀悼|mourning
g_vincl|捆绑|bind
g_pelo|毛发、揪打|hair, brawl
g_semper|总是|always
g_azur|天蓝(青金石)|azure (lapis)
g_sold|金币、军饷|gold coin, pay
g_foul|踩、压|tread, press
g_frett|擦、急|rub, hurry
g_arrug|坑道、溪沟|channel, gully
d_sohn|儿子|son
d_tochter|女儿|daughter
d_magd|少女|maiden
d_well|翻滚|surge
d_sturm|风暴|storm
d_hafen|港、容纳|harbour
d_wolk|云、湿|cloud, damp
d_halle|大厅(遮盖)|hall (covered)
d_stuhl|座、立|seat, stand
d_faden|线(一臂长)|thread (a fathom)
d_schenk|斟、赠|pour, give
d_ring|圈|ring
d_ohr|耳|ear
d_nas|鼻|nose
d_finger|手指|finger
d_knie|膝|knee
d_haar|头发|hair
d_zung|舌、语言|tongue
d_wolf|狼|wolf
d_schlang|缠绕|coil
d_adler|鹰(高贵之鹰)|eagle (noble eagle)
d_bär|熊(棕色的)|bear (the brown one)
d_hirsch|鹿(有角的)|stag (horned)
d_kuh|牛|cow
d_schaf|羊|sheep
d_zieg|山羊|goat
d_schwein|猪|pig
d_maus|鼠|mouse
d_frosch|青蛙|frog
d_bien|蜜蜂|bee
d_vier|四|four
d_fünf|五|five
d_sechs|六|six
d_sieben|七|seven
d_acht8|八|eight
d_neun|九|nine
d_froh|欢快|glad
d_immer|总是|always
d_nie|从不|never
d_heut|今天|today
d_gestern|昨天|yesterday
d_lied|歌|song
d_trommel|鼓|drum
d_bühne|舞台|stage
d_braut|新娘|bride
d_kraut|草、菜|herb, cabbage
d_wiese|草地|meadow
d_trän|泪|tear
d_grab|挖、坟|dig, grave
d_tal|山谷|valley
d_sumpf|沼泽|marsh
d_nebel|雾|fog
d_frost|冻|freeze
d_strom|流|stream
d_see|海、湖|sea, lake
d_hunger|饥饿|hunger
d_rad|轮|wheel
d_zorn|怒|anger
d_neid|嫉妒|envy
d_opfer|献祭|sacrifice
d_süß|甜|sweet
d_bitter|苦(咬)|bitter (biting)
d_sanft|温柔|gentle
d_ruder|桨|oar
d_segel|帆|sail
d_säul|柱|column
d_quell|泉、源|spring, source
d_silber|银|silver
d_mahl|餐、时刻|meal, time
d_schwert|剑|sword
d_truhe|箱|chest
d_fels|岩石|rock
d_stier|公牛|bull
d_eber|公猪|boar
d_geheuer|安稳、熟悉|safe, familiar
d_speer|矛|spear
d_schild|盾、招牌|shield, sign
d_waffe|武器|weapon
d_pfeil|箭(拉丁 pilum)|arrow (Latin pilum)
d_tapfer|勇敢(结实)|brave (sturdy)
d_ruhm|名声|fame
d_tugend|美德(能干)|virtue (ability)
d_saite|弦|string
d_asche|灰|ash
d_hohl|空、洞|hollow
d_ufer|岸|shore
d_teich|池塘|pond
d_grau|恐怖|dread
d_kahn|小船|boat
d_bell|吠|bark
d_kehl|喉|throat
d_klau|爪|claw
d_schwanz|尾巴|tail
d_fell|皮|pelt
d_ries|巨人|giant
d_gespenst|幽灵|ghost
d_meng|许多、人群|many, crowd
d_strudel|漩涡|whirlpool
d_wirbel|旋转|whirl
d_tropf|滴|drop
d_dampf|蒸汽|steam
d_schwefel|硫|sulfur
d_becher|杯|beaker
d_schlamm|泥浆|mud
d_fessel|镣铐|fetter
d_folter|酷刑|torture
d_erbarm|怜悯|pity
d_mild|温和|mild
d_wild|野|wild
d_staun|惊奇|marvel
d_blick|目光(闪)|glance (flash)
d_flieh|逃|flee
d_eil|急|haste
d_irr|迷路、错|stray, err
d_ewig|永恒|eternal
d_bach|溪|brook
d_trauer|哀悼|mourning
d_schreit|跨步|stride
`;
const TGR_FORM = { fr: {}, it: {}, es: {}, de: {} };
(function tgrInstall() {
  if (typeof VOCAB === "undefined" || typeof TL === "undefined") return;
  const meta = {};
  TGR_META_RAW.trim().split("\n").forEach(l => { const [id, zh, en] = l.split("|"); meta[id] = [zh, en]; });
  const LANGS = ["fr", "it", "es", "de"];
  const strip = s => s.toLowerCase().replace(/^(der|die|das|le|la|les|il|lo|gli|el|los|las)\s+/, "").replace(/^l'/, "").trim();
  const realRoot = r => r && /^[-A-Za-zÀ-ɏ]/.test(r[0]);
  /* a gist for an existing id that a given pack lacks: borrow it from another pack */
  const borrow = id => { for (const l of ["fr", "it", "es", "en", "de"]) { const r = VOCAB[l] && VOCAB[l].roots[id]; if (r) return [r[1], r[2]]; } return null; };
  const idx = {};
  LANGS.forEach(l => { const m = idx[l] = {}; VOCAB[l].words.forEach((w, i) => { const s = strip(w[0]); if (!(s in m)) m[s] = i; }); });
  TGR_MAP_RAW.trim().split("\n").forEach(line => {
    const cells = line.split("|"), key = cells[0];
    LANGS.forEach((l, n) => {
      const cell = cells[n + 1];
      if (!cell || cell === "-" || !TL[l] || !TL[l][key]) return;
      if (cell.startsWith("=:")) { TGR_FORM[l][key] = cell.slice(2); return; }
      const force = cell.startsWith("!");
      const [id, form] = (force ? cell.slice(1) : cell).split(":");
      const p = VOCAB[l];
      if (!p.roots[id]) {
        const g = meta[id] || borrow(id) || ["", ""];
        p.roots[id] = [form + "-", g[0], g[1]];
      }
      const word = TL[l][key], i = idx[l][strip(word)];
      if (i !== undefined) {
        const w = p.words[i];
        if (force || !realRoot(p.roots[w[3]])) w[3] = id;       /* out of a theme bucket, or off a wrong root */
      } else {
        const lw = typeof WORDS !== "undefined" && WORDS[key];
        p.words.push([word, lw ? lw[2] : "", lw ? lw[3] : "", id]);
        idx[l][strip(word)] = p.words.length - 1;
      }
      TGR_FORM[l][key] = form;
      if (l === "de" && typeof ROOT_STORIES !== "undefined" && !ROOT_STORIES.de[id] && ROOT_STORIES.shared[id])
        ROOT_STORIES.deMap[id] = id;
      p._norm = false; p._rx = null; p._tgIdx = null;
    });
  });
})();
