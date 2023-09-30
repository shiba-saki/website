<script setup lang="ts">
const hiddenState = ref(true)
</script>

<template>
  <div
    class="inline-block w-fit cursor-pointer overflow-hidden rounded-sm bg-slate-500/30 px-1"
    :class="{ spoiler: hiddenState }"
    @click="hiddenState = !hiddenState"
  >
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.spoiler {
  @apply relative cursor-pointer bg-gray-800/80 before:absolute before:inset-0 before:rounded-md before:bg-black before:content-[""];
}
</style>
