import { field, group } from "@nuxt/content/preview";

export default defineNuxtSchema({
  appConfig: {
    app: group({
      title: "App",
      icon: "i-ph-app-window-fill",
      fields: {
        updateDate: field({
          type: "string",
          title: "Update Date",
          description: "Дата обновления в формате ДД.М.ГГГГ",
        }),
      },
    }),
    portfolio: group({
      title: "Portfolio",
      icon: "i-ph-paperclip",
      fields: {
        ruResumeFile: field({
          type: "file",
          title: "CV File RU",
          description: "Резюме на русском",
        }),
        enResumeFile: field({
          type: "file",
          title: "CV File EN",
          description: "Резюме на английском",
        }),
      },
    }),
    contacts: group({
      title: "Contacts",
      icon: "i-ph-paper-plane",
      fields: {
        email: field({
          type: "string",
          title: "Email",
          icon: "i-ph-envelope",
        }),
        elsewhere: field({
          type: "object",
          title: "Elsewhere",
          icon: "i-ph-link-simple",
          fields: {
            title: field({
              type: "string",
              title: "Title",
            }),
            link: field({
              type: "string",
              title: "Link",
            }),
          },
        }),
      },
    }),
  },
});
