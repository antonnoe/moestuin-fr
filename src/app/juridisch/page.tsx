import { JURIDISCH } from '@/data/juridisch';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Juridisch — De Franse moestuin',
  description:
    'Plantafstanden, waterrestricties, glyfosaat-verbod, compostverplichting — de wetgeving rondom de moestuin in Frankrijk, met primaire bronnen.',
};

const MAAND_NAMEN = [
  'januari', 'februari', 'maart', 'april', 'mei', 'juni',
  'juli', 'augustus', 'september', 'oktober', 'november', 'december',
];

export default function JuridischPagina() {
  return (
    <>
      <section className="container-narrow py-16">
        <div className="eyebrow mb-3">Naslag</div>
        <h1 className="!mt-0">Juridisch</h1>
        <p className="text-lg text-ink/80">
          Plantafstanden, regenwater, droogterestricties, composteren, gewasbescherming. De vijf
          regels die de Franse moestuinier het vaakst tegenkomt — met de primaire bron erbij. Geen
          glad praatje van een blog, maar de wet zelf.
        </p>
      </section>

      <section className="container-narrow pb-16">
        {JURIDISCH.map((item, i) => (
          <article key={item.slug} id={item.slug} className="scroll-mt-24 py-8 border-t border-bordeaux-100">
            <div className="eyebrow mb-2">
              {String(i + 1).padStart(2, '0')} · {item.wet}
            </div>
            <h2 className="!mt-0">{item.titel}</h2>
            <p className="text-lg text-ink/80 italic">{item.korteBeschrijving}</p>

            {item.artikel && (
              <div className="text-sm text-ink/60 mb-4">
                <strong className="font-display">Wetsartikel:</strong> {item.artikel}
              </div>
            )}

            <div
              className="prose-content text-ink/90"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(item.inhoud) }}
            />

            <div className="mt-6 card bg-bordeaux-50 border-bordeaux-100">
              <div className="eyebrow mb-2">Primaire bron</div>
              <a href={item.bronUrl} target="_blank" rel="noreferrer" className="font-display font-medium">
                {item.bronNaam} ↗
              </a>
              <div className="text-xs text-ink/60 mt-1">
                Laatst gecheckt: {new Date(item.laatsteUpdate).toLocaleDateString('nl-NL')}
              </div>
            </div>

            {item.geldtVoorMaanden && item.geldtVoorMaanden.length > 0 && (
              <div className="mt-4 text-xs text-ink/60">
                <strong className="font-display">Vooral relevant in:</strong>{' '}
                {item.geldtVoorMaanden.map((m) => MAAND_NAMEN[m - 1]).join(', ')}
              </div>
            )}
          </article>
        ))}
      </section>
    </>
  );
}

// Minimal Markdown → HTML (no external dep). Covers headings, bold, italic,
// links, tables, lists. Sufficient for juridisch.ts content shape.
function renderMarkdown(md: string): string {
  let html = md.trim();

  // Tables (very simple — must be GFM-style)
  html = html.replace(/((?:^\|[^\n]+\n)+)/gm, (block) => {
    const rows = block.trim().split('\n').filter(Boolean);
    if (rows.length < 2) return block;
    const [header, , ...body] = rows;
    const headers = header.split('|').slice(1, -1).map((c) => `<th>${c.trim()}</th>`).join('');
    const bodyRows = body
      .map((row) => {
        const cells = row.split('|').slice(1, -1).map((c) => `<td>${c.trim()}</td>`).join('');
        return `<tr>${cells}</tr>`;
      })
      .join('');
    return `<table><thead><tr>${headers}</tr></thead><tbody>${bodyRows}</tbody></table>`;
  });

  // Headings
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');

  // Bold + italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/(?<!\*)\*(?!\*)([^*]+?)\*(?!\*)/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');

  // Lists
  html = html.replace(/((?:^- .+\n?)+)/gm, (block) => {
    const items = block
      .trim()
      .split('\n')
      .map((line) => line.replace(/^- /, ''))
      .map((line) => `<li>${line}</li>`)
      .join('');
    return `<ul>${items}</ul>`;
  });

  // Paragraphs (lines not already wrapped)
  html = html
    .split(/\n{2,}/)
    .map((para) => {
      const trimmed = para.trim();
      if (!trimmed) return '';
      if (/^<(h\d|ul|ol|table|blockquote)/.test(trimmed)) return trimmed;
      return `<p>${trimmed.replace(/\n/g, ' ')}</p>`;
    })
    .join('\n');

  return html;
}
