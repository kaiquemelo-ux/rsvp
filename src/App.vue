<template>
  <div class="page">
    <GoogleTagManager />
    <SiteHero />
    <RsvpSection />
    <EventContent />
    <ProgramSchedule />
    <SiteFooter />
    <AlertToast />
    <CookieBanner />
  </div>
</template>

<script setup>
import { onMounted, provide } from 'vue'
import GoogleTagManager from './components/GoogleTagManager.vue'
import SiteHero from './components/SiteHero.vue'
import RsvpSection from './components/RsvpSection.vue'
import EventContent from './components/EventContent.vue'
import ProgramSchedule from './components/ProgramSchedule.vue'
import SiteFooter from './components/SiteFooter.vue'
import AlertToast from './components/AlertToast.vue'
import CookieBanner from './components/CookieBanner.vue'
import { useAlerts } from './composables/useAlerts'

provide('alerts', useAlerts())

onMounted(() => {
  const rdLoader = import.meta.env.VITE_RD_STATION_LOADER
  if (!rdLoader || document.getElementById('rd-station-loader')) return

  const script = document.createElement('script')
  script.id = 'rd-station-loader'
  script.type = 'text/javascript'
  script.async = true
  script.src = rdLoader
  document.body.appendChild(script)
})
</script>
