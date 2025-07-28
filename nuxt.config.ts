// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "motion-v/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/sitemap",
  ],
  devtools: { enabled: false },
  future: {
    compatibilityVersion: 4,
  },
  site: { url: "shime.su" },
  app: {
    head: {
      meta: [
        {
          name: "yandex-verification",
          content: "736e38214d13864b",
        },
      ],
      bodyAttrs: {
        class: "bg-neutral-900",
      },
      script: [
        {
          src: "https://eu.umami.is/script.js",
          defer: true,
          "data-website-id": "4361b3b2-95c6-40ca-820d-71bdb05af291",
        },
      ],
    },
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "ru",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.ts",
      },
      {
        code: "ru",
        name: "Русский",
        file: "ru.ts",
      },
    ],
  },
  image: {
    format: ["webp", "avif", "jpeg", "jpg", "png"],
  },
  tailwindcss: {
    config: {
      content: [
        "./app/components/**/*.{js,vue,ts}",
        "./content/**/*.md",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./nuxt.config.{js,ts}",
        "./app/app.vue",
      ],
      theme: {
        extend: {
          colors: {
            primary: "#1a1a1a",
            secondary: "#2c2c2c",
            accent: "#c4c4c4",
            "text-primary": "#f0f0f0",
            "text-secondary": "#a0a0a0",
          },
          fontFamily: {
            sans: ["Inter", "system-ui", "sans-serif"],
          },
          animation: {
            "fade-in": "fadeIn 0.5s ease-in-out",
            "slide-up": "slideUp 0.6s ease-out",
            scale: "scale 0.3s ease-in-out",
          },
          keyframes: {
            fadeIn: {
              "0%": { opacity: "0" },
              "100%": { opacity: "1" },
            },
            slideUp: {
              "0%": { transform: "translateY(20px)", opacity: "0" },
              "100%": { transform: "translateY(0)", opacity: "1" },
            },
            scale: {
              "0%": { transform: "scale(0.95)" },
              "100%": { transform: "scale(1)" },
            },
          },
        },
      },
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "vitesse-dark",
        },
      },
    },
  },
  compatibilityDate: "2024-04-03",
  routeRules: {
    "/**": { prerender: true },
  },
});
