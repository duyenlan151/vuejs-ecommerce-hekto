export interface SalesData {
  _id: {
    month: number;
  };
  // month: number;
  total: number;
  // year: number;
}

export interface OrdersData {
  _id: {
    month: number;
  };
  count: number;
}

export interface SalesDataModel {
  currentYear: SalesData[];
  previousYear: SalesData[];
}

export interface OrdersDataModel {
  orderCurrentYear: OrdersData[];
  orderPreviousYear: OrdersData[];
}

export interface SummaryModel {
  ordersCount: number;
  ordersPrice: number;
  productsCount: number;
  usersCount: number;
  salesData: SalesDataModel;
  ordersData: OrdersDataModel;
}
