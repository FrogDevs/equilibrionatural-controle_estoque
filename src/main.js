import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

import router from './router'
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})

// import { StatusBar } from '@capacitor/status-bar'
// StatusBar.setOverlaysWebView({ overlay: true })
// const hideStatusBar = async () => {
//   await StatusBar.hide()
// }
// hideStatusBar()
