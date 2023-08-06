<script setup lang="ts">
import HeroPhoto from './components/HeroPhoto.vue'
import ProjectList from './components/ProjectList.vue'
</script>

<template>
  <HeroPhoto />
  <div class="relative bg-[url('/5w.png')] bg-cover bg-fixed bg-center">
    <div class="absolute inset-0 bg-blend-multiply backdrop-blur" />
    <div class="mx-auto max-w-5xl backdrop-blur">
      <ProjectList />
    </div>
  </div>
</template>
