<script setup lang="ts">
const playing = ref(true)
</script>

<template>
  <Transition
    leave-active-class="transition duration-500 ease-in"
    leave-from-class="transform opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div
      v-if="playing"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white bg-[url('/assets/loading.jpg')] bg-cover bg-[center_25%]"
    >
      <video autoplay muted playsinline class="h-full w-full object-cover" @ended="playing = false">
        <source src="assets/loading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </Transition>
</template>

<style scoped></style>
