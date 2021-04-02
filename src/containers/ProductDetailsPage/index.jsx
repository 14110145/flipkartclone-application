import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../actions";
import Layout from "../Layout";

const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();
  const { productDetails } = useSelector((state) => state.product);
  console.log({ productDetails });
  useEffect(() => {
    const { productId } = props.match.params;
    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));
  }, []);
  return <Layout>{JSON.stringify(productDetails.name)}</Layout>;
};

export default ProductDetailsPage;
