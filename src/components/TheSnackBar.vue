<script setup>
import { ref } from 'vue'
const visable = ref(true)
</script>
<template>
  <div
    :class="visable ? 'flex' : 'hidden'"
    class="fixed top-20 z-50 h-full w-full items-center justify-center px-2 lg:items-start lg:justify-end"
  >
    <div
      class="elevation-3 flex h-fit flex-col items-end rounded-md bg-onSurface px-2"
    >
      <p class="w-full px-[0.875rem] pt-3 pb-[0.125rem] text-sm text-surface">
        Sem conexão Wifi, salvamento remoto ativado.
      </p>
      <div class="py-[0.625rem] px-3">
        <p
          class="cursor-pointer text-sm font-medium text-[#ffb687] transition-all duration-200 ease-in-out hover:text-[#ffac76] active:text-[#ffa165]"
          @click="visable = false"
        >
          Entendi
        </p>
      </div>
    </div>
  </div>
</template>
