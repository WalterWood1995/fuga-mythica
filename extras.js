/* =====================================================
   FUGA MYTHICA — content translations (es/fr/de/ja) + sound-change spells
   Loaded after data.js; merges into CHAPTERS.
   ===================================================== */

const CH_I18N = {
  labyrinthus: {
    name: { es: "I · El laberinto de Creta", fr: "I · Le Labyrinthe de Crète", de: "I · Das Labyrinth von Kreta", ja: "第一章 · クレタの迷宮" },
    story: {
      es: "El príncipe Teseo navega a Creta y entra en el Laberinto sin fin construido por Dédalo para matar al Minotauro devorador de hombres. La princesa Ariadna le da un ovillo de hilo: suéltalo al entrar, síguelo al salir. La historia de escape más famosa del mito griego.",
      fr: "Le prince Thésée fait voile vers la Crète et entre dans le Labyrinthe sans fin construit par Dédale pour tuer le Minotaure mangeur d'hommes. La princesse Ariane lui donne une pelote de fil : déroule-la en entrant, suis-la en sortant. La plus célèbre évasion du mythe grec.",
      de: "Prinz Theseus segelt nach Kreta und betritt das endlose Labyrinth des Daedalus, um den menschenfressenden Minotaurus zu töten. Prinzessin Ariadne gibt ihm ein Fadenknäuel: Abrollen beim Hineingehen, folgen beim Hinausgehen. Die berühmteste Fluchtgeschichte des griechischen Mythos.",
      ja: "アテネの王子テセウスはクレタ島へ渡り、ダイダロスが造った果てなき迷宮に入り、人喰いの怪物ミノタウロスに挑む。王女アリアドネが渡した糸玉——入るときにほどき、帰りにたどる。ギリシャ神話でもっとも有名な脱出の物語。"
    },
    artCaption: { es: "\"Teseo luchando contra el Minotauro\", mármol de Ramey, Jardín de las Tullerías, París", fr: "« Thésée combattant le Minotaure », marbre de Ramey, jardin des Tuileries, Paris", de: "„Theseus im Kampf mit dem Minotaurus“, Marmor von Ramey, Tuileriengarten, Paris", ja: "《ミノタウロスと戦うテセウス》大理石像、ラメー作、パリ・チュイルリー庭園" },
    levels: [
      { name: { es: "Nivel 1 · Adiós en el palacio", fr: "Niveau 1 · Adieux au palais", de: "Level 1 · Abschied im Palast", ja: "レベル1 · 王宮の別れ" },
        story: { es: "La víspera de zarpar, Teseo se despide de su padre, el rey Egeo. Para sobrevivir en la corte de Creta, aprende primero a su gente: rey, reina, princesa…", fr: "La veille du départ, Thésée fait ses adieux à son père, le roi Égée. Pour survivre à la cour de Crète, apprends d'abord ses gens : roi, reine, princesse…", de: "Am Abend vor der Abfahrt verabschiedet sich Theseus von seinem Vater, König Aigeus. Um am Hof von Kreta zu überleben, lerne zuerst seine Menschen: König, Königin, Prinzessin…", ja: "出航前夜、テセウスは父アイゲウス王に別れを告げる。クレタの宮廷で生き抜くには、まず人々を知ること——王、王妃、王女……" },
        cap: { es: "\"El rey Egeo consulta el oráculo\", kílix de figuras rojas, ca. 440 a.C., Berlín", fr: "« Le roi Égée consulte l'oracle », kylix à figures rouges, v. 440 av. J.-C., Berlin", de: "„König Aigeus befragt das Orakel“, rotfigurige Kylix, ca. 440 v. Chr., Berlin", ja: "《神託を求めるアイゲウス王》赤絵式キュリクス、前440年頃、ベルリン" } },
      { name: { es: "Nivel 2 · El barco de velas negras", fr: "Niveau 2 · Le navire aux voiles noires", de: "Level 2 · Das Schiff mit schwarzen Segeln", ja: "レベル2 · 黒帆の船" },
        story: { es: "El barco de velas negras lleva a los jóvenes del tributo hacia Creta. Viento, estrellas, olas: cada palabra de los marineros es un código del mar.", fr: "Le navire aux voiles noires emporte les jeunes du tribut vers la Crète. Vent, étoiles, vagues : chaque mot des marins est un code de la mer.", de: "Das schwarzbesegelte Schiff trägt die Tributjugend nach Kreta. Wind, Sterne, Wellen: jedes Wort der Seeleute ist ein Code des Meeres.", ja: "貢ぎ物の若者たちを乗せた黒帆の船がクレタへ向かう。風、星、波——船乗りたちの叫ぶ言葉はすべて航海の暗号だ。" },
        cap: { es: "Fresco de la \"Procesión de barcos\", Akrotiri, Tera, ca. 1600 a.C.", fr: "Fresque de la « Procession des navires », Akrotiri, Théra, v. 1600 av. J.-C.", de: "„Schiffsprozession“-Fresko, Akrotiri, Thera, ca. 1600 v. Chr.", ja: "《船団の行進》壁画、ティラ島アクロティリ、前1600年頃" } },
      { name: { es: "Nivel 3 · El palacio de Minos", fr: "Niveau 3 · Le palais de Minos", de: "Level 3 · Der Palast des Minos", ja: "レベル3 · ミノス王の宮殿" },
        story: { es: "El palacio de Cnosos brilla: columnas de mármol, frescos, fuentes. Pero tras cada puerta puede esconderse el peligro. Aprende el nombre de todo en el palacio.", fr: "Le palais de Cnossos étincelle : colonnes de marbre, fresques, fontaines. Mais le danger peut se cacher derrière chaque porte. Apprends le nom de chaque chose du palais.", de: "Der Palast von Knossos glänzt: Marmorsäulen, Fresken, Brunnen. Doch hinter jeder Tür kann Gefahr lauern. Lerne den Namen von allem im Palast.", ja: "クノッソス宮殿は輝いている——大理石の柱、壁画、噴水。だがどの扉の奥にも危険が潜むかもしれない。宮殿にあるすべての名前を覚えよう。" },
        cap: { es: "Fresco del \"Salto del toro\", palacio de Cnosos, Museo de Heraclión", fr: "Fresque du « Saut du taureau », palais de Cnossos, musée d'Héraklion", de: "„Stiersprung“-Fresko, Palast von Knossos, Museum Heraklion", ja: "《牛跳び》壁画、クノッソス宮殿、イラクリオン考古学博物館" } },
      { name: { es: "Nivel 4 · Los regalos de la princesa", fr: "Niveau 4 · Les cadeaux de la princesse", de: "Level 4 · Die Geschenke der Prinzessin", ja: "レベル4 · 王女の贈り物" },
        story: { es: "A medianoche, la princesa Ariadna encuentra a Teseo en secreto y le entrega un ovillo y una espada: \"Lleva mi amor y mi sabiduría; solo así volverás con vida.\"", fr: "À minuit, la princesse Ariane trouve Thésée en secret et lui remet une pelote et une épée : « Emporte mon amour et ma sagesse — alors seulement tu reviendras vivant. »", de: "Um Mitternacht findet Prinzessin Ariadne Theseus heimlich und drückt ihm Knäuel und Schwert in die Hände: „Nimm meine Liebe und meine Weisheit — nur dann kehrst du lebend zurück.“", ja: "真夜中、王女アリアドネはひそかにテセウスを訪ね、糸玉と剣を手渡した。「わたしの愛と知恵を持っていって。それだけが、あなたを生きて帰らせるのです。」" },
        cap: { es: "\"Ariadna entrega el ovillo a Teseo\", J. H. Tischbein, 1779", fr: "« Ariane donnant la pelote à Thésée », J. H. Tischbein, 1779", de: "„Ariadne gibt Theseus das Fadenknäuel“, J. H. Tischbein, 1779", ja: "《テセウスに糸玉を渡すアリアドネ》ティッシュバイン画、1779年" } },
      { name: { es: "Nivel 5 · Dentro del laberinto", fr: "Niveau 5 · Dans le Labyrinthe", de: "Level 5 · Hinein ins Labyrinth", ja: "レベル5 · 迷宮へ" },
        story: { es: "La puerta del Laberinto se cierra tras de ti. Solo la luz de la antorcha en la oscuridad. ¿Izquierda o derecha? Cada palabra de dirección es vida o muerte. ¡No olvides el hilo!", fr: "La porte du Labyrinthe se referme derrière toi. Seule la lueur de la torche dans le noir. Gauche ou droite ? Chaque mot de direction est vie ou mort. N'oublie pas le fil !", de: "Die Tür des Labyrinths schließt sich hinter dir. Nur Fackelschein im Dunkel. Links oder rechts? Jedes Richtungswort ist Leben oder Tod. Vergiss den Faden nicht!", ja: "迷宮の扉が背後で閉まる。闇の中、たいまつの光だけ。右か、左か?方向を表す言葉ひとつが生死を分ける。糸を忘れるな!" },
        cap: { es: "Mosaico del laberinto, Casa del Laberinto, Pompeya, s. I a.C.", fr: "Mosaïque du labyrinthe, Maison du Labyrinthe, Pompéi, Ier s. av. J.-C.", de: "Labyrinth-Mosaik, Haus des Labyrinths, Pompeji, 1. Jh. v. Chr.", ja: "迷宮のモザイク、ポンペイ「迷宮の家」、前1世紀" } },
      { name: { es: "Nivel 6 · Sonidos en la oscuridad", fr: "Niveau 6 · Des sons dans le noir", de: "Level 6 · Geräusche im Dunkeln", ja: "レベル6 · 闇の中の物音" },
        story: { es: "De las profundidades llegan una respiración pesada y cascos. Aguza el oído, abre los ojos: en la oscuridad, tu cuerpo es tu única herramienta.", fr: "Des profondeurs montent un souffle lourd et des sabots. Tends l'oreille, ouvre les yeux : dans le noir, ton corps est ton seul outil.", de: "Aus der Tiefe kommen schweres Atmen und Hufschläge. Spitz die Ohren, öffne die Augen: im Dunkeln ist dein Körper dein einziges Werkzeug.", ja: "奥から重い息づかいとひづめの音が聞こえる。耳をすませ、目を見開け——闇の中では、きみの体だけが頼りだ。" },
        cap: { es: "\"El Minotauro\", G. F. Watts, 1885, Tate Britain", fr: "« Le Minotaure », G. F. Watts, 1885, Tate Britain", de: "„Der Minotaurus“, G. F. Watts, 1885, Tate Britain", ja: "《ミノタウロス》G・F・ワッツ画、1885年、テート・ブリテン" } },
      { name: { es: "Nivel 7 · La guarida de la bestia", fr: "Niveau 7 · L'antre de la bête", de: "Level 7 · Die Höhle des Untiers", ja: "レベル7 · 怪物のすみか" },
        story: { es: "Huesos por todas partes. Las paredes talladas con bestias: león, lobo, serpiente, águila… y un toro. ¿Cuál es el verdadero monstruo?", fr: "Des ossements jonchent l'antre. Les murs sont gravés de bêtes : lion, loup, serpent, aigle… et un taureau. Lequel est le vrai monstre ?", de: "Knochen übersäen die Höhle. Die Wände zeigen Tiere: Löwe, Wolf, Schlange, Adler… und ein Stier. Wer ist das wahre Ungeheuer?", ja: "すみかには白骨が散らばる。壁には獣たちが刻まれている——ライオン、オオカミ、ヘビ、ワシ……そして一頭の牛。本当の怪物はどれだ?" },
        cap: { es: "\"Orfeo encantando a los animales\", mosaico romano, Vienne", fr: "« Orphée charmant les animaux », mosaïque romaine, Vienne", de: "„Orpheus bezaubert die Tiere“, römisches Mosaik, Vienne", ja: "《動物を魅了するオルフェウス》ローマのモザイク、ヴィエンヌ" } },
      { name: { es: "Nivel 8 · Duelo con el Minotauro", fr: "Niveau 8 · Duel avec le Minotaure", de: "Level 8 · Zweikampf mit dem Minotaurus", ja: "レベル8 · ミノタウロスとの決戦" },
        story: { es: "¡El Minotauro embiste rugiendo! Empuña la espada, alza el escudo. El valor (virtus) no es no tener miedo: es luchar aun teniéndolo.", fr: "Le Minotaure charge en rugissant ! Serre l'épée, lève le bouclier. Le courage (virtus), ce n'est pas l'absence de peur : c'est combattre malgré elle.", de: "Der Minotaurus stürmt brüllend heran! Pack das Schwert, heb den Schild. Mut (virtus) heißt nicht furchtlos sein — sondern kämpfen trotz der Furcht.", ja: "ミノタウロスが咆哮して突進してくる!剣を握れ、盾をかかげろ。勇気(virtus)とは恐れないことではない——恐れながらも戦うことだ。" },
        cap: { es: "\"Teseo mata al Minotauro\", kílix de figuras rojas, ca. 440 a.C., Museo Británico", fr: "« Thésée tuant le Minotaure », kylix à figures rouges, v. 440 av. J.-C., British Museum", de: "„Theseus tötet den Minotaurus“, rotfigurige Kylix, ca. 440 v. Chr., British Museum", ja: "《ミノタウロスを討つテセウス》赤絵式キュリクス、前440年頃、大英博物館" } },
      { name: { es: "Nivel 9 · Siguiendo el hilo", fr: "Niveau 9 · En suivant le fil", de: "Level 9 · Dem Faden nach", ja: "レベル9 · 糸をたどって" },
        story: { es: "¡El monstruo cae! Ahora sigue el hilo de vuelta. En cada cruce, tablillas de piedra con códigos de números y colores: cuenta bien para caminar bien.", fr: "Le monstre tombe ! Suis maintenant le fil du retour. À chaque croisement, des tablettes portent des codes de nombres et de couleurs : compte juste pour marcher juste.", de: "Das Ungeheuer fällt! Folge nun dem Faden zurück. An jeder Weggabelung tragen Steintafeln Codes aus Zahlen und Farben: Zähl richtig, geh richtig.", ja: "怪物は倒れた!今度は糸をたどって戻る番だ。分かれ道の石板には数と色の暗号——正しく数えれば、正しい道へ。" },
        cap: { es: "\"Ariadna en Naxos\", Evelyn De Morgan, 1877", fr: "« Ariane à Naxos », Evelyn De Morgan, 1877", de: "„Ariadne auf Naxos“, Evelyn De Morgan, 1877", ja: "《ナクソス島のアリアドネ》エヴリン・ド・モーガン画、1877年" } },
      { name: { es: "Nivel 10 · El día de la libertad (Jefe)", fr: "Niveau 10 · Le jour de la liberté (Boss)", de: "Level 10 · Der Tag der Freiheit (Boss)", ja: "レベル10 · 自由の日(ボス)" },
        story: { es: "¡La puerta del Laberinto está ante ti, sellada con todas las palabras de este capítulo! Recuerda cada paso: solo un verdadero héroe recuerda el camino.", fr: "La porte du Labyrinthe est devant toi — scellée par tous les mots de ce chapitre ! Rappelle-toi chaque pas : seul un vrai héros se souvient du chemin.", de: "Das Tor des Labyrinths liegt vor dir — versiegelt mit allen Wörtern dieses Kapitels! Erinnere dich an jeden Schritt: nur ein wahrer Held kennt den Weg zurück.", ja: "迷宮の門は目の前だ!だがこの章で学んだすべての言葉で封印されている。歩んだ道を思い出せ——本当の英雄だけが帰り道を覚えている。" },
        cap: { es: "\"Barcos en mar tormentoso, amanecer\", Iván Aivazovski", fr: "« Navires dans la tempête, lever du soleil », Ivan Aïvazovski", de: "„Schiffe in stürmischer See, Sonnenaufgang“, Iwan Aiwasowski", ja: "《嵐の海の船・日の出》イヴァン・アイヴァゾフスキー画" } },
    ],
  },
  orpheus: {
    name: { es: "II · Orfeo en el inframundo", fr: "II · Orphée aux Enfers", de: "II · Orpheus in der Unterwelt", ja: "第二章 · 冥界の竪琴" },
    story: { es: "El cantor Orfeo baja al inframundo por su esposa; su lira duerme al can infernal y hace llorar a Hades. El dios acepta, con una condición: no mirarla hasta llegar a la luz.", fr: "Le chanteur Orphée descend aux Enfers pour sa femme ; sa lyre endort le chien des Enfers et fait pleurer Hadès. Le dieu accepte, à une condition : ne pas la regarder avant la lumière.", de: "Der Sänger Orpheus steigt für seine Frau in die Unterwelt; seine Leier schläfert den Höllenhund ein und rührt Hades zu Tränen. Der Gott willigt ein — unter einer Bedingung: sich nicht nach ihr umzusehen, bis sie das Licht erreichen.", ja: "歌人オルフェウスは亡き妻を取り戻すため冥界へ下る。竪琴の音は地獄の番犬を眠らせ、冥王をも涙させた。冥王は約束する——ただし、光に出るまで決して振り返ってはならない。" },
    artCaption: { es: "\"Orfeo y Eurídice\", Edward Poynter", fr: "« Orphée et Eurydice », Edward Poynter", de: "„Orpheus und Eurydike“, Edward Poynter", ja: "《オルフェウスとエウリュディケ》エドワード・ポインター画" },
  },
  olympus: {
    name: { es: "III · El monte Olimpo", fr: "III · Le mont Olympe", de: "III · Der Olymp", ja: "第三章 · オリュンポス山" },
    story: { es: "Sobre las nubes viven los doce olímpicos: Zeus del trueno, la sabia Atenea, Poseidón del mar… Aprende sus nombres y conocerás la mitad de las raíces de las lenguas de Occidente.", fr: "Au-dessus des nuages vivent les douze Olympiens : Zeus au tonnerre, la sage Athéna, Poséidon des mers… Apprends leurs noms et tu connaîtras la moitié des racines des langues d'Occident.", de: "Über den Wolken wohnen die zwölf Olympier: Zeus mit dem Donner, die weise Athene, Poseidon des Meeres… Lerne ihre Namen und du kennst die halben Wurzeln der westlichen Sprachen.", ja: "雲の上には十二神が住む——雷のゼウス、知恵のアテナ、海のポセイドン……その名を知れば、西洋の言葉の語根の半分を知ったことになる。" },
    artCaption: { es: "Estatua de mármol de Zeus (Júpiter), Museo del Louvre", fr: "Statue en marbre de Zeus (Jupiter), musée du Louvre", de: "Marmorstatue des Zeus (Jupiter), Louvre", ja: "ゼウス(ユピテル)大理石像、ルーヴル美術館" },
  },
  troia: {
    name: { es: "IV · El caballo de Troya", fr: "IV · Le cheval de Troie", de: "IV · Das Trojanische Pferd", ja: "第四章 · トロイの木馬" },
    story: { es: "Murallas que resistieron diez años caen ante un caballo de madera lleno de soldados. El truco más famoso de la historia enseña un aviso latino: \"Cuidado con los griegos que traen regalos.\"", fr: "Des murailles qui ont tenu dix ans tombent devant un cheval de bois rempli de soldats. La ruse la plus célèbre de l'histoire enseigne un avertissement latin : « Méfie-toi des Grecs porteurs de cadeaux. »", de: "Mauern, die zehn Jahre hielten, fallen durch ein hölzernes Pferd voller Soldaten. Die berühmteste List der Geschichte lehrt eine lateinische Warnung: „Hüte dich vor Griechen mit Geschenken.“", ja: "十年間落ちなかった城壁が、兵士の詰まった巨大な木馬に敗れた。史上最も有名な計略はラテン語の警句を残した——「贈り物を持つギリシャ人に用心せよ」。" },
    artCaption: { es: "\"La procesión del caballo de Troya\", G. D. Tiepolo", fr: "« La procession du cheval de Troie », G. D. Tiepolo", de: "„Der Einzug des Trojanischen Pferdes“, G. D. Tiepolo", ja: "《トロイの木馬の行進》G・D・ティエポロ画" },
  },
  odyssea: {
    name: { es: "V · La Odisea", fr: "V · L'Odyssée", de: "V · Die Odyssee", ja: "第五章 · オデュッセイア" },
    story: { es: "La guerra terminó, pero Ulises necesita diez años más para volver a casa: el cíclope, el canto de las sirenas, el remolino de Caribdis… cada parada es una sala de escape.", fr: "La guerre est finie, mais Ulysse met encore dix ans à rentrer : le Cyclope, le chant des Sirènes, le tourbillon de Charybde… chaque étape est un escape game.", de: "Der Krieg ist vorbei, doch Odysseus braucht noch zehn Jahre nach Hause: der Zyklop, der Gesang der Sirenen, der Strudel der Charybdis… jede Station ein Escape-Room.", ja: "戦争は終わった。だがオデュッセウスの帰郷にはさらに十年かかる——一つ目の巨人、セイレーンの歌声、渦潮カリュブディス……立ち寄る先のすべてが脱出ゲームだ。" },
    artCaption: { es: "\"Ulises y las sirenas\", H. J. Draper", fr: "« Ulysse et les sirènes », H. J. Draper", de: "„Odysseus und die Sirenen“, H. J. Draper", ja: "《ユリシーズとセイレーンたち》H・J・ドレイパー画" },
  },
  hercules: {
    name: { es: "VI · Los trabajos de Hércules", fr: "VI · Les travaux d'Hercule", de: "VI · Die Taten des Herkules", ja: "第六章 · ヘラクレスの試練" },
    story: { es: "Hércules debe cumplir doce trabajos imposibles: el león, la Hidra, las manzanas de oro… cada trabajo, una prueba de vocabulario.", fr: "Hercule doit accomplir douze travaux impossibles : le lion, l'Hydre, les pommes d'or… chaque travail, une épreuve de vocabulaire.", de: "Herkules muss zwölf unmögliche Taten vollbringen: der Löwe, die Hydra, die goldenen Äpfel… jede Tat eine Vokabelprüfung.", ja: "ヘラクレスは十二の不可能な難行に挑む——獅子、ヒュドラ、黄金の林檎……試練の一つひとつが単語の挑戦だ。" },
    artCaption: { es: "El Hércules Farnesio, Museo Arqueológico de Nápoles", fr: "L'Hercule Farnèse, musée archéologique de Naples", de: "Der Herkules Farnese, Archäologisches Museum Neapel", ja: "ファルネーゼのヘラクレス像、ナポリ国立考古学博物館" },
  },
  perseus: {
    name: { es: "VII · Perseo y Medusa", fr: "VII · Persée et Méduse", de: "VII · Perseus und Medusa", ja: "第七章 · メドゥーサの首" },
    story: { es: "Una sola mirada te vuelve piedra. Con escudo-espejo, sandalias aladas y yelmo de invisibilidad, Perseo caza a Medusa, la de cabellos de serpiente.", fr: "Un seul regard te change en pierre. Avec un bouclier-miroir, des sandales ailées et un casque d'invisibilité, Persée chasse Méduse aux cheveux de serpents.", de: "Ein Blick macht dich zu Stein. Mit Spiegelschild, Flügelsandalen und Tarnhelm jagt Perseus die schlangenhaarige Medusa.", ja: "ひと目見れば石になる。鏡の盾、翼のサンダル、姿を隠す兜を携え、ペルセウスは蛇の髪のメドゥーサに挑む。" },
    artCaption: { es: "\"Perseo\" de Cellini, bronce, Loggia dei Lanzi, Florencia", fr: "« Persée » de Cellini, bronze, Loggia dei Lanzi, Florence", de: "Cellinis „Perseus“, Bronze, Loggia dei Lanzi, Florenz", ja: "チェッリーニ《ペルセウス》ブロンズ像、フィレンツェ、ロッジア・デイ・ランツィ" },
  },
  argonautae: {
    name: { es: "VIII · El vellocino de oro", fr: "VIII · La Toison d'or", de: "VIII · Das Goldene Vlies", ja: "第八章 · 金羊毛" },
    story: { es: "Jasón reúne a los héroes de Grecia a bordo del Argo y navega hasta el fin del mundo por el Vellocino de Oro, custodiado por un dragón que nunca duerme.", fr: "Jason rassemble les héros de la Grèce à bord de l'Argo et navigue jusqu'au bout du monde pour la Toison d'or, gardée par un dragon qui ne dort jamais.", de: "Jason versammelt die Helden Griechenlands an Bord der Argo und segelt ans Ende der Welt zum Goldenen Vlies, das ein nie schlafender Drache bewacht.", ja: "イアソンはギリシャ中の英雄をアルゴー船に集め、世界の果てへと船出する。眠らぬ竜が守る金羊毛を求めて。" },
    artCaption: { es: "\"Jasón y Medea\", J. W. Waterhouse", fr: "« Jason et Médée », J. W. Waterhouse", de: "„Jason und Medea“, J. W. Waterhouse", ja: "《イアソンとメデイア》J・W・ウォーターハウス画" },
  },
  icarus: {
    name: { es: "IX · Las alas de Ícaro", fr: "IX · Les ailes d'Icare", de: "IX · Die Flügel des Ikarus", ja: "第九章 · 太陽の翼" },
    story: { es: "Dédalo, constructor del Laberinto, está preso en su propia obra. Fabrica alas de cera y plumas para escapar volando con su hijo… pero Ícaro vuela demasiado cerca del sol.", fr: "Dédale, bâtisseur du Labyrinthe, est prisonnier de sa propre œuvre. Il fabrique des ailes de cire et de plumes pour s'envoler avec son fils… mais Icare vole trop près du soleil.", de: "Daedalus, Erbauer des Labyrinths, ist Gefangener seines eigenen Werks. Er baut Flügel aus Wachs und Federn, um mit seinem Sohn zu entfliehen… doch Ikarus fliegt der Sonne zu nah.", ja: "迷宮を造ったダイダロスは、自らの作品に囚われた。蝋と羽根で翼を作り、息子とともに空へ逃れる——だがイカロスは太陽に近づきすぎた……" },
    artCaption: { es: "\"La caída de Ícaro\", J. P. Gowy, Museo del Prado", fr: "« La chute d'Icare », J. P. Gowy, musée du Prado", de: "„Der Sturz des Ikarus“, J. P. Gowy, Museo del Prado", ja: "《イカロスの墜落》J・P・ホーヴィ画、プラド美術館" },
  },
  pandora: {
    name: { es: "X · La caja de Pandora", fr: "X · La boîte de Pandore", de: "X · Die Büchse der Pandora", ja: "第十章 · パンドラの箱" },
    story: { es: "Los dioses dan a la primera mujer una caja que jamás debe abrirse. Cuando la curiosidad vence, todos los males vuelan al mundo… y en el fondo queda una sola cosa: la Esperanza.", fr: "Les dieux donnent à la première femme une boîte qu'il ne faut jamais ouvrir. Quand la curiosité l'emporte, tous les maux s'envolent dans le monde… et au fond il ne reste qu'une chose : l'Espérance.", de: "Die Götter geben der ersten Frau eine Büchse, die niemals geöffnet werden darf. Als die Neugier siegt, fliegt alles Übel in die Welt… und am Boden bleibt ein Einziges: die Hoffnung.", ja: "神々は最初の女性に、決して開けてはならない箱を贈った。好奇心が勝ったとき、あらゆる災いが世界へ飛び出した——箱の底に残ったのは、ただ一つ。希望だった。" },
    artCaption: { es: "\"Pandora\", J. W. Waterhouse", fr: "« Pandore », J. W. Waterhouse", de: "„Pandora“, J. W. Waterhouse", ja: "《パンドラ》J・W・ウォーターハウス画" },
  },
};

