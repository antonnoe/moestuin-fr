'use client';

import Link from 'next/link';
import { MAANDEN, getCurrentMaand } from '@/data/maanden';

interface YearCycleProps {
  size?: number;
}

export default function YearCycle({ size = 480 }: YearCycleProps) {
  const current = getCurrentMaand();
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.38;
  const innerRadius = size * 0.18;

  // Starting at top (12 o'clock) for January
  const angleStart = -Math.PI / 2;
  const step = (Math.PI * 2) / 12;

  return (
    <div className="relative flex justify-center items-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-md h-auto"
        role="navigation"
        aria-label="Jaarcyclus — kies een maand"
      >
        {/* outer ring */}
        <circle
          cx={cx}
          cy={cy}
          r={radius + size * 0.06}
          fill="none"
          stroke="rgba(128, 0, 0, 0.08)"
          strokeWidth="1"
        />
        <circle
          cx={cx}
          cy={cy}
          r={radius - size * 0.06}
          fill="none"
          stroke="rgba(128, 0, 0, 0.08)"
          strokeWidth="1"
        />

        {/* center label */}
        <text
          x={cx}
          y={cy - 8}
          textAnchor="middle"
          fontFamily="var(--font-poppins)"
          fontSize={size * 0.04}
          fontWeight="600"
          fill="#800000"
          letterSpacing="0.2em"
        >
          MOESTUIN
        </text>
        <text
          x={cx}
          y={cy + size * 0.04}
          textAnchor="middle"
          fontFamily="var(--font-cormorant)"
          fontStyle="italic"
          fontSize={size * 0.035}
          fill="#1A1A1A"
        >
          jaarcyclus
        </text>

        {/* radial lines (subtle) */}
        {MAANDEN.map((m, i) => {
          const angle = angleStart + i * step;
          const x1 = cx + Math.cos(angle) * innerRadius;
          const y1 = cy + Math.sin(angle) * innerRadius;
          const x2 = cx + Math.cos(angle) * (radius - size * 0.04);
          const y2 = cy + Math.sin(angle) * (radius - size * 0.04);
          return (
            <line
              key={`line-${m.slug}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(128, 0, 0, 0.1)"
              strokeWidth="0.5"
            />
          );
        })}

        {/* month markers + labels */}
        {MAANDEN.map((m, i) => {
          const angle = angleStart + i * step + step / 2; // centered between radial lines
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          const isCurrent = m.nummer === current.nummer;

          return (
            <g key={m.slug}>
              <Link href={`/maand/${m.slug}`}>
                <g className="cursor-pointer group">
                  <circle
                    cx={x}
                    cy={y}
                    r={isCurrent ? size * 0.05 : size * 0.035}
                    fill={isCurrent ? '#800000' : 'white'}
                    stroke="#800000"
                    strokeWidth={isCurrent ? 0 : 1}
                    className="transition-all duration-200 group-hover:r-[30]"
                  />
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    fontFamily="var(--font-poppins)"
                    fontSize={size * 0.022}
                    fontWeight={isCurrent ? '600' : '500'}
                    fill={isCurrent ? 'white' : '#800000'}
                    className="pointer-events-none select-none"
                  >
                    {String(m.nummer).padStart(2, '0')}
                  </text>
                  <text
                    x={cx + Math.cos(angle) * (radius + size * 0.075)}
                    y={cy + Math.sin(angle) * (radius + size * 0.075) + 4}
                    textAnchor="middle"
                    fontFamily="var(--font-poppins)"
                    fontSize={size * 0.025}
                    fontWeight={isCurrent ? '600' : '400'}
                    fill={isCurrent ? '#800000' : '#1A1A1A'}
                    className="pointer-events-none select-none"
                  >
                    {m.naam.toLowerCase()}
                  </text>
                </g>
              </Link>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
