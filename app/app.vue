<template>
  <div class="min-h-screen flex flex-col text-lg">
    <TheHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isMainPage = computed(() => {
  return route.path === "/" || route.path === "/ru" || route.path === "/en";
});
</script>
