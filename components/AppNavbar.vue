<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

// const { navigation } = useContent()
const links = computed(() => {
  return [
    { name: '首頁', url: '/' },
    { name: '二創區', url: '/second' },
    { name: '成員', url: '/member' },
  ]
})
</script>

<template>
  <Disclosure v-slot="{ open }" as="nav" class="fixed inset-x-0 z-40">
    <div
      class="flex h-16 justify-end px-4 sm:px-6 lg:px-8"
      :class="{ 'border-r-4 border-teal-500 bg-indigo-50/90 pr-3': open }"
    >
      <div class="hidden items-center sm:ml-6 sm:flex sm:space-x-5">
        <NuxtLink
          v-for="{ name, url } in links"
          :key="url"
          :to="url"
          class="rounded-full bg-teal-500 bg-opacity-70 px-4 py-2 text-lg font-bold text-white"
        >
          {{ name }}
        </NuxtLink>
      </div>

      <div class="flex items-center sm:hidden">
        <!-- Mobile menu button -->
        <DisclosureButton
          class="relative inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-200/30 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-700"
        >
          <span class="absolute -inset-0.5" />
          <span class="sr-only">Open main menu</span>
          <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
          <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
        </DisclosureButton>
      </div>
    </div>

    <DisclosurePanel class="border-r-4 border-teal-500 bg-indigo-50/90 sm:hidden">
      <NuxtLink v-for="{ name, url } in links" :key="url" :to="url" class="w-100 flex">
        <DisclosureButton class="block w-full py-2 pl-3 pr-4 text-right text-lg font-bold text-teal-700">
          {{ name }}
        </DisclosureButton>
      </NuxtLink>
    </DisclosurePanel>
  </Disclosure>
</template>
