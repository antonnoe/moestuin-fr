import type { Variete } from '@/lib/types';

export const VARIETES: Variete[] = [
  {
    slug: 'tomate-coeur-de-boeuf',
    naam: 'Cœur de Bœuf',
    latijn: 'Solanum lycopersicum',
    gewasGroep: 'Tomaten',
    oorsprongRegio: 'Albenga (Ligurië/Provence)',
    beschrijving:
      'De Provençaalse vleestomaat: hartvormig, 300–600 g, zoet en vlezig, weinig pitten. Onmisbaar in tomate à la mozzarella en gevulde tomaten. Wel vatbaar voor mildiou — niet de meest productieve in nat klimaat, briljant in droger zuiden.',
    zaaimaand: [2, 3],
    oogstmaand: [7, 8, 9],
    geschiktVoorZones: ['oceanique_alt', 'continental', 'mediterraneen'],
    bewaartip: 'Vers eten, niet bewaren. Overschot tot coulis verwerken (invriezen) of zongedroogd.',
    zaadhandel: [
      { naam: 'Kokopelli', url: 'https://kokopelli-semences.fr/' },
      { naam: 'Le Biau Germe', url: 'https://www.biaugerme.com/' },
    ],
  },
  {
    slug: 'courgette-de-nice',
    naam: 'Courgette ronde de Nice',
    latijn: 'Cucurbita pepo',
    gewasGroep: 'Courgettes / pompoenen',
    oorsprongRegio: 'Côte d\'Azur',
    beschrijving:
      'Een ronde, lichtgroene courgette met fijne smaak — perfect voor *farcis* (gevulde courgettes). De bloemen worden in tempura gegeten, vooral in Nice (*beignets de fleurs de courgette*).',
    zaaimaand: [4, 5],
    oogstmaand: [6, 7, 8, 9],
    geschiktVoorZones: ['oceanique', 'oceanique_alt', 'continental', 'mediterraneen'],
    bewaartip: 'Vers oogsten op 6–8 cm doorsnede; kort bewaarbaar (3–5 dagen koel).',
    zaadhandel: [
      { naam: 'Kokopelli', url: 'https://kokopelli-semences.fr/' },
      { naam: 'Graines del Païs', url: 'https://www.grainesdelpais.com/' },
    ],
  },
  {
    slug: 'sucrine-du-berry',
    naam: 'Sucrine du Berry',
    latijn: 'Cucurbita moschata',
    gewasGroep: 'Pompoenen',
    oorsprongRegio: 'Berry (Centre-Val de Loire)',
    beschrijving:
      'Een muskaatpompoen in flessevorm, oranje-bruin van buiten, dieporanje vruchtvlees. Heerlijk zoet, fijne textuur. Houdbaar tot 6 maanden bij goede bewaring. Klassieker voor herfst-soepen en pompoentaart.',
    zaaimaand: [4, 5],
    oogstmaand: [9, 10],
    geschiktVoorZones: ['oceanique', 'oceanique_alt', 'continental'],
    bewaartip: 'Na oogst 10–14 dagen drogen in volle zon, daarna koel en donker bewaren (10–14 °C).',
    zaadhandel: [
      { naam: 'Kokopelli', url: 'https://kokopelli-semences.fr/' },
      { naam: 'Ferme de Sainte-Marthe', url: 'https://www.fermedesaintemarthe.com/' },
    ],
  },
  {
    slug: 'haricot-tarbais',
    naam: 'Haricot Tarbais',
    latijn: 'Phaseolus vulgaris',
    gewasGroep: 'Bonen',
    oorsprongRegio: 'Tarbes (Hautes-Pyrénées)',
    beschrijving:
      'IGP-erkende witte boon uit het zuidwesten. Dunne schil, romige textuur — onmisbaar in cassoulet en garbure. Klimmer, klassiek geteeld langs maïsplanten (compagnonnage).',
    zaaimaand: [5, 6],
    oogstmaand: [9, 10],
    geschiktVoorZones: ['oceanique', 'oceanique_alt', 'mediterraneen'],
    bewaartip: 'Drogen aan de plant tot peulen broos zijn. Daarna doppen en in luchtdichte pot bewaren.',
    zaadhandel: [
      { naam: 'Kokopelli', url: 'https://kokopelli-semences.fr/' },
      { naam: 'Graines del Païs', url: 'https://www.grainesdelpais.com/' },
    ],
  },
  {
    slug: 'oignon-roscoff',
    naam: 'Oignon rosé de Roscoff',
    latijn: 'Allium cepa',
    gewasGroep: 'Uien',
    oorsprongRegio: 'Roscoff (Finistère)',
    beschrijving:
      'AOP-uitje uit Bretagne, roze-paars van kleur, mild en zoet. Beroemd om de "Johnnies" — Bretonse uienverkopers die er per fiets mee naar Engeland reisden. Bewaring tot 9 maanden.',
    zaaimaand: [2, 3],
    oogstmaand: [7, 8],
    geschiktVoorZones: ['oceanique', 'oceanique_alt'],
    bewaartip: 'Drogen op droge plek (geen direct zonlicht), daarna in vlecht of tray bewaren.',
    zaadhandel: [
      { naam: 'Graines Voltz', url: 'https://www.grainesvoltz.com/' },
      { naam: 'Le Biau Germe', url: 'https://www.biaugerme.com/' },
    ],
  },
  {
    slug: 'ail-rose-lautrec',
    naam: 'Ail rose de Lautrec',
    latijn: 'Allium sativum',
    gewasGroep: 'Knoflook',
    oorsprongRegio: 'Lautrec (Tarn)',
    beschrijving:
      'IGP en label rouge — de meest geroemde Franse knoflook. Roze tenen, sterke smaak, lange bewaring. Wordt traditioneel in vlechten (*manouilles*) verkocht.',
    zaaimaand: [10, 11],
    oogstmaand: [7, 8],
    geschiktVoorZones: ['oceanique_alt', 'continental', 'mediterraneen'],
    bewaartip: 'Drogen op luchtige plek, daarna gevlochten of in netten bewaren.',
    zaadhandel: [{ naam: 'Ail Rose de Lautrec — Coopérative', url: 'https://www.ailrosedelautrec.com/' }],
  },
  {
    slug: 'salade-feuille-de-chene',
    naam: 'Feuille de chêne',
    latijn: 'Lactuca sativa',
    gewasGroep: 'Sla',
    oorsprongRegio: 'Frankrijk (historisch)',
    beschrijving:
      'Een traditionele Franse sla met eikenbladvormig gekrulde bladen, rood of groen. Snij-en-kom-terug-sla — sneed je de buitenste bladen, groeit het hart door. Hitteresistenter dan kropsla.',
    zaaimaand: [3, 4, 5, 8, 9],
    oogstmaand: [5, 6, 7, 10, 11],
    geschiktVoorZones: ['oceanique', 'oceanique_alt', 'continental', 'mediterraneen', 'montagnard'],
    bewaartip: 'Vers eten. Onthart hart-snede groeit door.',
    zaadhandel: [
      { naam: 'Kokopelli', url: 'https://kokopelli-semences.fr/' },
      { naam: 'Ferme de Sainte-Marthe', url: 'https://www.fermedesaintemarthe.com/' },
    ],
  },
  {
    slug: 'carotte-de-creances',
    naam: 'Carotte de Créances',
    latijn: 'Daucus carota',
    gewasGroep: 'Wortelen',
    oorsprongRegio: 'Créances (Manche, Normandië)',
    beschrijving:
      'Op de zandgronden van de Cotentin geteelde wortel met IGP-status. Fijne textuur, intense smaak. Geteeld in zilte zeewindlucht — kan tot in december geoogst worden.',
    zaaimaand: [3, 4, 5, 6],
    oogstmaand: [7, 8, 9, 10, 11, 12],
    geschiktVoorZones: ['oceanique', 'oceanique_alt'],
    bewaartip: 'In zand of vochtig zaagsel in de kelder; meerdere maanden houdbaar.',
    zaadhandel: [{ naam: 'Kokopelli', url: 'https://kokopelli-semences.fr/' }],
  },
];

export function getVarieteBySlug(slug: string): Variete | undefined {
  return VARIETES.find((v) => v.slug === slug);
}
