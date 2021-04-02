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
    dispatch({ type: productsConstants.GET_PRODUCTS_PAGE_REQUEST });
    try {
      const { cid, type } = payload.params;
      const res = await axiosIntance.get(`/page/${cid}/${type}`);
      const { page } = res.data;
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

export const getProductDetailsById = (payload) => {
  return async (dispatch) => {
    // const { productId } = payload.params;
    // let res = await axiosIntance.get(`/product/${productId}`);
    // console.log(res.data.product);
    let res;
    try {
      dispatch({ type: productsConstants.GET_PRODUCTS_DETAILS_BY_ID_REQUEST });
      const { productId } = payload.params;
      res = await axiosIntance.get(`/product/${productId}`);
      console.log({ res });
      dispatch({
        type: productsConstants.GET_PRODUCTS_DETAILS_BY_ID_SUCCESS,
        payload: { productDetails: res.data.product },
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: productsConstants.GET_PRODUCTS_DETAILS_BY_ID_FAILURE, payload: { error: "Some thing error" } });
    }
  };
};
