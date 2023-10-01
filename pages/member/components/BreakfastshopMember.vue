<script setup lang="ts">
// 店長: '六伊'
// 總監: '蚊香'
// 美術: '阿本', 'X5哆啦', '冰霜夜雨', '凌最', '鬼哥'
// 表情', '音效管理顧問: '冰霜夜雨'
// 影片總監: '海絲', 'ㄅㄌ'
// 網路總監: '排氣管管'
// 雲端鹹魚: '吉行'
// 總廚: '仙貝'
// 音樂總監: '帝王'
// 攝影總監: '杰哥吉拉'
// 成員: '虎呱', '黑貓貓', '紫蘇萊姆', '星夜', '匠呱', 'HIHI', 'TuDing', 'Fuze', '小鶴', '峰靈', '老恩', '漢克', '維茲茲', '海參', '小郁', '小金魚', '阿睿', '宅叔'
const members = [
  {
    title: '店長',
    members: ['六伊'],
  },
  {
    title: '總監',
    members: ['蚊香'],
  },
  {
    title: '美術',
    members: ['阿本', 'X5哆啦', '冰霜夜雨', '凌最', '鬼哥'],
  },
  {
    title: '表情、音效管理顧問',
    members: ['冰霜夜雨'],
  },
  {
    title: '影片總監',
    members: ['海絲', 'ㄅㄌ'],
  },
  {
    title: '網路總監',
    members: ['排氣管管'],
  },
  {
    title: '雲端鹹魚',
    members: ['吉行'],
  },
  {
    title: '總廚',
    members: ['仙貝'],
  },
  {
    title: '音樂總監',
    members: ['帝王'],
  },
  {
    title: '攝影總監',
    members: ['杰哥吉拉'],
  },
  {
    title: '成員',
    members: [
      '虎呱',
      '黑貓貓',
      '紫蘇萊姆',
      '星夜',
      '匠呱',
      'HIHI',
      'TuDing',
      'Fuze',
      '小鶴',
      '峰靈',
      '老恩',
      '漢克',
      '維茲茲',
      '海參',
      '小郁',
      '小金魚',
      '阿睿',
      '宅叔',
    ],
  },
]
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <div
    id="header"
    class="relative flex flex-col items-center justify-center bg-black/50 bg-[url('/cover.jpg')] bg-cover bg-[center_25%] p-8 font-bold text-white bg-blend-multiply"
  >
    <SHeading>早安柴之美員工列表</SHeading>
    <ul class="flex flex-col items-center justify-center gap-4 text-center drop-shadow-lg">
      <li v-for="group in members" :key="group.title">
        <SHeading h4 class="text-4xl">{{ group.title }}</SHeading>
        <div class="flex flex-wrap justify-center text-2xl">
          <p v-for="(member, index) in group.members" :key="member">
            {{ member }}
            <span v-if="index < group.members.length - 1" class="mr-4"> | </span>
          </p>
        </div>
      </li>
    </ul>
    <img src="/mask-bottom.png" alt="mask" class="absolute bottom-0" />
  </div>
</template>
