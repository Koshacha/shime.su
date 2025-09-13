<template>
  <div class="min-h-[100dvh] flex flex-col">
    <main class="flex-grow">
      <div class="pt-48 pb-16 px-12 md:px-12">
        <div class="max-w-7xl mx-auto">
          <div class="content space-y-16">
            <slot />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
