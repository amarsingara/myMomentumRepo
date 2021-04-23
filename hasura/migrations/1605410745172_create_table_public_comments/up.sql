CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."comments"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "comment" text NOT NULL, PRIMARY KEY ("id") );
