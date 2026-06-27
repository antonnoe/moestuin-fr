import Image from 'next/image';
import Link from 'next/link';
import { MAANDEN, getCurrentMaand } from '@/data/maanden';

interface YearCycleProps {
  /** Maximum-width van het beeld in px. */
  size?: number;
}

/**
 * Jaarcyclus als botanische plaat (Vilmorin-stijl).
 * De PNG is het primaire beeld; 12 klikbare overlays worden er overheen
 * gepositioneerd op de bordeaux schijfjes (één per maand). De huidige
 * maand krijgt een subtiele halo.
 *
 * Coordinaat-systeem: clockwise vanaf top (12 uur). Voor maand m (1-12):
 *   θ = m * 30°    (januari op 30°, juni op 180°, december op 0°)
 *   x = 50% + sin(θ) * radius%
 *   y = 50% − cos(θ) * radius%
 *
 * radius en hit-target zijn gemeten op de 1254×1254 plaat.
 */
const RING_RADIUS_PCT = 38; // afstand schijfje tot center
const HIT_SIZE_PCT = 9;     // klikgebied breedte/hoogte

export default function YearCycle({ size = 600 }: YearCycleProps) {
  const current = getCurrentMaand();

  return (
    <div
      className="relative w-full mx-auto"
      style={{ maxWidth: size, aspectRatio: '1 / 1' }}
    >
      <Image
        src="/images/maandcyclus.png"
        alt="Jaarcyclus van de moestuin — twaalf maanden met seizoensgebonden gewassen"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-contain select-none"
      />

      {MAANDEN.map((m) => {
        const theta = (m.nummer * Math.PI) / 6; // 30° per maand, m=1 → 30°
        const x = 50 + Math.sin(theta) * RING_RADIUS_PCT;
        const y = 50 - Math.cos(theta) * RING_RADIUS_PCT;
        const isCurrent = m.nummer === current.nummer;

        return (
          <Link
            key={m.slug}
            href={`/maand/${m.slug}`}
            aria-label={`Naar ${m.naam}${isCurrent ? ' (huidige maand)' : ''}`}
            className="absolute group block rounded-full no-underline"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${HIT_SIZE_PCT}%`,
              height: `${HIT_SIZE_PCT}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span
              className={`block w-full h-full rounded-full transition-all duration-200 group-hover:bg-bordeaux-100 group-focus-visible:ring-2 group-focus-visible:ring-bordeaux ${
                isCurrent
                  ? 'ring-2 ring-offset-2 ring-bordeaux-400 ring-offset-cream animate-[pulse_3s_ease-in-out_infinite]'
                  : ''
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
