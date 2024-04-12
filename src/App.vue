<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Calendar from './components/Calendar.vue'
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
import CalendarSettings from '@/components/CalendarSettings.vue';
import { useAppStore } from './stores/App';

const app = useAppStore()

</script>

<template>
  <div class="app-container">
    <CalendarSettings/>
    <Calendar @day-click="(date) => {console.log(date)}" :transferredDate="app.transferredDate"/>
  </div>
</template>

<style scoped lang="sass">

  .app-container
    width: 100vw
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

</style>
