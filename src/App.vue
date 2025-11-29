<template>
  <main class="container">
    <h1>Avatarverse</h1>
    <!-- Controles (identificador, tema etc.) -->
    <!-- Canvas SVG -->
    <div ref="svgHost" class="svg-host"></div>
  </main>
</template>

<script setup>
// Exemplo de integração simples do svg.js
import { onMounted, ref } from 'vue'
import { SVG } from '@svgdotjs/svg.js'
import widget from './widget/widget.js' // sua função de desenho

const svgHost = ref(null)

onMounted(() => {
  const draw = SVG().addTo(svgHost.value).size(600, 600)
  const key = { // mock simples; no seu projeto real vem do identificador
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

<style></style>./components/topbar.vue