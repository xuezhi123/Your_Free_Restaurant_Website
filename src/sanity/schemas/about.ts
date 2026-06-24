import { defineType, defineField } from "sanity";

export const about = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "0 = hidden. Lower numbers appear first on the page.",
      initialValue: 20,
    }),
    defineField({
      name: "titleNl",
      title: "Title",
      type: "string",
      initialValue: "About",
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
      name: "imageLandscape",
      title: "Image (Landscape)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imagePortrait",
      title: "Image (Portrait)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "About" };
    },
  },
});
