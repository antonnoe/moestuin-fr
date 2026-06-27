import type { Maand } from '@/lib/types';

export const juli: Maand = {
  nummer: 7,
  slug: 'juli',
  naam: 'Juli',
  ondertitel: 'Onderhoud, water, en de volle oogst begint',
  intro:
    'De maand van waterbeheer en oogsten. In het noorden komt de moestuin op piek; in het zuiden is het overlevingstijd voor de planten. Restricties d\'eau (Propluvia) zijn nu actueel — controleer dagelijks. Begin nu al aan herfstgewassen.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Sla, andijvie — voor herfstoogst' },
        { gewas: 'Wortelen (laat)' },
        { gewas: 'Bieten' },
        { gewas: 'Boerenkool, savooie — voor winter' },
        { gewas: 'Bietsla, snijbiet' },
        { gewas: 'Veldsla (einde maand)' },
        { gewas: 'Knolvenkel' },
      ],
      planten: [
        { gewas: 'Bloemkool, broccoli (winter)' },
        { gewas: 'Prei (winterprei)' },
        { gewas: 'Spruitkool' },
      ],
      oogsten: [
        { gewas: 'Tomaten (eerste)' },
        { gewas: 'Courgettes' },
        { gewas: 'Bonen' },
        { gewas: 'Sla' },
        { gewas: 'Aardbeien (einde)' },
        { gewas: 'Aardappelen (vroege)' },
        { gewas: 'Knoflook' },
        { gewas: 'Sjalotten' },
      ],
      onderhoud: [
        'Tomaten dieven, opbinden, onderste blad weghalen',
        'Water geven in de avond, gericht aan de voet',
        'Mulchen aanvullen',
        'Knoflook drogen na rooien',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Sla, andijvie' },
        { gewas: 'Wortelen (laat)' },
        { gewas: 'Bonen — laatste keer' },
        { gewas: 'Veldsla' },
        { gewas: 'Knolvenkel' },
      ],
      planten: [{ gewas: 'Bloemkool, broccoli (winter)' }, { gewas: 'Prei' }, { gewas: 'Spruitkool' }],
      oogsten: [
        { gewas: 'Eerste tomaten, paprika, courgettes' },
        { gewas: 'Sla, bonen' },
        { gewas: 'Aardappelen' },
        { gewas: 'Knoflook, sjalotten' },
      ],
      onderhoud: [
        'Tomaten dieven en opbinden',
        'Onkruid blijven schoffelen',
        'Mulchen',
      ],
    },
    continental: {
      zaaien: [
        { gewas: 'Sla, andijvie' },
        { gewas: 'Wortelen (laat)' },
        { gewas: 'Boerenkool' },
        { gewas: 'Knolvenkel' },
      ],
      planten: [{ gewas: 'Prei (winter)' }, { gewas: 'Bloemkool en broccoli (winter)' }],
      oogsten: [
        { gewas: 'Tomaten, paprika' },
        { gewas: 'Courgettes' },
        { gewas: 'Bonen, erwten' },
        { gewas: 'Aardappelen' },
        { gewas: 'Knoflook' },
      ],
      onderhoud: [
        'Onweersbuien: snelle controle na elke bui',
        'Tomaten dieven en opbinden',
        'Mulchen tegen verdamping',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Sla — alleen onder schaduwdoek' },
        { gewas: 'Wortelen voor herfst' },
        { gewas: 'Andijvie' },
        { gewas: 'Knolvenkel' },
      ],
      planten: [{ gewas: 'Prei (winter)' }],
      oogsten: [
        { gewas: 'Tomaten (volop)' },
        { gewas: 'Paprika, aubergine' },
        { gewas: 'Courgettes' },
        { gewas: 'Komkommer, meloen' },
        { gewas: 'Aardappelen' },
        { gewas: 'Knoflook, ui, sjalotten' },
        { gewas: 'Abrikoos, perzik' },
      ],
      onderhoud: [
        'Restricties d\'eau controleren via Propluvia',
        'Water uitsluitend in de avond, druppelsysteem',
        'Mulchen 5–10 cm dik',
        'Schaduwdoek voor jonge planten',
        'Mildiou (valse meeldauw) op tomaten: ventilatie en onderste blad weghalen',
      ],
    },
    montagnard: {
      zaaien: [
        { gewas: 'Sla — voor herfstoogst' },
        { gewas: 'Wortelen (laat)' },
        { gewas: 'Snijbiet, spinazie' },
      ],
      planten: [{ gewas: 'Bloemkool, broccoli (mits korte cyclus)' }],
      oogsten: [
        { gewas: 'Sla, radijs' },
        { gewas: 'Aardbeien' },
        { gewas: 'Tuinbonen, erwten' },
        { gewas: 'Eerste courgettes' },
        { gewas: 'Eerste tomaten — als beschut' },
      ],
      onderhoud: [
        'Onweersbuien: controleer na elke bui',
        'Tomaten beschermd houden tegen koude nachten',
        'Mulchen om bodemtemperatuur stabiel te houden',
      ],
    },
  },
  juridischDezeMaand: ['restrictions-secheresse', 'recuperation-eau-pluie'],
  afbeelding: {
    hero: '/images/maanden/juli.png',
    alt: 'Juli in de Franse moestuin — botanische plaat met tomaat, sperzieboon, wortel, courgette en komkommer in de hoogzomer',
    credit: 'Plaat VII van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
