import React, { useState } from "react";
import "./CatalogBlock.css";
import { Title, CatalogCard } from "../../components/index";
import {
  CatalogSection,
  SardiniaWhite,
  SicilyGrey3060,
  SicilyGrey,
  SicilyGreyDécor,
} from "../../img/index";

const CatalogBlock = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="catalogBlock">
      <div className="catalog">
        <img
          src={CatalogSection}
          alt="CatalogSection"
          className="catalogSectionImg"
        />
        <div className="catalog-wrapper">
          <Title classname="catalog-title">
            Our Most Popular Board category
          </Title>
          <ul className="navlist-catalog">
            <li>
              <a href="#" className="navlist-catalog-item active">
                All
              </a>
            </li>
            <li>
              <a href="#" className="navlist-catalog-item">
                Sky
              </a>
            </li>
            <li>
              <a href="#" className="navlist-catalog-item">
                Ski
              </a>
            </li>
            <li>
              <a href="#" className="navlist-catalog-item">
                Boards
              </a>
            </li>
            <li>
              <a href="#" className="navlist-catalog-item">
                Other
              </a>
            </li>
          </ul>
          <div className="catalog-card-wrapper">
            <CatalogCard imgChildren={SardiniaWhite}>
              Sardinia White
            </CatalogCard>
            <CatalogCard imgChildren={SicilyGrey3060}>
              Sicily Grey 30×60
            </CatalogCard>
            <CatalogCard imgChildren={SicilyGrey}>Sicily Grey</CatalogCard>
            <CatalogCard imgChildren={SicilyGreyDécor}>
              Sicily Grey Décor 30×60
            </CatalogCard>
            <CatalogCard imgChildren={SicilyGrey}>Sicily Grey</CatalogCard>
            <CatalogCard imgChildren={SardiniaWhite}>
              Sicily Grey Décor 30×60
            </CatalogCard>
            <CatalogCard imgChildren={SicilyGreyDécor}>
              Sardinia White
            </CatalogCard>
            <CatalogCard imgChildren={SicilyGrey3060}>
              Sicily Grey 30×60
            </CatalogCard>
            {showMore === true && (
              <div className="catalog-card-wrapper">
                <CatalogCard imgChildren={SardiniaWhite}>
                  Sardinia White
                </CatalogCard>
                <CatalogCard imgChildren={SicilyGrey3060}>
                  Sicily Grey 30×60
                </CatalogCard>
                <CatalogCard imgChildren={SicilyGrey}>Sicily Grey</CatalogCard>
                <CatalogCard imgChildren={SicilyGreyDécor}>
                  Sicily Grey Décor 30×60
                </CatalogCard>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="catalog-btn" onClick={() => setShowMore(!showMore)}>
        MORE PRODUCTS
      </button>
    </div>
  );
};

export default CatalogBlock;
