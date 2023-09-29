<script setup lang="ts">
import Secondcreationworld from './components/Secondcreationworld.vue'
import Secondcreation from './components/Secondcreation.vue'
</script>

<template>
  <Secondcreationworld />
  <div class="relative bg-[url('/5w.png')] bg-cover bg-fixed bg-center">
    <div class="absolute inset-0 bg-blend-multiply backdrop-blur" />
    <div class="mx-auto max-w-5xl backdrop-blur">
      <Secondcreation />
    </div>
  </div>
</template>
