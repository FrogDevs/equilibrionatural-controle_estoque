<script setup>
import { ref } from 'vue'

const inputFocus = ref(false)

// Setter
function setFocus() {
  inputFocus.value = !inputFocus.value
}
</script>
<template>
  <label class="relative flex w-full flex-col">
    <div
      :class="
        inputFocus ? 'border-2 border-amber-700' : 'border border-neutral-400'
      "
      class="flex h-14 flex-row items-center justify-between rounded border-solid py-2 px-4"
    >
      <div class="flex w-full flex-col">
        <div
          class="absolute top-[-0.5rem] flex items-center justify-center bg-white px-1"
        >
          <p
            :class="inputFocus ? 'text-amber-700' : 'text-neutral-400'"
            class="text-xs"
          >
            Categoria
          </p>
        </div>
        <select
          class="bg-transparent text-amber-700 focus:outline-none"
          @focusin="setFocus"
          @focusout="setFocus"
        >
          <option value="alimenticio">Alimentícios</option>
          <option value="beleza">Beleza</option>
          <option value="oleos">Óleos essenciais & Saúde</option>
          <option value="suplementos">Suplementos</option>
          <option value="vida">Vida & Saúde</option>
        </select>
      </div>
    </div>
  </label>
</template>
