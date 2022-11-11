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
    class="elevation-1 hover:elevation-2 flex w-28 cursor-pointer justify-center rounded-full bg-primary py-2.5 px-6 transition-colors duration-200 ease-in-out hover:bg-[#854105] focus:bg-[#743905] focus:outline-none active:bg-[#743905]"
  >
    <p class="text-normal text-sm text-onPrimary">{{ props.title }}</p>
  </button>
</template>
