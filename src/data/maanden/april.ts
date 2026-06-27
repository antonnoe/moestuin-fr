import type { Maand } from '@/lib/types';

export const april: Maand = {
  nummer: 4,
  slug: 'april',
  naam: 'April',
  ondertitel: 'Bonen leggen, asperges-piek en eerste aardbeien',
  intro:
    'De maand van het echte planten. Bonen kunnen in volle grond na de laatste-vorst grens (variabel per zone). Asperges piek in de Loire, Aquitaine, Alsace, Provence. Eerste aardbeien in de Midi (Gariguette, Mara des Bois), tomaten worden uitgeplant in beschutte ligging. IJsheiligen (11-13 mei) blijven cruciale grens — vóór die datum geen onbeschermde warmteminnaars in continentale lagen.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Bonen (haricots verts, na half april)', latijn: 'Phaseolus vulgaris' },
        { gewas: 'Wortelen, rode bieten, raap' },
        { gewas: 'Sla, andijvie, snijbiet, spinazie (om de 10 dagen)' },
        { gewas: 'Doperwt, tuinboon (laatste keer)' },
        { gewas: 'Bloemkool, broccoli, kool (in koude bak)' },
        { gewas: 'Maïs', latijn: 'Zea mays' },
        { gewas: 'Komkommer, courgette, pompoen (onder glas)' },
        { gewas: 'Basilicum, peterselie, kervel, koriander, dille' },
      ],
      planten: [
        { gewas: 'Aardappelen (mid-late rassen)' },
        { gewas: 'Sjalot, ui (laatste)' },
        { gewas: 'Aardbeien' },
        { gewas: 'Selderij (in koude bak)' },
      ],
      oogsten: [
        { gewas: 'Asperges (eerste)', latijn: 'Asparagus officinalis', detail: 'volwassen bedden, witte of groene' },
        { gewas: 'Sla, mâche, andijvie' },
        { gewas: 'Spinazie (gewintert)' },
        { gewas: 'Rabarber (volop)' },
        { gewas: 'Prei (laatste van vorig jaar)' },
        { gewas: 'Radijs (eerste)' },
        { gewas: 'Eerste artisjok-poivrades (Bretagne, Camus de Bretagne pas mei)' },
      ],
      onderhoud: [
        'Aardbeien: stro spreiden zodra bloei begint',
        'Aardappelen aanaarden zodra loof boven de grond',
        'Wortelen samen met afrikaantjes of uien planten (wortelvlieg)',
        'Mulchen voor zomerverdamping',
        'Bouillie bordelaise op druif en perzik tegen meeldauw',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Bonen (na half april)' },
        { gewas: 'Wortelen, bieten, raap, snijbiet' },
        { gewas: 'Sla, andijvie' },
        { gewas: 'Doperwt, tuinboon (laatste)' },
        { gewas: 'Mais' },
        { gewas: 'Komkommer, courgette, pompoen, meloen (in koude bak)' },
        { gewas: 'Kruiden: basilicum, peterselie, koriander, dille, kervel' },
      ],
      planten: [
        { gewas: 'Aardappelen (mid-late)' },
        { gewas: 'Aardbeien' },
        { gewas: 'Tomaten (eerste, in beschutte ligging)' },
        { gewas: 'Selderij' },
      ],
      oogsten: [
        { gewas: 'Asperges (Loire, Aquitaine — piek)' },
        { gewas: 'Sla, mâche' },
        { gewas: 'Spinazie' },
        { gewas: 'Rabarber' },
        { gewas: 'Radijs, eerste raap' },
      ],
      onderhoud: [
        'Aardbeien: stro spreiden',
        'Druif: schoffelen, bemesten met compost',
        'Aardappelen aanaarden',
        'Wortelvlieg: afrikaantjes inplanten',
        'Bouillie bordelaise op druif en perzik',
      ],
    },
    continental: {
      zaaien: [
        { gewas: 'Bonen (na half april in milde locaties, eind april elders)' },
        { gewas: 'Wortelen, bieten, raap' },
        { gewas: 'Sla, andijvie, snijbiet, spinazie' },
        { gewas: 'Doperwt, tuinboon (laatste)' },
        { gewas: 'Mais (eind maand)' },
        { gewas: 'Komkommer, courgette (onder glas)' },
        { gewas: 'Kruiden' },
        { gewas: 'Bietsla, snijbiet' },
      ],
      planten: [
        { gewas: 'Aardappelen (mid)' },
        { gewas: 'Aardbeien' },
        { gewas: 'Tomaten in beschutte ligging' },
        { gewas: 'Selderij' },
      ],
      oogsten: [
        { gewas: 'Asperges (Alsace eind maand)' },
        { gewas: 'Sla, mâche' },
        { gewas: 'Spinazie' },
        { gewas: 'Rabarber' },
        { gewas: 'Radijs' },
      ],
      onderhoud: [
        'Laat-vorst tot eind maand mogelijk — vlies klaar',
        'Aardbeien stro spreiden',
        'Aardappelen aanaarden zodra loof boven',
        'Druif: scheuten begeleiden langs draden',
        'Bouillie bordelaise op druif',
        'Eerste maaibeurt gras volledig',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Volle grond: bonen, courgette, komkommer, meloen, pompoen' },
        { gewas: 'Tomaat, paprika, aubergine direct in volle grond' },
        { gewas: 'Wortelen, bieten, raap, snijbiet' },
        { gewas: 'Sla, andijvie (om de 10 dagen, namiddag-schaduw)' },
        { gewas: 'Mais' },
        { gewas: 'Basilicum, peterselie, dille, koriander' },
      ],
      planten: [
        { gewas: 'Tomaten, paprika, aubergine, courgette uitplanten' },
        { gewas: 'Aardbeien' },
        { gewas: 'Aardappelen (mid-late)' },
      ],
      oogsten: [
        { gewas: 'Asperges Pertuis (groene, hoogseizoen)' },
        { gewas: 'Artisjokken (Provence)' },
        { gewas: 'Aardbeien (Gariguette piek)' },
        { gewas: 'Sla, mâche, andijvie, spinazie' },
        { gewas: 'Snijbiet, rabarber' },
        { gewas: 'Eerste radijs en raap' },
      ],
      onderhoud: [
        'Druiven en perzik: bouillie bordelaise tegen mildiou',
        'Mulchen: eerste hete dagen komen eraan',
        'Druppel­irrigatie checken',
        'Olijfboom-snoei afronden vóór bloei',
        'Lavendelvelden tonen eerste bloemknoppen',
      ],
    },
    montagnard: {
      zaaien: [
        { gewas: 'Onder glas: tomaat, paprika, aubergine' },
        { gewas: 'In koude bak: sla, kool, peterselie, radijs' },
        { gewas: 'Eind maand: spinazie, doperwt, tuinboon (volle grond, beschut)' },
      ],
      planten: [
        { gewas: 'Aardappelen (eind maand, vroege rassen)' },
        { gewas: 'Sjalot, ui' },
        { gewas: 'Aardbeien' },
      ],
      oogsten: [
        { gewas: 'Eerste sla onder tunnel' },
        { gewas: 'Asperges (eerste, Pyrenees laaglanden)' },
        { gewas: 'Rabarber (eind maand)' },
        { gewas: 'Wilde paardenbloem-blad, brandnetel, daslook (cueillette)', latijn: 'Allium ursinum', detail: 'wilde plukseizoen in bergvalleien' },
      ],
      onderhoud: [
        'Sneeuwgrens trekt terug — bedden klaarmaken naargelang dooi',
        'Vorst tot half mei mogelijk boven 800 m',
        'Daslook (ail des ours) volop in beboste valleien — wild plukken',
        'Composthoop omzetten en luchten',
        'Fruitbomen­bloesem komt — Bouillie bordelaise vóór regen',
      ],
    },
  },
  juridischDezeMaand: [],
  varietesUitgelicht: ['piment-d-espelette'],
  recepten: [
    {
      naam: 'Cotriade printanière',
      herkomst: 'Bretagne',
      intro:
        'De voorjaarsversie van de Bretonse vissoep: lichter, met de eerste raapjes en vroege wortelen, eerste sla in de soep op het laatste moment voor de frisheid. Lokale zeevis (makreel, schelvis, knorhaan). Lente-versie van de winterse Cotriade — frisser, jonger.',
      seizoensgroenten: ['raap (jonge)', 'wortel (jonge)', 'prei', 'aardappel', 'sla'],
      zones: ['oceanique'],
    },
    {
      naam: 'Salade printanière aux radis et fèves',
      herkomst: 'Île-de-France',
      intro:
        'De eerste verse salade van het seizoen: jonge sla, geblancheerde tuinbonen (uitgepeld), gehalveerde radijs, hardgekookt ei, kleine geitenkaas (Crottin van het seizoen). Vinaigrette van walnotenolie en sherry-azijn. Bistroklassieker uit de Parijse bistro-traditie, april-signature.',
      seizoensgroenten: ['sla', 'tuinboon', 'radijs', 'ei', 'geitenkaas', 'bieslook'],
      zones: ['oceanique_alt'],
    },
    {
      naam: 'Saumon à l\'oseille',
      herkomst: 'Loire / Bourgogne',
      intro:
        'De klassieker van de gebroeders Troisgros uit Roanne: zalmfilet kort gebakken, geserveerd op een saus van witte wijn (Sancerre), room en gehakte oseille (zuring) — die zuring krijgt in april zijn frisse seizoenspiek. Een driesterren-gerecht uit 1962 dat een eeuw eerder onbestaanbaar was. Lichte april-elegant­heid.',
      seizoensgroenten: ['zalm', 'oseille (zuring)', 'sjalot', 'witte wijn (Sancerre)', 'room'],
      zones: ['continental'],
    },
    {
      naam: 'Artichauts à la barigoule',
      herkomst: 'Provence',
      intro:
        'De Provençaalse artisjok-versie: jonge paarse artisjokken (poivrades, voor mei te klein om "fond" te hebben) lang gestoofd in witte wijn met lardons, knoflook, ui, wortel en peterselie. April is het seizoenshart van de paarse Niçoise artisjokken. Klassieker uit de Vaucluse en Var, met een wit­van­ Bandol erbij.',
      seizoensgroenten: ['artisjok (poivrade)', 'ui', 'wortel', 'knoflook', 'lardons', 'witte wijn', 'peterselie'],
      zones: ['mediterraneen'],
    },
    {
      naam: 'Omelette aux morilles',
      herkomst: 'Jura / Alpes',
      intro:
        'April is morilles-tijd in de Jura, Vogezen en de Alpen — de geheime paddestoel die maar twee weken te vinden is, op heel specifieke plekken (essen, vruchtbomen, na lentereiren). Geweekt om zand kwijt te raken, kort gebakken in boter met sjalot, gewikkeld in een omelet van verse boereneieren met crème fraîche en bieslook. Voor wie een vindplek heeft — dat blijft een familiegeheim.',
      seizoensgroenten: ['morilles', 'ei', 'sjalot', 'boter', 'crème fraîche', 'bieslook'],
      zones: ['montagnard'],
    },
  ],
  afbeelding: {
    hero: '/images/maanden/april.png',
    alt: 'April in de Franse moestuin — botanische plaat met asperge, radijs, tuinboon, aardbei en jonge sla in het volle voorjaar',
    credit: 'Plaat IV van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
