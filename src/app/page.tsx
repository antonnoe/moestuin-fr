import Link from 'next/link';
import ClimateMap from '@/components/ClimateMap';
import YearCycle from '@/components/YearCycle';
import { ZONES } from '@/data/zones';
import { getCurrentMaand, MAANDEN } from '@/data/maanden';

export default function Home() {
  const huidigeMaand = getCurrentMaand();
  const zoneKeys = Object.keys(ZONES) as Array<keyof typeof ZONES>;

  return (
    <>
      {/* Hero */}
      <section className="container-wide pt-12 pb-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow mb-4">Een gids voor de Nederlandstalige tuinier in Frankrijk</div>
            <h1 className="!mb-6">
              De Franse moestuin,
              <br />
              <span className="latin text-forest">au fil des saisons</span>
            </h1>
            <p className="text-lg text-ink/80 max-w-xl">
              Wat te doen in de moestuin — maand per maand, afgestemd op{' '}
              <strong className="text-bordeaux">jouw klimaatzone</strong>. Bretagne is niet de
              Provence, en de Pyreneeën zijn geen Île-de-France. Een moestuinkalender die dat erkent.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/maand/${huidigeMaand.slug}`} className="btn-primary">
                Start bij {huidigeMaand.naam.toLowerCase()}
              </Link>
              <a href="#kaart" className="inline-block px-6 py-3 text-sm border border-bordeaux text-bordeaux no-underline hover:bg-bordeaux-50 transition-colors">
                Kies eerst je zone
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <YearCycle size={520} />
          </div>
        </div>
        {/* Mobile YearCycle */}
        <div className="lg:hidden mt-8">
          <YearCycle size={400} />
        </div>
      </section>

      <hr className="section-rule" />

      {/* Klimaatkaart */}
      <section id="kaart" className="container-wide py-12">
        <div className="max-w-3xl mb-8">
          <div className="eyebrow mb-3">Stap 1 — Kies je klimaatzone</div>
          <h2 className="!mt-0">Frankrijk is geen één land voor de tuinier</h2>
          <p>
            Vijf klimaatzones, vijf kalenders. Klik op je departement op de kaart. Daarna wijst
            elke maandpagina je direct het werk dat bij <em>jouw</em> klimaat hoort.
          </p>
        </div>

        <ClimateMap height="600px" />

        {/* Legend */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6 text-sm">
          {zoneKeys.map((zid) => {
            const z = ZONES[zid];
            return (
              <div key={zid} className="card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="zone-chip" style={{ background: z.kleur }} />
                  <strong className="font-display text-bordeaux">{z.korteNaam}</strong>
                </div>
                <p className="text-xs text-ink/70 !mb-1">{z.beschrijving}</p>
                <p className="text-[11px] text-ink/50 italic !mb-0">
                  bv. {z.voorbeelden.slice(0, 2).join(', ')}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="section-rule" />

      {/* Alle maanden */}
      <section className="container-wide py-12">
        <div className="max-w-3xl mb-8">
          <div className="eyebrow mb-3">Stap 2 — De jaarkalender</div>
          <h2 className="!mt-0">Twaalf maanden, vijf zones</h2>
          <p>
            Voor elke maand: wat zaaien, wat planten, wat oogsten, wat onderhouden — per
            klimaatzone. Met juridische punten waar relevant (water, plantafstanden, composteren)
            en een seizoensrecept.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {MAANDEN.map((m) => {
            const isHuidig = m.nummer === huidigeMaand.nummer;
            return (
              <Link
                key={m.slug}
                href={`/maand/${m.slug}`}
                className={`card no-underline group block transition-colors ${
                  isHuidig ? 'bg-bordeaux text-white border-bordeaux' : 'hover:bg-bordeaux-50'
                }`}
              >
                <div className={`text-xs tracking-widest uppercase ${isHuidig ? 'text-white/80' : 'text-bordeaux/70'}`}>
                  {String(m.nummer).padStart(2, '0')}
                </div>
                <div className={`font-display font-semibold text-xl mt-1 ${isHuidig ? 'text-white' : 'text-bordeaux'}`}>
                  {m.naam}
                </div>
                <div className={`text-xs mt-1 ${isHuidig ? 'text-white/80' : 'text-ink/70'}`}>
                  {m.ondertitel}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <hr className="section-rule" />

      {/* Naslag */}
      <section className="container-wide py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/juridisch" className="card no-underline block hover:bg-bordeaux-50 transition-colors group">
            <div className="eyebrow mb-2">Naslag</div>
            <h3 className="!mt-0 !mb-2">Juridisch</h3>
            <p className="text-sm text-ink/70 !mb-0">
              Plantafstanden, waterrestricties, glyfosaat-verbod, compostverplichting — met primaire
              bronnen op Légifrance en .gouv.fr.
            </p>
          </Link>
          <Link href="/varietes" className="card no-underline block hover:bg-bordeaux-50 transition-colors group">
            <div className="eyebrow mb-2">Naslag</div>
            <h3 className="!mt-0 !mb-2">Variétés anciennes</h3>
            <p className="text-sm text-ink/70 !mb-0">
              Tomate Cœur de Bœuf, courgette de Nice, ail rose de Lautrec, oignon de Roscoff — en
              waar je het zaad ervan krijgt.
            </p>
          </Link>
          <Link href="/woordenlijst" className="card no-underline block hover:bg-bordeaux-50 transition-colors group">
            <div className="eyebrow mb-2">Naslag</div>
            <h3 className="!mt-0 !mb-2">Woordenlijst</h3>
            <p className="text-sm text-ink/70 !mb-0">
              Nederlands–Frans–Latijn voor alles in de moestuin: gewassen, gereedschap, technieken,
              plagen.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
