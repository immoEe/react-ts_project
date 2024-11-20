import React from "react";
import { AboutImg } from "../../img/index";
import { Title, Text, Button } from "../../components/index";
import "./AboutBlock.css";

const AboutBlock = () => {
  return (
    <div className="aboutBlock">
      <div className="about-wrapper">
        <Title classname="title-about">About Us</Title>
        <Text classname="descr-about">
          Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
          aptent dapibus metus maecenas consequat. Elementum interdum a semper.
          Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis
          sit aliquet at. Magna nam platea justo.
        </Text>
        <Button classname="about-btn">Learn more</Button>
      </div>
      <img src={AboutImg} alt="AboutImg" className="aboutImg" />
    </div>
  );
};

export default AboutBlock;
