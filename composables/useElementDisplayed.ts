export default function useElementDisplayed() {
  const el = ref<HTMLElement>()
  const displayed = ref(false)
  const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      displayed.value = isIntersecting
      stop()
    }
  })

  return {
    el,
    displayed,
  }
}
