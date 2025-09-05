import { useRef, useState } from "react";
import {
  LuAudioLines,
  LuCirclePlus,
  LuDelete,
  LuFile,
  LuGrip,
  LuLayoutDashboard,
  LuPencil,
  LuTableOfContents,
  LuTrash,
  LuTvMinimalPlay,
} from "react-icons/lu";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { assets } from "../mock/asset";

// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useNavigate } from "react-router-dom";

const initialChapters = [
  { id: "1", title: "Introduction to Malaria" },
  { id: "2", title: "Introduction to Child Nutrition" },
  { id: "3", title: "Macronutrients & Micronutrients Explained" },
  { id: "4", title: "Mssalnutrition: Signs and community impact" },
  { id: "5", title: "How to Monitor Growth in Children" },
];

const NewCoursePage = () => {
  const [value, setValue] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [chapters, setChapters] = useState(initialChapters);
  const [thumbnailPreview, setThumbnailPreview] = useState("");

  const navigate = useNavigate();

  const handleThumbnailChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setThumbnailPreview(url);
    }
  };

  const handleNewChapter = () => {
    navigate("/trainer/course/create/chapter");
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(chapters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setChapters(items);
  };

  const videoInputRef = useRef(null);
  const audioInputRef = useRef(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) setVideoFile(file);
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file) setAudioFile(file);
  };

  const removeVideo = () => setVideoFile(null);
  const removeAudio = () => setAudioFile(null);

  return (
    <>
      <div className="dashboard">
        <div className="trainer-create-course">
          <div className="container">
            <div className="content">
              <div className="titles">
                <div className="text">
                  <h2>My Course</h2>
                  <p>
                    Complete all fields <span>(2/5)</span>
                  </p>
                </div>
                <div className="action">
                  <button className="publish">
                    <span>Publish</span>
                  </button>
                  <button className="delete">
                    <span>
                      <LuTrash />
                    </span>
                  </button>
                </div>
              </div>
              <div className="course-content">
                <div className="div">
                  <div className="custom">
                    <div className="title">
                      <span className="icon">
                        <LuLayoutDashboard />
                      </span>
                      <h3>Customize your course</h3>
                    </div>
                    <div className="input course_title">
                      <div className="input-title">
                        <label htmlFor="course-title">Course title</label>
                        <span className="edit">
                          <span>
                            <LuPencil />
                          </span>
                          <span>Edit title</span>
                        </span>
                      </div>
                      <input
                        type="text"
                        placeholder="Course title"
                        id="course-title"
                      />
                    </div>
                    <div className="input course_description">
                      <div className="input-title">
                        <label htmlFor="course-description">
                          Course Description
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
                    <div className="input course_thumbnail">
                      <div className="input-title">
                        <label htmlFor="course-thumbnail">
                          Course Thumbnail
                        </label>
                        <label htmlFor="course-thumbnail" className="edit">
                          <span>
                            <LuPencil />
                          </span>
                          <span>Edit thumbnail</span>
                        </label>
                      </div>
                      <div className="thumbnail-preview">
                        <img
                          src={thumbnailPreview || assets.placeholderImg}
                          alt="Thumbnail Preview"
                        />
                      </div>
                      <input
                        type="file"
                        id="course-thumbnail"
                        accept="image/*"
                        onChange={handleThumbnailChange}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="div">
                  <div className="chapters">
                    <div className="title">
                      <span className="icon">
                        <LuTableOfContents />
                      </span>
                      <h3>Course chapters</h3>
                    </div>
                    <div className="input chapter-list">
                      <div className="titles chapter-title">
                        <label htmlFor="course-chapters">Course chapters</label>
                        <span onClick={handleNewChapter} className="edit">
                          <span>
                            <LuCirclePlus />
                          </span>
                          <span>Add a chapter</span>
                        </span>
                      </div>

                      <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="chapters">
                          {(provided) => (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                            >
                              {chapters.map((chapter, index) => (
                                <Draggable
                                  key={chapter.id}
                                  draggableId={chapter.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => (
                                    <div
                                      className="chapter"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                    >
                                      <div className="chap-left">
                                        <span
                                          className="chapter-drag-icon"
                                          {...provided.dragHandleProps}
                                        >
                                          <LuGrip />
                                        </span>
                                        <span className="chap-title">
                                          {chapter.title}
                                        </span>
                                      </div>
                                      <div className="chap-right">
                                        <span className="status">
                                          Published
                                        </span>
                                        <span className="edit">
                                          <span>
                                            <LuPencil />
                                          </span>
                                          <span>Edit chapter</span>
                                        </span>
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </DragDropContext>

                      <div className="chapter-footer-info">
                        <p>Drag and drop to reorder the chapters</p>
                      </div>
                    </div>
                  </div>

                  <div className="resources">
                    <div className="title">
                      <span className="icon">
                        <LuFile />
                      </span>
                      <h3>Video & Audio Attachments</h3>
                    </div>
                    <div className="input course-files">
                      <div className="titles file-title">
                        <label htmlFor="video-file">Video attachments</label>
                        <span
                          className="edit"
                          onClick={() => videoInputRef.current.click()}
                        >
                          <span>
                            <LuCirclePlus />
                          </span>
                          <span>Add a video</span>
                        </span>
                        <input
                          type="file"
                          id="video-file"
                          accept="video/*"
                          style={{ display: "none" }}
                          ref={videoInputRef}
                          onChange={handleVideoChange}
                        />
                      </div>

                      {videoFile && (
                        <div className="file-input">
                          <div className="file-name">
                            <span className="icon">
                              <LuTvMinimalPlay />
                            </span>
                            <span className="title">{videoFile.name}</span>
                          </div>
                          <div>
                            <span className="remove" onClick={removeVideo}>
                              <LuDelete />
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Audio Upload */}
                    <div className="input course-files">
                      <div className="titles file-title">
                        <label htmlFor="audio-file">Audio attachments</label>
                        <span
                          className="edit"
                          onClick={() => audioInputRef.current.click()}
                        >
                          <span>
                            <LuCirclePlus />
                          </span>
                          <span>Add an audio</span>
                        </span>
                        <input
                          type="file"
                          id="audio-file"
                          accept="audio/*"
                          style={{ display: "none" }}
                          ref={audioInputRef}
                          onChange={handleAudioChange}
                        />
                      </div>

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
      </div>
    </>
  );
};

export default NewCoursePage;
