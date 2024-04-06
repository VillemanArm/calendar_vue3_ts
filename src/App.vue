<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Calendar from './components/Calendar.vue'
</script>

<template>
  <div class="app-container">
    <Calendar msg="You did it!" />
  </div>
</template>

<style scoped lang="sass">

  .app-container
    width: 100vw
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center

</style>
