import pageMeta, { convertMetaData } from "@/content/meta";
import { contactPath } from "../paths";

export const contact = {
  path: contactPath,
  name: "contact",
  component: () =>
    import(/* webpackChunkName: "contact" */ "@/views/Home/Home.vue"),
  meta: {
    ...pageMeta.contact,

    metaTags: convertMetaData(pageMeta.contact),
  },
};
