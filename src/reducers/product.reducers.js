import { productsConstants } from "../actions/constants";

const initState = {
  products: [],
  productsByPrice: {
    under500: [],
    under1k: [],
    under2k: [],
  },
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
  }
  return state;
};
