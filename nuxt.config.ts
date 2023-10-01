export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxtjs/color-mode', 'nuxt-lazy-load', '@pinia/nuxt', '@nuxtjs/device'],
  extends: 'content-wind',
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classSuffix: '',
  },

  lazyLoad: {
    images: false,
    videos: false,
    audios: false,
    iframes: false,
    native: false,
    directiveOnly: true,

    // 預設圖片必須位於公用資料夾中
    defaultImage: '/assets/logo.png',

    // 刪除類別設定值為 false
    loadingClass: 'isLoading',
    returnedClass: 'isLoaded',
    appendClass: 'lazyLoad',
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
})
