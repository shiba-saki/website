<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'

import HeroPhoto from './components/HeroPhoto.vue'
import ShibasakiTimer from './components/ShibasakiTimer.vue'
import ProjectList from './components/ProjectList.vue'
import HighlightClip from './components/HighlightClip.vue'
import Introduce from './components/Introduce.vue'
</script>

<template>
  <HeroPhoto />
  <div class="relative bg-[url('/5w.png')] bg-cover bg-fixed bg-center">
    <div class="absolute inset-0 bg-blend-multiply backdrop-blur" />
    <div class="mx-auto max-w-5xl backdrop-blur-0">
      <ShibasakiTimer />
      <ProjectList />
      <HighlightClip />
      <Introduce />
    </div>
  </div>
</template>
