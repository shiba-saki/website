export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxtjs/color-mode'],
  extends: 'content-wind',
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classSuffix: '',
  },
})
