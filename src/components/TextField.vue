<script setup>
import { ref, computed } from 'vue'
import Compress from 'compress.js'

const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  inputError: {
    type: String,
    default: 'text'
  },
  inputType: {
    type: String,
    default: 'text'
  }
})

const input = ref(null)
const title = ref(null)
const placeholder = ref(props.title)
const inputFocus = ref(false)
const inputError = ref(false)
const titleClass = ref('text-onSurfaceVariant')

// Setters
function setFocus() {
  inputFocus.value = !inputFocus.value
  if (inputFocus.value && !inputError.value) {
    titleClass.value = 'text-primary'
    placeholder.value = ''
    title.value = true
  } else if (input.value.value) {
    titleClass.value = 'text-outline'
    title.value = true
  } else if (inputError.value) {
    titleClass.value = 'text-error'
  } else {
    titleClass.value = 'text-outline'
    placeholder.value = props.title
    title.value = false
  }
}

const emit = defineEmits(['input-value', 'input-img'])

function emitOnTrue() {
  if (!input.value.value) {
    inputError.value = true
    titleClass.value = 'text-error'
    emit('input-value', false)
  } else {
    inputError.value = false
    titleClass.value = 'text-primary'
    emit('input-value', input.value.value)
  }
}

function fileSelected(e) {
  if (props.inputType === 'file') {
    // Compress IMG ≃ 72.44%
    const compress = new Compress()
    compress
      .compress([...e.target.files], {
        size: 4,
        quality: 0.1,
        resize: false,
        rotate: false
      })
      .then((data) => {
        emit('input-img', `${data[0].prefix}${data[0].data}`)
      })
  } else {
    return
  }
}

// Watcher
const watchInput = computed(() => {
  if (inputFocus.value && !inputError.value) {
    return 'border-2 border-primary'
  } else if (inputError.value) {
    return 'border-2 border-error'
  } else {
    return 'border border-onSurfaceVariant'
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
          class="absolute top-[-0.5rem] flex items-center justify-center bg-background px-1"
        >
          <p v-if="title" ref="title" :class="titleClass" class="text-xs">
            {{ props.title }}
          </p>
        </div>
        <input
          ref="input"
          class="w-full bg-transparent text-onBackground transition-opacity duration-200 ease-in-out file:hidden placeholder:text-outline focus:outline-none"
          :placeholder="placeholder"
          :type="props.inputType"
          required
          @focusin="setFocus"
          @focusout="setFocus"
          @input="emitOnTrue"
          @change="fileSelected"
        />
      </div>
      <i v-if="inputError" class="material-symbols-rounded text-error">
        error
      </i>
    </div>
  </label>
</template>
