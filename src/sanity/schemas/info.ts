import { defineType, defineField } from "sanity";

export const info = defineType({
  name: "info",
  title: "Info",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "googleMapsUrl",
      title: "Google Maps URL",
      type: "url",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "openingHours",
      title: "Opening Hours",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "contactTitle",
      title: "Page Title",
      type: "string",
      initialValue: "Praktische Info",
    }),
    defineField({
      name: "contactNavTitle",
      title: "Nav Title",
      type: "string",
      initialValue: "Info",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Info" };
    },
  },
});
