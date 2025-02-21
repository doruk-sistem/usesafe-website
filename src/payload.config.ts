import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";

import { Accordion } from "./collections/accordion";
import { ContentWithImage } from "./collections/content-with-image";
import { Counter } from "./collections/counter";
import { IconList } from "./collections/icon-list";
import { Media } from "./collections/Media";
import { MediaBlock } from "./collections/media-block";
import { partners } from "./collections/partners";
import { PrivacyPolicy } from "./collections/privacy-policy";
import { Slider } from "./collections/slider";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: [
      {
        code: "en",
        label: "English",
      },
      {
        code: "tr",
        label: "Türkçe",
      },
    ],
    defaultLocale: "en",
    fallback: true,
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
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    migrationDir: "auto",
  }),
  plugins: [],
});
