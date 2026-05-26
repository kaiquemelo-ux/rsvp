<template>
  <header class="hero">
    <div class="hero__media">
      <img :src="bannerDesktop" class="hero__img hero__img--desktop" alt="Repense Olhares sobre o Futuro" fetchpriority="high" />
      <img :src="bannerMobile" class="hero__img hero__img--mobile" alt="Repense Olhares sobre o Futuro" @error="$event.target.src = bannerDesktop" />
    </div>

    <div class="hero__content">
      <div class="container">
        <div class="hero__inner">
          <div class="hero__copy">
            <span class="hero__badge">
              <span class="hero__badge-dot" aria-hidden="true" />
              {{ hero.badge }}
            </span>
            <h1 class="hero__title">
              {{ hero.title }}<br />
              <em>{{ hero.titleEmphasis }}</em>
            </h1>
            <p class="hero__speakers text-[#e40c79]" v-html="speakersFormatted" />
          </div>

          <div class="hero__meta">
            <div class="hero__date" aria-label="Data do evento">
              <span class="hero__date-day">{{ hero.date }}</span>
              <span class="hero__date-label">{{ hero.weekday }}</span>
            </div>
            <a href="#rsvp" class="hero__cta">
              Confirmar presença
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { hero } from '@/data/event';

const base = import.meta.env.BASE_URL;
const bannerDesktop = `${base}img/banner_principal.png`;
const bannerMobile = `${base}img/banner_mobile_v1.png`;

const speakersFormatted = computed(() => {
  const names = hero.speakers.map((s) => `<strong>${s.name}</strong>`).join(', ');
  return `Com ${names} — conversa sobre MMM, DRTV e mensuração estratégica.`;
});
</script>
