import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-bordeaux-100 bg-cream/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="no-underline group">
          <div className="flex items-baseline gap-3">
            <span className="font-display font-semibold text-bordeaux text-lg tracking-tight">
              De Franse moestuin
            </span>
            <span className="text-xs text-ink/60 hidden sm:inline">
              jaarkalender per klimaatzone
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="no-underline text-ink hover:text-bordeaux transition-colors">
            Kalender
          </Link>
          <Link href="/juridisch" className="no-underline text-ink hover:text-bordeaux transition-colors hidden sm:inline">
            Juridisch
          </Link>
          <Link href="/varietes" className="no-underline text-ink hover:text-bordeaux transition-colors hidden md:inline">
            Variétés
          </Link>
          <Link href="/woordenlijst" className="no-underline text-ink hover:text-bordeaux transition-colors hidden md:inline">
            Woordenlijst
          </Link>
          <Link href="/over" className="no-underline text-ink hover:text-bordeaux transition-colors hidden sm:inline">
            Over
          </Link>
        </nav>
      </div>
    </header>
  );
}
