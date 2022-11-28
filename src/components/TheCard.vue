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
    class="elevation-1 hover:elevation-2 flex h-80 w-full cursor-pointer flex-col justify-end rounded-2xl border border-solid border-outline bg-secondaryContainer transition-all duration-200 ease-in-out hover:bg-[#ffd0b6] focus:rounded-3xl active:rounded-3xl active:bg-[#ffc5a5] md:w-80"
    :to="props.link"
    @focusin="roundedValue = 'rounded-t-3xl'"
    @focusout="roundedValue = 'rounded-2xl'"
  >
    <img
      :class="`${roundedValue}`"
      class="max-h-48 min-h-[12rem] w-full rounded-2xl object-cover transition-all duration-200 ease-in-out lg:h-96"
      :src="props.bg"
      :alt="props.title"
      loading="lazy"
    />
    <div class="flex h-32 w-full flex-col gap-2 overflow-x-auto p-5 lg:h-40">
      <h1 class="text-2xl text-onSecondaryContainer">
        {{ props.title }}
      </h1>
      <p class="text-sm text-onSurfaceVariant">
        {{ props.subtitle }}
      </p>
    </div>
  </router-link>
</template>
