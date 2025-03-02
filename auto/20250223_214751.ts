import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'tr');
  CREATE TYPE "public"."enum_homepage_blocks_content_with_image_block_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_homepage_blocks_media_block_media_width" AS ENUM('full', 'auto');
  CREATE TYPE "public"."enum_homepage_blocks_icon_list_block_items_icon" AS ENUM('GiWorld', 'CiDiscount1', 'GiWaterRecycling', 'LuFootprints', 'IoQrCodeOutline', 'GiConversation');
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
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
  	"description" jsonb,
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
  	"media_width" "enum_homepage_blocks_media_block_media_width" DEFAULT 'auto',
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
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
  
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
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
  CREATE INDEX IF NOT EXISTS "homepage_blocks_icon_list_block_path_idx" ON "homepage_blocks_icon_list_block" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
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
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_homepage_blocks_content_with_image_block_position";
  DROP TYPE "public"."enum_homepage_blocks_media_block_media_width";
  DROP TYPE "public"."enum_homepage_blocks_icon_list_block_items_icon";`)
}
