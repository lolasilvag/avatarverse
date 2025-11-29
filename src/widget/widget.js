//import { getColorIterator } from "./utils/colors/color.js"
//import sample from "./examples/widget00.js"

//function widget(key, draw) {
    
   // let nextColor = getColorIterator(key)

    //draw.rect().size(500,500).move(250,250).fill(nextColor())
    //draw.circle().size(350).move(400,325).fill(nextColor()).opacity(0.5)
    //draw.circle().size(350).move(250,325).fill(nextColor()).opacity(0.5)
    
    // Descomente linha abaixo para ver exemplo 0
    //sample(key,draw)
//}

//export default widget

// /src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'

createApp(App)
  .use(Quasar, { plugins: {} })
  .mount('#app')


import { getColorIterator } from "./utils/colors/color.js"
// import sample from "./examples/widget00.js"

export default function widget(key, draw) {
  // 1) Limpa o canvas (para re-renderizações)
  draw.clear()

  // 2) Define um viewport seguro (ajuste se preferir)
  const W = 600, H = 600
  draw.size(W, H)

  // 3) Iterador determinístico de cores com base na key
  const nextColor = getColorIterator(key)

  // 4) Desenho centralizado — retângulo 400x400, círculos 260
  const rectSize = 400
  const circleDia = 260

  // Retângulo central
  draw
    .rect(rectSize, rectSize)
    .center(W / 2, H / 2)          // posiciona pelo centro
    .fill(nextColor())

  // Dois círculos com leve deslocamento para compor o avatar
  draw
    .circle(circleDia)
    .center(W / 2 + 60, H / 2 - 20)
    .fill(nextColor())
    .opacity(0.6)

  draw
    .circle(circleDia)
    .center(W / 2 - 60, H / 2 + 20)
    .fill(nextColor())
    .opacity(0.6)

  // 5) (Opcional) Habilitar um exemplo pronto
  sample(key, draw)
}
