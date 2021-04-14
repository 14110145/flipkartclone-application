import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../actions";
import Layout from "../../containers/Layout";
import Card from "../../components/UI/Card";
import "./style.css";
import { generatePublicUrl } from "../../urlConfig";

const OrderPage = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <Layout>
      {user.orders.map((order) => {
        return order.items.map((item) => (
          <Card style={{ maxWidth: "1200px", margin: "5px auto" }}>
            <div className="orderItemContainer">
              <div style={{ width: "100px", height: "auto", textAlign: "center", overflow: "hidden" }}>
                <img
                  style={{ maxWidth: "80px", maxHeight: "80px" }}
                  src={generatePublicUrl(item.productId.productPictures[0].img)}
                  alt=""
                />
              </div>
              <div style={{ width: "500px", display: "flex", justifyContent: "space-between", flex: "1" }}>
                <div style={{ width: "300px" }}>{item.productId.name}</div>
                <div>{item.payablePrice}</div>
                <div>{order.paymentStatus}</div>
              </div>
            </div>
          </Card>
        ));
      })}
    </Layout>
  );
};

export default OrderPage;
