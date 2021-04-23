ALTER TABLE "public"."comments" ADD COLUMN "created_at" timestamptz NULL DEFAULT now();
