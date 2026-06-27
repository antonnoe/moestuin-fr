import type { Zone, ZoneId, Departement } from '@/lib/types';

export const ZONES: Record<ZoneId, Zone> = {
  oceanique: {
    id: 'oceanique',
    naam: 'Oceanisch klimaat',
    korteNaam: 'Oceanisch',
    beschrijving:
      'Zachte winters, koele zomers, regelmatige neerslag het hele jaar. De westkust en het Bretonse schiereiland.',
    kenmerken: [
      'Winters zelden onder -3 °C',
      'Zomers gemiddeld 18–22 °C',
      'Jaarneerslag 800–1200 mm, gespreid',
      'Vorst tot eind april in het noorden',
    ],
    voorbeelden: ['Bretagne', 'Normandië', 'Pays de la Loire', 'Vendée'],
    kleur: '#7FB069',
  },
  oceanique_alt: {
    id: 'oceanique_alt',
    naam: 'Gemengd oceanisch',
    korteNaam: 'Oceanisch-gemengd',
    beschrijving:
      'Oceanische invloed verzwakt; warmere zomers en koudere winters. Het Parijse bekken en Noord-Frankrijk.',
    kenmerken: [
      'Winters tot -8 °C mogelijk',
      'Zomers regelmatig boven 25 °C',
      'Jaarneerslag 600–800 mm',
      'Laatste vorst rond half april',
    ],
    voorbeelden: ['Île-de-France', 'Hauts-de-France', 'Centre-Val de Loire'],
    kleur: '#A8C686',
  },
  continental: {
    id: 'continental',
    naam: 'Halfcontinentaal klimaat',
    korteNaam: 'Continentaal',
    beschrijving:
      'Strenge winters, hete zomers, beperkte oceanische invloed. Noord-Oost en het binnenland.',
    kenmerken: [
      'Winters regelmatig onder -10 °C',
      'Zomers 25–32 °C, drogere lucht',
      'Jaarneerslag 600–900 mm',
      'Laatste vorst rond half mei',
    ],
    voorbeelden: ['Alsace', 'Lorraine', 'Bourgogne', 'Franche-Comté'],
    kleur: '#C4A484',
  },
  mediterraneen: {
    id: 'mediterraneen',
    naam: 'Mediterraan klimaat',
    korteNaam: 'Mediterraan',
    beschrijving:
      'Hete droge zomers, milde regenrijke winters. De Middellandse Zeekust en het Rhônedal-zuid.',
    kenmerken: [
      'Winters zelden onder 0 °C',
      'Zomers regelmatig boven 35 °C, hittegolven',
      'Jaarneerslag 500–700 mm, geconcentreerd najaar/winter',
      'Praktisch vorstvrij vanaf maart',
    ],
    voorbeelden: ['Provence-Alpes-Côte d\'Azur', 'Languedoc', 'Roussillon', 'Corsica'],
    kleur: '#E07A5F',
  },
  montagnard: {
    id: 'montagnard',
    naam: 'Bergklimaat',
    korteNaam: 'Berg',
    beschrijving:
      'Bovengrens 600 m: koude winters, korte zomers, late voorjaarsvorst. Alpen, Pyreneeën, Massif Central, Vogezen, Jura.',
    kenmerken: [
      'Winters streng, sneeuwval tot mei',
      'Zomers koel, slechts 60–90 vorstvrije nachten',
      'Jaarneerslag 1000–2000 mm',
      'Laatste vorst eind mei tot begin juni',
    ],
    voorbeelden: ['Alpes', 'Pyrénées', 'Massif Central (>600m)', 'Vosges', 'Jura'],
    kleur: '#8B7BA8',
  },
};

