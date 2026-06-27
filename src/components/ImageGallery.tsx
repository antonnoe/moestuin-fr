import Image from 'next/image';
import type { GalerijFoto } from '@/lib/types';

interface ImageGalleryProps {
  fotos: GalerijFoto[];
}

export default function ImageGallery({ fotos }: ImageGalleryProps) {
  if (!fotos || fotos.length === 0) return null;

  return (
    <section className="container-wide py-8">
      <div className="eyebrow mb-4">Beeld bij deze maand</div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fotos.map((foto, i) => (
          <figure key={i} className="group">
            <div className="relative aspect-[4/3] overflow-hidden bg-bordeaux-50">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            {foto.caption && (
              <figcaption className="text-xs text-ink/70 mt-2 italic">
                {foto.caption}
                {foto.credit && <span className="text-ink/40"> · {foto.credit}</span>}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
