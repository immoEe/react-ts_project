import React from "react";
import { Title, Text, Button } from "../../components/index";
import { SardiniaImg, SardiniaFirstImg, HeartImg } from "../../img/index";
import "./SardiniaBlock.css";

const SardiniaBlock = () => {
  return (
    <div className="sardiniaBlock">
      <div className="img-wrapper-sardinia">
        <img
          src={SardiniaFirstImg}
          alt="Sardinia White"
          className="SardiniaFirstImg"
        />
        <div className="img-wrapper-bottom-sardinia">
          <img
            src={SardiniaImg}
            alt="Sardinia White"
            className="SardiniaSecImg"
          />
          <img
            src={SardiniaImg}
            alt="Sardinia White"
            className="SardiniaSecImg"
          />
          <img
            src={SardiniaImg}
            alt="Sardinia White"
            className="SardiniaSecImg"
          />
        </div>
      </div>
      <div>
        <div className="text-wrapper-sardinia">
          <Title classname="sardinia-title">Sardinia White</Title>
          <span className="price-sardinia">199,50</span>
          <Text classname="sardinia-descr">
            Product Short Description senectus et netus et malesuada fames ac
            turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies
            eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
            semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
          </Text>
        </div>
        <div className="btn-wrapper-sardinia">
          <div className="left-btn-sardinia">
            <span className="controls-btn">- </span>
            <span className="num-btn">1</span>
            <span className="controls-btn"> +</span>
          </div>
          <Button classname="btn-sardinia">Add to cart</Button>
          <div className="favorite-btn">
            <img src={HeartImg} alt="Heart" />
          </div>
        </div>
        <ul className="list-sardinia">
          <li className="list-sardinia-item">Lorem ipsum dolor sit amet,</li>
          <li className="list-sardinia-item">Lorem ipsum dolor sit amet,</li>
          <li className="list-sardinia-item">Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </div>
  );
};

export default SardiniaBlock;
