import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    parent: group({
      title: "Основные настройки",
      icon: "uil:setting",
      fields: {
        ogImage: field({
          type: "file",
          title: "og:image",
        }),
      },
    }),
  },
});
