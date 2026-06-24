"use client";

import type { SiteSettings, InfoData } from "@/lib/types";

interface FooterProps {
  settings: SiteSettings;
  info?: InfoData | null;
}

export default function Footer({ settings, info }: FooterProps) {
  return (
    <footer className="bg-gray-900 py-12 text-center text-gray-400">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-2 font-serif text-xl text-white">
          {settings.restaurantName}
        </p>
        {info?.phone && <p className="text-sm">{info.phone}</p>}
        {info?.address && (
          <p className="mt-1 text-sm">{info.address}</p>
        )}

        <div className="mt-4 flex justify-center gap-4">
          {info?.facebookUrl && (
            <a
              href={info.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Facebook
            </a>
          )}
          {info?.instagramUrl && (
            <a
              href={info.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Instagram
            </a>
          )}
        </div>

        <p className="mt-8 text-xs text-gray-600">
          &copy; {new Date().getFullYear()} {settings.restaurantName}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
