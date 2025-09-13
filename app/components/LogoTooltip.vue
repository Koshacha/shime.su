<script setup lang="ts">
import { motion } from "motion-v";

const animations = {
  initial: {
    clipPath: "circle(0% at 25% 0%)",
    y: -2,
  },
  animate: {
    clipPath: "circle(150% at 0% 0%)",
    x: 0,
    y: 0,
  },
  exit: {
    clipPath: "circle(0% at 0% 0%)",
    y: -2,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
};
</script>

<template>
  <motion.div
    v-bind="animations"
    class="absolute left-0 top-full mt-2 bg-secondary rounded-lg shadow-lg p-4 border border-accent/10"
  >
    <div class="space-y-3">
      <p class="text-text-primary font-semibold">shimesu (示す)</p>
      <p class="text-text-secondary text-sm italic">/ɕiːmeːsuː/</p>
      <div class="space-y-1">
        <p class="text-text-primary text-sm font-semibold">
          {{ $t("logo.verb") }}
        </p>
        <ol
          class="list-decimal list-inside text-text-secondary text-sm space-y-1 ml-1"
        >
          <li>{{ $t("logo.first") }}</li>
          <li>{{ $t("logo.second") }}</li>
        </ol>
      </div>
    </div>
  </motion.div>
</template>
