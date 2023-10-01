<script setup lang="ts">
const { isIos, isSafari } = useDevice()
const notSafari = computed(() => !isIos && !isSafari)
</script>

<template>
  <div class="relative bg-[url('/5w.png')] bg-cover bg-center" :class="{ 'bg-fixed': notSafari }">
    <div class="absolute inset-0 bg-gray-400/10 bg-blend-multiply backdrop-blur-md" />
    <div class="mx-auto max-w-5xl backdrop-blur-0">
      <slot />
    </div>
  </div>
</template>
