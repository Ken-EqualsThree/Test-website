import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Location',
      type: 'string',
    }),
    defineField({
      name: 'tag',
      title: 'Tag (e.g. "Moving", "Exchange")',
      type: 'string',
    }),
    defineField({
      name: 'initials',
      title: 'Initials (shown if no photo)',
      type: 'string',
      description: 'e.g. "ML" for Miriam L.',
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'pages',
      title: 'Show on pages',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Home page carousel', value: 'home'},
          {title: 'Community — member stories', value: 'community'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'author', subtitle: 'role'},
  },
})
