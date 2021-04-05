import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions";
import Card from "../../components/UI/Card";
import Layout from "../Layout";
import CartItem from "./CartItem";
import "./style.css";

const CartPage = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState(cart.cartItems);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  const onQuantityInc = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };

  const onQuantityDec = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <Card headerLeft={`My Cart`} headerRight={<div>Deliver to</div>}>
          {Object.keys(cartItems).map((key, index) => {
            return (
              <CartItem
                cartItems={cartItems[key]}
                key={index}
                onQuantityInc={onQuantityInc}
                onQuantityDec={onQuantityDec}
              />
            );
          })}
        </Card>
        <Card style={{ width: "500px" }} headerLeft="Price"></Card>
      </div>
    </Layout>
  );
};

export default CartPage;
