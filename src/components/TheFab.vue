<script setup>
const props = defineProps({
  market: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <router-link :to="`/${props.market}/${props.category}/registration`">
    <button
      class="flex items-center rounded-2xl bg-amber-700 p-4 shadow-md drop-shadow-md transition-all duration-200 ease-in-out hover:bg-opacity-80 hover:drop-shadow-xl active:bg-opacity-70"
    >
      <i class="material-symbols-rounded text-green-100">Add</i>
    </button>
  </router-link>
</template>
