<script setup>
const emit = defineEmits(['closeDialogue', 'primaryAction'])

const props = defineProps({
  dialogueIcon: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  buttonOneTitle: {
    type: String,
    default: ''
  },
  buttonTwoTitle: {
    type: String,
    default: ''
  },
  productId: {
    type: Number,
    default: null
  },
  category: {
    type: String,
    default: ''
  }
})

function closeDialogue() {
  emit('closeDialogue')
}

function primaryAction() {
  emit('primaryAction')
}
</script>
<template>
  <div
    class="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-neutral-900 bg-opacity-20 p-6"
  >
    <div
      class="flex h-fit w-[19.5rem] max-w-[19.5rem] flex-col rounded-[1.75rem] bg-green-50 shadow-lg"
    >
      <div
        :class="props.dialogueIcon ? 'items-center' : 'itens-start'"
        class="flex w-full flex-col gap-4 p-6"
      >
        <i v-if="props.dialogueIcon" class="material-symbols-rounded">
          signal_wifi_off
        </i>
        <h2 class="text-center text-2xl text-neutral-800">{{ props.title }}</h2>
        <p class="text-sm">{{ props.message }}</p>
      </div>
      <div class="flex w-full justify-end gap-8 py-[2.125rem] px-9">
        <p
          class="font-medium text-green-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-opacity-80 active:text-opacity-70"
          @click="closeDialogue"
        >
          {{ props.buttonOneTitle }}
        </p>
        <p
          class="font-medium text-green-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-opacity-80 active:text-opacity-70"
          @click="primaryAction"
        >
          {{ props.buttonTwoTitle }}
        </p>
      </div>
    </div>
  </div>
</template>
