<template>
  <footer class="site-footer">
    <p>
      © {{ year }} Repense ·
      <a href="https://repense.com.br" target="_blank" rel="noopener">repense.com.br</a>
    </p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
