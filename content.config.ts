import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSitemapCollection({
        type: "page",
        source: "**/*.md",
      })
    ),
    project: defineCollection(
      asSitemapCollection({
        type: "page",
        source: "**/cases/**/*.md",
        schema: z.object({
          sort: z.number(),
          published: z.boolean(),
          link: z.optional(z.string()),
          seoDescription: z.string(),
          tags: z.array(z.string()),
          image: z.string(),
          year: z.optional(z.string()),
          icons: z.optional(z.array(z.string())),
        }),
      })
    ),
  },
});
