<script setup>
const props = defineProps({
  user: {
    type: String,
    default: ''
  },
  market: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  bgPicture: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <router-link
    :to="`/${props.user}/${props.market}/search/${props.title}`"
    class="flex items-center justify-between gap-2 py-2 px-3 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-neutral-100 active:bg-neutral-200 lg:py-3"
  >
    <p class="w-64 font-medium text-amber-800">{{ props.title }}</p>
    <div
      :class="props.bgPicture"
      class="h-12 w-full rounded-lg bg-cover bg-center bg-no-repeat lg:hidden"
    ></div>
  </router-link>
</template>
