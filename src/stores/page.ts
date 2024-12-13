import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const usePageStore = defineStore('page-store', () => {
  const pageData = ref({
    title: '',
  })

  return {
    pageData,
  }
})

// Getting HMR from Vite:
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
