import type { Maand } from '@/lib/types';

export const mei: Maand = {
  nummer: 5,
  slug: 'mei',
  naam: 'Mei',
  ondertitel: 'Saints de Glace — daarna pas écht buiten',
  intro:
    'De drukste plant-maand. De "Saints de Glace" (11, 12 en 13 mei: Mamert, Pancrace, Servais) markeren in de meeste zones het einde van het vorstrisico. Daarná gaan de warmteminnende gewassen — tomaat, paprika, aubergine, courgette — definitief in volle grond.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Bonen — sperziebonen, snijbonen' },
        { gewas: 'Wortelen, bieten' },
        { gewas: 'Courgette, pompoen, komkommer direct in grond' },
        { gewas: 'Sla — om de tien dagen' },
        { gewas: 'Bietsla, snijbiet' },
        { gewas: 'Basilicum' },
        { gewas: 'Maïs' },
      ],
      planten: [
        { gewas: 'Tomaten — na 13 mei' },
        { gewas: 'Paprika, aubergine — na 13 mei' },
        { gewas: 'Courgette, komkommer' },
        { gewas: 'Prei (zomerprei)' },
      ],
      oogsten: [
        { gewas: 'Asperges (volop)' },
        { gewas: 'Aardbeien (eerste)' },
        { gewas: 'Sla, radijs, rucola' },
        { gewas: 'Rabarber' },
        { gewas: 'Tuinbonen' },
      ],
      onderhoud: [
        'Tomaten direct opbinden',
        'Aardappelen aanaarden',
        'Schoffelen, mulchen',
        'Slakkenpiek — controleer dagelijks',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Bonen' },
        { gewas: 'Wortelen, bieten' },
        { gewas: 'Courgette, pompoen, komkommer' },
        { gewas: 'Sla, andijvie' },
        { gewas: 'Maïs' },
      ],
      planten: [
        { gewas: 'Tomaten — na 13 mei' },
        { gewas: 'Paprika, aubergine — na 13 mei' },
        { gewas: 'Prei' },
      ],
      oogsten: [
        { gewas: 'Asperges' },
        { gewas: 'Aardbeien' },
        { gewas: 'Sla, radijs' },
        { gewas: 'Rabarber' },
      ],
      onderhoud: ['Tomaten opbinden', 'Aardappelen aanaarden', 'Schoffelen', 'Slakkenbestrijding'],
    },
    continental: {
      zaaien: [
        { gewas: 'Bonen — eind mei, na vorstrisico' },
        { gewas: 'Wortelen, bieten' },
        { gewas: 'Sla, andijvie' },
        { gewas: 'Courgette, komkommer onder vlies' },
        { gewas: 'Bietsla' },
      ],
      planten: [
        { gewas: 'Tomaten — strikt na 13 mei, vlies bij nachtvorst' },
        { gewas: 'Paprika, aubergine — laatste week mei' },
        { gewas: 'Prei' },
        { gewas: 'Selderij' },
      ],
      oogsten: [
        { gewas: 'Asperges' },
        { gewas: 'Eerste aardbeien' },
        { gewas: 'Sla' },
        { gewas: 'Rabarber' },
      ],
      onderhoud: [
        'Late vorst tot 15 mei — vlies klaar',
        'Aardappelen aanaarden',
        'Schoffelen',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Bonen, sperziebonen' },
        { gewas: 'Komkommer, courgette, meloen' },
        { gewas: 'Maïs' },
        { gewas: 'Basilicum' },
        { gewas: 'Wortelen (laat in maand, voor herfstoogst)' },
      ],
      planten: [
        { gewas: 'Laatste tomaten, paprika, aubergine' },
        { gewas: 'Zoete aardappel' },
      ],
      oogsten: [
        { gewas: 'Aardbeien' },
        { gewas: 'Eerste courgettes' },
        { gewas: 'Sla, radijs (laatste voor zomerpauze)' },
        { gewas: 'Erwten, tuinbonen' },
        { gewas: 'Knoflook (rooien begin)' },
      ],
      onderhoud: [
        'Mulchen voor de zomer',
        'Druppelirrigatie operationeel',
        'Schaduwdoek klaar voor sla en aubergines',
        'Eerste hittegolf-prep',
      ],
    },
    montagnard: {
      zaaien: [
        { gewas: 'Tuinbonen, erwten' },
        { gewas: 'Sla, radijs' },
        { gewas: 'Wortelen, bieten' },
        { gewas: 'Spinazie' },
      ],
      planten: [
        { gewas: 'Aardappelen' },
        { gewas: 'Tomaten — laatste week mei, met vlies bij nachtvorst' },
      ],
      oogsten: [
        { gewas: 'Rabarber' },
        { gewas: 'Veldsla' },
        { gewas: 'Spinazie' },
        { gewas: 'Asperges (laat)' },
      ],
      onderhoud: [
        'Nachtvorst kan nog tot eind mei',
        'Compost aanvullen',
        'Schoffelen en mulchen',
      ],
    },
  },
  juridischDezeMaand: ['snoei-erfgrens'],
  afbeelding: {
    hero: '/images/maanden/mei.png',
    alt: 'Mei in de Franse moestuin — botanische plaat met tomaat, sperzieboon, sla, courgette en komkommer in de late lente',
    credit: 'Plaat V van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
