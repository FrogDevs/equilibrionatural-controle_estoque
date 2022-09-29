<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
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
  <header class="fixed w-full top-0 shadow-sm">
    <!-- toolbar -->
    <nav class="flex justify-between py-5 px-4 bg-slate-100">
      <i class="material-symbols-rounded">arrow_back</i>
    </nav>
  </header>
  <main class="flex flex-col w-full overflow-y-scroll mt-20">
    <div class="flex flex-col">
      <hr class="h-2 my-2 bg-slate-100 border-none" />
    </div>
    <section class="flex-col px-6">
      <h1 class="font-normal text-2xl">A</h1>
      <div
        class="flex flex-col w-full mt-2 rounded-xl border border-solid border-slate-700"
      >
        <div class="w-full h-44 rounded-t-xl bg-blue-400"></div>
        <div class="flex flex-col w-full p-5 rounded-b-xl gap-5">
          <h1 class="text-2xl">Nome</h1>
          <p class="text-sm">20</p>
        </div>
      </div>
    </section>
  </main>
</template>
