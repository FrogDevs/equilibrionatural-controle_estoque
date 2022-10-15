<script setup>
import { ref } from 'vue'
const state = ref(true)

function close() {
  state.value = !state.value
}
</script>
<template>
  <div
    v-auto-animate
    :class="state ? 'fixed' : 'hidden'"
    class="top-20 z-20 flex w-full justify-center lg:justify-end lg:px-4"
  >
    <div
      class="flex w-[21.5rem] justify-between rounded bg-green-800 px-4 py-3.5"
    >
      <p class="text-sm font-normal text-white">Produto salvo!</p>
      <p
        class="text-sm font-bold text-green-200 hover:cursor-pointer"
        @click="close"
      >
        Fechar
      </p>
    </div>
  </div>
</template>
