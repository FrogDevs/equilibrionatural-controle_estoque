<script setup>
const props = defineProps({
  link: {
    type: String,
    default: ''
  },
  actived: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <router-link
    class="flex w-[7.5rem] flex-col items-center justify-end gap-2 focus:outline-none"
    :to="props.link"
  >
    <div
      class="active:bg-green-300 absolute top-0 h-full w-[9rem] rounded-full transition-colors duration-200 ease-in-out hover:cursor-pointer hover:bg-secondaryContainer hover:bg-opacity-50 active:bg-opacity-40"
    ></div>
    <i
      :class="
        props.actived
          ? 'bg-secondaryContainer font-semibold text-onBackground'
          : 'font-extralight text-onBackground'
      "
      class="material-symbols-rounded z-10 rounded-full py-1 px-5 hover:cursor-pointer"
    >
      {{ props.icon }}
    </i>
    <p
      :class="props.actived ? 'font-bold' : 'font-medium'"
      class="z-10 text-sm text-onBackground transition-all duration-200 ease-in-out"
    >
      {{ props.title }}
    </p>
  </router-link>
</template>
