export enum EProductItemType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TRENDING = "trending",
}

export const ProductItemType: Record<EProductItemType, string | number> = {
  [EProductItemType.PRIMARY]: "text-pink-1 border-b border-pink-1",
  [EProductItemType.SECONDARY]: "text-black",
  [EProductItemType.TRENDING]: "",
};

export const classProductItem = {
  [EProductItemType.PRIMARY]: {
    "group-icons": "top-2",
    "bg-color": "bg-pink-3",
    shadow: "shadow",
    img: "",
  },

  [EProductItemType.SECONDARY]: {
    "group-icons": "bottom-2 flex-col",
    "bg-color": "bg-grey-2",
    shadow: "shadow-none hover:shadow-xl",
    img: "",
  },
  [EProductItemType.TRENDING]: {
    "group-icons": "top-2",
    "bg-color": "bg-pink-3",
    shadow: "shadow-xl hover:shadow-none",
    img: "m-2.5",
  },
};
