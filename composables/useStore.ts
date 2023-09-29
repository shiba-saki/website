export const useLoadingStore = defineStore('Loading', () => {
  const playing = ref(true)
  const isLoaded = computed(() => !playing.value)

  return { playing, isLoaded }
})
