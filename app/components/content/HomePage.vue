<script setup lang="ts">
import { motion } from "motion-v";

defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="min-h-[100dvh] flex flex-col justify-center">
    <motion.div
      layout
      class="relative flex flex-col flex-grow justify-center items-center px-6 pt-24 md:pt-0"
    >
      <div class="text-center max-w-5xl mx-auto my-12">
        <div class="mb-4">
          <BlurText
            :text="text"
            :delay="100"
            class-name="text-text-secondary font-neue text-5xl max-sm:text-left max-sm:font-bold lg:text-6xl tracking-6 leading-tight lg:leading-snug text-balance md:justify-center"
            animate-by="words"
            direction="bottom"
            :threshold="0.1"
            root-margin="0px"
            :step-duration="0.2"
          />
        </div>

        <div
          class="button-container mt-12 flex justify-center animate-fade-in"
        ></div>
      </div>
    </motion.div>
    <lazy-the-footer />
  </div>
</template>
