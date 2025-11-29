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
import blob from "./utils/blob/blob.js"
import sample from "./examples/widget00.js"
//import { createBlob } from "./utils/blob/blob.js"
// import sample from "./examples/widget00.js"

export default function widget(key, draw) {
    draw.clear()
    const W = 600, H = 600
    draw.size(W, H)

    const nextColor = getColorIterator(key)

    
// Retângulo central
  draw
    .rect(400, 400)
    .center(W / 2, H / 2)
    .fill(nextColor())

  // Dois círculos sobrepostos
  draw
    .circle(220)
    .center(W / 2 + 60, H / 2 - 20)
    .fill(nextColor())
    .opacity(0.6)

  draw
    .circle(180)
    .center(W / 2 - 80, H / 2 + 40)
    .fill(nextColor())
    .opacity(0.5)

  // Ex.: ativar blob futuramente:
  // const b = blob(key.next())
  // b.fill(nextColor()).move(60, 60).size(480).addTo(draw)
    sample(key, draw)
}





