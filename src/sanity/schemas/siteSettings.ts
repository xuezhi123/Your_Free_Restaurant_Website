import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "restaurantName",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "restaurantName",
    },
    prepare({ title }) {
      return { title: title || "Site Settings" };
    },
  },
});
