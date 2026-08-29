/* =====================================================
   FUGA MYTHICA — WORD_ART: a classical artwork for each word
   key -> Wikimedia Commons filename (rendered via Special:FilePath)
   Starter set uses already-verified files; agents fill the rest.
   ===================================================== */
const WORD_ART = {
  taurus: "Bull_leaping_minoan_fresco_archmus_Heraklion.jpg",
  labyrinthus: "Cubiculum_42_mosaic_depicting_a_labyrinth_with_Theseus_and_Minotaur_emblem_House_of_the_Labyrinth_Pompeii.jpg",
  monstrum: "George_Frederic_Watts_-_The_Minotaur_-_Google_Art_Project.jpg",
  filum: "Johann_Heinrich_Tischbein_-_Ariadne_Helping_Theseus_by_Giving_him_a_Ball_of_Thread,_1779.jpg",
  navis: "Ship_procession_fresco,_part_1,_Akrotiri,_Greece.jpg",
  lyra: "Nymphs_finding_the_Head_of_Orpheus.jpg",
  fera: "Roelant_Savery_-_Orpheus_Charming_the_Animals_with_his_Music_-_157_-_Mauritshuis.jpg",
  vipera: "Eurydice_Bitten_by_the_Snake_MET_ap32.27.jpg",
  portitor: "Lytovchenko_Olexandr_Kharon.jpg",
  oblivio: "John_Roddam_Spencer_Stanhope_(1829-1908)_-_The_Waters_of_Lethe_by_the_Plains_of_Elysium_-_1889.4_-_Manchester_Art_Gallery.jpg",
  saxum: "Titian_-_Sisyphus_-_Madrid_-_Prado.jpg",
  labor: "Titian_-_Sisyphus_-_Madrid_-_Prado.jpg",
  inferi: "Joachim_Patinir_007.jpg",
  deus: "Jupiter_Smyrna_Louvre_Ma13.jpg",
  equus: "The_Procession_of_the_Trojan_Horse_in_Troy_by_Giovanni_Domenico_Tiepolo.jpg",
  mare: "Ulysses_and_the_Sirens_by_H.J._Draper.jpg",
  heros: "Hercules_Farnese_3637104088_9c95d7fe3c_b.jpg",
  serpens: "Perseus_by_Cellini_Loggia_dei_Lanzi_n03.jpg",
  spes: "Pandora_-_John_William_Waterhouse.jpg",
  rex: "Themis_Aigeus_Antikensammlung_Berlin_F2538.jpg",
  gladius: "Theseus_Minotaur_BM_Vase_E84.jpg",
  pugna: "Theseus_Minotaur_Ramey_Tuileries.jpg",
  sol: "Gowy-icaro-prado.jpg",
  sponsa: "Orpheus_and_Eurydice_by_Peter_Paul_Rubens.jpg",
  thronus: "Apulian_Red_Figure_volute_krater_with_scenes_of_the_Underworld,_ca._340-330_BC,_Staatliche_Antikensammlungen,_Munich_(8956886411).jpg",
  preces: "Peter_Paul_Rubens_-_Orpheus_und_Eurydike_vor_Pluto_und_Proserpina_-_R_27_-_Kunsthaus_Z%C3%BCrich.jpg",
  nympha: "Ariadne_in_Naxos,_by_Evelyn_De_Morgan,_1877.jpg",
  tempestas: "Iwan_Konstantinowitsch_Aiwasowskij_002.jpg",
};
const WORD_ART_URL = f => "https://commons.wikimedia.org/wiki/Special:FilePath/" + f + "?width=400";
