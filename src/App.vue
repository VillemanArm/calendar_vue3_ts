<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Calendar from './components/Calendar.vue'
</script>

<template>
  <div class="app-container">
    <Calendar @day-click="(date) => {console.log(date)}" transferredDate="2024-04-10"/>
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
