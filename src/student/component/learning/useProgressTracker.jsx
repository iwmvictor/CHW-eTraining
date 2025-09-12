import { useState, useEffect } from 'react';

export const useProgressTracker = (courseId) => {
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem(`course-progress-${courseId}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(`course-progress-${courseId}`, JSON.stringify(completedLessons));
  }, [completedLessons, courseId]);

  const markAsCompleted = (lessonId) => {
    setCompletedLessons((prev) => {
      if (!prev.includes(lessonId)) {
        return [...prev, lessonId];
      }
      return prev;
    });
  };

  const isCompleted = (lessonId) => completedLessons.includes(lessonId);

  // Progress percentage calculation (out of total lessons)
  const progressPercentage = (completedLessons.length / 5) * 100; // 5 lessons hardcoded; update if dynamic

  return { markAsCompleted, isCompleted, progressPercentage };
};
