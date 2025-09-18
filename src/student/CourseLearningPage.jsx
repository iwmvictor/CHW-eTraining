import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  LuArrowLeft,
  LuAward,
  LuBookAudio,
  LuBookOpenText,
  LuChevronLeft,
  LuChevronRight,
  LuCircleCheckBig,
  LuSquircle,
  LuFileVideo2,
  LuFullscreen,
} from "react-icons/lu";
import { mockCourse } from "./component/courseData";
import { useNavigate } from "react-router-dom";

function useFullscreen(elementRef) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enter = () => {
    const el = elementRef.current;
    if (!el) return;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  };

  const exit = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const toggle = () => {
    if (isFullscreen) {
      exit();
    } else {
      enter();
    }
  };

  const onChange = () => {
    const fs =
      document.fullscreenElement === elementRef.current ||
      document.webkitFullscreenElement === elementRef.current ||
      document.msFullscreenElement === elementRef.current;
    setIsFullscreen(fs);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", onChange);
    document.addEventListener("webkitfullscreenchange", onChange);
    document.addEventListener("msfullscreenchange", onChange);

    return () => {
      document.removeEventListener("fullscreenchange", onChange);
      document.removeEventListener("webkitfullscreenchange", onChange);
      document.removeEventListener("msfullscreenchange", onChange);
    };
  }, [elementRef]);

  return { isFullscreen, enter, exit, toggle };
}

const useProgressTracker = (courseId) => {
  const storageKey = `course-progress-${courseId}`;
  const [completedSubchapters, setCompletedSubchapters] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completedSubchapters));
  }, [completedSubchapters, storageKey]);

  const markAsCompleted = (subchapterId) => {
    setCompletedSubchapters((prev) => {
      if (!prev.includes(subchapterId)) {
        return [...prev, subchapterId];
      }
      return prev;
    });
  };

  const isCompleted = (subchapterId) =>
    completedSubchapters.includes(subchapterId);

  const totalSubchapters = mockCourse.chapters.reduce(
    (sum, c) =>
      sum +
      c.subchapters.filter((sc) => {
        // only count subchapters that have at least one type of content (text, video, or audio)
        return sc.content || sc.video || sc.audio;
      }).length,
    0
  );

  const progressPercentage = totalSubchapters
    ? (completedSubchapters.length / totalSubchapters) * 100
    : 0;

  return { markAsCompleted, isCompleted, progressPercentage };
};

