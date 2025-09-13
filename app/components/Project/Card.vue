<script setup lang="ts">
defineProps<{
  project: {
    path: string;
    image: string;
    title: string;
    description: string;
    tags: string[];
    year?: string;
    icons?: string[];
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

        <div class="absolute top-4 right-4 flex items-center space-x-1">
          <span
            v-for="icon in project.icons"
            :key="icon"
            class="bg-secondary rounded-full size-5.5 p-1.5 flex items-center justify-center"
          >
            <icon :name="icon" class="size-4" />
          </span>

          <span
            v-if="project.year"
            class="text-base bg-secondary rounded-full px-3 py-0.5 font-bold font-neue"
            >{{ project.year }}</span
          >
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/10 group-hover:opacity-70 transition-opacity duration-300"
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
