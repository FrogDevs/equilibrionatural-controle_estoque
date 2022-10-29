<script setup>
import { ref } from 'vue'

const roundedValue = ref('rounded-xl')

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
    class="mt-6 flex h-80 w-80 flex-col justify-end rounded-2xl border border-solid border-neutral-300 transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-neutral-100 focus:rounded-3xl active:rounded-3xl active:bg-neutral-200"
    :to="props.link"
    @focusin="roundedValue = 'rounded-t-3xl'"
    @focusout="roundedValue = 'rounded-xl'"
  >
    <img
      :class="`${roundedValue}`"
      class="h-48 w-full rounded-2xl bg-cover bg-center transition-all duration-200 ease-in-out lg:h-96"
      :src="props.bg"
      :alt="props.title"
      loading="lazy"
    />
    <div class="flex h-32 w-full flex-col gap-2 p-5 lg:h-40">
      <h1 class="text-2xl text-amber-900">{{ props.title }}</h1>
      <p class="text-sm text-amber-800">{{ props.subtitle }}</p>
    </div>
  </router-link>
</template>
