<script setup lang="ts">
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const props = defineProps<{
  images: string[];
  alts: string[];
}>();

const container = useTemplateRef("container");
const DEFAULT_CLASS = "columns-2 sm:columns-2";

if (props.images.length !== props.alts.length) {
  throw new Error("Images and alts arrays must have the same length.");
}

onMounted(() => {
  Fancybox.bind(container.value, "a", {});
});
</script>

<template>
  <div class="gap-4 my-8" ref="container">
    <div v-for="(src, i) in images" class="column relative mb-4" key="src">
      <a
        data-fancybox="gallery"
        :href="src"
        :title="alts[i]"
        :data-caption="alts[i]"
      >
        <img :src :alt="alts[i]" />
      </a>
    </div>
  </div>
</template>
