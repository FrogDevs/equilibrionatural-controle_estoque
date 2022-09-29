<!-- cadastrar produto -->
<template>
  <header class="fixed w-full top-0">
    <!-- toolbar -->
    <nav class="flex justify-between py-5 px-4 bg-slate-100">
      <i class="material-symbols-rounded">arrow_back</i>
    </nav>
  </header>
  <main class="flex flex-col w-full h-full overflow-y-scroll my-20">
    <form class="flex flex-col items-center px-4 gap-4">
      <div class="flex flex-col w-full">
        <div
          class="flex flex-row items-center justify-between py-2 px-4 rounded-t border-b border-solid border-zinc-900 bg-slate-200"
        >
          <div class="flex flex-col">
            <p class="font-normal text-xs border-zinc-900">Nome do produto</p>
            <p class="font-normal">Input</p>
          </div>
          <i class="material-symbols-rounded">cancel</i>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div
          class="flex flex-row items-center justify-between py-2 px-4 rounded-t border-b border-solid border-zinc-900 bg-slate-200"
        >
          <div class="flex flex-col">
            <p class="font-normal text-xs border-zinc-900">Quantidade</p>
            <p class="font-normal">Input</p>
          </div>
          <i class="material-symbols-rounded">cancel</i>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div
          class="flex flex-row items-center justify-between h-14 py-2 px-4 rounded-t border-b border-solid border-zinc-900 bg-slate-200"
        >
          <div class="flex flex-col w-full">
            <p class="font-normal text-xs border-zinc-900">Peso</p>
            <select class="font-normal bg-transparent">
              <option value="" selected disabled hidden></option>
              <option value="kg">Kg</option>
              <option value="kg">mG</option>
              <option value="ml">mL</option>
              <option value="null">Não pesável</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div
          class="flex flex-row items-center justify-between py-2 px-4 rounded-t border-b border-solid border-zinc-900 bg-slate-200"
        >
          <div class="flex flex-col">
            <p class="font-normal text-xs border-zinc-900">Validade</p>
            <p class="font-normal">Input</p>
          </div>
          <i class="material-symbols-rounded">cancel</i>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div
          class="flex flex-row items-center justify-between py-2 px-4 rounded-t border-b border-solid border-zinc-900 bg-slate-200"
        >
          <div class="flex flex-col">
            <p class="font-normal text-xs border-zinc-900">Preço</p>
            <p class="font-normal">Input</p>
          </div>
          <i class="material-symbols-rounded">cancel</i>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div
          class="flex flex-row items-center justify-between h-14 py-2 px-4 rounded-t border-b border-solid border-zinc-900 bg-slate-200"
        >
          <div class="flex flex-col w-full">
            <p class="font-normal text-xs border-zinc-900">Categoria</p>
            <select class="font-normal bg-transparent">
              <option value="" selected disabled hidden></option>
              <option value="alimenticio">Alimentícios</option>
              <option value="beleza">Beleza</option>
              <option value="oleos">Óleos essenciais & Saúde</option>
              <option value="suplementos">Suplementos</option>
              <option value="vida">Vida & Saúde</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div
          class="flex flex-row items-center justify-between py-2 px-4 rounded-t border-b border-solid border-zinc-900 bg-slate-200"
        >
          <div class="flex flex-col">
            <p class="font-normal text-xs border-zinc-900">Foto</p>
            <p class="font-normal">Input</p>
          </div>
          <i class="material-symbols-rounded">cancel</i>
        </div>
      </div>
      <!-- prevent default -->
      <button class="flex justify-center w-28 py-2 rounded-full bg-indigo-600">
        <p class="text-normal text-sm text-white">Salvar</p>
      </button>
    </form>
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
