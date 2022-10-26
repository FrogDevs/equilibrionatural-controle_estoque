<script setup>
import { ref } from 'vue'
import TheDialogue from './components/TheDialogue.vue'
import { Network } from '@capacitor/network'

const showWifiWarn = ref(!window.navigator.onLine)

Network.addListener('networkStatusChange', (status) => {
  if (status.connected) {
    showWifiWarn.value = false
  } else {
    showWifiWarn.value = true
  }
})

function reloadPage() {
  window.location.reload()
}
</script>
<template>
  <the-dialogue
    v-if="showWifiWarn"
    :dialogue-icon="true"
    title="Sem conexão Wifi"
    message="Parece que você está sem conexão com uma rede Wifi. Dados importantes podem não aparecer e funções do sistema não funcionarem da maneira esperada. Certifique-se de estabelecer uma conexão válida."
    button-two-title="Reconectar"
    @primary-action="reloadPage"
  />
  <router-view />
</template>
