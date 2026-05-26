import { supabase, RSVP_TABLE } from '@/lib/supabase'

const DUPLICATE_ERROR = '23505'

/**
 * Salva confirmação de presença no Supabase.
 * @returns {{ ok: true }} | {{ ok: false, alreadyConfirmed: true }} | {{ ok: false, message: string }}
 */
export async function saveRsvpConfirmation(fields) {
  const { error } = await supabase.from(RSVP_TABLE).insert({
    nome: fields.nome,
    email: fields.email,
    telefone: fields.telefone,
    utm_source: fields.utm_source || null,
    utm_medium: fields.utm_medium || null,
    utm_campaign: fields.utm_campaign || null,
    utm_term: fields.utm_term || null,
    utm_content: fields.utm_content || null,
    gclid: fields.gclid || null,
    fbclid: fields.fbclid || null,
    page_url: fields.page_url || null,
    referrer: fields.referrer || null,
    user_agent: fields.user_agent || null,
  })

  if (!error) {
    return { ok: true }
  }

  if (error.code === DUPLICATE_ERROR) {
    return { ok: false, alreadyConfirmed: true }
  }

  return {
    ok: false,
    message: error.message || 'Falha ao salvar. Tente novamente.',
  }
}
