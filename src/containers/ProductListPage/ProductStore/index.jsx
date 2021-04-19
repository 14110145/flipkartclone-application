import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductBySlug } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
import Card from "../../../components/UI/Card";
import Rating from "../../../components/UI/Rating";
import Price from "../../../components/UI/Price";

const ProductStore = (props) => {
  const product = useSelector((state) => state.product);
  const { priceRange } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    const { slug } = props.match.params;
    dispatch(getProductBySlug(slug));
  }, []);

  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <Card
            headerLeft={`${props.match.params.slug} mobile under ${priceRange[key]}`}
            headerRight={
              <button
                className="materialButton"
                style={{ width: "100px", padding: "10px 0", backgroundColor: "#2874f0" }}
              >
                View all
              </button>
            }
            style={{ width: "calc(100% - 40px)", margin: "20px" }}
            key={index}
          >
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product, index) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    key={index}
                    to={`/${product.slug}/${product._id}/p`}
                    className="productContainer"
                  >
                    <div className="productImgContainer">
                      <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                    </div>
                    <div className="productInfo">
                      <div>{product.name}</div>
                      <Rating value="4.4" ratingCount={452} />
                      <Price value={product.price} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ProductStore;
