<script setup lang="ts">
import { motion } from "motion-v";

const route = useRoute();

const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("content").where("path", "NOT LIKE", "/en%");
});

defineProps<{
  isMobile?: boolean;
}>();

defineEmits<{
  (e: "changed"): void;
}>();

const currentRoute = computed(() => {
  let path = route.path;
  path = path.replace("/en", "/").replace("//", "/");
  if (path.startsWith("/cases")) return "/cases";
  return path;
});
</script>

<template>
  <template v-if="!isMobile">
    <nuxt-link-locale
      v-for="route in data"
      :key="route.path"
      :to="route.path"
      class="px-4 py-1.5 rounded-full transition-all duration-300 relative"
      :class="
        route.path === currentRoute
          ? 'text-text-primary'
          : 'text-text-secondary hover:text-text-primary'
      "
      prefetch-on="interaction"
    >
      {{ $t(`nav.${route.path === "/" ? "home" : route.path.slice(1)}`) }}
      <motion.div
        v-if="route.path === currentRoute"
        class="absolute inset-0 bg-accent/20 rounded-full"
        layout-id="background-card"
        id="background-card"
      />
    </nuxt-link-locale>
  </template>
  <template v-else>
    <nuxt-link-locale
      v-for="route in data"
      :key="route.path"
      :to="route.path"
      @click="() => $emit('changed')"
      class="px-4 py-2 rounded-lg transition-colors"
      :class="
        route.path === currentRoute
          ? 'bg-accent/20 text-text-primary'
          : 'text-text-secondary hover:text-text-primary'
      "
    >
      {{ $t(`nav.${route.path === "/" ? "home" : route.path.slice(1)}`) }}
    </nuxt-link-locale>
  </template>
</template>
