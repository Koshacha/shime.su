<script setup></script>

<template>
  <div class="mx-auto">
    <h1 class="text-3xl font-semibold mb-8 text-text-primary">
      {{ $t("projects.title") }}
    </h1>

    <lazy-project-list hydrate-never />
  </div>
</template>
