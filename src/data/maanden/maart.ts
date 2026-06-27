import type { Maand } from '@/lib/types';

export const maart: Maand = {
  nummer: 3,
  slug: 'maart',
  naam: 'Maart',
  ondertitel: 'Voorjaarsequinox, asperges en de tuin op stoom',
  intro:
    'De maand van het echte begin. Asperges-seizoen opent in de Loire en Provence (witte asperges van Aquitaine, groene van Pertuis). De eerste tomaten, paprika en aubergine onder glas; in het zuiden al in volle grond. Druiven snoeien is het laatste moment voor de sap omhoog stroomt. Vorstrisico blijft tot de IJsheiligen (medio mei) — koud-bak en vlies klaar­houden. Mimosa en pruimenbloesem in de Midi.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Onder tunnel of binnen: tomaat, paprika, aubergine' },
        { gewas: 'Volle grond: wortelen (vroege), spinazie, doperwt, tuinboon' },
        { gewas: 'Sla, peterselie, kervel, radijs' },
        { gewas: 'Bloemkool, broccoli, witte kool (voor uitplant april)' },
        { gewas: 'Bietsla, snijbiet' },
      ],
      planten: [
        { gewas: 'Aardappelen (vroege)', detail: 'voorgekiemde knollen' },
        { gewas: 'Sjalot, ui, knoflook (laatste kans)' },
        { gewas: 'Asperges (laatste kans)' },
        { gewas: 'Aardbeien' },
        { gewas: 'Bessenstruiken (laatste kans op kale wortel)' },
      ],
      oogsten: [
        { gewas: 'Spruitkool (laatste)' },
        { gewas: 'Boerenkool, savooie' },
        { gewas: 'Prei (afronden)' },
        { gewas: 'Witlof, mâche, veldsla' },
        { gewas: 'Schorseneren, pastinaak' },
        { gewas: 'Eerste rabarber-stelen (eind maand)', latijn: 'Rheum rhabarbarum' },
        { gewas: 'Coquilles Saint-Jacques (laatste maand vóór gesloten seizoen mei)' },
      ],
      onderhoud: [
        'Druiven snoeien — afronden vóór sap-stroom',
        'Aardbeien strostro spreiden onder planten',
        'Vorstvrije nachten controleren — vlies klaar bij koude wind',
        'Aardappelen voorkiemen op zolder, voor uitplant april',
        'Onkruid: schoffelen voor de regen',
        'Eerste maaibeurten gras (kort) op zachte dag',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Onder glas: tomaat, paprika, aubergine, courgette, meloen' },
        { gewas: 'Volle grond: wortelen, spinazie, doperwt, tuinboon, peterselie, radijs' },
        { gewas: 'Sla (vroege rassen)' },
        { gewas: 'Bloemkool, broccoli, witte kool' },
      ],
      planten: [
        { gewas: 'Aardappelen (vroege en mid)' },
        { gewas: 'Sjalot, ui (laatste kans)' },
        { gewas: 'Asperges (laatste kans)' },
        { gewas: 'Aardbeien' },
      ],
      oogsten: [
        { gewas: 'Boerenkool, savooie, kool' },
        { gewas: 'Prei' },
        { gewas: 'Witlof, mâche' },
        { gewas: 'Schorseneren, pastinaak' },
        { gewas: 'Eerste rabarber' },
        { gewas: 'Eerste asperges (Loire, eind maand)' },
      ],
      onderhoud: [
        'Druiven snoeien — afronden',
        'Fruitbomen vóór bloei controleren op meeldauw, bladluis',
        'Aardbeien strostro',
        'Onkruid schoffelen, mulchen',
      ],
    },
    continental: {
      zaaien: [
        { gewas: 'Onder glas: tomaat, paprika, aubergine, courgette, prei' },
        { gewas: 'Volle grond (eind maand): wortel, spinazie, doperwt, tuinboon, radijs' },
        { gewas: 'Sla, peterselie' },
        { gewas: 'Bloemkool, witte kool, broccoli, rode kool' },
      ],
      planten: [
        { gewas: 'Aardappelen (vroege, eind maand)' },
        { gewas: 'Sjalot, ui' },
        { gewas: 'Asperges' },
        { gewas: 'Aardbeien' },
      ],
      oogsten: [
        { gewas: 'Boerenkool, savooie' },
        { gewas: 'Prei' },
        { gewas: 'Witlof, mâche' },
        { gewas: 'Schorseneren, pastinaak' },
        { gewas: 'Eerste rabarber (eind maand)' },
      ],
      onderhoud: [
        'Druif-snoei: Alsace, Bourgogne nu pieksnoeitijd',
        'Strenge laat-vorst nog mogelijk (-5 °C tot half maart)',
        'Composthoop omzetten en luchten',
        'Eerste schoffelbeurt onkruid',
        'Fruitboomschoonmaak: meelpoeder bij bladluis vóór bloei',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Volle grond: tomaat, paprika, aubergine (laat in maand)' },
        { gewas: 'Sla, andijvie, snijbiet, spinazie' },
        { gewas: 'Wortelen, radijs, raap' },
        { gewas: 'Doperwt, tuinboon, bonen (eind maand)' },
        { gewas: 'Basilicum (onder glas)', latijn: 'Ocimum basilicum' },
        { gewas: 'Courgette, komkommer (onder beschutting)' },
      ],
      planten: [
        { gewas: 'Aardappelen (vroege, primeur)' },
        { gewas: 'Aardbeien' },
        { gewas: 'Asperges (laatste kans)' },
        { gewas: 'Citrus, fruitbomen (laatste kans op kale wortel)' },
      ],
      oogsten: [
        { gewas: 'Eerste asperges (Pertuis, Camargue)' },
        { gewas: 'Sla, mâche, andijvie, spinazie' },
        { gewas: 'Artisjokken (Provence)' },
        { gewas: 'Snijbiet, prei' },
        { gewas: 'Citrus (afronden)' },
        { gewas: 'Eerste aardbeien (Gariguette begin)', latijn: 'Fragaria × ananassa' },
      ],
      onderhoud: [
        'Olijfbomen snoeien — pieksnoeitijd in Provence/Languedoc',
        'Bouillie bordelaise preventief tegen meeldauw op druif en perzik',
        'Mulchen voor de eerste zomerse warmte begint',
        'Citrus: laatste vorstvrij maken, eerste bemesting voor bloei',
      ],
    },
    montagnard: {
      zaaien: [
        { gewas: 'Onder glas of binnen: tomaat, paprika, aubergine, kool' },
        { gewas: 'Sla (in koude bak)' },
      ],
      planten: [],
      oogsten: [
        { gewas: 'Laatste wintergroente uit kelder' },
        { gewas: 'Topinambours (vers uit grond)' },
        { gewas: 'Boerenkool, savooie boven sneeuwgrens' },
      ],
      onderhoud: [
        'Sneeuwsmelting begint — bodem nog te koud voor zaai in volle grond',
        'Voorzichtig harken zodra grond bewerkbaar',
        'Eerste sneeuwklokjes, perce-neige, primula',
        'Voorbereiden moestuinbedden voor april',
        'Fruitbomen-snoei op vorstvrije dag',
      ],
    },
  },
  juridischDezeMaand: [],
  varietesUitgelicht: ['piment-d-espelette'],
  recepten: [
    {
      naam: 'Kig ha farz au printemps',
      herkomst: 'Bretagne',
      intro:
        'De voorjaarsversie van de Finistère-stoofpot: lichter dan winter, met de eerste jonge wortelen en de laatste prei, een stuk gerookte schenk en de boekweit-pudding (farz) erbij. Tijdens de overgang van winter naar voorjaar in Bretagne staat dit op tafel — eerste verse groente, restvoorraden uit de kelder.',
      seizoensgroenten: ['jonge wortel', 'prei', 'aardappel', 'kool', 'rookspek', 'boekweitmeel'],
      zones: ['oceanique'],
    },
    {
      naam: 'Asperges blanches au beurre',
      herkomst: 'Sologne / Loire',
      intro:
        'De eerste witte asperges van Sologne, of uit Pertuis (Provence) doorgevoerd naar de Loire-keuken. Geschild met een dunschiller (zijdelings) tot het wit, kort gekookt in licht gezouten water met een snufje suiker, en geserveerd met gesmolten boter, zout van Guérande, en een geplette hardgekookt eierdooier eroverheen. Vegetarisch, minimaal, klassiek — vertrouw op het ingrediënt.',
      seizoensgroenten: ['witte asperge', 'boter', 'ei', 'zout van Guérande'],
      zones: ['oceanique_alt'],
    },
    {
      naam: 'Spätzle alsaciens',
      herkomst: 'Alsace',
      intro:
        'De Alsacien­e onregelmatige eier-pasta, oorspronkelijk Duits maar al eeuwen Alsacien geadopteerd. Beslag van bloem, ei, melk en zout — door een spätzle-zeef in kokend water, een paar minuten, opscheppen. Geserveerd met geroosterde uien en boter, of als bijgerecht bij baeckeoffe of coq au Riesling. Eenvoud-en-warmte, eind-winter klassieker.',
      seizoensgroenten: ['bloem', 'ei', 'melk', 'ui', 'boter', 'nootmuskaat'],
      zones: ['continental'],
    },
    {
      naam: 'Salade niçoise',
      herkomst: 'Nice',
      intro:
        'De échte Niçoise: rauwe groente alleen (geen gekookte sla, geen gekookte aardappel — puristen-versie), bevattend tomaat, komkommer, ui, mesclun-sla, hard­gekookt ei, ansjovis óf tonijn (niet beide), zwarte olijven, basilicum. Vinaigrette van olijfolie, geen mayonaise. Maart-versie heeft eerste tomaten uit verwarmde tunnel, vroege artisjok-poivrades (kleine paarse) ruw gesneden. Klassieker volgens César Auvergne in zijn "Cuisine Niçoise" — bedankt opscheppers.',
      seizoensgroenten: ['tomaat', 'komkommer', 'ui', 'mesclun', 'ei', 'ansjovis', 'olijf', 'basilicum'],
      zones: ['mediterraneen'],
    },
    {
      naam: 'Truite aux amandes',
      herkomst: 'Pyrénées / Alpes',
      intro:
        'Bergforel uit een Pyreneese of Alpenrivier (in seizoen vanaf opening forelvangst, tweede zaterdag maart), gebakken in boter met geblancheerde amandelen die in dezelfde pan goudbruin worden. Citroen erbij, peterselie eroverheen. Eenvoud, perfecte techniek: de vis moet kort, het amandel mag bijna donker, de boter beurre-noisette. Klassieker van de bergvallei-restaurants in maart-april.',
      seizoensgroenten: ['forel', 'amandel', 'boter', 'citroen', 'peterselie'],
      zones: ['montagnard'],
    },
  ],
  afbeelding: {
    hero: '/images/maanden/maart.png',
    alt: 'Maart in de Franse moestuin — botanische plaat met asperge, rabarber, doperwt, sneeuwklokje en eerste tomaten in het vroege voorjaar',
    credit: 'Plaat III van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
