import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export default defineType({
  name: 'taskSubmission',
  title: 'Task Submission',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'dateNeeded',
      title: 'Date Needed',
      type: 'date',
    }),
    defineField({
      name: 'taskType',
      title: 'Task Type',
      type: 'string',
      options: {
        list: [
          {title: 'Moving & lifting', value: 'Moving & lifting'},
          {title: 'Cleaning', value: 'Cleaning'},
          {title: 'Cooking', value: 'Cooking'},
          {title: 'Assembly & repairs', value: 'Assembly & repairs'},
          {title: 'Gardening', value: 'Gardening'},
          {title: 'Errands & shopping', value: 'Errands & shopping'},
          {title: 'Tech help', value: 'Tech help'},
          {title: 'Childcare & pets', value: 'Childcare & pets'},
          {title: 'Other', value: 'Other'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'budget',
      title: 'Available Budget',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'taskType',
      date: 'submittedAt',
    },
    prepare({title, subtitle, date}) {
      return {
        title: title || 'Unknown',
        subtitle: `${subtitle || '—'} · ${date ? new Date(date).toLocaleDateString() : ''}`,
      }
    },
  },
})
