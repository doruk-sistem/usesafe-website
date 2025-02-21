import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_homepage_blocks_content_with_image_block_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_homepage_blocks_icon_list_block_items_icon" AS ENUM('GiWorld', 'CiDiscount1', 'GiWaterRecycling', 'LuFootprints', 'IoQrCodeOutline', 'GiConversation');
  CREATE TABLE IF NOT EXISTS "homepage_blocks_content_with_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"position" "enum_homepage_blocks_content_with_image_block_position" DEFAULT 'left',
  	"block_options_title" varchar,
  	"block_options_description" varchar,
  	"block_options_hero_content" jsonb,
  	"block_options_footer_content" jsonb,
  	"block_options_inner_container" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_content_with_image_block_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"button_text" varchar,
  	"button_link" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_slider_block_sliders" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_slider_block_sliders_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"button_text" varchar,
  	"button_link" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_slider_block_clients" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_slider_block_clients_locales" (
  	"name" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_slider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_options_title" varchar,
  	"block_options_description" varchar,
  	"block_options_hero_content" jsonb,
  	"block_options_footer_content" jsonb,
  	"block_options_inner_container" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_accordion_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_accordion_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"block_options_title" varchar,
  	"block_options_description" varchar,
  	"block_options_hero_content" jsonb,
  	"block_options_footer_content" jsonb,
  	"block_options_inner_container" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_accordion_block_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_icon_list_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_homepage_blocks_icon_list_block_items_icon" NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "homepage_blocks_icon_list_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_options_title" varchar,
  	"block_options_description" varchar,
  	"block_options_hero_content" jsonb,
  	"block_options_footer_content" jsonb,
  	"block_options_inner_container" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "privacy_policy" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "sliders_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "sliders_translations_tr_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "sliders" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "partners" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "content_with_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "content_with_image_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "counter_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "counter_translations_tr_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "counter" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "privacy_policy" CASCADE;
  DROP TABLE "sliders_slides" CASCADE;
  DROP TABLE "sliders_translations_tr_slides" CASCADE;
  DROP TABLE "sliders" CASCADE;
  DROP TABLE "partners" CASCADE;
  DROP TABLE "content_with_image" CASCADE;
  DROP TABLE "content_with_image_locales" CASCADE;
  DROP TABLE "media_block" CASCADE;
  DROP TABLE "counter_items" CASCADE;
  DROP TABLE "counter_translations_tr_items" CASCADE;
  DROP TABLE "counter" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_privacy_policy_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_sliders_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_partners_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_content_with_image_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_media_block_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_counter_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_privacy_policy_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_sliders_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_partners_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_content_with_image_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_media_block_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_counter_id_idx";
  ALTER TABLE "users" ADD COLUMN "name" varchar;
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_content_with_image_block" ADD CONSTRAINT "homepage_blocks_content_with_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_content_with_image_block" ADD CONSTRAINT "homepage_blocks_content_with_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_content_with_image_block_locales" ADD CONSTRAINT "homepage_blocks_content_with_image_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_content_with_image_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_slider_block_sliders" ADD CONSTRAINT "homepage_blocks_slider_block_sliders_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_slider_block_sliders" ADD CONSTRAINT "homepage_blocks_slider_block_sliders_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_slider_block_sliders_locales" ADD CONSTRAINT "homepage_blocks_slider_block_sliders_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_slider_block_sliders"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_slider_block_clients" ADD CONSTRAINT "homepage_blocks_slider_block_clients_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_slider_block_clients" ADD CONSTRAINT "homepage_blocks_slider_block_clients_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_slider_block_clients_locales" ADD CONSTRAINT "homepage_blocks_slider_block_clients_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_slider_block_clients"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_slider_block" ADD CONSTRAINT "homepage_blocks_slider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_media_block" ADD CONSTRAINT "homepage_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_media_block" ADD CONSTRAINT "homepage_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_accordion_block_items" ADD CONSTRAINT "homepage_blocks_accordion_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_accordion_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_accordion_block" ADD CONSTRAINT "homepage_blocks_accordion_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_accordion_block" ADD CONSTRAINT "homepage_blocks_accordion_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_accordion_block_locales" ADD CONSTRAINT "homepage_blocks_accordion_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_accordion_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_list_block_items" ADD CONSTRAINT "homepage_blocks_icon_list_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_blocks_icon_list_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "homepage_blocks_icon_list_block" ADD CONSTRAINT "homepage_blocks_icon_list_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "homepage_blocks_content_with_image_block_order_idx" ON "homepage_blocks_content_with_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_content_with_image_block_parent_id_idx" ON "homepage_blocks_content_with_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_content_with_image_block_path_idx" ON "homepage_blocks_content_with_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_content_with_image_block_image_idx" ON "homepage_blocks_content_with_image_block" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_blocks_content_with_image_block_locales_locale_parent_id_unique" ON "homepage_blocks_content_with_image_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_slider_block_sliders_order_idx" ON "homepage_blocks_slider_block_sliders" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_slider_block_sliders_parent_id_idx" ON "homepage_blocks_slider_block_sliders" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_slider_block_sliders_image_idx" ON "homepage_blocks_slider_block_sliders" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_blocks_slider_block_sliders_locales_locale_parent_id_unique" ON "homepage_blocks_slider_block_sliders_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_slider_block_clients_order_idx" ON "homepage_blocks_slider_block_clients" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_slider_block_clients_parent_id_idx" ON "homepage_blocks_slider_block_clients" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_slider_block_clients_image_idx" ON "homepage_blocks_slider_block_clients" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_blocks_slider_block_clients_locales_locale_parent_id_unique" ON "homepage_blocks_slider_block_clients_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_slider_block_order_idx" ON "homepage_blocks_slider_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_slider_block_parent_id_idx" ON "homepage_blocks_slider_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_slider_block_path_idx" ON "homepage_blocks_slider_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_media_block_order_idx" ON "homepage_blocks_media_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_media_block_parent_id_idx" ON "homepage_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_media_block_path_idx" ON "homepage_blocks_media_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_media_block_media_idx" ON "homepage_blocks_media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_accordion_block_items_order_idx" ON "homepage_blocks_accordion_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_accordion_block_items_parent_id_idx" ON "homepage_blocks_accordion_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_accordion_block_items_locale_idx" ON "homepage_blocks_accordion_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_accordion_block_order_idx" ON "homepage_blocks_accordion_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_accordion_block_parent_id_idx" ON "homepage_blocks_accordion_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_accordion_block_path_idx" ON "homepage_blocks_accordion_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_accordion_block_image_idx" ON "homepage_blocks_accordion_block" USING btree ("image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "homepage_blocks_accordion_block_locales_locale_parent_id_unique" ON "homepage_blocks_accordion_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_list_block_items_order_idx" ON "homepage_blocks_icon_list_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_list_block_items_parent_id_idx" ON "homepage_blocks_icon_list_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_list_block_items_locale_idx" ON "homepage_blocks_icon_list_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_list_block_order_idx" ON "homepage_blocks_icon_list_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_list_block_parent_id_idx" ON "homepage_blocks_icon_list_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_list_block_path_idx" ON "homepage_blocks_icon_list_block" USING btree ("_path");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "privacy_policy_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "sliders_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "partners_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "content_with_image_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "media_block_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "counter_id";
  ALTER TABLE "public"."homepage_blocks_content_with_image_block_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."homepage_blocks_slider_block_sliders_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."homepage_blocks_slider_block_clients_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."homepage_blocks_accordion_block_items" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."homepage_blocks_accordion_block_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."homepage_blocks_icon_list_block_items" ALTER COLUMN "_locale" SET DATA TYPE text;
  DROP TYPE "public"."_locales";
  CREATE TYPE "public"."_locales" AS ENUM('en', 'tr');
  ALTER TABLE "public"."homepage_blocks_content_with_image_block_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."homepage_blocks_slider_block_sliders_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."homepage_blocks_slider_block_clients_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."homepage_blocks_accordion_block_items" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."homepage_blocks_accordion_block_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."homepage_blocks_icon_list_block_items" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "privacy_policy" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"sections_legal_disclaimer_title" varchar NOT NULL,
  	"sections_legal_disclaimer_content" varchar NOT NULL,
  	"sections_basics_title" varchar NOT NULL,
  	"sections_basics_content" varchar NOT NULL,
  	"sections_inclusion_title" varchar NOT NULL,
  	"sections_inclusion_content" varchar NOT NULL,
  	"translations_tr_title" varchar,
  	"translations_tr_sections_legal_disclaimer_title" varchar,
  	"translations_tr_sections_legal_disclaimer_content" varchar,
  	"translations_tr_sections_basics_title" varchar,
  	"translations_tr_sections_basics_content" varchar,
  	"translations_tr_sections_inclusion_title" varchar,
  	"translations_tr_sections_inclusion_content" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "sliders_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"image_id" integer NOT NULL,
  	"button_text" varchar,
  	"button_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "sliders_translations_tr_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"button_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "sliders" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "partners" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"logo_id" integer NOT NULL,
  	"order" numeric DEFAULT 0,
  	"active" boolean DEFAULT true,
  	"url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "content_with_image" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"order" numeric,
  	"active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "content_with_image_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"button_text" varchar,
  	"button_link" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "media_block" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"media_id" integer NOT NULL,
  	"button_text" varchar,
  	"button_link" varchar,
  	"translations_tr_title" varchar,
  	"translations_tr_description" varchar,
  	"translations_tr_button_text" varchar,
  	"translations_tr_button_link" varchar,
  	"active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "counter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar NOT NULL,
  	"value" numeric NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "counter_translations_tr_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"value" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "counter" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"translations_tr_title" varchar,
  	"active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "homepage_blocks_content_with_image_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_content_with_image_block_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_slider_block_sliders" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_slider_block_sliders_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_slider_block_clients" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_slider_block_clients_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_slider_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_accordion_block_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_accordion_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_accordion_block_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_icon_list_block_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_icon_list_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "homepage_blocks_content_with_image_block" CASCADE;
  DROP TABLE "homepage_blocks_content_with_image_block_locales" CASCADE;
  DROP TABLE "homepage_blocks_slider_block_sliders" CASCADE;
  DROP TABLE "homepage_blocks_slider_block_sliders_locales" CASCADE;
  DROP TABLE "homepage_blocks_slider_block_clients" CASCADE;
  DROP TABLE "homepage_blocks_slider_block_clients_locales" CASCADE;
  DROP TABLE "homepage_blocks_slider_block" CASCADE;
  DROP TABLE "homepage_blocks_media_block" CASCADE;
  DROP TABLE "homepage_blocks_accordion_block_items" CASCADE;
  DROP TABLE "homepage_blocks_accordion_block" CASCADE;
  DROP TABLE "homepage_blocks_accordion_block_locales" CASCADE;
  DROP TABLE "homepage_blocks_icon_list_block_items" CASCADE;
  DROP TABLE "homepage_blocks_icon_list_block" CASCADE;
  DROP TABLE "homepage" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "privacy_policy_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "sliders_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "partners_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "content_with_image_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "media_block_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "counter_id" integer;
  DO $$ BEGIN
   ALTER TABLE "sliders_slides" ADD CONSTRAINT "sliders_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sliders_slides" ADD CONSTRAINT "sliders_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sliders"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sliders_translations_tr_slides" ADD CONSTRAINT "sliders_translations_tr_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sliders"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "partners" ADD CONSTRAINT "partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "content_with_image" ADD CONSTRAINT "content_with_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "content_with_image_locales" ADD CONSTRAINT "content_with_image_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."content_with_image"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_block" ADD CONSTRAINT "media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "counter_items" ADD CONSTRAINT "counter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."counter"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "counter_translations_tr_items" ADD CONSTRAINT "counter_translations_tr_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."counter"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "privacy_policy_updated_at_idx" ON "privacy_policy" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "privacy_policy_created_at_idx" ON "privacy_policy" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "sliders_slides_order_idx" ON "sliders_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "sliders_slides_parent_id_idx" ON "sliders_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "sliders_slides_image_idx" ON "sliders_slides" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "sliders_translations_tr_slides_order_idx" ON "sliders_translations_tr_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "sliders_translations_tr_slides_parent_id_idx" ON "sliders_translations_tr_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "sliders_updated_at_idx" ON "sliders" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "sliders_created_at_idx" ON "sliders" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "partners_logo_idx" ON "partners" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "partners_updated_at_idx" ON "partners" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "partners_created_at_idx" ON "partners" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "content_with_image_image_idx" ON "content_with_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "content_with_image_updated_at_idx" ON "content_with_image" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "content_with_image_created_at_idx" ON "content_with_image" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "content_with_image_locales_locale_parent_id_unique" ON "content_with_image_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "media_block_media_idx" ON "media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "media_block_updated_at_idx" ON "media_block" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_block_created_at_idx" ON "media_block" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "counter_items_order_idx" ON "counter_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "counter_items_parent_id_idx" ON "counter_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "counter_translations_tr_items_order_idx" ON "counter_translations_tr_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "counter_translations_tr_items_parent_id_idx" ON "counter_translations_tr_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "counter_updated_at_idx" ON "counter" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "counter_created_at_idx" ON "counter" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_privacy_policy_fk" FOREIGN KEY ("privacy_policy_id") REFERENCES "public"."privacy_policy"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_sliders_fk" FOREIGN KEY ("sliders_id") REFERENCES "public"."sliders"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_partners_fk" FOREIGN KEY ("partners_id") REFERENCES "public"."partners"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_content_with_image_fk" FOREIGN KEY ("content_with_image_id") REFERENCES "public"."content_with_image"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_block_fk" FOREIGN KEY ("media_block_id") REFERENCES "public"."media_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_counter_fk" FOREIGN KEY ("counter_id") REFERENCES "public"."counter"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_privacy_policy_id_idx" ON "payload_locked_documents_rels" USING btree ("privacy_policy_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_sliders_id_idx" ON "payload_locked_documents_rels" USING btree ("sliders_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_partners_id_idx" ON "payload_locked_documents_rels" USING btree ("partners_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_content_with_image_id_idx" ON "payload_locked_documents_rels" USING btree ("content_with_image_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_block_id_idx" ON "payload_locked_documents_rels" USING btree ("media_block_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_counter_id_idx" ON "payload_locked_documents_rels" USING btree ("counter_id");
  ALTER TABLE "users" DROP COLUMN IF EXISTS "name";
  ALTER TABLE "public"."content_with_image_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  DROP TYPE "public"."_locales";
  CREATE TYPE "public"."_locales" AS ENUM('tr', 'en');
  ALTER TABLE "public"."content_with_image_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  DROP TYPE "public"."enum_homepage_blocks_content_with_image_block_position";
  DROP TYPE "public"."enum_homepage_blocks_icon_list_block_items_icon";`)
}
