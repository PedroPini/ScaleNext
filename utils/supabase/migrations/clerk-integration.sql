SELECT NULLIF(
    current_setting('request.jwt.claims', true)::json->>'sub',
    ''
)::text;