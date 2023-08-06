import type { Router } from 'vue-router'

export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router as Router
  router.options.scrollBehavior = (to) => {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})
