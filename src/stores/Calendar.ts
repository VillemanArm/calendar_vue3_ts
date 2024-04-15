import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { useAppStore } from './App';
import content from '@/langs/calendarLangs'

export const useCalendarStore = defineStore('calendar', () => {
  const appStore = useAppStore()

  const dayInMs = 86400000;
  const now = new Date
  const currentDate = now.getDate()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()
  
  let months = computed(() => content.months[appStore.lang])
  let weekDays = computed(() => content.weekDays[appStore.lang])

  let dateInMs = ref(Date.now());
  let selectedYear = computed(() => new Date(dateInMs.value).getFullYear());
  let selectedMonth = computed(() => new Date(dateInMs.value).getMonth());
  let selectedDate = ref(new Date(dateInMs.value).getDate())
  let selectedMonthName = computed(() => months.value[selectedMonth.value])
  let daysInMonth = computed(() => new Date(selectedYear.value, selectedMonth.value + 1, 0).getDate())
  let displayedDays = computed(() => {
    const firstDay = new Date(selectedYear.value, selectedMonth.value, 1).getDay()

    // если нужно вставить в начало календаря даты предыдущего месяца - переписать начальную генерацию массива
    const days: Array< '' | number> = Array(firstDay - 1).fill('')

    for (let i:number = 1; i <= daysInMonth.value; i++) {
      days.push(i)
    }
    
    // заготовка для вставки дат следующего месяца
    // while (days.length % 7 !== 0) {
    //   days.push('')
    // }

    return days
  })
 
  function changeSelectedMonth(monthAmount: number) {
    dateInMs.value += monthAmount * dayInMs * daysInMonth.value;
  }

  return { weekDays, selectedYear, dateInMs, selectedMonth, selectedDate, selectedMonthName, displayedDays, currentDate, currentMonth, currentYear, changeSelectedMonth };
});
