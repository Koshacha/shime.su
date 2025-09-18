import { queryCollection } from "@nuxt/content/server";

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    slug: string;
  }>(event);

  return queryCollection(event, "content").path(body.slug).first();
});
