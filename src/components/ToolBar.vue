<script setup>
import { computed, ref } from 'vue'
import router from '../router'
import { useUserStore } from '../stores/UserStore'

const userAuth = useUserStore()

function back() {
  router.go(-1)
}

function logout() {
  userAuth.setAuth(false)
  userAuth.setUser(null)
  router.push('/')
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

const elevation = ref(false)

window.onscroll = function () {
  const scrollNum = window.scrollY
  if (scrollNum) {
    elevation.value = true
  } else {
    elevation.value = false
  }
}
</script>
<template>
  <nav
    :class="elevation ? 'elevation-2' : 'elevation-0'"
    class="relative flex h-16 items-center bg-surface"
  >
    <div
      class="absolute z-10 flex w-full justify-between px-4 transition-all duration-200 ease-in-out"
    >
      <i
        class="material-symbols-rounded cursor-pointer rounded-full p-2 text-onSurface transition-colors duration-200 ease-in-out hover:bg-secondaryContainer hover:text-onSecondaryContainer active:bg-[#ffd0b6]"
        @click="back"
      >
        arrow_back
      </i>
      <div class="flex sm:gap-7">
        <i
          class="material-symbols-rounded cursor-pointer rounded-full p-2 text-onSurface transition-colors duration-200 ease-in-out hover:bg-secondaryContainer hover:text-onSecondaryContainer active:bg-[#ffd0b6]"
          @click="logout"
        >
          logout
        </i>
      </div>
    </div>
    <p class="absolute flex w-full justify-center text-onSurface">
      {{ title }}
    </p>
  </nav>
</template>
