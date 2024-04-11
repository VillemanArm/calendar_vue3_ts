import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';

type RefType<T> = {
  value: T;
};

export const useAppStore = defineStore('app', () => {
  const lang: RefType<'en' | 'ru'> = ref('ru') 

  return { lang };
});
