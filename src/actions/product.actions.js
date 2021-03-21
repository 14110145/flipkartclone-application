import axiosIntance from "../helpers/axios";
import { productsConstants } from "./constants";

export const getProductBySlug = (slug) => {
  return async (dispatch) => {
    const res = await axiosIntance.get(`/products/${slug}`);
    if (res.status === 200) {
      dispatch({
        type: productsConstants.GET_PRODUCTS_BY_SLUG,
        payload: { data: res.data },
      });
    } else {
      // dispatch({type})
    }
  };
};
