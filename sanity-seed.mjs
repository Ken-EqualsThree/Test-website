/**
 * Etion Blog — Sanity seed script
 * ─────────────────────────────────────────────────────────────────────
 * Imports 5 blog posts into your Sanity dataset.
 *
 * Usage:
 *   1. npm install @sanity/client   (in this directory)
 *   2. Set your project credentials:
 *        export SANITY_PROJECT_ID=your_project_id
 *        export SANITY_DATASET=production          (or "development")
 *        export SANITY_TOKEN=your_write_token      (from sanity.io/manage)
 *   3. node sanity-seed.mjs
 * ─────────────────────────────────────────────────────────────────────
 */

import { createClient } from '@sanity/client'

const PROJECT_ID  = process.env.SANITY_PROJECT_ID  || 'REPLACE_WITH_PROJECT_ID'
const DATASET     = process.env.SANITY_DATASET     || 'production'
const TOKEN       = process.env.SANITY_TOKEN        || 'REPLACE_WITH_WRITE_TOKEN'

const client = createClient({
  projectId: PROJECT_ID,
  dataset:   DATASET,
  token:     TOKEN,
  apiVersion: '2024-01-01',
  useCdn:    false,
})

const posts = [
  {
    _type: 'blogPost',
    _id:   'post-001',
    title: 'How a WhatsApp group became a neighborhood movement',
    slug:  { _type: 'slug', current: 'whatsapp-group-neighborhood-movement' },
    category: 'Stories',
    featured: true,
    author: 'Sophie van der Berg',
    publishedAt: '2026-03-10T09:00:00Z',
    excerpt: 'Three friends in Amsterdam\'s Jordaan district started asking neighbors for help. Two years later, 47 neighborhoods across the Netherlands run on the same idea — and Etion is the platform that made it possible.',
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [
          { _type: 'span', _key: 's1', text: 'It started with a simple message in a group chat: "Does anyone have a drill I can borrow?" Within minutes, three neighbors had replied. That small moment sparked something bigger.' }
        ]
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'normal',
        children: [
          { _type: 'span', _key: 's2', text: 'Sophie van der Berg, one of Etion\'s early community builders, tells the story of how a Jordaan WhatsApp group evolved into the blueprint for Etion\'s neighborhood model. Today, 47 neighborhoods across the Netherlands use the same principles: trust, reciprocity, and a shared belief that neighbors are the best resource a community has.' }
        ]
      },
    ],
  },
  {
    _type: 'blogPost',
    _id:   'post-002',
    title: 'Why we chose credits over cash',
    slug:  { _type: 'slug', current: 'why-credits-over-cash' },
    category: 'Platform',
    featured: false,
    author: 'Marcus Kleijn',
    publishedAt: '2026-02-24T09:00:00Z',
    excerpt: 'When you put money on help, it stops feeling like help. Here\'s the thinking behind the Etion credit system — and why it keeps communities healthier than cash-based alternatives.',
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [
          { _type: 'span', _key: 's1', text: 'We ran the numbers. Platforms that charge money for help see a 60% drop in repeat interactions after the first transaction. Why? Because cash commodifies kindness.' }
        ]
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'normal',
        children: [
          { _type: 'span', _key: 's2', text: 'Etion\'s credit system is designed to feel like a favor, not a transaction. You earn credits by helping neighbors, and spend them when you need help. The balance never converts to euros — and that\'s the point.' }
        ]
      },
    ],
  },
  {
    _type: 'blogPost',
    _id:   'post-003',
    title: 'Meet the Eindhoven community',
    slug:  { _type: 'slug', current: 'meet-eindhoven-community' },
    category: 'Community',
    featured: false,
    author: 'Aisha Lopes',
    publishedAt: '2026-02-12T09:00:00Z',
    excerpt: 'The newest neighborhood to join Etion is already doing something we\'ve never seen before: weekly community dinners funded entirely by task credits. Here\'s how they pulled it off.',
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [
          { _type: 'span', _key: 's1', text: 'When Eindhoven joined Etion three months ago, community lead Fatima Aziz had a vision: use the credits system to fund something tangible for the whole neighborhood. What started as an experiment has become a weekly institution.' }
        ]
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'normal',
        children: [
          { _type: 'span', _key: 's2', text: 'Every Friday, neighbors pool a portion of their earned credits to cover the cost of a shared dinner. The menu rotates — last week it was Moroccan, this week Indonesian. The rule: whoever cooks earns double credits.' }
        ]
      },
    ],
  },
  {
    _type: 'blogPost',
    _id:   'post-004',
    title: 'Spring 2026 platform update',
    slug:  { _type: 'slug', current: 'spring-2026-platform-update' },
    category: 'Updates',
    featured: false,
    author: 'Joost Hartman',
    publishedAt: '2026-01-30T09:00:00Z',
    excerpt: 'Recurring tasks, neighborhood announcements, and a new ambassador program — here\'s everything coming to Etion in Q2 2026 and why we\'re building it.',
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [
          { _type: 'span', _key: 's1', text: 'Q2 is our biggest release yet. Three features driven entirely by community feedback, shipping in April, May, and June.' }
        ]
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'h2',
        children: [
          { _type: 'span', _key: 's2', text: 'Recurring tasks' }
        ]
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'normal',
        children: [
          { _type: 'span', _key: 's3', text: 'Set a task to repeat weekly or monthly — perfect for things like dog walking, plant watering, or grocery runs for a neighbor who can\'t get out easily.' }
        ]
      },
    ],
  },
  {
    _type: 'blogPost',
    _id:   'post-005',
    title: '"I haven\'t felt this connected in years" — David, Groningen',
    slug:  { _type: 'slug', current: 'david-groningen-story' },
    category: 'Stories',
    featured: false,
    author: 'Aisha Lopes',
    publishedAt: '2026-01-14T09:00:00Z',
    excerpt: 'David moved to Groningen during the pandemic and struggled to meet people. Six months on Etion changed that completely. This is his story.',
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [
          { _type: 'span', _key: 's1', text: '"I moved here in 2021 for a job," David says. "By 2023 I still didn\'t know a single neighbor\'s name. I\'d wave in the hallway and that was it."' }
        ]
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'normal',
        children: [
          { _type: 'span', _key: 's2', text: 'David joined Etion after seeing a flyer in his building lobby. His first task was small — carrying a heavy package to the third floor for an elderly neighbor. They ended up talking for an hour. That neighbor introduced him to three more people on his street.' }
        ]
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'normal',
        children: [
          { _type: 'span', _key: 's3', text: '"Six months later I have people I actually call friends. Real friends. Not just LinkedIn connections." David now volunteers as a neighborhood ambassador and has helped onboard 22 new members.' }
        ]
      },
    ],
  },
]

async function seed() {
  console.log(`\nConnecting to Sanity project "${PROJECT_ID}" / dataset "${DATASET}"…\n`)

  if (PROJECT_ID === 'REPLACE_WITH_PROJECT_ID' || TOKEN === 'REPLACE_WITH_WRITE_TOKEN') {
    console.error('✗ Please set SANITY_PROJECT_ID and SANITY_TOKEN environment variables before running.')
    console.error('  See the README or top of this file for instructions.\n')
    process.exit(1)
  }

  const transaction = client.transaction()
  posts.forEach(post => transaction.createOrReplace(post))

  try {
    const result = await transaction.commit()
    console.log(`✓ Seeded ${posts.length} blog posts successfully!`)
    console.log(`  Document IDs: ${posts.map(p => p._id).join(', ')}\n`)
  } catch (err) {
    console.error('✗ Seed failed:', err.message)
    process.exit(1)
  }
}

seed()
