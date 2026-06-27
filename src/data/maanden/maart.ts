import type { Maand } from '@/lib/types';

export const maart: Maand = {
  nummer: 3,
  slug: 'maart',
  naam: 'Maart',
  ondertitel: 'Het seizoen begint — eindelijk grondwerk',
  intro:
    'De grond warmt op. In de meeste zones is het tijd om écht te beginnen: zaaien onder glas, bedden definitief klaarmaken, vroege gewassen direct in volle grond. Pas op met late vorst — vooral de "Saints de Glace" (11–13 mei) zijn nog ver weg.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Tomaten, pepers, aubergines', binnen: true },
        { gewas: 'Bloemkool en broccoli', binnen: true },
        { gewas: 'Sla, radijs, rucola', detail: 'direct in grond, onder vlies' },
        { gewas: 'Erwten, tuinbonen' },
        { gewas: 'Wortelen (vroege)' },
        { gewas: 'Spinazie' },
        { gewas: 'Snijbiet' },
      ],
      planten: [
        { gewas: 'Aardappelen (vroege)', detail: 'pootklaar — vorstvrij' },
        { gewas: 'Knoflook, sjalotten als nog niet geplant' },
        { gewas: 'Asperges (kronen)' },
        { gewas: 'Aardbeien' },
      ],
      oogsten: [{ gewas: 'Prei (einde seizoen)' }, { gewas: 'Veldsla' }, { gewas: 'Rabarber (eerste)' }],
      onderhoud: [
        'Compost uitspreiden op nieuwe bedden',
        'Vlies klaar leggen tegen late vorst',
        'Snoei klein fruit (bessen, frambozen)',
        'Slakken: eerste rondes',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Tomaten, pepers, aubergines binnen' },
        { gewas: 'Sla, radijs, rucola onder vlies' },
        { gewas: 'Erwten, tuinbonen' },
        { gewas: 'Wortelen (vroege)' },
        { gewas: 'Bloemkool, broccoli binnen' },
      ],
      planten: [
        { gewas: 'Aardappelen (vroege)' },
        { gewas: 'Knoflook (eind van plantgelegenheid)' },
        { gewas: 'Asperges' },
      ],
      oogsten: [{ gewas: 'Veldsla' }, { gewas: 'Prei' }, { gewas: 'Eerste rabarber' }],
      onderhoud: [
        'Compost uitbrengen',
        'Bedden lichtjes spitten of geen-spitten met mulchlaag',
        'Vlies / mini-tunnels gereed houden',
      ],
    },
    continental: {
      zaaien: [
        { gewas: 'Tomaten, pepers, aubergines binnen', binnen: true },
        { gewas: 'Sla, radijs', detail: 'koudbak of onder vlies' },
        { gewas: 'Tuinbonen, erwten', detail: 'einde maand' },
        { gewas: 'Spinazie' },
      ],
      planten: [{ gewas: 'Aardappelen (vroege) — einde maand' }, { gewas: 'Sjalotten' }],
      oogsten: [{ gewas: 'Witlof' }, { gewas: 'Bewaarprei' }, { gewas: 'Boerenkool' }],
      onderhoud: [
        'Bedden voorbereiden zodra grond bewerkbaar',
        'Vruchtbomen klaar voor bloei — bemesten',
        'Late vorst voorbereiding (vlies)',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Tomaten, pepers, aubergines binnen / koude kas' },
        { gewas: 'Bonen (vroege)', detail: 'eind maart, onder vlies' },
        { gewas: 'Wortelen, bieten, radijs, sla' },
        { gewas: 'Courgette en pompoen', detail: 'binnen of onder kap' },
        { gewas: 'Maïs', latijn: 'Zea mays' },
      ],
      planten: [
        { gewas: 'Aardappelen (vroege en mid)' },
        { gewas: 'Aardbeien' },
        { gewas: 'Artisjok' },
      ],
      oogsten: [
        { gewas: 'Sla, rucola, radijs' },
        { gewas: 'Erwten (eerste)' },
        { gewas: 'Spinazie' },
        { gewas: 'Citrus (laatste)' },
      ],
      onderhoud: [
        'Olijven snoeien als nog niet gedaan',
        'Mulchlaag aanvullen — droogte komt eraan',
        'Druppelirrigatie testen',
      ],
    },
    montagnard: {
      zaaien: [
        { gewas: 'Tomaten, pepers, aubergines binnen onder lamp' },
        { gewas: 'Sla in koudbak' },
      ],
      planten: [],
      oogsten: [{ gewas: 'Bewaargroenten' }],
      onderhoud: [
        'Snoeihout verzamelen voor volgende winter',
        'Sneeuw smelten — wachten met grondwerk tot bewerkbaar',
        'Tunnels en glaskasten klaar maken',
      ],
    },
  },
  juridischDezeMaand: ['snoei-erfgrens'],
  afbeelding: {
    hero: '/images/maanden/maart.png',
    alt: 'Maart in de Franse moestuin — botanische plaat met radijs, wortel, spinazie, erwt en aardappel in het vroege voorjaar',
    credit: 'Plaat III van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
