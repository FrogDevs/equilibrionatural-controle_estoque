<script setup>
import { computed } from 'vue'
import router from '../router'

function back() {
  router.go(-1)
}

const props = defineProps({
  market: {
    type: String,
    default: ''
  }
})

const title = computed(() => {
  if (props.market === 'unidade1') {
    return 'Unidade 1'
  } else {
    return 'Unidade 2'
  }
})
</script>
<template>
  <nav class="relative flex h-16 items-center bg-green-100">
    <i
      class="material-symbols-rounded absolute z-20 ml-2 rounded-full bg-opacity-80 p-2 text-amber-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 active:bg-green-300 active:bg-opacity-70"
      @click="back"
    >
      arrow_back
    </i>
    <p class="absolute flex w-full justify-center text-amber-800">
      {{ title }}
    </p>
  </nav>
</template>
