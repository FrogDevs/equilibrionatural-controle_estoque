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
      class="elevation-3 hover:elevation-4 flex items-center rounded-2xl bg-secondary p-4 transition-all duration-200 ease-in-out hover:bg-[#6a5040] active:bg-[#604839]"
    >
      <i class="material-symbols-rounded text-onSecondary">Add</i>
    </button>
  </router-link>
</template>
