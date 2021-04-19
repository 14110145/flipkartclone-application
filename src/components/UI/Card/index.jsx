import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card" style={{ ...props.style }}>
      {(props.headerRight && (
        <div className="cardHeader">
          {props.headerLeft && <div>{props.headerLeft}</div>}
          {props.headerRight && props.headerRight}
        </div>
      )) || <div className="cardHeader">{props.headerLeft}</div>}
      {props.children}
    </div>
  );
};

export default Card;
