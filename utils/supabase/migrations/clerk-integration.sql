SELECT NULLIF(
    current_setting('request.jwt.claims', true)::json->>'sub',
    ''
)::text;


-- Create a 'tasks' table
create table tasks(
  id serial primary key,
  name text not null,
  user_id text not null default requesting_user_id()
);

-- Enable RLS on the table
ALTER TABLE "tasks" ENABLE ROW LEVEL SECURITY;


-- This policy will enforce that only tasks where the `user_id` matches the Clerk user ID are returned.
CREATE POLICY "Select tasks policy" ON "public"."tasks"
AS PERMISSIVE FOR SELECT
TO authenticated
USING (requesting_user_id() = user_id)

-- This policy will enforce the `user_id` field on INSERT statements matches the Clerk user ID.
CREATE POLICY "Insert tasks policy" ON "public"."tasks"
AS PERMISSIVE FOR INSERT
TO authenticated
WITH CHECK (requesting_user_id() = user_id)

-- This policy will enforce that only tasks where the `user_id` matches the Clerk user ID are deleted.
CREATE POLICY "Delete tasks policy" ON "public"."tasks"
AS PERMISSIVE FOR DELETE
TO authenticated
USING (requesting_user_id() = user_id)