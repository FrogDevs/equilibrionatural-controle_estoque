<template>
  <label class="relative flex w-full flex-col">
    <div
      class="flex h-14 flex-row items-center justify-between rounded border border-solid border-amber-700 py-2 px-4"
    >
      <div class="flex w-full flex-col">
        <div
          class="absolute top-[-0.5rem] flex items-center justify-center bg-white px-1"
        >
          <p class="text-xs font-normal text-amber-700">Categoria</p>
        </div>
        <select
          class="bg-transparent font-normal text-amber-900 focus:outline-none"
        >
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
