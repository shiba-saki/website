<script setup lang="ts">
const store = useLoadingStore()
const isSafari = useSafari()
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <div
    id="header"
    class="relative flex h-screen items-center justify-center bg-[url('/assets/20230813.jpg')] bg-cover bg-center lg:bg-teal-50 lg:bg-[url('/assets/bg.png')]"
    :class="{ 'bg-fixed': !isSafari }"
  >
    <template v-if="store.isLoaded">
      <div
        class="animate__animated animate__fadeInLeft hidden h-full flex-1 overflow-hidden bg-[url('/assets/20230813.jpg')] bg-cover bg-center lg:block"
      />
      <article
        class="animate__animated animate__zoomIn animate__slower self-end rounded-lg bg-teal-50/75 p-8 pb-16 lg:self-center lg:p-12 xl:p-24"
      >
        <SHeading h1>柴崎楓音</SHeading>
        <SHeading h3 class="mb-4 text-5xl">呱們的快樂柴犬</SHeading>
        <div class="text-2xl font-bold text-teal-500 shadow-gray-300 text-shadow-border sm:text-3xl">
          <p>來跟我一起吃吃早餐聊聊天吧✨</p>
          <p>還有好多想一起做的事情呢…🍁</p>
        </div>
      </article>
    </template>
    <img src="/mask-bottom.png" alt="mask" class="absolute bottom-0" />
  </div>
</template>
