import type { Maand } from '@/lib/types';

export const januari: Maand = {
  nummer: 1,
  slug: 'januari',
  naam: 'Januari',
  ondertitel: 'Rust, planning en de eerste zaden binnen',
  intro:
    'De rustigste maand in de moestuin, maar niet de leegste. Het is de tijd om vorig jaar te evalueren, te plannen, gereedschap te onderhouden en — als de vorst toeslaat — de bedden af te dekken. In het mediterrane zuiden begint het werk al weer voorzichtig.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Tuinbonen', latijn: 'Vicia faba', detail: 'in milde zones direct in grond' },
        { gewas: 'Knolselderij', latijn: 'Apium graveolens var. rapaceum', detail: 'onder glas / binnen' },
      ],
      planten: [
        { gewas: 'Knoflook (lente)', latijn: 'Allium sativum', detail: 'bij vorstvrije grond' },
        { gewas: 'Sjalotten' },
      ],
      oogsten: [
        { gewas: 'Spruitkool' },
        { gewas: 'Boerenkool', latijn: 'Brassica oleracea var. acephala' },
        { gewas: 'Prei' },
        { gewas: 'Witlof (uit forceerkist)' },
        { gewas: 'Wortelen (bewaring)' },
      ],
      onderhoud: [
        'Bedden afdekken met compost of bladafval',
        'Gereedschap schoonmaken, slijpen, oliën',
        'Snoeien van appel- en perenbomen bij droog weer',
        'Zaden inventariseren en bestellen',
        'Plan voor het nieuwe seizoen tekenen (rotatie!)',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Tuinbonen', detail: 'onder vlies bij milde periode' },
        { gewas: 'Pepers en aubergines', detail: 'binnen, warmtematje (>20 °C)' },
      ],
      planten: [{ gewas: 'Knoflook (lente)' }, { gewas: 'Sjalotten (vroege rassen)' }],
      oogsten: [
        { gewas: 'Spruitkool' },
        { gewas: 'Boerenkool' },
        { gewas: 'Prei' },
        { gewas: 'Veldsla', latijn: 'Valerianella locusta' },
      ],
      onderhoud: [
        'Bedden afgedekt houden',
        'Gereedschap onderhouden',
        'Vruchtbomen snoeien bij vorstvrije dag',
        'Compost omzetten',
      ],
    },
    continental: {
      zaaien: [
        { gewas: 'Pepers en aubergines', detail: 'binnen onder lamp' },
      ],
      planten: [],
      oogsten: [
        { gewas: 'Witlof (forceerkist)' },
        { gewas: 'Wortelen, knolselderij (bewaring)' },
      ],
      onderhoud: [
        'Bedden afgedekt — vorst kan -15 °C bereiken',
        'Gereedschap onderhouden',
        'Boomgaard snoeien bij dooi',
        'Hokken en kassen schoonmaken',
        'Zaden bestellen en planning maken',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Tuinbonen', detail: 'direct in volle grond' },
        { gewas: 'Erwten' },
        { gewas: 'Spinazie' },
        { gewas: 'Wortelen (vroege rassen)' },
        { gewas: 'Pepers en tomaten', detail: 'binnen, voor vroege plant in maart' },
      ],
      planten: [
        { gewas: 'Knoflook (lente)' },
        { gewas: 'Sjalotten' },
        { gewas: 'Asperges' },
        { gewas: 'Aardbeien' },
      ],
      oogsten: [
        { gewas: 'Citrusvruchten (sinaasappel, citroen, mandarijn)' },
        { gewas: 'Prei' },
        { gewas: 'Boerenkool' },
        { gewas: 'Spinazie' },
      ],
      onderhoud: [
        'Olijfbomen snoeien (zone-afhankelijk)',
        'Citrusbomen bemesten en lichte snoei',
        'Mistral-beschutting controleren',
        'Compost omzetten',
      ],
    },
    montagnard: {
      zaaien: [],
      planten: [],
      oogsten: [{ gewas: 'Bewaargroenten uit kelder' }],
      onderhoud: [
        'Sneeuw van kas en tunnel kloppen',
        'Houthok en gereedschap controleren',
        'Plannen voor korter seizoen — focus op snelle gewassen',
      ],
    },
  },
  juridischDezeMaand: ['compostage-agec'],
  afbeelding: {
    hero: '/images/maanden/januari.png',
    alt: 'Januari in de Franse moestuin — botanische plaat met prei, veldsla, winterspinazie, spruitkool en artisjok',
    credit: 'Plaat I van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
