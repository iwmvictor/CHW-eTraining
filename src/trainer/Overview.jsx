import React from "react";
import {
  LuBookDashed,
  LuHistory,
  LuLaptopMinimal,
  LuLibraryBig,
  LuMonitor,
  LuUserRoundPlus,
  LuUsersRound,
} from "react-icons/lu";

const myCourses = [
  {
    name: "Malaria Treatment & First Aid",
    enrolled: 12,
    rating: 4,
  },
  {
    name: "Child Malnutrition Basics",
    enrolled: 33,
    rating: 5,
  },
  {
    name: "Emergency Response for Severe Malaria",
    enrolled: 2,
    rating: 3,
  },
  {
    name: "Community Hygiene & Sanitation Practices",
    enrolled: 33,
    rating: 4,
  },
];

const stdPerformance = [
  "10 Students completed their courses",
  "2 Inactive students found this week",
  "Average of 10 hours / student spent this month",
  "12 Students submitted their assignments",
  "New review on Malaria Treatment Course",
  "New review on Malaria Treatment Course",
];

const TrainerOverview = () => {
  return (
    <>
      <div className="dashboard">
        <div className="trainer-overview">
          <div className="container">
            <div className="content">
              <div className="cards">
                <div className="sec-title">
                  <h2>Good Morning, Mentor!</h2>
                  <p>
                    Stay informed with live updates on your courses' activity.
                  </p>
                </div>

                <div className="cards-list">
                  <div className="card">
                    <p>total courses</p>
                    <div className="div">
                      <div className="icon">
                        <span>
                          <LuLibraryBig />
                        </span>
                      </div>
                      <div className="count">
                        <span>03</span>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <p>unpublished</p>
                    <div className="div">
                      <div className="icon">
                        <span>
                          <LuBookDashed />
                        </span>
                      </div>
                      <div className="count">
                        <span>01</span>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <p>total students</p>
                    <div className="div">
                      <div className="icon">
                        <span>
                          <LuUsersRound />
                        </span>
                      </div>
                      <div className="count">
                        <span>22</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recent">
                <div className="sec-title">
                  <h3>Recent Activities</h3>
                </div>
                <ul>
                  <li>
                    <span className="icon">
                      <LuLaptopMinimal />
                    </span>
                    <span>Your course has been published</span>
                  </li>
                  <li>
                    <span className="icon">
                      <LuUserRoundPlus />
                    </span>
                    <span>New students have enrolled in your courses</span>
                  </li>
                  <li>
                    <span className="icon">
                      <LuMonitor />
                    </span>
                    <span>You've 2 unpublished courses</span>
                  </li>
                  <li>
                    <span className="icon">
                      <LuHistory />
                    </span>
                    <span>New review on Malaria Treatment.. course</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="content">
              <div className="my-courses">
                <div className="sec-title">
                  <h3>My Courses</h3>
                </div>
                <div className="tb">
                  <div className="tr th">
                    <div className="c-name">
                      <span>Course Name</span>
                    </div>
                    <div className="c-enrolled">
                      <span>Enrolled</span>
                    </div>
                    <div className="c-rating">
                      <span>Rating</span>
                    </div>
                  </div>
                  {myCourses.map((item, index) => (
                    <div className="tr" key={index}>
                      <div className="c-name">
                        <span>{item.name}</span>
                      </div>
                      <div className="c-enrolled">
                        <span>{item.enrolled}</span>
                      </div>
                      <div className="c-rating">
                        <div className="stars">
                          {[...Array(item.rating)].map((_, i) => (
                            <span className="star" key={i}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="performance">
                <div className="sec-title">
                  <h3>Student Performance</h3>
                </div>
                <ul>
                  {stdPerformance.map((item, i) => (
                    <li key={i}>
                      <span className="icon">
                        <LuHistory />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerOverview;
