<template>
  <div v-show="visible" class="cookie-banner" role="dialog" aria-label="Consentimento de cookies">
    <div class="cookie-banner__inner">
      <p class="cookie-banner__text">
        Usamos cookies essenciais para melhorar sua experiência. Ao continuar, você concorda com nossa
        <a
          href="https://repense.com.br/termos-de-uso-e-politica-de-privacidade"
          target="_blank"
          rel="noopener">
          Política de Privacidade
        </a>.
      </p>
      <div class="cookie-banner__actions">
        <button type="button" class="btn btn--ghost-light" @click="reject">
          Recusar
        </button>
        <button type="button" class="btn btn--brand" @click="accept">
          Aceitar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCookies } from '@/composables/useCookies'

const { visible, accept, reject } = useCookies()
</script>
