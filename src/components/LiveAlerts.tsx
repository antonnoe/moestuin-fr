'use client';

import { useEffect, useState } from 'react';

interface Restriction {
  niveau: 'vigilance' | 'alerte' | 'alerte_renforcee' | 'crise' | 'geen';
  label: string;
  detail?: string;
}

interface LiveAlertsProps {
  maandNummer: number;
}

// Only show during droughty months for Mediterranean / Continental zones
const RELEVANT_MAANDEN = [5, 6, 7, 8, 9, 10];

const NIVEAU_KLEUR: Record<Restriction['niveau'], string> = {
  geen: '#8FA386',
  vigilance: '#E0C46F',
  alerte: '#E07A5F',
  alerte_renforcee: '#C44536',
  crise: '#800000',
};

const NIVEAU_LABEL: Record<Restriction['niveau'], string> = {
  geen: 'Geen restricties',
  vigilance: 'Vigilance',
  alerte: 'Alerte',
  alerte_renforcee: 'Alerte renforcée',
  crise: 'Crise',
};

export default function LiveAlerts({ maandNummer }: LiveAlertsProps) {
  const [dept, setDept] = useState<string | null>(null);
  const [deptNaam, setDeptNaam] = useState<string | null>(null);
  const [restrictie, setRestrictie] = useState<Restriction | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const d = localStorage.getItem('moestuin_dept');
    const dn = localStorage.getItem('moestuin_dept_naam');
    if (d) setDept(d);
    if (dn) setDeptNaam(dn);
  }, []);

  useEffect(() => {
    if (!dept || !RELEVANT_MAANDEN.includes(maandNummer)) return;
    setLoading(true);
    fetch(`/api/waterrestricties?dept=${encodeURIComponent(dept)}`)
      .then((r) => r.json())
      .then((data) => {
        setRestrictie(data);
        setError(null);
      })
      .catch(() => {
        setError('Kon Propluvia niet bereiken — check direct via propluvia.developpement-durable.gouv.fr');
      })
      .finally(() => setLoading(false));
  }, [dept, maandNummer]);

  if (!dept) {
    return (
      <div className="card text-sm">
        <div className="eyebrow mb-2">Actueel</div>
        <p className="text-ink/70 !mb-0">
          Kies je departement op de <a href="/">klimaatkaart</a> om actuele waterrestricties en
          weersinformatie voor jouw plek te zien.
        </p>
      </div>
    );
  }

  if (!RELEVANT_MAANDEN.includes(maandNummer)) return null;

  return (
    <div className="card">
      <div className="eyebrow mb-3">Actueel — {deptNaam ?? dept}</div>
      {loading && <p className="text-sm text-ink/60">Even wachten — Propluvia raadplegen…</p>}
      {error && <p className="text-sm text-bordeaux">{error}</p>}
      {restrictie && (
        <div className="flex items-start gap-3">
          <span
            className="w-3 h-3 rounded-full mt-1.5 shrink-0"
            style={{ background: NIVEAU_KLEUR[restrictie.niveau] }}
            aria-hidden
          />
          <div className="flex-1">
            <div className="font-display font-medium">
              Waterrestrictie: {NIVEAU_LABEL[restrictie.niveau]}
            </div>
            {restrictie.detail && <p className="text-sm text-ink/70 mt-1 !mb-0">{restrictie.detail}</p>}
            <p className="text-xs text-ink/50 mt-2 !mb-0">
              Bron:{' '}
              <a
                href={`https://propluvia.developpement-durable.gouv.fr/`}
                target="_blank"
                rel="noreferrer"
              >
                Propluvia
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
