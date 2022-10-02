<script setup>
const props = defineProps({
  link: {
    type: String,
    default: undefined
  },
  bg: {
    type: String,
    default: undefined
  },
  title: {
    type: String,
    default: undefined
  },
  subtitle: {
    type: String,
    default: undefined
  }
})
</script>

<template>
  <router-link
    class="mt-6 flex w-full flex-col rounded-xl border border-solid border-neutral-300 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-neutral-100 active:bg-neutral-200 sm:w-80 md:h-80"
    :to="props.link"
  >
    <div :class="props.bg" class="h-44 w-full rounded-t-xl"></div>
    <div class="flex w-full flex-col gap-5 rounded-b-xl p-5">
      <h1 class="text-2xl text-amber-900">{{ props.title }}</h1>
      <p class="text-sm text-amber-800">{{ props.subtitle }}</p>
    </div>
  </router-link>
</template>
