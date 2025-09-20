<script setup lang="ts">
import { motion } from "motion-v";

const route = useRoute();

const { data } = await useFetch("/api/navigation");

const { isMobile } = defineProps<{
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

onMounted(() => {
  if (!isMobile) return;
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  if (!isMobile) return;
  document.body.style.overflow = "auto";
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
    <teleport to="body">
      <div
        ref="mobile-menu"
        class="fixed inset-0 bg-neutral-900/95 backdrop-blur-sm flex flex-col gap-y-4 px-4 py-8 items-center justify-center"
        @click="$emit('changed')"
      >
        <motion.div
          v-for="(route, i) in data"
          :key="route.path"
          :initial="{ x: 10 * (i + 1), opacity: 0 }"
          :animate="{ x: 0, opacity: 1 }"
          :transition="{ delay: i * 0.2, duration: 0.3 }"
        >
          <nuxt-link-locale
            :to="route.path"
            @click="() => $emit('changed')"
            class="px-12 py-3 inline-block rounded-full bg-white text-black border-accent/10 text-xl transition-colors"
          >
            {{ $t(`nav.${route.path === "/" ? "home" : route.path.slice(1)}`) }}
          </nuxt-link-locale>
        </motion.div>
      </div>
    </teleport>
  </template>
</template>
