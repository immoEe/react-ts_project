import React from "react";
import { Title } from "../../components/index";
import {
  GalleryLeftImg,
  GalleryRightTopImg,
  GalleryRightBottomImg,
} from "../../img/index";
import "./GalleryBlock.css";

const GalleryBlock = () => {
  return (
    <div className="galleryBlock">
      <Title classname="title-gallery">Our Gallery</Title>
      <div className="gallery-wrapper">
        <img src={GalleryLeftImg} alt="man" className="GalleryLeftImg" />
        <div className="gallery-wrapper-aside">
          <img
            src={GalleryRightTopImg}
            alt="man"
            className="GalleryRightTopImg"
          />
          <img src={GalleryRightBottomImg} alt="man" />
        </div>
      </div>
    </div>
  );
};

export default GalleryBlock;