// Indeling per departement — werkbare consensus op basis van regionaal klimaat.
// Voor departementen met sterke hoogte-variatie (bijv. 38 Isère) is de
// dominante zone in de bewoonde valleien gekozen; berg-bewoners kiezen
// handmatig 'montagnard'.
export const DEPARTEMENTEN: Departement[] = [
  // Auvergne-Rhône-Alpes
  { code: '01', naam: 'Ain', zone: 'continental' },
  { code: '03', naam: 'Allier', zone: 'oceanique_alt' },
  { code: '07', naam: 'Ardèche', zone: 'mediterraneen' },
  { code: '15', naam: 'Cantal', zone: 'montagnard' },
  { code: '26', naam: 'Drôme', zone: 'mediterraneen' },
  { code: '38', naam: 'Isère', zone: 'continental' },
  { code: '42', naam: 'Loire', zone: 'oceanique_alt' },
  { code: '43', naam: 'Haute-Loire', zone: 'montagnard' },
  { code: '63', naam: 'Puy-de-Dôme', zone: 'oceanique_alt' },
  { code: '69', naam: 'Rhône', zone: 'continental' },
  { code: '73', naam: 'Savoie', zone: 'montagnard' },
  { code: '74', naam: 'Haute-Savoie', zone: 'montagnard' },

  // Bourgogne-Franche-Comté
  { code: '21', naam: "Côte-d'Or", zone: 'continental' },
  { code: '25', naam: 'Doubs', zone: 'continental' },
  { code: '39', naam: 'Jura', zone: 'continental' },
  { code: '58', naam: 'Nièvre', zone: 'oceanique_alt' },
  { code: '70', naam: 'Haute-Saône', zone: 'continental' },
  { code: '71', naam: 'Saône-et-Loire', zone: 'continental' },
  { code: '89', naam: 'Yonne', zone: 'oceanique_alt' },
  { code: '90', naam: 'Territoire de Belfort', zone: 'continental' },

  // Bretagne
  { code: '22', naam: "Côtes-d'Armor", zone: 'oceanique' },
  { code: '29', naam: 'Finistère', zone: 'oceanique' },
  { code: '35', naam: 'Ille-et-Vilaine', zone: 'oceanique' },
  { code: '56', naam: 'Morbihan', zone: 'oceanique' },

  // Centre-Val de Loire
  { code: '18', naam: 'Cher', zone: 'oceanique_alt' },
  { code: '28', naam: 'Eure-et-Loir', zone: 'oceanique_alt' },
  { code: '36', naam: 'Indre', zone: 'oceanique_alt' },
  { code: '37', naam: 'Indre-et-Loire', zone: 'oceanique_alt' },
  { code: '41', naam: 'Loir-et-Cher', zone: 'oceanique_alt' },
  { code: '45', naam: 'Loiret', zone: 'oceanique_alt' },

  // Corse
  { code: '2A', naam: 'Corse-du-Sud', zone: 'mediterraneen' },
  { code: '2B', naam: 'Haute-Corse', zone: 'mediterraneen' },

  // Grand Est
  { code: '08', naam: 'Ardennes', zone: 'continental' },
  { code: '10', naam: 'Aube', zone: 'continental' },
  { code: '51', naam: 'Marne', zone: 'continental' },
  { code: '52', naam: 'Haute-Marne', zone: 'continental' },
  { code: '54', naam: 'Meurthe-et-Moselle', zone: 'continental' },
  { code: '55', naam: 'Meuse', zone: 'continental' },
  { code: '57', naam: 'Moselle', zone: 'continental' },
  { code: '67', naam: 'Bas-Rhin', zone: 'continental' },
  { code: '68', naam: 'Haut-Rhin', zone: 'continental' },
  { code: '88', naam: 'Vosges', zone: 'montagnard' },

  // Hauts-de-France
  { code: '02', naam: 'Aisne', zone: 'oceanique_alt' },
  { code: '59', naam: 'Nord', zone: 'oceanique_alt' },
  { code: '60', naam: 'Oise', zone: 'oceanique_alt' },
  { code: '62', naam: 'Pas-de-Calais', zone: 'oceanique_alt' },
  { code: '80', naam: 'Somme', zone: 'oceanique_alt' },

  // Île-de-France
  { code: '75', naam: 'Paris', zone: 'oceanique_alt' },
  { code: '77', naam: 'Seine-et-Marne', zone: 'oceanique_alt' },
  { code: '78', naam: 'Yvelines', zone: 'oceanique_alt' },
  { code: '91', naam: 'Essonne', zone: 'oceanique_alt' },
  { code: '92', naam: 'Hauts-de-Seine', zone: 'oceanique_alt' },
  { code: '93', naam: 'Seine-Saint-Denis', zone: 'oceanique_alt' },
  { code: '94', naam: 'Val-de-Marne', zone: 'oceanique_alt' },
  { code: '95', naam: "Val-d'Oise", zone: 'oceanique_alt' },

  // Normandie
  { code: '14', naam: 'Calvados', zone: 'oceanique' },
  { code: '27', naam: 'Eure', zone: 'oceanique_alt' },
  { code: '50', naam: 'Manche', zone: 'oceanique' },
  { code: '61', naam: 'Orne', zone: 'oceanique' },
  { code: '76', naam: 'Seine-Maritime', zone: 'oceanique' },

  // Nouvelle-Aquitaine
  { code: '16', naam: 'Charente', zone: 'oceanique' },
  { code: '17', naam: 'Charente-Maritime', zone: 'oceanique' },
  { code: '19', naam: 'Corrèze', zone: 'oceanique_alt' },
  { code: '23', naam: 'Creuse', zone: 'oceanique_alt' },
  { code: '24', naam: 'Dordogne', zone: 'oceanique_alt' },
  { code: '33', naam: 'Gironde', zone: 'oceanique' },
  { code: '40', naam: 'Landes', zone: 'oceanique' },
  { code: '47', naam: 'Lot-et-Garonne', zone: 'oceanique_alt' },
  { code: '64', naam: 'Pyrénées-Atlantiques', zone: 'oceanique' },
  { code: '79', naam: 'Deux-Sèvres', zone: 'oceanique' },
  { code: '86', naam: 'Vienne', zone: 'oceanique' },
  { code: '87', naam: 'Haute-Vienne', zone: 'oceanique_alt' },

  // Occitanie
  { code: '09', naam: 'Ariège', zone: 'montagnard' },
  { code: '11', naam: 'Aude', zone: 'mediterraneen' },
  { code: '12', naam: 'Aveyron', zone: 'oceanique_alt' },
  { code: '30', naam: 'Gard', zone: 'mediterraneen' },
  { code: '31', naam: 'Haute-Garonne', zone: 'oceanique_alt' },
  { code: '32', naam: 'Gers', zone: 'oceanique_alt' },
  { code: '34', naam: 'Hérault', zone: 'mediterraneen' },
  { code: '46', naam: 'Lot', zone: 'oceanique_alt' },
  { code: '48', naam: 'Lozère', zone: 'montagnard' },
  { code: '65', naam: 'Hautes-Pyrénées', zone: 'montagnard' },
  { code: '66', naam: 'Pyrénées-Orientales', zone: 'mediterraneen' },
  { code: '81', naam: 'Tarn', zone: 'oceanique_alt' },
  { code: '82', naam: 'Tarn-et-Garonne', zone: 'oceanique_alt' },

  // Pays de la Loire
  { code: '44', naam: 'Loire-Atlantique', zone: 'oceanique' },
  { code: '49', naam: 'Maine-et-Loire', zone: 'oceanique' },
  { code: '53', naam: 'Mayenne', zone: 'oceanique' },
  { code: '72', naam: 'Sarthe', zone: 'oceanique' },
  { code: '85', naam: 'Vendée', zone: 'oceanique' },

  // Provence-Alpes-Côte d'Azur
  { code: '04', naam: 'Alpes-de-Haute-Provence', zone: 'mediterraneen' },
  { code: '05', naam: 'Hautes-Alpes', zone: 'montagnard' },
  { code: '06', naam: 'Alpes-Maritimes', zone: 'mediterraneen' },
  { code: '13', naam: 'Bouches-du-Rhône', zone: 'mediterraneen' },
  { code: '83', naam: 'Var', zone: 'mediterraneen' },
  { code: '84', naam: 'Vaucluse', zone: 'mediterraneen' },
];

export function getZoneByDepartement(code: string): ZoneId | null {
  const dept = DEPARTEMENTEN.find((d) => d.code === code);
  return dept?.zone ?? null;
}

export function getDepartementByCode(code: string): Departement | undefined {
  return DEPARTEMENTEN.find((d) => d.code === code);
}
