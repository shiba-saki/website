<script setup lang="ts">
const { cover } = useAppConfig()
</script>

<template>
  <div class="sm:pb-10 sm:pt-6">
    <Html lang="en" />
    <Meta property="og:image" :content="cover" />
    <Meta name="twitter:card" content="summary_large_image" />
    <AppLoadingBar :height="5" :duration="7000" :throttle="1000" />
    <AppNavbar />
    <slot />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-primary-50 dark:bg-primary-900 text-black dark:text-white;
}
</style>
