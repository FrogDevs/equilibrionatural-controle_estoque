<template>
  <label class="flex w-full flex-col">
    <div
      class="flex h-14 flex-row items-center justify-between rounded-t border-b border-solid border-amber-800 bg-stone-100 py-2 px-4"
    >
      <div class="flex w-full flex-col">
        <p class="text-xs font-normal text-amber-700">Categoria</p>
        <select class="bg-transparent font-normal">
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
