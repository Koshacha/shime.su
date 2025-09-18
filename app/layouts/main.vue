<template>
  <div class="min-h-[100svh] w-full flex flex-col relative">
    <div class="absolute inset-0 w-full h-full">
      <prismatic-background
        animationType="rotate3d"
        :intensity="1"
        :speed="0.2"
        :distort="1.0"
        :paused="false"
        :offset="{ x: 0, y: 0 }"
        :hoverDampness="0.25"
        :rayCount="12"
        mixBlendMode="lighten"
        :colors="['#ff007a', '#4d3dff', '#ffffff']"
      />
    </div>
    <main class="flex-grow">
      <div>
        <slot />
      </div>
    </main>
  </div>
</template>
