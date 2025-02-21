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
import { MediaBlock } from './collections/media-block'
import { Counter } from './collections/counter'
import { ContentWithImage } from './collections/content-with-image'
import { Accordion } from './collections/accordion'
import { IconList } from './collections/icon-list'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

interface LocaleConfig {
  label: string;
  code: string;
  default?: boolean;
}

export default buildConfig({
  admin: {
    user: 'users',
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
    Accordion,
    IconList,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    migrationDir: 'auto',
  }),
  plugins: [
    payloadCloudPlugin(),
  ],

  localization: {
    locales: [
      {
        label: 'Türkçe',
        code: 'tr', 
        default: true,
      } as LocaleConfig,
      {
        label: 'English',
        code: 'en',
      } as LocaleConfig,
    ],
    defaultLocale: 'tr',
    fallback: true,
  },
}); 