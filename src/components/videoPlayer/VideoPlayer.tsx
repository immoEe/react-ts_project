import React from "react";
import SkiVideo from "../../video/skiVideo.mp4";

const VideoPlayer = () => {
  return <video controls muted src={SkiVideo} />;
};

export default VideoPlayer;
