import { PageData, PageMeta } from "@/models";

// <!-- Primary Meta Tags -->
// <title>Meta Tags — Preview, Edit and Generate</title>
// <meta name="title" content="Meta Tags — Preview, Edit and Generate">
// <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">

// <!-- Open Graph / Facebook -->
// <meta property="og:type" content="website">
// <meta property="og:url" content="https://metatags.io/">
// <meta property="og:title" content="Meta Tags — Preview, Edit and Generate">
// <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
// <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

// <!-- Twitter -->
// <meta property="twitter:card" content="summary_large_image">
// <meta property="twitter:url" content="https://metatags.io/">
// <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate">
// <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
// <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

export const convertMetaData = (metaData: PageData) => {
  const { title, description, type, url, image } = metaData;

  const data = [
    {
      name: "title",
      content: "Heko | Ecommerce - Vite + Vue 3 + TypeScript" + title,
    },
    {
      name: "description",
      content:
        description ||
        "Hello, I'm Duyen. A Front-end Developer/React Developer from VietNam",
    },
    {
      property: "og:type",
      content: type || "website",
    },
    {
      property: "og:url",
      content: `${import.meta.env.VITE_BASE_URL}/${url || ""}`,
    },
    {
      property: "og:title",
      content: "Heko | " + title,
    },
    {
      property: "og:description",
      content: "Heko | " + description,
    },
    {
      property: "og:image",
      content:
        image +
        "https://res.cloudinary.com/duzzoglqz/image/upload/v1686377094/A%CC%89nh_chu%CC%A3p_Ma%CC%80n_hi%CC%80nh_2023-06-10_lu%CC%81c_13.04.09_xu84e6.png",
    },
    {
      property: "twitter:url",
      content: `${import.meta.env.VITE_HOST_URL}/${url || ""}`,
    },
    {
      property: "twitter:title",
      content: "Heko | " + title,
    },
    {
      property: "twitter:description",
      content: "Heko | " + description,
    },
    {
      property: "twitter:image",
      content:
        image +
        "https://res.cloudinary.com/duzzoglqz/image/upload/v1686377094/A%CC%89nh_chu%CC%A3p_Ma%CC%80n_hi%CC%80nh_2023-06-10_lu%CC%81c_13.04.09_xu84e6.png",
    },
  ];
  return data;
};

const pageMeta: PageMeta = {
  home: {
    title: "Heko | Ecommerce - Vite + Vue 3 + TypeScript",
    description:
      "Hello, I'm Duyen. A Front-end Developer/React Developer from VietNam",
    keywords: "portfolio duyen, portfolio, duyen blogs",
  },

  ["404"]: {
    title: "404 Not Found",
    description: "Page not found",
  },

  login: {
    title: "Heko | Login",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    keywords: "stats, Statistics",
    breadcrumb: "Login",
  },

  signup: {
    title: "Heko | Signup",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    keywords: "stats, Statistics",
    breadcrumb: "Singup",
  },

  forgot: {
    title: "Heko | Forgot Password",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    keywords: "stats, Statistics",
    breadcrumb: "Forgot",
  },

  ["reset-password"]: {
    title: "Heko | Reset Password",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    keywords: "stats, Statistics",
    breadcrumb: "Singup",
  },

  contact: {
    title: "Heko | Contact Us",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    keywords: "stats, Statistics",
    breadcrumb: "Contact us",
  },

  blogs: {
    title: "Heko | Blogs",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    breadcrumb: "Blogs",
  },

  faq: {
    title: "Heko | FAQ",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    keywords: "stats, Statistics",
    breadcrumb: "Faq",
  },

  cart: {
    title: "Heko | Cart",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    keywords: "stats, Statistics",
    breadcrumb: "Cart",
  },

  checkout: {
    title: "Heko | Checkout",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",
    keywords: "stats, Statistics",
    breadcrumb: "Checkout",
  },

  products: {
    title: "Heko | Products",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",
    keywords: "Product Detail",
    currentURL: `${import.meta.env.VITE_BASE_URL}/products`,
    breadcrumb: "Product Detail",
  },

  product: {
    title: "Heko | Product Detail",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",
    keywords: "Product Detail",
    breadcrumb: "Product Detail",
  },

  payment: {
    title: "Heko | Payment",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    keywords: "stats, Statistics",
    breadcrumb: "Payment",
  },

  profile: {
    title: "Heko | Profile",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    keywords: "stats, Statistics",
    breadcrumb: "Profile",
  },

  orders: {
    title: "Heko | Orders",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    keywords: "stats, Statistics",
    breadcrumb: "Orders",
  },

  ["payment-method"]: {
    title: "Heko | Payment Method",
    description:
      "These are my personal statistics about me. It includes My Blogs and github Stats and top music stats.",

    keywords: "stats, Statistics",
    breadcrumb: "Payment",
  },
};

export default pageMeta;
