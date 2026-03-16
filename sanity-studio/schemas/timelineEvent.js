import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'timelineEvent',
  title: 'Timeline Event',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year Label (e.g. "2022", "Early 2023")',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'dotLabel',
      title: 'Dot Label (2-char, e.g. "22")',
      type: 'string',
      description: 'Short label shown inside the timeline dot',
    }),
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'year'},
  },
})
