"use client";

import { useState } from "react";

interface NavItem {
  id: string;
  label: string;
  order: number;
}

interface NavbarProps {
  restaurantName: string;
  navItems: NavItem[];
  contactTitle?: string;
}

export default function Navbar({
  restaurantName,
  navItems,
  contactTitle,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sortedItems = [
    { id: "hero", label: restaurantName.toUpperCase(), order: -1 },
    ...navItems
      .filter((item) => item.order !== 0)
      .sort((a, b) => a.order - b.order)
      .map((item) => ({ ...item, label: item.label.toUpperCase() })),
    { id: "contact", label: (contactTitle || "INFO").toUpperCase(), order: Infinity },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const navH = (document.querySelector("nav")?.offsetHeight ?? 57) + 20;
      const top = el.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-black">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
        <div className="hidden items-center gap-8 lg:flex">
          {sortedItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[11px] font-medium tracking-[0.15em] text-gray-800 transition-colors hover:text-gray-500"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="p-2 text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-gray-100 lg:hidden">
          <div className="flex flex-col items-center gap-4 px-6 py-4">
            {sortedItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[11px] font-medium tracking-[0.15em] text-gray-800"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export function LogoHeader({ restaurantName, logoUrl, padding }: { restaurantName: string; logoUrl?: string; padding?: number }) {
  const p = padding ?? 64;
  const pt = p + 57.5;
  const pb = p;
  return (
    <div className="flex flex-col items-center justify-center" style={{ paddingTop: pt, paddingBottom: pb }}>
      <div className="relative h-32 w-32 md:h-40 md:w-40">
        <img
          src={logoUrl || "/images/logo.png"}
          alt={restaurantName}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
