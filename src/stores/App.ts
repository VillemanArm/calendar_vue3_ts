import { ref, computed, watch, type Ref } from 'vue';
import { defineStore } from 'pinia';


export const useAppStore = defineStore('app', () => {
  const lang: Ref<'en' | 'ru'> = ref('en') 
  const transferredDate: Ref<string> = ref('') 


  return { lang, transferredDate };
});
