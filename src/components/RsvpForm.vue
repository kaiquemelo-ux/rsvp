<template>
  <form id="rsvp-form" class="rsvp-form" novalidate @submit.prevent="$emit('submit')">
    <div class="form-field">
      <label for="nome">Nome completo</label>
      <input
        id="nome"
        :value="nome"
        type="text"
        name="nome"
        autocomplete="name"
        placeholder="Seu nome"
        @input="$emit('update:nome', $event.target.value)" />
    </div>

    <div class="form-field">
      <label for="email">E-mail</label>
      <input
        id="email"
        :value="email"
        type="email"
        name="email"
        autocomplete="email"
        placeholder="nome@empresa.com"
        @input="$emit('email-input', $event)" />
    </div>

    <div class="form-field">
      <label for="telefone">Telefone</label>
      <input
        id="telefone"
        :value="telefone"
        type="tel"
        name="telefone"
        autocomplete="tel"
        placeholder="(11) 98765-4321"
        @input="$emit('phone-input', $event)" />
    </div>

    <button
      v-if="showSubmit"
      type="submit"
      class="btn btn--primary"
      :class="{ 'is-loading': loading }"
      :disabled="loading">
      {{ loading ? 'Enviando...' : 'Confirmar presença' }}
    </button>
  </form>
</template>

<script setup>
defineProps({
  nome: { type: String, default: '' },
  email: { type: String, default: '' },
  telefone: { type: String, default: '' },
  loading: { type: Boolean, default: false },
  showSubmit: { type: Boolean, default: true },
})

defineEmits(['submit', 'update:nome', 'update:email', 'update:telefone', 'email-input', 'phone-input'])
</script>
