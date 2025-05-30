<script setup lang="ts">
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { type HTMLAttributes } from "vue";

const props = defineProps<{
  images: string[];
  alts: string[];
  class?: HTMLAttributes["class"];
}>();

const container = useTemplateRef("container");
const DEFAULT_CLASS = "columns-2";

if (props.images.length !== props.alts.length) {
  throw new Error("Images and alts arrays must have the same length.");
}

onMounted(() => {
  Fancybox.bind(container.value, "a", {});
});
</script>

<template>
  <div
    class="gap-4 my-8"
    :class="cn(DEFAULT_CLASS, props.class)"
    ref="container"
  >
    <div v-for="(src, i) in images" class="column relative mb-4" key="src">
      <a
        data-fancybox="gallery"
        :href="src"
        :title="alts[i]"
        :data-caption="alts[i]"
      >
        <nuxt-img
          :src="src"
          :alt="alts[i]"
          class="w-full h-full object-cover rounded-md my-0"
          sizes="sm:100vw md:50vw"
        />
      </a>
    </div>
  </div>
</template>
