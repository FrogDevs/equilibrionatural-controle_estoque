<script setup>
const props = defineProps({
  subtitle: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="flex flex-col">
    <hr class="my-2 h-px border-none bg-neutral-100" />
    <p
      :class="props.subtitle ? 'block' : 'hidden'"
      class="mx-4 mt-2 mb-3 text-sm font-medium text-amber-800"
    >
      {{ props.subtitle }}
    </p>
  </div>
</template>
