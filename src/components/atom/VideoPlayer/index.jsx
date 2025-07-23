"use client";

const VideoPlayer = ({ src }) => {
  return (
    // wrapper
    <div className="flex items-center w-full">
      <video autoPlay loop muted>
        <source src={src} />
      </video>
    </div>
  );
};

export default VideoPlayer;
