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
    <div class="relative flex flex-col w-full h-48">
      <i class="material-symbols-rounded mt-5 ml-4 z-10 text-white">close</i>
      <div class="absolute w-full h-full bg-blue-400"></div>
    </div>
    <section class="flex flex-col w-full p-5 gap-5">
      <h1 class="text-2xl">Nome</h1>
      <TheDivider />
      <div class="flex flex-col gap-3.5">
        <div class="flex flex-col gap-2">
          <p class="font-medium">Quantidade:</p>
          <p class="font-medium text-sm">xx</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium">Peso:</p>
          <p class="font-medium text-sm">xx</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium">Validade:</p>
          <p class="font-medium text-sm">xx</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium">Preço:</p>
          <p class="font-medium text-sm">xx</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="font-medium">Categoria:</p>
          <p class="font-medium text-sm">xx</p>
        </div>
      </div>
    </section>
    <div class="flex gap-2 my-2">
      <TheButton />
      <TheButton />
    </div>
  </main>
</template>