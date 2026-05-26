<template>
  <section id="rsvp" class="rsvp-section">
    <div class="container container--narrow">
      <div class="rsvp-card">
        <header v-if="!showSuccess" class="rsvp-card__header">
          <h2 class="rsvp-card__title">Confirme sua presença</h2>
          <p class="rsvp-card__subtitle">
            Preencha o formulário abaixo. Você receberá a confirmação por e-mail.
          </p>
        </header>

        <RsvpForm
          v-if="!showSuccess"
          :nome="nome"
          :email="email"
          :telefone="telefone"
          :loading="loading"
          :show-submit="showSubmit"
          @update:nome="nome = $event"
          @email-input="onEmailInput"
          @phone-input="onPhoneInput"
          @submit="submit" />

        <SuccessMessage
          ref="successRef"
          :show="showSuccess"
          :is-visible="successVisible" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import RsvpForm from './RsvpForm.vue'
import SuccessMessage from './SuccessMessage.vue'
import { useRsvpForm } from '@/composables/useRsvpForm'

const successRef = ref(null)

const {
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
} = useRsvpForm(successRef)
</script>
