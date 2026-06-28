'use client';

import { Suspense, type ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import EmbedResizer from './EmbedResizer';
import MobileBridge from './MobileBridge';

function ShellInner({ children }: { children: ReactNode }) {
  const search = useSearchParams();
  const embed = search.get('embed') === '1';

  return (
    <>
      {!embed && <Header />}
      <main className="min-h-screen">{children}</main>
      {!embed && <Footer />}
      {!embed && <MobileBridge />}
      {embed && <EmbedResizer />}
    </>
  );
}

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </>
      }
    >
      <ShellInner>{children}</ShellInner>
    </Suspense>
  );
}
