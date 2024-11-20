import React from "react";
import { Title, Text, VideoPlayer } from "../../components/index";
import "./VideoBlock.css";

const VideoBlock = () => {
  return (
    <div className="videoBlock">
      <div className="text-wrapper-video">
        <Title classname="video-title">Video about us</Title>
        <Text classname="video-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </div>
      <VideoPlayer />
    </div>
  );
};

export default VideoBlock;
