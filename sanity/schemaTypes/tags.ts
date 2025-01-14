import { defineField, defineType } from "sanity";

export const tag = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Tag Name",
      type: "string",
      description: "Name of the tag",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
