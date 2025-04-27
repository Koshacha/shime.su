<script setup lang="ts">
const route = useRoute();
const appConfig = useAppConfig();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useSeoMeta({
  title: page.value.seo.title ?? page.value.title,
  description: page.value.seo.description ?? page.value.description,
});

onMounted(() => {
  console.log(appConfig);
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
