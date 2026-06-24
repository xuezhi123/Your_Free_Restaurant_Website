import { defineType, defineField } from "sanity";

export const giftCard = defineType({
  name: "giftCard",
  title: "Gift Card",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "0 = hidden. Lower numbers appear first on the page.",
      initialValue: 50,
    }),
    defineField({
      name: "titleNl",
      title: "Title",
      type: "string",
      initialValue: "Gift Card",
    }),
    defineField({
      name: "navTitle",
      title: "Nav Title",
      type: "string",
      description: "Short label for the navigation bar. Falls back to Title if empty.",
    }),
    defineField({
      name: "subtitleNl",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "textNl",
      title: "Text",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Gift Card" };
    },
  },
});
