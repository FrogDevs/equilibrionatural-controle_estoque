<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import TheButton from '../../components/TheButton.vue'
import TheDivider from '../../components/TheDivider.vue'
// Ver detalhes e editar
// const props = defineProps({
//   id: {
//     type: Number,
//     default: 0
//   }
// })
</script>
<template>
  <!-- <p>O id é {{ props.id }}</p> -->
  <main class="flex flex-col items-center pb-5">
    <div class="relative flex h-48 w-full flex-col">
      <i
        class="material-symbols-rounded z-10 m-4 max-w-fit rounded-full p-1 text-neutral-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-neutral-100 hover:bg-opacity-20 active:bg-neutral-100 active:bg-opacity-10"
        >close</i
      >
      <div class="absolute h-full w-full bg-blue-400"></div>
    </div>
    <section class="flex w-full flex-col gap-5 p-5">
      <h1 class="text-2xl text-neutral-800">Nome</h1>
      <TheDivider />
      <div class="flex flex-col gap-3.5">
        <div class="flex flex-col gap-2">
          <p class="font-medium text-neutral-800">Quantidade:</p>
          <p class="text-sm font-medium text-neutral-800">xx</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium text-neutral-800">Peso:</p>
          <p class="text-sm font-medium text-neutral-800">xx</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium text-neutral-800">Validade:</p>
          <p class="text-sm font-medium text-neutral-800">xx</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium text-neutral-800">Preço:</p>
          <p class="text-sm font-medium text-neutral-800">xx</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium text-neutral-800">Categoria:</p>
          <p class="text-sm font-medium text-neutral-800">xx</p>
        </div>
      </div>
    </section>
    <div class="my-2 flex gap-2">
      <TheButton title="Editar" />
      <TheButton title="Excluir" />
    </div>
  </main>
</template>
