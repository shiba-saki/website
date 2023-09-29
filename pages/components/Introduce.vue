<script lang="ts" setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

const imageList = reactive<{ src: string }[]>([
  {
    src: '/Introduce/01.jpg',
  },
  {
    src: '/Introduce/02.png',
  },
  {
    src: '/Introduce/03.png',
  },
  {
    src: '/Introduce/05.png',
  },
  {
    src: '/Introduce/04.jpg',
  },
  {
    src: '/Introduce/06.png',
  },
  {
    src: '/Introduce/07.png',
  },
])

const textList = reactive<string[]>([
  '　柴崎楓音　Shibasaki Fuune<br>　暱稱：芙芙、柴柴<br>　年齡：鍊成年齡1歲，但已經有很多年跑山經驗。<br>　生日：6/17，雙子座<br>　身高：150cm<br>　體重：很多罐罐',
  '　繪師媽媽：Kaworu卡歐露老師<br>　建模師爸爸：RQ老師<br>　粉絲名稱：狐呱',
  '　興趣：<br>　畫圖，擅長畫動物寫生<br>　唱歌，因為柴媽很喜歡，所以有獨特的張清芳聲線<br>　迷因，迷因模仿柴犬，喜歡的迷因會去研究如何發聲<br>' +
    '　跑山，騎檔車或是雙腿跑山<br>　天文觀星，身上有許多星星配飾<br>　生物相關，對青蛙的瞭解程度令人敬佩<br>　恐怖相關，看恐怖片到麻木，但玩恐怖遊戲會變尖叫柴犬',
  '　擅長：<br>　夜市打靶，每次都滿靶<br>　躺著喝水不會嗆到(?)<br>　打蟑螂、活捉蟑螂，可提供客製化服務(?)<br>　認路，媲美GPS的柴犬<br>　長途散步，散步足跡遍布全台灣',
  '　喜歡的食物：<br>　燻雞可頌不加蛋<br>　起司蛋餅<br>　中杯冰奶茶要多一點冰<br>　可不可的胭脂紅茶<br>' +
    '　蘑菇鐵板麵加起司不可以加蛋<br>　彈珠汽水.....更多請見早安柴之美菜單',
  '　最喜歡的動物：<br>　青蛙，從小就非常喜歡<br>　柴犬，但是會過敏，沒錯，對自己過敏。<br>　水豚，契機是世紀帝國外掛水豚大砲，第一眼就愛上這麼可愛的大老鼠！<br>　布丁狗，因為喜歡黃色又是狗狗，十分注意他的＊字號。',
  '　特色：<br>　柴總是展示自己真實的一面，與呱呱們分享生活中的點滴，<br>　是隻在你晚上不睡覺，會來咬網路線又超級寵粉的可愛饅頭柴犬，<br>　目前正一步一腳印帶著呱呱們前往平靜的所在。 ',
])

// 将图片和文字组合到一个列表中
const combinedList = ref([])

for (let i = 0; i < imageList.length && i < textList.length; i++) {
  combinedList.value.push({ image: imageList[i], text: textList[i] })
}
</script>

<template>
  <div class="py-6">
    <SHeading class="">柴崎楓音介紹</SHeading>
    <Carousel :items-to-show="1">
      <Slide v-for="(item, index) in combinedList" :key="index">
        <div class="flex items-center bg-white bg-opacity-75">
          <!-- 左半部分顯示圖片 -->
          <div class="w-2/5">
            <img class="w-full" :src="item.image.src" alt="Image" />
          </div>

          <!-- 右半部分顯示文字 -->
          <div class="w-3/5 text-left">
            <p style="color: #007267" v-html="item.text"></p>
          </div>
        </div>
      </Slide>

      <template v-if="combinedList.length" #addons>
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

.background-with-overlay {
  /* 设置背景图片 */
  background-image: url('/your-background-image.jpg');
  /* 设置背景大小和位置 */
  background-size: cover;
  background-position: center center;
  /* 设置背景遮罩，这里使用白色半透明 */
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8); /* 白色半透明 */
  }
}
</style>
