import type { Maand } from '@/lib/types';

export const januari: Maand = {
  nummer: 1,
  slug: 'januari',
  naam: 'Januari',
  ondertitel: 'Galette des Rois, plannen en de eerste zaaisels onder glas',
  intro:
    'De rust voor de seizoenstorm. In de Midi zaait men al de eerste sla, schorseneren en doperwten in de volle grond; in het noorden blijft het bij planning, zaadbestellingen en gereedschapsonderhoud. Driekoningen (6 januari) brengt de galette des Rois — de Frangipane- of Briochevariant. Composthoop één keer omzetten. Fruitbomen-winter­snoei doorzetten op vorstvrije dagen. Citrus en kakis worden in het zuiden volop geoogst.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Doperwt (vroege rondzadige)', latijn: 'Pisum sativum', detail: 'in milde Bretonse / Vendeese lagen' },
        { gewas: 'Tuinboon (laatste kans winterzaai)', latijn: 'Vicia faba' },
        { gewas: 'Sjalot (planten als bol)', latijn: 'Allium ascalonicum' },
      ],
      planten: [
        { gewas: 'Fruitbomen op kale wortel (vorstvrije dag)' },
        { gewas: 'Bessenstruiken (aalbes, zwarte bes, framboos, kruisbes)' },
        { gewas: 'Aardperen (laatste kans)', latijn: 'Helianthus tuberosus' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool, savooie' },
        { gewas: 'Witte kool, rode kool' },
        { gewas: 'Prei' },
        { gewas: 'Witlof (forcerend in kelder, donker)' },
        { gewas: 'Veldsla, andijvie' },
        { gewas: 'Schorseneren, pastinaak, knolselderij' },
        { gewas: 'Topinambours' },
        { gewas: 'Coquilles Saint-Jacques (hoogseizoen)' },
      ],
      onderhoud: [
        'Fruitbomen winter-snoeien (appel, peer) op vorstvrije dag',
        'Druiven snoeien — vóór sap omhoog stroomt',
        'Zaad-bestellingen: bestel vroeg, populaire rassen raken op',
        'Teeltplan maken: vierslag-rotatie (blad / wortel / peulvrucht / vrucht)',
        'Gereedschap reviseren, snoeischaren slijpen',
        'Composthoop omzetten, voorjaarsstapel openen',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Doperwt (vroege, milde locaties)' },
        { gewas: 'Tuinboon (laatste kans)' },
      ],
      planten: [
        { gewas: 'Fruitbomen op kale wortel' },
        { gewas: 'Bessenstruiken' },
        { gewas: 'Sjalot, ui-zaadbol' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool, kolen' },
        { gewas: 'Prei' },
        { gewas: 'Witlof, mâche, veldsla' },
        { gewas: 'Schorseneren, pastinaak, knolselderij' },
        { gewas: 'Topinambours' },
      ],
      onderhoud: [
        'Fruitbomen winter-snoeien (appel, peer, druif)',
        'Zaad­bestellingen voor volgend seizoen',
        'Teeltplan',
        'Composthoop omzetten',
        'Galette des Rois 6 jan (Driekoningen) — Frangipane-versie noord van Loire',
      ],
    },
    continental: {
      zaaien: [
        { gewas: 'Onder glas: tomaat, paprika, aubergine (laat in maand)' },
        { gewas: 'Sla, peterselie onder glas' },
      ],
      planten: [
        { gewas: 'Fruitbomen op kale wortel (alleen vorstvrije dagen)' },
        { gewas: 'Sjalot, ui-zaadbol (eind maand)' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool, kolen' },
        { gewas: 'Prei' },
        { gewas: 'Witlof, mâche' },
        { gewas: 'Schorseneren, pastinaak, knolselderij' },
        { gewas: 'Topinambours' },
      ],
      onderhoud: [
        'Strenge vorst (-15 °C mogelijk in Alsace, Vosges, Jura) — wintergroente extra afdekken',
        'Fruitbomen snoeien (appel, peer)',
        'Druiven nog niet snoeien — wachten op februari',
        'Composthoop omzetten op zachte dag',
        'Zaad­bestellingen, teeltplan',
        'Galette des Rois 6 jan — Brioche-versie (couronne) oost van de Vogezen / Alsace',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Sla, andijvie, mâche, spinazie' },
        { gewas: 'Doperwt, tuinboon (volle grond)' },
        { gewas: 'Schorseneren (barbabou / salsifis)', latijn: 'Scorzonera hispanica' },
        { gewas: 'Wortelen, radijs' },
        { gewas: 'Voorjaarsuien' },
        { gewas: 'Knoflook (allerlaatste kans)' },
        { gewas: 'Vroege aardappelen', latijn: 'Solanum tuberosum', detail: 'pootaardappelen voorkiemen op zolder' },
      ],
      planten: [
        { gewas: 'Citrusbomen (zachte vorst voorbij)' },
        { gewas: 'Kakis (zachte mediterrane zone)' },
        { gewas: 'Fruitbomen op kale wortel' },
      ],
      oogsten: [
        { gewas: 'Sla, mâche, andijvie, spinazie' },
        { gewas: 'Prei, kool' },
        { gewas: 'Citrus (hoogseizoen)' },
        { gewas: 'Truffes melanosporum (markten doorlopend)' },
        { gewas: 'Kakis' },
      ],
      onderhoud: [
        'Citrus tegen zachte vorst beschermen (vlies bij -2 °C of lager)',
        'Olijven die voor olie geperst zijn — terughalen of laten leveren',
        'Fruitbomen snoeien',
        'Voorbereiden zaaibedden voor vroege voorjaar (Midi loopt 6-8 weken voor)',
      ],
    },
    montagnard: {
      zaaien: [],
      planten: [],
      oogsten: [
        { gewas: 'Wintergroente uit kelder (kolen, aardappelen, schorseneren)' },
        { gewas: 'Topinambours (vers uit grond bij dooi)' },
        { gewas: 'Geconserveerde voorraad: zuurkool, confituren, drogerij' },
      ],
      onderhoud: [
        'Sneeuw op de moestuin — winterrust',
        'Zaad-bestellingen, teeltplan, catalogus-lezen',
        'Compost laten rusten onder de sneeuw',
        'Brandhout, schoorsteen, kelder controleren',
        'Stookplekken voor volgend seizoen plannen (broei­bakken, kweekkas)',
      ],
    },
  },
  juridischDezeMaand: [],
  varietesUitgelicht: ['haricot-tarbais'],
  recepten: [
    {
      naam: 'Galette des Rois',
      herkomst: 'Île-de-France / overal (Driekoningen)',
      intro:
        'De koek voor Driekoningen (6 januari) en de hele maand daarna. Twee variants: de noord-versie met frangipane (amandelcrème) in bladerdeeg, en de zuid-versie als brioche couronne met gekonfijte vruchten (couronne des Rois in Provence en Languedoc). Een fève (boontje) verstopt — wie hem vindt is koning(in) en draagt de kroon. Klassieker over heel Frankrijk, met regionale variaties tot in januari-eind.',
      seizoensgroenten: ['amandelmeel', 'bladerdeeg of brioche-deeg', 'ei', 'boter', 'suiker'],
      zones: ['oceanique_alt', 'oceanique', 'continental'],
    },
    {
      naam: 'Pot-au-feu',
      herkomst: 'Heel Frankrijk (oorsprong Île-de-France)',
      intro:
        'De Franse stamppotsoep waar elke regio zijn versie van kent — rundvlees (jarret, paleron, plat-de-côtes), mergpijp, kool, prei, wortel, knolselderij, raap, ui met kruidnagel. Drie tot vier uur op laag vuur. Eerst de bouillon met brood-croutons, dan vlees en groente apart, met dijon-mosterd en cornichons. Januari-comfortfood par excellence.',
      seizoensgroenten: ['rundvlees', 'kool', 'prei', 'wortel', 'knolselderij', 'raap', 'ui', 'kruidnagel', 'bouquet garni'],
      zones: ['oceanique', 'oceanique_alt'],
    },
    {
      naam: 'Baeckeoffe',
      herkomst: 'Alsace',
      intro:
        'De Alsacien "bakkers­oven-stoofpot": drie soorten vlees (varken, rund, lam) een nacht gemarineerd in Riesling, kruiden en ui. Bij de bakker afgeleverd op maandagochtend (was-dag, geen tijd om te koken) in een gesloten terrine van geknede deeg-rand — die haalde men later op. Vandaag eerder thuis bereid in oven op 160 °C, vier uur. Een schaal voor zes, een fles Riesling.',
      seizoensgroenten: ['varkensvlees', 'rundvlees', 'lamsvlees', 'aardappel', 'wortel', 'prei', 'ui', 'Riesling', 'bouquet garni'],
      zones: ['continental'],
    },
    {
      naam: 'Bouillabaisse marseillaise',
      herkomst: 'Marseille',
      intro:
        'De échte bouillabaisse — niet de gezeefde soep maar de hele schalvis in de bouillon. Vereist minstens vier soorten rotsvis (rascasse verplicht), saffraan, venkel, sinaasappelschil, tomaat. Twee gangen: eerst de bouillon met rouille en croutons, daarna de vis met aardappelen. Strikte Charte de la Bouillabaisse uit 1980 in Marseille — wie hem maakt zonder rascasse mag de naam niet gebruiken. Januari­specialiteit langs de hele Provençaalse kust.',
      seizoensgroenten: ['rotsvis (rascasse, vive, grondin)', 'venkel', 'tomaat', 'aardappel', 'saffraan', 'sinaasappelschil', 'olijfolie', 'knoflook'],
      zones: ['mediterraneen'],
    },
    {
      naam: 'Garbure d\'hiver',
      herkomst: 'Pyrénées (Béarn / Bigorre)',
      intro:
        'De winterversie van de zomerse garbure: zwaarder, langer gegaard, meer vet. Witte bonen (Tarbais), savooie kool, prei, aardappel, een confit-bout én een stuk poitrine fumée. Drie uur lang door­garen op laag vuur. Bergwinter-soep waar één bord een dagmaaltijd is — Pyreneese boerentraditie. Met een glas Madiran erbij.',
      seizoensgroenten: ['haricot tarbais', 'savooie kool', 'prei', 'aardappel', 'wortel', 'confit de canard', 'poitrine fumée'],
      zones: ['montagnard'],
    },
  ],
  afbeelding: {
    hero: '/images/maanden/januari.png',
    alt: 'Januari in de Franse moestuin — botanische plaat met witlof, prei, spruitkool, schorseneren en topinambour in de winter',
    credit: 'Plaat I van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
