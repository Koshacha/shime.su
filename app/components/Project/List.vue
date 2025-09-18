<script setup lang="ts">
import { ref } from "vue";

const { data: projects } = await useFetch("/api/projects");

const tags = computed(() => {
  const order = ["Vue.js", "React.js", "_", "CMS", "Backend"];

  const tags = projects.value
    .map((page) => page.tags)
    .flat()
    .sort((a, b) => {
      return order.indexOf(a) - order.indexOf(b);
    });

  const distinctTags = new Set(tags);
  return [...distinctTags];
});

const currentTag = ref("");

const filtered = computed(() => {
  if (!projects.value) return [];
  if (currentTag.value === "") return projects.value;
  return projects.value.filter((project) => {
    if ("tags" in project && Array.isArray(project?.tags)) {
      return project.tags.includes(currentTag.value);
    }
    return false;
  });
});
</script>

<template>
  <div class="mb-8 overflow-x-auto whitespace-nowrap pb-2">
    <project-filter :categories="tags ?? []" v-model="currentTag" />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <project-card
      v-for="(project, index) in filtered"
      :key="project.id"
      :project="project"
      :index="index"
    />
  </div>
</template>
