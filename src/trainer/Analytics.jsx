import { ChartBar } from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

import {
  LuBookDashed,
  LuCalendarRange,
  LuLibraryBig,
  LuUsersRound,
} from "react-icons/lu";
import { useState } from "react";

const cards = [
  {
    title: "total courses",
    icon: LuLibraryBig,
    num: "03",
  },
  {
    title: "total students",
    icon: LuBookDashed,
    num: "03",
  },
  {
    title: "total trainers",
    icon: LuUsersRound,
    num: "03",
  },
];

const adminDataInfo = {
  users: {
    label: "Users",
    trainee: [80, 90, 95, 105, 110, 125, 130, 145, 150],
    trainer: [30, 35, 40, 45, 48, 50, 53, 58, 60],
  },
  courses: {
    label: "Courses",
    created: [5, 6, 7, 8, 9, 10, 11, 12, 14],
  },
  courseCompletion: {
    label: "Course Completion",
    completed: [60, 62, 68, 70, 75, 80, 82, 85, 90],
    incomplete: [20, 18, 15, 12, 10, 8, 7, 5, 4],
  },
  sessionDuration: {
    label: "Average Session Duration (min)",
    trainee: [10, 12, 14, 15, 15, 16, 17, 18, 18],
    trainer: [20, 21, 22, 23, 22, 22, 23, 23, 24],
  },
  discussions: {
    label: "Discussions",
    trainee: [5, 6, 7, 8, 10, 12, 14, 16, 18],
    trainer: [2, 3, 3, 4, 5, 6, 6, 7, 8],
  },
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const TrainerAnalyticsPage = () => {
  const { trainee, trainer } = adminDataInfo.users;
  const [activeTab, setActiveTab] = useState("users");

  const totalTrainee = trainee.reduce((sum, val) => sum + val, 0);
  const totalTrainer = trainer.reduce((sum, val) => sum + val, 0);

  const totalUsers = totalTrainee + totalTrainer;

  const formatChartData = (tabKey) => {
    const { trainee, trainer } = adminDataInfo[tabKey];
    return months.map((month, index) => ({
      month,
      trainee: trainee[index] || 0,
      trainer: trainer[index] || 0,
    }));
  };

  const chartData = formatChartData(activeTab);

  return (
    <>
      <div className="dashboard">
        <div className="trainer-analytics">
          <div className="container">
            <div className="card-list">
              {cards.map((card, index) => (
                <div className="card" key={index}>
                  <p>{card.title}</p>
                  <div className="flex">
                    <span className="icon">
                      <card.icon />
                    </span>
                    <span>{card.num}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="content">
              <div className="titles">
                <ul>
                  <li>
                    <span>Today</span>
                  </li>
                  <li>
                    <span>This Week</span>
                  </li>
                  <li>
                    <span>This Month</span>
                  </li>
                </ul>
                <div className="input">
                  <input
                    type="text"
                    placeholder="MmmM d. yyyy — MmmM d. yyyy"
                  />
                  <span className="icon">
                    <LuCalendarRange />
                  </span>
                </div>
              </div>
              <div className="chart-cont">
                <div className="chart-group">
                  <div
                    onClick={() => setActiveTab("users")}
                    className={
                      activeTab === "users " ? "active group" : "group"
                    }
                  >
                    <p>Total active users</p>
                    <div className="flex">
                      <h2>{totalUsers}</h2>
                      <div className="trend">
                        <TrendLine type={userTrend} />
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => setActiveTab("courses")}
                    className={
                      activeTab === "courses" ? "active group" : "group"
                    }
                  >
                    <p>Total courses created</p>
                    <div className="flex">
                      <h2>
                        {adminDataInfo.courses.created.reduce(
                          (sum, val) => sum + val,
                          0
                        )}
                      </h2>
                      <div className="trend">
                        <TrendLine type={courseTrend} />
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => setActiveTab("completion")}
                    className={
                      activeTab === "completion" ? "active group" : "group"
                    }
                  >
                    <p>Course completion</p>
                    <div className="flex">
                      <h2>
                        {adminDataInfo.courseCompletion.completed.reduce(
                          (sum, val) => sum + val,
                          0
                        )}
                      </h2>
                      <div className="trend">
                        <TrendLine type={completionTrend} />
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => setActiveTab("session")}
                    className={
                      activeTab === "session" ? "active group" : "group"
                    }
                  >
                    <p>Avg. session duration</p>
                    <div className="flex">
                      <h2>
                        {adminDataInfo.sessionDuration.trainee.reduce(
                          (sum, val) => sum + val,
                          0
                        )}
                      </h2>
                      <div className="trend">
                        <TrendLine type={sessionTrend} />
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => setActiveTab("discussions")}
                    className={
                      activeTab === "discussions" ? "active group" : "group"
                    }
                  >
                    <p>Number of discussions</p>
                    <div className="flex">
                      <h2>
                        {monthlyTotalDiscussion.reduce(
                          (sum, val) => sum + val,
                          0
                        )}
                      </h2>
                      <div className="trend">
                        <TrendLine type={discussionTrend} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chart-preview">
                  <p>
                    <span>{adminDataInfo[activeTab].label}' chart</span>
                    <span> • </span>
                    <span className="dates">May 2025 - July 2025</span>
                  </p>

                  <ResponsiveContainer width="100%" height={360}>
                    <BarChart
                      data={chartData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Trainee" fill="#073e92" />
                      <Bar dataKey="Trainer" fill="#5A9BFF" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="other-charts">
              <div className="pie-chart">
                <h2>Active users</h2>
                <ResponsiveContainer width="100%" height={360}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="div">
                <div className="feedback">
                  <h2>Users' feedback</h2>
                </div>

                <div className="system">
                  <h2>System users</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const monthlyTotalUsers = adminDataInfo.users.trainee.map(
  (val, idx) => val + adminDataInfo.users.trainer[idx]
);

const monthlyTotalDiscussion = adminDataInfo.discussions.trainee.map(
  (val, idx) => val + adminDataInfo.discussions.trainer[idx]
);

const TrendLine = ({ type }) => {
  return (
    <svg
      width="84"
      height="19"
      viewBox="0 0 84 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          type === "increase"
            ? "M1 17.5L25 10.5L36 14L57.5 5.5L63.5 10.5L83 1"
            : "M1 1L25 8L36 4.5L57.5 13L63.5 8L83 17.5"
        }
        stroke={type === "increase" ? "#073E92" : "#FF3B3B"}
        strokeWidth="2"
      />
    </svg>
  );
};

const getTrendType = (arr) => {
  const last = arr[arr.length - 1];
  const prev = arr[arr.length - 2];

  return last >= prev ? "increase" : "decrease";
};

const userTrend = getTrendType(monthlyTotalUsers);
const discussionTrend = getTrendType(monthlyTotalDiscussion);
const courseTrend = getTrendType(adminDataInfo.courses.created);
const sessionTrend = getTrendType(adminDataInfo.sessionDuration.trainee);
const completionTrend = getTrendType(adminDataInfo.courseCompletion.completed);

export default TrainerAnalyticsPage;
