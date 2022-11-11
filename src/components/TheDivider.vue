<script setup>
const props = defineProps({
  subtitle: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="flex w-full flex-col px-6">
    <hr class="mt-6 mb-4 h-px border-none bg-outlineVariant" />
    <p v-if="props.subtitle" class="mb-4 text-sm font-medium text-onBackground">
      {{ props.subtitle }}
    </p>
  </div>
</template>
