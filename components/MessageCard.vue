<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    message?: string
    small?: boolean
  }>(),
  {
    name: '',
    message: '',
  }
)
</script>

<template>
  <div
    class="flex w-[472px] flex-col items-center justify-center bg-[url('/assets/message.png')] bg-contain font-bold text-teal-700"
    :class="small ? 'h-[293px]' : 'h-full pb-[25px] pl-[75px] pr-[100px] pt-[75px]'"
  >
    <p class="text-2xl shadow-white text-shadow">{{ name }}</p>
    <p v-if="!small" class="mt-4" v-html="message.replace('\n', '<br />')"></p>
  </div>
</template>
