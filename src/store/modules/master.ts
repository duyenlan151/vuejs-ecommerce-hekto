export const STATE = {
  dataMaster: "dataMaster",

  // Common
  getTotalDocs: "getTotalDocs",
  getLoading: "getLoading",

  // Products
  getAllProducts: "getAllProducts",

  // Categories
  getAllCategories: "getAllCategories",
};

export const GETTERS = {
  ...STATE,
};

export const MUTATIONS = {
  setDataMaster: "setDataMaster",

  // Common
  setLoading: "setLoading",

  // Products
  setProducts: "setProducts",
  getAllProducts: "getAllProducts",

  // Categories
  setCategories: "setCategories",
  getAllCategoriess: "getAllCategoriess",
};

export const ACTIONS = {
  ...MUTATIONS,
  fetchDataMaster: "fetchDataMaster",
};
