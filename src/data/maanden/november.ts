import type { Maand } from '@/lib/types';

export const november: Maand = {
  nummer: 11,
  slug: 'november',
  naam: 'November',
  ondertitel: 'Toussaint, truffels en de winter klaarmaken',
  intro:
    'De maand van het opruimen, het spitten en het vooruitkijken. Toussaint markeert het einde van het buitenseizoen; in de bergen valt de eerste sneeuw, in de Provence begint het truffelseizoen (Tuber melanosporum, half november). Zware kleigronden grof omspitten en de winter laten doen wat geen frees of spitvork kan. Fruitbomen op kale wortel planten — wortelseizoen tot maart. Beaujolais Nouveau de derde donderdag (20 november 2026).',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Tuinboon (vroege rassen)', latijn: 'Vicia faba', detail: 'voor oogst mei' },
        { gewas: 'Doperwt (winterhard ras)', detail: 'in zachte ligging' },
        { gewas: 'Veldsla (laatste kans)', latijn: 'Valerianella locusta' },
        { gewas: 'Groenbemester (rogge, wikke) — laatste kans' },
      ],
      planten: [
        { gewas: 'Knoflook (laatste)', latijn: 'Allium sativum' },
        { gewas: 'Sjalotten', latijn: 'Allium ascalonicum' },
        { gewas: 'Fruitbomen (op kale wortel)' },
        { gewas: 'Bessenstruiken' },
        { gewas: 'Rabarber-pollen (scheuren en herplanten)', latijn: 'Rheum rhabarbarum' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, savooie, boerenkool' },
        { gewas: 'Witlof (forcerend in kelder)', latijn: 'Cichorium intybus' },
        { gewas: 'Veldsla, andijvie, mâche' },
        { gewas: 'Prei (volop)' },
        { gewas: 'Schorseneren', latijn: 'Scorzonera hispanica' },
        { gewas: 'Knolselderij, raap, knolvenkel' },
        { gewas: 'Witte kool, rode kool' },
        { gewas: 'Aardperen / topinambours', latijn: 'Helianthus tuberosus' },
        { gewas: 'Coquilles Saint-Jacques (mosselseizoen tot maart)', latijn: 'Pecten maximus' },
      ],
      onderhoud: [
        'Bladeren bijeen harken voor compost en mulch',
        'Composthoop afdekken (oud zeil, karton, riet)',
        'Aardbeien-bed mulchen voor winterbescherming',
        'Fruitbomen: chaulage (witkalken van stammen tegen vorst-scheuren)',
        'Cidre bottelen — Bretonse traditie',
        'Tuingerei: snoeischaren slijpen, motoculteur winterklaar',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Tuinboon, doperwt (winterhard)' },
        { gewas: 'Veldsla' },
      ],
      planten: [
        { gewas: 'Knoflook (laatste)' },
        { gewas: 'Sjalotten' },
        { gewas: 'Fruitbomen op kale wortel' },
        { gewas: 'Bessenstruiken' },
        { gewas: 'Rabarber' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool, witte kool, rode kool' },
        { gewas: 'Prei (volop)' },
        { gewas: 'Schorseneren' },
        { gewas: 'Knolselderij, raap, pastinaak', latijn: 'Pastinaca sativa' },
        { gewas: 'Witlof (forcerend)' },
        { gewas: 'Andijvie, veldsla' },
        { gewas: 'Walnoten (laatste)' },
        { gewas: 'Kweepeer (coing)', latijn: 'Cydonia oblonga' },
      ],
      onderhoud: [
        'Kleigronden grof omspitten — vorst doet het werk',
        'Bladeren bijeenkomen, compost afdekken',
        'Fruitbomen snoeien (winterproces start)',
        'Beaujolais Nouveau (derde donderdag, 20 nov 2026) — vier op markt',
      ],
    },
    continental: {
      zaaien: [
        { gewas: 'Tuinboon (vroege)' },
        { gewas: 'Veldsla — alleen in milde lagere lagen' },
      ],
      planten: [
        { gewas: 'Knoflook (vroeg november, vóór harde vorst)' },
        { gewas: 'Sjalotten (laatste kans)' },
        { gewas: 'Fruitbomen op kale wortel — beste maand' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool, savooie, witte kool, rode kool' },
        { gewas: 'Prei (volop)' },
        { gewas: 'Schorseneren, pastinaak, knolselderij' },
        { gewas: 'Witlof (forcerend in donkere kelder)' },
        { gewas: 'Witte kool voor choucroute', detail: 'Alsace-traditie: snijden, kuipen, fermenteren' },
      ],
      onderhoud: [
        'Kleigronden grof omspitten — vorst breekt de kluiten open',
        'Eerste sneeuw mogelijk in Vosges, Jura, Massif des Vosges',
        'Fruitbomen winter-snoeien (pas op vorstvrije dag)',
        'Stookhout binnenhalen, brandhoutopslag controleren',
        'Wijn: eau-de-vie distillatie van vendangerests (Marc de Bourgogne, Marc d\'Alsace)',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Wintersla, mâche, andijvie (doorlopend)' },
        { gewas: 'Spinazie, snijbiet' },
        { gewas: 'Tuinboon, doperwt' },
        { gewas: 'Wortelen, radijs, raap' },
        { gewas: 'Roquette, kervel, peterselie' },
        { gewas: 'Voorjaarsuien' },
      ],
      planten: [
        { gewas: 'Knoflook, sjalotten (laatste)' },
        { gewas: 'Fruitbomen op kale wortel' },
        { gewas: 'Aardbeien, bessenstruiken' },
        { gewas: 'Citrus (jonge boompjes — in bak of vrijstaand)' },
      ],
      oogsten: [
        { gewas: 'Sla, andijvie, mâche, spinazie' },
        { gewas: 'Prei' },
        { gewas: 'Spruitkool, boerenkool' },
        { gewas: 'Olijven (hoogseizoen)', latijn: 'Olea europaea', detail: 'voor olie pers in cooperative' },
        { gewas: 'Citrus (Corsica, Roussillon: clementines, mandarijnen)' },
        { gewas: 'Kweepeer, granaatappel (laatste)' },
        { gewas: 'Eerste truffes melanosporum (half nov)', latijn: 'Tuber melanosporum', detail: 'markten Carpentras, Richerenches' },
        { gewas: 'Kakis (kaki / persimmon)', latijn: 'Diospyros kaki' },
      ],
      onderhoud: [
        'Olijven oogst: bij grote bomen netten uitleggen onder de boom',
        'Citrus winterbescherming klaarzetten voor zachte vorst',
        'Truffel-markten beginnen — Richerenches op zaterdagochtend',
        'Tuin nu weer groeizaam — eerste echte herfstgroei na droge zomer',
      ],
    },
    montagnard: {
      zaaien: [],
      planten: [
        { gewas: 'Fruitbomen op kale wortel — alleen vorstvrije dag' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool, witte kool' },
        { gewas: 'Prei' },
        { gewas: 'Schorseneren, knolselderij, raap' },
        { gewas: 'Aardperen' },
        { gewas: 'Eerste truffels (Drôme provençale, Ventoux flanken)' },
      ],
      onderhoud: [
        'Eerste sneeuw boven 800 m — moestuin in winterrust',
        'Wintergroente afdekken met dennetakken bij dieper dan -5 °C',
        'Brandhoutvoorraad controleren (Toussaint = traditioneel begin stookseizoen)',
        'Pompoenen, aardappelen, appels controleren in opslag',
        'Tuingereedschap droog opslaan',
      ],
    },
  },
  juridischDezeMaand: [],
  varietesUitgelicht: ['haricot-tarbais'],
  recepten: [
    {
      naam: 'Kig ha farz',
      herkomst: 'Bretagne (Finistère)',
      intro:
        'De Bretonse pot-au-feu, maar dan met een boekweit-pudding (farz) erbij die in een linnen zak mee­gegaard wordt met vlees, kool en wortelen. Vlees: rookwors, magere ribstuk, soms een lapje gerookt spek. Het farz wordt na het garen geprakt: de buitenlaag (lipig farz) is doorweekt en boterachtig, het hart kruimelig. Volwaardige novembermaaltijd, signature van de Finistère.',
      seizoensgroenten: ['kool (chou)', 'wortel', 'prei', 'aardappel', 'rookspek', 'boekweitmeel'],
      zones: ['oceanique'],
    },
    {
      naam: 'Tarte aux noix',
      herkomst: 'Périgord / Dauphine',
      intro:
        'De walnoot-taart van het Périgord (AOC Noix du Périgord, ook uit de Dauphine — Noix de Grenoble AOP). November is walnoot-tijd: van de grond geraapt, geroosterd, in een karamel met honing en room op een dunne zanddeegbodem. Met een glas Vin Doux Naturel (Maury, Banyuls). Hartig-zoet, intens, herfstig.',
      seizoensgroenten: ['walnoot', 'honing', 'room', 'boter', 'suiker', 'ei'],
      zones: ['oceanique_alt'],
    },
    {
      naam: 'Choucroute garnie',
      herkomst: 'Alsace',
      intro:
        'November opent het choucroute-seizoen. Gefermenteerde witte kool (gemaakt of gekocht), lang gestoofd in Riesling met jeneverbessen, kruidnagel, peperkorrels. Gegarneerd met Strasbourg-worsten, gerookte schenkel, lardons, en aardappelen die meegegaard zijn in het sap. Een schaal voor zes personen, één pot Riesling, één Alsacien tafel.',
      seizoensgroenten: ['witte kool gefermenteerd', 'aardappel', 'ui', 'wortel', 'kruidnagel', 'jeneverbes', 'Riesling'],
      zones: ['continental'],
    },
    {
      naam: 'Soupe de poisson avec rouille',
      herkomst: 'Marseille / Provence',
      intro:
        'Niet de bouillabaisse (die heeft hele vis nodig) maar de gezeefde versie: rotsvissen lang gekookt, gepureerd, gezeefd, met saffraan, venkel, sinaasappelschil. Geserveerd met geroosterde brood-croutons, geraspte Gruyère, en rouille (mayonaise met saffraan, knoflook, piment). Klassiek november-warmer in Marseille en Toulon.',
      seizoensgroenten: ['ui', 'venkel', 'tomaat (concentré)', 'sinaasappelschil', 'saffraan', 'knoflook', 'piment'],
      zones: ['mediterraneen'],
    },
    {
      naam: 'Garbure béarnaise',
      herkomst: 'Béarn / Pyrénées-Atlantiques',
      intro:
        'De Béarnese stamppot-soep: witte bonen (haricots tarbais AOP), savooie kool, wortel, prei, aardappel, en een poot confit de canard die mee­gegaard wordt. Zo dik dat de lepel rechtop staat — een gezegde uit het Béarn: "la garbure se mange à la fourchette". Met een glas Jurançon erbij. November-eten op zijn warmst.',
      seizoensgroenten: ['witte bonen (Tarbais)', 'savooie kool', 'wortel', 'prei', 'aardappel', 'confit de canard'],
      zones: ['montagnard'],
    },
  ],
  afbeelding: {
    hero: '/images/maanden/november.png',
    alt: 'November in de Franse moestuin — botanische plaat met prei, knolselderij, witte kool, schorseneren en spruitkool in de late herfst',
    credit: 'Plaat XI van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
