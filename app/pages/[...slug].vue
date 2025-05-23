<script setup lang="ts">
const route = useRoute();

const collection = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!collection.data.value) {
  throw createError({
    message: "Page not found",
    statusCode: 404,
  });
}

const data = toRef(() => collection.data.value!);
useSeoMeta({ ...data.value.seo });
</script>

<template>
  <ContentRenderer v-if="data" :value="data" />
</template>
