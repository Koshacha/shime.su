<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

watch(page, (newPage) => {
  console.log("Page not found", route.path);
  console.log(newPage);
});

if (!page.value) {
  // throw createError({
  //   statusCode: 404,
  //   statusMessage: "Page not found",
  //   fatal: true,
  // });
} else {
  useSeoMeta({
    title: page.value.seo.title ?? page.value.title,
    description: page.value.seo.description ?? page.value.description,
  });
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <p v-else>not found</p>
</template>
