import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
// Replace these with your actual Supabase credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials. Check .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Export commonly used functions for easier imports
export const auth = supabase.auth
export const database = supabase
