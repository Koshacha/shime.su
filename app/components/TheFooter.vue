<template>
  <footer class="py-6 px-6 md:px-12 text-text-secondary">
    <div class="container mx-auto">
      <div class="flex flex-row justify-between items-center">
        <lazy-build-label hydrate-never />

        <lazy-scroll-button variant="secondary" hydrate-on-interaction="scroll">{{
          $t("footer.back-to-top")
        }}</lazy-scroll-button>

        <lazy-contacts hydrate-on-visible>
          <the-button variant="secondary">{{
            $t("footer.contact")
          }}</the-button>
        </lazy-contacts>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>
