"use client";

import { useRef, useState, useEffect } from "react";
import type { GalleryData } from "@/lib/types";

interface GalleryProps {
  gallery: GalleryData | null;
}

const CARD_W = 392;
const CARD_H = 392;
const GAP = 12;
const ROWS = 2;
const COLS = 3;

export default function GallerySection({ gallery }: GalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [cols, setCols] = useState(2);

  useEffect(() => {
    const update = () => setCols(window.innerWidth >= 768 ? COLS : 2);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [gallery]);

  if (!gallery || !gallery.images || gallery.images.length === 0) return null;

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const pageWidth = (CARD_W + GAP) * cols;
    el.scrollBy({ left: dir === "left" ? -pageWidth : pageWidth, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="bg-white pt-0 pb-[var(--section-pb)]">
      <div className="mx-auto max-w-container">
        <h2 className="mb-6 font-serif text-3xl tracking-wide text-gray-900 text-center">
          {gallery.title || "GALERIJ"}
        </h2>
        {gallery.subtitleNl && (
          <p className="mb-6 text-sm tracking-[0.15em] text-gray-500 text-center">
            {gallery.subtitleNl}
          </p>
        )}

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            gap: `${GAP}px`,
          }}
        >
          <style>{`.gallery-scroll::-webkit-scrollbar{display:none}`}</style>
          {renderGrid(gallery.images, CARD_W, CARD_H, ROWS, cols, GAP)}
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-default"
              aria-label="Previous"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-colors hover:border-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-default"
              aria-label="Next"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderGrid(
  images: NonNullable<GalleryData["images"]>,
  cardW: number,
  cardH: number,
  rows: number,
  cols: number,
  gap: number,
) {
  const perPage = rows * cols;
  const pages: typeof images[] = [];
  for (let i = 0; i < images.length; i += perPage) {
    pages.push(images.slice(i, i + perPage));
  }

  return pages.map((page, pi) => (
    <div
      key={pi}
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${rows}, ${cardH}px)`,
        gridTemplateColumns: `repeat(${cols}, ${cardW}px)`,
        gap: `${gap}px`,
        flexShrink: 0,
      }}
    >
      {page.map((img, i) => {
          const globalIndex = pi * perPage + i;
          return (
            <div
              key={img.asset?._id ? `${img.asset._id}-${globalIndex}` : globalIndex}
              className="overflow-hidden bg-gray-50"
              style={{ width: cardW, height: cardH }}
            >
              {img.asset?.url && (
                <img
                  src={img.asset.url}
                  alt={img.alt || `Gallery ${globalIndex + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
          );
        })}
      {Array.from({ length: perPage - page.length }).map((_, i) => (
        <div
          key={`e-${i}`}
          className="bg-gray-100"
          style={{ width: cardW, height: cardH }}
        />
      ))}
    </div>
  ));
}
