<template>
  <div class="relative" @mouseover="visible = true" @mouseleave="resume()">
    <slot />
    <motion.div
      @mouseover="pause()"
      @mouseleave="visible = false"
      v-show="visible"
      class="absolute bottom-full mb-2 right-0 w-64 bg-secondary rounded-lg shadow-lg p-4 border border-accent/10"
    >
      <div class="space-y-4">
        <div>
          <div class="text-text-secondary mb-1 text-sm">Email</div>
          <a
            :href="`mailto:${config.contacts.email}`"
            class="text-text-primary hover:text-accent transition-colors"
          >
            {{ config.contacts.email }}
          </a>
        </div>
        <div>
          <div class="text-text-secondary mb-1 text-sm">
            {{ $t("contacts.elsewhere") }}
          </div>
          <div class="grid grid-cols-2 gap-2">
            <a
              v-for="contact in config.contacts.elsewhereLinks"
              :href="contact.value"
              class="text-text-primary hover:text-accent transition-colors"
              >{{ contact.name }}</a
            >
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import { useTimeoutPoll } from "@vueuse/core";

const config = useAppConfig();

const visible = ref(false);

async function hideElement() {
  visible.value = false;
  pause();
}

const { pause, resume } = useTimeoutPoll(hideElement, 500, {
  immediate: false,
});
</script>
