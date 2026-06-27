import { VARIETES } from '@/data/varietes';
import { ZONES } from '@/data/zones';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Variétés anciennes — De Franse moestuin',
  description:
    'Cœur de Bœuf, courgette de Nice, ail rose de Lautrec, oignon de Roscoff — een selectie traditionele Franse rassen voor de moestuin, met waar je het zaad ervan vindt.',
};

const MAAND_NAMEN = [
  'jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
  'jul', 'aug', 'sep', 'okt', 'nov', 'dec',
];

export default function VarietesPagina() {
  return (
    <>
      <section className="container-narrow py-16">
        <div className="eyebrow mb-3">Naslag</div>
        <h1 className="!mt-0">Variétés anciennes</h1>
        <p className="text-lg text-ink/80">
          Een selectie traditionele rassen — de tomaten, knoflook, uien en pompoenen die de Franse
          regio's groot hebben gemaakt. IGP, AOP, label rouge, of gewoon van overgrootmoeder. Allemaal
          beschikbaar bij kleine zaadleveranciers die met <em>semences paysannes</em> werken.
        </p>
      </section>

      <section className="container-wide pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {VARIETES.map((v) => (
            <article key={v.slug} id={v.slug} className="card scroll-mt-24">
              <div className="eyebrow mb-2">{v.gewasGroep}</div>
              <h2 className="!mt-0 !mb-1">{v.naam}</h2>
              <p className="latin text-sm text-ink/60 !mb-3">{v.latijn}</p>

              {v.oorsprongRegio && (
                <p className="text-sm !mb-3">
                  <strong className="font-display">Oorsprong:</strong> {v.oorsprongRegio}
                </p>
              )}

              <p className="text-ink/90">{v.beschrijving}</p>

              <div className="grid grid-cols-2 gap-4 text-sm mt-4 pt-4 border-t border-bordeaux-50">
                <div>
                  <div className="eyebrow text-[10px] mb-1">Zaaien</div>
                  <div>{v.zaaimaand.map((m) => MAAND_NAMEN[m - 1]).join(', ')}</div>
                </div>
                <div>
                  <div className="eyebrow text-[10px] mb-1">Oogsten</div>
                  <div>{v.oogstmaand.map((m) => MAAND_NAMEN[m - 1]).join(', ')}</div>
                </div>
              </div>

              <div className="text-sm mt-4">
                <div className="eyebrow text-[10px] mb-1">Geschikt voor</div>
                <div className="flex flex-wrap gap-2">
                  {v.geschiktVoorZones.map((zid) => (
                    <span key={zid} className="text-xs bg-bordeaux-50 px-2 py-0.5">
                      <span className="zone-chip" style={{ background: ZONES[zid].kleur }} />
                      {ZONES[zid].korteNaam}
                    </span>
                  ))}
                </div>
              </div>

              {v.bewaartip && (
                <div className="text-sm mt-4 text-ink/70 italic">
                  <strong className="font-display not-italic">Bewaartip:</strong> {v.bewaartip}
                </div>
              )}

              {v.zaadhandel && v.zaadhandel.length > 0 && (
                <div className="text-sm mt-4 pt-4 border-t border-bordeaux-50">
                  <div className="eyebrow text-[10px] mb-2">Zaden te koop</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {v.zaadhandel.map((zh) => (
                      <a key={zh.url} href={zh.url} target="_blank" rel="noreferrer">
                        {zh.naam} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
