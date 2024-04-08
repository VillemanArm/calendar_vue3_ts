import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';

export const useCalendarStore = defineStore('calendar', () => {
  const dayInMs = 86400000;
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const now = new Date
  const currentDate = now.getDate()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()

  let dateInMs = ref(Date.now());
  let selectedYear = computed(() => new Date(dateInMs.value).getFullYear());
  let selectedMonth = computed(() => new Date(dateInMs.value).getMonth());
  let selectedMonthName = computed(() => months[selectedMonth.value])
  let daysInMonth = computed(() => new Date(selectedYear.value, selectedMonth.value + 1, 0).getDate())
  let displayedDays = computed(() => {
    const firstDay = new Date(selectedYear.value, selectedMonth.value, 1).getDay()

    const days: Array< '' | number> = Array(firstDay - 1).fill('')

    for (let i:number = 1; i <= daysInMonth.value; i++) {
      days.push(i)
    }
    
    // while (days.length % 7 !== 0) {
    //   days.push('')
    // }

    return days
  })



  function changeSelectedMonth(monthAmount: number) {
    dateInMs.value += monthAmount * dayInMs * daysInMonth.value;

  }



  // watch(() => date.value, (newDate, oldDate) => {
  //   console.log('вотчер сработал');
  //   selectedMonth.value = newDate.getMonth();
  // }, { deep: true });

  return { selectedYear, selectedMonth, selectedMonthName, displayedDays, currentDate, currentMonth, currentYear, changeSelectedMonth };
});
