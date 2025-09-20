<template>
  <slot name="trigger" :open="open" :toggle="toggle" :set="setOpen" />
  <slot name="default" v-if="open" :close="() => (open = false)" />
</template>

<script lang="ts" setup>
const open = ref(false);

const toggle = () => {
  open.value = !open.value;
};

const setOpen = (value: boolean) => {
  open.value = value;
};
</script>
