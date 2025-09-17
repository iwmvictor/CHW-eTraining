import React, { useEffect, useState } from "react";
import {
  LuArrowLeft,
  LuAward,
  LuBookAudio,
  LuBookOpenText,
  LuChevronLeft,
  LuChevronRight,
  LuCircleCheckBig,
  LuFileVideo2,
  LuFullscreen,
  LuSquircle,
} from "react-icons/lu";
import { mockCourse } from "./component/learning/courseData";

const useProgressTracker = (courseId) => {
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem(`course-progress-courseId`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      `course-progress-${courseId}`,
      JSON.stringify(completedLessons)
    );
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

const CourseLearningPage = () => {
  const [activeTab, setActiveTab] = useState("textTab");
  const { markAsCompleted, isCompleted, progressPercentage } =
    useProgressTracker(mockCourse.id);

  return (
    <>
      <div className="dashboard">
        <div className="course-learning-page">
          <div className="container">
            <div className="content">
              <div className="navbar">
                <div className="back">
                  <button>
                    <span className="icon">
                      <LuArrowLeft />
                    </span>
                    <span>Go Back</span>
                  </button>
                </div>
                <ul className="tabs">
                  <li
                    className={activeTab === "textTab" ? "active" : ""}
                    onClick={() => setActiveTab("textTab")}
                  >
                    <span>
                      <LuBookOpenText />
                    </span>
                    <span>Read</span>
                  </li>
                  <li
                    className={activeTab === "videoTab" ? "active" : ""}
                    onClick={() => setActiveTab("videoTab")}
                  >
                    <span>
                      <LuFileVideo2 />
                    </span>
                    <span>Watch</span>
                  </li>
                  <li
                    className={activeTab === "audioTab" ? "active" : ""}
                    onClick={() => setActiveTab("audioTab")}
                  >
                    <span>
                      <LuBookAudio />
                    </span>
                    <span>Listen</span>
                  </li>
                </ul>
              </div>
              <div className="course-main">
                <div className="course-sidebar">
                  <div className="sidebar-title">
                    <div className="title">
                      <div>
                        <h3>Course Content</h3>
                      </div>
                      <div>
                        <span>
                          <LuAward />
                        </span>
                        <span>12%</span>
                      </div>
                    </div>
                    <div>
                      <div className="progress-line">
                        <div className="progress-lvl"></div>
                      </div>
                    </div>
                  </div>
                  <div className="course-toc">
                    {mockCourse.chapters.map((chap, index) => (
                      <div className="toc-item" key={index}>
                        <div className="toc-title">
                          <span className="icon">
                            {isCompleted ? (
                              <LuCircleCheckBig />
                            ) : (
                              <LuSquircle />
                            )}
                          </span>
                          <span>{chap.title}</span>
                        </div>
                        <ul className="toc-list">
                          {chap.subchapters.map((sub, i) => (
                            <li key={i}>
                              <input
                                type="checkbox"
                                name={`subtitle${i}`}
                                id={`subtitle${i}`}
                              />
                              <label htmlFor={`subtitle${i}`}>
                                {sub.title}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="course-content">
                  {activeTab === "textTab" && (
                    <>
                      <div className="content-nav">
                        <div className="course-t-text">
                          <div>
                            <h2>The Role of Mosquito</h2>
                          </div>
                          <div>
                            <button>
                              <span>
                                <LuFullscreen />
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="course-sub-text">
                          <div>
                            <p>Dr. Niz</p>
                          </div>
                          <div>
                            <div>
                              <p>CHAPTER 2/3</p>
                            </div>
                            <div>
                              <span>
                                <LuChevronLeft />
                              </span>
                              <span>
                                <LuChevronRight />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-viewer">
                        <div className="view-contents">
                          <h2>The Role of Mosquitoes in Malaria..</h2>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quidem excepturi facilis consequatur nobis,
                            magnam eaque sequi sint consectetur nam. Et
                            consectetur nulla laborum recusandae rem quo,
                            maiores ut cupiditate beatae.
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "videoTab" && (
                    <>
                      <div className="content-nav">
                        <div className="course-t-text">
                          <div>
                            <h2>The Role of Mosquito</h2>
                          </div>
                          <div>
                            <button>
                              <span>
                                <LuFullscreen />
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="course-sub-text">
                          <div>
                            <p>Dr. Niz</p>
                          </div>
                          <div>
                            <div>
                              <p>CHAPTER 2/3</p>
                            </div>
                            <div>
                              <span>
                                <LuChevronLeft />
                              </span>
                              <span>
                                <LuChevronRight />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="video-player">video</div>
                    </>
                  )}

                  {activeTab === "audioTab" && (
                    <>
                      <div className="content-nav">
                        <div className="course-t-text">
                          <div>
                            <h2>The Role of Mosquito</h2>
                          </div>
                          <div>
                            <button>
                              <span>
                                <LuFullscreen />
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="course-sub-text">
                          <div>
                            <p>Dr. Niz</p>
                          </div>
                          <div>
                            <div>
                              <p>CHAPTER 2/3</p>
                            </div>
                            <div className="chevron">
                              <span>
                                <LuChevronLeft />
                              </span>
                              <span>
                                <LuChevronRight />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="audio-player">audio</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseLearningPage;
