import Image from 'next/image';

export interface GalleryPhoto {
  src: string;
  caption: string;
}

interface PhotoGalleryProps {
  title: string;
  subtitle: string;
  photos: GalleryPhoto[];
}

export default function PhotoGallery({ title, subtitle, photos }: PhotoGalleryProps) {
  return (
    <section className="py-16 md:py-24 bg-[#EEE5D7]">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-[#242424] mb-4">
            {title}
          </h2>
          <div className="mithila-divider w-24 h-1 bg-[#D7A43B] mx-auto mb-4"></div>
          <p className="text-[#6C6A67]">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#242424] shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-10">
                <figcaption className="text-sm font-medium text-white leading-snug">
                  {photo.caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
