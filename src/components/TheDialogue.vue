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
    class="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-scrim bg-opacity-25 p-6"
  >
    <div
      class="elevation-3 flex h-fit w-[19.5rem] max-w-[19.5rem] flex-col rounded-[1.75rem] bg-surface"
    >
      <div class="flex w-full flex-col items-start gap-4 p-6">
        <h2 class="text-start text-2xl text-onSurface">
          Deseja excluir este produto?
        </h2>
        <p class="text-sm text-onSurfaceVariant">
          Saiba que não será possível recuperar quaisquer dados perdidos.
        </p>
      </div>
      <div class="flex w-full justify-end gap-8 py-[2.125rem] px-9">
        <p
          class="cursor-pointer font-medium text-primary transition-colors duration-200 ease-in-out hover:text-opacity-80 active:text-opacity-70"
          @click="closeDialogue"
        >
          Cancelar
        </p>
        <p
          class="cursor-pointer font-medium text-primary transition-colors duration-200 ease-in-out hover:text-opacity-80 active:text-opacity-70"
          @click="deleteProduct"
        >
          Excluir
        </p>
      </div>
    </div>
  </div>
</template>
