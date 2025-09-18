import { queryCollection } from "@nuxt/content/server";

export default defineEventHandler(async (event) => {
  const locale = getCookie(event, "i18n_redirected");
  let loc = `/${locale}/cases`;
  loc = loc.replace("/ru", "");

  const projects = await queryCollection(event, "project")
    .select(
      "id",
      "title",
      "path",
      "tags",
      "description",
      "sort",
      "image",
      "year",
      "icons"
    )
    .where("path", "LIKE", `${loc}/%`)
    .order("year", "DESC")
    .all();

  return projects;
});
