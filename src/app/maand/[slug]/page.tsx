import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MAANDEN, getMaandBySlug } from '@/data/maanden';
import { JURIDISCH, getJuridischBySlug } from '@/data/juridisch';
import { getVarieteBySlug } from '@/data/varietes';
import { ZONES } from '@/data/zones';
import MonthContent from '@/components/MonthContent';
import LiveAlerts from '@/components/LiveAlerts';
import ImageGallery from '@/components/ImageGallery';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return MAANDEN.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const maand = getMaandBySlug(slug);
  if (!maand) return {};
  return {
    title: `${maand.naam} — De Franse moestuin`,
    description: `${maand.ondertitel}. ${maand.intro.slice(0, 140)}`,
    openGraph: {
      title: `${maand.naam} in de Franse moestuin`,
      description: maand.ondertitel,
      images: [maand.afbeelding.hero],
    },
  };
}

export default async function MaandPagina({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const maand = getMaandBySlug(slug);
  if (!maand) notFound();

  const vorig = MAANDEN[(maand.nummer - 2 + 12) % 12];
  const volgend = MAANDEN[maand.nummer % 12];

  const juridischItems =
    maand.juridischDezeMaand?.map((s) => getJuridischBySlug(s)).filter(Boolean) ?? [];
  const varieteItems =
    maand.varietesUitgelicht?.map((s) => getVarieteBySlug(s)).filter(Boolean) ?? [];

  const isPlaat = maand.afbeelding.style === 'plaat';

  return (
    <>
      {/* Hero — verschilt tussen 'hero' (default, bijgesneden + overlay) en 'plaat' (volledig, geen overlay) */}
      {isPlaat ? (
        <section className="bg-cream pt-8 pb-4">
          <div className="container-wide">
            <div className="relative w-full max-w-6xl mx-auto" style={{ aspectRatio: '1672 / 941' }}>
              <Image
                src={maand.afbeelding.hero}
                alt={maand.afbeelding.alt}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            {maand.afbeelding.credit && (
              <div className="text-center text-xs text-ink/50 italic mt-3 latin">
                {maand.afbeelding.credit}
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
          <Image
            src={maand.afbeelding.hero}
            alt={maand.afbeelding.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-wide pb-12 text-white">
              <div className="text-xs tracking-[0.3em] uppercase opacity-80 mb-3">
                Maand {String(maand.nummer).padStart(2, '0')} · jaarkalender
              </div>
              <h1 className="!text-white !mb-3">{maand.naam}</h1>
              <p className="text-xl latin opacity-90 max-w-2xl">{maand.ondertitel}</p>
            </div>
          </div>
          {maand.afbeelding.credit && (
            <div className="absolute bottom-2 right-3 text-[10px] text-white/60">
              foto: {maand.afbeelding.credit}
            </div>
          )}
        </section>
      )}

      {/* Intro */}
      <section className="container-narrow py-12">
        <p className="text-lg leading-relaxed text-ink/90 !mb-0">{maand.intro}</p>
      </section>

      {/* Zone-aware content */}
      <MonthContent maand={maand} />

      {/* Live data + juridisch */}
      <section className="container-wide py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <LiveAlerts maandNummer={maand.nummer} />
          {juridischItems.length > 0 && (
            <div className="card">
              <div className="eyebrow mb-3">Juridisch deze maand</div>
              <ul className="space-y-3">
                {juridischItems.map((j) => (
                  <li key={j!.slug} className="text-sm">
                    <Link href={`/juridisch#${j!.slug}`} className="font-display font-medium no-underline hover:underline">
                      {j!.titel}
                    </Link>
                    <p className="text-ink/70 text-xs !mb-0 mt-0.5">{j!.korteBeschrijving}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Seizoensrecepten — per zone */}
      {maand.recepten && maand.recepten.length > 0 && (
        <section className="container-wide py-8">
          <div className="eyebrow mb-4">Seizoensrecepten — Frankrijk in vijf klimaten</div>
          <p className="text-sm text-ink/70 mb-6 max-w-2xl">
            Wat uit de moestuin komt verschilt per streek, en wat ermee gekookt wordt ook. Eén recept
            per klimaatzone — Bretagne pakt de zee, de Pyreneeën grijpen naar de schapenkaas, de
            Provence stapelt het zomerblad op.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {maand.recepten.map((recept) => {
              const zoneNamen = recept.zones
                .map((zid) => ZONES[zid]?.naam ?? zid)
                .join(' · ');
              return (
                <div
                  key={recept.naam}
                  className="card border-l-4 border-l-bordeaux flex flex-col"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span
                      className="text-xs uppercase tracking-wider font-semibold"
                      style={{ color: 'rgba(128,0,0,0.85)' }}
                    >
                      {zoneNamen}
                    </span>
                    {recept.herkomst && (
                      <span className="text-xs text-ink/55 italic">{recept.herkomst}</span>
                    )}
                  </div>
                  <h3 className="!mt-0 !mb-2 text-lg">{recept.naam}</h3>
                  <p className="!mb-3 text-sm leading-relaxed flex-1">{recept.intro}</p>
                  <div className="text-xs pt-2 border-t border-ink/10">
                    <strong className="font-display">Met:</strong>{' '}
                    <span className="text-ink/70">
                      {recept.seizoensgroenten.join(', ')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Variétés uitgelicht */}
      {varieteItems.length > 0 && (
        <section className="container-wide py-8">
          <div className="eyebrow mb-4">Variétés uitgelicht</div>
          <div className="grid gap-4 md:grid-cols-3">
            {varieteItems.map((v) => (
              <Link key={v!.slug} href={`/varietes#${v!.slug}`} className="card no-underline block hover:bg-bordeaux-50 transition-colors">
                <h4 className="font-display font-semibold text-bordeaux !mt-0 !mb-1">{v!.naam}</h4>
                <p className="latin text-xs text-ink/60 !mb-2">{v!.latijn}</p>
                <p className="text-sm text-ink/70 !mb-0">{v!.beschrijving.slice(0, 120)}…</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Galerij */}
      {maand.galerij && <ImageGallery fotos={maand.galerij} />}

      {/* Navigatie tussen maanden */}
      <section className="container-wide py-12 border-t border-bordeaux-100">
        <div className="flex justify-between items-center">
          <Link href={`/maand/${vorig.slug}`} className="no-underline group">
            <div className="eyebrow opacity-70">← Vorige</div>
            <div className="font-display font-semibold text-xl text-bordeaux">{vorig.naam}</div>
          </Link>
          <Link href={`/maand/${volgend.slug}`} className="no-underline group text-right">
            <div className="eyebrow opacity-70">Volgende →</div>
            <div className="font-display font-semibold text-xl text-bordeaux">{volgend.naam}</div>
          </Link>
        </div>
      </section>
    </>
  );
}