/* merge translations into CHAPTERS */
CHAPTERS.forEach(ch => {
  const tr = CH_I18N[ch.id];
  if (!tr) return;
  Object.assign(ch.name, tr.name);
  Object.assign(ch.story, tr.story);
  Object.assign(ch.artCaption, tr.artCaption);
  if (tr.levels && ch.levels) {
    ch.levels.forEach((lv, i) => {
      const lt = tr.levels[i];
      if (!lt) return;
      Object.assign(lv.name, lt.name);
      Object.assign(lv.story, lt.story);
      if (lv.cap && lt.cap) Object.assign(lv.cap, lt.cap);
    });
  }
});

/* =====================================================
   SPELLS — Latin → Romance sound-change "transformation spells"
   Each: rule name/description (6 langs) + [latin, target, meaningZh, meaningEn] pairs
   ===================================================== */
const SPELLS = [
  {
    id: "fh", icon: "🇪🇸", target: { zh: "西班牙语", en: "Spanish", es: "español", fr: "espagnol", de: "Spanisch", ja: "スペイン語" },
    name: { zh: "F→H 咒", en: "The F→H Spell", es: "Hechizo F→H", fr: "Sort F→H", de: "F→H-Zauber", ja: "F→H の呪文" },
    rule: {
      zh: "拉丁语开头的 F,到了西班牙语常变成不发音的 H。西班牙把 F 吹成了一口气!",
      en: "Latin words beginning with F often turn it into a silent H in Spanish. Spain blew the F into a puff of air!",
      es: "La F inicial latina suele volverse H muda en español. ¡España sopló la F!",
      fr: "Le F initial latin devient souvent un H muet en espagnol.",
      de: "Das lateinische F am Wortanfang wird im Spanischen oft zu stummem H.",
      ja: "ラテン語の語頭の F は、スペイン語では発音しない H に変わることが多い。"
    },
    pairs: [
      ["filius", "hijo", "儿子", "son"],
      ["farina", "harina", "面粉", "flour"],
      ["fumus", "humo", "烟", "smoke"],
      ["ferrum", "hierro", "铁", "iron"],
      ["filum", "hilo", "线", "thread"],
      ["facere", "hacer", "做", "to do"],
    ],
  },
  {
    id: "cttt", icon: "🇮🇹", target: { zh: "意大利语", en: "Italian", es: "italiano", fr: "italien", de: "Italienisch", ja: "イタリア語" },
    name: { zh: "CT→TT 咒", en: "The CT→TT Spell", es: "Hechizo CT→TT", fr: "Sort CT→TT", de: "CT→TT-Zauber", ja: "CT→TT の呪文" },
    rule: {
      zh: "拉丁语里的 CT,到了意大利语被捏成了双胞胎 TT。",
      en: "Latin CT gets squeezed into twin TT in Italian.",
      es: "La CT latina se convierte en TT gemela en italiano.",
      fr: "Le CT latin devient TT jumeau en italien.",
      de: "Lateinisches CT wird im Italienischen zu Zwillings-TT.",
      ja: "ラテン語の CT は、イタリア語ではふたごの TT になる。"
    },
    pairs: [
      ["octo", "otto", "八", "eight"],
      ["factum", "fatto", "做成的事", "deed"],
      ["noctem", "notte", "夜", "night"],
      ["lac (lactem)", "latte", "牛奶", "milk"],
      ["perfectum", "perfetto", "完美的", "perfect"],
      ["tectum", "tetto", "屋顶", "roof"],
    ],
  },
  {
    id: "ll", icon: "🇪🇸", target: { zh: "西班牙语", en: "Spanish", es: "español", fr: "espagnol", de: "Spanisch", ja: "スペイン語" },
    name: { zh: "PL/CL/FL→LL 咒", en: "The PL/CL/FL→LL Spell", es: "Hechizo PL/CL/FL→LL", fr: "Sort PL/CL/FL→LL", de: "PL/CL/FL→LL-Zauber", ja: "PL/CL/FL→LL の呪文" },
    rule: {
      zh: "拉丁语开头的 PL、CL、FL 三兄弟,进了西班牙语都变成 LL。",
      en: "Latin words starting with PL, CL or FL all melt into LL in Spanish.",
      es: "PL, CL y FL iniciales del latín se funden en LL en español.",
      fr: "PL, CL et FL initiaux du latin fusionnent en LL en espagnol.",
      de: "Lateinisches PL, CL und FL am Anfang verschmelzen im Spanischen zu LL.",
      ja: "ラテン語の語頭 PL・CL・FL は、スペイン語ではみんな LL になる。"
    },
    pairs: [
      ["clavis", "llave", "钥匙", "key"],
      ["flamma", "llama", "火焰", "flame"],
      ["pluvia", "lluvia", "雨", "rain"],
      ["planum", "llano", "平原", "plain"],
      ["plenum", "lleno", "满的", "full"],
      ["clamare", "llamar", "呼喊→叫", "to call"],
    ],
  },
];
