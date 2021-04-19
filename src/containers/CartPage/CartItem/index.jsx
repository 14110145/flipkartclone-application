import React, { useState } from "react";
import { generatePublicUrl } from "../../../urlConfig";
import "./style.css";

const CartItem = (props) => {
  const [qty, setQty] = useState(props.cartItems.qty);
  const { _id, name, price, img } = props.cartItems;
  const onQuantityIncSet = () => {
    props.onQuantityInc(_id, qty + 1);
    setQty(parseInt(qty + 1));
  };

  const onQuantityDecSet = () => {
    if (qty <= 1) return;
    props.onQuantityDec(_id, qty - 1);
    setQty(parseInt(qty - 1));
  };
  return (
    <div className="cartItemContainer">
      <div className="flexRow">
        <div className="cartProImgContainer">
          <img src={generatePublicUrl(img)} alt="" />
        </div>
        <div className="cartItemDetails">
          <div>
            <p>{name}</p>
            <p>Rs. {price}</p>
          </div>
          <div>Delivery in 3-5 days</div>
        </div>
      </div>
      <div style={{ display: "flex", margin: "5px 0" }}>
        <div className="quantityControl">
          <button onClick={onQuantityDecSet}>-</button>
          <input value={qty} readOnly />
          <button onClick={onQuantityIncSet}>+</button>
        </div>
        <button className="cartActionBtn">Save for later</button>
        <button className="cartActionBtn" onClick={() => props.onRemoveCartItem(_id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
