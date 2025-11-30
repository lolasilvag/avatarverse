<template>
  <main class="container">
    <h1>Avatarverse</h1>

    <!-- Canvas SVG -->
    <div ref="avatarverse" class="svg-host"></div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { SVG } from '@svgdotjs/svg.js'
import widget from './widget/widget.js'

const avatarverse = ref(null)

onMounted(() => {
  const draw = SVG().addTo(avatarverse.value).size(600, 600)

  // chave determinística simples (no app real, vem do identificador)
  const key = {
    _i: 0,
    next: () => (++key._i % 1000) + 1,
    next256: () => Math.floor(Math.random() * 256),
    next16: () => Math.floor(Math.random() * 16)
  }

  widget(key, draw)
})
</script>

<style scoped>
.container { max-width: 840px; margin: 0 auto; padding: 24px; }
.svg-host { border: 1px solid #e0e0e0; border-radius: 8px; }
</style>
