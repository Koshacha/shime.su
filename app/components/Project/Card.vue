<script setup lang="ts">
defineProps<{
  project: {
    path: string;
    image: string;
    title: string;
    description: string;
    tags: string[];
  };
  index: number;
}>();

const imageLoaded = ref(false);
</script>

<template>
  <div
    class="project-card group relative bg-secondary rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
  >
    <div v-if="project.image" class="relative h-48 overflow-hidden">
      <nuxt-link-locale :to="project.path">
        <nuxt-img
          v-if="!imageLoaded"
          :src="project.image"
          :alt="project.title"
          format="webp"
          class="absolute inset-0 w-full h-full object-cover blur-xl"
          width="1"
          height="1"
          quality="10"
        />
        <nuxt-img
          :src="project.image"
          :alt="project.title"
          format="webp"
          class="relative w-full h-full object-cover"
          width="410"
          height="192"
          quality="90"
          preload
          @load="imageLoaded = true"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
        ></div>
      </nuxt-link-locale>
    </div>

    <div class="p-4">
      <nuxt-link-locale
        :to="project.path"
        class="font-neue text-lg font-bold text-text-primary mb-1 block"
      >
        {{ project.title }}
      </nuxt-link-locale>
      <div class="text-text-secondary text-base">
        {{ project.description }}
      </div>
    </div>
  </div>
</template>
