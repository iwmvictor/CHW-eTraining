import React, { useState } from "react";
import { LuArrowLeft, LuEye, LuGrip, LuPencil, LuPlus } from "react-icons/lu";
import ReactQuill from "react-quill";
import { Tooltip } from "react-tooltip";

// Dummy data storage in localStorage
const saveToLocalStorage = (questions) => {
  localStorage.setItem("assessmentQuestions", JSON.stringify(questions));
};

const NewAssessmentPage = () => {
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("assessmentQuestions")) || []
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    type: "",
    question: "",
    options: [],
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleAddQuestion = () => {
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
    saveToLocalStorage(updatedQuestions);
    closeModal();
  };

  const handleQuestionChange = (e) => {
    setNewQuestion({ ...newQuestion, question: e.target.value });
  };

  const handleTypeChange = (e) => {
    setNewQuestion({ ...newQuestion, type: e.target.value });
  };

  const handleOptionChange = (e, index) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions[index] = e.target.value;
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  return (
    <div>
      <div className="dashboard">
        <div className="trainer-new-quiz">
          <div className="container">
            <div className="content">
              <div className="back">
                <button>
                  <span>
                    <LuArrowLeft />
                  </span>
                  <span>Go Back</span>
                </button>
              </div>

              <div className="page-nav">
                <div className="nav-title">
                  <h2>Assessment</h2>
                  <p>Add questions</p>
                </div>
                <div className="actions">
                  <button className="publish">
                    <span>Publish</span>
                  </button>
                  <button className="preview">
                    <span>
                      <LuEye />
                    </span>
                  </button>
                </div>
              </div>

              <div className="page-questions">
                <div className="quiz-instructions">
                  <div className="title">
                    <p>Quiz Instructions</p>
                    <div className="edit">
                      <span>
                        <LuPencil />
                      </span>
                      <span>Edit description</span>
                    </div>
                  </div>
                  <div className="input">
                    <ReactQuill className="quill" />
                  </div>
                </div>

                <div className="questions-list">
                  {questions.map((q, index) => (
                    <div key={index} className="question-box">
                      <div className="title">
                        <h3>{q.question}</h3>
                        <button>
                          <span>
                            <LuGrip />
                          </span>
                        </button>
                      </div>
                      {q.type === "multiple-choice" && (
                        <ul>
                          {q.options.map((option, idx) => (
                            <li key={idx}>
                              <input
                                type="checkbox"
                                id={`q${index}c${idx}`}
                                value={option}
                              />
                              <span>{option}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {q.type === "short-text" && <input type="text" />}
                      {q.type === "description" && <textarea />}
                    </div>
                  ))}
                </div>

                {modalOpen && (
                  <div className="new-modal">
                    <div className="modal-content">
                      <h2>New Question</h2>
                      <div>
                        <select
                          onChange={handleTypeChange}
                          value={newQuestion.type}
                        >
                          <option value="">Select Type</option>
                          <option value="multiple-choice">
                            Multiple Choice
                          </option>
                          <option value="short-text">Short Text</option>
                          <option value="description">Description</option>
                        </select>
                      </div>
                      <div className="q">
                        <label>
                          Question:
                          <input
                            type="text"
                            value={newQuestion.question}
                            onChange={handleQuestionChange}
                          />
                        </label>
                      </div>
                      {newQuestion.type === "multiple-choice" && (
                        <div className="q">
                          <label>Options:</label>
                          <div>
                            {newQuestion.options.map((option, index) => (
                              <div key={index}>
                                <input
                                  type="text"
                                  value={option}
                                  onChange={(e) => handleOptionChange(e, index)}
                                />
                              </div>
                            ))}
                            <button className="add-opt"
                              onClick={() =>
                                setNewQuestion({
                                  ...newQuestion,
                                  options: [...newQuestion.options, ""],
                                })
                              }
                            >
                              Add Option
                            </button>
                          </div>
                        </div>
                      )}
                      <div className="modal-action">
                        <button onClick={handleAddQuestion}>Done</button>
                        <button onClick={closeModal}>Cancel</button>
                      </div>
                    </div>
                  </div>
                )}

                <button className="add-question" id="add" onClick={openModal}>
                  <span>
                    <LuPlus />
                  </span>
                </button>
                <Tooltip
                  anchorId="add"
                  content="New Question"
                  style={{
                    padding: ".3rem",
                    fontSize: ".7rem",
                    background: "#4d81d2",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAssessmentPage;
