import React from "react";
import { Title, Text } from "../../components/index";
import {
  TeslaLogo,
  DocuLogo,
  MazeLogo,
  UberLogo,
  MiroLogo,
  DiscordLogo,
  ChooseImg,
} from "../../img/index";
import "./ChooseBlock.css";

const ChooseBlock = () => {
  return (
    <div className="chooseBlock">
      <ul className="sponsors-list">
        <li>
          <img src={TeslaLogo} alt="TeslaLogo" />
        </li>
        <li>
          <img src={DocuLogo} alt="DocuLogo" />
        </li>
        <li>
          <img src={MazeLogo} alt="MazeLogo" />
        </li>
        <li>
          <img src={UberLogo} alt="UberLogo" />
        </li>
        <li>
          <img src={MiroLogo} alt="MiroLogo" />
        </li>
        <li>
          <img src={DiscordLogo} alt="DiscordLogo" />
        </li>
      </ul>

      <div className="choose-container-main">
        <div className="choose-wrapper">
          <img src={ChooseImg} alt="man" />
          <div className="choose-text-wrapper">
            <Title classname="title-choose">Why choose Us?</Title>
            <Text classname="descr-choose">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </Text>
            <a href="#" className="choose-link">
              Read more
            </a>
          </div>
        </div>
        <ul className="service-list-choose">
          <li className="service-list-item">
            <p className="service-list-item-title">Service Repair</p>
            <p className="service-list-item-descr">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint Velit officia.
            </p>
          </li>
          <li className="service-list-item">
            <p className="service-list-item-title">Board Accessories</p>
            <p className="service-list-item-descr">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint Velit officia.
            </p>
          </li>
          <li className="service-list-item">
            <p className="service-list-item-title">Warraty & Guarantee</p>
            <p className="service-list-item-descr">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint Velit officia.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChooseBlock;
