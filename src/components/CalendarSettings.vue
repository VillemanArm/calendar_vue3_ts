<script setup lang="ts">
import { reactive, ref, toRef, computed, onMounted, onUpdated, watch } from 'vue'
import { useCalendarStore } from '@/stores/Calendar'
import { useAppStore } from '@/stores/App'

const calendar = useCalendarStore()
const app = useAppStore()

function setLang(event: Event){
	if ((event.target as HTMLInputElement).value) {
		app.lang = (event.target as HTMLInputElement).value as 'en' | 'ru';
	}
}
</script>

<template>

	<div class="calendar-settings">
		<div class="calendar-settings__block">
			<input class="calendar-settings__date-input" type="text" placeholder="yyyy-mm-dd">
			<button class="calendar-settings__date-set" type="button">Set date</button>
		</div>
		<select 
			class="calendar-settings__lang-set" 
			@change="(event: Event) => {setLang(event)}"
		>
			<option value="en" selected >en</option>
			<option value="ru">ru</option>
		</select>
	</div>

</template>

<style scoped lang="sass">
	@import '@/assets/styles/constants.sass'

	.calendar-settings
		width: 261px
		display: flex
		justify-content: space-between
		margin-bottom: 12px
		padding: 8px

		font-size: 16px

		background-color: $block-background-color

	.calendar-settings__block
		display: flex
		gap: 12px

	.calendar-settings__date-input
		width: 100px

	// .calendar-settings__lang-set


</style>





