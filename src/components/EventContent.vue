<template>
  <section class="section section--alt" aria-labelledby="about-heading">
    <div class="container">
      <p class="section__eyebrow">Sobre o evento</p>
      <h2 id="about-heading" class="section__title">Uma conversa para quem já passou da fase de “precisamos mensurar melhor”</h2>

      <article v-for="(section, index) in contentSections" :key="index" class="content-block">
        <h3 :class="['content-block__title', { 'content-block__title--intro': section.type === 'intro' }]">
          {{ section.title }}
        </h3>

        <p v-for="(paragraph, i) in section.paragraphs" :key="`p-${i}`" class="content-block__text">
          {{ paragraph }}
        </p>

        <template v-if="section.speakers">
          <div v-for="(speaker, si) in section.speakers" :key="`speaker-${si}`" class="speaker-card">
            <h4 class="speaker-card__name">
              {{ speaker.name }}
              <span v-if="speaker.role" style="display: block; font-weight: 500; color: var(--color-ink-muted); font-size: var(--text-sm); margin-top: 0.25rem">
                {{ speaker.role }}
              </span>
            </h4>
            <p class="speaker-card__bio">{{ speaker.bio }}</p>
            <p v-if="speaker.closing" class="content-block__text" style="margin-top: 1rem; font-style: italic">
              {{ speaker.closing }}
            </p>
          </div>
        </template>
      </article>
    </div>
  </section>
</template>

<script setup>
import { contentSections } from '@/data/event';
</script>
