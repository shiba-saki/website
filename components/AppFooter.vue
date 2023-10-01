<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="bg-teal-400">
    <div class="h-40 bg-[url('/assets/qs.jpeg')] bg-cover bg-center bg-repeat" />
    <p class="p-8 text-center text-lg shadow-white text-shadow-border">
      Copyright © {{ year }} 柴崎楓音 週年慶祝推廣網站 | 早安柴之美 隆重鉅獻
      <p>開發負責: 排氣管管</p>
      <p>開發協力: 吉行、六伊、凌最、海絲</p>
      <p>內容發想: 早餐柴之美全體成員</p>
    </p>
  </div>
</template>
