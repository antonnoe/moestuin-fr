'use client';

import { useState, useEffect } from 'react';
import type { Maand, ZoneId } from '@/lib/types';
import { ZONES } from '@/data/zones';
import ZoneSelector from './ZoneSelector';

interface MonthContentProps {
  maand: Maand;
}

type Activiteit = 'zaaien' | 'planten' | 'oogsten' | 'onderhoud';

const ICONS: Record<Activiteit, string> = {
  zaaien: '✿',
  planten: '✦',
  oogsten: '◆',
  onderhoud: '◇',
};

const LABELS: Record<Activiteit, string> = {
  zaaien: 'Zaaien',
  planten: 'Planten',
  oogsten: 'Oogsten',
  onderhoud: 'Onderhoud',
};

export default function MonthContent({ maand }: MonthContentProps) {
  const [zone, setZone] = useState<ZoneId>('oceanique_alt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const inhoud = maand.zones[zone];
  const zoneInfo = ZONES[zone];

  return (
    <>
      <ZoneSelector initialZone={zone} onChange={setZone} />

      <section className="container-wide py-8">
        <div className="mb-6 text-sm text-ink/70 max-w-2xl">
          <strong className="text-bordeaux">{zoneInfo.naam}</strong> — {zoneInfo.beschrijving}
        </div>

        {/* Mounted check prevents hydration mismatch from localStorage */}
        {mounted && (
          <div className="grid gap-6 md:grid-cols-2">
            {(['zaaien', 'planten', 'oogsten'] as const).map((act) => (
              <ActivityPanel
                key={act}
                titel={LABELS[act]}
                icoon={ICONS[act]}
                acties={inhoud[act]}
                leeg={`Niets te ${act} deze maand in ${zoneInfo.korteNaam}.`}
              />
            ))}
            <OnderhoudPanel taken={inhoud.onderhoud} />
          </div>
        )}
      </section>
    </>
  );
}

function ActivityPanel({
  titel,
  icoon,
  acties,
  leeg,
}: {
  titel: string;
  icoon: string;
  acties: { gewas: string; latijn?: string; detail?: string; binnen?: boolean }[];
  leeg: string;
}) {
  return (
    <div className="card">
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-bordeaux text-2xl leading-none" aria-hidden>
          {icoon}
        </span>
        <h3 className="!mt-0 !mb-0">{titel}</h3>
      </div>
      {acties.length === 0 ? (
        <p className="text-ink/60 italic text-sm">{leeg}</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {acties.map((a, i) => (
            <li key={i} className="border-b border-bordeaux-50 last:border-b-0 pb-2 last:pb-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <strong className="font-display font-medium">{a.gewas}</strong>
                {a.latijn && <span className="latin text-ink/60 text-xs">{a.latijn}</span>}
                {a.binnen && (
                  <span className="text-[10px] uppercase tracking-wider bg-bordeaux-100 text-bordeaux px-1.5 py-0.5">
                    binnen
                  </span>
                )}
              </div>
              {a.detail && <p className="text-ink/70 text-xs mt-0.5 !mb-0">{a.detail}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function OnderhoudPanel({ taken }: { taken: string[] }) {
  return (
    <div className="card">
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-bordeaux text-2xl leading-none" aria-hidden>
          {ICONS.onderhoud}
        </span>
        <h3 className="!mt-0 !mb-0">{LABELS.onderhoud}</h3>
      </div>
      <ul className="space-y-2 text-sm">
        {taken.map((t, i) => (
          <li key={i} className="border-b border-bordeaux-50 last:border-b-0 pb-2 last:pb-0">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
