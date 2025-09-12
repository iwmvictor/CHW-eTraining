import React, { useRef, useEffect, useState } from 'react';

const VideoPlayer = ({ lesson, onComplete }) => {
  const videoRef = useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(false);
  }, [lesson]);

  const handleEnded = () => {
    setIsCompleted(true);
    onComplete();
  };

  return (
    <div className="learning-video-player">
      <h2>{lesson.title}</h2>
      <video
        ref={videoRef}
        src={lesson.videoSrc}
        controls
        onEnded={handleEnded}
        preload="metadata"
      />
      {isCompleted && <div className="completed-badge">Completed!</div>}
    </div>
  );
};

export default VideoPlayer;
