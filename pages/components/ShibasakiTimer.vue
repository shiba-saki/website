<script setup lang="ts">
const debutDate = dayjs('2022-09-25 20:00:00+08:00')
const nowRef = ref(dayjs())
const daysPassed = computed(() => {
  const now = nowRef.value
  const diff = now.diff(debutDate)
  const duration = dayjs.duration(diff)

  return [
    {
      type: 'Days',
      value: duration.asDays().toFixed(),
    },
    {
      type: 'Hours',
      value: duration.hours(),
    },
    {
      type: 'Minutes',
      value: duration.minutes(),
    },
    {
      type: 'Seconds',
      value: duration.seconds(),
    },
  ]
})

const intervalId = setInterval(() => (nowRef.value = dayjs()), 1000)
onUnmounted(() => clearInterval(intervalId))

const menuRef = ref<HTMLElement>()
const menuIsVisible = ref(false)
const { stop } = useIntersectionObserver(menuRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    menuIsVisible.value = isIntersecting
    stop()
  }
})
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <div class="relative flex flex-col items-center justify-center py-12">
    <div class="flex flex-col items-center drop-shadow-lg">
      <p class="text-4xl font-bold text-teal-700 shadow-white text-shadow-border sm:text-8xl">嘿！呱們～</p>
      <p class="mt-2 text-3xl font-bold text-teal-600 shadow-white text-shadow-border sm:text-5xl">
        在幹嘛呢？想聊聊天🍁✨
      </p>
    </div>
    <div class="my-8 flex gap-4">
      <div
        v-for="date in daysPassed"
        :key="date.type"
        class="animate__animated animate__pulse animate__slow flex h-16 w-16 animate-ping flex-col items-center justify-center rounded-full bg-cyan-800/80 text-white sm:h-24 sm:w-24"
      >
        <p class="text-2xl md:text-4xl">{{ date.value }}</p>
        <p class="text-xs md:text-base">{{ date.type }}</p>
      </div>
    </div>
    <p class="mt-2 text-3xl font-bold text-teal-600 shadow-white text-shadow-border sm:text-5xl">
      柴犬已經出沒這麼久了唷<span class="pl-3 text-red-600">❤️</span>
    </p>
  </div>

  <section class="flex flex-col overflow-hidden rounded-md bg-teal-50/75 md:flex-row">
    <article
      class="flex flex-1 flex-col items-center justify-center py-8"
      :class="{ 'animate__animated animate__wobble': menuIsVisible }"
    >
      <SHeading class="pb-2">來份早餐嗎？</SHeading>
      <div class="text-2xl text-teal-800">
        <p class="text-3xl font-bold">點一份柴柴精選推薦如何</p>
        <p class="mt-8">這些可是本店的招牌</p>
        <ul class="list-decimal pl-10">
          <li>燻雞可頌不加蛋</li>
          <li>起司蛋餅</li>
          <li>中杯冰奶茶要多一點冰</li>
          <li>可不可的胭脂紅茶</li>
          <li>蘑菇鐵板麵加起司不可以加蛋</li>
          <li>彈珠汽水</li>
        </ul>
        <p class="mb-8">......</p>
        <p class="text-3xl">啊講不完直接去看菜單啦！</p>
      </div>
    </article>

    <div
      ref="menuRef"
      class="flex flex-1 items-center overflow-hidden rounded-md"
      :class="{ 'animate__animated animate__slideInRight animate__delay-2s animate__slow': menuIsVisible }"
    >
      <img v-if="menuIsVisible" src="/assets/menu.jpg" alt="menu" />
    </div>
  </section>
</template>
