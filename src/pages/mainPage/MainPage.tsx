import React from "react";
import {
  IntroBlock,
  CatalogBlock,
  GalleryBlock,
  ExploreBlock,
  ChooseBlock,
  VideoBlock,
  MapBlock,
} from "../../blocks/index";

const MainPage = () => {
  return (
    <div>
      <IntroBlock />
      <CatalogBlock />
      <GalleryBlock />
      <ExploreBlock />
      <ChooseBlock />
      <VideoBlock />
      <MapBlock />
    </div>
  );
};

export default MainPage;
