import type { JuridischItem } from '@/lib/types';

export const JURIDISCH: JuridischItem[] = [
  {
    slug: 'snoei-erfgrens',
    titel: 'Plantafstanden en hagen tot de erfgrens',
    korteBeschrijving:
      'Bomen en struiken moeten op een vastgestelde afstand van de erfgrens staan, afhankelijk van hun uiteindelijke hoogte.',
    wet: 'Code civil — Plantations',
    artikel: 'Art. 671 t/m 673',
    bronUrl:
      'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165614/',
    bronNaam: 'Légifrance — Code civil, Section Plantations',
    laatsteUpdate: '2024-01-01',
    geldtVoorMaanden: [2, 3, 5, 10, 11],
    inhoud: `
**Hoofdregel (artikel 671 Code civil):**
Tenzij een lokale gewoonte (*usage local*) anders bepaalt of een specifieke titel anders regelt, gelden de volgende afstanden tot de erfgrens:

- **Plant met uiteindelijke hoogte ≤ 2 meter:** minimaal **0,5 meter** van de erfgrens
- **Plant met uiteindelijke hoogte > 2 meter:** minimaal **2 meter** van de erfgrens

De afstand wordt gemeten vanaf het hart van de stam tot de erfgrens.

**Buurman kan eisen dat de plant gerooid wordt** wanneer deze te dicht staat (artikel 672). Dit recht verjaart niet door tijdsverloop, behoudens bewezen *prescription trentenaire* (30 jaar dezelfde situatie + eigenaar wist het).

**Overhangende takken (artikel 673):**
- De buurman mag eisen dat overhangende takken gesnoeid worden — hij mag ze niet zélf afzagen.
- Wortels en uitlopers die de erfgrens overschrijden mag de buurman wél zelf wegsnijden.

**Praktijk:** check vóór planten altijd het *plan local d'urbanisme* (PLU) van de gemeente. Veel gemeentes hebben aanvullende regels (afstand tot openbare weg, type haag toegestaan).

**Sancties:** civiele procedure bij de *tribunal judiciaire* van de plaats waar de grond ligt. Geen administratieve boete.
    `,
  },
  {
    slug: 'recuperation-eau-pluie',
    titel: 'Regenwater opvangen voor de moestuin',
    korteBeschrijving:
      'Regenwater opvangen voor moestuinbesproeiing is toegestaan en zelfs aangemoedigd, mits het systeem aan de regels voldoet.',
    wet: 'Arrêté du 21 août 2008',
    artikel: 'Arrêté ministeriel 21 augustus 2008 — récupération et utilisation des eaux de pluie',
    bronUrl: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000019555537/',
    bronNaam: 'Légifrance — Arrêté du 21 août 2008',
    laatsteUpdate: '2024-01-01',
    geldtVoorMaanden: [4, 7],
    inhoud: `
**Toegestaan zonder beperking:**
- Regenwater uit daken (let op: niet uit asbestcement-daken of behandelde houten daken) opvangen in tanks of regenputten
- Gebruik **buitenshuis** voor: moestuin, gazon, autowassen, vloeroppervlakken reinigen

**Toegestaan binnenshuis met aanvullende regels:**
- WC doorspoelen
- Vloeren wassen
- Wasmachine (mits filtersysteem en behandeling)

**Vereisten voor binnen-gebruik:**
- Aparte leidingen (geen verbinding met drinkwaternet — *disconnexion totale*)
- Etiketten "eau non potable" op alle leidingen en kranen
- Verklaring aan de gemeente (*déclaration en mairie*) als het systeem op het rioolnet aansluit
- Jaarlijks onderhoud en logboek

**Voor moestuin alleen:** geen verklaring nodig, geen vergunning. Wel raadzaam: jaarlijks filter reinigen en eerste regenwater bij begin van een bui omleiden (*first flush*).

**Subsidie mogelijk:** sommige *régions* en *départements* geven subsidies voor regenwatertanks vanaf bepaalde inhoud. Check bij de regionale milieudienst (DREAL).

**Let op:** in gebieden met restricties d'eau (Propluvia) blijven die restricties gelden — ook voor opgevangen regenwater dat al in de tank zit, in sommige gevallen niveau "crise".
    `,
  },
  {
    slug: 'restrictions-secheresse',
    titel: 'Waterrestricties bij droogte (Propluvia)',
    korteBeschrijving:
      'Bij droogte legt de prefect per departement restricties op. Vier niveaus, oplopend van vigilance tot crise. De moestuin valt zelden onder de strengste maatregelen, maar de besproeiingstijden worden wél beperkt.',
    wet: 'Code de l\'environnement — articles L. 211-3 en R. 211-66 t/m R. 211-74',
    artikel: 'Arrêtés préfectoraux (per departement)',
    bronUrl: 'https://propluvia.developpement-durable.gouv.fr/',
    bronNaam: 'Propluvia — Ministère de la Transition écologique',
    laatsteUpdate: '2025-04-01',
    geldtVoorMaanden: [6, 7, 8, 9],
    inhoud: `
**Vier niveaus van restrictie** (vastgesteld per departement door de préfet):

| Niveau | Praktijk voor moestuin |
|---|---|
| **Vigilance** | Sensibilisatie. Geen verplichting, wel aansporing zuinig om te gaan. |
| **Alerte** | Besproeien tussen 20:00 en 8:00 toegestaan; overdag verboden. |
| **Alerte renforcée** | Idem als Alerte; sproei-uren kunnen verder beperkt zijn (vaak max. 8 uur per dag). |
| **Crise** | Besproeien moestuin meestal nog toegestaan, maar zwembaden bijvullen, autowassen en gazons sproeien zijn verboden. In sommige departementen óók moestuinbesproeiing verboden. |

**Wat wél altijd mag (alle niveaus):**
- Druppelirrigatie (*goutte à goutte*) — vaak expliciet uitgezonderd
- Handmatig water geven met gieter
- Opgevangen regenwater gebruiken (behalve in sommige *crise*-situaties)

**Hoe vind ik mijn restrictie?**
Live status per departement op [propluvia.developpement-durable.gouv.fr](https://propluvia.developpement-durable.gouv.fr/) — de officiële kaart. De situatie kan binnen één week veranderen.

**Sancties:**
- Contraventie van klasse 5: maximaal **1500 € boete** (3000 € bij recidive)
- Code de l'environnement art. R. 216-9

**Praktische tip:** abonneer je op de RSS-feed of e-mailmeldingen van je *préfecture* (rubriek "sécheresse"). Iedere arrêté wordt daar gepubliceerd.
    `,
  },
  {
    slug: 'compostage-agec',
    titel: 'Verplicht composteren voor alle huishoudens',
    korteBeschrijving:
      'Sinds 1 januari 2024 moet elk huishouden zijn organisch afval kunnen scheiden. Voor moestuiniers verandert er weinig — voor de buren wél.',
    wet: 'Loi AGEC (anti-gaspillage pour une économie circulaire)',
    artikel: 'Loi n° 2020-105 van 10 februari 2020, art. 88',
    bronUrl: 'https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000041553761',
    bronNaam: 'Légifrance — Loi AGEC art. 88',
    laatsteUpdate: '2024-01-01',
    geldtVoorMaanden: [1, 9, 10, 12],
    inhoud: `
**Wat verandert er sinds 1 januari 2024?**

Elk huishouden moet **toegang hebben tot een oplossing om organisch afval (*biodéchets*) te scheiden** van het restafval. Concreet betekent dat:

- Individuele huishoudens met tuin: een eigen composteringsbak of -hoop volstaat
- Huishoudens zonder tuin: de gemeente moet een oplossing aanbieden (bornes d'apport volontaire, collectieve composters in de wijk, of huis-aan-huis-ophaling)

**Voor de moestuinier:** niets verplicht — wie al composteert voldoet ruimschoots.

**Wat mag in de compost (vuistregel):**
- Groente- en fruitresten, koffiedik, eierschalen
- Snoeiafval (gehakseld), gras (in dunne lagen)
- Stro, bladafval
- Karton (klein gemaakt, zonder inkt-glanzend)

**Wat niet:**
- Vlees, vis, zuivel (trekt ongedierte aan)
- Geverfd of behandeld hout
- Asse van kolen of behandeld hout (asse van zuiver houtvuur mag in beperkte mate)
- Zieke planten (mildiou-tomaten bijvoorbeeld)

**Sancties:** voor particulieren is er momenteel **geen administratieve boete**. De wet legt de verplichting op gemeenten om een oplossing te bieden, niet op individuen om te composteren. Een gemeente kan wel haar eigen reglement opleggen.

**Praktisch — gemeentelijke compostbakken:**
Veel gemeenten geven een gratis of gesubsidieerde composteur uit (composteur communal). Vraag bij de *service environnement* van de mairie.
    `,
  },
  {
    slug: 'glyfosaat-particulieren',
    titel: 'Verbod op glyfosaat en chemische bestrijdingsmiddelen voor particulieren',
    korteBeschrijving:
      'Sinds 1 januari 2019 mogen particulieren geen synthetische chemische gewasbeschermingsmiddelen meer kopen, opslaan of gebruiken — inclusief glyfosaat.',
    wet: 'Loi Labbé',
    artikel: 'Loi n° 2014-110 van 6 februari 2014, gewijzigd door loi du 22 juli 2015',
    bronUrl: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000028576229/',
    bronNaam: 'Légifrance — Loi Labbé',
    laatsteUpdate: '2022-07-01',
    geldtVoorMaanden: [],
    inhoud: `
**Sinds 1 januari 2019** mogen particulieren geen synthetische chemische gewasbeschermingsmiddelen meer kopen, opslaan of toepassen. Glyfosaat (de werkzame stof in Round-Up) valt hier expliciet onder.

**Wat is wél toegestaan voor particulieren:**
- Producten met label **EAJ — Emploi Autorisé dans les Jardins** (specifiek toegelaten voor amateurs)
- **Produits de biocontrôle** (biologische bestrijdingsmiddelen): bordeauxse pap, *Bacillus thuringiensis* tegen rupsen, neemolie, etc.
- **Substances de base** (in Europa goedgekeurde basisproducten): brandnetelaftreksel, heermoesaftreksel, melk tegen meeldauw

**Sancties:**
- Verkoop aan particulier door winkel: tot **75.000 € boete**, mogelijk 6 maanden gevangenisstraf (art. L. 253-17 Code rural)
- Gebruik door particulier: contraventie klasse 5 — tot **750 € boete**
- Bezit/opslag: idem

**Wat te doen met oude voorraad?**
Oude flessen mogen niet in restafval of in de gootsteen. Inleveren bij een *déchèterie* met een rubriek *déchets diffus spécifiques* (DDS) — gratis voor particulieren.

**Voor de moestuinier:**
- Onkruid: handmatig, mulchen, geen-spitten, *paillage*
- Plagen: voorkomen door diversiteit, vruchtwisseling, gezelschapsplanten (*compagnonnage*)
- Schimmel: bordeauxse pap (toegestaan), preventief in bio-tuin

**Sinds 1 juli 2022** geldt het verbod óók voor openbare ruimtes en privé-tuinen toegankelijk voor publiek (camping, vakantieparken, parken bij bedrijven).
    `,
  },
];

export function getJuridischBySlug(slug: string): JuridischItem | undefined {
  return JURIDISCH.find((item) => item.slug === slug);
}
