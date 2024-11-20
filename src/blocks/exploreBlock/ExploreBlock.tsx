import React, { useState } from "react";
import { Title, Text } from "../../components/index";
import {
  ExploreLeftTopImg,
  ExploreLeftBottomImg,
  ExploreRightImg,
  ArrowImg,
} from "../../img/index";
import "./ExploreBlock.css";

const ExploreBlock = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="exploreBlock">
      <div className="explore-text-wrapper">
        <Title classname="title-explore">Explore Our Product</Title>
        <Text classname="descr-explore">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </div>
      <div className="explore-cards-wrapper">
        <div className="explore-cards-left">
          <div className="explore-card">
            <img src={ArrowImg} alt="arrow" className="ArrowImg-card" />
            <img
              src={ExploreLeftTopImg}
              alt="helmet"
              className="card-LeftTopImg"
            />
            <div className="card-descr">
              <p className="card-price">$60</p>
              <p className="card-name">Road helmet</p>
            </div>
          </div>
          <div className="explore-card">
            <img src={ArrowImg} alt="arrow" className="ArrowImg-card" />
            <img
              src={ExploreLeftBottomImg}
              alt="helmet"
              className="card-LeftBottomImg"
            />
            <div className="card-descr-LeftBottom">
              <p className="card-name-LeftBottom">Tire repair kit</p>
              <p className="card-price-LeftBottom">$120</p>
            </div>
          </div>
        </div>
        <div className="explore-card">
          <img src={ArrowImg} alt="arrow" className="ArrowImg-Rightcard" />
          <img src={ExploreRightImg} alt="helmet" className="card-RightImgg" />
          <div className="card-descr-Rightcard">
            <p className="card-price">$60</p>
            <p className="card-name">Bike water bottle</p>
          </div>
        </div>
      </div>

      {showMore === true && (
        <div className="explore-cards-wrapper-hidden">
          <div className="explore-card">
            <img src={ArrowImg} alt="arrow" className="ArrowImg-Rightcard" />
            <img
              src={ExploreRightImg}
              alt="helmet"
              className="card-RightImgg"
            />
            <div className="card-descr-Rightcard">
              <p className="card-price">$60</p>
              <p className="card-name">Bike water bottle</p>
            </div>
          </div>
          <div className="explore-cards-right-hidden">
            <div className="explore-card">
              <img src={ArrowImg} alt="arrow" className="ArrowImg-card" />
              <img
                src={ExploreLeftTopImg}
                alt="helmet"
                className="card-LeftTopImg"
              />
              <div className="card-descr">
                <p className="card-price">$60</p>
                <p className="card-name">Road helmet</p>
              </div>
            </div>
            <div className="explore-card">
              <img src={ArrowImg} alt="arrow" className="ArrowImg-card" />
              <img
                src={ExploreLeftBottomImg}
                alt="helmet"
                className="card-LeftBottomImg"
              />
              <div className="card-descr-LeftBottom">
                <p className="card-name-LeftBottom">Tire repair kit</p>
                <p className="card-price-LeftBottom">$120</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <button className="explore-btn" onClick={() => setShowMore(!showMore)}>
        MORE PRODUCTS
      </button>
    </div>
  );
};

export default ExploreBlock;
