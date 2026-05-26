export function pushDataLayer(eventName, payload = {}) {
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: eventName, ...payload })
  } catch {
    /* silencioso */
  }
}

export function useGtm() {
  const formMeta = { form_id: 'rsvp-form', form_name: 'RSVP Repense' }

  return {
    trackAttempt: () => pushDataLayer('form_submit_attempt', formMeta),
    trackInvalid: () => pushDataLayer('form_submit_invalid', formMeta),
    trackSuccess: () => pushDataLayer('form_submit_success', formMeta),
    trackDuplicate: () => pushDataLayer('form_submit_duplicate', formMeta),
    trackError: (message) => pushDataLayer('form_submit_error', { ...formMeta, message }),
  }
}
