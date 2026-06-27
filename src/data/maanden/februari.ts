import type { Maand } from '@/lib/types';

export const februari: Maand = {
  nummer: 2,
  slug: 'februari',
  naam: 'Februari',
  ondertitel: 'Het eerste licht — voorbereidingen krijgen vaart',
  intro:
    'De dagen lengen merkbaar. Onder glas en op vensterbanken komt het zaaiwerk op gang voor de zomergewassen. Buiten ligt het werk vooral in de boomgaard en in het voorbereiden van de bedden zodra de vorst toelaat.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Tomaten', detail: 'binnen / verwarmde kas, einde maand', binnen: true },
        { gewas: 'Pepers en aubergines', binnen: true },
        { gewas: 'Sla', detail: 'onder glas of in koudbak' },
        { gewas: 'Radijs', detail: 'onder vlies' },
        { gewas: 'Tuinbonen', detail: 'direct in grond' },
      ],
      planten: [{ gewas: 'Knoflook' }, { gewas: 'Sjalotten' }, { gewas: 'Aardbeien' }],
      oogsten: [{ gewas: 'Prei' }, { gewas: 'Boerenkool' }, { gewas: 'Witlof' }],
      onderhoud: [
        'Vruchtbomen snoeien (appel, peer) — kernsnoei',
        'Compost omzetten en uitspreiden',
        'Mulchen rond fruitstruiken',
        'Eerste bedden voorbereiden bij dooi',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Tomaten, pepers, aubergines', detail: 'binnen', binnen: true },
        { gewas: 'Sla (binnen of onder glas)' },
        { gewas: 'Tuinbonen, erwten', detail: 'einde maand, bij milde periode' },
      ],
      planten: [{ gewas: 'Knoflook (lente)' }, { gewas: 'Sjalotten' }],
      oogsten: [{ gewas: 'Veldsla' }, { gewas: 'Prei' }, { gewas: 'Boerenkool' }],
      onderhoud: [
        'Vruchtbomen snoeien',
        'Compost uitspreiden',
        'Snoeiafval verbrandbaar verzamelen (let op gemeentereglement)',
      ],
    },
    continental: {
      zaaien: [
        { gewas: 'Tomaten, pepers, aubergines', detail: 'binnen onder lamp', binnen: true },
        { gewas: 'Bloemkool', detail: 'binnen / koudbak' },
        { gewas: 'Knolselderij', binnen: true },
      ],
      planten: [],
      oogsten: [{ gewas: 'Witlof' }, { gewas: 'Bewaargroenten' }],
      onderhoud: [
        'Vruchtbomen snoeien bij vorstvrij weer',
        'Bedden voorbereiden zodra grond te bewerken is',
        'Snoeihout sorteren',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Tomaten, pepers, aubergines', detail: 'binnen of verwarmde kas', binnen: true },
        { gewas: 'Sla, radijs, rucola', detail: 'direct in grond' },
        { gewas: 'Wortelen' },
        { gewas: 'Erwten' },
        { gewas: 'Spinazie' },
      ],
      planten: [
        { gewas: 'Knoflook (lente)' },
        { gewas: 'Sjalotten' },
        { gewas: 'Aardappelen (vroege)', detail: 'einde maand' },
        { gewas: 'Aardbeien' },
      ],
      oogsten: [
        { gewas: 'Citrus' },
        { gewas: 'Sla, veldsla' },
        { gewas: 'Prei' },
        { gewas: 'Boerenkool' },
      ],
      onderhoud: [
        'Olijfbomen klaar voor lente — afsnoeien dood hout',
        'Druppelirrigatie testen en herstellen',
        'Mistral-schade controleren',
      ],
    },
    montagnard: {
      zaaien: [{ gewas: 'Pepers, aubergines binnen onder lamp' }],
      planten: [],
      oogsten: [{ gewas: 'Bewaargroenten uit kelder' }],
      onderhoud: [
        'Sneeuwbelasting op kassen en tunnels',
        'Zaadbestelling afronden voor korter seizoen',
        'Plan focussen op vroege en koude-tolerante rassen',
      ],
    },
  },
  juridischDezeMaand: ['snoei-erfgrens'],
  afbeelding: {
    hero: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=1800&q=80',
    alt: 'Eerste sneeuwklokjes in een Franse tuin in februari',
    credit: 'Unsplash',
  },
};
