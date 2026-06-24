import { defineType, defineField } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "0 = hidden. Lower numbers appear first on the page.",
      initialValue: 60,
    }),
    defineField({
      name: "title",
      title: "Gallery Title",
      type: "string",
      initialValue: "Gallery",
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
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Gallery",
      };
    },
  },
});
