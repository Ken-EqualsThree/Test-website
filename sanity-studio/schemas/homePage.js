import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // ── Hero ──────────────────────────────────────────────────────
    defineField({
      name: 'heroHeadline',
      title: 'Hero — Headline (HTML allowed, use <em> for italic)',
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
      title: 'Hero — Stats (3 numbers)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'number', type: 'string', title: 'Number (e.g. "2,400+")'},
          {name: 'label',  type: 'string', title: 'Label (e.g. "Active members")'},
        ],
        preview: {select: {title: 'number', subtitle: 'label'}},
      }],
    }),
    // ── Velocity scroll ───────────────────────────────────────────
    defineField({
      name: 'velocityItems',
      title: 'Scrolling Text Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [{name: 'text', type: 'string', title: 'Text'}],
        preview: {select: {title: 'text'}},
      }],
    }),
    // ── How it works ──────────────────────────────────────────────
    defineField({
      name: 'howSteps',
      title: '"How it works" — Steps (3)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'stepNumber',  type: 'number', title: 'Step number'},
          {name: 'title',       type: 'string', title: 'Step title'},
          {name: 'description', type: 'text',   title: 'Step description', rows: 2},
          {
            name: 'image',
            type: 'image',
            title: 'Panel image',
            options: {hotspot: true},
            fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
          },
        ],
        preview: {select: {title: 'title', subtitle: 'stepNumber'}},
      }],
    }),
    // ── Task categories (bento grid) ──────────────────────────────
    defineField({
      name: 'taskCategories',
      title: 'Task Categories (bento grid) — select & order 6',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'taskCategory'}]}],
    }),
    // ── Testimonials carousel ─────────────────────────────────────
    defineField({
      name: 'testimonials',
      title: 'Testimonials carousel',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}],
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
    prepare: () => ({title: 'Home Page'}),
  },
})
