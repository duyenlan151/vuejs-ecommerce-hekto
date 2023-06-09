export interface ProductListPageProps {
  products: any;
  itemsPerPage?: number;
}

// type typeView = 'col' | 'view';

export enum ETypeView {
  COL = "col",
  ROW = "row",
}

export const ProductViewType: Record<ETypeView, string | number> = {
  [ETypeView.COL]: "lg:grid-cols-2",
  [ETypeView.ROW]: "lg:grid-cols-1",
};

export const itemsList = [
  { id: 1, name: "toLowerCase", label: "Default", value: "featured" },
  { id: 2, name: "toLowerCase", label: "Price: High to Low", value: "highest" },
  { id: 3, name: "toLowerCase", label: "Price: Low to High", value: "lowest" },
];
