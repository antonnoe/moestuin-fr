import type { Maand } from '@/lib/types';

export const december: Maand = {
  nummer: 12,
  slug: 'december',
  naam: 'December',
  ondertitel: 'Rust — en de eerste plannen voor volgend jaar',
  intro:
    'De stilste maand. Bedden zijn afgedekt, gereedschap binnen, gewassen in de kelder. Het werk verschuift naar planning, snoei van vruchtbomen, en — in het mediterrane zuiden — de olijfoogst. De zaadcatalogi liggen op tafel.',
  zones: {
    oceanique: {
      zaaien: [{ gewas: 'Tuinbonen', detail: 'milde periode, direct in grond' }],
      planten: [{ gewas: 'Fruitbomen (bij vorstvrij weer)' }, { gewas: 'Bessenstruiken' }],
      oogsten: [
        { gewas: 'Prei' },
        { gewas: 'Boerenkool' },
        { gewas: 'Spruitkool' },
        { gewas: 'Veldsla' },
        { gewas: 'Witlof' },
      ],
      onderhoud: [
        'Vruchtbomen snoeien bij droog vorstvrij weer',
        'Kompost omzetten',
        'Zaadcatalogi inventariseren',
        'Plan rotatie volgend jaar',
      ],
    },
    oceanique_alt: {
      zaaien: [],
      planten: [{ gewas: 'Fruitbomen bij vorstvrij weer' }],
      oogsten: [{ gewas: 'Prei' }, { gewas: 'Boerenkool' }, { gewas: 'Spruitkool' }, { gewas: 'Veldsla' }],
      onderhoud: ['Vruchtbomen snoeien', 'Compost omzetten', 'Zaadbestelling voorbereiden'],
    },
    continental: {
      zaaien: [],
      planten: [],
      oogsten: [{ gewas: 'Witlof' }, { gewas: 'Bewaargroenten uit kelder' }, { gewas: 'Spruitkool' }],
      onderhoud: [
        'Vorstperiode: bedden afgedekt houden',
        'Gereedschap onderhouden',
        'Plan en zaadbestelling',
        'Tunnels controleren op sneeuwlast',
      ],
    },
    mediterraneen: {
      zaaien: [{ gewas: 'Tuinbonen, erwten direct in grond' }],
      planten: [
        { gewas: 'Knoflook (laatste kans)' },
        { gewas: 'Fruitbomen, olijven' },
        { gewas: 'Aardbeien' },
      ],
      oogsten: [
        { gewas: 'Olijven (volop oogstseizoen)' },
        { gewas: 'Citrus (mandarijn, sinaasappel)' },
        { gewas: 'Sla, veldsla' },
        { gewas: 'Prei, boerenkool' },
        { gewas: 'Spinazie' },
      ],
      onderhoud: [
        'Olijven persen / verwerken',
        'Olijfbomen lichte snoei',
        'Mistral-bescherming nakijken',
        'Citrus oogsten en bemesten',
      ],
    },
    montagnard: {
      zaaien: [],
      planten: [],
      oogsten: [{ gewas: 'Bewaargroenten uit kelder' }],
      onderhoud: [
        'Sneeuw van tunnels en kas vegen',
        'Houtvoorraad en gereedschap',
        'Plannen — kort seizoen, focus op snelle gewassen',
      ],
    },
  },
  juridischDezeMaand: ['compostage-agec'],
  afbeelding: {
    hero: '/images/maanden/december.png',
    alt: 'December in de Franse moestuin — botanische plaat met winterprei, veldsla, boerenkool, spruitkool en witlof in de vroege winter',
    credit: 'Plaat XII van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
