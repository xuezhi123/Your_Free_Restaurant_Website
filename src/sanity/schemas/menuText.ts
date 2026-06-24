import { defineType, defineField } from "sanity";

export const menuText = defineType({
  name: "menuText",
  title: "Menu Text",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "0 = hidden. Lower numbers appear first on the page.",
      initialValue: 10,
    }),
    defineField({
      name: "titleNl",
      title: "Title",
      type: "string",
      initialValue: "MENU",
    }),
    defineField({
      name: "navTitle",
      title: "Nav Title",
      type: "string",
      description: "Short label for the navigation bar. Falls back to Title if empty.",
    }),
    defineField({
      name: "textNl",
      title: "Text",
      type: "text",
      rows: 8,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Menu Text" };
    },
  },
});
