import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'communityPage',
  title: 'Community Page',
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
    defineField({
      name: 'heroStats',
      title: 'Hero — Stats (4)',
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
    // ── Neighborhoods ─────────────────────────────────────────────
    defineField({
      name: 'neighborhoods',
      title: 'Neighborhoods',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'neighborhood'}]}],
    }),
    // ── Member stories ────────────────────────────────────────────
    defineField({
      name: 'testimonials',
      title: 'Member Stories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}],
    }),
    // ── Ambassadors ───────────────────────────────────────────────
    defineField({
      name: 'ambassadors',
      title: 'Ambassadors',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'ambassador'}]}],
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
    prepare: () => ({title: 'Community Page'}),
  },
})
