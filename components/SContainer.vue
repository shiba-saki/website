<script setup lang="ts"></script>

<template>
  <div class="relative bg-[url('/5w.png')] bg-cover bg-fixed bg-center">
    <div class="absolute inset-0 bg-blend-multiply backdrop-blur" />
    <div class="mx-auto max-w-5xl backdrop-blur-0">
      <slot />
    </div>
  </div>
</template>
