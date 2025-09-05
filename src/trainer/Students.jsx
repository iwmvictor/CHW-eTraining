import {
  LuArrowUpDown,
  LuCirclePlus,
  LuEllipsis,
  LuSearch,
  LuSettings2,
} from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./../style/trainer.scss";

const students = [
  {
    fullName: "Mukamana Vestine",
    phoneNumber: "250 781 234 567",
    districtSector: "Rulindo / Kinihira",
    district: "Rulindo",
    sector: "Kinihira",
    courses: ["Malaria Treatment"],
    progress: "45%",
  },
  {
    fullName: "Niyonzima Eric",
    phoneNumber: "250 781 234 152",
    districtSector: "Kicukiro / Gikondo",
    district: "Kicukiro",
    sector: "Gikondo",
    courses: ["First Aid Protocol"],
    progress: "100%",
  },
  {
    fullName: "Uwizeye Clarisse",
    phoneNumber: "250 781 234 152",
    districtSector: "Nyagatare / Rukomo",
    district: "Nyagatare",
    sector: "Rukomo",
    courses: ["Malaria Treatment", "First Aid Protocol"],
    progress: "65%",
  },
  {
    fullName: "Tuyishime Samuel",
    phoneNumber: "250 781 234 152",
    districtSector: "Musanze / Cyuve",
    district: "Musanze",
    sector: "Cyuve",
    courses: ["Malaria Treatment"],
    progress: "43%",
  },
  {
    fullName: "Ingabire Solange",
    phoneNumber: "250 781 234 152",
    districtSector: "Huye / Ngoma",
    district: "Huye",
    sector: "Ngoma",
    courses: ["Malaria Treatment"],
    progress: "55%",
  },
  {
    fullName: "Habimana Theophile",
    phoneNumber: "250 781 234 152",
    districtSector: "Rubavu / Nyamyumba",
    district: "Rubavu",
    sector: "Nyamyumba",
    courses: ["First Aid Protocol"],
    progress: "85%",
  },
  {
    fullName: "Murekatete Alice",
    phoneNumber: "250 781 234 152",
    districtSector: "Gicumbi / Byumba",
    district: "Gicumbi",
    sector: "Byumba",
    courses: ["Child Nutrition", "First Aid Protocol"],
    progress: "100%",
  },
  {
    fullName: "Nsabimana Jean Paul",
    phoneNumber: "250 781 234 152",
    districtSector: "Karongi / Bwishyura",
    district: "Karongi",
    sector: "Bwishyura",
    courses: ["Malaria Treatment"],
    progress: "66%",
  },
  {
    fullName: "Jean Mukiza",
    phoneNumber: "250 781 234 189",
    districtSector: "Kayonza / Mukarange",
    district: "Kayonza",
    sector: "Mukarange",
    courses: ["Child Nutrition"],
    progress: "78%",
  },
  {
    fullName: "Alice Nirere",
    phoneNumber: "250 781 234 199",
    districtSector: "Bugesera / Nyamata",
    district: "Bugesera",
    sector: "Nyamata",
    courses: ["Malaria Treatment", "Child Nutrition"],
    progress: "82%",
  },
  {
    fullName: "Eric Kabera",
    phoneNumber: "250 781 234 123",
    districtSector: "Gasabo / Kimironko",
    district: "Gasabo",
    sector: "Kimironko",
    courses: ["Malaria Treatment"],
    progress: "61%",
  },
];

const getAllCourses = (students) => {
  const courseSet = new Set();
  students.forEach((s) => s.courses.forEach((c) => courseSet.add(c)));
  return ["All", ...Array.from(courseSet)];
};

const TrainerStudentsList = () => {
  const courses = getAllCourses(students);
  const [selectedCourse, setSelectedCourse] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const studentsPerPage = 10;

  const filteredStudents =
    selectedCourse === "All"
      ? students
      : students.filter((s) => s.courses.includes(selectedCourse));

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );

  return (
    <div className="dashboard">
      <div className="trainer-student-list">
        <div className="container">
          <div className="content">
            <div className="titles">
              <h2>Students Enrolled</h2>
              <div className="action">
                <div className="search">
                  <span className="icon search-icon">
                    <LuSearch />
                  </span>
                  <input type="search" placeholder="Search..." />
                  <span className="icon filter">
                    <LuSettings2 />
                  </span>
                </div>
                <button className="export">
                  <span>Export Students</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="tabs">
              {courses.map((course) => (
                <li
                  key={course}
                  className={selectedCourse === course ? "active" : ""}
                  onClick={() => {
                    setSelectedCourse(course);
                    setCurrentPage(1);
                  }}
                >
                  <span>{course}</span>
                </li>
              ))}
            </div>

            {/* Table */}
            <div className="table">
              <div className="tr th">
                <div className="c-name">
                  <span>Full Name</span>
                  <LuArrowUpDown />
                </div>
                <div className="c-phone">
                  <span>Phone Number</span>
                  <LuArrowUpDown />
                </div>
                <div className="c-district">
                  <span>District/Sector</span>
                  <LuArrowUpDown />
                </div>
                <div className="c-courses">
                  <span>Course(s)</span>
                  <LuArrowUpDown />
                </div>
                <div className="c-progress">
                  <span>Progress</span>
                  <LuArrowUpDown />
                </div>
                <div className="c-action"></div>
              </div>

              {paginatedStudents.map((student, index) => (
                <div className="tr td" key={index}>
                  <div className="c-name">
                    <span>{student.fullName}</span>
                  </div>
                  <div className="c-phone">
                    <span>{student.phoneNumber}</span>
                  </div>
                  <div className="c-district">
                    <span>
                      {student.district}/{student.sector}
                    </span>
                  </div>
                  <div className="c-courses">
                    <span>{student.courses.join(", ")}</span>
                  </div>
                  <div className="c-progress">
                    <span>{student.progress}</span>
                  </div>
                  <div className="c-action">
                    <div className="dots-wrapper">
                      <span
                        className="action"
                        onClick={() =>
                          setOpenMenuIndex(
                            openMenuIndex === index ? null : index
                          )
                        }
                      >
                        <LuEllipsis />
                      </span>
                      {openMenuIndex === index && (
                        <div className="menu">
                          <div onClick={() => alert("View")}>View</div>
                          <div onClick={() => alert("Edit")}>Edit</div>
                          <div onClick={() => alert("Delete")}>Delete</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {filteredStudents.length > studentsPerPage && (
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
  );
};

export default TrainerStudentsList;
