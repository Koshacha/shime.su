<template>
  <div class="min-h-screen flex flex-col text-lg">
    <lazy-nuxt-loading-indicator :hydrate-after="3000" />
    <the-header />
    <nuxt-layout :name="layout">
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const layout = computed(() => {
  switch (true) {
    case route.path === "/" || route.path === "/ru" || route.path === "/en":
      return "main";
    case (route.path.startsWith("/cases") && route.path !== "/cases") ||
      (route.path.startsWith("/en/cases") && route.path !== "/en/cases"):
      return "content";
    default:
      return "default";
  }
});
</script>
