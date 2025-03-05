import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_content_with_image_block_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_media_block_media_width" AS ENUM('full', 'auto');
  CREATE TYPE "public"."enum_pages_blocks_icon_list_block_items_icon" AS ENUM('GiWorld', 'CiDiscount1', 'GiWaterRecycling', 'LuFootprints', 'IoQrCodeOutline', 'GiConversation');
  CREATE TYPE "public"."enum_footer_content_social_platforms_name" AS ENUM('linkedin', 'facebook', 'instagram', 'twitter');
  CREATE TYPE "public"."enum_footer_content_newsletter_addresses_country" AS ENUM('germany', 'turkey');
  CREATE TABLE IF NOT EXISTS "pages_blocks_content_with_image_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb,
  	"image_id" integer NOT NULL,
  	"button_text" varchar,
  	"button_link" varchar,
  	"position" "enum_pages_blocks_content_with_image_block_position" DEFAULT 'left',
  	"block_options_title" varchar,
  	"block_options_description" varchar,
  	"block_options_hero_content" jsonb,
  	"block_options_footer_content" jsonb,
  	"block_options_inner_container" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_slider_block_sliders" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"button_text" varchar,
  	"button_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_slider_block_clients" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_slider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"media_width" "enum_pages_blocks_media_block_media_width" DEFAULT 'auto',
  	"block_options_title" varchar,
  	"block_options_description" varchar,
  	"block_options_hero_content" jsonb,
  	"block_options_footer_content" jsonb,
  	"block_options_inner_container" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_accordion_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_accordion_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"block_options_title" varchar,
  	"block_options_description" varchar,
  	"block_options_hero_content" jsonb,
  	"block_options_footer_content" jsonb,
  	"block_options_inner_container" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_icon_list_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_icon_list_block_items_icon" NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_icon_list_block" (
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
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"background_image_id" integer,
  	"show_in_menu" boolean DEFAULT false,
  	"menu_order" numeric DEFAULT 0,
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_locales" (
  	"title" varchar NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_content_company_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"is_active" boolean DEFAULT true,
  	"order" numeric DEFAULT 0
  );
  
  CREATE TABLE IF NOT EXISTS "footer_content_social_platforms" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" "enum_footer_content_social_platforms_name" NOT NULL,
  	"url" varchar NOT NULL,
  	"is_active" boolean DEFAULT true,
  	"order" numeric DEFAULT 0
  );
  
  CREATE TABLE IF NOT EXISTS "footer_content_newsletter_addresses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"country" "enum_footer_content_newsletter_addresses_country" NOT NULL,
  	"street" varchar NOT NULL,
  	"city" varchar NOT NULL,
  	"maps" varchar NOT NULL,
  	"order" numeric DEFAULT 0
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_company_title" varchar NOT NULL,
  	"content_legal_title" varchar NOT NULL,
  	"content_legal_terms_text" varchar NOT NULL,
  	"content_legal_terms_link" varchar DEFAULT '/terms-conditions' NOT NULL,
  	"content_legal_privacy_text" varchar NOT NULL,
  	"content_legal_privacy_link" varchar DEFAULT '/privacy-policy' NOT NULL,
  	"content_social_title" varchar NOT NULL,
  	"content_newsletter_title" varchar NOT NULL,
  	"content_newsletter_company" varchar NOT NULL,
  	"content_newsletter_email" varchar NOT NULL,
  	"content_newsletter_phone" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "footer_locales" (
  	"content_copyright" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "pages_id" integer;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_with_image_block" ADD CONSTRAINT "pages_blocks_content_with_image_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_with_image_block" ADD CONSTRAINT "pages_blocks_content_with_image_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_slider_block_sliders" ADD CONSTRAINT "pages_blocks_slider_block_sliders_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_slider_block_sliders" ADD CONSTRAINT "pages_blocks_slider_block_sliders_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_slider_block_clients" ADD CONSTRAINT "pages_blocks_slider_block_clients_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_slider_block_clients" ADD CONSTRAINT "pages_blocks_slider_block_clients_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_slider_block" ADD CONSTRAINT "pages_blocks_slider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_accordion_block_items" ADD CONSTRAINT "pages_blocks_accordion_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accordion_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_accordion_block" ADD CONSTRAINT "pages_blocks_accordion_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_accordion_block" ADD CONSTRAINT "pages_blocks_accordion_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_icon_list_block_items" ADD CONSTRAINT "pages_blocks_icon_list_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_icon_list_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_icon_list_block" ADD CONSTRAINT "pages_blocks_icon_list_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_content_company_links" ADD CONSTRAINT "footer_content_company_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_content_social_platforms" ADD CONSTRAINT "footer_content_social_platforms_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_content_newsletter_addresses" ADD CONSTRAINT "footer_content_newsletter_addresses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_locales" ADD CONSTRAINT "footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_with_image_block_order_idx" ON "pages_blocks_content_with_image_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_with_image_block_parent_id_idx" ON "pages_blocks_content_with_image_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_with_image_block_path_idx" ON "pages_blocks_content_with_image_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_with_image_block_locale_idx" ON "pages_blocks_content_with_image_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_with_image_block_image_idx" ON "pages_blocks_content_with_image_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_sliders_order_idx" ON "pages_blocks_slider_block_sliders" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_sliders_parent_id_idx" ON "pages_blocks_slider_block_sliders" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_sliders_locale_idx" ON "pages_blocks_slider_block_sliders" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_sliders_image_idx" ON "pages_blocks_slider_block_sliders" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_clients_order_idx" ON "pages_blocks_slider_block_clients" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_clients_parent_id_idx" ON "pages_blocks_slider_block_clients" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_clients_locale_idx" ON "pages_blocks_slider_block_clients" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_clients_image_idx" ON "pages_blocks_slider_block_clients" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_order_idx" ON "pages_blocks_slider_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_parent_id_idx" ON "pages_blocks_slider_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_path_idx" ON "pages_blocks_slider_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_slider_block_locale_idx" ON "pages_blocks_slider_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_locale_idx" ON "pages_blocks_media_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_items_order_idx" ON "pages_blocks_accordion_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_items_parent_id_idx" ON "pages_blocks_accordion_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_items_locale_idx" ON "pages_blocks_accordion_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_order_idx" ON "pages_blocks_accordion_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_parent_id_idx" ON "pages_blocks_accordion_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_path_idx" ON "pages_blocks_accordion_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_locale_idx" ON "pages_blocks_accordion_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_accordion_block_image_idx" ON "pages_blocks_accordion_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_list_block_items_order_idx" ON "pages_blocks_icon_list_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_list_block_items_parent_id_idx" ON "pages_blocks_icon_list_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_list_block_items_locale_idx" ON "pages_blocks_icon_list_block_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_list_block_order_idx" ON "pages_blocks_icon_list_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_list_block_parent_id_idx" ON "pages_blocks_icon_list_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_list_block_path_idx" ON "pages_blocks_icon_list_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_icon_list_block_locale_idx" ON "pages_blocks_icon_list_block" USING btree ("_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_background_image_idx" ON "pages" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_content_company_links_order_idx" ON "footer_content_company_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_content_company_links_parent_id_idx" ON "footer_content_company_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_content_company_links_locale_idx" ON "footer_content_company_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "footer_content_social_platforms_order_idx" ON "footer_content_social_platforms" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_content_social_platforms_parent_id_idx" ON "footer_content_social_platforms" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_content_social_platforms_locale_idx" ON "footer_content_social_platforms" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "footer_content_newsletter_addresses_order_idx" ON "footer_content_newsletter_addresses" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_content_newsletter_addresses_parent_id_idx" ON "footer_content_newsletter_addresses" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_content_newsletter_addresses_locale_idx" ON "footer_content_newsletter_addresses" USING btree ("_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_locales_locale_parent_id_unique" ON "footer_locales" USING btree ("_locale","_parent_id");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_content_with_image_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_slider_block_sliders" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_slider_block_clients" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_slider_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_accordion_block_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_accordion_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_icon_list_block_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_icon_list_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_content_company_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_content_social_platforms" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_content_newsletter_addresses" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_content_with_image_block" CASCADE;
  DROP TABLE "pages_blocks_slider_block_sliders" CASCADE;
  DROP TABLE "pages_blocks_slider_block_clients" CASCADE;
  DROP TABLE "pages_blocks_slider_block" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_accordion_block_items" CASCADE;
  DROP TABLE "pages_blocks_accordion_block" CASCADE;
  DROP TABLE "pages_blocks_icon_list_block_items" CASCADE;
  DROP TABLE "pages_blocks_icon_list_block" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "footer_content_company_links" CASCADE;
  DROP TABLE "footer_content_social_platforms" CASCADE;
  DROP TABLE "footer_content_newsletter_addresses" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_pages_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_pages_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "pages_id";
  DROP TYPE "public"."enum_pages_blocks_content_with_image_block_position";
  DROP TYPE "public"."enum_pages_blocks_media_block_media_width";
  DROP TYPE "public"."enum_pages_blocks_icon_list_block_items_icon";
  DROP TYPE "public"."enum_footer_content_social_platforms_name";
  DROP TYPE "public"."enum_footer_content_newsletter_addresses_country";`)
}
