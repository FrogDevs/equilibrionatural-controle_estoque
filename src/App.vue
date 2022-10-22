<script setup>
import { ref, computed } from 'vue'
import TheDialogue from './components/TheDialogue.vue'

const online = ref(window.navigator.onLine)

const wifiState = computed(() => {
  if (online.value) {
    return false
  } else {
    return true
  }
})

function reloadPage() {
  window.location.reload()
}
</script>
<template>
  <!-- <the-dialogue
    v-if="wifiState"
    :dialogue-icon="true"
    title="Sem conexão Wifi"
    message="Parece que você está sem conexão com uma rede Wifi. Dados importantes podem não aparecer e funções do sistema não funcionarem da maneira esperada. Certifique-se de estabelecer uma conexão válida."
    button-two-title="Reconectar"
    @primary-action="reloadPage"
  /> -->
  <router-view />
</template>
