<script setup lang="ts">
import { reactive, ref, toRef, computed, onMounted, onUpdated, watch } from 'vue'
import { useCalendarStore } from '@/stores/Calendar'
import { useAppStore } from '@/stores/App'
import lang from '@/langs/CalendarSettingsLangs'

const calendar = useCalendarStore()
const app = useAppStore()

const dateInput = ref<HTMLInputElement | null>(null)

function setLang(event: Event){
	if ((event.target as HTMLInputElement).value) {
		app.lang = (event.target as HTMLInputElement).value as 'en' | 'ru';
	}
}

function setDate() {
	if (dateInput.value?.value) {
		app.transferredDate = dateInput.value.value
	}
}

function validateInput(event: Event, regExp: RegExp) {
	const input = event.target as HTMLInputElement
	input.value = input.value.replace(regExp, '')
}
</script>

<template>

	<div class="calendar-settings">
		<div class="calendar-settings__block">
			<input 
				class="calendar-settings__date-input" 
				ref="dateInput"
				type="text" 
				:placeholder="lang.dateInputPlaceholder[app.lang]" 
				@input="(event: Event) => {validateInput(event, /[^0-9-]/g)}"
			>
			<button 
				class="calendar-settings__date-set" 
				type="button" 
				@click="setDate"
			>
				{{ lang.setDateBtn[app.lang] }}
			</button>
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

	.calendar-settings__lang-set
		cursor: pointer

</style>





