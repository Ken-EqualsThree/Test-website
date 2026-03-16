import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'taskCategory',
  title: 'Task Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'taskCount',
      title: 'Task Count Label (e.g. "184 open tasks")',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt Text'}],
    }),
    defineField({
      name: 'iconName',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Moving & Lifting (box)', value: 'moving'},
          {title: 'Home & Garden (house)', value: 'home'},
          {title: 'Rides & Errands (car)', value: 'rides'},
          {title: 'Cooking & Food (pan)', value: 'cooking'},
          {title: 'Skills & Learning (bulb)', value: 'skills'},
          {title: 'Kids & Pets (heart)', value: 'kids'},
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
    select: {title: 'name', subtitle: 'taskCount', media: 'image'},
  },
})
