<script lang="ts" setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

const list = reactive<{ html?: string; src?: string }[]>([
  {
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UNHV3xLILEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/x_pf7CotP0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cL4iVjNA3dY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
])
</script>

<template>
  <div class="py-6">
    <SHeading class="text-zinc-800">呱呱企劃</SHeading>
    <Carousel :items-to-show="1">
      <Slide v-for="item in list" :key="item.html || item.src">
        <SIframe class="w-full" v-bind="item" />
      </Slide>

      <template v-if="list.length" #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
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
