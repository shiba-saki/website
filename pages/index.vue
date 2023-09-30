<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'

import HeroPhoto from './components/HeroPhoto.vue'
import ShibasakiTimer from './components/ShibasakiTimer.vue'
import ProjectList from './components/ProjectList.vue'
import HighlightClip from './components/HighlightClip.vue'
import ShibasakiAbout from './components/ShibasakiAbout.vue'
</script>

<template>
  <HeroPhoto />

  <SContainer>
    <ShibasakiTimer />
    <ProjectList />
  </SContainer>

  <ShibasakiAbout />

  <SContainer>
    <HighlightClip />
  </SContainer>
</template>
