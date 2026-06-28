'use client';

import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

/**
 * Floating QR-knop op desktop (md+).
 * Klik → modal met QR-code naar moestuin-fr.vercel.app/?utm_source=qr&utm_medium=desktop.
 * Bedoeld om desktop-bezoekers naar mobile-versie te bridgen.
 * Niet zichtbaar in embed-mode (?embed=1) — daar regelt de host (IF) het.
 */
export default function MobileBridge() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Embed-mode skip — IF-pagina heeft eigen ruimte voor QR
  const inEmbed = typeof window !== 'undefined' &&
    new URL(window.location.href).searchParams.get('embed') === '1';
  if (inEmbed) return null;

  const url = 'https://moestuin-fr.vercel.app/?utm_source=qr&utm_medium=desktop';

  return (
    <>
      {/* Floating button — alleen ≥768px */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-bordeaux text-cream px-4 py-3 rounded-sm shadow-lg hover:bg-bordeaux/90 transition-colors border border-bordeaux/20"
        aria-label="Open op telefoon via QR-code"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <path d="M14 14h3v3h-3zM21 14v3M14 21h3M21 21v-3M17 17h4" />
        </svg>
        <span className="text-sm font-medium">Open op telefoon</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="QR-code naar mobiele versie"
        >
          <div
            className="bg-cream max-w-sm w-full p-8 rounded-sm shadow-xl border border-bordeaux/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="eyebrow mb-1">Voor in de tuin</div>
                <h3 className="!mt-0 !mb-0 text-lg">Open op je telefoon</h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-ink/60 hover:text-ink transition-colors -mt-1 -mr-1 p-1"
                aria-label="Sluiten"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center my-6">
              <div className="bg-white p-4 rounded-sm border border-bordeaux/10">
                <QRCodeSVG
                  value={url}
                  size={200}
                  level="M"
                  fgColor="#800000"
                  bgColor="#FFFFFF"
                  marginSize={0}
                />
              </div>
            </div>

            <p className="text-sm text-ink/80 text-center !mb-2">
              Scan met de camera-app van je telefoon.
            </p>
            <p className="text-xs text-ink/60 text-center !mb-0">
              Voeg toe aan je beginscherm voor app-toegang.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
