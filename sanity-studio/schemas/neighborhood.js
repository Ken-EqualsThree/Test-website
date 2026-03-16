import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'neighborhood',
  title: 'Neighborhood',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Neighborhood Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'memberCount',
      title: 'Member Count',
      type: 'number',
    }),
    defineField({
      name: 'taskCount',
      title: 'Task Count',
      type: 'number',
    }),
    defineField({
      name: 'badge',
      title: 'Status Badge',
      type: 'string',
      options: {
        list: [
          {title: 'Most active', value: 'Most active'},
          {title: 'Active', value: 'Active'},
          {title: 'Growing', value: 'Growing'},
          {title: 'New', value: 'New'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'city'},
  },
})
