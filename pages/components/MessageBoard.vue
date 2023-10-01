<script lang="ts" setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { messageList } from './data'

const isOpen = ref(true)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}

const currentSlide = ref(0)
</script>

<template>
  <div class="py-6">
    <SHeading>呱呱真心話留言版</SHeading>
    <Carousel v-model="currentSlide" :items-to-show="4">
      <Slide v-for="{ name, message } in messageList" :key="message" class="overflow-hidden rounded-lg">
        <div class="bg-[url('/assets/message.png')]">
          {{ name }}
        </div>
      </Slide>

      <template v-if="messageList.length" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                Payment successful
              </DialogTitle>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
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
