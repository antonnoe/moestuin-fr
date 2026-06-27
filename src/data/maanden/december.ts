import type { Maand } from '@/lib/types';

export const december: Maand = {
  nummer: 12,
  slug: 'december',
  naam: 'December',
  ondertitel: 'Truffes, foie gras en de korte dagen',
  intro:
    'De donkerste maand. De moestuin slaapt; truffel-markten draaien op volle toeren (Tuber melanosporum, hoogseizoen rond Kerst); foie gras en kerst-koopwaar domineren de markten. Volwassen fruitbomen kunnen winter-snoeien (op een vorstvrije dag). In het zuiden zijn citrus en wintergroente nog volop in productie. Kerst en réveillon brengen elke regio zijn eigen traditie: 13 desserts in Provence, foie gras in het Sud-Ouest, bûche de Noël overal.',
  zones: {
    oceanique: {
      zaaien: [],
      planten: [
        { gewas: 'Fruitbomen op kale wortel (vorstvrije dag)' },
        { gewas: 'Bessenstruiken (aalbes, zwarte bes)' },
      ],
      oogsten: [
        { gewas: 'Spruitkool (hoogseizoen)', latijn: 'Brassica oleracea var. gemmifera' },
        { gewas: 'Boerenkool, savooie, witte en rode kool' },
        { gewas: 'Prei' },
        { gewas: 'Witlof (forcerend in kelder)' },
        { gewas: 'Veldsla, andijvie, mâche' },
        { gewas: 'Schorseneren, knolselderij, pastinaak, raap' },
        { gewas: 'Topinambours' },
        { gewas: 'Coquilles Saint-Jacques (hoogseizoen)', detail: 'Bretonse mosselbanken, vissers­markten' },
        { gewas: 'Bigorneaux, bulots, huîtres (oesters, hoogseizoen)' },
      ],
      onderhoud: [
        'Fruitbomen snoeien op vorstvrije dag — appels, peren, druif',
        'Aardbei-bed mulchen extra bij koudegolf',
        'Composthoop laten rusten',
        'Cidre, chouchen (mede) op fles brengen voor kerst',
        'Tuingerei volledig overzicht en olie',
      ],
    },
    oceanique_alt: {
      zaaien: [],
      planten: [
        { gewas: 'Fruitbomen op kale wortel' },
        { gewas: 'Bessenstruiken' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool, witte kool, rode kool' },
        { gewas: 'Prei' },
        { gewas: 'Witlof (forcerend)' },
        { gewas: 'Veldsla' },
        { gewas: 'Schorseneren, pastinaak, knolselderij' },
        { gewas: 'Topinambours' },
        { gewas: 'Foie gras (markten Sud-Ouest tot Loire)', detail: 'Brive-la-Gaillarde, Sarlat — Marchés au gras' },
      ],
      onderhoud: [
        'Fruitbomen snoeien (appel, peer)',
        'Eerste zaad-bestellingen voor volgend jaar',
        'Composthoop afdekken',
        'Wijn op fles voor kerst (Loire-streek)',
      ],
    },
    continental: {
      zaaien: [],
      planten: [
        { gewas: 'Fruitbomen op kale wortel — alleen vorstvrije dagen' },
      ],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool' },
        { gewas: 'Witte kool (voor choucroute), rode kool' },
        { gewas: 'Prei' },
        { gewas: 'Witlof, mâche' },
        { gewas: 'Schorseneren, pastinaak' },
        { gewas: 'Topinambours' },
      ],
      onderhoud: [
        'Strenge vorst mogelijk (-10 °C in Alsace, -15 °C in Vosges) — wintergroente afdekken',
        'Fruitbomen snoeien op vorstvrije dag',
        'Zaad-bestellingen voor volgend jaar',
        'Marchés de Noël: Strasbourg, Colmar (vanaf eind nov tot kerst)',
        'Vin chaud, bredele (Alsacien kerstkoekjes) seizoen',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Wintersla, andijvie, mâche (in beschut bed)' },
        { gewas: 'Tuinboon, doperwt' },
        { gewas: 'Spinazie, snijbiet' },
        { gewas: 'Wortelen, radijs' },
      ],
      planten: [
        { gewas: 'Fruitbomen op kale wortel' },
        { gewas: 'Bessenstruiken' },
        { gewas: 'Aardbeien (laatste)' },
      ],
      oogsten: [
        { gewas: 'Sla, andijvie, mâche, spinazie' },
        { gewas: 'Prei, kool' },
        { gewas: 'Citrus (hoogseizoen): clementines, mandarijnen, sinaasappels, citroenen' },
        { gewas: 'Olijven (laatste)', detail: 'na deze tijd voor olie persen' },
        { gewas: 'Truffes melanosporum (hoogseizoen rond kerst)', detail: 'markt Richerenches (zaterdag)' },
        { gewas: 'Kakis (laatste)' },
      ],
      onderhoud: [
        'Olijfolie persen (zelf of bij coöperatieve mill)',
        'Citrus winterbescherming bij koude periodes (zeil, kerstverlichting voor warmte)',
        '13 desserts klaarmaken voor Provençaalse Kerst (Calissons, nougat, fruits secs, etc.)',
        'Truffel-markt Carpentras (vrijdag), Richerenches (zaterdag) — hoogseizoen',
      ],
    },
    montagnard: {
      zaaien: [],
      planten: [],
      oogsten: [
        { gewas: 'Spruitkool, boerenkool, witte kool (uit opslag)' },
        { gewas: 'Aardappelen (uit kelder)' },
        { gewas: 'Aardperen (vers uit grond)' },
        { gewas: 'Kastanjes (laatste)' },
      ],
      onderhoud: [
        'Sneeuw op moestuin — winterrust',
        'Kelders en opslag controleren: aardappelen, appels, pompoen, ui',
        'Brandhout, schoorsteen, generator: laatste checks',
        'Marchés de Noël Hautes-Alpes, Pyrénées',
        'Zaad-bestellingen, teeltplan volgend jaar',
      ],
    },
  },
  juridischDezeMaand: [],
  varietesUitgelicht: ['haricot-tarbais'],
  recepten: [
    {
      naam: 'Coquilles Saint-Jacques à la bretonne',
      herkomst: 'Bretagne (Baie de Saint-Brieuc)',
      intro:
        'December is het hart van het Saint-Jacques-seizoen (oogst 1 okt - 15 mei in de Baie de Saint-Brieuc, kortere campagnes elders). Bretonse manier: in eigen schelp, met fijngehakte sjalot, peterselie, knoflook, boter, een scheut Muscadet of Sauvignon, en een paneerlaag van paneer­meel en geraspte Comté. Onder de grill drie minuten. Réveillon-klassieker.',
      seizoensgroenten: ['coquille Saint-Jacques', 'sjalot', 'peterselie', 'knoflook', 'boter', 'Muscadet', 'paneermeel'],
      zones: ['oceanique'],
    },
    {
      naam: 'Foie gras maison',
      herkomst: 'Sud-Ouest (Périgord / Gers / Landes)',
      intro:
        'December = foie gras-tijd. Hele lever ontaderd, een nacht gemarineerd met zout, peper, een scheut Sauternes of Armagnac, in een terrine geperst, in bain-marie gegaard op exact 90 °C, een week gerijpt. Het werk is rust en techniek, niet ingrediënten. Geserveerd op getoast pain d\'épices met fleur de sel en een glas Sauternes — réveillon-koningsstuk.',
      seizoensgroenten: ['foie gras (cru)', 'Sauternes / Armagnac', 'fleur de sel', 'pain d\'épices'],
      zones: ['oceanique_alt'],
    },
    {
      naam: 'Bredele (Alsacien kerstkoekjes)',
      herkomst: 'Alsace',
      intro:
        'De Alsacien-traditie: vanaf eind november tot kerst worden bredele gebakken — tientallen variëteiten kleine kerstkoekjes, vaak met amandel, kaneel, anijs of citroen­schil. Anisbredele, Butterbredele, Spritzbredele, Schwowebredele. Familiale ritueel: men bakt samen, men ruilt met de buren, men eet ze de hele kersttijd door. Met vin chaud van Riesling erbij.',
      seizoensgroenten: ['amandelmeel', 'boter', 'ei', 'kaneel', 'anijs', 'citroenschil'],
      zones: ['continental'],
    },
    {
      naam: 'Les 13 desserts de Noël',
      herkomst: 'Provence',
      intro:
        'De Provençaalse kersttraditie: dertien desserts op tafel op kerstavond, symbool voor Christus en de twaalf apostelen. Vast in de set: pompe à l\'huile (olijfolie-brood), de quatre mendiants (vier bedelmonniken: amandelen, hazelnoten, vijgen, rozijnen — verwijzing naar bedel-ordes), nougat blanc en noir, mandarijnen, dadels, kweepeer-pasta, calissons d\'Aix. Het geheel blijft drie dagen op tafel, ieder neemt naar believen.',
      seizoensgroenten: ['amandel', 'hazelnoot', 'vijg', 'rozijn', 'dadel', 'mandarijn', 'kweepeer', 'honing', 'olijfolie'],
      zones: ['mediterraneen'],
    },
    {
      naam: 'Fondue savoyarde',
      herkomst: 'Savoie',
      intro:
        'Het bergwinter-ritueel: gelijke delen Beaufort, Comté en Emmental (of de regionale variant met Abondance, Tomme de Savoie) gesmolten in droge witte wijn (Apremont, Roussette), met knoflook ingewreven in de caquelon. Stukjes brood aan een lange vork erin dopen — wie het brood verliest betaalt de fles wijn. Pyreneese variant gebruikt brebis-kazen (Ossau-Iraty). December-réveillon na een dag in de sneeuw.',
      seizoensgroenten: ['Beaufort', 'Comté', 'Emmental', 'witte wijn (Apremont)', 'knoflook', 'brood'],
      zones: ['montagnard'],
    },
  ],
  afbeelding: {
    hero: '/images/maanden/december.png',
    alt: 'December in de Franse moestuin — botanische plaat met spruitkool, witlof, prei, citroen en truffel rond de kerstperiode',
    credit: 'Plaat XII van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
