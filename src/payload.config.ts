import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { partners } from './collections/partners'
import { PrivacyPolicy } from './collections/privacy-policy'
import { Slider } from './collections/slider'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
import { ContentWithImage } from './collections/content-with-image'

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    }
  },
  localization: {
    locales: [
      {
        code: 'en',
        label: 'English',
      },
      {
        code: 'tr',
        label: 'Türkçe',
      },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  collections: [
    Users, 
    Media,
    PrivacyPolicy,
    Slider,
    partners,
    ContentWithImage,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [
    payloadCloudPlugin(),
  ],
})