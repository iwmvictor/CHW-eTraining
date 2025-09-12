import React from 'react';
import { User, Clock, Star, BookOpen, Video, Headphones } from 'lucide-react';
import ProgressBar from './ProgressBar';

const modes = [
  { key: 'read', label: 'Read', icon: BookOpen },
  { key: 'watch', label: 'Watch', icon: Video },
  { key: 'listen', label: 'Listen', icon: Headphones }
];

const Header = ({ course, progress, currentMode, setCurrentMode }) => {
  return (
    <header className="learning-header-ui">
      <div className="header-top">
        <div>
          <h1 className="course-title">{course.title}</h1>
          <div className="course-info">
            <div className="info-item">
              <User size={16} />
              <span>{course.author}</span>
            </div>
            <div className="info-item">
              <Clock size={16} />
              <span>{course.duration}</span>
            </div>
            <div className="info-item rating">
              <Star size={16} />
              <span>{course.rating}</span>
            </div>
          </div>
        </div>

        <div className="mode-buttons">
          {modes.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setCurrentMode(key)}
              className={`mode-btn ${currentMode === key ? 'active' : ''}`}
              type="button"
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-info">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </header>
  );
};

export default Header;
