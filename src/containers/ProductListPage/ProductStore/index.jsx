import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductBySlug } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
import Card from "../../../components/UI/Card";

const ProductStore = (props) => {
  const product = useSelector((state) => state.product);
  const [priceRange, setPriceRange] = useState({
    under500: 500,
    under1k: 1000,
    under2k: 2000,
  });
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
            headerRight={<button>View all</button>}
            style={{ width: "calc(100% - 40px)", margin: "20px" }}
          >
            <div style={{ display: "flex" }}>
              {product.productsByPrice[key].map((product) => {
                return (
                  <Link to={`/${product.slug}/${product._id}/p`} className="productContainer">
                    <div className="productImgContainer">
                      <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                    </div>
                    <div className="productInfo">
                      <div>{product.name}</div>
                      <div>
                        <span>4.3</span> <span>3200</span>
                      </div>
                      <div className="productPrice">{product.price}</div>
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
