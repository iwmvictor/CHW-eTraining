import { useState } from "react";
import {
  LuBookOpenText,
  LuGraduationCap,
  LuStar,
  LuStarHalf,
  LuTrophy,
  LuUsersRound,
} from "react-icons/lu";
import { courses } from "../mock/course";
import CourseCardComponent from "../components/CourseCard";
import { assets } from "../mock/asset";

const numbers = [
  {
    num: 23,
    icon: LuGraduationCap,
    title: "Total courses",
  },
  {
    num: 23,
    icon: LuBookOpenText,
    title: "Total courses",
  },

  {
    num: 23,
    icon: LuTrophy,
    title: "Total courses",
  },
];

const StudentOverview = () => {
  const [courseTab, setCourseTab] = useState("enrolled");
  const enrolledCourses = courses.filter((course) => course.progress !== 100);
  const completedCourses = courses.filter((course) => course.progress === 100);

  const allReviews = courses.flatMap((course) => course.reviews || []);
  const averageRating = allReviews.length
    ? allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length
    : 0;

  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <div>
      <div className="dashboard">
        <div className="student-overview">
          <div className="container">
            <div className="cards-list">
              {numbers.map((item, index) => (
                <div className="card" key={index}>
                  <div className="icon">
                    <span>
                      <item.icon />
                    </span>
                  </div>
                  <div className="text">
                    <h3>{item.num}</h3>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="content">
              <div className="sec-title">
                <h2>Courses</h2>
              </div>
              <ul className="tabs">
                <li onClick={() => setCourseTab("enrolled")}>
                  <span>Enrolled Courses</span>
                </li>
                <li onClick={() => setCourseTab("completed")}>
                  <span>Completed Courses</span>
                </li>
              </ul>
              <div className="tabs-content">
                {courseTab === "enrolled" && enrolledCourses && (
                  <>
                    {enrolledCourses.map((course, index) => (
                      <CourseCardComponent key={index} course={course} />
                    ))}
                  </>
                )}
                {courseTab === "completed" && completedCourses && (
                  <>
                    {completedCourses.map((course, i) => (
                      <CourseCardComponent key={i} course={course} />
                    ))}
                  </>
                )}
              </div>
            </div>

            <div className="other-courses">
              <div className="sec-title">
                <h2>Other Courses</h2>
              </div>
              <div className="other-courses-list">
                {courses.map((course, index) => (
                  <div className="small-course-card" key={index}>
                    <div className="image">
                      <img
                        src={course.thumbnail || assets.coursethumbnail}
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <div className="reviews">
                        <div className="reviews">
                          <span className="stars">
                            {[...Array(fullStars)].map((_, i) => (
                              <LuStar key={`full-${i}`} fill="#f59e0b" />
                            ))}
                            {hasHalfStar && <LuStarHalf fill="#f59e0b" />}
                            {[...Array(emptyStars)].map((_, i) => (
                              <LuStarEmpty
                                key={`empty-${i}`}
                                stroke="#d1d5db"
                              />
                            ))}
                          </span>
                          <span>({course.reviews.length} Reviews)</span>
                        </div>
                      </div>
                      <h3>{course.title}</h3>
                      <div className="small-details">
                        <div className="item">
                          <span className="icon">
                            <LuBookOpenText />
                          </span>
                          <span>{course.chapters} Lessons</span>
                        </div>
                        <div className="item">
                          <span className="icon">
                            <LuUsersRound />
                          </span>
                          <span>{course.enrollments} Students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentOverview;
