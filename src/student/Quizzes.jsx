import { useState } from "react";
import { LuArrowUpDown, LuSearch, LuSettings2 } from "react-icons/lu";

const assessments = [
  {
    courseName: "Maternal Health",
    category: "Quiz",
    dueDate: "July 25, 2025",
    status: "Completed",
    score: "85%",
    action: "Get Certificate",
  },
  {
    courseName: "Nutrition Basics",
    category: "Assignment",
    dueDate: "July 28, 2025",
    status: "Submitted",
    score: "Awaiting",
    action: "View Submission",
  },
  {
    courseName: "Child Health",
    category: "Quiz",
    dueDate: "July 30, 2025",
    status: "Not Started",
    score: "-",
    action: "Attempt Now",
  },
  {
    courseName: "Hygiene & Sanitation",
    category: "Assignment",
    dueDate: "August 1, 2025",
    status: "Pending",
    score: "-",
    action: "Start Now",
  },
  {
    courseName: "Nutrition Basics",
    category: "Quiz",
    dueDate: "July 22, 2025",
    status: "Missed",
    score: "0%",
    action: "-",
  },
  {
    courseName: "Nutrition Basics",
    category: "Assignment",
    dueDate: "July 28, 2025",
    status: "Pending",
    score: "-",
    action: "Start Now",
  },
  {
    courseName: "Environmental Health",
    category: "Quiz",
    dueDate: "August 3, 2025",
    status: "Completed",
    score: "92%",
    action: "Get Certificate",
  },
  {
    courseName: "Immunization",
    category: "Quiz",
    dueDate: "August 5, 2025",
    status: "Not Started",
    score: "-",
    action: "Attempt Now",
  },
  {
    courseName: "First Aid",
    category: "Assignment",
    dueDate: "August 7, 2025",
    status: "Submitted",
    score: "Awaiting",
    action: "View Submission",
  },
  {
    courseName: "Mental Health",
    category: "Quiz",
    dueDate: "August 9, 2025",
    status: "Completed",
    score: "88%",
    action: "Get Certificate",
  },
  {
    courseName: "Public Health Policy",
    category: "Assignment",
    dueDate: "August 11, 2025",
    status: "Pending",
    score: "-",
    action: "Start Now",
  },
  {
    courseName: "Infectious Diseases",
    category: "Quiz",
    dueDate: "August 13, 2025",
    status: "Missed",
    score: "0%",
    action: "-",
  },
  {
    courseName: "Reproductive Health",
    category: "Assignment",
    dueDate: "August 15, 2025",
    status: "Submitted",
    score: "Awaiting",
    action: "View Submission",
  },
  {
    courseName: "Child Psychology",
    category: "Quiz",
    dueDate: "August 17, 2025",
    status: "Completed",
    score: "90%",
    action: "Get Certificate",
  },
  {
    courseName: "Nutrition Basics",
    category: "Quiz",
    dueDate: "August 19, 2025",
    status: "Missed",
    score: "0%",
    action: "-",
  },
  {
    courseName: "Disease Prevention",
    category: "Assignment",
    dueDate: "August 21, 2025",
    status: "Pending",
    score: "-",
    action: "Start Now",
  },
  {
    courseName: "Community Health",
    category: "Assignment",
    dueDate: "August 23, 2025",
    status: "Not Started",
    score: "-",
    action: "Attempt Now",
  },
  {
    courseName: "Elderly Care",
    category: "Quiz",
    dueDate: "August 25, 2025",
    status: "Completed",
    score: "95%",
    action: "Get Certificate",
  },
  {
    courseName: "Health & Safety",
    category: "Assignment",
    dueDate: "August 27, 2025",
    status: "Submitted",
    score: "Awaiting",
    action: "View Submission",
  },
  {
    courseName: "Emergency Response",
    category: "Quiz",
    dueDate: "August 29, 2025",
    status: "Not Started",
    score: "-",
    action: "Attempt Now",
  },
];

const StudentQuizzes = () => {
  const [assessment, setAssessment] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const itemsPerPage = 10;

  const getFilteredAssessments = () => {
    switch (assessment) {
      case "Undone":
        return assessments.filter(
          (a) => a.status === "Pending" || a.status === "Not Started"
        );
      case "done":
        return assessments.filter((a) => a.status === "Completed");
      case "lost":
        return assessments.filter((a) => a.status === "Missed");
      default:
        return assessments;
    }
  };

  const filteredAssessment = getFilteredAssessments();
  const totalPages = Math.ceil(filteredAssessment.length / itemsPerPage);
  const paginatedAssessments = filteredAssessment.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="dashboard">
        <div className="student-quizzes-page">
          <div className="container">
            <div className="content">
              <div className="titles">
                <h2>Assessments</h2>
              </div>

              <div className="tabs">
                <li
                  className={assessment === "All" ? "active" : ""}
                  onClick={() => setAssessment("All")}
                >
                  <span>All</span>
                </li>
                <li
                  className={assessment === "Undone" ? "active" : ""}
                  onClick={() => setAssessment("Undone")}
                >
                  <span>Unattempted</span>
                </li>
                <li
                  className={assessment === "done" ? "active" : ""}
                  onClick={() => setAssessment("done")}
                >
                  <span>Done</span>
                </li>
                <li
                  className={assessment === "lost" ? "active" : ""}
                  onClick={() => setAssessment("lost")}
                >
                  <span>Lost</span>
                </li>
              </div>

              <div className="table">
                <div className="tr th">
                  <div className="c-name">
                    <span>Course Name</span>
                    <LuArrowUpDown />
                  </div>
                  <div className="c-phone">
                    <span>Category</span>
                    <LuArrowUpDown />
                  </div>
                  <div className="c-district">
                    <span>Due Date</span>
                    <LuArrowUpDown />
                  </div>
                  <div className="c-courses">
                    <span>Status</span>
                    <LuArrowUpDown />
                  </div>
                  <div className="c-progress">
                    <span>Score</span>
                    <LuArrowUpDown />
                  </div>
                  <div className="c-action">
                    <span>Action</span>
                    <LuArrowUpDown />
                  </div>
                </div>

                {paginatedAssessments.map((item, index) => (
                  <div className="tr td" key={index}>
                    <div className="c-name">
                      <span>{item.courseName}</span>
                    </div>
                    <div className="c-phone">
                      <span>{item.category}</span>
                    </div>
                    <div className="c-district">
                      <span>{item.dueDate}</span>
                    </div>
                    <div className="c-courses">
                      <span>{item.status}</span>
                    </div>
                    <div className="c-progress">
                      <span>{item.score}</span>
                    </div>
                    <div className="c-action">
                      <button>
                        <span>
                          {item.status === "Not Started"
                            ? "Attempt Now"
                            : item.status === "Missed"
                            ? ".."
                            : item.status === "Pending"
                            ? "Start Now"
                            : item.status === "Completed"
                            ? "Get Certificate"
                            : "Learn more"}
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredAssessment.length > itemsPerPage && (
                <div className="pagination">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    ← Previous
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      className={currentPage === i + 1 ? "active" : ""}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentQuizzes;
