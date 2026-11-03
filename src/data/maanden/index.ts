import type { Maand } from '@/lib/types';
import { januari } from './januari';
import { februari } from './februari';
import { maart } from './maart';
import { april } from './april';
import { mei } from './mei';
import { juni } from './juni';
import { juli } from './juli';
import { augustus } from './augustus';
import { september } from './september';
import { oktober } from './oktober';
import { november } from './november';
import { december } from './december';

export const MAANDEN: Maand[] = [
  januari,
  februari,
  maart,
  april,
  mei,
  juni,
  juli,
  augustus,
  september,
  oktober,
  november,
  december,
];

export function getMaandBySlug(slug: string): Maand | undefined {
  return MAANDEN.find((m) => m.slug === slug);
}

export function getMaandByNumber(num: number): Maand | undefined {
  return MAANDEN.find((m) => m.nummer === num);
}

/**
 * De maand van nu, in Franse tijd (Europe/Paris), niet in de tijd van de server. Wie dit vanaf een statische pagina
 * aanroept krijgt de maand van het moment van bouwen: de startpagina zet daarom `revalidate`, zodat de pagina elk
 * uur opnieuw wordt opgebouwd (3 november 2026: de knop zei nog "Start bij oktober", de site was op 21 oktober gebouwd).
 */
export function getCurrentMaand(nu: Date = new Date()): Maand {
  const num = Number(new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Paris', month: 'numeric' }).format(nu));
  return MAANDEN[num - 1] ?? MAANDEN[nu.getMonth()];
}
