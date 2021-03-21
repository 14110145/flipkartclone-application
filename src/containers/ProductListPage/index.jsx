import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../../actions/product.actions";
import { generatePublicUrl } from "../../urlConfig";
import Layout from "../Layout";
import "./style.css";

const ProductListPage = (props) => {
  const product = useSelector((state) => state.product);
  const [priceRange, setPriceRange] = useState({
    under500: 500,
    under1k: 1000,
    under2k: 2000,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(props);
    const { slug } = props.match.params;
    dispatch(getProductBySlug(slug));
  }, []);

  return (
    <Layout>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <div className="card">
            <div className="cardHeader">
              <div>
                {props.match.params.slug} mobile under {priceRange[key]}
              </div>
              <button>View all</button>
            </div>
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => {
                return (
                  <div className="productContainer">
                    <div className="productImgContainer">
                      <img
                        src={generatePublicUrl(product.productPictures[0].img)}
                        alt=""
                      />
                    </div>
                    <div className="productInfo">
                      <div>{product.name}</div>
                      <div>
                        <span>4.3</span> <span>3200</span>
                      </div>
                      <div className="productPrice">{product.price}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default ProductListPage;
