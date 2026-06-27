import type { Maand } from '@/lib/types';

export const oktober: Maand = {
  nummer: 10,
  slug: 'oktober',
  naam: 'Oktober',
  ondertitel: 'Vendanges-finale, paddestoelen en knoflook poten',
  intro:
    'De maand van de wijnoogst-afsluiting in het noorden, van de eerste champignons in de bossen, en van het wegruimen. Knoflook poten in de noordelijke zones (zuid had al september). Composthoop een laatste keer omzetten en afdekken voor winter. In de Provence brengen de eerste regens na een lange zomer de tuin weer op snelheid; in de bergen valt de eerste nachtvorst.',
  zones: {
    oceanique: {
      zaaien: [
        { gewas: 'Veldsla, wintersla', detail: 'laatste kans zonder bescherming' },
        { gewas: 'Spinazie (overwinterend)' },
        { gewas: 'Tuinboon (vroege rassen)', latijn: 'Vicia faba', detail: 'voor oogst eind mei' },
        { gewas: 'Doperwt (winterhard ras)', detail: 'in milde gebieden Bretagne / Vendée' },
        { gewas: 'Groenbemester (rogge, wikke) — overwinterend' },
      ],
      planten: [
        { gewas: 'Knoflook (begin maand)', latijn: 'Allium sativum', detail: 'voor oogst juli volgend jaar' },
        { gewas: 'Sjalotten', detail: 'in milde Atlantische klimaat al mogelijk' },
        { gewas: 'Aardbeien (afronden)', detail: 'laatste plantbeurt voor winter' },
        { gewas: 'Bessenstruiken (aalbes, zwarte bes, kruisbes)' },
      ],
      oogsten: [
        { gewas: 'Pompoen, butternut, potimarron (afronden)' },
        { gewas: 'Andijvie, snijbiet' },
        { gewas: 'Aardappelen (winterbewaarders, laatste rooi)' },
        { gewas: 'Wortelen, rode bieten, raap' },
        { gewas: 'Spruitkool (eerste)' },
        { gewas: 'Cidre-appels (Normandie)', latijn: 'Malus domestica' },
        { gewas: 'Walnoten, kastanjes', latijn: 'Castanea sativa' },
        { gewas: 'Cèpes, girolles, pieds-de-mouton', latijn: 'Boletus / Cantharellus / Hydnum', detail: 'volop na herfstregens' },
      ],
      onderhoud: [
        'Bladeren ruimen, composthoop met blad afdekken',
        'Aardbeien-rij mulchen met blad voor winterbescherming',
        'Niet-doordragende frambozen weggesnoeid hout opruimen',
        'Tuinslangen en druppelinstallatie leegmaken en opbergen',
        'Tuinmeubels en gerei onder dak',
        'Cidre-appels persen of fermenten — Bretagne en Normandie seizoen',
      ],
    },
    oceanique_alt: {
      zaaien: [
        { gewas: 'Veldsla, wintersla' },
        { gewas: 'Winterspinazie' },
        { gewas: 'Tuinboon (vroeg)' },
        { gewas: 'Groenbemester (rogge winterhard)' },
      ],
      planten: [
        { gewas: 'Knoflook (begin maand)' },
        { gewas: 'Bessenstruiken' },
        { gewas: 'Fruitbomen (begin van plantseizoen)', detail: 'pas op vorstvrije dag' },
      ],
      oogsten: [
        { gewas: 'Pompoen, butternut, potimarron' },
        { gewas: 'Aardappelen' },
        { gewas: 'Wortelen, rode bieten, knolselderij' },
        { gewas: 'Appels en peren (laatste rassen, Boskoop, Conférence)' },
        { gewas: 'Druiven Loire (laatste vendanges)' },
        { gewas: 'Walnoten, hazelnoten, kastanjes' },
        { gewas: 'Cèpes en girolles' },
      ],
      onderhoud: [
        'Bladblazen onder bessenstruiken — schurft-preventie',
        'Composthoop omzetten en afdekken',
        'Aardbeien mulchen',
        'Wintergroente (boerenkool, prei, andijvie) blijft op zijn plek',
      ],
    },
    continental: {
      zaaien: [
        { gewas: 'Veldsla (winterhard ras)' },
        { gewas: 'Tuinboon (vroeg)' },
        { gewas: 'Groenbemester (rogge, winterhard)' },
      ],
      planten: [
        { gewas: 'Knoflook (eind okt – begin nov)' },
        { gewas: 'Bessenstruiken' },
        { gewas: 'Fruitbomen op kale wortel', detail: 'planten in vorstvrije periode' },
      ],
      oogsten: [
        { gewas: 'Pompoen, potimarron, butternut' },
        { gewas: 'Aardappelen' },
        { gewas: 'Wortelen, rode bieten, knolselderij, raap, schorseneren' },
        { gewas: 'Appels (Reinette, Boskoop, Belle de Boskoop)' },
        { gewas: 'Druiven Alsace, Bourgogne (afronding vendanges)' },
        { gewas: 'Kastanjes, walnoten', latijn: 'Castanea / Juglans' },
        { gewas: 'Cèpes (Vosges, Jura)' },
      ],
      onderhoud: [
        'Eerste nachtvorst begint half oktober — afdekken kwetsbare gewassen',
        'Bladeren ruimen vooral onder fruitbomen (schurft, monilia)',
        'Composthoop omzetten en afdekken met blad/karton',
        'Quetsches: confituur en eau-de-vie maken van laatste oogst',
      ],
    },
    mediterraneen: {
      zaaien: [
        { gewas: 'Wintersla, mâche, andijvie', detail: 'beste maand van het jaar' },
        { gewas: 'Winterspinazie' },
        { gewas: 'Roquette, kervel, koriander' },
        { gewas: 'Snijbiet (overwinterend)' },
        { gewas: 'Tuinboon, doperwt' },
        { gewas: 'Wortelen (vroege)' },
        { gewas: 'Voorjaarsuien' },
      ],
      planten: [
        { gewas: 'Knoflook (laatste kans)' },
        { gewas: 'Aardbeien (uitlopers, herfstaanplant)' },
        { gewas: 'Bessenstruiken' },
        { gewas: 'Fruitbomen' },
      ],
      oogsten: [
        { gewas: 'Tomaten (allerlaatste, beschutte plek)' },
        { gewas: 'Druiven (laatste vendanges Roussillon, Languedoc)' },
        { gewas: 'Granaatappel, kweepeer', latijn: 'Punica granatum / Cydonia oblonga' },
        { gewas: 'Olijven (groen, voor tafelconservering)', latijn: 'Olea europaea' },
        { gewas: 'Tweede vijgen-oogst (laatste)' },
        { gewas: 'Eerste citrussoorten (Corsica, Roussillon)', latijn: 'Citrus' },
      ],
      onderhoud: [
        'Eerste serieuze regens — mulch nog nuttig, niet weghalen',
        'Bewatering bijna stoppen (alleen citrus en nieuwe aanplant)',
        'Olijven oogst (groene tafelolijven) — pekelen voor winterconservering',
        'Citrusbomen: winterbescherming klaarleggen voor zachte vorst',
        'Wintergroente nu groeit lekker — sla, andijvie, mâche, spinazie',
      ],
    },
    montagnard: {
      zaaien: [
        { gewas: 'Veldsla (winterhard ras), mâche', detail: 'alleen vóór eerste vorst' },
        { gewas: 'Groenbemester (rogge)' },
      ],
      planten: [
        { gewas: 'Knoflook (begin maand, vóór winter)' },
        { gewas: 'Bessenstruiken' },
      ],
      oogsten: [
        { gewas: 'Aardappelen (allerlaatste, voor winter)' },
        { gewas: 'Pompoen, potimarron (vóór nachtvorst)' },
        { gewas: 'Wortelen, rode bieten, raap, schorseneren' },
        { gewas: 'Appels en peren (laatste rassen)' },
        { gewas: 'Kastanjes (Ardèche, Cévennes, Var)', detail: 'AOP Ardèche-kastanje' },
        { gewas: 'Walnoten' },
        { gewas: 'Cèpes (hoogseizoen na regens)', detail: 'aankoop bij paddestoelenmarkt of zelf zoeken' },
      ],
      onderhoud: [
        'Eerste vorst boven 800 m — alles wintergevoeligs binnen',
        'Aardbeien afdekken met dennetakken of mulch',
        'Compost in winterkist',
        'Tuingerei in droge schuur — vorst breekt slangen',
        'Brandhout binnenhalen — Toussaint nadert',
      ],
    },
  },
  juridischDezeMaand: [],
  varietesUitgelicht: ['haricot-tarbais', 'piment-d-espelette'],
  recepten: [
    {
      naam: 'Galette de blé noir aux cèpes',
      herkomst: 'Bretagne',
      intro:
        'De Bretonse boekweit-galette (sarrasin) met geroosterde cèpes — hét herfst-bos-product na de eerste regens. Boter, ui, sjalot, peterselie, en eventueel een dooier in het hartje van de galette. Met een lokale cidre brut erbij. Sober Breton herfsteten op zijn best.',
      seizoensgroenten: ['cèpes', 'ui', 'sjalot', 'peterselie', 'boter', 'boekweitmeel'],
      zones: ['oceanique'],
    },
    {
      naam: 'Soupe à l\'oignon gratinée',
      herkomst: 'Lyon / Île-de-France',
      intro:
        'De klassieke uiensoep: trage gekarameliseerde uien (anderhalf uur op laag vuur — niet te bruin, niet te bleek), runderbouillon, een glas droge witte wijn, oude baguette en geraspte Comté of Gruyère eroverheen, onder de grill tot bruin. Brasserie-klassieker uit Les Halles Parijs, oktober is het seizoen-startpunt.',
      seizoensgroenten: ['ui', 'knoflook', 'tijm', 'laurier', 'Comté/Gruyère', 'baguette (oud)'],
      zones: ['oceanique_alt'],
    },
    {
      naam: 'Coq au vin de Bourgogne',
      herkomst: 'Bourgogne',
      intro:
        'Een oude haan (of een stevige scharrelkip), gemarineerd in rode Bourgogne (Pinot Noir), gestoofd met lardons, champignons, parelui, knoflook en bouquet garni. Een nacht laten staan, de volgende dag opnieuw warm: nóg beter. Oktober is de maand: de nieuwe wijn-oogst zit in het vat, de vorige jaargang past in de pan.',
      seizoensgroenten: ['ui', 'champignon', 'knoflook', 'wortel', 'lardons', 'Pinot Noir'],
      zones: ['continental'],
    },
    {
      naam: 'Daube provençale',
      herkomst: 'Provence',
      intro:
        'Een Provençaalse run­derstoof, langzaam gegaard in rode wijn (Côtes-du-Rhône) met sinaasappelschil, kruidnagel, tijm, laurier en olijven. Drie uur op laag vuur, lang trekken — het origineel rust een dag in de gietijzeren daubière. Eerste koudere oktoberavonden vragen erom. Met polenta of pasta erbij.',
      seizoensgroenten: ['ui', 'wortel', 'knoflook', 'sinaasappelschil', 'olijf', 'tijm', 'laurier'],
      zones: ['mediterraneen'],
    },
    {
      naam: 'Aligot de l\'Aubrac',
      herkomst: 'Aubrac / Aveyron',
      intro:
        'Aardappelpuree die met tomme fraîche de l\'Aubrac (jonge ongerijpte Laguiole) zo lang wordt geroerd dat hij in slierten van een meter lang trekt. Knoflook, room, boter. Theatraal in de bergrestaurants, eenvoudig thuis. Klassieker van het Massif Central, oktober is de start: vee komt van de zomerweide af, melk is volop, tomme fraîche is vers.',
      seizoensgroenten: ['aardappel', 'tomme fraîche (Laguiole)', 'knoflook', 'room', 'boter'],
      zones: ['montagnard'],
    },
  ],
  afbeelding: {
    hero: '/images/maanden/oktober.png',
    alt: 'Oktober in de Franse moestuin — botanische plaat met pompoen, kastanje, cèpe, walnoot en boerenkool in de volle herfst',
    credit: 'Plaat X van XII — De maandelijkse moestuin',
    style: 'plaat',
  },
};
