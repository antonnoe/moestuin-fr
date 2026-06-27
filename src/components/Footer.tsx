import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-bordeaux-100 mt-24 py-12 bg-white/40">
      <div className="container-wide grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-sm">
        <div>
          <div className="eyebrow mb-3">Kalender</div>
          <ul className="space-y-1">
            <li><Link href="/maand/januari" className="no-underline text-ink hover:text-bordeaux">Januari</Link></li>
            <li><Link href="/maand/april" className="no-underline text-ink hover:text-bordeaux">April</Link></li>
            <li><Link href="/maand/juli" className="no-underline text-ink hover:text-bordeaux">Juli</Link></li>
            <li><Link href="/maand/oktober" className="no-underline text-ink hover:text-bordeaux">Oktober</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">Naslag</div>
          <ul className="space-y-1">
            <li><Link href="/juridisch" className="no-underline text-ink hover:text-bordeaux">Juridisch</Link></li>
            <li><Link href="/varietes" className="no-underline text-ink hover:text-bordeaux">Variétés anciennes</Link></li>
            <li><Link href="/woordenlijst" className="no-underline text-ink hover:text-bordeaux">Woordenlijst</Link></li>
            <li><Link href="/over" className="no-underline text-ink hover:text-bordeaux">Over deze gids</Link></li>
            <li><a href="https://infofrankrijk.com/wp-content/uploads/2026/06/Moestuin_Jaarkalender_2027_A3.pdf" target="_blank" rel="noopener" className="no-underline text-ink hover:text-bordeaux">Jaarkalender PDF (A3) ↓</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">Onderdeel van</div>
          <ul className="space-y-1">
            <li><a href="https://infofrankrijk.com" className="no-underline text-ink hover:text-bordeaux">Infofrankrijk.com</a></li>
            <li><a href="https://nederlanders.fr" className="no-underline text-ink hover:text-bordeaux">Nederlanders.fr</a></li>
            <li><a href="https://cafeclaude.fr" className="no-underline text-ink hover:text-bordeaux">Café Claude</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">Word abonnee</div>
          <p className="text-ink/70 mb-3">
            Volledige toegang tot alle dossiers op Infofrankrijk voor €49 per jaar.
          </p>
          <a href="https://infofrankrijk.com/abonnement/" className="btn-primary text-sm">
            Word abonnee
          </a>
        </div>
      </div>
      <div className="container-wide mt-12 pt-6 border-t border-bordeaux-100 text-xs text-ink/60 flex flex-col sm:flex-row justify-between gap-2">
        <span>© Communities Abroad — onderdeel van Infofrankrijk.com</span>
        <span>Bronnen primair via .gouv.fr en Légifrance</span>
      </div>
    </footer>
  );
}
