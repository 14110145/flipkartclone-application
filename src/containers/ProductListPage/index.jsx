import React from "react";
import getParams from "../../utils/getParams";
import Layout from "../Layout";
import ProductPage from "./ProductPage";
import ProductStore from "./ProductStore";
import "./style.css";

const ProductListPage = (props) => {
  const renderProduct = () => {
    let content = null;
    const params = getParams(props.location.search);
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
    }
    return content;
  };

  return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
