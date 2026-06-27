# Afbeeldingen — vervangen en uitbreiden

Voor deze v1 zijn **Unsplash-CDN URLs** gebruikt als placeholder. Ze laden direct, zijn gratis voor commercieel gebruik (Unsplash License), en ogen acceptabel. Maar: ze zijn niet onderscheidend, en ze tonen niet de specifieke Franse tuincontext.

Doel voor v2: **eigen of door Ini Wennink gemaakte foto's**, gerubriceerd per maand en per zone.

## Hoe het afbeeldingen-systeem werkt

Elke maand heeft in `src/data/maanden/{maand}.ts`:

```ts
afbeelding: {
  hero: 'https://images.unsplash.com/photo-XXXX?w=1800&q=80',
  alt: 'Beschrijvende alt-tekst',
  credit: 'Unsplash',
},
galerij: [
  {
    src: '...',
    alt: '...',
    caption: 'Bijschrift',
    credit: 'Fotograaf / bron',
  },
  // 2-4 fotos
],
```

`hero` verschijnt als grote hero-afbeelding bovenaan de maandpagina.
`galerij` verschijnt onderaan in een 3-koloms rooster.

## Vervangen door eigen foto's

Er zijn twee opties:

### Optie A — Eigen Vercel/Next.js hosting

Plaats foto's in `public/images/maanden/{maand}/`. Verwijs er dan naar als:

```ts
hero: '/images/maanden/juni/hero.jpg',
```

Voordelen: volledige controle, geen externe afhankelijkheid, snel via Vercel's CDN.
Aandachtspunt: foto's gaan mee in de repo — gebruik dus geoptimaliseerde JPGs (max ~300 kB voor hero, max ~150 kB voor galerij).

### Optie B — Externe CDN (Cloudinary, Imgix, eigen S3)

Bij gebruik van een externe host: voeg het domein toe in `next.config.mjs`:

```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'jouw-cdn-domein.com' },
  ],
},
```

## Per maand benodigd

| Maand | Hero | Galerij |
|---|---|---|
| Januari | berijpt bed, kale moestuin | nog leeg |
| Februari | eerste sneeuwklokjes, snoeien | nog leeg |
| Maart | eerste zaailingen, omgespitte bedden | nog leeg |
| April | sla, asperges, bloei van vruchtbomen | nog leeg |
| Mei | volle bedden, tomaten net geplant | nog leeg |
| **Juni** | rijpe tomaten | **3 galerij-foto's gedefinieerd** |
| Juli | zomeroogst, mediterrane droogte | nog leeg |
| Augustus | volle oogst, zonnebloemen | nog leeg |
| September | pompoenen rijp, herfst-zaai | nog leeg |
| Oktober | pompoenoogst, bladeren | nog leeg |
| November | Sainte-Catherine, kale boomgaard | nog leeg |
| December | berijpte tuin, sneeuw | nog leeg |

## Suggesties

- **Eigen foto's**: bij voorkeur in vergelijkbare composities — landschappelijk hero (16:9 of 21:9), galerij vierkant of 4:3.
- **Ini Wennink**: vraag of haar portretserie of moestuin-foto's vrijgegeven mogen worden.
- **Lezers van NLFR**: oproep voor eigen tuinfoto's per zone — naar redactie.
- **Naamgeving op disk**: `hero.jpg`, `galerij-1.jpg`, `galerij-2.jpg`, `galerij-3.jpg`. Met losse `.alt` info in een aparte tekstbestand.

## Botanische illustraties (signature)

Een mooie aanvulling op v2: lijntekeningen in **Vilmorin-Andrieux**-traditie (Frans, eind 19e eeuw, publiek domein). Hoge-resolutie scans beschikbaar via:

- [Biodiversity Heritage Library](https://www.biodiversitylibrary.org/) — zoek "Vilmorin Andrieux"
- [Gallica BnF](https://gallica.bnf.fr/) — verschillende kruidenboeken in publiek domein

Plaats als achtergrond-element (zeer subtiel, ~10% opacity) of als sectie-divider.

## Alt-teksten en credits

- Elke `alt` moet beschrijvend zijn voor wat te zien is — niet "Tomaten foto", wél "Rijpende cœur-de-bœuf tomaten aan de plant in een Provençaalse moestuin".
- `credit` moet altijd ingevuld zijn als de bron auteursrechtelijk beschermd is.
- Voor Wikimedia Commons-foto's: CC-BY-SA vereist attributie inclusief licentie ("Foto: J. Dupont / Wikimedia Commons / CC-BY-SA 4.0").
