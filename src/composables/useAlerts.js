import { ref } from 'vue'

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  )
}

let idCounter = 0

export function useAlerts() {
  const alerts = ref([])

  function showAlert(message, type = 'danger') {
    const id = ++idCounter
    alerts.value.push({ id, message, type, visible: true })
    setTimeout(() => dismiss(id), 5000)
  }

  function dismiss(id) {
    const item = alerts.value.find((a) => a.id === id)
    if (item) item.visible = false
    setTimeout(() => {
      alerts.value = alerts.value.filter((a) => a.id !== id)
    }, 150)
  }

  function showDuplicateAlert() {
    showAlert('Este email já está confirmado na lista.', 'warning')
  }

  return { alerts, showAlert, dismiss, showDuplicateAlert, escapeHtml }
}
