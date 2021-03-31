import { productsConstants } from "../actions/constants";

const initState = {
  products: [],
  productsByPrice: {
    under500: [],
    under1k: [],
    under2k: [],
  },
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
        productsByPrice: action.payload.data.productsByPrice,
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
  }
  return state;
};
