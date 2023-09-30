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
        class: 'text-7xl font-bold text-teal-700 shadow-white text-shadow',
      }
    case props.h3:
      return {
        tag: 'h3',
        class: 'font-bold text-shadow-border shadow-white text-teal-700',
      }
    case props.h4:
      return {
        tag: 'h4',
        class: 'font-bold text-shadow-border shadow-white text-teal-700',
      }
    case props.h2:
    default:
      return {
        tag: 'h2',
        class: 'py-6 text-center text-6xl font-bold text-teal-700 shadow-white text-shadow-border',
      }
  }
})
</script>

<template>
  <component :is="element.tag" :class="element.class">
    <slot />
  </component>
</template>
