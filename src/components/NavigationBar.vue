<script setup>
import NavigationBarSegments from './NavigationBarSegments.vue'

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
  },
  notifications: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <nav class="elevation-2 relative flex flex-col bg-inverseOnSurface pt-3 pb-4">
    <div class="flex w-full justify-center">
      <navigation-bar-segments
        :link="`/${props.user}/stores`"
        icon="storefront"
        title="Unidades"
      />
      <navigation-bar-segments
        :link="`/${props.user}/${props.market}/home`"
        :actived="props.home"
        icon="home"
        title="Início"
      />
      <navigation-bar-segments
        :link="`/${props.user}/${props.market}/history`"
        :actived="props.history"
        icon="history"
        title="Histórico"
      />
      <navigation-bar-segments
        :link="`/${props.user}/${props.market}/notifications`"
        :actived="props.notifications"
        icon="notifications"
        title="Notificações"
      />
    </div>
  </nav>
</template>
