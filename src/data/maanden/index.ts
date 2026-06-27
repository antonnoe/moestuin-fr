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

export function getCurrentMaand(): Maand {
  const num = new Date().getMonth() + 1;
  return MAANDEN[num - 1];
}
