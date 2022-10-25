<script setup>
import TextField from './TextField.vue'
import TheList from './TheList.vue'

const emit = defineEmits(['closeModal'])

function closeModal() {
  emit('closeModal')
}
</script>
<template>
  <div
    class="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-neutral-900 bg-opacity-20 p-6"
  >
    <div
      class="flex h-full w-full flex-col items-end rounded-[1.75rem] border-neutral-100 bg-white shadow-lg md:max-h-96 md:max-w-2xl"
    >
      <div
        class="flex w-full items-center gap-2 rounded-t-[1.75rem] border-b px-6 py-3"
      >
        <TextField title="Pesquise um produto" type="search" />
        <i
          class="material-symbols-rounded rounded-full bg-opacity-80 p-2 text-amber-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 active:bg-green-300 active:bg-opacity-70"
          @click="closeModal"
        >
          close
        </i>
      </div>
      <div
        class="flex h-full w-full flex-col gap-2 overflow-y-auto rounded-b-[1.75rem] bg-neutral-50 px-6 py-4"
      >
        <TheList title="oi" />
        <TheList title="oi" />
        <TheList title="oi" />
        <TheList title="oi" />
        <TheList title="oi" />
        <TheList title="oi" />
        <TheList title="oi" />
        <TheList title="oi" />
      </div>
    </div>
  </div>
</template>
