import { useState } from "react";
import Header from "./component/learning/Header.jsx";
import Sidebar from "./component/learning/Sidebar";
import ContentViewer from "./component/learning/ContentViewer";
import { useProgressTracker } from "./component/learning/useProgressTracker";
import { courseData } from "./component/learning/courseData";

const CourseLearningLayout = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [currentMode, setCurrentMode] = useState("watch");
  const { markAsCompleted, isCompleted, progressPercentage } =
    useProgressTracker(courseData.id);

  const handleComplete = () => {
    const lesson = courseData.lessons[currentLesson];
    if (!isCompleted(lesson.id)) {
      markAsCompleted(lesson.id);
    }
  };

  return (
    <div className="course-layout">
      <div className="container">
        <Header
          course={courseData}
          progress={progressPercentage}
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
        />

        <div className="content-area">
          <Sidebar
            lessons={courseData.lessons}
            currentLesson={currentLesson}
            setCurrentLesson={setCurrentLesson}
            isCompleted={isCompleted}
          />

          <ContentViewer
            lesson={courseData.lessons[currentLesson]}
            mode={currentMode}
            onComplete={handleComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseLearningLayout;
