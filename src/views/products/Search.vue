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
  <main class="flex flex-col w-full overflow-y-scroll mt-20 my-6 gap-6">
    <section class="flex flex-col">
      <h1 class="font-extrabold text-6xl ml-6">A</h1>
      <div
        class="flex flex-col items-center pt-3 px-6 gap-6 md:grid md:gap-0 auto-grid"
      >
        <div
          class="flex flex-col w-full sm:w-80 md:h-80 mt-2 rounded-xl border border-solid border-slate-700"
        >
          <div class="w-full h-44 rounded-t-xl bg-blue-400"></div>
          <div class="flex flex-col w-full p-5 rounded-b-xl gap-5">
            <h1 class="text-2xl">Nome</h1>
            <p class="text-sm">Quantidade: 20</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
