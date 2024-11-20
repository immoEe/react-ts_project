import React from "react";
import "./IntroBlock.css";
import { Title, Text, Button } from "../../components/index";
import { BackGround, Box, Wallet, Support } from "../../img/index";

const IntroBlock = () => {
  return (
    <div className="introBlock">
      <img src={BackGround} alt="background" className="backgroundImg" />
      <div className="intro-wrapper">
        <Text classname="intro-text">
          We build only the best, customized to your exacting demands
        </Text>
        <Title classname="intro-title">SKY & SKI</Title>
        <Button>SHOP NOW</Button>
      </div>
      <ul className="service-list">
        <li className="service-item">
          <img src={Box} alt="Box" className="service-img" />
          <div className="service-text-item">
            <p className="service-title-item">Free Shapping</p>
            <p className="service-descr-item">No charge for each delivery</p>
          </div>
        </li>
        <li className="service-item">
          <img src={Wallet} alt="Wallet" className="service-img" />
          <div className="service-text-item">
            <p className="service-title-item">Quick Payment</p>
            <p className="service-descr-item">100% secure payment</p>
          </div>
        </li>
        <li className="service-item">
          <img src={Support} alt="Support" className="service-img" />
          <div className="service-text-item">
            <p className="service-title-item">24/7 Support</p>
            <p className="service-descr-item">Quick support</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default IntroBlock;
