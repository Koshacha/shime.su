<script setup lang="ts">
const { data: page } = await useFetch("/api/page", {
  method: "POST",
  body: { slug: useRoute().path },
});

if (!page.value) {
  throw createError({ statusCode: 404 });
} else {
  useSeoMeta({ ...page.value.seo });
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
</template>
