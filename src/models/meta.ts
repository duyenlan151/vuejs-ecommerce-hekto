export type PageData = {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
  breadcrumb?: string;
  suffix?: string;
  currentURL?: string;
  previewImage?: string;
  type?: string;
  url?: string;
};

export type PageMeta = {
  home: PageData;
  products: PageData;
  login: PageData;
  blogs: PageData;
  contact: PageData;
  ["404"]: PageData;
  [key: string]: any;
};
