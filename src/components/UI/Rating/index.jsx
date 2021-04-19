import React from "react";
import { IoIosStar } from "react-icons/io";

const Rating = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <span
        style={{
          display: "inline-block",
          background: "#388e3c",
          color: "#fff",
          fontWeight: "400",
          fontSize: "12px",
          borderRadius: "3px",
          padding: "2px 5px",
        }}
      >
        {props.value} <IoIosStar />
      </span>
      <div
        style={{
          display: "inline-block",
          color: "#cecece",
          fontWeight: "400",
          fontSize: "12px",
          padding: "2px 5px",
        }}
      >
        ({props.ratingCount})
      </div>
    </div>
  );
};

export default Rating;
