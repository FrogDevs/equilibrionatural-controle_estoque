<script setup>
const props = defineProps({
  title: {
    type: String,
    default: undefined
  },
  inputType: {
    type: String,
    default: 'text'
  }
})
</script>
<template>
  <label class="relative flex w-full flex-col">
    <div
      class="flex h-14 flex-row items-center justify-between rounded border border-solid border-amber-700 py-2 px-4"
    >
      <div class="flex w-full flex-col">
        <div
          class="absolute top-[-0.5rem] flex items-center justify-center bg-white px-1"
        >
          <p class="text-xs font-normal text-amber-700">
            {{ props.title }}
          </p>
        </div>
        <input
          class="w-full bg-transparent text-amber-900 focus:outline-none"
          :type="props.inputType"
          required
        />
      </div>
      <i class="material-symbols-rounded text-amber-900 hover:cursor-pointer">
        cancel
      </i>
    </div>
  </label>
</template>
