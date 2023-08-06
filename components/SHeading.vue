<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    h1?: boolean
    h2?: boolean
    h3?: boolean
    h4?: boolean
  }>(),
  {
    h1: false,
    h2: true,
    h3: false,
    h4: false,
  }
)

const element = computed(() => {
  switch (true) {
    case props.h1:
      return {
        tag: 'h1',
        class: 'font-mono text-7xl font-medium',
      }
    case props.h3:
      return {
        tag: 'h3',
        class: 'font-semibold',
      }
    case props.h4:
      return {
        tag: 'h4',
        class: 'font-semibold',
      }
    case props.h2:
    default:
      return {
        tag: 'h2',
        class: 'py-6 text-center text-5xl font-semibold',
      }
  }
})
</script>

<template>
  <component :is="element.tag" :class="element.class">
    <slot />
  </component>
</template>
