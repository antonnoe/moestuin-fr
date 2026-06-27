'use client';

import { useEffect } from 'react';

/**
 * Wanneer moestuin-fr in een iframe op infofrankrijk.com draait (?embed=1),
 * stuurt deze component de actuele content-hoogte via postMessage naar het
 * parent-window. Het IF-page-script luistert op deze message en past de
 * iframe-hoogte aan zodat er geen scrollbalk in de iframe verschijnt.
 *
 * Message-formaat:
 *   { type: 'moestuin-fr-height', height: <pixels> }
 *
 * Het IF-page-script moet origin checken op
 * 'https://moestuin-fr.vercel.app' (of jouw eigen domein).
 */
export default function EmbedResizer() {
  useEffect(() => {
    const send = () => {
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );
      window.parent.postMessage(
        { type: 'moestuin-fr-height', height },
        '*', // parent controleert origin aan zijn kant
      );
    };

    // Initieel sturen
    send();

    // Bij elke content-mutatie opnieuw sturen
    const observer = new ResizeObserver(() => send());
    observer.observe(document.body);

    // Ook bij window-resize (responsive breakpoints)
    window.addEventListener('resize', send);

    // Pollen voor lazy-loaded content (kaart, images) — eerste 5 sec elke 500ms
    const interval = window.setInterval(send, 500);
    const stopPolling = window.setTimeout(() => {
      window.clearInterval(interval);
    }, 5000);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', send);
      window.clearInterval(interval);
      window.clearTimeout(stopPolling);
    };
  }, []);

  return null;
}
