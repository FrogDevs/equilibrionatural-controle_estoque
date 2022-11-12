<script setup>
import 'material-symbols'
import { ref } from 'vue'
import TheSnackBar from './components/TheSnackBar.vue'
import { Network } from '@capacitor/network'

const showWifiWarn = ref(!window.navigator.onLine)

Network.addListener('networkStatusChange', (status) => {
  if (status.connected) {
    showWifiWarn.value = false
  } else {
    showWifiWarn.value = true
  }
})
</script>
<template>
  <the-snack-bar v-if="showWifiWarn" />
  <router-view />
</template>
