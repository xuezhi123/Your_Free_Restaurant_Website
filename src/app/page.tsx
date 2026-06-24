import { draftMode } from "next/headers";
import { client } from "@/lib/sanity.client";
import {
  siteSettingsQuery,
  infoQuery,
  menuTextQuery,
  aboutQuery,
  takeawayQuery,
  cateringQuery,
  giftCardQuery,
  galleryQuery,
  paddingSettingsQuery,
} from "@/lib/sanity.queries";
import type {
  SiteSettings,
  InfoData,
  MenuTextData,
  AboutData,
  TakeawayData,
  CateringData,
  GiftCardData,
  GalleryData,
  PaddingSettings,
} from "@/lib/types";

import Navbar, { LogoHeader } from "@/components/Navbar";
import WeeklyMenu from "@/components/WeeklyMenu";
import AboutSection from "@/components/AboutSection";
import TakeawaySection from "@/components/TakeawaySection";
import CateringSection from "@/components/CateringSection";
import GiftCardsSection from "@/components/GiftCardsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export const revalidate = 60;

async function getData() {
  try {
    const { isEnabled } = await draftMode();

    const [settings, info, menuText, about, takeaway, catering, giftCard, gallery, padding] =
      await Promise.all([
        client.fetch<SiteSettings | null>(
          siteSettingsQuery,
          {},
          isEnabled ? { cache: "no-store" } : undefined,
        ),
        client.fetch<InfoData | null>(infoQuery),
        client.fetch<MenuTextData | null>(menuTextQuery),
        client.fetch<AboutData | null>(aboutQuery),
        client.fetch<TakeawayData | null>(takeawayQuery),
        client.fetch<CateringData | null>(cateringQuery),
        client.fetch<GiftCardData | null>(giftCardQuery),
        client.fetch<GalleryData | null>(galleryQuery),
        client.fetch<PaddingSettings | null>(paddingSettingsQuery),
      ]);

    return { settings, info, menuText, about, takeaway, catering, giftCard, gallery, padding };
  } catch {
    return {
      settings: null as SiteSettings | null,
      info: null as InfoData | null,
      menuText: null as MenuTextData | null,
      about: null as AboutData | null,
      takeaway: null as TakeawayData | null,
      catering: null as CateringData | null,
      giftCard: null as GiftCardData | null,
      gallery: null as GalleryData | null,
      padding: null as PaddingSettings | null,
    };
  }
}

export default async function HomePage() {
  const data = await getData();
  const { settings, info, menuText, about, takeaway, catering, giftCard, gallery, padding } = data;

  const logoPx = padding?.logoPadding ?? 64;
  const sectionPx = padding?.sectionPadding ?? 20;

  if (!settings) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50 text-gray-600">
        <h1 className="font-serif text-3xl tracking-wide">Restaurant</h1>
        <p className="text-center text-sm leading-relaxed">
          CMS is verbonden, maar er is nog geen inhoud toegevoegd.
          <br />
          Open de Studio om je restaurant in te stellen.
        </p>
        <a
          href="/studio"
          className="rounded-full bg-red-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700"
        >
          Naar CMS &rarr;
        </a>
      </div>
    );
  }

  return (
    <>
      <Navbar
        restaurantName={settings.restaurantName}
        navItems={[
          { id: "menu", label: menuText?.navTitle || menuText?.titleNl || "Menu", order: menuText?.order ?? 10 },
          { id: "about", label: about?.navTitle || about?.titleNl || "About", order: about?.order ?? 20 },
          { id: "takeaway", label: takeaway?.navTitle || takeaway?.titleNl || "Takeaway", order: takeaway?.order ?? 30 },
          { id: "catering", label: catering?.navTitle || catering?.titleNl || "Catering", order: catering?.order ?? 40 },
          { id: "gift-card", label: giftCard?.navTitle || giftCard?.titleNl || "Gift Card", order: giftCard?.order ?? 50 },
          { id: "gallery", label: gallery?.navTitle || gallery?.title || "Gallery", order: gallery?.order ?? 60 },
        ]}
        contactTitle={info?.contactNavTitle || info?.contactTitle}
      />
      <main className="min-h-screen bg-white text-gray-900">
        <div id="hero"><LogoHeader restaurantName={settings.restaurantName} logoUrl={info?.logo?.asset?.url} padding={logoPx} /></div>
        <div className="mx-auto max-w-container" style={{ "--section-pb": `${sectionPx}px` } as React.CSSProperties}>

        {[
          ...(menuText?.order !== 0 ? [{ order: menuText?.order ?? 10, id: "menu-text", el: <WeeklyMenu key="menu-text" titleNl={menuText?.titleNl} textNl={menuText?.textNl} /> }] : []),
          ...(about?.order !== 0 ? [{ order: about?.order ?? 20, id: "about", el: <AboutSection key="about" titleNl={about?.titleNl} subtitleNl={about?.subtitleNl} textNl={about?.textNl} imageLandscape={about?.imageLandscape} imagePortrait={about?.imagePortrait} /> }] : []),
          ...(takeaway?.order !== 0 ? [{ order: takeaway?.order ?? 30, id: "takeaway", el: <TakeawaySection key="takeaway" titleNl={takeaway?.titleNl} subtitleNl={takeaway?.subtitleNl} textNl={takeaway?.textNl} image={takeaway?.image} /> }] : []),
          ...(catering?.order !== 0 ? [{ order: catering?.order ?? 40, id: "catering", el: <CateringSection key="catering" titleNl={catering?.titleNl} subtitleNl={catering?.subtitleNl} textNl={catering?.textNl} image={catering?.image} /> }] : []),
          ...(giftCard?.order !== 0 ? [{ order: giftCard?.order ?? 50, id: "gift-card", el: <GiftCardsSection key="gift-card" titleNl={giftCard?.titleNl} subtitleNl={giftCard?.subtitleNl} textNl={giftCard?.textNl} image={giftCard?.image} /> }] : []),
          ...(gallery?.order !== 0 ? [{ order: gallery?.order ?? 60, id: "gallery", el: <GallerySection key="gallery" gallery={gallery} /> }] : []),
        ]
          .sort((a, b) => a.order - b.order)
          .map((s) => s.el)}
        </div>

        <ContactSection
          title={info?.contactTitle}
          phone={info?.phone}
          email={info?.email}
          address={info?.address}
          googleMapsUrl={info?.googleMapsUrl}
          facebookUrl={info?.facebookUrl}
          instagramUrl={info?.instagramUrl}
          openingHours={info?.openingHours}
        />
      </main>
    </>
  );
}
