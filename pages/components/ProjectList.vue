<script lang="ts" setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

const list = reactive<{ id: string; html?: string; src?: string }[]>([
  {
    id: 'smRLZos5pjY',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/smRLZos5pjY?si=PaXQ2AUNxgG9t2_V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    id: 'UNHV3xLILEg',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UNHV3xLILEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    id: 'x_pf7CotP0I',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/x_pf7CotP0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    id: 'cL4iVjNA3dY',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/cL4iVjNA3dY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
])
</script>

<template>
  <div class="py-6">
    <SHeading>早安柴之美</SHeading>
    <Carousel :items-to-show="1">
      <Slide v-for="item in list" :key="item.html || item.src" class="overflow-hidden rounded-lg">
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
