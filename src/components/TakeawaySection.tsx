"use client";

import type { SanityImage } from "@/lib/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface TakeawaySectionProps {
  titleNl?: string;
  subtitleNl?: string;
  textNl?: string;
  image?: SanityImage;
}

export default function TakeawaySection({
  titleNl,
  subtitleNl,
  textNl,
  image,
}: TakeawaySectionProps) {
  const { ref, visible } = useScrollReveal();
  if (!textNl && !image) return null;

  return (
    <section
      ref={ref}
      id="takeaway"
      className={`bg-white pt-0 pb-[var(--section-pb)] px-6 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="mx-auto max-w-container">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            {image?.asset?.url && (
              <img
                src={image.asset.url}
                alt={image.alt || "Takeaway"}
                className="w-full h-auto object-cover"
              />
            )}
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="mb-3 font-serif text-3xl tracking-wide text-gray-900">
              {titleNl || "Afhalen"}
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
        </div>
      </div>
    </section>
  );
}
