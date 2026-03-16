/**
 * Sanity seed script — populates all CMS content from the hardcoded HTML.
 * Run once: node seed.mjs
 * Requires: SANITY_WRITE_TOKEN in environment (or a .env file)
 */
import { readFileSync, existsSync } from 'fs'

// Load .env if present
if (existsSync('.env')) {
  const env = readFileSync('.env', 'utf8')
  env.split('\n').forEach(line => {
    const [k, ...v] = line.split('=')
    if (k && v.length) process.env[k.trim()] = v.join('=').trim().replace(/^"|"$/g, '')
  })
}

const TOKEN      = process.env.SANITY_WRITE_TOKEN
const PROJECT_ID = 'x0qx8kpt'
const DATASET    = 'production'
const API_VER    = '2021-06-07'

if (!TOKEN) {
  console.error('❌  SANITY_WRITE_TOKEN is not set. Add it to your .env file.')
  process.exit(1)
}

const mutations = [
  // ── Team members ──────────────────────────────────────────────
  { createOrReplace: { _id: 'teamMember-sophie', _type: 'teamMember',
      name: 'Sophie van der Berg', role: 'Co-founder & CEO', initials: 'SV', order: 1,
      bio: 'Former urban planner turned community builder. Sophie has spent 10 years designing neighborhoods that people actually love living in.' }},
  { createOrReplace: { _id: 'teamMember-marcus', _type: 'teamMember',
      name: 'Marcus Kleijn', role: 'Co-founder & CTO', initials: 'MK', order: 2,
      bio: 'Software engineer who grew up in a tight-knit village. Builds systems that feel human, not corporate.' }},
  { createOrReplace: { _id: 'teamMember-aisha', _type: 'teamMember',
      name: 'Aisha Lopes', role: 'Community Lead', initials: 'AL', order: 3,
      bio: 'Community organizer and former social worker. Aisha ensures every neighborhood that joins Etion actually thrives.' }},
  { createOrReplace: { _id: 'teamMember-joost', _type: 'teamMember',
      name: 'Joost Hartman', role: 'Design & Product', initials: 'JH', order: 4,
      bio: 'Interaction designer obsessed with making complex systems feel effortless. Believes good design should be invisible.' }},

  // ── Neighborhoods ─────────────────────────────────────────────
  { createOrReplace: { _id: 'neighborhood-jordaan',   _type: 'neighborhood', name: 'Jordaan West',  city: 'Amsterdam', memberCount: 142, taskCount: 890, badge: 'Most active', order: 1 }},
  { createOrReplace: { _id: 'neighborhood-depijp',    _type: 'neighborhood', name: 'De Pijp',       city: 'Amsterdam', memberCount: 118, taskCount: 710, badge: 'Active',      order: 2 }},
  { createOrReplace: { _id: 'neighborhood-oost',      _type: 'neighborhood', name: 'Oost-Centrum',  city: 'Amsterdam', memberCount:  97, taskCount: 540, badge: 'Active',      order: 3 }},
  { createOrReplace: { _id: 'neighborhood-kralingen', _type: 'neighborhood', name: 'Kralingen',     city: 'Rotterdam', memberCount:  88, taskCount: 430, badge: 'Active',      order: 4 }},
  { createOrReplace: { _id: 'neighborhood-delfshaven',_type: 'neighborhood', name: 'Delfshaven',    city: 'Rotterdam', memberCount:  74, taskCount: 380, badge: 'Active',      order: 5 }},
  { createOrReplace: { _id: 'neighborhood-denhaag',   _type: 'neighborhood', name: 'Centrum-West',  city: 'Den Haag',  memberCount:  62, taskCount: 290, badge: 'Active',      order: 6 }},
  { createOrReplace: { _id: 'neighborhood-utrecht',   _type: 'neighborhood', name: 'Wittevrouwen',  city: 'Utrecht',   memberCount:  55, taskCount: 210, badge: 'Growing',     order: 7 }},

  // ── Ambassadors ───────────────────────────────────────────────
  { createOrReplace: { _id: 'ambassador-roos', _type: 'ambassador',
      name: 'Roos Feldman', area: 'Jordaan West, Amsterdam', initials: 'RF', membersOnboarded: 142, yearsWithEtion: '3.2y', order: 1,
      bio: 'Former social worker turned neighborhood organizer. Roos grew Jordaan West from 20 to 142 members in under a year by hosting monthly street meetings.' }},
  { createOrReplace: { _id: 'ambassador-tariq', _type: 'ambassador',
      name: 'Tariq Willems', area: 'Kralingen, Rotterdam', initials: 'TW', membersOnboarded: 88, yearsWithEtion: '1.8y', order: 2,
      bio: 'Retired teacher who uses Etion to connect students with tutoring and mentoring. Organizes the quarterly neighborhood BBQ that brings 80+ people together.' }},
  { createOrReplace: { _id: 'ambassador-zara', _type: 'ambassador',
      name: 'Zara Akhtar', area: 'Centrum-West, Den Haag', initials: 'ZA', membersOnboarded: 62, yearsWithEtion: '1.2y', order: 3,
      bio: 'Youth worker who started an Etion chapter focused on intergenerational exchange. Her neighborhood has the highest task completion rate in the network.' }},

  // ── Task categories ───────────────────────────────────────────
  { createOrReplace: { _id: 'taskCat-moving',  _type: 'taskCategory', name: 'Moving & Lifting',  iconName: 'moving',  taskCount: '184 open tasks', order: 1, description: 'Heavy boxes, furniture, or just a few bags — neighbors who can help are nearby.' }},
  { createOrReplace: { _id: 'taskCat-home',    _type: 'taskCategory', name: 'Home & Garden',     iconName: 'home',    taskCount: '312 open tasks', order: 2, description: 'Mowing, planting, small repairs — your local green thumbs and handy folks.' }},
  { createOrReplace: { _id: 'taskCat-rides',   _type: 'taskCategory', name: 'Rides & Errands',   iconName: 'rides',   taskCount: '221 open tasks', order: 3, description: 'A lift to the station, pharmacy run, airport drop — someone nearby is already going your way.' }},
  { createOrReplace: { _id: 'taskCat-cooking', _type: 'taskCategory', name: 'Cooking & Food',    iconName: 'cooking', taskCount: '156 open tasks', order: 4, description: 'Home-cooked meals, baking, sharing ingredients — food is the original community currency.' }},
  { createOrReplace: { _id: 'taskCat-skills',  _type: 'taskCategory', name: 'Skills & Learning', iconName: 'skills',  taskCount: '198 open tasks', order: 5, description: 'Tech help, language exchange, tutoring, repairs — every neighbor has something worth sharing.' }},
  { createOrReplace: { _id: 'taskCat-kids',    _type: 'taskCategory', name: 'Kids & Pets',       iconName: 'kids',    taskCount: '143 open tasks', order: 6, description: 'Childcare, dog walking, pet sitting — neighbors you trust, not strangers from the internet.' }},

  // ── Timeline events ───────────────────────────────────────────
  { createOrReplace: { _id: 'timeline-2022', _type: 'timelineEvent', year: '2022',       dotLabel: '22', order: 1, title: 'The Jordaan WhatsApp group',      description: '40 households in Amsterdam start exchanging help informally. The credit idea is born on a napkin.' }},
  { createOrReplace: { _id: 'timeline-2023', _type: 'timelineEvent', year: 'Early 2023', dotLabel: '23', order: 2, title: 'First prototype launched',          description: 'A simple web app replaces the WhatsApp group. 5 Amsterdam neighborhoods join in the first month.' }},
  { createOrReplace: { _id: 'timeline-2024', _type: 'timelineEvent', year: '2024',       dotLabel: '24', order: 3, title: 'Etion goes national',               description: 'We expand to Rotterdam, Den Haag, Utrecht and Eindhoven. 1,000 members reached.' }},
  { createOrReplace: { _id: 'timeline-2025', _type: 'timelineEvent', year: '2025 — now', dotLabel: '25', order: 4, title: '47 neighborhoods, 3,200+ members',  description: '12,000+ tasks completed. Building governance tools to let communities self-organize.' }},

  // ── Testimonials ──────────────────────────────────────────────
  { createOrReplace: { _id: 'testimonial-miriam', _type: 'testimonial', author: 'Miriam L.', role: 'Jordaan, Amsterdam', tag: 'Moving',       initials: 'ML', pages: ['home','community'], order: 1, quote: "I posted a task at 9am, and by 10am my neighbor had already helped me move a bed frame to the attic. Can't believe this exists." }},
  { createOrReplace: { _id: 'testimonial-david',  _type: 'testimonial', author: 'David M.',  role: 'Groningen',          tag: 'Connection',   initials: 'DM', pages: ['community'],        order: 2, quote: "I was skeptical — I've lived in this city for 5 years and barely knew anyone. Six months on Etion and I've got real friends three streets over." }},
  { createOrReplace: { _id: 'testimonial-kevin',  _type: 'testimonial', author: 'Kevin B.',  role: 'Rotterdam',          tag: 'Everyday help',initials: 'KB', pages: ['community'],        order: 3, quote: "My dog got walked, my groceries got picked up, and I made three friends. All in one week. Community is underrated." }},
  { createOrReplace: { _id: 'testimonial-hanny',  _type: 'testimonial', author: 'Hanny V.',  role: 'Den Haag',           tag: 'Seniors',      initials: 'HV', pages: ['community'],        order: 4, quote: "As a senior, I was worried about asking strangers for help. But everyone I've met through Etion has been wonderful. Warm, reliable people." }},
  { createOrReplace: { _id: 'testimonial-lena',   _type: 'testimonial', author: 'Lena S.',   role: 'Eindhoven',          tag: 'Skills swap',  initials: 'LS', pages: ['home','community'], order: 5, quote: "I help fix bikes on weekends and use my credits to get someone to cook a meal when I'm exhausted from work. This is just... smart." }},
  { createOrReplace: { _id: 'testimonial-sophie', _type: 'testimonial', author: 'Sophie W.', role: 'Maastricht',         tag: 'Exchange',     initials: 'SW', pages: ['home','community'], order: 6, quote: "My neighbor helped me hang 12 IKEA shelves. I helped her son with his Dutch for school. We're friends now. No money changed hands." }},

  // ── Page singletons ───────────────────────────────────────────
  { createOrReplace: { _id: 'homePage', _type: 'homePage',
      heroHeadline: 'Your neighbors<br>have skills.<br><em>You do too.</em>',
      heroSubheadline: 'Etion connects people in your neighborhood for the small tasks that make daily life easier — posted in seconds, done today, no strings attached.',
      heroStats: [
        { _key: 'stat1', number: '2,400+', label: 'Active members' },
        { _key: 'stat2', number: '8,900+', label: 'Tasks completed' },
        { _key: 'stat3', number: '47',     label: 'Neighborhoods' },
      ],
      velocityItems: [
        { _key: 'v1',  text: 'Moving & lifting' },
        { _key: 'v2',  text: 'Home repairs' },
        { _key: 'v3',  text: 'Garden help' },
        { _key: 'v4',  text: 'Rides & errands' },
        { _key: 'v5',  text: 'Cooking & food' },
        { _key: 'v6',  text: 'Tech support' },
        { _key: 'v7',  text: 'Childcare' },
        { _key: 'v8',  text: 'Language exchange' },
        { _key: 'v9',  text: 'Pet care' },
        { _key: 'v10', text: 'Skills swap' },
      ],
      howSteps: [
        { _key: 'step1', stepNumber: 1, title: 'Post what you need', description: 'Describe your task in plain language. Takes 60 seconds. Set a credit offer and a rough time — that\'s it.' },
        { _key: 'step2', stepNumber: 2, title: 'A neighbor picks it up', description: 'Real people from your area see your task and offer to help. Chat, agree on details, get it done. No middleman.' },
        { _key: 'step3', stepNumber: 3, title: 'Pay it forward', description: 'Earn credits by helping others. Spend them when you need a hand. The more you give, the more you get back.' },
      ],
      taskCategories: [
        { _key: 'tc1', _type: 'reference', _ref: 'taskCat-moving'  },
        { _key: 'tc2', _type: 'reference', _ref: 'taskCat-home'    },
        { _key: 'tc3', _type: 'reference', _ref: 'taskCat-rides'   },
        { _key: 'tc4', _type: 'reference', _ref: 'taskCat-cooking' },
        { _key: 'tc5', _type: 'reference', _ref: 'taskCat-skills'  },
        { _key: 'tc6', _type: 'reference', _ref: 'taskCat-kids'    },
      ],
      testimonials: [
        { _key: 'tm1', _type: 'reference', _ref: 'testimonial-miriam' },
        { _key: 'tm2', _type: 'reference', _ref: 'testimonial-lena'   },
        { _key: 'tm3', _type: 'reference', _ref: 'testimonial-sophie' },
        { _key: 'tm4', _type: 'reference', _ref: 'testimonial-david'  },
        { _key: 'tm5', _type: 'reference', _ref: 'testimonial-kevin'  },
        { _key: 'tm6', _type: 'reference', _ref: 'testimonial-hanny'  },
      ],
      ctaHeadline: 'Your neighborhood is waiting.',
      ctaSubheadline: 'Join free in under 2 minutes. No fees, no contracts — just neighbors helping neighbors.',
  }},

  { createOrReplace: { _id: 'aboutPage', _type: 'aboutPage',
      heroHeadline: 'We believe neighbors should help neighbors.',
      heroSubheadline: 'Etion started with a simple idea: that every community has more than enough talent, time, and goodwill to take care of itself — it just needs a place to meet.',
      missionParagraph1: "Etion isn't a gig platform. There are no background fees, no corporate extraction. It's a collective — the value stays in the community.",
      missionParagraph2: "We designed Etion around credits, not cash, so helping your neighbor isn't transactional. You give time, you earn time. You build trust, you build community.",
      missionPullQuote: '"The strongest neighborhoods aren\'t built by money — they\'re built by people showing up for each other."',
      missionStats: [
        { _key: 'ms1', number: '47',      label: 'Active neighborhoods' },
        { _key: 'ms2', number: '3,200+',  label: 'Community members' },
        { _key: 'ms3', number: '12k+',    label: 'Tasks completed' },
      ],
      valueCards: [
        { _key: 'vc1', emoji: '🤝', title: 'Reciprocity', description: 'Help flows both ways. Everyone gives and everyone receives. No one is just a customer, and no one is just a worker.' },
        { _key: 'vc2', emoji: '🏘️', title: 'Locality', description: "Real community is hyper-local. We're built for your street, your block, your neighborhood — not the entire internet." },
        { _key: 'vc3', emoji: '🔒', title: 'Trust-first', description: 'Trust is earned through reputation, not purchased through verification badges. Our rating system is built by the community, for the community.' },
        { _key: 'vc4', emoji: '⚖️', title: 'Fairness', description: 'We take no cut from community exchanges. Etion is sustained through optional memberships, not extraction from every transaction.' },
      ],
      storyParagraph1: "Etion started in 2022 as a WhatsApp group in Amsterdam's Jordaan neighborhood. Three friends — tired of expensive handyman apps and lonely city living — started asking their neighbors for help directly.",
      storyParagraph2: "The response was overwhelming. Within a month, 40 households were exchanging help: cooking meals, carrying furniture, watching plants, fixing bikes. The credit system emerged organically — a way to keep things fair without involving money.",
      storyParagraph3: "By 2023, neighboring districts asked to join. By 2024, Etion became a proper platform. Today, 47 neighborhoods across the Netherlands run on Etion, and we're just getting started.",
      timelineEvents: [
        { _key: 'te1', _type: 'reference', _ref: 'timeline-2022' },
        { _key: 'te2', _type: 'reference', _ref: 'timeline-2023' },
        { _key: 'te3', _type: 'reference', _ref: 'timeline-2024' },
        { _key: 'te4', _type: 'reference', _ref: 'timeline-2025' },
      ],
      teamMembers: [
        { _key: 'team1', _type: 'reference', _ref: 'teamMember-sophie' },
        { _key: 'team2', _type: 'reference', _ref: 'teamMember-marcus' },
        { _key: 'team3', _type: 'reference', _ref: 'teamMember-aisha'  },
        { _key: 'team4', _type: 'reference', _ref: 'teamMember-joost'  },
      ],
      ctaHeadline: 'Ready to meet your neighborhood?',
      ctaSubheadline: 'Join free in under 2 minutes.',
  }},

  { createOrReplace: { _id: 'communityPage', _type: 'communityPage',
      heroHeadline: 'Your neighborhood is already here.',
      heroSubheadline: "47 active neighborhoods. 3,200+ members helping each other every day. Find yours — or start a new one.",
      heroStats: [
        { _key: 'cs1', number: '47',      label: 'Neighborhoods' },
        { _key: 'cs2', number: '3,200+',  label: 'Members' },
        { _key: 'cs3', number: '12k+',    label: 'Tasks done' },
        { _key: 'cs4', number: '9',       label: 'Cities' },
      ],
      neighborhoods: [
        { _key: 'n1', _type: 'reference', _ref: 'neighborhood-jordaan'    },
        { _key: 'n2', _type: 'reference', _ref: 'neighborhood-depijp'     },
        { _key: 'n3', _type: 'reference', _ref: 'neighborhood-oost'       },
        { _key: 'n4', _type: 'reference', _ref: 'neighborhood-kralingen'  },
        { _key: 'n5', _type: 'reference', _ref: 'neighborhood-delfshaven' },
        { _key: 'n6', _type: 'reference', _ref: 'neighborhood-denhaag'    },
        { _key: 'n7', _type: 'reference', _ref: 'neighborhood-utrecht'    },
      ],
      testimonials: [
        { _key: 'ct1', _type: 'reference', _ref: 'testimonial-miriam' },
        { _key: 'ct2', _type: 'reference', _ref: 'testimonial-david'  },
        { _key: 'ct3', _type: 'reference', _ref: 'testimonial-kevin'  },
        { _key: 'ct4', _type: 'reference', _ref: 'testimonial-hanny'  },
        { _key: 'ct5', _type: 'reference', _ref: 'testimonial-lena'   },
        { _key: 'ct6', _type: 'reference', _ref: 'testimonial-sophie' },
      ],
      ambassadors: [
        { _key: 'a1', _type: 'reference', _ref: 'ambassador-roos'  },
        { _key: 'a2', _type: 'reference', _ref: 'ambassador-tariq' },
        { _key: 'a3', _type: 'reference', _ref: 'ambassador-zara'  },
      ],
      ctaHeadline: 'Ready to meet your neighbors?',
      ctaSubheadline: 'Join free — find your neighborhood or start a new one.',
  }},
]

const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VER}/data/mutate/${DATASET}`

const res = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({ mutations }),
})

const result = await res.json()

if (!res.ok) {
  console.error('❌  Sanity error:', JSON.stringify(result, null, 2))
  process.exit(1)
}

const counts = result.results?.reduce((acc, r) => {
  acc[r.operation] = (acc[r.operation] || 0) + 1
  return acc
}, {})

console.log('✅  Seed complete:', counts)
console.log(`    ${mutations.length} documents written to ${PROJECT_ID}/${DATASET}`)
console.log('\nNext step: open Sanity Studio and publish the drafts, or run the pages API to verify.')
