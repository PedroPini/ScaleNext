import { useAuth } from '@clerk/nextjs'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseClient: SupabaseClient | null = null;

export function useClerkSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!
  const { getToken } = useAuth()

  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseKey, {
      global: {
        fetch: async (url, options = {}) => {
          const clerkToken = await getToken({ template: 'supabase' })
          const headers = new Headers(options?.headers)
          headers.set('Authorization', `Bearer ${clerkToken}`)
          return fetch(url, {
            ...options,
            headers,
          })
        },
      },
    });
  }

  return supabaseClient;
}
