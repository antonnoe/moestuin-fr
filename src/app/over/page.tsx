import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over deze gids — De Franse moestuin',
  description: 'Bronnen, methodologie en achtergrond bij de jaarkalender voor de Franse moestuin.',
};

export default function OverPagina() {
  return (
    <section className="container-narrow py-16">
      <div className="eyebrow mb-3">Achtergrond</div>
      <h1 className="!mt-0">Over deze gids</h1>

      <h2>Waarom een eigen kalender?</h2>
      <p>
        Gangbare moestuinkalenders gaan ervan uit dat &quot;Frankrijk&quot; één klimaat heeft. Dat is niet
        zo. De vorstdata in Bretagne en die in de Beauce liggen drie weken uit elkaar; tussen Nice
        en Briançon zit zelfs meer dan twee maanden verschil in groeiseizoen. Wie hier woont weet
        dat — wie hier nieuw is loopt vast op generiek advies.
      </p>
      <p>
        Deze kalender is opgebouwd rond <strong>vijf klimaatzones</strong>, met voor elke maand
        afzonderlijk advies.
      </p>

      <h2>Bronnen</h2>
      <p>De inhoud is opgebouwd uit drie soorten bronnen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Primaire wettelijke bronnen</strong> voor het juridisch luik: Légifrance,
          ministeriële arrêtés op .gouv.fr, Propluvia. Zie de bronlinks op de juridisch-pagina.
        </li>
        <li>
          <strong>Franse moestuintraditie</strong>: gespecialiseerde uitgaven en sites zoals{' '}
          <a href="https://www.rustica.fr/" target="_blank" rel="noreferrer">Rustica</a>,{' '}
          <a href="https://www.gerbeaud.com/" target="_blank" rel="noreferrer">Gerbeaud</a>,{' '}
          <a href="https://www.aujardin.info/" target="_blank" rel="noreferrer">Au Jardin</a>,{' '}
          <a href="https://www.promessedefleurs.com/conseil-plantes" target="_blank" rel="noreferrer">Promesse de Fleurs</a>{' '}
          en de jaarkalenders van <a href="https://www.kokopelli-semences.fr/" target="_blank" rel="noreferrer">Kokopelli</a>.
        </li>
        <li>
          <strong>De moestuinserie van Infofrankrijk</strong> (2015) als
          uitgangspunt, geüpdatet voor het huidige klimaat en de huidige wetgeving.
        </li>
      </ul>

      <h2>Klimaatzonering</h2>
      <p>
        De indeling combineert <strong>Köppen-Geiger</strong> (Cfb, Cfa, Csa, Dfb, ET) met de
        regionale klimatologie van <strong>Météo-France</strong>. Voor departementen met sterke
        hoogteverschillen (Isère, Drôme, Pyrenees-Atlantiques, Haute-Vienne) is de dominante zone
        in de bewoonde valleien gekozen. Wie boven 600 meter tuiniert kiest handmatig de bergzone.
      </p>

      <h2>Live data</h2>
      <p>
        Waterrestricties komen rechtstreeks van <strong>Propluvia</strong>, het officiële
        meldsysteem van het Ministère de la Transition écologique. Het systeem wordt elke 6 uur
        ververst. Bij twijfel of onbereikbaarheid: ga rechtstreeks naar{' '}
        <a href="https://propluvia.developpement-durable.gouv.fr/" target="_blank" rel="noreferrer">
          propluvia.developpement-durable.gouv.fr
        </a>
        .
      </p>

      <h2>Aanvullingen, fouten, suggesties</h2>
      <p>
        Een moestuinkalender voor heel Frankrijk wordt nooit klaar. Tips en correcties — of fijne
        eigen foto's van je oogst die hier mogen staan — zijn welkom via de redactie van{' '}
        <a href="https://infofrankrijk.com" target="_blank" rel="noreferrer">Infofrankrijk.com</a>.
      </p>

      <h2>Onderdeel van</h2>
      <p>
        Deze gids is een gratis publicatie van Infofrankrijk.com, een platform voor Nederlandstalige
        bewoners van Frankrijk. Veel uitgebreidere dossiers — belastingen, huizenkoop, gezondheid,
        opvoeden, ondernemen — zijn beschikbaar voor abonnees (€49 per jaar).
      </p>
      <p className="!mb-0">
        <a href="https://infofrankrijk.com/abonnement/" className="btn-primary">
          Word abonnee
        </a>
      </p>
    </section>
  );
}
