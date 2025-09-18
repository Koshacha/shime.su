import { queryCollectionNavigation } from "@nuxt/content/server";

export default defineEventHandler(async (event) => {
  return queryCollectionNavigation(event, "content").where(
    "path",
    "NOT LIKE",
    "/en%"
  );
});
