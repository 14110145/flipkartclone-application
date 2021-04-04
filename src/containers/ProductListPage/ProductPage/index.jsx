import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from "../../../actions";
import getParams from "../../../utils/getParams";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../../../components/UI/Card";

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { page } = product;

  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = {
      params,
    };
    dispatch(getProductPage(payload));
  }, []);
  return (
    <>
      <h3>{page.title}</h3>
      <Carousel renderThumbs={() => {}} style={{ maxWidth: "100%", height: "auto" }}>
        {page.banners &&
          page.banners.map((banner, index) => {
            return (
              <a key={index} href={banner.navigateTo} style={{ display: "block" }}>
                <img src={banner.img} />
                <p className="legend">{`Legend ${index}`}</p>
              </a>
            );
          })}
      </Carousel>
      <div>
        {page.products &&
          page.products.map((product, index) => {
            return (
              <Card key={index}>
                <img src={product.img} alt="" />
              </Card>
            );
          })}
      </div>
    </>
  );
};

export default ProductPage;
