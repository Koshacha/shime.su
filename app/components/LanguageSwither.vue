<template>
  <div class="relative">
    <button
      @click="isLanguageMenuOpen = !isLanguageMenuOpen"
      class="px-3 py-1.5 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors text-text-primary flex items-center space-x-1"
    >
      <span>{{ locale.toLocaleUpperCase() }}</span>
      <!-- <span class="ml-1 text-xs">▼</span> -->
    </button>

    <div
      v-if="isLanguageMenuOpen"
      ref="target"
      class="absolute right-0 mt-2 w-32 bg-secondary rounded-lg shadow-lg py-1 border border-accent/10"
    >
      <a
        v-for="lang in locales"
        :href="switchLocalePath(lang.code)"
        :key="lang.code"
        class="block w-full px-4 py-2 text-left hover:bg-accent/10 transition-colors text-sm"
        :class="
          locale === lang.code ? 'text-text-primary' : 'text-text-secondary'
        "
      >
        {{ lang.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// import i18nConfig from "~/i18n/i18n.config";
import { onClickOutside } from "@vueuse/core";
import { useTemplateRef } from "vue";

// type AvailableLocales = Awaited<
//   ReturnType<typeof i18nConfig>
// >["availableLocales"][0];
type AvailableLocales = "en" | "ru";

const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const locales: Array<{
  code: AvailableLocales;
  name: string;
}> = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "ru",
    name: "Русский",
  },
];

const isLanguageMenuOpen = ref(false);

const target = useTemplateRef<HTMLElement>("target");

onClickOutside(target, () => (isLanguageMenuOpen.value = false));
</script>
