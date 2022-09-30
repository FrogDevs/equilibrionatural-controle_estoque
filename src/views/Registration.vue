<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import NavigationBar from '../components/NavigationBar.vue'
import ToolBar from '../components/ToolBar.vue'
import TheButton from '../components/TheButton.vue'
</script>
<template>
  <header class="fixed w-full top-0">
    <ToolBar />
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
      <TheButton />
    </form>
  </main>
  <footer class="fixed w-full bottom-0">
    <NavigationBar />
  </footer>
</template>
