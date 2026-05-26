<template>
  <div class="alert-toast-container" aria-live="polite" aria-atomic="true">
    <div
      v-for="alert in alerts"
      :key="alert.id"
      :class="['toast', `toast--${alert.type}`]"
      role="alert">
      <div class="toast__message" v-html="formatMessage(alert.message)" />
      <button
        type="button"
        class="toast__close"
        aria-label="Fechar"
        @click="dismiss(alert.id)">
        ×
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const { alerts, dismiss, escapeHtml } = inject('alerts')

function formatMessage(message) {
  return escapeHtml(message).replace(/\n/g, '<br>')
}
</script>
