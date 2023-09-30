<script setup lang="ts">
const { cover } = useAppConfig()
</script>

<template>
  <div>
    <Html lang="zh-TW" />
    <Meta property="og:image" :content="cover" />
    <Meta name="twitter:card" content="summary_large_image" />
    <AppLoadingBar />
    <AppNavbar />
    <slot />
  </div>
  <a href="#" class="fixed bottom-4 right-4 block w-20 opacity-50 hover:opacity-100">
    <img src="/assets/logo.png" alt="logo" />
  </a>
</template>

<style lang="postcss">
body {
  @apply bg-primary-50 text-black dark:bg-primary-900 dark:text-white;
}
</style>
