export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxtjs/color-mode', 'nuxt-lazy-load'],
  extends: 'content-wind',
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classSuffix: '',
  },

  lazyLoad: {
    images: true,
    videos: true,
    audios: true,
    iframes: false,
    native: false,
    directiveOnly: false,

    // 預設圖片必須位於公用資料夾中
    defaultImage: '/img/logo.png',

    // 刪除類別設定值為 false
    loadingClass: 'isLoading',
    returnedClass: 'isLoaded',
    appendClass: 'lazyLoad',
  },
})
