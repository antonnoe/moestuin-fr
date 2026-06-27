import type { Maand } from '@/lib/types';

export const november: Maand = {
  nummer: 11,
  slug: 'november',
  naam: 'November',
  ondertitel: 'Afsluiten en voorbereiden — de Saint-Catherine',
  intro:
    'De tuin wordt winterklaar. Het Franse spreekwoord "à la Sainte-Catherine, tout bois prend racine" (25 november) markeert het ideale moment voor het planten van bomen en struiken. Bedden worden bedekt, gereedschap binnen gehaald, en de laatste wortelgroenten gerooid.',
  zones: {
    oceanique: {
      zaaien: [{ gewas: 'Tuinbonen', detail: 'voor overwinteren' }, { gewas: 'Erwten' }],
      planten: [
        { gewas: 'Knoflook (winter-rassen)' },
        { gewas: 'Fruitbomen, bessenstruiken, bramen', detail: 'rond Sainte-Catherine (25 nov)' },
        { gewas: 'Rabarber' },
      ],
      oogsten: [
        { gewas: 'Prei' },
        { gewas: 'Boerenkool, savooie' },
        { gewas: 'Spruitkool' },
        { gewas: 'Veldsla' },
        { gewas: 'Wortelen (laat)' },
        { gewas: 'Witlof (forceren begint)' },
      ],
      onderhoud: [
        'Bedden afdekken met compost, mulch of bladafval',
        'Vorstgevoelige planten (artisjok) afdekken',
        'Gereedschap schoonmaken en oliën',
        'Snoei fruitstruiken na blad-val',
        'Bomen planten — beste maand',
      ],
    },
    oceanique_alt: {
      zaaien: [{ gewas: 'Tuinbonen' }],
      planten: [{ gewas: 'Knoflook' }, { gewas: 'Fruitbomen rond Sainte-Catherine' }],
      oogsten: [{ gewas: 'Prei' }, { gewas: 'Boerenkool' }, { gewas: 'Veldsla' }, { gewas: 'Spruitkool' }],
      onderhoud: ['Bedden afdekken', 'Bomen planten', 'Snoei fruitstruiken', 'Gereedschap binnen'],
    },
    continental: {
      zaaien: [],
      planten: [{ gewas: 'Fruitbomen, bessenstruiken (Sainte-Catherine)' }],
      oogsten: [
        { gewas: 'Prei' },
        { gewas: 'Boerenkool, spruitkool' },
        { gewas: 'Wortelen, knolselderij — naar de kelder' },
        { gewas: 'Witlof (uit de forceerbak)' },
      ],
      onderhoud: [
        'Bedden afdekken — vorst kan -10 °C of lager',
        'Artisjok afdekken met stro',
        'Kassen winterklaar',
        'Bomen planten',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Sla, veldsla' },
        { gewas: 'Spinazie' },
        { gewas: 'Tuinbonen, erwten' },
        { gewas: 'Wortelen (winter-rassen)' },
      ],
      planten: [
        { gewas: 'Knoflook (winter)' },
        { gewas: 'Sjalotten' },
        { gewas: 'Olijfbomen, vijgen' },
        { gewas: 'Aardbeien' },
      ],
      oogsten: [
        { gewas: 'Olijven (zwarte)' },
        { gewas: 'Citrus (eerste mandarijnen)' },
        { gewas: 'Veldsla, sla' },
        { gewas: 'Prei' },
        { gewas: 'Granaatappel (laatste)' },
      ],
      onderhoud: [
        'Mistral-beschutting controleren',
        'Olijfoogst en persen',
        'Aardbeibedden vernieuwen',
      ],
    },
    montagnard: {
      zaaien: [],
      planten: [],
      oogsten: [
        { gewas: 'Prei (uit kelder)' },
        { gewas: 'Boerenkool — vorst maakt zoeter' },
        { gewas: 'Bewaargroenten' },
      ],
      onderhoud: [
        'Tunnels en kassen sneeuwbestendig',
        'Houtvoorraad controleren',
        'Compost afdekken tegen uitspoeling',
      ],
    },
  },
  juridischDezeMaand: ['snoei-erfgrens'],
  afbeelding: {
    hero: '/images/maanden/november.png',
    alt: 'November in de Franse moestuin — botanische plaat met pastinaak, winterpostelein, topinamboer, savooiekool en schorseneer in de late herfst',
    credit: 'Plaat XI van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
