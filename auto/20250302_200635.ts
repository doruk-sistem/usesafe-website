import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
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
  
  CREATE TABLE IF NOT EXISTS "solutions_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_options_class_name" varchar,
  	"section_options_inner_container" boolean,
  	"section_options_section_id" varchar,
  	"section_options_button_text" varchar NOT NULL,
  	"block_name" varchar
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
  
  CREATE TABLE IF NOT EXISTS "solutions_blocks_background_video" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"video_src_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "solutions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "solutions_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "solutions_id" integer;
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
   ALTER TABLE "solutions_blocks_media_block" ADD CONSTRAINT "solutions_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
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
  
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_background_video" ADD CONSTRAINT "solutions_blocks_background_video_video_src_id_media_id_fk" FOREIGN KEY ("video_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_blocks_background_video" ADD CONSTRAINT "solutions_blocks_background_video_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_locales" ADD CONSTRAINT "solutions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
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
  CREATE INDEX IF NOT EXISTS "solutions_blocks_media_block_order_idx" ON "solutions_blocks_media_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_media_block_parent_id_idx" ON "solutions_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_media_block_path_idx" ON "solutions_blocks_media_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_media_block_locale_idx" ON "solutions_blocks_media_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_order_idx" ON "solutions_blocks_content_with_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_parent_id_idx" ON "solutions_blocks_content_with_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_path_idx" ON "solutions_blocks_content_with_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_locale_idx" ON "solutions_blocks_content_with_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_content_with_image_image_image_src_idx" ON "solutions_blocks_content_with_image" USING btree ("image_src_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_background_video_order_idx" ON "solutions_blocks_background_video" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_background_video_parent_id_idx" ON "solutions_blocks_background_video" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_background_video_path_idx" ON "solutions_blocks_background_video" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_background_video_locale_idx" ON "solutions_blocks_background_video" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "solutions_blocks_background_video_video_video_src_idx" ON "solutions_blocks_background_video" USING btree ("video_src_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "solutions_slug_idx" ON "solutions" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "solutions_updated_at_idx" ON "solutions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "solutions_created_at_idx" ON "solutions" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "solutions_locales_locale_parent_id_unique" ON "solutions_locales" USING btree ("_locale","_parent_id");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_solutions_id_idx" ON "payload_locked_documents_rels" USING btree ("solutions_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "solutions_blocks_page_title" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_blocks_media_block_media_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_blocks_media_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_blocks_content_with_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_blocks_background_video" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "solutions_blocks_page_title" CASCADE;
  DROP TABLE "solutions_blocks_media_block_media_items" CASCADE;
  DROP TABLE "solutions_blocks_media_block" CASCADE;
  DROP TABLE "solutions_blocks_content_with_image" CASCADE;
  DROP TABLE "solutions_blocks_background_video" CASCADE;
  DROP TABLE "solutions" CASCADE;
  DROP TABLE "solutions_locales" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_solutions_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_solutions_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "solutions_id";
  DROP TYPE "public"."enum_solutions_blocks_content_with_image_image_position";`)
}
