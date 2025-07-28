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
</script>

<template>
  <div
    class="project-card group relative bg-secondary rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
  >
    <div v-if="project.image" class="relative h-48 overflow-hidden">
      <nuxt-link-locale :to="project.path">
        <nuxt-img
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="sm:100vw md:50vw lg:400px"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
        ></div>
      </nuxt-link-locale>
    </div>

    <div class="p-4">
      <nuxt-link-locale
        :to="project.path"
        class="text-lg font-semibold text-text-primary mb-1 block"
      >
        {{ project.title }}
      </nuxt-link-locale>
      <div class="text-text-secondary text-sm">
        {{ project.description }}
      </div>
    </div>
  </div>
</template>
