import { useState } from "react";
import { LuArrowUpDown, LuSearch, LuSettings2 } from "react-icons/lu";
import { slugify } from "../mock/functions";
import { useNavigate } from "react-router-dom";

const assessments = [
  {
    courseName: "Maternal Health",
    category: "Quiz",
    dueDate: "Jul 25, 2025",
    status: "Completed",
    score: "85%",
    action: "Get Certificate",
  },
  {
    courseName: "Nutrition Basics",
    category: "Assignment",
    dueDate: "Jul 28, 2025",
    status: "Submitted",
    score: "Awaiting",
    action: "View Submission",
  },
  {
    courseName: "Child Health",
    category: "Quiz",
    dueDate: "Jul 30, 2025",
    status: "Not Started",
    score: "-",
    action: "Attempt Now",
  },
  {
    courseName: "Hygiene & Sanitation",
    category: "Assignment",
    dueDate: "Aug 1, 2025",
    status: "Pending",
    score: "-",
    action: "Start Now",
  },
  {
    courseName: "Nutrition Basics",
    category: "Quiz",
    dueDate: "Jul 22, 2025",
    status: "Missed",
    score: "0%",
    action: "-",
  },
  {
    courseName: "Nutrition Basics",
    category: "Assignment",
    dueDate: "Jul 28, 2025",
    status: "Pending",
    score: "-",
    action: "Start Now",
  },
  {
    courseName: "Environmental Health",
    category: "Quiz",
    dueDate: "Aug 3, 2025",
    status: "Completed",
    score: "92%",
    action: "Get Certificate",
  },
  {
    courseName: "Immunization",
    category: "Quiz",
    dueDate: "Aug 5, 2025",
    status: "Not Started",
    score: "-",
    action: "Attempt Now",
  },
  {
    courseName: "First Aid",
    category: "Assignment",
    dueDate: "Aug 7, 2025",
    status: "Submitted",
    score: "Awaiting",
    action: "View Submission",
  },
  {
    courseName: "Mental Health",
    category: "Quiz",
    dueDate: "Aug 9, 2025",
    status: "Completed",
    score: "88%",
    action: "Get Certificate",
  },
  {
    courseName: "Public Health Policy",
    category: "Assignment",
    dueDate: "Aug 11, 2025",
    status: "Pending",
    score: "-",
    action: "Start Now",
  },
  {
    courseName: "Infectious Diseases",
    category: "Quiz",
    dueDate: "Aug 13, 2025",
    status: "Missed",
    score: "0%",
    action: "-",
  },
  {
    courseName: "Reproductive Health",
    category: "Assignment",
    dueDate: "Aug 15, 2025",
    status: "Submitted",
    score: "Awaiting",
    action: "View Submission",
  },
  {
    courseName: "Child Psychology",
    category: "Quiz",
    dueDate: "Aug 17, 2025",
    status: "Completed",
    score: "90%",
    action: "Get Certificate",
  },
  {
    courseName: "Nutrition Basics",
    category: "Quiz",
    dueDate: "Aug 19, 2025",
    status: "Missed",
    score: "0%",
    action: "-",
  },
  {
    courseName: "Disease Prevention",
    category: "Assignment",
    dueDate: "Aug 21, 2025",
    status: "Pending",
    score: "-",
    action: "Start Now",
  },
  {
    courseName: "Community Health",
    category: "Assignment",
    dueDate: "Aug 23, 2025",
    status: "Not Started",
    score: "-",
    action: "Attempt Now",
  },
  {
    courseName: "Elderly Care",
    category: "Quiz",
    dueDate: "Aug 25, 2025",
    status: "Completed",
    score: "95%",
    action: "Get Certificate",
  },
  {
    courseName: "Health & Safety",
    category: "Assignment",
    dueDate: "Aug 27, 2025",
    status: "Submitted",
    score: "Awaiting",
    action: "View Submission",
  },
  {
    courseName: "Emergency Response",
    category: "Quiz",
    dueDate: "Aug 29, 2025",
    status: "Not Started",
    score: "-",
    action: "Attempt Now",
  },
];

const StudentQuizzes = () => {
  const [assessment, setAssessment] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const navigate = useNavigate();

  const itemsPerPage = 10;

  const handleDoQuiz = (item) => {
    const slug = slugify(item.courseName);

    if (item.status === "Not Started" || "Attempt Now") {
      navigate(`/trainee/assessment/${slug}`);
    } else if (item.status === "Completed") {
      navigate(`/trainee/course/certificate/${slug}`);
    } else {
      return;
    }
  };

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
                      <button
                        disabled={
                          item.status === "Missed" || item.action === "-"
                        }
                        onClick={() => handleDoQuiz(item)}
                      >
                        <span>
                          {item.status === "Not Started"
                            ? "Attempt Now"
                            : item.status === "Completed"
                            ? "Get Certificate"
                            : item.status === "Pending"
                            ? "Start Now"
                            : item.status === "Submitted"
                            ? "View Submission"
                            : "-"}
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
