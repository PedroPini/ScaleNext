-- Configure RLS (Row Level Security)
create or replace function requesting_user_id() returns text as $$
  select nullif(current_setting('request.jwt.claims', true)::json->>'sub', '')::text;
$$ language sql stable;

-- Create Policy
CREATE POLICY "Authenticated users can update their own todos"
ON public.todos FOR UPDATE
USING (
    auth.role() = 'authenticated'::text
)
WITH CHECK (
    requesting_user_id() = user_id
);