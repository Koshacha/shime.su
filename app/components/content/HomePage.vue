<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center">
    <motion.div
      layout
      class="relative flex flex-col flex-grow justify-center items-center px-6 pt-24 md:pt-0"
    >
      <div class="text-center max-w-3xl mx-auto my-12">
        <div class="mb-4 animate-fade-in">
          <div
            class="text-text-secondary text-4xl font-medium tracking-4 leading-relaxed"
          >
            <slot />
          </div>
        </div>

        <div
          class="button-container mt-12 flex justify-center animate-fade-in"
        ></div>
      </div>
    </motion.div>
    <lazy-the-footer />
  </div>
</template>
