<template>
  <!-- v-for -->
  <!-- <router-link :to="{ name: 'Details', params: { id: 2 } }">
    <p>Detalhes</p>
  </router-link> -->
  <header>
    <!-- toolbar -->
    <nav class="flex justify-between py-5 px-4 bg-slate-100">
      <i class="material-symbols-rounded">arrow_back</i>
      <i class="material-symbols-rounded">search</i>
    </nav>
  </header>
  <main>
    <!-- divider -->
    <div class="flex flex-col">
      <hr class="my-2" />
      <p class="mt-2 mx-4 mb-3 font-medium text-sm">Categorias</p>
    </div>
    <!-- categories -->
    <section>
      <!-- list -->
      <div class="flex py-3.5 px-4 gap-2">
        <p class="font-medium">Alimentícios</p>
      </div>
      <div class="flex py-3.5 px-4 gap-2">
        <p class="font-medium">Beleza</p>
      </div>
      <div class="flex py-3.5 px-4 gap-2">
        <p class="font-medium">Óleos essenciais</p>
      </div>
      <div class="flex py-3.5 px-4 gap-2">
        <p class="font-medium">Suplementos</p>
      </div>
      <div class="flex py-3.5 px-4 gap-2">
        <p class="font-medium">Vida & Saúde</p>
      </div>
    </section>
    <!-- divider -->
    <hr class="my-2" />
  </main>
  <footer class="fixed w-full bottom-0">
    <!-- navigation bar -->
    <nav class="flex flex-col bg-slate-100">
      <div class="flex w-full">
        <div class="flex flex-col items-center w-2/4 pt-4 pb-3 gap-2">
          <i class="material-symbols-rounded">home</i>
          <p class="font-medium text-sm">Home</p>
        </div>
        <div class="flex flex-col items-center w-2/4 pt-4 pb-3 gap-2">
          <i class="material-symbols-rounded">add</i>
          <p class="font-medium text-sm">Cadastrar</p>
        </div>
      </div>
      <div class="w-full h-4"></div>
    </nav>
  </footer>
</template>
