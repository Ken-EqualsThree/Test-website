import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    // ── Hero ──────────────────────────────────────────────────────
    defineField({
      name: 'heroHeadline',
      title: 'Hero — Headline',
      type: 'string',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero — Sub-headline',
      type: 'text',
      rows: 2,
    }),
    // ── Mission ───────────────────────────────────────────────────
    defineField({
      name: 'missionParagraph1',
      title: 'Mission — Body paragraph 1',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'missionParagraph2',
      title: 'Mission — Body paragraph 2',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'missionPullQuote',
      title: 'Mission — Pull quote (dark card)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'missionStats',
      title: 'Mission — Stats (3)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'number', type: 'string', title: 'Number'},
          {name: 'label',  type: 'string', title: 'Label'},
        ],
        preview: {select: {title: 'number', subtitle: 'label'}},
      }],
    }),
    // ── Values ────────────────────────────────────────────────────
    defineField({
      name: 'valueCards',
      title: 'Our Principles — Cards (4)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'emoji',       type: 'string', title: 'Emoji icon (e.g. 🤝)'},
          {name: 'title',       type: 'string', title: 'Card title'},
          {name: 'description', type: 'text',   title: 'Description', rows: 2},
        ],
        preview: {select: {title: 'title', subtitle: 'emoji'}},
      }],
    }),
    // ── Story / Timeline ──────────────────────────────────────────
    defineField({
      name: 'storyParagraph1',
      title: 'Story — Paragraph 1',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'storyParagraph2',
      title: 'Story — Paragraph 2',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'storyParagraph3',
      title: 'Story — Paragraph 3',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'timelineEvents',
      title: 'Timeline Events',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'timelineEvent'}]}],
    }),
    // ── Team ──────────────────────────────────────────────────────
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'teamMember'}]}],
    }),
    // ── CTA ───────────────────────────────────────────────────────
    defineField({
      name: 'ctaHeadline',
      title: 'CTA — Headline',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubheadline',
      title: 'CTA — Sub-headline',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    prepare: () => ({title: 'About Page'}),
  },
})
