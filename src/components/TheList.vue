<script setup>
const props = defineProps({
  title: {
    type: String,
    default: undefined
  }
})
</script>
<template>
  <div
    class="flex gap-2 rounded-xl py-3.5 px-4 shadow-sm transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-neutral-100 active:bg-neutral-200"
  >
    <p class="font-medium text-amber-800">{{ props.title }}</p>
  </div>
</template>
