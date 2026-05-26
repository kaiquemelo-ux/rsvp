<template>
  <noscript>
    <iframe
      :src="`https://www.googletagmanager.com/ns.html?id=${gtmId}`"
      height="0"
      width="0"
      style="display: none; visibility: hidden" />
  </noscript>
</template>

<script setup>
import { onMounted } from 'vue'

const gtmId = import.meta.env.VITE_GTM_ID || 'GTM-WD7BF5HP'

onMounted(() => {
  if (document.getElementById('gtm-script')) return

  const w = window
  const d = document
  const l = 'dataLayer'
  w[l] = w[l] || []
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

  const script = d.createElement('script')
  script.id = 'gtm-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
  d.head.appendChild(script)
})
</script>
