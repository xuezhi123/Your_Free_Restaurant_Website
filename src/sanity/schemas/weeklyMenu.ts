import { defineType, defineField } from "sanity";

export const weeklyMenu = defineType({
  name: "weeklyMenu",
  title: "Weekmenu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      description: 'bv. "Week 24"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "weekStartDate",
      title: "Startdatum",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isActive",
      title: "Actief (Gepubliceerd)",
      type: "boolean",
      description: "Slechts één actief menu tegelijk.",
      initialValue: false,
    }),
    defineField({
      name: "menuType",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Weekmenu", value: "lunch" },
        ],
        layout: "radio",
      },
      initialValue: "lunch",
    }),
    defineField({
      name: "days",
      title: "Dagen",
      type: "array",
      of: [{ type: "dayMenu" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "weekStartDate",
      active: "isActive",
    },
    prepare({ title, subtitle, active }) {
      return {
        title: title || "Naamloos menu",
        subtitle: `Week van ${subtitle || "?"} ${active ? "✅" : ""}`,
      };
    },
  },
});

export const dayMenu = defineType({
  name: "dayMenu",
  title: "Dag",
  type: "object",
  fields: [
    defineField({
      name: "dayOfWeek",
      title: "Dag",
      type: "string",
      options: {
        list: [
          { title: "Zondag", value: "sunday" },
          { title: "Maandag", value: "monday" },
          { title: "Dinsdag", value: "tuesday" },
          { title: "Woensdag", value: "wednesday" },
          { title: "Donderdag", value: "thursday" },
          { title: "Vrijdag", value: "friday" },
          { title: "Zaterdag", value: "saturday" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isClosed",
      title: "Gesloten",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "sections",
      title: "Secties",
      type: "array",
      of: [{ type: "menuSection" }],
    }),
  ],
  preview: {
    select: {
      day: "dayOfWeek",
      closed: "isClosed",
    },
    prepare({ day, closed }) {
      const labels: Record<string, string> = {
        sunday: "Zondag", monday: "Maandag", tuesday: "Dinsdag",
        wednesday: "Woensdag", thursday: "Donderdag",
        friday: "Vrijdag", saturday: "Zaterdag",
      };
      return {
        title: labels[day || ""] || "Dag",
        subtitle: closed ? "Gesloten" : "Open",
      };
    },
  },
});

export const menuSection = defineType({
  name: "menuSection",
  title: "Menusectie",
  type: "object",
  fields: [
    defineField({
      name: "nameNl",
      title: "Sectienaam",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dishes",
      title: "Gerechten",
      type: "array",
      of: [{ type: "dish" }],
    }),
  ],
  preview: {
    select: { nl: "nameNl" },
    prepare({ nl }) {
      return { title: nl || "Sectie" };
    },
  },
});

export const dish = defineType({
  name: "dish",
  title: "Gerecht",
  type: "object",
  fields: [
    defineField({
      name: "nameNl",
      title: "Naam",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Prijs (EUR)",
      type: "number",
    }),
    defineField({
      name: "descriptionNl",
      title: "Beschrijving",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "isSpicy",
      title: "Pittig",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isVegetarian",
      title: "Vegetarisch",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "allergens",
      title: "Allergenen",
      type: "string",
      description: "bv. noten, zuivel, schaaldieren",
    }),
  ],
  preview: {
    select: { nl: "nameNl", price: "price" },
    prepare({ nl, price }) {
      return {
        title: nl || "Gerecht",
        subtitle: price ? `€${price}` : "",
      };
    },
  },
});
