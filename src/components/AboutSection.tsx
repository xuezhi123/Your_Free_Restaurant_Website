import type { SanityImage } from "@/lib/types";

interface AboutSectionProps {
  titleNl?: string;
  subtitleNl?: string;
  textNl?: string;
  imageLandscape?: SanityImage;
  imagePortrait?: SanityImage;
}

export default function AboutSection({
  titleNl,
  subtitleNl,
  textNl,
  imageLandscape,
  imagePortrait,
}: AboutSectionProps) {
  if (!textNl && !subtitleNl && !imageLandscape && !imagePortrait) return null;

  return (
    <section id="about" className="bg-white pt-0 pb-[var(--section-pb)] px-6">
      <div className="mx-auto max-w-container">
        {imageLandscape?.asset?.url && (
          <div className="mb-6">
            <img
              src={imageLandscape.asset.url}
              alt={imageLandscape.alt || "About"}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="mb-3 font-serif text-3xl tracking-wide text-gray-900">
              {titleNl || "ABOUT"}
            </h2>
            {subtitleNl && (
              <p className="mb-6 text-sm tracking-[0.15em] text-gray-500">
                {subtitleNl}
              </p>
            )}
            {textNl && (
              <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
                {textNl}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2">
            {imagePortrait?.asset?.url && (
              <img
                src={imagePortrait.asset.url}
                alt={imagePortrait.alt || "About"}
                className="w-full h-auto object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
