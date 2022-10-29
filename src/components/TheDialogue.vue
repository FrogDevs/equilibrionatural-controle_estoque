<script setup>
const emit = defineEmits(['closeDialogue', 'deleteProduct'])

function closeDialogue() {
  emit('closeDialogue')
}

function deleteProduct() {
  emit('deleteProduct')
}
</script>
<template>
  <div
    class="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-neutral-900 bg-opacity-20 p-6"
  >
    <div
      class="flex h-fit w-[19.5rem] max-w-[19.5rem] flex-col rounded-[1.75rem] bg-green-50 shadow-lg"
    >
      <div class="flex w-full flex-col items-start gap-4 p-6">
        <h2 class="text-start text-2xl text-neutral-800">
          Deseja excluir este item?
        </h2>
        <p class="text-sm">
          Saiba que não será possível recuperar quaisquer dados.
        </p>
      </div>
      <div class="flex w-full justify-end gap-8 py-[2.125rem] px-9">
        <p
          class="font-medium text-green-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-opacity-80 active:text-opacity-70"
          @click="closeDialogue"
        >
          Cancelar
        </p>
        <p
          class="font-medium text-green-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:text-opacity-80 active:text-opacity-70"
          @click="deleteProduct"
        >
          Excluir
        </p>
      </div>
    </div>
  </div>
</template>
