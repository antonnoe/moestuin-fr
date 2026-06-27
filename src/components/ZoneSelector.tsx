'use client';

import { useEffect, useState } from 'react';
import { ZONES } from '@/data/zones';
import type { ZoneId } from '@/lib/types';

interface ZoneSelectorProps {
  initialZone?: ZoneId;
  onChange?: (zone: ZoneId) => void;
}

const ZONE_ORDER: ZoneId[] = [
  'oceanique',
  'oceanique_alt',
  'continental',
  'mediterraneen',
  'montagnard',
];

export default function ZoneSelector({ initialZone, onChange }: ZoneSelectorProps) {
  const [zone, setZone] = useState<ZoneId>(initialZone ?? 'oceanique_alt');
  const [deptNaam, setDeptNaam] = useState<string | null>(null);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('moestuin_zone') : null;
    const storedDept = typeof window !== 'undefined' ? localStorage.getItem('moestuin_dept_naam') : null;
    if (stored && ZONE_ORDER.includes(stored as ZoneId)) {
      setZone(stored as ZoneId);
      onChange?.(stored as ZoneId);
    }
    if (storedDept) setDeptNaam(storedDept);
  }, [onChange]);

  const handleChange = (newZone: ZoneId) => {
    setZone(newZone);
    if (typeof window !== 'undefined') {
      localStorage.setItem('moestuin_zone', newZone);
    }
    onChange?.(newZone);
  };

  return (
    <div className="sticky top-[64px] z-30 bg-cream/95 backdrop-blur-sm border-y border-bordeaux-100 py-3">
      <div className="container-wide flex items-center gap-3 flex-wrap text-sm">
        <span className="eyebrow shrink-0">Klimaatzone</span>
        <div className="flex gap-1 flex-wrap">
          {ZONE_ORDER.map((zid) => {
            const z = ZONES[zid];
            const isActive = zone === zid;
            return (
              <button
                key={zid}
                onClick={() => handleChange(zid)}
                className={`px-3 py-1 text-xs border transition-colors ${
                  isActive
                    ? 'bg-bordeaux text-white border-bordeaux'
                    : 'bg-white text-ink border-bordeaux-100 hover:bg-bordeaux-50'
                }`}
                aria-pressed={isActive}
              >
                <span
                  className="zone-chip"
                  style={{ background: z.kleur, opacity: isActive ? 1 : 0.7 }}
                />
                {z.korteNaam}
              </button>
            );
          })}
        </div>
        {deptNaam && (
          <span className="text-xs text-ink/60 ml-auto hidden sm:inline">
            {deptNaam} • <a href="/" className="text-bordeaux no-underline hover:underline">wijzig via kaart</a>
          </span>
        )}
      </div>
    </div>
  );
}
