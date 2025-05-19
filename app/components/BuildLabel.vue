<script setup lang="ts">
const config = useAppConfig();
</script>

<template>
  <p>{{ $t("footer.updated") }}: {{ config?.app.updateDate }}</p>
</template>
