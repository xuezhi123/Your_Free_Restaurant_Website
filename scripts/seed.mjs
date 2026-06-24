// Run once to seed test data: node scripts/seed.mjs
// Requires SANITY_WRITE_TOKEN in environment

import { createClient } from "@sanity/client";

const PROJECT_ID = "2qdd2x4o";
const DATASET = "production";
const TOKEN = process.env.SANITY_WRITE_TOKEN;

if (!TOKEN) {
  console.error("Missing SANITY_WRITE_TOKEN in environment.");
  process.exit(1);
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2024-06-01",
  token: TOKEN,
  useCdn: false,
});

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  restaurantName: "Mei",
  aboutNl:
    "Chef Laurel Xie brengt authentieke Sichuan gerechten naar Aarschot. Wekelijks verse specials — bestel voor zaterdag 21:00, afhalen op zondag.",
  phone: "0491 11 44 13",
  address: "Dubbeekstraat 84, 3200 Aarschot",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dubbeekstraat+84,+3200+Aarschot",
  facebookUrl: "https://www.facebook.com/people/Bij-Mei/",
  instagramUrl: "https://www.instagram.com/bij.mei/",
};

const lunchMenu = {
  _id: "weekly-2026-w24",
  _type: "weeklyMenu",
  title: "Week 24 · 15-22 Juni 2026",
  weekStartDate: "2026-06-15",
  isActive: true,
  menuType: "lunch",
  days: [
    {
      _key: "sunday",
      dayOfWeek: "sunday",
      isClosed: false,
      sections: [
        {
          _key: "s1",
          nameNl: "Hoofdgerecht",
          dishes: [
            {
              _key: "d1",
              nameNl: "Gepocheerde vis in Sichuan peper",
              price: 18,
              descriptionNl: "Malse visfilets in een pittige Sichuan peper-chili bouillon",
              isSpicy: true,
            },
            {
              _key: "d2",
              nameNl: "Kung Pao kip",
              price: 16,
              descriptionNl: "Klassieke Sichuan roerbak met pinda's en gedroogde chili",
              isSpicy: true,
            },
          ],
        },
        {
          _key: "s2",
          nameNl: "Bijgerecht",
          dishes: [
            {
              _key: "d3",
              nameNl: "Knoflook groene groenten",
              price: 8,
              descriptionNl: "Verse seizoensgroenten, gewokt met knoflook",
              isVegetarian: true,
            },
          ],
        },
      ],
    },
  ],
};

const hours = {
  _id: "openingHours",
  _type: "openingHours",
  title: "Openingstijden",
  sections: [
    {
      _key: "weekend",
      titleNl: "Weekend",
      lines: [
        { _key: "w1", textNl: "Zaterdag: bestel voor 21:00" },
        { _key: "w2", textNl: "Zondag: afhalen 17:00 - 19:00" },
      ],
    },
    {
      _key: "weekday",
      titleNl: "Doordeweeks",
      lines: [
        { _key: "d1", textNl: "Maandag - Vrijdag: gesloten" },
      ],
    },
    {
      _key: "events",
      titleNl: "Events & Feesten",
      lines: [
        { _key: "e1", textNl: "Op aanvraag" },
      ],
    },
  ],
};

const announcement = {
  _id: "announcement-1",
  _type: "announcement",
  title: "Bestelinformatie",
  contentNl: "Bestel voor zaterdag 21:00. Afhalen op zondag 17:30-19:30. Bestellen via Facebook of Instagram.",
  isActive: true,
  type: "info",
};

async function seed() {
  console.log("Seeding...");

  const tx = client.transaction();
  tx.createIfNotExists(siteSettings);
  tx.createIfNotExists(lunchMenu);
  tx.createIfNotExists(hours);
  tx.createIfNotExists(announcement);

  const result = await tx.commit();
  console.log("Done!", result.results.length, "documents");
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
