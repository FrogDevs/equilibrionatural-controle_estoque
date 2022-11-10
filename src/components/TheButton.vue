<script setup>
const props = defineProps({
  title: {
    type: String,
    default: undefined
  }
})
</script>
<template>
  <button
    class="flex w-28 justify-center rounded-full bg-primary py-2.5 px-6 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-opacity-80 hover:shadow-md focus:bg-opacity-70 focus:outline-none active:bg-opacity-70"
  >
    <p class="text-normal text-sm text-onPrimary">{{ props.title }}</p>
  </button>
</template>
