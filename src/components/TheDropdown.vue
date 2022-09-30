<template>
  <label class="flex flex-col w-full">
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
  </label>
</template>
