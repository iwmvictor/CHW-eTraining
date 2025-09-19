import { courses } from "../mock/course";
import { useNavigate, useParams } from "react-router-dom";
import { slugify } from "../mock/functions";
import NotFound from "../pages/NotFound";
import {
  LuArrowLeft,
  LuLanguages,
  LuShare2,
  LuShieldCheck,
  LuStar,
  LuStarHalf,
  LuTableOfContents,
  LuThumbsDown,
  LuThumbsUp,
  LuTimer,
  LuUsersRound,
  LuStar as LuStarEmpty,
  LuList,
  LuChevronDown,
  LuChevronUp,
  LuChevronRight,
} from "react-icons/lu";
import { assets, userProfiles } from "../mock/asset";
import { useState } from "react";
import ChatDiscussionComponent from "../components/ChatDiscussion";
import { SquareStop } from "lucide-react";

const StudentCoursePage = () => {
  const { path } = useParams();
  const navigate = useNavigate();
  const [chapterFolded, setChapterFolded] = useState({});
  const [selectedTab, setSelectedTab] = useState("info");
  const slug = path;

  const handleBack = () => {
    navigate(-1);
  };

  const toggleChapterFolding = (index) => {
    setChapterFolded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLearnNow = () => {
    navigate(`/trainee/course/${slug}/learning`);
  };

  const course = courses.find((c) => slugify(c.title) === slug);

  if (!course) {
    return (
      <>
        <NotFound
          title="Course not found"
          description="We couldn't find the course you're looking for."
          linkText="Back to Courses"
          linkTo="/trainee"
        />
      </>
    );
  }

  const allReviews = course.reviews || [];
  const averageRating = allReviews.length
    ? allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length
    : 0;

  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  return (
    <>
      <div className="dashboard">
        <div className="student-single-course">
          <div className="container">
            <div className="content">
              <div className="main">
                <div onClick={handleBack} className="back">
                  <span className="icon">
                    <LuArrowLeft />
                  </span>
                  <span>Go Back</span>
                </div>

                <div className="course-info">
                  <div className="item">
                    <span className="stars">
                      {[...Array(fullStars)].map((_, i) => (
                        <LuStar
                          key={`full-${i}`}
                          stroke="none"
                          fill="#f59e0b"
                        />
                      ))}
                      {hasHalfStar && (
                        <LuStarHalf stroke="none" fill="#f59e0b" />
                      )}
                      {[...Array(emptyStars)].map((_, i) => (
                        <LuStarEmpty key={`empty-${i}`} stroke="#d1d5db" />
                      ))}
                    </span>
                    <h3 className="rev">
                      {averageRating} ({course.reviews.length} Reviews)
                    </h3>
                  </div>
                  <div className="item">
                    <p>Trainer:</p>
                    <h3>{course.instructor}</h3>
                  </div>
                  <div className="item">
                    <p>Category:</p>
                    <h3>{course.category || "Diseases"}</h3>
                  </div>
                  <div className="item">
                    <p>Enrolled</p>
                    <h3>
                      {course.enrollments}+{" "}
                      {course.enrollments > 1 ? "Students" : "Student"}
                    </h3>
                  </div>
                </div>
                <div className="course-thumbnail">
                  <img
                    src={course.thumbnail || assets.coursethumbnail}
                    alt=""
                  />
                </div>

                <div className="course-details">
                  <ul className="tabs">
                    <li
                      onClick={() => setSelectedTab("info")}
                      className={selectedTab === "info" ? "active" : ""}
                    >
                      <span>Course info</span>
                    </li>
                    <li
                      onClick={() => setSelectedTab("discussion")}
                      className={selectedTab === "discussion" ? "active" : ""}
                    >
                      <span>Discussion</span>
                    </li>
                    <li
                      onClick={() => setSelectedTab("reviews")}
                      className={selectedTab === "reviews" ? "active" : ""}
                    >
                      <span>Reviews</span>
                    </li>
                  </ul>
                  <div className="tab-contents">
                    {selectedTab === "info" && (
                      <>
                        <div className="about">
                          <h2>About Course</h2>
                          <div
                            className="descr"
                            dangerouslySetInnerHTML={{
                              __html: course.description,
                            }}
                          ></div>

                          <h2>Course Content</h2>
                          <div className="contents-list">
                            {course.content.map((item, i) => (
                              <div className="cont" key={i}>
                                <div
                                  className="lesson-chap"
                                  onClick={() => toggleChapterFolding(i)}
                                  style={{ cursor: "pointer" }}
                                >
                                  <div>
                                    <h4>{item.title}</h4>
                                  </div>
                                  <div>
                                    <span className="icon">
                                      {!chapterFolded[i] ? (
                                        <LuChevronRight />
                                      ) : (
                                        <LuChevronUp />
                                      )}
                                    </span>
                                  </div>
                                </div>
                                {chapterFolded[i] && (
                                  <ul>
                                    {item.lessons.map((lesson, index) => (
                                      <li key={index}>
                                        <span className="list">
                                          <span className="svg">
                                            <SquareStop />
                                          </span>
                                          <span> {lesson.title}</span>
                                        </span>
                                        <span className="duration">
                                          {lesson.duration}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {selectedTab === "discussion" && (
                      <>
                        <div className="discussed">
                          <ChatDiscussionComponent />
                          <div className="user-bubble">
                            <div className="image">
                              <img loading="lazy" src="" alt="" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {selectedTab === "reviews" && (
                      <>
                        <div className="review-summary">
                          <div className="review-card">
                            <h1>{averageRating.toFixed(1)}</h1>
                            <div className="stars">
                              {[...Array(fullStars)].map((_, i) => (
                                <LuStar
                                  key={`full-${i}`}
                                  stroke="none"
                                  fill="#f59e0b"
                                />
                              ))}
                              {hasHalfStar && (
                                <LuStarHalf stroke="none" fill="#f59e0b" />
                              )}
                              {[...Array(emptyStars)].map((_, i) => (
                                <LuStarEmpty
                                  key={`empty-${i}`}
                                  stroke="#d1d5db"
                                />
                              ))}
                            </div>
                            <p>Course Rating</p>
                          </div>
                          <div className="review-levels">
                            <div className="rev">
                              <div className="stars">
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                              </div>
                              <div className="bar">
                                <div
                                  className="lvl"
                                  style={{
                                    width: "30%",
                                  }}
                                ></div>
                              </div>
                              <div className="percentage">
                                <p>33%</p>
                              </div>
                            </div>
                            <div className="rev">
                              <div className="stars">
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59f0b39" stroke="none" />
                                </span>
                              </div>
                              <div className="bar">
                                <div className="lvl"></div>
                              </div>
                              <div className="percentage">
                                <p>33%</p>
                              </div>
                            </div>
                            <div className="rev">
                              <div className="stars">
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59f0b39" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59f0b39" stroke="none" />
                                </span>
                              </div>
                              <div className="bar">
                                <div className="lvl"></div>
                              </div>
                              <div className="percentage">
                                <p>33%</p>
                              </div>
                            </div>
                            <div className="rev">
                              <div className="stars">
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59f0b39" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59f0b39" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59f0b39" stroke="none" />
                                </span>
                              </div>
                              <div className="bar">
                                <div className="lvl"></div>
                              </div>
                              <div className="percentage">
                                <p>33%</p>
                              </div>
                            </div>
                            <div className="rev">
                              <div className="stars">
                                <span>
                                  <LuStar fill="#f59e0b" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59f0b39" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59f0b39" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59f0b39" stroke="none" />
                                </span>
                                <span>
                                  <LuStar fill="#f59f0b39" stroke="none" />
                                </span>
                              </div>
                              <div className="bar">
                                <div className="lvl"></div>
                              </div>
                              <div className="percentage">
                                <p>33%</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="featured-reviews">
                          <h2>Featured reviews</h2>

                          <div className="reviews-list">
                            {course.reviews.map((item, index) => (
                              <div className="review-item" key={index}>
                                <div className="image">
                                  <img
                                    src={item.image || userProfiles.user1}
                                    alt=""
                                  />
                                </div>
                                <div className="text">
                                  <h3>
                                    <span className="name">{item.name}</span>
                                    <span>
                                      ({item.rating}{" "}
                                      <LuStar stroke="none" fill="#ff9747" />)
                                    </span>
                                  </h3>
                                  <p>{item.message}</p>

                                  <div className="likes">
                                    <button className="active">
                                      <span>
                                        <LuThumbsUp />
                                      </span>
                                    </button>

                                    <button>
                                      <span>
                                        <LuThumbsDown />
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="leave-review">
                            <h2>Leave a review</h2>

                            <ul className="stars">
                              <li>
                                {" "}
                                <span>
                                  <LuStar />
                                </span>
                              </li>
                              <li>
                                {" "}
                                <span>
                                  <LuStar />
                                </span>
                              </li>
                              <li>
                                {" "}
                                <span>
                                  <LuStar />
                                </span>
                              </li>
                              <li>
                                {" "}
                                <span>
                                  <LuStar />
                                </span>
                              </li>
                              <li>
                                {" "}
                                <span>
                                  <LuStar />
                                </span>
                              </li>
                            </ul>
                            <textarea
                              placeholder="Write your review.."
                              id=""
                            ></textarea>
                            <button className="send">
                              <span>Send review</span>
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="enroll-card">
                <div className="card-top">
                  <h3>Course progress</h3>
                  <div className="progress">
                    <p>{course.progress}% Completed</p>
                    <div className="bar">
                      <div
                        className="perc"
                        style={{
                          width: `${course.progress}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="buttons">
                    <button onClick={handleLearnNow} className="learn">
                      <span>
                        {course.progress > 0
                          ? "Continue Learning"
                          : "Enroll Now"}
                      </span>
                    </button>

                    <button className="share">
                      <span>
                        <LuShare2 />
                      </span>
                    </button>
                  </div>

                  {course.progress > 0 && (
                    <p className="recent">
                      Recently opened on {course.lastOpened}
                    </p>
                  )}
                </div>
                <div className="card-descr">
                  <h4>Course info</h4>

                  <ul>
                    <li>
                      <span className="name">
                        <span>
                          <LuTimer />
                        </span>
                        <span>Duration</span>
                      </span>
                      <span className="value">{course.duration}</span>
                    </li>
                    <li>
                      <span className="name">
                        <span>
                          <LuUsersRound />
                        </span>
                        <span>Enrollments</span>
                      </span>
                      <span className="value">
                        {course.enrollments} Students
                      </span>
                    </li>
                    <li>
                      <span className="name">
                        <span>
                          <LuLanguages />
                        </span>
                        <span>Languages</span>
                      </span>
                      <span className="value">
                        {course.language.map((item, index) => (
                          <span key={index}>{item}</span>
                        ))}
                      </span>
                    </li>
                    <li>
                      <span className="name">
                        <span>
                          <LuTableOfContents />
                        </span>
                        <span>Chapters</span>
                      </span>
                      <span className="value">{course.chapters}</span>
                    </li>
                    <li>
                      <span className="name">
                        <span>
                          <LuShieldCheck />
                        </span>
                        <span>Certifcate</span>
                      </span>
                      <span className="value">
                        {course.certificate ? "Yes" : "No"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCoursePage;
