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

const currentSlide = ref(0)

function slideTo(val: number) {
  currentSlide.value = val
}
</script>

<template>
  <div class="py-6">
    <SHeading>柴崎楓音烤肉精華剪輯</SHeading>
    <p class="mb-4 rounded-lg bg-teal-50/70 p-8 text-center text-xl text-teal-600 shadow-white text-shadow-border">
      特別感謝三位烤肉 Man 熱情分享與推薦:<br />
      <a class="underline" target="_blank" href="https://twitter.com/Yi_yuss">伊鬱</a><br />
      <a class="underline" target="_blank" href="https://twitter.com/i_love_dd_0u0">としき DD烤肉桑</a><br />
      <a class="underline" target="_blank" href="https://twitter.com/mokiChen1">墨櫻moki💎博祈達bokida❄️</a>
    </p>

    <Carousel v-model="currentSlide" :items-to-show="1" :wrap-around="true">
      <Slide v-for="item1 in list" :key="item1.html || item1.src" class="overflow-hidden rounded-lg">
        <SIframe class="w-full" v-bind="item1" />
      </Slide>

      <template v-if="list.length" #addons>
        <Navigation />
      </template>
    </Carousel>

    <Carousel id="thumbnails" v-model="currentSlide" :items-to-show="4" :wrap-around="true">
      <Slide v-for="(item, index) in list" :key="item.html || item.src">
        <div class="m-1 overflow-hidden rounded-lg">
          <img :src="getImgUrl(item.id)" @click="slideTo(index)" />
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
