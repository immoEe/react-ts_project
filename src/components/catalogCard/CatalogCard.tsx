import React from "react";
import IProps from "../../types";
import "./CatalogCard.css";

const CatalogCard = ({ children, imgChildren }: IProps) => {
  return (
    <div className="catalogCard">
      <img src={imgChildren} alt="item" />
      <div className="catalogCard-descr">
        <div className="catalogCard-title">{children}</div>
        <div className="catalogCard-price">
          <span className="catalogCard-price-old">449.99 SAR</span>
          <p className="catalogCard-price-new">312.49 SAR</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
