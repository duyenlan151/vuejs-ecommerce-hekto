import { ShopexModel } from "@/models";

/** Dummy user data. */
export const sampleUserData = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
];

export const sliderContent = [
  {
    id: 1,
    title: "digitalBT",
    description: "digitalBD",
    bgImg: new URL(
      `@/assets/images/slider-img/stationery-banner.webp`,
      import.meta.url
    ).href,
    url: "/",
  },
  {
    id: 2,
    title: "stationeryBT",
    description: "stationeryBD",
    bgImg: new URL(
      `@/assets/images/slider-img/toy-banner.webp`,
      import.meta.url
    ).href,
    url: "/",
  },
  {
    id: 3,
    title: "toyBT",
    description: "toyBD",
    bgImg: new URL(
      `@/assets/images/slider-img/digital-banner.webp`,
      import.meta.url
    ).href,
    url: "/",
  },
  {
    id: 4,
    title: "houseBT",
    description: "houseBD",
    bgImg: new URL(
      `@/assets/images/slider-img/house-banner.webp`,
      import.meta.url
    ).href,
    url: "/",
  },
  {
    id: 5,
    title: "fashionBT",
    description: "fashionBD",
    bgImg: new URL(
      `@/assets/images/slider-img/fashion-banner.webp`,
      import.meta.url
    ).href,
    url: "/",
  },
  {
    id: 6,
    title: "beautyBT",
    description: "beautyBD",
    bgImg: new URL(
      `@/assets/images/slider-img/beauty-banner.webp`,
      import.meta.url
    ).href,
    url: "/",
  },
];

export const dataShopex: ShopexModel[] = [
  {
    id: 1,
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    // icon: <ITruckDelivery />,
    imageUrl: new URL(`@/assets/images/shopex/image01.png`, import.meta.url)
      .href,
  },
  {
    id: 2,
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    // icon: <ICashBack />,
    imageUrl: "/images/shopex/image02.png",
  },
  {
    id: 3,
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    // icon: <IPremium />,
    imageUrl: new URL(`@/assets/images/shopex/image03.png`, import.meta.url)
      .href,
  },
  {
    id: 4,
    title: "24/7 Support",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    // icon: <IHoursSupport />,
    imageUrl: new URL(`@/assets/images/shopex/image04.png`, import.meta.url)
      .href,
  },
];

export const dataFooter = {
  Categories: [
    "Laptops & Computers",
    "Cameras & Photography",
    "Smart Phones & Tablets",
    "Video Games & Consoles",
    "Waterproof Headphones",
  ],
  "Customer Care": [
    "My Account",
    "Discount",
    "Returns",
    "Orders History",
    "Order Tracking",
  ],
  Pages: [
    "Blog",
    "Browse the Shop",
    "Category",
    "Pre-Built Pages",
    "Visual Composer Elements",
    "WooCommerce Pages",
  ],
};

export const dataBlogs = [
  {
    id: 1,
    title: "Top esssential Trends in 2021",
    desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    author: "SaberAli",
    date: "21 August,2020",
    thumbnail: [
      new URL(`@/assets/images/blogs/image01.png`, import.meta.url).href,
    ],
  },
  {
    id: 2,
    title: "Top esssential Trends in 2021",
    desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    author: "Surfauxion",
    date: "21 August,2020",
    thumbnail: [
      new URL(`@/assets/images/blogs/image02.png`, import.meta.url).href,
    ],
  },
  {
    id: 3,
    title: "Top esssential Trends in 2021",
    desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    author: "SaberAli",
    date: "21 August,2020",
    thumbnail: [
      new URL(`@/assets/images/blogs/image03.png`, import.meta.url).href,
    ],
  },
];

export const links = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Products", path: "/products" },
  { id: 3, name: "Blog", path: "/blog" },
  { id: 4, name: "Contact", path: "/contact" },
];
