import type { Maand } from '@/lib/types';

export const september: Maand = {
  nummer: 9,
  slug: 'september',
  naam: 'September',
  ondertitel: 'De overgang — zomer-oogst en herfst-zaai',
  intro:
    'De maand van twee gezichten: de zomer-oogst draait door, maar de herfst-zaai begint serieus. Wat nu in de grond gaat — veldsla, spinazie, winter-sla, knoflook — komt eind herfst of in het voorjaar tot wasdom.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Veldsla' },
        { gewas: 'Spinazie' },
        { gewas: 'Winter-sla, hertshoornweegbree' },
        { gewas: 'Radijs (laatste)' },
        { gewas: 'Postelein' },
        { gewas: 'Snijbiet' },
        { gewas: 'Witlof — wortels rooien einde maand' },
      ],
      planten: [
        { gewas: 'Aardbeien' },
        { gewas: 'Knoflook (herfst-rassen)', detail: 'voor oogst volgend jaar zomer' },
      ],
      oogsten: [
        { gewas: 'Tomaten (laatste)' },
        { gewas: 'Paprika, aubergine' },
        { gewas: 'Pompoen, courgette' },
        { gewas: 'Bonen' },
        { gewas: 'Aardappelen (laat)' },
        { gewas: 'Appels, peren' },
        { gewas: 'Druiven' },
      ],
      onderhoud: [
        'Tomatenplanten op koudere nachten beschermen',
        'Compost aanvullen',
        'Groenbemester zaaien op vrijgekomen plekken (mosterd, klaver, wikke)',
        'Boomgaard: appels en peren beginnen rijp',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Veldsla, spinazie' },
        { gewas: 'Winter-sla' },
        { gewas: 'Radijs (winterradijs)' },
        { gewas: 'Knolvenkel' },
        { gewas: 'Snijbiet' },
      ],
      planten: [{ gewas: 'Aardbeien' }, { gewas: 'Knoflook (herfst)' }],
      oogsten: [
        { gewas: 'Tomaten, paprika, aubergine' },
        { gewas: 'Pompoen' },
        { gewas: 'Bonen' },
        { gewas: 'Aardappelen' },
        { gewas: 'Appels, peren' },
      ],
      onderhoud: ['Groenbemester zaaien', 'Compost omzetten', 'Boomgaard oogsten'],
    },
    continental: {
      zaaien: [
        { gewas: 'Veldsla, spinazie' },
        { gewas: 'Winter-sla onder glas' },
        { gewas: 'Radijs (winterradijs)' },
      ],
      planten: [{ gewas: 'Aardbeien' }, { gewas: 'Knoflook' }],
      oogsten: [
        { gewas: 'Tomaten, paprika' },
        { gewas: 'Pompoen, courgette' },
        { gewas: 'Bonen' },
        { gewas: 'Aardappelen' },
        { gewas: 'Druiven (wijnoogst begint)' },
        { gewas: 'Mirabellen, pruimen' },
      ],
      onderhoud: [
        'Eerste nachtvorst kan vanaf eind september — vlies klaar',
        'Groenbemester zaaien',
        'Compost omzetten',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Sla, andijvie' },
        { gewas: 'Spinazie' },
        { gewas: 'Snijbiet' },
        { gewas: 'Wortelen voor winter' },
        { gewas: 'Veldsla' },
        { gewas: 'Knolvenkel' },
        { gewas: 'Erwten (voor lente)' },
      ],
      planten: [
        { gewas: 'Aardbeien' },
        { gewas: 'Knoflook (winter-rassen)' },
        { gewas: 'Sjalotten' },
      ],
      oogsten: [
        { gewas: 'Tomaten (volop, einde seizoen)' },
        { gewas: 'Paprika, aubergine' },
        { gewas: 'Druiven' },
        { gewas: 'Vijgen' },
        { gewas: 'Granaatappel', latijn: 'Punica granatum' },
        { gewas: 'Eerste olijven (groen)' },
      ],
      onderhoud: [
        'Eerste herfstregens: irrigatie kalibreren',
        'Restricties kunnen nog gelden',
        'Mulchlaag aanvullen voor winter',
      ],
    },
    montagnard: {
      zaaien: [{ gewas: 'Veldsla' }, { gewas: 'Spinazie' }],
      planten: [{ gewas: 'Knoflook' }],
      oogsten: [
        { gewas: 'Tomaten (laatste, voor vorst)' },
        { gewas: 'Pompoen, courgette' },
        { gewas: 'Aardappelen' },
        { gewas: 'Bonen' },
        { gewas: 'Appels' },
      ],
      onderhoud: [
        'Nachtvorst kan vroeg — vlies klaar',
        'Alles wat rijp is direct oogsten',
        'Bedden afdekken na oogst',
      ],
    },
  },
  juridischDezeMaand: ['compostage-agec'],
  afbeelding: {
    hero: '/images/maanden/september.png',
    alt: 'September in de Franse moestuin — botanische plaat met veldsla, spinazie, andijvie, pompoen en prei in de vroege herfst',
    credit: 'Plaat IX van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
