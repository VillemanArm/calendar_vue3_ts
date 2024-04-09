<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Calendar from './components/Calendar.vue'
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'


const newDate = ref('')

</script>

<template>
  <div class="app-container">
    <input type="text" v-model="newDate">
    <Calendar @day-click="(date) => {console.log(date)}" :transferredDate="newDate"/>
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
