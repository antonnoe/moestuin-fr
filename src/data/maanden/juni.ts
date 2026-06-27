import type { Maand } from '@/lib/types';

export const juni: Maand = {
  nummer: 6,
  slug: 'juni',
  naam: 'Juni',
  ondertitel: 'De moestuin staat op stoom',
  intro:
    'De langste dagen, eerste echte oogsten en — afhankelijk van de zone — de eerste hittegolf. Juni is de maand waarin het werk verschuift van planten naar onderhouden: schoffelen, opbinden, mulchen, water geven. In het zuiden begint de race tegen de droogte; in het noorden komt alles nu pas op volle snelheid.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Bonen', latijn: 'Phaseolus vulgaris', detail: 'direct in volle grond, om de twee weken' },
        { gewas: 'Wortelen', latijn: 'Daucus carota', detail: 'late soorten voor winteroogst' },
        { gewas: 'Bieten', latijn: 'Beta vulgaris' },
        { gewas: 'Sla', latijn: 'Lactuca sativa', detail: 'om de tien dagen voor doorlopende oogst' },
        { gewas: 'Andijvie', latijn: 'Cichorium endivia' },
        { gewas: 'Witlof', latijn: 'Cichorium intybus' },
        { gewas: 'Courgette', latijn: 'Cucurbita pepo', detail: 'als nog niet gepland' },
      ],
      planten: [
        { gewas: 'Tomaten', latijn: 'Solanum lycopersicum', detail: 'op beschutte plek' },
        { gewas: 'Paprika', latijn: 'Capsicum annuum' },
        { gewas: 'Aubergine', latijn: 'Solanum melongena' },
        { gewas: 'Prei', latijn: 'Allium porrum', detail: 'winterprei plantklaar' },
        { gewas: 'Spruitkool', latijn: 'Brassica oleracea var. gemmifera' },
      ],
      oogsten: [
        { gewas: 'Aardbeien', latijn: 'Fragaria × ananassa' },
        { gewas: 'Sla en andijvie' },
        { gewas: 'Radijs' },
        { gewas: 'Eerste courgettes' },
        { gewas: 'Tuinbonen', latijn: 'Vicia faba' },
        { gewas: 'Verse kruiden', detail: 'basilicum, peterselie, bieslook' },
      ],
      onderhoud: [
        'Tomaten opbinden en dieven (gourmands wegbreken)',
        'Schoffelen voor de regen — onkruid komt nu snel',
        'Mulchen rond gewassen tegen verdamping',
        'Slakken in de gaten houden, vooral na regen',
        'Aardappelen aanaarden',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Bonen', detail: 'direct in volle grond, om de twee weken' },
        { gewas: 'Wortelen', detail: 'late soorten' },
        { gewas: 'Bieten' },
        { gewas: 'Sla', detail: 'liefst plekken met namiddagschaduw' },
        { gewas: 'Andijvie' },
        { gewas: 'Courgette en pompoen', detail: 'laatste gelegenheid' },
        { gewas: 'Komkommer', latijn: 'Cucumis sativus' },
      ],
      planten: [
        { gewas: 'Tomaten' },
        { gewas: 'Paprika' },
        { gewas: 'Aubergine' },
        { gewas: 'Selderij', latijn: 'Apium graveolens' },
        { gewas: 'Prei (winterprei)' },
      ],
      oogsten: [
        { gewas: 'Aardbeien' },
        { gewas: 'Sla' },
        { gewas: 'Radijs' },
        { gewas: 'Tuinbonen' },
        { gewas: 'Erwten', latijn: 'Pisum sativum' },
        { gewas: 'Knoflook', latijn: 'Allium sativum', detail: 'eind van de maand' },
      ],
      onderhoud: [
        'Tomaten opbinden en dieven',
        'Schoffelen, mulchen',
        'Sproeischade voorkomen: water geven in de avond',
        'Slakken bestrijden (bier-vallen, schapenwol)',
      ],
    },
    continental: {
      zaaien: [
        { gewas: 'Bonen', detail: 'nu pas echt veilig — geen risico op late vorst meer' },
        { gewas: 'Wortelen', detail: 'late soorten' },
        { gewas: 'Sla', detail: 'kies hitteresistente rassen' },
        { gewas: 'Bieten' },
        { gewas: 'Courgette en pompoen', detail: 'direct ter plaatse' },
        { gewas: 'Bietsla / snijbiet', latijn: 'Beta vulgaris var. cicla' },
      ],
      planten: [
        { gewas: 'Tomaten', detail: 'nu definitief veilig in volle grond' },
        { gewas: 'Paprika' },
        { gewas: 'Aubergine' },
        { gewas: 'Selderij' },
      ],
      oogsten: [
        { gewas: 'Aardbeien' },
        { gewas: 'Sla' },
        { gewas: 'Radijs' },
        { gewas: 'Tuinbonen' },
        { gewas: 'Erwten' },
        { gewas: 'Asperges', latijn: 'Asparagus officinalis', detail: 'einde van het seizoen, niet meer steken na 24 juni (Saint-Jean)' },
      ],
      onderhoud: [
        'Onweersbuien: tomaten beschutten, gevallen takken weghalen',
        'Schoffelen tussen de buien door',
        'Tomaten opbinden en dieven',
        'Aardappelen aanaarden',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Bonen', detail: 'alleen vroeg in de maand, daarna te heet' },
        { gewas: 'Sla', detail: 'alleen hitteresistente rassen, half in de schaduw' },
        { gewas: 'Snijbiet' },
        { gewas: 'Wortelen', detail: 'laat in de maand, voor winteroogst' },
      ],
      planten: [
        { gewas: 'Zoete aardappel', latijn: 'Ipomoea batatas' },
        { gewas: 'Laat-tomaten en paprika', detail: 'mits goed bewaterd' },
      ],
      oogsten: [
        { gewas: 'Eerste tomaten' },
        { gewas: 'Courgettes' },
        { gewas: 'Knoflook (vroege rassen)', detail: 'planten met afgestorven loof rooien' },
        { gewas: 'Sjalotten', latijn: 'Allium ascalonicum' },
        { gewas: 'Aardbeien' },
        { gewas: 'Abrikozen', latijn: 'Prunus armeniaca' },
        { gewas: 'Erwten', detail: 'einde seizoen' },
      ],
      onderhoud: [
        'Mulchen dik en grondig — stro, gemaaid gras, schors',
        'Druppelirrigatie: één keer per twee à drie dagen, vroeg ochtend',
        'Schaduwdoek voor sla en aubergines bij >32 °C',
        'Plagen: rode spint, witte vlieg — controle bij heet droog weer',
        'Restricties controleren: bij arrêté sécheresse mag besproeien beperkt zijn',
      ],
    },
    montagnard: {
      zaaien: [
        { gewas: 'Bonen', detail: 'nu pas veilig in volle grond' },
        { gewas: 'Courgette en komkommer' },
        { gewas: 'Wortelen' },
        { gewas: 'Sla' },
        { gewas: 'Radijs' },
        { gewas: 'Spinazie', latijn: 'Spinacia oleracea' },
      ],
      planten: [
        { gewas: 'Tomaten', detail: 'beschutte plek, op zuiden, beste eind mei tot half juni' },
        { gewas: 'Courgette' },
        { gewas: 'Kool — boerenkool, savooie', latijn: 'Brassica oleracea' },
      ],
      oogsten: [
        { gewas: 'Sla' },
        { gewas: 'Radijs' },
        { gewas: 'Eerste aardbeien' },
        { gewas: 'Rabarber', latijn: 'Rheum rhabarbarum' },
        { gewas: 'Verse kruiden' },
      ],
      onderhoud: [
        'Nachtvorst tot half juni mogelijk boven 800 m — vlies klaar houden',
        'Stuwbedden en glas hergebruiken voor warmteminnende gewassen',
        'Aardappelen aanaarden',
        'Onkruid wieden voor het zaad zet',
      ],
    },
  },
  juridischDezeMaand: ['restrictions-secheresse', 'recuperation-eau-pluie'],
  varietesUitgelicht: ['tomate-coeur-de-boeuf', 'courgette-de-nice', 'sucrine-du-berry'],
  recepten: [
    {
      naam: 'Artichauts vinaigrette',
      herkomst: 'Bretagne',
      intro:
        'De Camus de Bretagne — driekwart van de Franse artisjok-productie — is in juni op zijn best. De klassieke Bretonse manier: kort in gezouten water gekookt, lauw of koud opgediend met een vinaigrette van sjalot, mosterd en notenolie. Blad voor blad het bodempje door de saus halen, en uiteindelijk het fond als beloning.',
      seizoensgroenten: ['artisjok', 'sjalot', 'peterselie', 'walnotenolie'],
      zones: ['oceanique'],
    },
    {
      naam: 'Tarte aux fraises',
      herkomst: 'Loire-vallei',
      intro:
        'Een korstdeegbodem, een dunne laag crème pâtissière, en daar bovenop de laatste Gariguette- of Mara-des-Bois-aardbeien van het seizoen, glanzend van een lichte geleiglans. Eenvoudig in opzet, lastig in uitvoering: de bodem moet kort en bros zijn, de crème koel, de aardbeien op het laatste moment. Loire-klassieker, juni-signature.',
      seizoensgroenten: ['aardbei (Gariguette, Mara des Bois)', 'ei', 'melk', 'boter'],
      zones: ['oceanique_alt'],
    },
    {
      naam: 'Asperges blanches, sauce mousseline',
      herkomst: 'Alsace',
      intro:
        'Het asperge-seizoen sluit op 24 juni — de Saint-Jean. Voor die datum nog één keer de witte asperges van de Alsace of Champagne: dik geschild, kort gekookt in licht gezouten water met een snufje suiker, en geserveerd met sauce mousseline (hollandaise verlucht met opgeslagen room). Bij voorkeur met een glas Riesling.',
      seizoensgroenten: ['witte asperge', 'ei', 'boter', 'citroen', 'room'],
      zones: ['continental'],
    },
    {
      naam: 'Soupe au pistou',
      herkomst: 'Provence',
      intro:
        'De Provençaalse zomerklassieker: groentesoep met verse witte en groene bonen, courgette, tomaat, en een lepel pistou (basilicum, knoflook, olijfolie, parmezaan) er bovenop. Pure juni-oogst in een kom, geserveerd lauw of zelfs koud — bij hete dagen het lichtste warme gerecht dat denkbaar is.',
      seizoensgroenten: ['cocos blancs', 'haricots verts', 'courgette', 'tomaat', 'wortel', 'basilicum', 'knoflook', 'olijfolie'],
      zones: ['mediterraneen'],
    },
    {
      naam: 'Salade savoyarde au reblochon',
      herkomst: 'Savoie',
      intro:
        'Bergsla uit eigen tuin met blokjes warme reblochon, walnoten, krokant gebakken spek en een handvol verse aardbeien — de combinatie van bergkaas en het zomerfruit dat in de Alpen pas in juni doorbreekt. Vinaigrette van noten­olie en walnotenazijn. Eenvoudig, vullend, onmiskenbaar Savoie.',
      seizoensgroenten: ['sla', 'reblochon', 'walnoot', 'aardbei', 'lardon', 'walnotenolie'],
      zones: ['montagnard'],
    },
  ],
  afbeelding: {
    hero: '/images/maanden/juni.png',
    alt: 'Juni in de Franse moestuin — botanische plaat met tomaat, sperzieboon, wortel, courgette en komkommer in de vroege zomer',
    credit: 'Plaat VI van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
  galerij: [
    {
      src: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80',
      alt: 'Lavendelvelden in de Provence',
      caption: 'Mediterrane juni — drogen begint',
      credit: 'Unsplash',
    },
    {
      src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80',
      alt: 'Verse aardbeien geoogst',
      caption: 'Hoogseizoen voor aardbeien in alle zones',
      credit: 'Unsplash',
    },
    {
      src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80',
      alt: 'Courgettes aan de plant',
      caption: 'Eerste courgettes — let op vrouwelijke bloemen',
      credit: 'Unsplash',
    },
  ],
};
