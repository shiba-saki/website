<script setup lang="ts">
const { cover } = useAppConfig()
</script>

<template>
  <div>
    <Html lang="zh-TW" />
    <Meta property="og:image" :content="cover" />
    <Meta name="twitter:card" content="summary_large_image" />
    <AppLoadingBar />
    <!-- <AppNavbar /> -->
    <slot />
  </div>
  <NuxtLink to="#header" class="fixed bottom-4 right-4 block w-20 opacity-50 hover:opacity-100" replace>
    <img src="assets/logo.png" alt="logo" />
  </NuxtLink>
</template>

<style lang="postcss">
body {
  @apply bg-primary-50 text-black dark:bg-primary-900 dark:text-white;
}
</style>
