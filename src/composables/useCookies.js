import { ref, onMounted } from 'vue'

const CONSENT_KEY = 'cookie_consent'

function setCookie(name, value, days) {
  const d = new Date()
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`
}

function getCookie(name) {
  const cname = `${name}=`
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim()
    if (c.indexOf(cname) === 0) return c.substring(cname.length)
  }
  return ''
}

export function useCookies() {
  const visible = ref(false)

  onMounted(() => {
    const consent = getCookie(CONSENT_KEY)
    if (!consent || consent === 'rejected') {
      visible.value = true
    }
  })

  function accept() {
    setCookie(CONSENT_KEY, 'accepted', 365)
    visible.value = false
  }

  function reject() {
    setCookie(CONSENT_KEY, 'rejected', 365)
    visible.value = false
  }

  return { visible, accept, reject }
}
