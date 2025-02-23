import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_homepage_blocks_media_block_media_width" AS ENUM('full', 'auto');
  ALTER TABLE "homepage_blocks_media_block" ADD COLUMN "media_width" "enum_homepage_blocks_media_block_media_width" DEFAULT 'auto';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage_blocks_media_block" DROP COLUMN IF EXISTS "media_width";
  DROP TYPE "public"."enum_homepage_blocks_media_block_media_width";`)
}
