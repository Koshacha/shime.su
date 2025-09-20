<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { motion } from "motion-v";
import { onClickOutside } from "@vueuse/core";
import { useTemplateRef } from "vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const showLogoTooltip = ref(false);

const target = useTemplateRef<HTMLElement>("target");
onClickOutside(target, () => (isMobileMenuOpen.value = false));
</script>

<template>
  <nav
    ref="target"
    :class="[
      'fixed w-full z-50 transition-all duration-300 px-6 md:px-12 py-4',
      isScrolled ? 'bg-neutral-900/95 backdrop-blur-sm' : 'bg-transparent',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between">
      <div
        class="hidden md:flex items-center bg-secondary rounded-full px-1.5 py-1.5 relative"
      >
        <nuxt-link-locale
          to="/"
          class="text-xl font-semibold px-4"
          @mouseenter="showLogoTooltip = true"
          @mouseleave="showLogoTooltip = false"
        >
          <span class="text-text-primary">示す</span>
          <!-- <span class="text-text-secondary ml-2 text-sm">[shimesu]</span> -->
        </nuxt-link-locale>

        <lazy-logo-tooltip v-if="showLogoTooltip" />

        <lazy-navigation hydrate-on-visible />
      </div>

      <!-- Mobile Logo -->
      <nuxt-link-locale to="/" class="md:hidden text-xl font-semibold">
        <span class="text-text-primary">示す</span>
        <span class="text-text-secondary ml-2 text-sm">[shimesu]</span>
      </nuxt-link-locale>

      <div class="flex items-center space-x-3">
        <!-- Theme Switch -->
        <!-- <client-only>
          <lazy-theme-switcher />
        </client-only> -->

        <lazy-language-swither hydrate-on-visible />

        <resume-button class="max-md:hidden" />

        <trigger>
          <template #trigger="{ open, toggle }">
            <the-button
              variant="secondary"
              class="md:hidden p-2"
              @click="toggle()"
            >
              <span class="sr-only">Menu</span>
              <icon :name="open ? 'lucide:x' : 'lucide:menu'" class="size-5" />
            </the-button>
          </template>

          <template #default="{ close }">
            <lazy-navigation @changed="close()" is-mobile />
          </template>
        </trigger>
      </div>
    </div>
  </nav>
</template>
