import { LuArrowLeft, LuChevronDown, LuStar } from "react-icons/lu";
import { assets } from "../mock/asset";

import "./../style/homepage.scss";
import { courses } from "../mock/course";
import CourseCardComponent from "../components/CourseCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tr } from "zod/v4/locales";

const CoursesPage = () => {
  const [isCertified, setIsCertified] = useState(false);
  const [hasHighReviews, setHasHighReviews] = useState(false);

  const COURSES_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const filteredCourses = courses.filter((c) => {
    if (c.progress >= 100) return false;

    if (selectedCategories.length && !selectedCategories.includes(c.category)) {
      return false;
    }

    if (isCertified && !c.certificate) {
      return false;
    }

    if (hasHighReviews) {
      const ratings = c.reviews?.map((r) => r.rating) || [];
      const avgRating =
        ratings.length > 0
          ? ratings.reduce((a, b) => a + b, 0) / ratings.length
          : 0;

      if (avgRating < 4) return false;
    }

    return true;
  });

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const uniqueCategories = [
    ...new Set(filteredCourses.map((c) => c.category).filter(Boolean)),
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const visibleCourses = selectedCategories.length
    ? filteredCourses.filter((course) =>
        selectedCategories.includes(course.category)
      )
    : filteredCourses;

  const totalCourses = filteredCourses.length;
  const totalPages = Math.ceil(totalCourses / COURSES_PER_PAGE);

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  return (
    <>
      <div className="homepage-course-page">
        <div className="hero">
          <div className="bg">
            <img src={assets.bg.abtHero} />
          </div>

          <div className="container">
            <div className="content">
              <ul>
                <li className="back" onClick={handleBack}>
                  <span className="icon">
                    <LuArrowLeft />
                  </span>
                  <span>Go Back</span>
                </li>
                <li className="active">
                  <span>/</span>
                  <span>Courses</span>
                </li>
              </ul>

              <p>Unlock your potential with our expertly designed courses.</p>
            </div>
          </div>
        </div>

        <div className="course-section">
          <div className="container">
            <div className="content">
              <div className="filter-bar">
                <div className="filter-by">
                  <h3>Categories</h3>
                  <ul>
                    {uniqueCategories.map((cat, i) => (
                      <li key={i}>
                        <span className="input">
                          <input
                            type="checkbox"
                            id={`cat-${i}`}
                            checked={selectedCategories.includes(cat)}
                            onChange={() => handleCategoryChange(cat)}
                          />
                        </span>
                        <label htmlFor={`cat-${i}`} className="txt">
                          {cat}
                        </label>
                      </li>
                    ))}
                  </ul>

                  <h3>Others</h3>
                  <ul>
                    <li>
                      <span>
                        <input
                          type="checkbox"
                          id="certified"
                          checked={isCertified}
                          onChange={() => setIsCertified((prev) => !prev)}
                        />
                      </span>
                      <label htmlFor="certified" className="txt">
                        Certified
                      </label>
                    </li>
                    <li>
                      <span>
                        <input
                          type="checkbox"
                          id="high-reviews"
                          checked={hasHighReviews}
                          onChange={() => setHasHighReviews((prev) => !prev)}
                        />
                      </span>
                      <label htmlFor="high-reviews" className="txt">
                        4+ Reviews
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="filter-cta">
                  <img src={assets.adCourse} alt="course" />
                </div>
              </div>
              <div className="main-course-list">
                <div className="filter-course-bar">
                  <div>
                    <p>
                      Showing <span>{visibleCourses.length}</span> Courses of{" "}
                      <span>{filteredCourses.length}</span>
                    </p>
                  </div>
                  <div className="sort">
                    <span className="p">Sort by:</span>
                    <span className="sort-by">
                      <span>a-z</span>
                      <span>
                        <LuChevronDown />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="main-course-list">
                  <div className="courses-list">
                    {paginatedCourses.length > 0 ? (
                      paginatedCourses.map((course, index) => (
                        <CourseCardComponent key={index} course={course} />
                      ))
                    ) : (
                      <div className="no-course">
                        <p>No courses match the selected category</p>
                      </div>
                    )}
                  </div>

                  <div className="paginate">
                    {totalPages > 1 && (
                      <ul className="pagination">
                        {Array.from({ length: totalPages }).map((_, i) => (
                          <li key={i}>
                            <button
                              className={currentPage === i + 1 ? "active" : ""}
                              onClick={() => setCurrentPage(i + 1)}
                            ></button>
                          </li>
                        ))}
                      </ul>
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

export default CoursesPage;