const CourseLearningPage = () => {
  const courseId = mockCourse.id;

  const navigate = useNavigate();

  const modeStorageKey = `course-mode-${courseId}`;
  const lastActiveKey = `course-last-${courseId}`;
  const mediaPositionKeyPrefix = `media-pos-${courseId}-`; // plus subchapter id

  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem(modeStorageKey);
      return saved || "text";
    } catch {
      return "text";
    }
  });

  const [activeChapterId, setActiveChapterId] = useState(() => {
    try {
      const saved = localStorage.getItem(lastActiveKey);
      if (saved) {
        const { chapterId } = JSON.parse(saved);
        return chapterId;
      }
    } catch {}
    return mockCourse.chapters[0]?.id;
  });

  const [activeSubchapterId, setActiveSubchapterId] = useState(() => {
    try {
      const saved = localStorage.getItem(lastActiveKey);
      if (saved) {
        const { subchapterId } = JSON.parse(saved);
        return subchapterId;
      }
    } catch {}
    return mockCourse.chapters[0]?.subchapters[0]?.id;
  });

  const { markAsCompleted, isCompleted, progressPercentage } =
    useProgressTracker(courseId);

  // Save mode when changes
  useEffect(() => {
    localStorage.setItem(modeStorageKey, mode);
  }, [mode]);

  // Save active chapter/subchapter
  useEffect(() => {
    const obj = {
      chapterId: activeChapterId,
      subchapterId: activeSubchapterId,
    };
    localStorage.setItem(lastActiveKey, JSON.stringify(obj));
  }, [activeChapterId, activeSubchapterId]);

  // Fullscreen
  const contentRef = useRef(null);
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(contentRef);

  // Media refs
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  // State for time tracking
  const [mediaCurrentTime, setMediaCurrentTime] = useState(0);
  const [mediaDuration, setMediaDuration] = useState(0);

  // Shortcuts modal visibility
  const [showShortcutModal, setShowShortcutModal] = useState(false);

  // Helper: find active chapter & subchapter object
  const activeSubchapter = (() => {
    const chap = mockCourse.chapters.find((c) => c.id === activeChapterId);
    if (!chap) return null;
    const sub = chap.subchapters.find((sc) => sc.id === activeSubchapterId);
    return sub || null;
  })();

  // Helper: skip subchapters with no content (text + video + audio all missing)
  const hasAnyContent = (sub) => {
    return Boolean(sub && (sub.content || sub.video || sub.audio));
  };

  // Load saved playback position when subchapter changes or mode changes
  useEffect(() => {
    if (!activeSubchapter) return;
    const key = mediaPositionKeyPrefix + activeSubchapter.id + "-" + mode;
    try {
      const saved = localStorage.getItem(key);
      const savedPos = saved ? parseFloat(saved) : 0;
      if (savedPos && mode === "video" && videoRef.current) {
        videoRef.current.currentTime = savedPos;
      }
      if (savedPos && mode === "audio" && audioRef.current) {
        audioRef.current.currentTime = savedPos;
      }
    } catch {}
    // reset current time
    setMediaCurrentTime(0);
    setMediaDuration(0);
  }, [activeSubchapterId, mode]);

  // Handlers
  const handleTextRead = () => {
    if (activeSubchapter && hasAnyContent(activeSubchapter)) {
      // for text, simply mark as completed when user explicitly says so
      markAsCompleted(activeSubchapter.id);
    }
  };

  const handleMediaEnded = () => {
    if (activeSubchapter) {
      markAsCompleted(activeSubchapter.id);
    }
  };

  const handleTimeUpdate = (e) => {
    const current = e.currentTarget.currentTime;
    const duration = e.currentTarget.duration;
    if (!isNaN(duration)) {
      setMediaCurrentTime(current);
      setMediaDuration(duration);

      // Save periodically to localstorage so resume works
      const key = mediaPositionKeyPrefix + activeSubchapter.id + "-" + mode;
      localStorage.setItem(key, current.toString());
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Time remaining estimate: duration - currentTime
  const timeRemaining = mediaDuration ? mediaDuration - mediaCurrentTime : null;

  // Shortcut keys
  const handleKeyDown = useCallback(
    (e) => {
      // For toggling shortcut modal
      if (e.ctrlKey && e.key === "i") {
        e.preventDefault();
        setShowShortcutModal((prev) => !prev);
      }
      // Other shortcuts, e.g.
      if (e.key === " " && (mode === "video" || mode === "audio")) {
        // play / pause
        e.preventDefault();
        const mediaEl = mode === "video" ? videoRef.current : audioRef.current;
        if (mediaEl) {
          if (mediaEl.paused) mediaEl.play();
          else mediaEl.pause();
        }
      }
      if (e.key === "ArrowRight" && mode === "video") {
        // skip forward 10s
        const mediaEl = videoRef.current;
        if (mediaEl) {
          mediaEl.currentTime = Math.min(
            mediaEl.duration || 0,
            mediaEl.currentTime + 10
          );
        }
      }
      if (e.key === "ArrowLeft" && mode === "video") {
        const mediaEl = videoRef.current;
        if (mediaEl) {
          mediaEl.currentTime = Math.max(0, mediaEl.currentTime - 10);
        }
      }
      // Other shortcuts you might want (e.g. M for mute, F for fullscreen)
      if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        toggleFullscreen();
      }
    },
    [mode, toggleFullscreen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="dashboard">
      <div className="course-learning-page">
        <div className="container">
          <div className="content">
            {/* Shortcut modal */}
            {showShortcutModal && (
              <div className="shortcut-modal">
                <div className="modal-content">
                  <h3>Shortcuts Guide</h3>
                  <ul>
                    <li>
                      <strong>Ctrl + I</strong> : Toggle this shortcuts modal
                    </li>
                    <li>
                      <strong>Space</strong> : Play / Pause media (video/audio)
                    </li>
                    <li>
                      <strong>Arrow Right</strong> : Skip ahead 10s (video)
                    </li>
                    <li>
                      <strong>Arrow Left</strong> : Skip back 10s (video)
                    </li>
                    <li>
                      <strong>F</strong> : Toggle Fullscreen
                    </li>
                  </ul>
                  <button onClick={() => setShowShortcutModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            )}

            <div className="navbar">
              <div className="back">
                <button onClick={() => navigate(-1)}>
                  <span className="icon">
                    <LuArrowLeft />
                  </span>
                  <span>Go Back</span>
                </button>
              </div>
              <ul className="tabs">
                {["text", "video", "audio"].map((m) => {
                  // hide tab if activeSubchapter has no corresponding content
                  let show = true;
                  if (m === "text" && !activeSubchapter?.content) show = false;
                  if (m === "video" && !activeSubchapter?.video) show = false;
                  if (m === "audio" && !activeSubchapter?.audio) show = false;
                  if (!show) return null;
                  return (
                    <li
                      key={m}
                      className={mode === m ? "active" : ""}
                      onClick={() => setMode(m)}
                    >
                      <span>
                        {m === "text" && <LuBookOpenText />}
                        {m === "video" && <LuFileVideo2 />}
                        {m === "audio" && <LuBookAudio />}
                      </span>
                      <span>
                        {m === "text"
                          ? "Read"
                          : m === "video"
                          ? "Watch"
                          : "Listen"}
                      </span>
                    </li>
                  );
                })}
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
                      <span>{progressPercentage.toFixed(0)}%</span>
                    </div>
                  </div>
                  <div>
                    <div className="progress-line">
                      <div
                        className="progress-lvl"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="course-toc">
                  {mockCourse.chapters.map((chap) => {
                    // filter chapter's subchapters for ones with content
                    const validSubs = chap.subchapters.filter(hasAnyContent);
                    if (validSubs.length === 0) {
                      // if no subchap has any content, skip hiding the chapter entirely or maybe grey it out
                      return null;
                    }
                    const chapAllDone = validSubs.every((sc) =>
                      isCompleted(sc.id)
                    );
                    return (
                      <div
                        key={chap.id}
                        className={`toc-item ${
                          chap.id === activeChapterId ? "active-chapter" : ""
                        }`}
                      >
                        <div
                          className="toc-title"
                          onClick={() => {
                            setActiveChapterId(chap.id);
                            setActiveSubchapterId(validSubs[0].id);
                          }}
                        >
                          <span className="icon">
                            {chapAllDone ? (
                              <LuCircleCheckBig />
                            ) : (
                              <LuSquircle />
                            )}
                          </span>
                          <span>{chap.title}</span>
                        </div>
                        <ul className="toc-list">
                          {validSubs.map((sub) => (
                            <li
                              key={sub.id}
                              className={`toc-sub ${
                                sub.id === activeSubchapterId
                                  ? "active-subchapter"
                                  : ""
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isCompleted(sub.id)}
                                readOnly
                              />
                              <label
                                onClick={() => {
                                  setActiveChapterId(chap.id);
                                  setActiveSubchapterId(sub.id);
                                }}
                              >
                                {sub.title}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="course-content" ref={contentRef}>
                <div className="content-nav">
                  <div className="course-t-text">
                    <div>
                      <h2>{activeSubchapter?.title || ""}</h2>
                    </div>
                    <div>
                      <button onClick={toggleFullscreen}>
                        <span>
                          <LuFullscreen />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="course-sub-text">
                    <div>
                      <p>{mockCourse.author}</p>
                    </div>
                    <div className="navigation-info">
                      {timeRemaining !== null && (
                        <div className="time-remaining">
                          <p>Remaining: {formatTime(timeRemaining)}</p>
                        </div>
                      )}

                      <div>
                        {(() => {
                          const chapIdx = mockCourse.chapters.findIndex(
                            (c) => c.id === activeChapterId
                          );
                          return `CHAPTER ${chapIdx + 1} / ${
                            mockCourse.chapters.length
                          }`;
                        })()}
                      </div>

                      <div className="chevron">
                        <span
                          onClick={() => {
                            // prev subchapter or go to previous chapter end
                            const chapIdx = mockCourse.chapters.findIndex(
                              (c) => c.id === activeChapterId
                            );
                            const validSubs =
                              mockCourse.chapters[chapIdx].subchapters.filter(
                                hasAnyContent
                              );
                            const subIdx = validSubs.findIndex(
                              (s) => s.id === activeSubchapterId
                            );
                            if (subIdx > 0) {
                              setActiveSubchapterId(validSubs[subIdx - 1].id);
                            } else if (chapIdx > 0) {
                              const prevChap = mockCourse.chapters[chapIdx - 1];
                              const prevValidSubs =
                                prevChap.subchapters.filter(hasAnyContent);
                              if (prevValidSubs.length > 0) {
                                setActiveChapterId(prevChap.id);
                                setActiveSubchapterId(
                                  prevValidSubs[prevValidSubs.length - 1].id
                                );
                              }
                            }
                          }}
                        >
                          <LuChevronLeft />
                        </span>
                        <span
                          onClick={() => {
                            // next
                            const chapIdx = mockCourse.chapters.findIndex(
                              (c) => c.id === activeChapterId
                            );
                            const validSubs =
                              mockCourse.chapters[chapIdx].subchapters.filter(
                                hasAnyContent
                              );
                            const subIdx = validSubs.findIndex(
                              (s) => s.id === activeSubchapterId
                            );
                            if (subIdx < validSubs.length - 1) {
                              setActiveSubchapterId(validSubs[subIdx + 1].id);
                            } else if (
                              chapIdx <
                              mockCourse.chapters.length - 1
                            ) {
                              const nextChap = mockCourse.chapters[chapIdx + 1];
                              const nextValidSubs =
                                nextChap.subchapters.filter(hasAnyContent);
                              if (nextValidSubs.length > 0) {
                                setActiveChapterId(nextChap.id);
                                setActiveSubchapterId(nextValidSubs[0].id);
                              }
                            }
                          }}
                        >
                          <LuChevronRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content-display">
                  {mode === "text" &&
                    activeSubchapter &&
                    activeSubchapter.content && (
                      <div className="text-viewer">
                        <div className="view-contents">
                          <div className="rich-text"
                            dangerouslySetInnerHTML={{
                              __html: activeSubchapter.content,
                            }}
                          />
                          <button onClick={handleTextRead}>Mark as Read</button>
                        </div>
                      </div>
                    )}

                  {mode === "video" &&
                    activeSubchapter &&
                    activeSubchapter.video && (
                      <div className="video-player">
                        <video
                          ref={videoRef}
                          src={activeSubchapter.video}
                          controls
                          onEnded={handleMediaEnded}
                          onTimeUpdate={handleTimeUpdate}
                          onLoadedMetadata={(e) => {
                            setMediaDuration(e.currentTarget.duration);
                          }}
                        />
                        <div className="media-time-info">
                          <span>{formatTime(mediaCurrentTime)}</span> /{" "}
                          <span>{formatTime(mediaDuration)}</span>
                        </div>
                      </div>
                    )}

                  {mode === "audio" &&
                    activeSubchapter &&
                    activeSubchapter.audio && (
                      <div className="audio-player">
                        <audio
                          ref={audioRef}
                          src={activeSubchapter.audio}
                          controls
                          onEnded={handleMediaEnded}
                          onTimeUpdate={handleTimeUpdate}
                          onLoadedMetadata={(e) => {
                            setMediaDuration(e.currentTarget.duration);
                          }}
                        />
                        <div className="media-time-info">
                          <span>{formatTime(mediaCurrentTime)}</span> /{" "}
                          <span>{formatTime(mediaDuration)}</span>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearningPage;
