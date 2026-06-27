import type { Maand } from '@/lib/types';

export const augustus: Maand = {
  nummer: 8,
  slug: 'augustus',
  naam: 'Augustus',
  ondertitel: 'Volle oogst, voorbereiden op de herfst',
  intro:
    'De maand van veel water, veel oogsten en — paradoxaal — al voorbereiden op het najaar. Wat nu nog gezaaid wordt, oogst je in oktober en november. In de mediterrane zone is overleven de prioriteit; elders begint de vollere oogst.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Sla, andijvie, veldsla (winter)' },
        { gewas: 'Spinazie' },
        { gewas: 'Snijbiet, postelein' },
        { gewas: 'Radijs (herfst)' },
        { gewas: 'Knolvenkel' },
        { gewas: 'Boerenkool' },
        { gewas: 'Witlofwortel' },
      ],
      planten: [{ gewas: 'Aardbeien (voor volgend jaar)' }, { gewas: 'Prei (winterprei)' }],
      oogsten: [
        { gewas: 'Tomaten, paprika, aubergine' },
        { gewas: 'Courgette, komkommer' },
        { gewas: 'Bonen' },
        { gewas: 'Aardappelen' },
        { gewas: 'Uien' },
        { gewas: 'Pruimen, mirabellen' },
      ],
      onderhoud: [
        'Mildiou: bij vochtig weer onderste blad tomaat verwijderen',
        'Bonen blijven plukken om productie te stimuleren',
        'Knoflook en ui drogen',
        'Compost actief omzetten',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Sla, veldsla' },
        { gewas: 'Spinazie' },
        { gewas: 'Radijs' },
        { gewas: 'Boerenkool' },
        { gewas: 'Snijbiet' },
      ],
      planten: [{ gewas: 'Aardbeien' }, { gewas: 'Prei' }],
      oogsten: [
        { gewas: 'Tomaten, paprika, aubergine' },
        { gewas: 'Courgettes' },
        { gewas: 'Bonen' },
        { gewas: 'Aardappelen, uien, sjalotten' },
        { gewas: 'Pruimen' },
      ],
      onderhoud: ['Mulchen', 'Mildiou-preventie', 'Compost omzetten'],
    },
    continental: {
      zaaien: [
        { gewas: 'Sla, veldsla, spinazie (herfst)' },
        { gewas: 'Radijs' },
        { gewas: 'Boerenkool' },
        { gewas: 'Snijbiet' },
      ],
      planten: [{ gewas: 'Aardbeien' }, { gewas: 'Winterprei' }],
      oogsten: [
        { gewas: 'Tomaten (volop)' },
        { gewas: 'Paprika, aubergine' },
        { gewas: 'Courgettes' },
        { gewas: 'Bonen' },
        { gewas: 'Aardappelen' },
        { gewas: 'Uien, sjalotten' },
        { gewas: 'Mirabellen, pruimen, druiven (vroege)' },
      ],
      onderhoud: ['Onweersschade controleren', 'Tomaten dieven en opbinden', 'Compost uitspreiden'],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Sla, andijvie (onder schaduwdoek)' },
        { gewas: 'Spinazie (einde maand)' },
        { gewas: 'Wortelen voor herfst' },
        { gewas: 'Snijbiet' },
      ],
      planten: [{ gewas: 'Aardbeien' }, { gewas: 'Prei' }],
      oogsten: [
        { gewas: 'Tomaten (volop)' },
        { gewas: 'Aubergine, paprika' },
        { gewas: 'Courgettes' },
        { gewas: 'Komkommer, meloen, watermeloen' },
        { gewas: 'Druiven (begin)' },
        { gewas: 'Vijgen', latijn: 'Ficus carica' },
        { gewas: 'Perzik, abrikoos (laatste)' },
      ],
      onderhoud: [
        'Restricties d\'eau dagelijks controleren',
        'Druppelsysteem nakijken op verstoppingen',
        'Mulchlaag aanvullen',
        'Zaden van laat-gepoot gewas binnen 20:00 oogsten',
      ],
    },
    montagnard: {
      zaaien: [
        { gewas: 'Sla, veldsla' },
        { gewas: 'Radijs' },
        { gewas: 'Spinazie' },
        { gewas: 'Snijbiet' },
      ],
      planten: [{ gewas: 'Prei' }, { gewas: 'Boerenkool' }],
      oogsten: [
        { gewas: 'Aardbeien' },
        { gewas: 'Courgettes' },
        { gewas: 'Bonen' },
        { gewas: 'Aardappelen' },
        { gewas: 'Eerste tomaten (als beschut)' },
      ],
      onderhoud: ['Korte zomer benutten — alles oogsten zodra rijp', 'Mulchen', 'Compost aanvullen'],
    },
  },
  juridischDezeMaand: ['restrictions-secheresse'],
  afbeelding: {
    hero: '/images/maanden/augustus.png',
    alt: 'Augustus in de Franse moestuin — botanische plaat met aubergine, paprika, snijbiet, venkel en tomaat in de nazomer',
    credit: 'Plaat VIII van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
