<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="flex h-full flex-col items-center justify-center gap-2 p-6">
    <h1>Oops!</h1>
    <h1>Alguma deu errada :(</h1>
  </main>
  <footer class="fixed bottom-0 w-full">
    <!-- navigation bar -->
    <nav
      class="flex flex-col bg-slate-100 shadow-sm md:px-48 lg:px-80 xl:px-96"
    >
      <div class="flex w-full">
        <div class="flex w-2/4 flex-col items-center gap-2 pt-4 pb-3">
          <i class="material-symbols-rounded">home</i>
          <p class="text-sm font-medium">Home</p>
        </div>
        <div class="flex w-2/4 flex-col items-center gap-2 pt-4 pb-3">
          <i class="material-symbols-rounded">add</i>
          <p class="text-sm font-medium">Cadastrar</p>
        </div>
      </div>
      <div class="h-4 w-full"></div>
    </nav>
  </footer>
</template>
