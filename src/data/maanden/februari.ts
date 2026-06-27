import type { Maand } from '@/lib/types';

export const februari: Maand = {
  nummer: 2,
  slug: 'februari',
  naam: 'Februari',
  ondertitel: 'Chandeleur, snoeien en de eerste zaaisels',
  intro:
    'De maand van het echte voorbereiden. In de Midi gaan tomaten, paprika\'s en aubergines onder glas, de eerste asperges-planten in de grond. In het noorden blijft het bij snoeien (alle fruitbomen behalve steenfruit), gereedschap-revisie en zaad­bestellingen. Chandeleur (2 februari) brengt crêpes en cidre — Bretonse traditie. Strenge vorst kan nog tot eind van de maand toeslaan.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Onder tunnel of koude bak: sla, peterselie, kervel' },
        { gewas: 'Sjalot (planten als bol)', latijn: 'Allium ascalonicum' },
        { gewas: 'Plantuitjes (zaaiui-bolletjes)', latijn: 'Allium cepa' },
        { gewas: 'Doperwt (rondzadig, in milde locatie)' },
        { gewas: 'Tuinboon (voorgekiemde zaden)' },
      ],
      planten: [
        { gewas: 'Fruitbomen op kale wortel (laatste fase)' },
        { gewas: 'Bessenstruiken' },
        { gewas: 'Asperges (voor oogst over 2-3 jaar)', latijn: 'Asparagus officinalis' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool, savooie' },
        { gewas: 'Witte kool, rode kool' },
        { gewas: 'Prei' },
        { gewas: 'Witlof (forcerend in donkere kelder)' },
        { gewas: 'Veldsla, andijvie' },
        { gewas: 'Schorseneren, pastinaak, knolselderij' },
        { gewas: 'Coquilles Saint-Jacques (laatste maanden van seizoen)' },
      ],
      onderhoud: [
        'Appel- en peer­bomen winter-snoeien (afronden)',
        'Druiven snoeien — nu of vroeg maart, vóór sap omhoog stroomt',
        'Kruisbessen, aalbessen, zwarte bessen lichte snoei',
        'Composthoop omzetten en luchten',
        'Tuinboon voorkiemen in vochtige doek',
        'Vlies en tunnels reserve aanleggen voor laat-vorst maart',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Onder glas: tomaat, paprika, aubergine (laat in maand)' },
        { gewas: 'Onder tunnel: sla, peterselie, kervel, radijs' },
        { gewas: 'Doperwt, tuinboon (voorgeweekt)' },
        { gewas: 'Spinazie, snijbiet' },
      ],
      planten: [
        { gewas: 'Fruitbomen op kale wortel' },
        { gewas: 'Sjalot, plantuitjes' },
        { gewas: 'Asperges' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool, kolen' },
        { gewas: 'Prei' },
        { gewas: 'Witlof, mâche' },
        { gewas: 'Schorseneren, pastinaak, knolselderij' },
      ],
      onderhoud: [
        'Fruitbomen-winter­snoei afronden',
        'Druif snoeien vóór maart',
        'Compost luchten',
        'Zaaibedden voorbereiden onder tunnel',
      ],
    },
    continental: {
      zaaien: [
        { gewas: 'Onder glas: tomaat, paprika, aubergine, prei' },
        { gewas: 'Onder tunnel: sla, kervel, peterselie' },
        { gewas: 'Bloemkool (binnen, voor uitplant april)', latijn: 'Brassica oleracea' },
      ],
      planten: [
        { gewas: 'Fruitbomen op kale wortel (laatste vorstvrije dagen)' },
        { gewas: 'Sjalot, plantuitjes (eind maand)' },
        { gewas: 'Asperges' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool, kolen' },
        { gewas: 'Prei' },
        { gewas: 'Witlof, mâche' },
        { gewas: 'Schorseneren, pastinaak' },
      ],
      onderhoud: [
        'Strenge vorst nog mogelijk (-10 °C Alsace, Vosges, Jura)',
        'Fruitbomen-winter­snoei afronden',
        'Druif snoeien — Bourgogne, Alsace nu de pieksnoeitijd',
        'Composthoop omzetten',
        'Mardi Gras / Mardi Gras-bûgnes (Lyon traditie)',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Onder glas: tomaat, paprika, aubergine, courgette, meloen' },
        { gewas: 'Volle grond: sla, doperwt, tuinboon, spinazie, peterselie' },
        { gewas: 'Wortelen, radijs, raap, snijbiet' },
        { gewas: 'Vroege aardappelen (poten)', detail: 'pootaardappelen voorgekiemd' },
        { gewas: 'Voorjaarsuien' },
      ],
      planten: [
        { gewas: 'Asperges (laatste kans)' },
        { gewas: 'Aardbeien' },
        { gewas: 'Fruitbomen, bessenstruiken (laatste kans)' },
        { gewas: 'Citrus' },
      ],
      oogsten: [
        { gewas: 'Sla, mâche, andijvie, spinazie' },
        { gewas: 'Prei, kool, snijbiet' },
        { gewas: 'Eerste artisjokken (Provence-Camargue)', latijn: 'Cynara scolymus' },
        { gewas: 'Citrus (laatste hoogseizoen)' },
        { gewas: 'Truffes (laatste maand voor melanosporum)' },
      ],
      onderhoud: [
        'Citrus snoeien na laatste vorstgevaar',
        'Olijfbomen lichte snoei (de echte snoei in maart)',
        'Mimosa bloeit — vroege voorjaarsbloesem (Tanneron, Bormes)',
        'Voorgekiemde aardappelen op zolder klaarmaken',
      ],
    },
    montagnard: {
      zaaien: [
        { gewas: 'Binnen onder lamp: tomaat, paprika, aubergine (laat in maand)' },
      ],
      planten: [],
      oogsten: [
        { gewas: 'Wintergroente uit kelder' },
        { gewas: 'Witlof (forcerend)' },
        { gewas: 'Verse prei en boerenkool boven sneeuwgrens' },
      ],
      onderhoud: [
        'Sneeuw op de tuin tot eind maand (boven 800 m)',
        'Voorbereiden zaaikist, kweekkas, broeibed',
        'Zaden bestellen, teeltplan finaliseren',
        'Sneeuwklokjes en eerste perce-neige in lager gelegen valleien',
      ],
    },
  },
  juridischDezeMaand: [],
  varietesUitgelicht: ['haricot-tarbais'],
  recepten: [
    {
      naam: 'Crêpes de la Chandeleur',
      herkomst: 'Bretagne / overal (2 februari)',
      intro:
        'Op Chandeleur (2 feb) worden in heel Frankrijk crêpes gebakken. Tradities: de eerste crêpe met de rechterhand omdraaien terwijl je een goudstuk in de linker­hand houdt — brengt geluk en welvaart. Bretonse versie: blé noir (sarrasin) voor de hartige galette, fijne tarwemeel-crêpe voor de zoete. Met cidre brut erbij. Eenvoudig, vol traditie, februari-koningsgerecht.',
      seizoensgroenten: ['bloem (tarwe of boekweit)', 'ei', 'melk', 'boter', 'cider', 'rum'],
      zones: ['oceanique'],
    },
    {
      naam: 'Blanquette de veau',
      herkomst: 'Île-de-France / Lyon',
      intro:
        'De klassieke witte kalfsvlees-stoof: schouder of stoof­vlees in water met ui en kruidnagel, wortel, prei, knolselderij — drie uur op laag vuur. Sap wordt afgebonden met room en eidooier, met champignons en parelui erin. Geserveerd op rijst. Brasserie-klassieker uit het 19e-eeuwse Parijs, februari is het seizoen-hart.',
      seizoensgroenten: ['kalfsvlees', 'ui', 'wortel', 'prei', 'knolselderij', 'kruidnagel', 'paddestoel', 'room'],
      zones: ['oceanique_alt'],
    },
    {
      naam: 'Tarte à l\'oignon alsacienne',
      herkomst: 'Alsace',
      intro:
        'Een dunne taart van zachte deeg, gevuld met lang gestoofde uien (anderhalf uur op laag vuur), spek, room en eieren — Alsacien­e tegenhanger van de quiche lorraine. Eenvoudige ingrediënten, alles draait om de uien­bereiding. Februari-comfortfood: opslagsla en wortels zijn nog ver weg, uien zijn er altijd. Met groene salade en een Sylvaner erbij.',
      seizoensgroenten: ['ui (zoet)', 'lardons', 'ei', 'room', 'tijm'],
      zones: ['continental'],
    },
    {
      naam: 'Brandade de morue',
      herkomst: 'Nîmes / Marseille',
      intro:
        'Gezouten kabeljauw (morue), drie dagen geweekt om het zout eruit te halen, met olijfolie en knoflook tot een witte pasta gemonteerd, soms met aardappelpuree erbij. Provençaalse / Languedoc-klassieker. Februari­specialiteit omdat zout-gedroogde vis ouderwetse winter­voorraad is — opgewerkt met de eerste milde nazomer-zon en de vroege artisjokken erbij.',
      seizoensgroenten: ['morue (gezouten kabeljauw)', 'olijfolie', 'knoflook', 'aardappel', 'melk', 'citroen'],
      zones: ['mediterraneen'],
    },
    {
      naam: 'Croziflette',
      herkomst: 'Savoie',
      intro:
        'De Savoyaardse variant op de tartiflette, maar met crozets (kleine vierkante boekweit-pasta van de Savoie) in plaats van aardappelen. Reblochon (of beaufort), lardons, witte wijn, ui — alles in de oven. Crozets zijn een Savoie­specialiteit (IGP); ze worden vooral in winter gegeten omdat ze meer voeden dan aardappel. Eindwinter berggerecht in de hutten en restaurants.',
      seizoensgroenten: ['crozets (Savoie pasta)', 'reblochon', 'ui', 'lardons', 'witte wijn (Apremont)'],
      zones: ['montagnard'],
    },
  ],
  afbeelding: {
    hero: '/images/maanden/februari.png',
    alt: 'Februari in de Franse moestuin — botanische plaat met witlof, prei, knolselderij, mimosa en sneeuwklokjes in de late winter',
    credit: 'Plaat II van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
