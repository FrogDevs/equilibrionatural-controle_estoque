<script setup>
import { ref } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  inputError: {
    type: String,
    default: 'text'
  }
})

const inputFocus = ref(false)
const inputError = ref(false)
const titleClass = ref('text-neutral-400')

// Setters
function clear() {
  const input = document.querySelector('input')
  input.value = ''
  inputError.value = true
}

function setFocus() {
  inputFocus.value = !inputFocus.value
  if (inputFocus.value && !inputError.value) {
    titleClass.value = 'text-amber-700'
  } else if (inputError.value) {
    titleClass.value = 'text-red-700'
  } else {
    titleClass.value = 'text-neutral-400'
  }
}

function setError() {
  const input = document.querySelector('input')
  if (!input.value) {
    inputError.value = true
    titleClass.value = 'text-red-800'
  } else {
    inputError.value = false
    titleClass.value = 'text-amber-700'
  }
}

// Watcher
const watchInput = computed(() => {
  if (inputFocus.value && !inputError.value) {
    return 'border-2 border-amber-700'
  } else if (inputError.value) {
    return 'border-2 border-red-800'
  } else {
    return 'border border-neutral-400'
  }
})
</script>

<template>
  <label class="relative flex w-full flex-col">
    <div
      :class="watchInput"
      class="flex h-14 flex-row items-center justify-between rounded border-solid py-2 px-4 transition-colors duration-200 ease-in-out"
    >
      <div class="flex w-full flex-col">
        <div
          class="absolute top-[-0.5rem] flex items-center justify-center bg-white px-1"
        >
          <p :class="titleClass" class="text-xs font-normal">
            {{ props.title }}
          </p>
        </div>
        <input
          class="w-full bg-transparent text-amber-700 focus:outline-none"
          :type="props.inputError"
          required
          @focusin="setFocus"
          @focusout="setFocus"
          @input="setError"
        />
      </div>
      <i
        v-if="!inputError"
        class="material-symbols-rounded text-amber-700 hover:cursor-pointer"
        @click="clear"
      >
        cancel
      </i>
      <i v-else class="material-symbols-rounded text-red-800">error</i>
    </div>
  </label>
</template>
