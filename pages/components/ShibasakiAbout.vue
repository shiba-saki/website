<script setup lang="ts">
const debutDate = dayjs('2022-06-17 00:00:00+08:00')
const yearsOld = dayjs.duration(dayjs().diff(debutDate))?.asYears()?.toFixed() || 1

const getImgPath = (fileName: string) => `/assets/about/${fileName}`
const authors = [
  {
    title: '繪師媽媽',
    name: 'Kaworu 卡歐露老師',
    bio: '@kaworu1030',
    imgFile: 'Kaworu.jpg',
  },
  {
    title: '建模師爸爸',
    name: 'RQ 老師',
    bio: '@bbb577x',
    imgFile: 'ArtQ.jpg',
  },
  {
    title: '粉絲名稱',
    name: '狐呱',
    bio: '暱稱: 呱呱',
    imgFile: 'gua.png',
  },
]

const aboutCards = [
  {
    content: '喜愛畫圖，特別擅長畫動物寫生',
    imgFile: 'art_suisaiga_fude.png',
  },
  {
    content: '熱愛唱歌，而且因為柴媽很喜歡，所以有獨特的張清芳聲線',
    imgFile: 'karaoke_mike.png',
  },
  {
    content: '迷因模仿柴犬，喜歡的迷因會去研究如何發聲',
    imgFile: '4a53d0f8a853aaf8.png',
  },
  {
    content: '跑山舒壓，騎檔車或是雙腿跑山都在行',
    imgFile: 'norimono_bike.png',
  },
  {
    content: '天文觀星，喜歡到身上有許多星星配飾',
    imgFile: 'bg_uchu_space.jpg',
  },
  {
    content: '恐怖相關，看恐怖片到麻木，但玩恐怖遊戲會變尖叫柴犬',
    imgFile: 'obake.png',
  },
  {
    content: '從小就非常喜歡青蛙，對青蛙的瞭解程度令人敬佩',
    imgFile: 'kaeru_amagaeru.png',
  },
  {
    content: '愛柴犬，但是會過敏，沒錯，對自己過敏',
    imgFile: 'pet_dog_harness.png',
  },
  {
    content: '對水豚尖叫，契機是世紀帝國外掛水豚大砲，第一眼就愛上這麼可愛的大老鼠',
    imgFile: 'capybara.png',
  },
  {
    content: '忠實布丁狗鐵粉，喜歡這隻黃色狗狗，十分注意背後的的＊字號',
    imgFile: '布丁丁.png',
  },
  {
    content: '長途散步，足跡遍布全台灣，更內建 GPS 的超認路柴犬',
    imgFile: 'pet_gps_dog.png',
  },
]
const { el: photoRef, displayed: photoDisplayed } = useElementDisplayed()
const { el: cardsRef, displayed: cardsDisplayed } = useElementDisplayed()

function getDealyClass(index: number) {
  const n = index % 6
  return n ? `animate__delay-${n}s` : ''
}
</script>

