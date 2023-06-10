import pageMeta, { convertMetaData } from "@/content/meta";
import { blogPath } from "../paths";

export const blog = {
  path: blogPath,
  name: "blog",
  component: () =>
    import(/* webpackChunkName: "blogs" */ "@/views/Home/Home.vue"),
  meta: {
    ...pageMeta.blogs,

    metaTags: convertMetaData(pageMeta.blogs),
  },
};
