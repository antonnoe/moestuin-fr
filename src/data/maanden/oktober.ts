import type { Maand } from '@/lib/types';

export const oktober: Maand = {
  nummer: 10,
  slug: 'oktober',
  naam: 'Oktober',
  ondertitel: 'Oogsten, bewaren, afdekken',
  intro:
    'De grote herfstoogst. Pompoenen, wortels, knolselderij, prei, kool — alles wat in de kelder moet, gaat nu binnen. Vrijgekomen bedden worden gemulcht of met groenbemester ingezaaid. In het zuiden start het tweede groenteseizoen.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Veldsla' },
        { gewas: 'Spinazie' },
        { gewas: 'Tuinbonen', detail: 'voor oogst volgend jaar mei' },
        { gewas: 'Erwten (voor overwintering)' },
      ],
      planten: [{ gewas: 'Knoflook (winter-rassen)' }, { gewas: 'Sjalotten' }, { gewas: 'Aardbeien' }],
      oogsten: [
        { gewas: 'Pompoen, butternut', detail: 'voor de eerste vorst' },
        { gewas: 'Wortelen, bieten, knolselderij' },
        { gewas: 'Prei (zomer)' },
        { gewas: 'Boerenkool' },
        { gewas: 'Bloemkool, broccoli (herfst)' },
        { gewas: 'Appels, peren, kweepeer' },
      ],
      onderhoud: [
        'Pompoenen drogen op zonnige plek (10–14 dagen)',
        'Bedden afdekken met compost / bladafval',
        'Groenbemester zaaien op vrije plekken',
        'Boomgaard: bladafval verzamelen tegen ziektedruk',
      ],
    },
    oceanique_alt: {
      zaaien: [{ gewas: 'Veldsla' }, { gewas: 'Spinazie' }, { gewas: 'Tuinbonen' }],
      planten: [{ gewas: 'Knoflook' }, { gewas: 'Sjalotten' }, { gewas: 'Aardbeien' }],
      oogsten: [
        { gewas: 'Pompoen' },
        { gewas: 'Wortelen, bieten' },
        { gewas: 'Prei' },
        { gewas: 'Knolselderij' },
        { gewas: 'Appels, peren' },
      ],
      onderhoud: [
        'Pompoenen drogen',
        'Bladafval verzamelen',
        'Groenbemester zaaien',
        'Compost aanvullen',
      ],
    },
    continental: {
      zaaien: [{ gewas: 'Veldsla onder glas' }, { gewas: 'Tuinbonen (overwinteren)' }],
      planten: [{ gewas: 'Knoflook' }],
      oogsten: [
        { gewas: 'Pompoen' },
        { gewas: 'Wortelen, bieten, knolselderij' },
        { gewas: 'Prei' },
        { gewas: 'Witlofwortel' },
        { gewas: 'Appels, peren, kweepeer' },
        { gewas: 'Druiven (wijnoogst)' },
      ],
      onderhoud: [
        'Eerste vorst kan komen — alles oogsten of beschermen',
        'Bedden afdekken',
        'Boomgaard schoon achterlaten tegen monilia',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Sla, andijvie' },
        { gewas: 'Spinazie' },
        { gewas: 'Veldsla' },
        { gewas: 'Tuinbonen, erwten' },
        { gewas: 'Wortelen, radijs' },
      ],
      planten: [
        { gewas: 'Knoflook (winter)' },
        { gewas: 'Sjalotten' },
        { gewas: 'Aardbeien' },
        { gewas: 'Aardappelen (voor winteroogst)' },
      ],
      oogsten: [
        { gewas: 'Laatste tomaten, paprika' },
        { gewas: 'Pompoen' },
        { gewas: 'Granaatappel' },
        { gewas: 'Kaki', latijn: 'Diospyros kaki' },
        { gewas: 'Olijven (groene en zwarte beginnen)' },
        { gewas: 'Druiven (laat)' },
      ],
      onderhoud: [
        'Herfstregens benutten — zaaibedden vochtig houden',
        'Olijfoogst voorbereiden',
        'Mulchlaag aanvullen',
      ],
    },
    montagnard: {
      zaaien: [],
      planten: [{ gewas: 'Knoflook (voor de echte vorst)' }],
      oogsten: [
        { gewas: 'Pompoen — direct oogsten' },
        { gewas: 'Wortelen, bieten, prei' },
        { gewas: 'Aardappelen (laat)' },
        { gewas: 'Appels' },
        { gewas: 'Kastanjes', latijn: 'Castanea sativa' },
      ],
      onderhoud: [
        'Vorst kan elk moment — alles afdekken of binnenhalen',
        'Kelder en stalling controleren op droogheid',
        'Kompost klaarmaken voor winter',
      ],
    },
  },
  juridischDezeMaand: ['compostage-agec'],
  afbeelding: {
    hero: 'https://images.unsplash.com/photo-1509223197845-458d87318791?w=1800&q=80',
    alt: 'Pompoenen en herfstoogst',
    credit: 'Unsplash',
  },
};
