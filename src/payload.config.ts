import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";

import { Media } from "./collections/Media";
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
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  plugins: [],
});
