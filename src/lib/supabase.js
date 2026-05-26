import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!url || !key) {
  console.warn(
    '[RSVP] Defina VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY em .env.local'
  )
}

export const supabase = createClient(url ?? '', key ?? '')

export const RSVP_TABLE =
  import.meta.env.VITE_SUPABASE_RSVP_TABLE || 'rsvp_confirmacoes'
