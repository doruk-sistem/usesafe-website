import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_homepage_fk";
  
  DROP INDEX IF EXISTS "homepage_updated_at_idx";
  DROP INDEX IF EXISTS "homepage_created_at_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_homepage_id_idx";
  ALTER TABLE "homepage" ALTER COLUMN "updated_at" DROP DEFAULT;
  ALTER TABLE "homepage" ALTER COLUMN "updated_at" DROP NOT NULL;
  ALTER TABLE "homepage" ALTER COLUMN "created_at" DROP DEFAULT;
  ALTER TABLE "homepage" ALTER COLUMN "created_at" DROP NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "homepage_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "homepage" ALTER COLUMN "updated_at" SET DEFAULT now();
  ALTER TABLE "homepage" ALTER COLUMN "updated_at" SET NOT NULL;
  ALTER TABLE "homepage" ALTER COLUMN "created_at" SET DEFAULT now();
  ALTER TABLE "homepage" ALTER COLUMN "created_at" SET NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "homepage_id" integer;
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_homepage_fk" FOREIGN KEY ("homepage_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_homepage_id_idx" ON "payload_locked_documents_rels" USING btree ("homepage_id");
  CREATE INDEX IF NOT EXISTS "homepage_updated_at_idx" ON "homepage" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "homepage_created_at_idx" ON "homepage" USING btree ("created_at");`)
}
