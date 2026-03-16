import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ambassador',
  title: 'Ambassador',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'area',
      title: 'Area / Location (e.g. "Jordaan West, Amsterdam")',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'avatar',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'initials',
      title: 'Initials (shown if no photo)',
      type: 'string',
    }),
    defineField({
      name: 'membersOnboarded',
      title: 'Members Onboarded',
      type: 'number',
    }),
    defineField({
      name: 'yearsWithEtion',
      title: 'Years with Etion (e.g. "3.2y")',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'area', media: 'avatar'},
  },
})
