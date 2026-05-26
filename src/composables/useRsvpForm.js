import { ref, nextTick } from 'vue'
import { getUTMParams } from '@/utils/utm'
import { validateRsvpForm } from '@/utils/validation'
import { applyPhoneMask } from '@/utils/phone'
import { inject } from 'vue'
import { useGtm } from './useGtm'
import { useAlerts } from './useAlerts'
import { saveRsvpConfirmation } from '@/services/rsvp'

const MIN_LOADING_MS = 500
const RELOAD_AFTER_MS = 12000

export function useRsvpForm(successRef) {
  const nome = ref('')
  const email = ref('')
  const telefone = ref('')
  const loading = ref(false)
  const showSubmit = ref(true)
  const showSuccess = ref(false)
  const successVisible = ref(false)

  const gtm = useGtm()
  const alertsApi = inject('alerts', null) ?? useAlerts()
  const { showAlert, showDuplicateAlert } = alertsApi

  function onEmailInput(event) {
    const normalized = event.target.value.replace(/\s+/g, '').toLowerCase()
    email.value = normalized
    event.target.value = normalized
  }

  function onPhoneInput(event) {
    applyPhoneMask(event.target)
    telefone.value = event.target.value
  }

  async function submit() {
    gtm.trackAttempt()

    const result = validateRsvpForm({
      nome: nome.value,
      email: email.value,
      telefone: telefone.value,
    })

    if (!result.valid) {
      showAlert(result.message, 'warning')
      gtm.trackInvalid()
      return
    }

    loading.value = true
    const startTime = Date.now()
    const utm = getUTMParams()

    try {
      const saveResult = await saveRsvpConfirmation({
        nome: nome.value.trim(),
        email: email.value.trim(),
        telefone: result.telDigits,
        ...utm,
      })

      const elapsed = Date.now() - startTime
      if (elapsed < MIN_LOADING_MS) {
        await new Promise((r) => setTimeout(r, MIN_LOADING_MS - elapsed))
      }

      if (saveResult.ok) {
        gtm.trackSuccess()
        nome.value = ''
        email.value = ''
        telefone.value = ''
        showSubmit.value = false
        showSuccess.value = true
        document.body.classList.add('overlay-active')

        await nextTick()
        successVisible.value = true

        const comp = successRef.value
        const el = comp?.rootEl ?? comp?.$el ?? comp
        if (el?.scrollIntoView) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }

        setTimeout(() => {
          document.body.classList.remove('overlay-active')
          window.location.reload()
        }, RELOAD_AFTER_MS)
      } else if (saveResult.alreadyConfirmed) {
        showDuplicateAlert()
        gtm.trackDuplicate()
      } else {
        const msg = saveResult.message || 'Falha ao salvar. Tente novamente.'
        showAlert(msg, 'danger')
        gtm.trackError(msg)
      }
    } catch (err) {
      const elapsed = Date.now() - startTime
      if (elapsed < MIN_LOADING_MS) {
        await new Promise((r) => setTimeout(r, MIN_LOADING_MS - elapsed))
      }
      const msg =
        err?.message === 'Failed to fetch'
          ? 'Erro de comunicação com o servidor.'
          : err?.message || 'Erro de comunicação com o servidor.'
      showAlert(msg, 'danger')
      gtm.trackError(msg)
    } finally {
      loading.value = false
    }
  }

  return {
    nome,
    email,
    telefone,
    loading,
    showSubmit,
    showSuccess,
    successVisible,
    onEmailInput,
    onPhoneInput,
    submit,
  }
}
