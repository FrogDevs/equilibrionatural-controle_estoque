<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="flex flex-col items-center justify-center h-full p-6 gap-2">
    <h1>Oops!</h1>
    <h1>Alguma deu errada :(</h1>
  </main>
  <footer class="fixed w-full bottom-0">
    <!-- navigation bar -->
    <nav
      class="flex flex-col bg-slate-100 shadow-sm md:px-48 lg:px-80 xl:px-96"
    >
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
