import blogPost       from './blogPost'
import taskSubmission from './taskSubmission'

// Page singletons
import homePage      from './homePage'
import aboutPage     from './aboutPage'
import communityPage from './communityPage'

// Shared collections
import testimonial   from './testimonial'
import teamMember    from './teamMember'
import neighborhood  from './neighborhood'
import ambassador    from './ambassador'
import taskCategory  from './taskCategory'
import timelineEvent from './timelineEvent'

export const schemaTypes = [
  // Pages — client sees these at the top
  homePage,
  aboutPage,
  communityPage,
  // Content collections
  testimonial,
  teamMember,
  neighborhood,
  ambassador,
  taskCategory,
  timelineEvent,
  // Existing
  blogPost,
  taskSubmission,
]
