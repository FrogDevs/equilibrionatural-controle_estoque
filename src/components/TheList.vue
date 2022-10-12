<script setup>
const props = defineProps({
  title: {
    type: String,
    default: undefined
  }
})
</script>
<template>
  <router-link
    :to="{
      name: 'Search',
      params: { category: props.title }
    }"
    class="flex gap-2 p-3 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-neutral-100 active:bg-neutral-200"
  >
    <p class="font-medium text-amber-800">{{ props.title }}</p>
  </router-link>
</template>
