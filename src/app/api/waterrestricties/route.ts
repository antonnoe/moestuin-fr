import { NextResponse } from 'next/server';

// Cache: 6 uur ISR
export const revalidate = 21600;

interface Restriction {
  niveau: 'vigilance' | 'alerte' | 'alerte_renforcee' | 'crise' | 'geen';
  label: string;
  detail?: string;
}

// Propluvia open data: https://www.data.gouv.fr/fr/datasets/situation-au-titre-des-arretes-secheresse-en-france/
// De dataset wordt periodiek geüpdatet. Voor de live-versie hier proxien we
// een eenvoudige fetch met dept-filter. De endpoint-URL kan wijzigen — bij
// falen leveren we een gracieuze fallback.
const PROPLUVIA_API =
  'https://www.data.gouv.fr/api/1/datasets/r/782aac32-29c8-4b66-b231-ab4c28763b1e';

const NIVEAU_MAP: Record<string, Restriction['niveau']> = {
  Vigilance: 'vigilance',
  Alerte: 'alerte',
  'Alerte renforcée': 'alerte_renforcee',
  'Alerte renforcee': 'alerte_renforcee',
  Crise: 'crise',
};

const NIVEAU_DETAIL: Record<Restriction['niveau'], string> = {
  geen: 'Geen restricties van kracht voor jouw departement. Wel altijd zuinig omgaan met water.',
  vigilance: 'Sensibilisatie. Geen verbod, wel aansporing zuinig om te gaan.',
  alerte: 'Besproeien moestuin toegestaan tussen 20:00 en 8:00. Overdag verboden.',
  alerte_renforcee:
    'Sproei-uren beperkt — vaak maximaal 8 uur per dag, alleen in de avond/nacht. Druppelirrigatie meestal nog toegestaan.',
  crise:
    'Strengste niveau. Moestuinbesproeiing soms nog toegestaan met druppelirrigatie of gieter; zwembad, gazon en autowassen verboden. Lees het arrêté préfectoral.',
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dept = searchParams.get('dept');

  if (!dept) {
    return NextResponse.json(
      { error: 'Parameter "dept" ontbreekt' },
      { status: 400 }
    );
  }

  try {
    // Probeer live data te halen
    const res = await fetch(PROPLUVIA_API, {
      next: { revalidate: 21600 },
      headers: { Accept: 'application/json' },
    });

    if (!res.ok) {
      throw new Error(`Propluvia API gaf status ${res.status}`);
    }

    const contentType = res.headers.get('content-type') ?? '';

    // Als data.gouv.fr nu JSON levert
    if (contentType.includes('json')) {
      const data = (await res.json()) as Array<{
        code_departement?: string;
        nom_niveau?: string;
      }>;

      const departement = data.find((r) => r.code_departement === dept);
      if (!departement?.nom_niveau) {
        return geefAntwoord('geen');
      }

      const niveau = NIVEAU_MAP[departement.nom_niveau] ?? 'geen';
      return geefAntwoord(niveau);
    }

    // Als het CSV is, fallback naar "geen"
    return geefAntwoord('geen');
  } catch (err) {
    // Bij elke fout: gracieuze fallback. De gebruiker krijgt de juiste link.
    return NextResponse.json(
      {
        niveau: 'geen',
        label: 'Status onbekend',
        detail:
          'Live data niet beschikbaar — check direct via Propluvia voor actuele status.',
      },
      { status: 200 }
    );
  }
}

function geefAntwoord(niveau: Restriction['niveau']) {
  return NextResponse.json({
    niveau,
    label: niveau,
    detail: NIVEAU_DETAIL[niveau],
  });
}
