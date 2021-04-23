alter table "public"."comments"
           add constraint "comments_todo_id_fkey"
           foreign key ("todo_id")
           references "public"."todo"
           ("id") on update restrict on delete restrict;
