<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!data.value) {
  // throw createError({ statusCode: 404 });
} else {
  useSeoMeta({ ...data.value.seo });
}
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
</template>
