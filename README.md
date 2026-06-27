# De Franse moestuin — `moestuin-fr.vercel.app`

Interactieve jaarkalender voor de Franse moestuin, gestructureerd per klimaatzone. Onderdeel van Infofrankrijk.com.

## Wat het is

- **Klikbare klimaatkaart** van Frankrijk: kies je departement → zone wordt automatisch onthouden
- **12 maandpagina's** met advies per zone: zaaien / planten / oogsten / onderhouden
- **Juridisch luik** met vijf wetsartikelen (plantafstanden, regenwater, droogterestricties, AGEC-compost, glyfosaat-verbod) — primaire bronnen via Légifrance
- **Variétés anciennes**: traditionele Franse rassen, met zaadhandel-links
- **Woordenlijst NL-FR-Latijn**, zoekbaar
- **Live data**: actuele Propluvia-waterrestricties per departement (ISR, 6u cache)

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS met huisstijl-tokens
- MapLibre GL JS voor de klimaatkaart
- Statische JSON-data — geen database
- Vercel deploy (auto via GitHub)

## Setup

```bash
npm install
npm run dev      # localhost:3000
npm run build    # productie-build
```

## Architectuur

```
src/
├── app/
│   ├── layout.tsx          # Root layout + fonts
│   ├── page.tsx            # Landing (kaart + jaarcyclus)
│   ├── globals.css         # Huisstijl, typografie
│   ├── maand/[slug]/       # Dynamic route per maand
│   ├── juridisch/          # Wetgeving
│   ├── varietes/           # Lokale rassen
│   ├── woordenlijst/       # NL-FR-Latijn
│   ├── over/               # Bronnen & methodologie
│   └── api/waterrestricties/  # Propluvia proxy
├── components/
│   ├── Header, Footer
│   ├── ClimateMap          # MapLibre kaart van Frankrijk
│   ├── YearCycle           # Signature: 12-maanden cirkel
│   ├── ZoneSelector        # Sticky zone-switcher
│   ├── MonthContent        # Zaai/plant/oogst/onderhoud panelen
│   ├── LiveAlerts          # Propluvia status
│   └── ImageGallery
├── data/
│   ├── zones.ts            # 5 klimaatzones + 96 departementen mapping
│   ├── maanden/            # 12 maanden, één file per maand
│   ├── juridisch.ts        # 5 wetsartikelen
│   ├── varietes.ts         # 8 traditionele rassen
│   └── woordenlijst.ts     # ~100 termen
└── lib/
    └── types.ts            # TypeScript types
```

## Inhoudelijke werkwijze

### Content vernieuwen per maand

Iedere maand zit in een eigen TypeScript-file in `src/data/maanden/`. Structuur:

```ts
export const juni: Maand = {
  nummer: 6,
  slug: 'juni',
  zones: {
    oceanique: { zaaien: [...], planten: [...], oogsten: [...], onderhoud: [...] },
    oceanique_alt: { ... },
    continental: { ... },
    mediterraneen: { ... },
    montagnard: { ... },
  },
  // ...
};
```

Voor v1 is **juni** als referentiemaand het meest uitgewerkt. De andere maanden bevatten een werkbare basis. Verrijking via:

- De originele 12-delige serie van Theo Sacourieu op Infofrankrijk (2015)
- Franse vakmedia: Rustica, Gerbeaud, Au Jardin, Promesse de Fleurs
- Kokopelli, Ferme de Sainte-Marthe, Le Biau Germe (variétés en kalenders)

### Klimaatzones aanpassen

Indeling per departement in `src/data/zones.ts` → array `DEPARTEMENTEN`. Eén regel per departement. Zonewijziging is één edit en effect direct op kaart + alle maandpagina's.

### Juridisch luik bijwerken

`src/data/juridisch.ts`. Voor elk item: `bronUrl` moet naar Légifrance of `.gouv.fr` wijzen. Veld `laatsteUpdate` markeert de laatste controle.

### Live data

De Propluvia-route (`src/app/api/waterrestricties/route.ts`) leest een open data-bron van data.gouv.fr. De endpoint-URL is meegegeven als constante (`PROPLUVIA_API`). Wijzigt de bron, dan één regel aanpassen. Bij falen geeft de API gracieus terug met een directe link naar Propluvia.

## Afbeeldingen

Zie [IMAGES.md](./IMAGES.md) voor het systeem en hoe je Unsplash-placeholders vervangt door eigen of Ini-foto's.

## Migratie van WP-content

12 oude IF-URLs krijgen 301-redirects naar de nieuwe sub-app — zie WP-Redirection-plugin of `.htaccess`:

```
/franse-moestuin-werk-januari/  → https://moestuin-fr.vercel.app/maand/januari
/franse-moestuin-werk-februari/ → https://moestuin-fr.vercel.app/maand/februari
... enz.
```

De hoofdpagina `/de-franse-moestuin/` op Infofrankrijk blijft, met een korte intro en een grote knop "Open de jaarkalender".

## Onderhoudscyclus

| Wanneer | Wat |
|---|---|
| Eind januari | Update juridisch luik (nieuwe arrêtés van vorig jaar) |
| Eind april | Update belastinggids-link, fact-check Saints de Glace data |
| Mei | Voorbereiding canicule-tools, Propluvia testen |
| September | Update herfst-content, controle zaadhandel-links |
| December | Jaarlijkse review, plannen voor nieuw seizoen |

## Licentie

Inhoud © Communities Abroad. Code op verzoek beschikbaar onder MIT.
