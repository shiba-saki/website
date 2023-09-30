<script lang="ts" setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel'

const list = reactive<{ html?: string; src?: string; id: string }[]>([
  {
    id: 'fE-iEp5g_Os',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fE-iEp5g_Os" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    id: 'V39u1dyp_OE',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/V39u1dyp_OE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    id: 'gCdlijS4ypY',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gCdlijS4ypY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    id: 'TLeixfgAE80',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TLeixfgAE80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    id: 'odLgrvjonTc',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/odLgrvjonTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    id: 'jNA-OY6m944',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jNA-OY6m944" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    id: 'aHN1zWvKmmU',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/aHN1zWvKmmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  {
    id: '6DmsW-Xrj0k',
    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6DmsW-Xrj0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
])
function getImgUrl(id: string) {
  return `https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`
}

const currentSlide = ref(0)

function slideTo(val: number) {
  currentSlide.value = val
}
</script>

<template>
  <div class="py-6">
    <SHeading>柴崎楓音烤肉精華</SHeading>

    <Carousel v-model="currentSlide" :items-to-show="1" :wrap-around="true">
      <Slide v-for="item1 in list" :key="item1.html || item1.src">
        <SIframe class="w-full" v-bind="item1" />
      </Slide>

      <template v-if="list.length" #addons>
        <Navigation />
      </template>
    </Carousel>

    <Carousel id="thumbnails" v-model="currentSlide" :items-to-show="4" :wrap-around="true">
      <Slide v-for="(item, index) in list" :key="item.html || item.src">
        <div class="p-1">
          <img :src="getImgUrl(item.id)" @click="slideTo(index)" />
          <!-- <div class="absolute inset-0" @click="slideTo(index)" /> -->
          <!-- <SIframe class="carousel__item w-full" v-bind="item" /> -->
        </div>
      </Slide>
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
