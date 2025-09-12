import React, { useState } from 'react';
import { Check } from 'lucide-react';

const TextReader = ({ lesson, onComplete }) => {
  const [isRead, setIsRead] = useState(false);

  const handleMarkAsRead = () => {
    setIsRead(true);
    onComplete();
  };

  return (
    <div className="learning-text-reader">
      <h2>{lesson.title}</h2>
      <div className="content">
        <p>{lesson.content}</p>
        <p className="extra-text">
          This comprehensive lesson covers all the essential concepts you need to master this topic. Take your time to read through the content and make sure you understand each section before moving on.
        </p>
      </div>
      <button
        onClick={handleMarkAsRead}
        disabled={isRead}
        className={`mark-btn ${isRead ? 'read' : ''}`}
        type="button"
      >
        <Check size={20} />
        {isRead ? 'Marked as Read' : 'Mark as Read'}
      </button>
    </div>
  );
};

export default TextReader;
