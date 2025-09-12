import React from 'react';
import { Clock, Check } from 'lucide-react';

const LearningSidebar = ({ lessons, currentLesson, setCurrentLesson, isCompleted }) => {
  return (
    <aside className="learning-sidebar-ui">
      <h3 className="sidebar-title">Course Content</h3>
      <div className="lessons-list">
        {lessons.map((lesson, index) => (
          <button
            key={lesson.id}
            onClick={() => setCurrentLesson(index)}
            className={`lesson-btn ${currentLesson === index ? 'active' : ''}`}
            type="button"
          >
            <div className="lesson-info">
              <h4>{lesson.title}</h4>
              <div className="lesson-meta">
                <Clock size={14} />
                <span>{lesson.duration}</span>
              </div>
            </div>
            {isCompleted(lesson.id) && (
              <div className="completed-indicator" title="Completed">
                <Check size={12} />
              </div>
            )}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default LearningSidebar;
