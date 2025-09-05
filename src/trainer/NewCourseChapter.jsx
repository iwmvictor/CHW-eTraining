import React, { useRef, useState } from "react";
import {
  LuArrowLeft,
  LuAudioLines,
  LuCirclePlus,
  LuDelete,
  LuLayoutDashboard,
  LuPencil,
  LuTableOfContents,
  LuTrash,
  LuVideo,
  LuVideotape,
} from "react-icons/lu";
import ReactQuill from "react-quill";
import { assets } from "../mock/asset";
import { useNavigate } from "react-router-dom";

const NewCourseChapter = () => {
  const [value, setValue] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState("");

  const navigate = useNavigate();

  const handleBacktoCourseSetup = () => {
    navigate("/trainer/course/create");
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoPreview(videoUrl);
    }
  };

  const audioInputRef = useRef(null);

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file) setAudioFile(file);
  };

  const removeAudio = () => setAudioFile(null);

  return (
    <>
      <div className="dashboard">
        <div className="trainer-create-chapter">
          <div className="container">
            <div className="content">
              <div className="page-title">
                <div className="text">
                  <div className="back">
                    <button
                      onClick={() => {
                        navigate("/trainer/course/create");
                      }}
                    >
                      <span className="icon">
                        <LuArrowLeft />
                      </span>
                      <span>Back to course setup</span>
                    </button>
                  </div>
                  <div>
                    <h2>My Chapter</h2>
                    <p>Complete all fields 2/5</p>
                  </div>
                </div>
                <div className="action">
                  <button className="publish">
                    <span>Unpublish</span>
                  </button>
                  <button className="delete">
                    <span>
                      <LuTrash />
                    </span>
                  </button>
                </div>
              </div>
              <div className="page-sections">
                <div className="left">
                  <div className="title">
                    <span className="icon">
                      <LuLayoutDashboard />
                    </span>
                    <h3>Customize chapter</h3>
                  </div>
                  <div className="input chap_title">
                    <div className="input-title">
                      <label htmlFor="chap-title">Chapter title</label>
                      <span className="edit">
                        <span>
                          <LuPencil />
                        </span>
                        <span>Edit title</span>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Chapter title"
                      id="chap-title"
                    />
                  </div>
                  <div className="input chap_description">
                    <div className="input-title">
                      <label htmlFor="chap-description">
                        Chapter description
                      </label>
                      <span className="edit">
                        <span>
                          <LuPencil />
                        </span>
                        <span>Edit description</span>
                      </span>
                    </div>
                    <ReactQuill
                      theme="snow"
                      value={value}
                      onChange={setValue}
                      className="quill"
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="title">
                    <span className="icon">
                      <LuVideotape />
                    </span>
                    <h3>Upload chapter's video</h3>
                  </div>
                  <div className="input chap_video">
                    <div className="input-title">
                      <label htmlFor="">Chapter video file</label>
                      <label htmlFor="chap-video" className="edit">
                        <span>
                          <LuCirclePlus />
                        </span>
                        <span>Edit video</span>
                      </label>
                    </div>
                    <div className="video-preview">
                      <video
                        src={videoPreview || assets.placeholderImg}
                        controls
                      ></video>
                    </div>
                    <input
                      type="file"
                      id="chap-video"
                      style={{ display: "none" }}
                      onChange={handleVideoChange}
                      accept="video/mp4, video/x-m4v, video/*"
                    />
                  </div>

                  <div className="title">
                    <span className="icon">
                      <LuAudioLines />
                    </span>
                    <h3>Upload chapter's audio</h3>
                  </div>
                  <div className="input course_audio">
                    <div className="input-title">
                      <label htmlFor="audio">Audio attachment</label>
                      <span
                        className="edit"
                        onClick={() => audioInputRef.current?.click()}
                      >
                        <span>
                          <LuPencil />
                        </span>
                        <span>Edit audio</span>
                      </span>
                    </div>

                    {/* Hidden file input */}
                    <input
                      type="file"
                      accept="audio/*"
                      ref={audioInputRef}
                      onChange={handleAudioChange}
                      style={{ display: "none" }}
                    />

                    {audioFile && (
                      <div className="file-input">
                        <div className="file-name">
                          <span className="icon">
                            <LuAudioLines />
                          </span>
                          <span className="title">{audioFile.name}</span>
                        </div>
                        <div>
                          <span className="remove" onClick={removeAudio}>
                            <LuDelete />
                          </span>
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
    </>
  );
};

export default NewCourseChapter;
