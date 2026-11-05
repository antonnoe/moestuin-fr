# CLAUDE.md

Repo: moestuin-fr

## Wat dit is

De Franse moestuin: een interactieve jaarkalender per klimaatzone, onderdeel van Infofrankrijk.com. Met klikbare klimaatkaart, twaalf maandpagina's, juridisch luik, traditionele rassen, woordenlijst NL-FR-Latijn en live waterrestricties (Propluvia).

## Live adres

https://moestuin-fr.vercel.app (README.md, `src/app/manifest.ts` en `src/components/MobileBridge.tsx`). De pagina kan in een iframe op Infofrankrijk en Infopoche, met `?embed=1`.

## Opbouw

- `src/app/`: layout.tsx, page.tsx (kaart en jaarcyclus), `maand/[slug]/`, `juridisch/`, `varietes/`, `woordenlijst/`, `over/`, `manifest.ts`, `api/waterrestricties/route.ts` (Propluvia-proxy, 6 uur cache)
- `src/components/`: ClimateMap, EmbedResizer, Footer, Header, ImageGallery, LiveAlerts, MobileBridge (QR-knop), MonthContent, Shell, YearCycle, ZoneSelector
- `src/data/`: zones.ts, juridisch.ts, varietes.ts, woordenlijst.ts, `maanden/` (één bestand per maand)
- `src/lib/types.ts`
- `public/`: favicon, `icons/`, `images/`
- `IMAGES.md`: afbeeldingensysteem

## Techniek

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, MapLibre GL JS, `qrcode.react`. Statische gegevens in TypeScript, geen database. Scripts: `npm run dev`, `build`, `start`, `lint`. Externe afbeeldingen zijn alleen toegestaan van images.unsplash.com, upload.wikimedia.org en infofrankrijk.com (remotePatterns in `next.config.mjs`). Een Content-Security-Policy `frame-ancestors` bepaalt welke sites de pagina mogen insluiten (infofrankrijk.com, infopoche.fr en zichzelf).

## Externe diensten en namen van omgevingsvariabelen

- Vercel (hosting), data.gouv.fr (open data Propluvia), Légifrance (bronnen juridisch luik), Unsplash en Wikimedia (afbeeldingen)
- Omgevingsvariabelen: geen in de code gevonden

## Hoe het live gaat

Vercel deployt automatisch vanuit GitHub bij een push. Geen workflows in de repo. De oude Infofrankrijk-pagina's krijgen volgens README.md 301-redirects naar `/maand/<maand>`, ingesteld in WordPress (Redirection-plugin of `.htaccess`).

## Regels en besluiten

Bron: README.md en IMAGES.md.

- Maanden: één TypeScript-bestand per maand in `src/data/maanden/`; juni is de referentiemaand.
- Klimaatzones aanpassen in `src/data/zones.ts`, array `DEPARTEMENTEN`, één regel per departement.
- Juridisch luik (`src/data/juridisch.ts`): `bronUrl` moet naar Légifrance of een `.gouv.fr`-site wijzen, `laatsteUpdate` markeert de laatste controle.
- Propluvia-route: de endpoint staat als constante `PROPLUVIA_API`; bij falen geeft de API gracieus terug met een link naar Propluvia.
- Onderhoudscyclus: eind januari juridisch luik, eind april belastinggids-link en Saints de Glace, mei canicule-tools en Propluvia testen, september herfstcontent en zaadhandel-links, december jaarlijkse review.
- Afbeeldingen: Unsplash is een placeholder, eigen foto's gaan naar `public/images/maanden/<maand>/`. Elke `alt` is beschrijvend, `credit` is altijd ingevuld bij auteursrechtelijk beschermd materiaal, Wikimedia-foto's met attributie en licentie.
- Licentie: inhoud is van Communities Abroad, code op verzoek beschikbaar onder MIT.
- De hoofdpagina `/de-franse-moestuin/` op Infofrankrijk blijft bestaan met een korte intro en een knop naar de jaarkalender.

Laatst nagelopen: 5 november 2026
