<template>
  <section class="section" aria-labelledby="schedule-heading">
    <div class="container">
      <div class="schedule__header">
        <p class="section__eyebrow">Programação</p>
        <h2 id="schedule-heading" class="section__title">O que acontece no evento</h2>
        <p class="section__lead">
          Uma noite de conteúdo, networking e lançamentos — das 18h às 22h30.
        </p>
        <div class="schedule__brand">
          <img :src="programacaoImg" alt="Programação" />
        </div>
      </div>

      <div class="schedule">
        <article
          v-for="(item, index) in schedule"
          :key="index"
          class="schedule-item">
          <time class="schedule-item__time" :datetime="`${item.timeStart}-${item.timeEnd}`">
            {{ item.timeStart }}<br />às {{ item.timeEnd }}
          </time>
          <div class="schedule-item__body">
            <h3 class="schedule-item__title">{{ item.title }}</h3>
            <p v-if="item.subtitle" class="schedule-item__subtitle">{{ item.subtitle }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { schedule } from '@/data/event'

const programacaoImg = `${import.meta.env.BASE_URL}img/programacao.svg`
</script>
