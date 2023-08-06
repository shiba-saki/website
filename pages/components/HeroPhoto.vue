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
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <div
    id="header"
    class="relative flex h-screen flex-col items-center justify-center bg-black/50 bg-[url('/cover.jpg')] bg-cover bg-[center_25%] bg-blend-multiply"
  >
    <div class="flex flex-col items-center drop-shadow-lg">
      <SHeading h1 class="text-white">嘿！呱們～</SHeading>
      <h2 class="mt-2 font-mono text-4xl font-semibold text-white">吃早餐了嗎？</h2>
    </div>
    <div class="mt-8 flex gap-4">
      <div
        v-for="date in daysPassed"
        :key="date.type"
        class="animate__animated animate__pulse animate__slow flex h-24 w-24 animate-ping flex-col items-center justify-center rounded-full bg-cyan-800/80 text-white"
      >
        <p class="text-4xl">{{ date.value }}</p>
        <p class="">{{ date.type }}</p>
      </div>
    </div>
    <img src="/mask-bottom.png" alt="mask" class="absolute bottom-0" />
  </div>
</template>
