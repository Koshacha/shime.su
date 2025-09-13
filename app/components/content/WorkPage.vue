<script setup lang="ts">
interface WorkExperience {
  id: number;
  period: string;
  company: string;
  position: string;
  description: string[];
}
</script>

<template>
  <div class="">
    <h1 class="font-neue text-4xl font-bold mb-12 text-text-primary">
      {{ $t("work.title") }}
    </h1>

    <div class="space-y-16">
      <slot />
    </div>
  </div>
</template>
