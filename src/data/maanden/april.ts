import type { Maand } from '@/lib/types';

export const april: Maand = {
  nummer: 4,
  slug: 'april',
  naam: 'April',
  ondertitel: 'Vol gas — maar nog geen tomaten buiten',
  intro:
    'De tuin wordt groen. Iedere zone heeft nu volop werk: zaaien, planten, schoffelen, wieden. Maar tomaten, paprika en aubergine gaan pas écht buiten ná de "Saints de Glace" (11, 12, 13 mei). Wie vroeg gokt, beschermt met vlies.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Bonen', detail: 'einde maand, onder vlies' },
        { gewas: 'Wortelen, bieten, pastinaak' },
        { gewas: 'Sla — om de tien dagen' },
        { gewas: 'Bietsla, snijbiet' },
        { gewas: 'Komkommer binnen' },
        { gewas: 'Courgette en pompoen binnen of onder kap' },
        { gewas: 'Maïs' },
      ],
      planten: [
        { gewas: 'Aardappelen (mid-vroeg en laat)' },
        { gewas: 'Aardbeien (als nog niet gedaan)' },
        { gewas: 'Kruiden — peterselie, bieslook, dragon' },
      ],
      oogsten: [
        { gewas: 'Rabarber' },
        { gewas: 'Asperges (eerste)' },
        { gewas: 'Radijs' },
        { gewas: 'Sla (eerste van het seizoen)' },
        { gewas: 'Tuinbonen (mediterraan gebied)' },
      ],
      onderhoud: [
        'Schoffelen — onkruid groeit nu sneller dan groente',
        'Slakken: actieve fase',
        'Vlies klaar tegen late vorst',
        'Compost rondom permanente teelten aanvullen',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Bonen', detail: 'voorzichtig, onder vlies' },
        { gewas: 'Wortelen, bieten' },
        { gewas: 'Sla, andijvie' },
        { gewas: 'Courgette en pompoen binnen' },
      ],
      planten: [
        { gewas: 'Aardappelen' },
        { gewas: 'Aardbeien' },
        { gewas: 'Asperges' },
        { gewas: 'Artisjok' },
      ],
      oogsten: [
        { gewas: 'Rabarber' },
        { gewas: 'Asperges' },
        { gewas: 'Radijs' },
        { gewas: 'Veldsla, eerste sla' },
      ],
      onderhoud: ['Schoffelen', 'Slakkenbestrijding', 'Vlies bij vorstwaarschuwing', 'Compost aanvullen'],
    },
    continental: {
      zaaien: [
        { gewas: 'Sla, radijs, spinazie' },
        { gewas: 'Erwten, tuinbonen' },
        { gewas: 'Wortelen, bieten' },
        { gewas: 'Courgette en pompoen binnen' },
        { gewas: 'Bonen — eind van de maand, koudbak' },
      ],
      planten: [{ gewas: 'Aardappelen' }, { gewas: 'Asperges' }, { gewas: 'Aardbeien' }],
      oogsten: [{ gewas: 'Rabarber' }, { gewas: 'Eerste asperges (laat)' }, { gewas: 'Veldsla' }],
      onderhoud: [
        'Late vorst kan nog tot -3 °C — vlies essentieel',
        'Schoffelen',
        'Aardappelen aanaarden zodra ze boven komen',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Bonen — direct in grond' },
        { gewas: 'Komkommer, meloen, watermeloen' },
        { gewas: 'Courgette, pompoen' },
        { gewas: 'Maïs' },
        { gewas: 'Wortelen, bieten' },
        { gewas: 'Basilicum' },
      ],
      planten: [
        { gewas: 'Tomaten (vroege)', detail: 'mits beschut tegen mistral' },
        { gewas: 'Aubergine en paprika (vroege)' },
        { gewas: 'Aardappelen (mid en laat)' },
      ],
      oogsten: [
        { gewas: 'Asperges (volop)' },
        { gewas: 'Eerste sla' },
        { gewas: 'Erwten' },
        { gewas: 'Radijs' },
        { gewas: 'Tuinbonen' },
        { gewas: 'Aardbeien (begin)' },
      ],
      onderhoud: [
        'Druppelirrigatie inschakelen',
        'Mulchlaag (stro/gemaaid gras) aanvullen',
        'Olijven en wijnstokken: laatste snoeibeurt',
      ],
    },
    montagnard: {
      zaaien: [
        { gewas: 'Sla, radijs onder vlies' },
        { gewas: 'Spinazie' },
        { gewas: 'Tuinbonen' },
        { gewas: 'Erwten' },
      ],
      planten: [{ gewas: 'Aardappelen (einde maand, mits grond bewerkbaar)' }],
      oogsten: [{ gewas: 'Veldsla' }, { gewas: 'Rabarber' }, { gewas: 'Spinazie' }],
      onderhoud: [
        'Zaaibedden warmen met vlies',
        'Compost uitspreiden',
        'Sneeuw kan nog tot mei — geduld',
      ],
    },
  },
  juridischDezeMaand: ['recuperation-eau-pluie'],
  afbeelding: {
    hero: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1800&q=80',
    alt: 'Voorjaarsmoestuin met zaailingen en eerste sla',
    credit: 'Unsplash',
  },
};
