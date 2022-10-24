<script setup>
import { computed } from 'vue'
import router from '../router'

function back() {
  router.go(-1)
}

function logout() {
  router.push('/')
}

const emit = defineEmits(['openSearch'])

function openSearch() {
  emit('openSearch')
}

const props = defineProps({
  user: {
    type: String,
    default: ''
  },
  market: {
    type: String,
    default: ''
  }
})

const title = computed(() => {
  if (props.user || props.market) {
    return `${props.market} / ${props.user}`
  } else {
    return null
  }
})
</script>
<template>
  <nav class="relative flex h-16 items-center bg-green-100">
    <div class="absolute z-10 flex w-full justify-between px-4">
      <i
        class="material-symbols-rounded rounded-full bg-opacity-80 p-2 text-amber-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 active:bg-green-300 active:bg-opacity-70"
        @click="back"
      >
        arrow_back
      </i>
      <div class="flex sm:gap-7">
        <i
          class="material-symbols-rounded rounded-full bg-opacity-80 p-2 text-amber-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 active:bg-green-300 active:bg-opacity-70"
          @click="openSearch"
        >
          search
        </i>
        <i
          class="material-symbols-rounded rounded-full bg-opacity-80 p-2 text-amber-800 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-green-200 active:bg-green-300 active:bg-opacity-70"
          @click="logout"
        >
          logout
        </i>
      </div>
    </div>
    <p class="absolute flex w-full justify-center text-amber-800">
      {{ title }}
    </p>
  </nav>
</template>
