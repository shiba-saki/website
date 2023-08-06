<script setup lang="ts">
withDefaults(
  defineProps<{
    html?: string
    width?: string | number
    height?: string | number
    src?: string
    title?: string
  }>(),
  {
    html: '',
    width: '560',
    height: '315',
    src: 'https://www.youtube.com/embed/UNHV3xLILEg',
    title: 'YouTube video player',
  }
)
</script>

<template>
  <div v-if="!html" class="video-container">
    <slot>
      <iframe
        :width="width"
        :height="height"
        :src="src"
        :title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </slot>
  </div>
  <div v-else class="video-container" v-html="html" />
</template>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container :deep(iframe),
.video-container :deep(object),
.video-container :deep(embed) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
