import pageMeta, { convertMetaData } from "@/content/meta";
import { homePath } from "../paths";

export const home = {
  path: homePath,
  name: "Home",
  component: () =>
    import(/* webpackChunkName: "home" */ "@/views/Home/Home.vue"),
  meta: {
    layout: "LayoutMain",
    ...pageMeta.home,

    metaTags: convertMetaData(pageMeta.home),
  },
};
