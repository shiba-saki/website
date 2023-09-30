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
  <div class="relative flex flex-col items-center justify-center py-12">
    <div class="flex flex-col items-center drop-shadow-lg">
      <p class="text-8xl font-bold text-teal-700 shadow-white text-shadow-border">嘿！呱們～</p>
      <p class="mt-2 text-5xl font-bold text-teal-600 shadow-white text-shadow-border">在幹嘛呢？想聊聊天🍁✨</p>
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
    <p class="mt-2 text-5xl font-bold text-teal-600 shadow-white text-shadow-border">
      柴犬已經出沒這麼久了唷<span class="pl-3 text-red-600">❤️</span>
    </p>
  </div>
</template>
