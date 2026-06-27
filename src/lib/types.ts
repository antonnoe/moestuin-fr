// Klimaatzones van Frankrijk — vereenvoudigde indeling op basis van
// Köppen-Geiger × Météo-France regionaal klimaat
export type ZoneId =
  | 'oceanique'
  | 'oceanique_alt'
  | 'continental'
  | 'mediterraneen'
  | 'montagnard';

export interface Zone {
  id: ZoneId;
  naam: string;
  korteNaam: string;
  beschrijving: string;
  kenmerken: string[];
  voorbeelden: string[]; // voorbeeld-departementen of -steden
  kleur: string;
}

// Departement → zone-mapping
export interface Departement {
  code: string; // bijv. "75", "2A"
  naam: string;
  zone: ZoneId;
}

// Maand-content per zone
export interface ZoneInhoud {
  zaaien: TuinActie[];
  planten: TuinActie[];
  oogsten: TuinActie[];
  onderhoud: string[];
}

export interface TuinActie {
  gewas: string;
  latijn?: string;
  detail?: string;
  binnen?: boolean; // zaaien onder glas / binnen
}

// Volledige maand
export interface Maand {
  nummer: number;
  slug: string;
  naam: string;
  ondertitel: string;
  intro: string;
  zones: Record<ZoneId, ZoneInhoud>;
  juridischDezeMaand?: string[]; // slugs van juridisch-items
  varietesUitgelicht?: string[]; // slugs van variétés
  recepten?: Recept[];
  afbeelding: {
    hero: string;
    alt: string;
    credit?: string;
    /** 'hero' = bijgesneden met overlay-tekst (default). 'plaat' = volledige afbeelding tonen, geen overlay (voor Vilmorin-stijl maandplaten die titel en ondertitel al bevatten). */
    style?: 'hero' | 'plaat';
  };
  galerij?: GalerijFoto[];
}

export interface GalerijFoto {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export interface Recept {
  naam: string;
  /** Regionale herkomst, bv "Bretagne", "Provence", "Lorraine" */
  herkomst?: string;
  intro: string;
  /** Hoofdingrediënten uit het seizoen (tuin + lokaal product) */
  seizoensgroenten: string[];
  /** Klimaatzones waar dit recept thuishoort */
  zones: ZoneId[];
}

// Juridisch item
export interface JuridischItem {
  slug: string;
  titel: string;
  korteBeschrijving: string;
  wet: string;
  artikel?: string;
  bronUrl: string;
  bronNaam: string;
  laatsteUpdate: string; // ISO date
  inhoud: string; // Markdown of HTML
  geldtVoorMaanden?: number[]; // 1..12, leeg = jaarrond
}

// Variété
export interface Variete {
  slug: string;
  naam: string;
  latijn: string;
  gewasGroep: string;
  oorsprongRegio?: string;
  beschrijving: string;
  zaaimaand: number[];
  oogstmaand: number[];
  geschiktVoorZones: ZoneId[];
  bewaartip?: string;
  zaadhandel?: { naam: string; url: string }[];
}

// Woordenlijst-entry
export interface Term {
  nl: string;
  fr: string;
  latijn?: string;
  categorie: 'gewas' | 'gereedschap' | 'techniek' | 'plaag' | 'overig';
  toelichting?: string;
}

// Live data
export interface Waterrestrictie {
  departementCode: string;
  niveau: 'vigilance' | 'alerte' | 'alerte_renforcee' | 'crise' | 'geen';
  startDatum?: string;
  detailUrl?: string;
}
