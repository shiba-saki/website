export default function useSafari() {
  const { isIos, isSafari } = useDevice()

  return computed(() => isIos || isSafari)
}
