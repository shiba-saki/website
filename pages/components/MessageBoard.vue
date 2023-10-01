<script lang="ts" setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { messageList } from './data'

// const isOpen = ref(true)

// function closeModal() {
//   isOpen.value = false
// }
// function openModal() {
//   isOpen.value = true
// }

const currentSlide = ref(0)
</script>

<template>
  <div class="py-6">
    <SHeading>呱呱真心話留言版</SHeading>

    <Carousel v-model="currentSlide" :items-to-show="1" :wrap-around="true">
      <Slide v-for="{ name, message } in messageList" :key="message" class="overflow-hidden rounded-lg">
        <MessageCard :name="name" :message="message" />
      </Slide>

      <template v-if="messageList.length" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <!-- <Carousel id="thumbnails" v-model="currentSlide" :items-to-show="4" :wrap-around="true">
      <Slide v-for="{ name, message } in messageList" :key="message">
        <div class="m-2 w-32 rounded-xl border-8 border-[#d5b472] bg-[#fff0d0] font-bold text-teal-700">
          {{ name }}
        </div>
      </Slide>
    </Carousel> -->
  </div>
</template>

<style lang="postcss" scoped>
:deep(button.carousel__prev),
:deep(button.carousel__next) {
  @apply rounded-full bg-gray-100;
}
:deep(button.carousel__prev--disabled),
:deep(button.carousel__next--disabled) {
  @apply hidden;
}
</style>
