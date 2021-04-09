import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../actions";
import Layout from "../Layout";
import { MaterialButton, MaterialInput } from "../../components/MaterialUI";
import Card from "../../components/UI/Card";
import AddressForm from "./AddressForm";
import "./style.css";

const CheckoutStep = (props) => {
  return (
    <div onClick={props.onClick} className="checkoutStep">
      <div className={`checkoutHeader ${props.active && "active"}`}>
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
};

const CheckoutPage = (props) => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAdress, setSelectedAdress] = useState(null);

  const dispatch = useDispatch();

  const selectAddress = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, selected: true } : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  };

  const confirmDeliveryAddress = (addr) => {
    setSelectedAdress(addr);
    setConfirmAddress(true);
  };

  const onAddressSubmit = () => {};

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
  }, [auth.authenticate]);

  useEffect(() => {
    const address = user.address.map((adr, index) => ({ ...adr, selected: false, edit: false }));
    setAddress(address);
  }, [user.address]);

  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: "flex-start" }}>
        <div className="checkoutContainer">
          {/* check if user logged in or not */}
          <CheckoutStep
            stepNumber={"1"}
            title={"LOGIN"}
            active={!auth.authenticate}
            body={
              auth.authenticate ? (
                <div className="loggedInId">
                  <span style={{ fontWeight: 500 }}>{auth.user.fullName}</span>
                  <span style={{ margin: "0 5px" }}>{auth.user.email}</span>
                </div>
              ) : (
                <div>
                  <MaterialInput label="Email" />
                </div>
              )
            }
          />

          <CheckoutStep
            stepNumber={"2"}
            title={"DELIVERY ADDRESS"}
            active={!confirmAddress}
            body={
              <>
                {confirmAddress
                  ? JSON.stringify(selectedAdress)
                  : address.map((adr) => (
                      <div className="flexRow addressContainer">
                        <div>
                          <input onClick={() => selectAddress(adr)} name="address" type="radio" />
                        </div>
                        <div className="flexRow sb addressinfo">
                          <div>
                            <div>
                              <span>{adr.name}</span>
                              <span>{adr.addressType}</span>
                              <span>{adr.mobileNumber}</span>
                            </div>
                            <div>{adr.address}</div>
                            {adr.selected && (
                              <MaterialButton
                                title="DELIVERY HERE"
                                onClick={() => confirmDeliveryAddress(adr)}
                                style={{
                                  width: "250px",
                                }}
                              />
                            )}
                          </div>
                          {adr.selected && <div>edit</div>}
                        </div>
                      </div>
                    ))}
              </>
            }
          />

          {/* AddressForm */}
          {confirmAddress ? null : newAddress ? (
            <AddressForm onSubmitForm={onAddressSubmit} onCancel={() => {}} />
          ) : (
            <CheckoutStep active={false} stepNumber="+" title="ADD NEW ADDRESS" onClick={() => setNewAddress(true)} />
          )}

          <CheckoutStep stepNumber={"3"} title={"ORDER SUMMARY"} />

          <CheckoutStep stepNumber={"4"} title={"PAYMENT OPTIONS"} />
        </div>

        <Card headerLeft={"Price"} style={{ maxWidth: "380px" }}></Card>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
