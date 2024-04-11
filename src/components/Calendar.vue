<script setup lang="ts">
import { reactive, ref, toRef, computed, onMounted, onUpdated, watch } from 'vue'
import { useCalendarStore } from '@/stores/Calendar'

const props = defineProps({
	transferredDate: String
});

const calendar = useCalendarStore()
const emit = defineEmits(['dayClick'])

function handleDayClick(event: MouseEvent) {
	const target = event.target as HTMLElement;
	if (target.matches('.calendar__day') && target.innerText) {
			calendar.selectedDate = +target.innerText;	
			emit('dayClick', `${calendar.selectedYear}-${('0' + (calendar.selectedMonth + 1).toString()).slice(-2)}-${('0' + target.innerText).slice(-2)}`)		
	}
}

function setTransferredDate() {
	const dateFormat = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    if (props.transferredDate && dateFormat.test(props.transferredDate)) {
		const newDate = new Date(props.transferredDate);
		calendar.dateInMs = newDate.getTime();
		calendar.selectedDate = newDate.getDate();
	} else {
		console.warn('Warning: The calendar received a date in the wrong format!');		
	}
}

onMounted(() => {
	setTransferredDate()
})  


const transferredDate = toRef(props, 'transferredDate')

watch(transferredDate, () => {
      setTransferredDate();
    })

</script>

<template>

	<div class="calendar">
		<div class="calendar__month">
			<div class="calendar__month-prev-btn" @click="calendar.changeSelectedMonth(-1)"></div>
			<div class="calendar__month-current">{{`${calendar.selectedMonthName} ${calendar.selectedYear}`}}</div>			
			<div class="calendar__month-next-btn" @click="calendar.changeSelectedMonth(1)"></div>
		</div>
		<div class="calendar__week-days">
			<div v-for="day, index in calendar.weekDays" :key="index">{{day}}</div>

		</div>
		<div class="calendar__days" @click="(event: MouseEvent) => {handleDayClick(event)}">
			<div 
				v-for="day, index in calendar.displayedDays" 
				:key="index" 
				:class="{
					'calendar__day': true, 
					'calendar__current-day': (calendar.currentYear === calendar.selectedYear && calendar.currentMonth === calendar.selectedMonth && calendar.currentDate === day),
					'calendar__selected-day': calendar.selectedDate === day,
				}"
			>
				{{ day }}
			</div>
		</div>
	</div>

</template>

<style scoped lang="sass">
	@import '@/assets/styles/constants.sass'

	.calendar
		width: 261px
		padding: 8rem

		font-size: 18px

		background-color: $block-background-color

	.calendar__month
		display: flex
		justify-content: space-between
		align-items: center
		padding-bottom: 8px

	.calendar__month-prev-btn, .calendar__month-next-btn
		width: 0
		height: 0

		cursor: pointer

	.calendar__month-prev-btn
		border-top: 6px solid transparent
		border-bottom: 6px solid transparent
		border-right: 12px solid #000


	.calendar__month-next-btn
		border-top: 6px solid transparent
		border-bottom: 6px solid transparent
		border-left: 12px solid #000

	.calendar__week-days
		display: grid
		grid-template-columns: repeat(7, 1fr)
		justify-items: center
		padding-bottom: 8px

		font-size: 14px

	.calendar__days
		display: grid
		grid-template-columns: repeat(7, 1fr)
		justify-items: center

	.calendar__day
		width: 35px
		height: 35px
		display: grid
		align-items: center
		justify-items: center

		line-height: 100%

		cursor: pointer
		border-radius: 4px

	.calendar__current-day
		border: 1px solid $light-blue

	.calendar__selected-day
		background-color: $light-blue


</style>





