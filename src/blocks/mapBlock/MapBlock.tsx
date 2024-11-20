import React from "react";
import "./MapBlock.css";
import { Title, Text } from "../../components/index";
import type { YMapLocationRequest } from "@yandex/ymaps3-types";

const MapBlock = () => {
  async function initMap(): Promise<void> {
    await ymaps3.ready;

    const LOCATION: YMapLocationRequest = {
      center: [37.623082, 55.75254],
      zoom: 7,
    };

    const { YMap, YMapDefaultSchemeLayer } = ymaps3;

    const map = new YMap(document.getElementById("map") as HTMLInputElement, {
      location: LOCATION,
    });
    map.addChild(new YMapDefaultSchemeLayer({}));
  }

  initMap();
  return (
    <div className="mapBlock">
      <div id="map" className="map" />
      <div>
        <div className="map-info-wrapper">
          <div>
            <Title classname="map-title">Location of our Hotels</Title>
            <Text classname="map-descr">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </Text>
          </div>
          <input
            type="email"
            className="input-map"
            placeholder="Enter your email"
          />
          <button className="map-btn">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default MapBlock;
