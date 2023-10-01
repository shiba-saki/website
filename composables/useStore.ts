export const useLoadingStore = defineStore('Loading', () => {
  const playing = ref(false)
  const isLoaded = computed(() => !playing.value)

  return { playing, isLoaded }
})
