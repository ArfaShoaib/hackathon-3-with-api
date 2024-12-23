'use client'
import React from "react";

const VideoComponent = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <video
        className="w-full rounded-lg object-cover"
        src="/videos/sample-video.mp4" // Replace with your video path
        controls
      ></video>
    </div>
  );
};

export default VideoComponent;
