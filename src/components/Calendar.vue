<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
import { useCalendarStore } from '@/stores/Calendar'

defineProps<{
	msg: string;
}>();

const store = useCalendarStore()

</script>

<template>

	<div class="calendar">
		<div class="calendar__month">
			<div class="calendar__month-prev-btn" @click="store.changeSelectedMonth(-1)"></div>
			<div class="calendar__month-current">{{`${store.selectedMonthName} ${store.selectedYear}`}}</div>			
			<div class="calendar__month-next-btn" @click="store.changeSelectedMonth(1)"></div>
		</div>
		<div class="calendar__week-days">
			<div >Sun</div>
			<div >Mon</div>
			<div >Tue</div>
			<div >Wed</div>
			<div >Thu</div>
			<div >Fri</div>
			<div >Sat</div>
		</div>
		<div class="calendar__days"></div>
	</div>

</template>

<style scoped lang="sass">
	@import '@/assets/styles/constants.sass'

	.calendar
		width: 280px

		font-size: 18px

		background-color: $block-background-color

	.calendar__month
		display: flex
		justify-content: space-between
		align-items: center
		padding: 8px

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

</style>





