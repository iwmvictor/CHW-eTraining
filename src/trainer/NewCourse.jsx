import React from "react";
import { useNavigate } from "react-router-dom";

const CreateNewCourse = () => {
  const [activeTab, setActiveTab] = React.useState("course");
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleNewCourse = () => {
    navigate("/trainer/course/create");
  };

  return (
    <div>
      <div className="dashboard">
        <div className="trainer-new-courses">
          <div className="container">
            <div className="content">
              <div className="div">
                <ul className="tabs">
                  <li
                    className={activeTab === "course" ? "active" : ""}
                    onClick={() => handleTabChange("course")}
                  >
                    <span>Course</span>
                  </li>
                  <li
                    className={activeTab === "assignment" ? "active" : ""}
                    onClick={() => handleTabChange("assignment")}
                  >
                    <span>Assignment</span>
                  </li>
                </ul>

                <div className="tab-content">
                  {activeTab === "course" && (
                    <div className="course-content">
                      <div className="titles">
                        <h2>Name your course</h2>
                        <p>
                          What would you like to name your course? Don't worry,
                          you can change it later.
                        </p>
                      </div>

                      <div className="input">
                        <label htmlFor="course-name">Course Name</label>
                        <input
                          type="text"
                          id="course-name"
                          placeholder="Enter course name"
                        />
                      </div>
                      <div className="buttons">
                        <button className="cancel">
                          <span>Cancel</span>
                        </button>
                        <button onClick={handleNewCourse} className="continue">
                          <span>Continue</span>
                        </button>
                      </div>
                    </div>
                  )}
                  {activeTab === "assignment" && (
                    <div className="assignment-content">
                      <div className="titles">
                        <h2>Quiz Preparation</h2>
                        <p>Please setup your Quiz, Assignment / Exam details</p>
                      </div>

                      <form className="form">
                        <div className="inputs">
                          <div className="input">
                            <label htmlFor="course-name">Choose category</label>
                            <select name="category" id="category">
                              <option value="quiz">Quiz</option>
                              <option value="assignment">Assignment</option>
                              <option value="exam">Exam</option>
                            </select>
                          </div>
                          <div className="input">
                            <label htmlFor="title">Title:</label>
                            <input
                              type="text"
                              id="title"
                              placeholder="Enter title.."
                            />
                          </div>
                        </div>
                        <div className="input">
                          <label htmlFor="course-name">Choose the course</label>
                          <select name="course" id="course">
                            <option value="course1">Course 1</option>
                            <option value="course2">Course 2</option>
                            <option value="course3">Course 3</option>
                          </select>
                        </div>
                      </form>
                      <div className="buttons">
                        <button className="cancel">
                          <span>Cancel</span>
                        </button>
                        <button className="continue">
                          <span>Continue</span>
                        </button>
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

export default CreateNewCourse;
