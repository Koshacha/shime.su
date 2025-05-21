<script setup lang="ts">
import { motion } from "motion-v";

interface WorkExperience {
  id: number;
  period: string | number;
  company: string;
  position: string;
  description?: string[];
}

defineProps<WorkExperience>();
</script>

<template>
  <motion.div
    :key="id"
    class="relative"
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :delay="id * 1000"
  >
    <div class="mb-4">
      <span class="text-accent font-medium">{{ period }}</span>
    </div>

    <h3 class="text-2xl font-semibold mb-1 text-text-primary">
      {{ company }}
    </h3>
    <p class="text-xl text-text-secondary mb-2">
      {{ position }}
    </p>

    <div class="mb-2">
      <span class="text-text-secondary"><slot /></span>
    </div>

    <ul v-if="description" class="space-y-1 text-sm">
      <li
        v-for="(item, index) in description"
        :key="index"
        class="text-text-secondary"
      >
        {{ item }}
      </li>
    </ul>
  </motion.div>
</template>
