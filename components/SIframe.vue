<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    html?: string
    width?: string | number
    height?: string | number
    src?: string
    title?: string
    id: string
  }>(),
  {
    html: '',
    width: '560',
    height: '315',
    src: 'https://www.youtube.com/embed/smRLZos5pjY',
    title: 'YouTube video player',
    id: 'smRLZos5pjY',
  }
)
const previewImg = getImgUrl(props.id)
const iframeHtml = /* html */ `
  <img src="${previewImg}" class="absolute left-0 top-0 h-full w-full" />
  ${props.html}
`
</script>

<template>
  <div v-if="!html" class="video-container">
    <img :src="previewImg" class="absolute left-0 top-0 h-full w-full" />
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
  <div v-else class="video-container" v-html="iframeHtml" />
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
