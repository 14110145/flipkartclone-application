import { productsConstants } from "../actions/constants";

const initState = {
  products: [],
  priceRange: [],
  productsByPrice: {},
  productDetails: {},
  pageRequest: false,
  page: {},
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case productsConstants.GET_PRODUCTS_BY_SLUG:
      state = {
        ...state,
        products: action.payload.data.products,
        priceRange: action.payload.data.priceRange,
        productsByPrice: { ...action.payload.data.productsByPrice },
      };
      break;
    case productsConstants.GET_PRODUCTS_PAGE_REQUEST:
      state = {
        ...state,
        pageRequest: true,
      };
      break;
    case productsConstants.GET_PRODUCTS_PAGE_SUCCESS:
      state = {
        ...state,
        pageRequest: false,
        page: action.payload.page,
      };
      break;
    case productsConstants.GET_PRODUCTS_PAGE_FAILURE:
      state = {
        ...state,
        pageRequest: false,
        error: action.payload.error,
      };
      break;
    case productsConstants.GET_PRODUCTS_DETAILS_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productsConstants.GET_PRODUCTS_DETAILS_BY_ID_SUCCESS:
      state = {
        ...state,
        productDetails: action.payload.productDetails,
        loading: false,
      };
      break;
    case productsConstants.GET_PRODUCTS_DETAILS_BY_ID_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
  }
  return state;
};
