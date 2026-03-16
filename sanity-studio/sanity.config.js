import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const SINGLETONS = ['homePage', 'aboutPage', 'communityPage']

export default defineConfig({
  name: 'etion-cms',
  title: 'Etion CMS',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'x0qx8kpt',
  dataset:   process.env.SANITY_STUDIO_DATASET    || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Page singletons — one click to edit
            S.listItem().title('🏠 Home Page').id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem().title('👥 About Page').id('aboutPage')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem().title('🌍 Community Page').id('communityPage')
              .child(S.document().schemaType('communityPage').documentId('communityPage')),
            S.divider(),
            // Collections — list views
            ...S.documentTypeListItems().filter(
              item => !SINGLETONS.includes(item.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
