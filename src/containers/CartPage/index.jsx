import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/UI/Card";
import Layout from "../Layout";
import "./style.css";

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <Layout>
      <div className="cartContainer">
        <Card headerLeft={`My Cart`} headerRight={<div>Deliver to</div>}>
          {Object.keys(cartItems).map((key, index) => {
            return (
              <div key={index} className="flexRow">
                <div className="cartProductContainer">
                  <img src="" alt="" />
                </div>
                <div className="cartItemDetails">
                  <div>{cartItems[key].name}</div>
                  <div>Delivery in 3 - 5 days</div>
                </div>
              </div>
            );
          })}
        </Card>
        <Card style={{ width: "500px" }}>Price</Card>
      </div>
    </Layout>
  );
};

export default CartPage;
