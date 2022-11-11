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
      class="absolute top-0 h-full w-[9rem] cursor-pointer rounded-full transition-colors duration-200 ease-in-out hover:bg-[#F8E3DA] active:bg-[#F6D9CB]"
    ></div>
    <i
      :class="
        props.actived
          ? 'bg-secondaryContainer text-onSecondaryContainer'
          : 'font-extralight text-onSurface'
      "
      class="material-symbols-rounded z-10 rounded-full py-1 px-5 hover:cursor-pointer"
    >
      {{ props.icon }}
    </i>
    <p
      :class="props.actived ? 'font-bold' : 'font-medium '"
      class="z-10 text-sm text-onSurface transition-all duration-200 ease-in-out"
    >
      {{ props.title }}
    </p>
  </router-link>
</template>
