import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.listItem()
        .title("Padding Settings")
        .child(
          S.document().schemaType("paddingSettings").documentId("paddingSettings"),
        ),
      S.listItem()
        .title("Info")
        .child(
          S.document().schemaType("info").documentId("info"),
        ),
      S.divider(),
      S.listItem()
        .title("Menu Text")
        .child(
          S.document().schemaType("menuText").documentId("menuText"),
        ),
      S.listItem()
        .title("About")
        .child(
          S.document().schemaType("about").documentId("about"),
        ),
      S.listItem()
        .title("Takeaway")
        .child(
          S.document().schemaType("takeaway").documentId("takeaway"),
        ),
      S.listItem()
        .title("Catering")
        .child(
          S.document().schemaType("catering").documentId("catering"),
        ),
      S.listItem()
        .title("Gift Card")
        .child(
          S.document().schemaType("giftCard").documentId("giftCard"),
        ),
      S.listItem()
        .title("Gallery")
        .child(
          S.document().schemaType("gallery").documentId("gallery"),
        ),
    ]);
