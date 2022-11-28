import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@fontsource/roboto'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

import router from './router'
app.use(router)

import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
app.component('Datepicker', Datepicker)

router.isReady().then(() => {
  app.mount('#app')
})

import { StatusBar } from '@capacitor/status-bar'
StatusBar.setOverlaysWebView({ overlay: true })
const hideStatusBar = async () => {
  await StatusBar.hide()
}
hideStatusBar()