<template>
  <section class="bg-[url('/assets/bg.png')] bg-repeat bg-repeat p-4">
    <SHeading>關於柴崎楓音</SHeading>
    <div class="mx-auto flex max-w-5xl flex-col gap-8">
      <article class="flex flex-col text-2xl text-teal-600 shadow-gray-300 text-shadow-border md:flex-row">
        <p class="flex-[2] overflow-hidden rounded-md">
          <img src="/assets/about_01.jpeg" alt="about shibasaki" />
        </p>
        <div class="flex flex-1 flex-col items-center justify-around">
          <SHeading h3 class="my-4 text-center">柴崎楓音<br />Shibasaki Fuune</SHeading>
          <ul class="my-4 flex flex-1 flex-col justify-around text-xl">
            <li>暱稱: 芙芙、柴柴</li>
            <li>年齡: 鍊成年齡 {{ yearsOld }} 歲</li>
            <SSpoiler>已有多年跑山經驗</SSpoiler>
            <li>生日: 6/17 雙子座</li>
            <li>身高: 150cm</li>
            <li>體重: 很多罐罐</li>
          </ul>
        </div>
      </article>

      <ul class="my-4 flex-1 gap-4 text-xl md:flex">
        <li
          v-for="author in authors"
          :key="author.bio"
          class="m-4 mx-auto flex flex-1 flex-row items-center justify-center rounded-md bg-teal-50 p-8 md:flex-col"
        >
          <div class="h-40 w-40 overflow-hidden rounded-full">
            <img :src="getImgPath(author.imgFile)" :alt="author.name" class="object-fit" />
          </div>
          <div class="m-4 flex flex-1 flex-col items-center justify-center text-teal-700">
            <div class="">{{ author.title }}</div>
            <SHeading h3 class="text-xl">{{ author.name }}</SHeading>
            <div class="">{{ author.bio }}</div>
          </div>
        </li>
      </ul>

      <SHeading ref="cardsRef">柴柴特性卡牌</SHeading>

      <ul v-show="cardsDisplayed" class="my-4 flex-1 flex-wrap gap-4 text-xl md:flex">
        <li
          v-for="(data, i) in aboutCards"
          :key="data.content"
          class="animate__animated animate__fadeInUp m-4 mx-auto flex flex-1 flex-row items-center justify-center rounded-md bg-teal-50 p-8 md:flex-col"
          :class="getDealyClass(i)"
        >
          <div class="h-40 w-40 overflow-hidden rounded-full">
            <img :src="getImgPath(data.imgFile)" :alt="data.content" class="object-fit" />
          </div>
          <SHeading h4 class="m-4 flex-1 text-xl">{{ data.content }}</SHeading>
        </li>
      </ul>

      <SHeading>呱呱真情推薦</SHeading>
      <div class="m-4 mx-auto flex flex-1 flex-row items-center justify-center rounded-md bg-teal-50 p-8 md:flex-col">
        <div class="w-96 overflow-hidden rounded-lg" :class="{ 'animate__animated animate__wobble': photoDisplayed }">
          <img :src="getImgPath('phone.png')" alt="笑容" class="object-fit" />
        </div>
        <SHeading ref="photoRef" h4 class="m-4 flex-1 text-center text-xl">
          <p>柴總是展示自己真實的一面，與呱呱們分享生活中的點滴</p>
          <p>是隻在你晚上不睡覺，會來咬網路線又超級寵粉的愛饅頭柴犬</p>
          <p>目前正一步一腳印帶著呱呱們前往平靜的所在。</p>
        </SHeading>
      </div>

      <!-- <article class="flex flex-col text-2xl text-teal-600 shadow-gray-300 text-shadow-border md:flex-row-reverse">
        <p class="flex-1 overflow-hidden rounded-md">
          <img src="/assets/about_03.png" alt="about shibasaki" />
        </p>
        <div class="flex flex-1 flex-col items-center justify-around">
          <SHeading h3 class="my-4 text-center">柴柴的興趣愛好</SHeading>
          <ul class="my-4 flex flex-1 flex-col justify-around text-xl leading-none">
            <li>畫圖: 擅長畫動物寫生</li>
            <li>唱歌: 因為柴媽很喜歡，所以有獨特的張清芳聲線</li>
            <li>迷因: 迷因模仿柴犬，喜歡的迷因會去研究如何發聲</li>
            <li>跑山: 騎檔車或是雙腿跑山</li>
            <li>天文觀星: 身上有許多星星配飾</li>
            <li>生物相關: 對青蛙的瞭解程度令人敬佩</li>
            <li>恐怖相關: 看恐怖片到麻木，但玩恐怖遊戲會變尖叫柴犬</li>
          </ul>
        </div>
      </article>

      <article class="flex flex-col text-2xl text-teal-600 shadow-gray-300 text-shadow-border md:flex-row">
        <p class="flex-1 overflow-hidden rounded-md">
          <img src="/assets/about_05.png" alt="about shibasaki" />
        </p>
        <div class="flex flex-1 flex-col items-center justify-around">
          <SHeading h3 class="my-4 text-center">柴柴的特殊才藝</SHeading>
          <ul class="my-4 flex flex-1 flex-col justify-around text-xl leading-none">
            <li>夜市打靶，每次都滿靶</li>
            <li>躺著喝水不會嗆到(?)</li>
            <li>打蟑螂、活捉蟑螂，可提供客製化服務(?)</li>
            <li>認路，媲美 GPS 的柴犬</li>
            <li>長途散步，散步足跡遍布全台灣</li>
          </ul>
        </div>
      </article> -->
    </div>
  </section>
</template>

<style scoped>
/* .hidden-text {
  @apply relative cursor-pointer bg-gray-800/80 before:absolute before:inset-0 before:rounded-md before:bg-black before:content-[""];
} */
</style>
