<script setup>
const props = defineProps({
  home: {
    type: Boolean,
    default: false
  },
  registration: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <nav class="relative flex flex-col bg-green-100 shadow-sm">
    <div class="flex w-full justify-center">
      <router-link
        class="flex flex-col items-center justify-end gap-1 px-5 pt-3 pb-4 focus:outline-none"
        to="/home"
      >
        <div
          class="absolute top-0 h-full w-24 rounded-full transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 hover:bg-opacity-80 active:bg-green-300 active:bg-opacity-50"
        ></div>
        <i
          :class="props.home ? 'bg-green-300' : ''"
          class="material-symbols-rounded z-10 rounded-full py-1 px-4 text-neutral-700 hover:cursor-pointer"
          >home
        </i>
        <p class="z-10 text-sm font-medium text-neutral-700">Home</p>
      </router-link>
      <router-link
        class="flex flex-col items-center justify-end gap-1 px-5 pt-3 pb-4 focus:outline-none"
        to="/registration"
      >
        <div
          class="absolute top-0 h-full w-24 rounded-full transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 hover:bg-opacity-80 active:bg-green-300 active:bg-opacity-50"
        ></div>
        <i
          :class="props.registration ? 'bg-green-300' : ''"
          class="material-symbols-rounded z-10 rounded-full py-1 px-4 text-neutral-700 hover:cursor-pointer"
          >add
        </i>
        <p class="z-10 text-sm font-medium text-neutral-700">Cadastrar</p>
      </router-link>
    </div>
  </nav>
</template>
