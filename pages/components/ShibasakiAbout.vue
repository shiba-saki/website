<script setup lang="ts">
const debutDate = dayjs('2022-06-17 00:00:00+08:00')
const yearsOld = dayjs.duration(dayjs().diff(debutDate))?.asYears()?.toFixed() || 1
</script>

<template>
  <section class="bg-[url('/assets/bg.png')] bg-contain bg-repeat p-4">
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

      <article class="">
        <img src="/assets/about_02.png" alt="about shibasaki" />
      </article>

      <article class="flex flex-col text-2xl text-teal-600 shadow-gray-300 text-shadow-border md:flex-row-reverse">
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
      </article>
    </div>
  </section>
</template>

<style scoped>
/* .hidden-text {
  @apply relative cursor-pointer bg-gray-800/80 before:absolute before:inset-0 before:rounded-md before:bg-black before:content-[""];
} */
</style>
