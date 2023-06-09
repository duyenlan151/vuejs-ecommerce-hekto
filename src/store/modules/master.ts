export const STATE = {
  dataMaster: "dataMaster",

  // Common
  getTotalDocs: "getTotalDocs",
  getLoading: "getLoading",

  // Products
  getAllProducts: "getAllProducts",
};

export const GETTERS = {
  getGender: "getGender",
  getIdealLocations: "getIdealLocations",
  getDjInfluence: "getDjInfluence",
  getDjEventType: "getDjEventType",
  getDjMusicGenre: "getDjMusicGenre",
  getDjArtists: "getDjArtists",
  getDjBillingCurrent: "getDjBillingCurrent",
  getDjFavouriteType: "getDjFavouriteType",
  getDjExperience: "getDjExperience",
  getDjStyle: "getDjStyle",
  getLanguage: "getLanguage",
  getListVoucher: "getListVoucher",
  getInstructionVoucher: "getInstructionVoucher",
  getTypeOfBusiness: "getTypeOfBusiness",
};

export const MUTATIONS = {
  setDataMaster: "setDataMaster",

  // Common
  setLoading: "setLoading",

  // Products
  setProducts: "setProducts",
  getAllProducts: "getAllProducts",
};

export const ACTIONS = {
  ...MUTATIONS,
  fetchDataMaster: "fetchDataMaster",
};
