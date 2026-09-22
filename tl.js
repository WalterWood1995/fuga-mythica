/* =====================================================
   FUGA MYTHICA — TL: the 400 adventure words in each study language.
   key | Deutsch | Français | Italiano | Español
   Nouns carry their article (gender is part of the word); adjectives are
   given in the masculine; plural-only Latin nouns stay plural where the
   modern language does the same.
   ===================================================== */
const TL_RAW = `
pater|der Vater|le père|il padre|el padre
mater|die Mutter|la mère|la madre|la madre
filius|der Sohn|le fils|il figlio|el hijo
filia|die Tochter|la fille|la figlia|la hija
rex|der König|le roi|il re|el rey
regina|die Königin|la reine|la regina|la reina
puer|der Junge|le garçon|il ragazzo|el niño
puella|das Mädchen|la jeune fille|la ragazza|la niña
femina|die Frau|la femme|la donna|la mujer
vir|der Mann|l'homme|l'uomo|el hombre
frater|der Bruder|le frère|il fratello|el hermano
soror|die Schwester|la sœur|la sorella|la hermana
amicus|der Freund|l'ami|l'amico|el amigo
populus|das Volk|le peuple|il popolo|el pueblo
deus|der Gott|le dieu|il dio|el dios
dea|die Göttin|la déesse|la dea|la diosa
heros|der Held|le héros|l'eroe|el héroe
nomen|der Name|le nom|il nome|el nombre
familia|die Familie|la famille|la famiglia|la familia
domus|das Haus|la maison|la casa|la casa
navis|das Schiff|le navire|la nave|la nave
aqua|das Wasser|l'eau|l'acqua|el agua
mare|das Meer|la mer|il mare|el mar
ventus|der Wind|le vent|il vento|el viento
caelum|der Himmel|le ciel|il cielo|el cielo
stella|der Stern|l'étoile|la stella|la estrella
sol|die Sonne|le soleil|il sole|el sol
luna|der Mond|la lune|la luna|la luna
nauta|der Seemann|le marin|il marinaio|el marinero
insula|die Insel|l'île|l'isola|la isla
unda|die Welle|la vague|l'onda|la ola
tempestas|der Sturm|la tempête|la tempesta|la tempestad
portus|der Hafen|le port|il porto|el puerto
terra|die Erde|la terre|la terra|la tierra
nubes|die Wolke|le nuage|la nuvola|la nube
pluvia|der Regen|la pluie|la pioggia|la lluvia
remus|das Ruder|la rame|il remo|el remo
velum|das Segel|la voile|la vela|la vela
piscis|der Fisch|le poisson|il pesce|el pez
iter|die Reise|le voyage|il viaggio|el viaje
porta|das Tor|la porte|la porta|la puerta
ianua|die Tür|la porte d'entrée|l'uscio|la entrada
murus|die Mauer|le mur|il muro|el muro
turris|der Turm|la tour|la torre|la torre
aula|die Halle|la salle|la sala|la sala
mensa|der Tisch|la table|la tavola|la mesa
sella|der Stuhl|la chaise|la sedia|la silla
lucerna|die Öllampe|la lampe à huile|la lucerna|el candil
fenestra|das Fenster|la fenêtre|la finestra|la ventana
tectum|das Dach|le toit|il tetto|el techo
columna|die Säule|la colonne|la colonna|la columna
statua|die Statue|la statue|la statua|la estatua
hortus|der Garten|le jardin|il giardino|el jardín
fons|die Quelle|la fontaine|la fonte|la fuente
aurum|das Gold|l'or|l'oro|el oro
argentum|das Silber|l'argent|l'argento|la plata
marmor|der Marmor|le marbre|il marmo|el mármol
pictura|das Gemälde|la peinture|la pittura|la pintura
servus|der Diener|le serviteur|il servo|el siervo
convivium|das Festmahl|le banquet|il banchetto|el banquete
filum|der Faden|le fil|il filo|el hilo
gladius|das Schwert|l'épée|la spada|la espada
donum|das Geschenk|le don|il dono|el don
corona|die Krone|la couronne|la corona|la corona
anulus|der Ring|l'anneau|l'anello|el anillo
gemma|der Edelstein|la gemme|la gemma|la gema
arca|die Truhe|le coffre|lo scrigno|el arca
clavis|der Schlüssel|la clé|la chiave|la llave
charta|die Karte|la carte|la carta|el papel
epistula|der Brief|la lettre|la lettera|la carta
liber|das Buch|le livre|il libro|el libro
verbum|das Wort|le mot|la parola|la palabra
consilium|der Rat|le conseil|il consiglio|el consejo
fides|die Treue|la foi|la fede|la fe
amor|die Liebe|l'amour|l'amore|el amor
cor|das Herz|le cœur|il cuore|el corazón
animus|der Mut|le courage|l'animo|el ánimo
sapientia|die Weisheit|la sagesse|la sapienza|la sabiduría
secretum|das Geheimnis|le secret|il segreto|el secreto
auxilium|die Hilfe|l'aide|l'aiuto|la ayuda
lux|das Licht|la lumière|la luce|la luz
tenebrae|die Finsternis|les ténèbres|le tenebre|las tinieblas
via|der Weg|la voie|la via|la vía
umbra|der Schatten|l'ombre|l'ombra|la sombra
silentium|die Stille|le silence|il silenzio|el silencio
timor|die Furcht|la peur|il timore|el temor
ignis|das Feuer|le feu|il fuoco|el fuego
fax|die Fackel|la torche|la fiaccola|la antorcha
flamma|die Flamme|la flamme|la fiamma|la llama
saxum|der Fels|le rocher|il sasso|la roca
labyrinthus|das Labyrinth|le labyrinthe|il labirinto|el laberinto
angulus|die Ecke|l'angle|l'angolo|el ángulo
dexter|rechts|droit|destro|derecho
sinister|links|gauche|sinistro|izquierdo
ante|vor|avant|prima|antes
post|nach|après|dopo|después
sub|unter|sous|sotto|bajo
super|über|sur|sopra|sobre
intra|innerhalb|dedans|dentro|dentro
exitus|der Ausgang|la sortie|l'uscita|la salida
vox|die Stimme|la voix|la voce|la voz
auris|das Ohr|l'oreille|l'orecchio|la oreja
oculus|das Auge|l'œil|l'occhio|el ojo
manus|die Hand|la main|la mano|la mano
pes|der Fuß|le pied|il piede|el pie
caput|der Kopf|la tête|il capo|la cabeza
corpus|der Körper|le corps|il corpo|el cuerpo
os|der Mund|la bouche|la bocca|la boca
nasus|die Nase|le nez|il naso|la nariz
digitus|der Finger|le doigt|il dito|el dedo
bracchium|der Arm|le bras|il braccio|el brazo
genu|das Knie|le genou|il ginocchio|la rodilla
capillus|das Haar|le cheveu|il capello|el cabello
dens|der Zahn|la dent|il dente|el diente
lingua|die Zunge|la langue|la lingua|la lengua
sanguis|das Blut|le sang|il sangue|la sangre
spiritus|der Geist|l'esprit|lo spirito|el espíritu
somnus|der Schlaf|le sommeil|il sonno|el sueño
vita|das Leben|la vie|la vita|la vida
mors|der Tod|la mort|la morte|la muerte
taurus|der Stier|le taureau|il toro|el toro
leo|der Löwe|le lion|il leone|el león
lupus|der Wolf|le loup|il lupo|el lobo
serpens|die Schlange|le serpent|il serpente|la serpiente
aquila|der Adler|l'aigle|l'aquila|el águila
equus|das Pferd|le cheval|il cavallo|el caballo
canis|der Hund|le chien|il cane|el perro
felis|die Katze|le chat|il gatto|el gato
avis|der Vogel|l'oiseau|l'uccello|el ave
ursus|der Bär|l'ours|l'orso|el oso
aper|der Eber|le sanglier|il cinghiale|el jabalí
cervus|der Hirsch|le cerf|il cervo|el ciervo
vacca|die Kuh|la vache|la vacca|la vaca
ovis|das Schaf|le mouton|la pecora|la oveja
capra|die Ziege|la chèvre|la capra|la cabra
porcus|das Schwein|le porc|il porco|el cerdo
mus|die Maus|la souris|il topo|el ratón
rana|der Frosch|la grenouille|la rana|la rana
apis|die Biene|l'abeille|l'ape|la abeja
monstrum|das Ungeheuer|le monstre|il mostro|el monstruo
pugna|der Kampf|le combat|la lotta|la pelea
bellum|der Krieg|la guerre|la guerra|la guerra
hasta|der Speer|la lance|la lancia|la lanza
scutum|der Schild|le bouclier|lo scudo|el escudo
galea|der Helm|le casque|l'elmo|el yelmo
arma|die Waffen|les armes|le armi|las armas
sagitta|der Pfeil|la flèche|la freccia|la flecha
arcus|der Bogen|l'arc|l'arco|el arco
hostis|der Feind|l'ennemi|il nemico|el enemigo
miles|der Soldat|le soldat|il soldato|el soldado
fortis|tapfer|fort|forte|fuerte
magnus|groß|grand|grande|grande
parvus|klein|petit|piccolo|pequeño
celer|schnell|rapide|veloce|rápido
tardus|langsam|lent|lento|lento
victoria|der Sieg|la victoire|la vittoria|la victoria
gloria|der Ruhm|la gloire|la gloria|la gloria
virtus|die Tugend|la vertu|la virtù|la virtud
ferrum|das Eisen|le fer|il ferro|el hierro
clamor|der Schrei|la clameur|il clamore|el clamor
unus|eins|un|uno|uno
duo|zwei|deux|due|dos
tres|drei|trois|tre|tres
quattuor|vier|quatre|quattro|cuatro
quinque|fünf|cinq|cinque|cinco
sex|sechs|six|sei|seis
septem|sieben|sept|sette|siete
octo|acht|huit|otto|ocho
novem|neun|neuf|nove|nueve
decem|zehn|dix|dieci|diez
centum|hundert|cent|cento|cien
mille|tausend|mille|mille|mil
albus|weiß|blanc|bianco|blanco
niger|schwarz|noir|nero|negro
ruber|rot|rouge|rosso|rojo
viridis|grün|vert|verde|verde
caeruleus|blau|bleu|azzurro|azul
flavus|gelb|jaune|giallo|amarillo
purpureus|purpurn|pourpre|purpureo|púrpura
color|die Farbe|la couleur|il colore|el color
libertas|die Freiheit|la liberté|la libertà|la libertad
felix|glücklich|heureux|felice|feliz
laetus|froh|joyeux|lieto|alegre
victor|der Sieger|le vainqueur|il vincitore|el vencedor
patria|das Vaterland|la patrie|la patria|la patria
memoria|das Gedächtnis|la mémoire|la memoria|la memoria
fama|der Ruf|la renommée|la fama|la fama
historia|die Geschichte|l'histoire|la storia|la historia
finis|das Ende|la fin|la fine|el fin
initium|der Anfang|le début|l'inizio|el inicio
novus|neu|nouveau|nuovo|nuevo
vetus|alt|vieux|vecchio|viejo
semper|immer|toujours|sempre|siempre
numquam|nie|jamais|mai|nunca
hodie|heute|aujourd'hui|oggi|hoy
cras|morgen|demain|domani|mañana
heri|gestern|hier|ieri|ayer
tempus|die Zeit|le temps|il tempo|el tiempo
annus|das Jahr|l'année|l'anno|el año
dies|der Tag|le jour|il giorno|el día
musica|die Musik|la musique|la musica|la música
carmen|das Lied|le poème|il carme|el poema
lyra|die Leier|la lyre|la lira|la lira
chorda|die Saite|la corde|la corda|la cuerda
sonus|der Klang|le son|il suono|el sonido
cantus|der Gesang|le chant|il canto|el canto
poeta|der Dichter|le poète|il poeta|el poeta
ars|die Kunst|l'art|l'arte|el arte
tibia|die Flöte|la flûte|il flauto|la flauta
tympanum|die Trommel|le tambour|il tamburo|el tambor
numerus|die Zahl|le nombre|il numero|el número
versus|der Vers|le vers|il verso|el verso
fabula|die Fabel|la fable|la favola|la fábula
scaena|die Bühne|la scène|la scena|la escena
theatrum|das Theater|le théâtre|il teatro|el teatro
plausus|der Beifall|les applaudissements|l'applauso|el aplauso
silva|der Wald|la forêt|la selva|la selva
arbor|der Baum|l'arbre|l'albero|el árbol
fera|das wilde Tier|la bête sauvage|la fiera|la fiera
echo|das Echo|l'écho|l'eco|el eco
sponsa|die Braut|l'épouse|la sposa|la esposa
sponsus|der Bräutigam|l'époux|lo sposo|el esposo
nuptiae|die Hochzeit|les noces|le nozze|las nupcias
taeda|die Hochzeitsfackel|le flambeau nuptial|la face nuziale|la tea nupcial
flos|die Blume|la fleur|il fiore|la flor
rosa|die Rose|la rose|la rosa|la rosa
lilium|die Lilie|le lis|il giglio|el lirio
herba|das Kraut|l'herbe|l'erba|la hierba
pratum|die Wiese|le pré|il prato|el prado
vipera|die Viper|la vipère|la vipera|la víbora
venenum|das Gift|le venin|il veleno|el veneno
vulnus|die Wunde|la blessure|la ferita|la herida
gaudium|die Freude|la joie|la gioia|el gozo
lacrima|die Träne|la larme|la lacrima|la lágrima
dolor|der Schmerz|la douleur|il dolore|el dolor
luctus|die Trauer|le deuil|il lutto|el luto
funus|das Begräbnis|les funérailles|il funerale|el funeral
sepulcrum|das Grab|le sépulcre|il sepolcro|el sepulcro
cinis|die Asche|la cendre|la cenere|la ceniza
fatum|das Schicksal|le destin|il fato|el hado
inferi|die Unterwelt|les enfers|gli inferi|los infiernos
regnum|das Reich|le royaume|il regno|el reino
imperium|das Imperium|l'empire|l'impero|el imperio
thronus|der Thron|le trône|il trono|el trono
sceptrum|das Zepter|le sceptre|lo scettro|el cetro
caverna|die Höhle|la caverne|la caverna|la caverna
spelunca|die Grotte|la grotte|la spelonca|la gruta
abyssus|der Abgrund|l'abîme|l'abisso|el abismo
vallis|das Tal|la vallée|la valle|el valle
mons|der Berg|la montagne|il monte|el monte
collis|der Hügel|la colline|il colle|la colina
ripa|das Ufer|la rive|la riva|la ribera
fluvius|der Fluss|le fleuve|il fiume|el río
stagnum|der Teich|l'étang|lo stagno|el estanque
palus|der Sumpf|le marais|la palude|el pantano
nebula|der Nebel|le brouillard|la nebbia|la niebla
frigus|die Kälte|le froid|il freddo|el frío
gelu|der Frost|le gel|il gelo|la helada
horror|das Grauen|l'horreur|l'orrore|el horror
custos|der Wächter|le gardien|il custode|el custodio
portitor|der Fährmann|le passeur|il traghettatore|el barquero
cymba|der Kahn|la barque|la barca|la barca
ratis|das Floß|le radeau|la zattera|la balsa
merces|der Lohn|le salaire|la mercede|la merced
nummus|die Münze|la pièce|la moneta|la moneda
latratus|das Bellen|l'aboiement|il latrato|el ladrido
guttur|die Kehle|la gorge|la gola|la garganta
ungula|die Klaue|la griffe|l'unghia|la uña
cauda|der Schwanz|la queue|la coda|la cola
pellis|das Fell|la peau|la pelle|la piel
belua|die Bestie|la bête|la belva|la bestia
draco|der Drache|le dragon|il drago|el dragón
gigas|der Riese|le géant|il gigante|el gigante
nympha|die Nymphe|la nymphe|la ninfa|la ninfa
anima|die Seele|l'âme|l'anima|el alma
spectrum|das Gespenst|le spectre|lo spettro|el espectro
phantasma|das Phantom|le fantôme|il fantasma|el fantasma
turba|die Menge|la foule|la turba|la turba
multitudo|die Vielzahl|la multitude|la moltitudine|la multitud
ordo|die Ordnung|l'ordre|l'ordine|el orden
oblivio|das Vergessen|l'oubli|l'oblio|el olvido
flumen|der Strom|le fleuve|il fiume|el río
rivus|der Bach|le ruisseau|il rivo|el arroyo
lacus|der See|le lac|il lago|el lago
gurges|der Strudel|le gouffre|il gorgo|el remolino
vortex|der Wirbel|le tourbillon|il vortice|el vórtice
gutta|der Tropfen|la goutte|la goccia|la gota
umor|die Feuchtigkeit|l'humidité|l'umore|el humor
vapor|der Dampf|la vapeur|il vapore|el vapor
ardor|die Glut|l'ardeur|l'ardore|el ardor
aestus|die Hitze|la chaleur|la calura|el calor
glacies|das Eis|la glace|il ghiaccio|el hielo
sulphur|der Schwefel|le soufre|lo zolfo|el azufre
sitis|der Durst|la soif|la sete|la sed
fames|der Hunger|la faim|la fame|el hambre
poculum|der Becher|la coupe|la coppa|la copa
potio|der Trank|la potion|la pozione|la poción
limus|der Schlamm|la boue|il limo|el limo
murmur|das Murmeln|le murmure|il mormorio|el murmullo
profundum|die Tiefe|la profondeur|il profondo|la profundidad
iudex|der Richter|le juge|il giudice|el juez
iudicium|das Urteil|le jugement|il giudizio|el juicio
lex|das Gesetz|la loi|la legge|la ley
ius|das Recht|le droit|il diritto|el derecho
iustitia|die Gerechtigkeit|la justice|la giustizia|la justicia
crimen|das Verbrechen|le crime|il crimine|el crimen
culpa|die Schuld|la faute|la colpa|la culpa
poena|die Strafe|la peine|la pena|la pena
carcer|das Gefängnis|la prison|il carcere|la cárcel
catena|die Kette|la chaîne|la catena|la cadena
vinculum|die Fessel|le lien|il vincolo|el vínculo
veritas|die Wahrheit|la vérité|la verità|la verdad
testis|der Zeuge|le témoin|il testimone|el testigo
causa|die Ursache|la cause|la causa|la causa
sententia|der Urteilsspruch|la sentence|la sentenza|la sentencia
innocens|unschuldig|innocent|innocente|inocente
nocens|schuldig|coupable|colpevole|culpable
supplicium|die Folter|le supplice|il supplizio|el suplicio
labor|die Arbeit|le labeur|il lavoro|la labor
rota|das Rad|la roue|la ruota|la rueda
dominus|der Herr|le maître|il signore|el señor
domina|die Herrin|la maîtresse|la signora|la señora
maiestas|die Majestät|la majesté|la maestà|la majestad
potentia|die Macht|la puissance|la potenza|la potencia
potestas|die Gewalt|le pouvoir|la potestà|la potestad
honor|die Ehre|l'honneur|l'onore|el honor
superbia|der Hochmut|l'orgueil|la superbia|la soberbia
ira|der Zorn|la colère|l'ira|la ira
invidia|der Neid|l'envie|l'invidia|la envidia
misericordia|das Erbarmen|la miséricorde|la misericordia|la misericordia
clementia|die Milde|la clémence|la clemenza|la clemencia
preces|die Gebete|les prières|le preghiere|las plegarias
votum|das Gelübde|le vœu|il voto|el voto
templum|der Tempel|le temple|il tempio|el templo
ara|der Altar|l'autel|l'altare|el altar
sacrificium|das Opfer|le sacrifice|il sacrificio|el sacrificio
thesaurus|der Schatz|le trésor|il tesoro|el tesoro
opes|der Reichtum|la richesse|la ricchezza|la riqueza
diadema|das Diadem|le diadème|il diadema|la diadema
numen|der göttliche Wille|la volonté divine|il nume|el numen
eloquentia|die Beredsamkeit|l'éloquence|l'eloquenza|la elocuencia
suavitas|die Süße|la suavité|la soavità|la suavidad
dulcis|süß|doux|dolce|dulce
amarus|bitter|amer|amaro|amargo
mollis|weich|mou|molle|blando
durus|hart|dur|duro|duro
blandus|sanft|caressant|blando|halagador
ferox|wild|féroce|feroce|feroz
mirus|wunderbar|merveilleux|mirabile|maravilloso
mirabilis|wundersam|admirable|meraviglioso|admirable
stupor|das Staunen|la stupeur|lo stupore|el estupor
admiratio|die Bewunderung|l'admiration|l'ammirazione|la admiración
desiderium|die Sehnsucht|le désir|il desiderio|el deseo
spes|die Hoffnung|l'espoir|la speranza|la esperanza
promissum|das Versprechen|la promesse|la promessa|la promesa
condicio|die Bedingung|la condition|la condizione|la condición
pactum|der Pakt|le pacte|il patto|el pacto
foedus|das Bündnis|l'alliance|l'alleanza|la alianza
gratia|der Dank|la grâce|la grazia|la gracia
venia|die Verzeihung|le pardon|il perdono|el perdón
aspectus|der Anblick|l'aspect|l'aspetto|el aspecto
visus|das Sehen|la vue|la vista|la vista
retro|zurück|en arrière|indietro|atrás
gradus|die Stufe|le degré|il grado|el grado
passus|der Schritt|le pas|il passo|el paso
cursus|der Lauf|la course|la corsa|la carrera
fuga|die Flucht|la fuite|la fuga|la fuga
reditus|die Rückkehr|le retour|il ritorno|el regreso
ascensus|der Aufstieg|l'ascension|l'ascesa|el ascenso
descensus|der Abstieg|la descente|la discesa|el descenso
lumen|der Lichtschein|la lueur|il lume|la lumbre
claritas|die Klarheit|la clarté|la chiarezza|la claridad
obscuritas|die Dunkelheit|l'obscurité|l'oscurità|la oscuridad
dubium|der Zweifel|le doute|il dubbio|la duda
cura|die Sorge|le souci|la cura|el cuidado
desperatio|die Verzweiflung|le désespoir|la disperazione|la desesperación
fiducia|das Vertrauen|la confiance|la fiducia|la confianza
patientia|die Geduld|la patience|la pazienza|la paciencia
festinatio|die Eile|la hâte|la fretta|la prisa
error|der Irrtum|l'erreur|l'errore|el error
aeternitas|die Ewigkeit|l'éternité|l'eternità|la eternidad
immortalitas|die Unsterblichkeit|l'immortalité|l'immortalità|la inmortalidad
natura|die Natur|la nature|la natura|la naturaleza
mundus|die Welt|le monde|il mondo|el mundo
orbis|der Kreis|l'orbe|l'orbe|el orbe
principium|der Ursprung|le principe|il principio|el principio
elementum|das Element|l'élément|l'elemento|el elemento
harmonia|die Harmonie|l'harmonie|l'armonia|la armonía
concordia|die Eintracht|la concorde|la concordia|la concordia
discordia|die Zwietracht|la discorde|la discordia|la discordia
genius|der Genius|le génie|il genio|el genio
laurus|der Lorbeer|le laurier|l'alloro|el laurel
praemium|die Belohnung|la récompense|il premio|el premio
monumentum|das Denkmal|le monument|il monumento|el monumento
littera|der Buchstabe|la lettre|la lettera|la letra
scriptor|der Schriftsteller|l'écrivain|lo scrittore|el escritor
lector|der Leser|le lecteur|il lettore|el lector
vates|der Seher|le devin|il vate|el vate
opus|das Werk|l'œuvre|l'opera|la obra
auctor|der Urheber|l'auteur|l'autore|el autor
`;
const TL = { de: {}, fr: {}, it: {}, es: {} };
TL_RAW.trim().split("\n").forEach(line => {
  const [k, de, fr, it, es] = line.split("|");
  TL.de[k] = de; TL.fr[k] = fr; TL.it[k] = it; TL.es[k] = es;
});
