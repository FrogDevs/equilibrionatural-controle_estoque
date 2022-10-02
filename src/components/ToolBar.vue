<script setup>
import router from '../router'

function back() {
  router.go(-1)
}
</script>
<template>
  <nav class="flex justify-between bg-green-100 p-4">
    <i
      class="material-symbols-rounded rounded-full bg-opacity-80 p-1 text-neutral-700 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 active:bg-green-300 active:bg-opacity-70"
      @click="back"
    >
      arrow_back
    </i>
  </nav>
</template>
