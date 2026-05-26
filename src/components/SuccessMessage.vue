<template>
  <div
    v-show="show"
    ref="rootEl"
    class="success-card"
    :class="{ 'is-visible': isVisible, 'is-on-top': isVisible }"
    role="status"
    aria-live="polite">
    <div class="success-card__icon" aria-hidden="true">✓</div>
    <h3 class="success-card__title">Presença confirmada!</h3>
    <p class="success-card__text">
      Obrigado por confirmar. Nos vemos na segunda-feira — vai ser imperdível.
    </p>
    <div class="success-card__actions">
      <a
        :href="calendarLinks.google"
        target="_blank"
        rel="noopener"
        class="btn btn--brand">
        Google Calendar
      </a>
      <a
        :href="calendarLinks.outlook"
        target="_blank"
        rel="noopener"
        class="btn btn--ghost-light">
        Outlook
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { calendarLinks } from '@/data/event'

defineProps({
  show: { type: Boolean, default: false },
  isVisible: { type: Boolean, default: false },
})

const rootEl = ref(null)
defineExpose({ rootEl })
</script>
