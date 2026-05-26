/** Parâmetros UTM — portado de teste/js/app.js */

export function getUTMParams() {
  const params = new URLSearchParams(window.location.search || '')
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
    gclid: params.get('gclid') || '',
    fbclid: params.get('fbclid') || '',
    page_url: window.location.href,
    referrer: document.referrer || '',
    user_agent: navigator.userAgent || '',
  }
}
