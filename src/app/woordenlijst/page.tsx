'use client';

import { useMemo, useState } from 'react';
import { WOORDENLIJST } from '@/data/woordenlijst';
import type { Term } from '@/lib/types';

const CATEGORIE_LABELS: Record<Term['categorie'], string> = {
  gewas: 'Gewassen',
  gereedschap: 'Gereedschap',
  techniek: 'Technieken',
  plaag: 'Plagen & ziekten',
  overig: 'Overig',
};

const CATEGORIE_VOLGORDE: Term['categorie'][] = ['gewas', 'gereedschap', 'techniek', 'plaag', 'overig'];

export default function WoordenlijstPagina() {
  const [filter, setFilter] = useState('');
  const [categorie, setCategorie] = useState<Term['categorie'] | 'alle'>('alle');

  const filtered = useMemo(() => {
    const q = filter.toLowerCase().trim();
    return WOORDENLIJST.filter((t) => {
      if (categorie !== 'alle' && t.categorie !== categorie) return false;
      if (!q) return true;
      return (
        t.nl.toLowerCase().includes(q) ||
        t.fr.toLowerCase().includes(q) ||
        (t.latijn?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [filter, categorie]);

  const grouped = useMemo(() => {
    const out: Record<Term['categorie'], Term[]> = {
      gewas: [],
      gereedschap: [],
      techniek: [],
      plaag: [],
      overig: [],
    };
    for (const t of filtered) out[t.categorie].push(t);
    return out;
  }, [filtered]);

  return (
    <>
      <section className="container-narrow py-16">
        <div className="eyebrow mb-3">Naslag</div>
        <h1 className="!mt-0">Woordenlijst</h1>
        <p className="text-lg text-ink/80">
          Nederlands–Frans–Latijn voor alles in de moestuin. Vermijdt het ongemakkelijke moment in
          de jardinerie waarop je probeert "ik zoek <em>schoffel</em>" te vertalen.
        </p>
      </section>

      <section className="container-wide pb-4 sticky top-[64px] z-30 bg-cream/95 backdrop-blur-sm py-4 border-y border-bordeaux-100">
        <div className="flex flex-wrap gap-3 items-center">
          <input
            type="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Zoek in alle talen…"
            className="flex-1 min-w-[200px] px-4 py-2 border border-bordeaux-100 bg-white text-sm focus:outline-none focus:border-bordeaux"
          />
          <div className="flex gap-1 flex-wrap">
            <CategoryButton actief={categorie === 'alle'} onClick={() => setCategorie('alle')}>
              Alle
            </CategoryButton>
            {CATEGORIE_VOLGORDE.map((c) => (
              <CategoryButton key={c} actief={categorie === c} onClick={() => setCategorie(c)}>
                {CATEGORIE_LABELS[c]}
              </CategoryButton>
            ))}
          </div>
        </div>
        <div className="text-xs text-ink/60 mt-2">
          {filtered.length} {filtered.length === 1 ? 'term' : 'termen'}
        </div>
      </section>

      <section className="container-wide pb-16 pt-8">
        {CATEGORIE_VOLGORDE.map((cat) => {
          const items = grouped[cat];
          if (items.length === 0) return null;
          return (
            <div key={cat} className="mb-12">
              <h2 className="!mt-0">{CATEGORIE_LABELS[cat]}</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((t, i) => (
                  <div key={`${t.nl}-${i}`} className="border-b border-bordeaux-50 pb-2">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <strong className="font-display font-medium">{t.nl}</strong>
                      <span className="text-bordeaux">{t.fr}</span>
                    </div>
                    {t.latijn && <div className="latin text-xs text-ink/60">{t.latijn}</div>}
                    {t.toelichting && <div className="text-xs text-ink/60 mt-1">{t.toelichting}</div>}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="text-center text-ink/60 italic py-12">Niets gevonden voor "{filter}".</p>
        )}
      </section>
    </>
  );
}

function CategoryButton({
  actief,
  onClick,
  children,
}: {
  actief: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-xs border transition-colors ${
        actief
          ? 'bg-bordeaux text-white border-bordeaux'
          : 'bg-white text-ink border-bordeaux-100 hover:bg-bordeaux-50'
      }`}
    >
      {children}
    </button>
  );
}
