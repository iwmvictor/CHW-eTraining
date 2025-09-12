import React, { useRef, useEffect, useState } from 'react';

const AudioPlayer = ({ lesson, onComplete }) => {
  const audioRef = useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(false);
  }, [lesson]);

  const handleEnded = () => {
    setIsCompleted(true);
    onComplete();
  };

  return (
    <div className="learning-audio-player">
      <h2>{lesson.title}</h2>
      <audio
        ref={audioRef}
        src={lesson.audioSrc}
        controls
        onEnded={handleEnded}
        preload="metadata"
      />
      {isCompleted && <div className="completed-badge">Completed!</div>}
    </div>
  );
};

export default AudioPlayer;
