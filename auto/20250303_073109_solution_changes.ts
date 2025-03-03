import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_solutions_blocks_media_block_media_width" AS ENUM('full', 'auto');
  CREATE TYPE "public"."enum_solutions_blocks_icon_list_block_items_icon" AS ENUM('GiWorld', 'CiDiscount1', 'GiWaterRecycling', 'LuFootprints', 'IoQrCodeOutline', 'GiConversation');
  ALTER TYPE "public"."enum_solutions_blocks_content_with_image_image_position" RENAME TO "enum_solutions_blocks_content_with_image_block_position";
  CREATE TABLE IF NOT EXISTS "solutions_blocks_icon_list_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_solutions_blocks_icon_list_block_items_icon" NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "solutions_blocks_icon_list_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_options_title" varchar,
  	"block_options_description" varchar,
  	"block_options_hero_content" jsonb,
  	"block_options_footer_content" jsonb,
  	"block_options_inner_container" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  ALTER TABLE "solutions_blocks_page_title" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_blocks_media_block_media_items" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "solutions_blocks_page_title" CASCADE;
  DROP TABLE "solutions_blocks_media_block_media_items" CASCADE;
  ALTER TABLE "solutions_blocks_content_with_image" RENAME TO "solutions_blocks_content_with_image_block";
  ALTER TABLE "solutions_blocks_content_with_image_block" RENAME COLUMN "image_src_id" TO "image_id";
  ALTER TABLE "solutions_blocks_content_with_image_block" RENAME COLUMN "image_position" TO "position";
  ALTER TABLE "solutions_blocks_content_with_image_block" DROP CONSTRAINT "solutions_blocks_content_with_image_image_src_id_media_id_fk";
  
  ALTER TABLE "solutions_blocks_content_with_image_block" DROP CONSTRAINT "solutions_blocks_content_with_image_parent_id_fk";
  
  DROP INDEX IF EXISTS "solutions_blocks_content_with_image_order_idx";
  DROP INDEX IF EXISTS "solutions_blocks_content_with_image_parent_id_idx";
  DROP INDEX IF EXISTS "solutions_blocks_content_with_image_path_idx";
  DROP INDEX IF EXISTS "solutions_blocks_content_with_image_locale_idx";
  DROP INDEX IF EXISTS "solutions_blocks_content_with_image_image_image_src_idx";
  ALTER TABLE "solutions_blocks_content_with_image_block" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "solutions_blocks_content_with_image_block" ALTER COLUMN "description" SET DATA TYPE jsonb;
  ALTER TABLE "homepage" ALTER COLUMN "updated_at" SET DEFAULT now();
  ALTER TABLE "homepage" ALTER COLUMN "updated_at" SET NOT NULL;
  ALTER TABLE "homepage" ALTER COLUMN "created_at" SET DEFAULT now();
  ALTER TABLE "homepage" ALTER COLUMN "created_at" SET NOT NULL;
  ALTER TABLE "solutions_blocks_media_block" ADD COLUMN "media_id" integer;
  ALTER TABLE "solutions_blocks_media_block" ADD COLUMN "media_width" "enum_solutions_blocks_media_block_media_width" DEFAULT 'auto';
  ALTER TABLE "solutions_blocks_media_block" ADD COLUMN "block_options_title" varchar;
  ALTER TABLE "solutions_blocks_media_block" ADD COLUMN "block_options_description" varchar;
  ALTER TABLE "solutions_blocks_media_block" ADD COLUMN "block_options_hero_content" jsonb;
  ALTER TABLE "solutions_blocks_media_block" ADD COLUMN "block_options_footer_content" jsonb;
  ALTER TABLE "solutions_blocks_media_block" ADD COLUMN "block_options_inner_container" boolean DEFAULT true;
  ALTER TABLE "solutions_blocks_content_with_image_block" ADD COLUMN "button_text" varchar;
  ALTER TABLE "solutions_blocks_content_with_image_block" ADD COLUMN "button_link" varchar;
  ALTER TABLE "solutions_blocks_content_with_image_block" ADD COLUMN "block_options_title" varchar;
  ALTER TABLE "solutions_blocks_content_with_image_block" ADD COLUMN "block_options_description" varchar;
  ALTER TABLE "solutions_blocks_content_with_image_block" ADD COLUMN "block_options_hero_content" jsonb;
  ALTER TABLE "solutions_blocks_content_with_image_block" ADD COLUMN "block_options_footer_content" jsonb;
  ALTER TABLE "solutions_blocks_content_with_image_block" ADD COLUMN "block_options_inner_container" boolean DEFAULT true;
  ALTER TABLE "solutions" ADD COLUMN "background_image_id" integer NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "homepage_id" integer;
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_icon_list_block_items" ADD CONSTRAINT "solutions_blocks_icon_list_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions_blocks_icon_list_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_icon_list_block" ADD CONSTRAINT "solutions_blocks_icon_list_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "solutions_blocks_icon_list_block_items_order_idx" ON "solutions_blocks_icon_list_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_icon_list_block_items_parent_id_idx" ON "solutions_blocks_icon_list_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_icon_list_block_items_locale_idx" ON "solutions_blocks_icon_list_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_icon_list_block_order_idx" ON "solutions_blocks_icon_list_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_icon_list_block_parent_id_idx" ON "solutions_blocks_icon_list_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_icon_list_block_path_idx" ON "solutions_blocks_icon_list_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_icon_list_block_locale_idx" ON "solutions_blocks_icon_list_block" USING btree ("_locale");
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_media_block" ADD CONSTRAINT "solutions_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_content_with_image_block" ADD CONSTRAINT "solutions_blocks_content_with_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_content_with_image_block" ADD CONSTRAINT "solutions_blocks_content_with_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions" ADD CONSTRAINT "solutions_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_homepage_fk" FOREIGN KEY ("homepage_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "solutions_blocks_media_block_media_idx" ON "solutions_blocks_media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_block_order_idx" ON "solutions_blocks_content_with_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_block_parent_id_idx" ON "solutions_blocks_content_with_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_block_path_idx" ON "solutions_blocks_content_with_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_block_locale_idx" ON "solutions_blocks_content_with_image_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_block_image_idx" ON "solutions_blocks_content_with_image_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "solutions_background_image_idx" ON "solutions" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_homepage_id_idx" ON "payload_locked_documents_rels" USING btree ("homepage_id");
  CREATE INDEX IF NOT EXISTS "homepage_updated_at_idx" ON "homepage" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "homepage_created_at_idx" ON "homepage" USING btree ("created_at");
  ALTER TABLE "solutions_blocks_media_block" DROP COLUMN IF EXISTS "section_options_class_name";
  ALTER TABLE "solutions_blocks_media_block" DROP COLUMN IF EXISTS "section_options_inner_container";
  ALTER TABLE "solutions_blocks_media_block" DROP COLUMN IF EXISTS "section_options_section_id";
  ALTER TABLE "solutions_blocks_media_block" DROP COLUMN IF EXISTS "section_options_button_text";
  ALTER TABLE "solutions_blocks_content_with_image_block" DROP COLUMN IF EXISTS "image_alt";
  ALTER TABLE "solutions_blocks_content_with_image_block" DROP COLUMN IF EXISTS "image_width";
  ALTER TABLE "solutions_blocks_content_with_image_block" DROP COLUMN IF EXISTS "image_height";
  ALTER TABLE "solutions_blocks_content_with_image_block" DROP COLUMN IF EXISTS "image_img_class_name";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_solutions_blocks_content_with_image_image_position" AS ENUM('left', 'right');
  CREATE TABLE IF NOT EXISTS "solutions_blocks_page_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"top_title" varchar,
  	"background_image_id" integer,
  	"down_section_id" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "solutions_blocks_media_block_media_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "solutions_blocks_content_with_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_src_id" integer NOT NULL,
  	"image_alt" varchar,
  	"image_width" numeric,
  	"image_height" numeric,
  	"image_img_class_name" varchar,
  	"image_position" "enum_solutions_blocks_content_with_image_image_position",
  	"block_name" varchar
  );
  
  ALTER TABLE "solutions_blocks_content_with_image_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_blocks_icon_list_block_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_blocks_icon_list_block" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "solutions_blocks_content_with_image_block" CASCADE;
  DROP TABLE "solutions_blocks_icon_list_block_items" CASCADE;
  DROP TABLE "solutions_blocks_icon_list_block" CASCADE;
  ALTER TABLE "solutions_blocks_media_block" DROP CONSTRAINT "solutions_blocks_media_block_media_id_media_id_fk";
  
  ALTER TABLE "solutions" DROP CONSTRAINT "solutions_background_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_homepage_fk";
  
  DROP INDEX IF EXISTS "solutions_blocks_media_block_media_idx";
  DROP INDEX IF EXISTS "solutions_background_image_idx";
  DROP INDEX IF EXISTS "homepage_updated_at_idx";
  DROP INDEX IF EXISTS "homepage_created_at_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_homepage_id_idx";
  ALTER TABLE "homepage" ALTER COLUMN "updated_at" DROP DEFAULT;
  ALTER TABLE "homepage" ALTER COLUMN "updated_at" DROP NOT NULL;
  ALTER TABLE "homepage" ALTER COLUMN "created_at" DROP DEFAULT;
  ALTER TABLE "homepage" ALTER COLUMN "created_at" DROP NOT NULL;
  ALTER TABLE "solutions_blocks_media_block" ADD COLUMN "section_options_class_name" varchar;
  ALTER TABLE "solutions_blocks_media_block" ADD COLUMN "section_options_inner_container" boolean;
  ALTER TABLE "solutions_blocks_media_block" ADD COLUMN "section_options_section_id" varchar;
  ALTER TABLE "solutions_blocks_media_block" ADD COLUMN "section_options_button_text" varchar NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_page_title" ADD CONSTRAINT "solutions_blocks_page_title_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_page_title" ADD CONSTRAINT "solutions_blocks_page_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_media_block_media_items" ADD CONSTRAINT "solutions_blocks_media_block_media_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_media_block_media_items" ADD CONSTRAINT "solutions_blocks_media_block_media_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions_blocks_media_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_content_with_image" ADD CONSTRAINT "solutions_blocks_content_with_image_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_content_with_image" ADD CONSTRAINT "solutions_blocks_content_with_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "solutions_blocks_page_title_order_idx" ON "solutions_blocks_page_title" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_page_title_parent_id_idx" ON "solutions_blocks_page_title" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_page_title_path_idx" ON "solutions_blocks_page_title" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_page_title_locale_idx" ON "solutions_blocks_page_title" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_page_title_background_image_idx" ON "solutions_blocks_page_title" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_media_block_media_items_order_idx" ON "solutions_blocks_media_block_media_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_media_block_media_items_parent_id_idx" ON "solutions_blocks_media_block_media_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_media_block_media_items_locale_idx" ON "solutions_blocks_media_block_media_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_media_block_media_items_image_idx" ON "solutions_blocks_media_block_media_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_order_idx" ON "solutions_blocks_content_with_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_parent_id_idx" ON "solutions_blocks_content_with_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_path_idx" ON "solutions_blocks_content_with_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_locale_idx" ON "solutions_blocks_content_with_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_image_image_src_idx" ON "solutions_blocks_content_with_image" USING btree ("image_src_id");
  ALTER TABLE "solutions_blocks_media_block" DROP COLUMN IF EXISTS "media_id";
  ALTER TABLE "solutions_blocks_media_block" DROP COLUMN IF EXISTS "media_width";
  ALTER TABLE "solutions_blocks_media_block" DROP COLUMN IF EXISTS "block_options_title";
  ALTER TABLE "solutions_blocks_media_block" DROP COLUMN IF EXISTS "block_options_description";
  ALTER TABLE "solutions_blocks_media_block" DROP COLUMN IF EXISTS "block_options_hero_content";
  ALTER TABLE "solutions_blocks_media_block" DROP COLUMN IF EXISTS "block_options_footer_content";
  ALTER TABLE "solutions_blocks_media_block" DROP COLUMN IF EXISTS "block_options_inner_container";
  ALTER TABLE "solutions" DROP COLUMN IF EXISTS "background_image_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "homepage_id";
  DROP TYPE "public"."enum_solutions_blocks_content_with_image_block_position";
  DROP TYPE "public"."enum_solutions_blocks_media_block_media_width";
  DROP TYPE "public"."enum_solutions_blocks_icon_list_block_items_icon";`)
}
