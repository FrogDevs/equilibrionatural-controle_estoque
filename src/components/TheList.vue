<script setup>
import router from '../router'

const props = defineProps({
  user: {
    type: String,
    default: ''
  },
  market: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  bgPicture: {
    type: String,
    default: ''
  }
})

function goToRoute() {
  router.push(`/${props.user}/${props.market}/search/${props.category}`)
}
</script>
<template>
  <div
    class="flex h-fit w-full items-center justify-between gap-2 py-3 px-3 transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-neutral-100 active:bg-neutral-200"
    @click="goToRoute"
  >
    <p class="w-64 font-medium text-amber-800">{{ props.title }}</p>
    <div
      v-if="props.bgPicture"
      :class="props.bgPicture"
      class="h-16 w-96 rounded-lg bg-cover bg-center bg-no-repeat md:hidden"
    ></div>
  </div>
</template>
