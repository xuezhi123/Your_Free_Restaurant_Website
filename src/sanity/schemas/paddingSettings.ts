import { defineType, defineField } from "sanity";

export const paddingSettings = defineType({
  name: "paddingSettings",
  title: "Padding Settings",
  type: "document",
  fields: [
    defineField({
      name: "logoPadding",
      title: "Logo Padding (px)",
      type: "number",
      description: "Equal spacing above and below the logo.",
      initialValue: 80,
      validation: (rule) => rule.min(10).max(200),
    }),
    defineField({
      name: "sectionPadding",
      title: "Section Padding (px)",
      type: "number",
      description: "Spacing below each content section.",
      initialValue: 20,
      validation: (rule) => rule.min(0).max(200),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Padding Settings" };
    },
  },
});
