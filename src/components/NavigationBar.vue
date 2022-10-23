<script setup>
const props = defineProps({
  user: {
    type: String,
    default: ''
  },
  market: {
    type: String,
    default: ''
  },
  home: {
    type: Boolean,
    default: false
  },
  history: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <nav class="relative flex flex-col bg-green-100 pt-3 pb-4">
    <div class="flex w-full justify-center">
      <router-link
        class="flex w-[7.5rem] flex-col items-center justify-end gap-2 focus:outline-none"
        :to="`/${props.user}/stores`"
      >
        <div
          class="absolute top-0 h-full w-[9rem] rounded-full transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 hover:bg-opacity-80 active:bg-green-300 active:bg-opacity-50"
        ></div>
        <i
          class="material-symbols-rounded z-10 rounded-full py-1 px-5 text-neutral-700 hover:cursor-pointer"
          >storefront
        </i>
        <p class="z-10 text-sm font-medium text-neutral-700">Lojas</p>
      </router-link>
      <router-link
        class="flex w-[7.5rem] flex-col items-center justify-end gap-2 focus:outline-none"
        :to="`/${props.user}/${props.market}/home`"
      >
        <div
          class="absolute top-0 h-full w-[9rem] rounded-full transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 hover:bg-opacity-80 active:bg-green-300 active:bg-opacity-50"
        ></div>
        <i
          :class="
            props.home ? 'bg-green-300 text-amber-800' : 'text-neutral-700'
          "
          class="material-symbols-rounded z-10 rounded-full py-1 px-5 hover:cursor-pointer"
          >home
        </i>
        <p class="z-10 text-sm font-medium text-neutral-700">Início</p>
      </router-link>
      <router-link
        class="flex w-[7.5rem] flex-col items-center justify-end gap-2 focus:outline-none"
        :to="`/${props.user}/${props.market}/history`"
      >
        <div
          class="absolute top-0 h-full w-[9rem] rounded-full transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 hover:bg-opacity-80 active:bg-green-300 active:bg-opacity-50"
        ></div>
        <i
          :class="
            props.history ? 'bg-green-300 text-amber-800' : 'text-neutral-700'
          "
          class="material-symbols-rounded z-10 rounded-full py-1 px-5 hover:cursor-pointer"
          >history
        </i>
        <p class="z-10 text-sm font-medium text-neutral-700">Histórico</p>
      </router-link>
    </div>
  </nav>
</template>
