<template>
  <div class="min-h-[100dvh] flex flex-col">
    <main class="flex-grow">
      <div class="pt-24 md:pt-48 pb-16 px-6 md:px-12">
        <div class="max-w-7xl mx-auto">
          <div class="content space-y-16 max-w-3xl">
            <slot />
          </div>
        </div>
      </div>
    </main>

    <the-footer />
  </div>
</template>
