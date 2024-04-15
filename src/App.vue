<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Calendar from './components/Calendar.vue'
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
import CalendarSettings from '@/components/CalendarSettings.vue';
import { useAppStore } from './stores/App';
import lang from '@/langs/appLangs'

const app = useAppStore()

</script>

<template>
  <div class="app__container">
    <div class="app__calendar-wrap">
      <div class="app__calendar">
        <CalendarSettings/>
        <Calendar 
          @day-click="(date) => {console.log(date)}" :transferredDate="app.transferredDate"
        />
      </div>
    <div class="app__calendar-description" v-html="lang.description[app.lang]"></div>
    </div>
  </div>
</template>

<style scoped lang="sass">
  @import '@/assets/styles/constants.sass'

  .app__container
    width: 100vw
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center

  .app__calendar-wrap
    display: flex
    gap: 30px
    align-items: center

  .app__calendar-description
    max-width: 380px

    color: $secondary-font-color

</style>
