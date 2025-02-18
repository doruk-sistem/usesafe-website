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
import { ContentWithImage } from './collections/content-with-image'
import { MediaBlock } from './collections/media-block'
import { Counter } from './collections/counter'

import { en } from '@payloadcms/translations/languages/en'
import { tr } from '@payloadcms/translations/languages/tr'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    }
  },
  i18n: {
    supportedLanguages: { en, tr },
    fallbackLanguage: 'en',
  },
  collections: [
    Users, 
    Media,
    PrivacyPolicy,
    Slider,
    partners,
    ContentWithImage,
    MediaBlock,
    Counter,
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
    migrationDir: 'auto', // migrate yerine migrationMode: 'auto' kullanıyoruz
  }),
  plugins: [
    payloadCloudPlugin(),
  ],
})






