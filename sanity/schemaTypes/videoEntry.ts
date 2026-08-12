import { defineField, defineType } from "sanity";

export const videoEntry = defineType({
  name: "videoEntry",
  title: "Video Entry",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label (accessible name)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Talking Head", value: "strategy" },
          { title: "Short Form Clipping", value: "social" },
          { title: "Faceless Videos", value: "faceless" },
          { title: "AI UGC Videos", value: "video" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order (within category)",
      type: "number",
      initialValue: 1,
    }),
    defineField({
      name: "isVisible",
      title: "Visible on site",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "poster",
      title: "Poster Image (fallback thumbnail)",
      type: "image",
      options: { hotspot: true },
    }),
    // Card videos -- compressed, shown in the gallery cards
    defineField({
      name: "cardVideoFile",
      title: "Card Video (compressed MP4)",
      type: "file",
      options: { accept: "video/mp4" },
    }),
    defineField({
      name: "cardWebmFile",
      title: "Card Video (compressed WebM)",
      type: "file",
      options: { accept: "video/webm" },
    }),
    // HQ videos -- shown fullscreen when user clicks a card
    defineField({
      name: "fullVideoFile",
      title: "Full Quality Video (MP4)",
      type: "file",
      options: { accept: "video/mp4" },
    }),
    defineField({
      name: "fullWebmFile",
      title: "Full Quality Video (WebM)",
      type: "file",
      options: { accept: "video/webm" },
    }),
  ],
  orderings: [
    {
      title: "Category + Order",
      name: "categoryOrder",
      by: [{ field: "category", direction: "asc" }, { field: "order", direction: "asc" }],
    },
  ],
});
