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

export const getProductPage = (payload) => {
  return async (dispatch) => {
    try {
      const { cid, type } = payload.params;
      const res = await axiosIntance.get(`/page/${cid}/${type}`);
      const { page } = res.data;
      dispatch({ type: productsConstants.GET_PRODUCTS_PAGE_REQUEST });
      if (res.status === 200) {
        dispatch({ type: productsConstants.GET_PRODUCTS_PAGE_SUCCESS, payload: { page } });
      } else {
        const { error } = res.data;
        dispatch({ type: productsConstants.GET_PRODUCTS_PAGE_FAILURE, payload: { error } });
      }
    } catch (error) {
      if (error) {
        console.log({ error });
      }
    }
  };
};
