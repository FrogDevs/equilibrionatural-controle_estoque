<script setup>
const emit = defineEmits(['secondAction', 'firstAction'])

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  firstAction: {
    type: String,
    default: ''
  },
  secondAction: {
    type: String,
    default: ''
  }
})

function secondAction() {
  emit('secondAction')
}

function firstAction() {
  emit('firstAction')
}
</script>
<template>
  <div
    class="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-scrim bg-opacity-25 p-6"
  >
    <div
      class="elevation-3 flex h-fit w-[19.5rem] max-w-[19.5rem] flex-col rounded-[1.75rem] bg-surface"
    >
      <div class="flex w-full flex-col items-start gap-4 p-6">
        <h2 class="text-start text-2xl text-onSurface">
          {{ props.title }}
        </h2>
        <p class="text-sm text-onSurfaceVariant">
          {{ props.subtitle }}
        </p>
      </div>
      <div class="flex w-full justify-end gap-8 py-[2.125rem] px-9">
        <p
          class="cursor-pointer font-medium text-primary transition-colors duration-200 ease-in-out hover:text-opacity-80 active:text-opacity-70"
          @click="secondAction"
        >
          {{ props.secondAction }}
        </p>
        <p
          class="cursor-pointer font-medium text-primary transition-colors duration-200 ease-in-out hover:text-opacity-80 active:text-opacity-70"
          @click="firstAction"
        >
          {{ props.firstAction }}
        </p>
      </div>
    </div>
  </div>
</template>
