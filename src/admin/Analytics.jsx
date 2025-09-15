import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  BookOpen,
  Clock,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Filter,
  Download,
  Bell,
  Search,
  ChevronDown,
  Activity,
  Award,
  Target,
  BarChart3,
} from "lucide-react";

import "./../style/admin.scss";

// Dummy Data
const dummyData = {
  headerStats: {
    totalCourses: 6,
    totalStudents: 128,
    totalTrainers: 14,
  },
  monthlyData: {
    trainees: [28, 35, 30, 42, 45, 50, 52, 48, 46, 54, 50, 58],
    trainers: [4, 5, 5, 6, 6, 7, 7, 7, 6, 6, 8, 8],
  },
  summaryMetrics: [
    { label: "Total active CHWs", value: 128, trend: 14, icon: Users },
    { label: "Courses offered", value: 6, trend: 2, icon: BookOpen },
    { label: "Avg. completion rate", value: "87%", trend: 5, icon: Target },
    { label: "Avg. session time", value: "22 min", trend: 4, icon: Clock },
    {
      label: "Peer discussions",
      value: 76,
      trend: 21,
      icon: MessageSquare,
    },
  ],
  userFeedback: [
    { month: "Jan", score1: 4.2, score2: 3.8, score3: 4.5 },
    { month: "Feb", score1: 4.3, score2: 3.9, score3: 4.4 },
    { month: "Mar", score1: 4.5, score2: 4.0, score3: 4.3 },
    { month: "Apr", score1: 4.4, score2: 4.2, score3: 4.1 },
    { month: "May", score1: 4.6, score2: 4.1, score3: 4.2 },
    { month: "Jun", score1: 4.7, score2: 4.3, score3: 4.0 },
  ],
  systemUsers: [
    { category: "Certified CHWs", count: 64 },
    { category: "In Training", count: 38 },
    { category: "Supervisors", count: 14 },
    { category: "Medical Professionals", count: 6 },
    { category: "Volunteers", count: 4 },
    { category: "Observers", count: 2 },
  ],
  recentActivities: [
    {
      user: "Amina Yusuf",
      action: "completed",
      course: "Maternal Health Basics",
      time: "1 hour ago",
    },
    {
      user: "David Okoro",
      action: "enrolled in",
      course: "Nutrition for CHWs",
      time: "2 hours ago",
    },
    {
      user: "Grace Mbatha",
      action: "submitted assignment for",
      course: "Infectious Disease Control",
      time: "3 hours ago",
    },
    {
      user: "Peter Karanja",
      action: "started",
      course: "Community Outreach Techniques",
      time: "4 hours ago",
    },
  ],
  topCourses: [
    { name: "Maternal Health Basics", enrolled: 42, completion: 91 },
    { name: "Nutrition for CHWs", enrolled: 38, completion: 86 },
    { name: "Infectious Disease Control", enrolled: 35, completion: 89 },
    { name: "Community Outreach Techniques", enrolled: 32, completion: 82 },
    { name: "Mental Health Support", enrolled: 28, completion: 78 },
    { name: "Emergency Response Training", enrolled: 25, completion: 85 },
  ],
};

const AdminAnalytics = () => {
  const [timeFilter, setTimeFilter] = useState("Monthly");
  const [selectedDateRange, setSelectedDateRange] = useState(
    "May 2025 - July 2025"
  );
  const [animatedValues, setAnimatedValues] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [hoveredBar, setHoveredBar] = useState(null);

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

  // Animation effect for numbers
  useEffect(() => {
    const targets = {
      courses: dummyData.headerStats.totalCourses,
      students: dummyData.headerStats.totalStudents,
      trainers: dummyData.headerStats.totalTrainers,
    };

    const interval = setInterval(() => {
      setAnimatedValues((prev) => {
        const newValues = { ...prev };
        Object.keys(targets).forEach((key) => {
          if (!newValues[key]) newValues[key] = 0;
          if (newValues[key] < targets[key]) {
            newValues[key] = Math.min(newValues[key] + 1, targets[key]);
          }
        });
        return newValues;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="stat-card">
      <div className="stat-icon" style={{ background: `${color}20` }}>
        <Icon size={24} style={{ color }} />
      </div>
      <div className="stat-content">
        <p className="stat-label">{label}</p>
        <h2 className="stat-value">{value || "00"}</h2>
      </div>
    </div>
  );

  const MetricCard = ({ label, value, trend, icon: Icon }) => (
    <div className="metric-card">
      <div className="metric-header">
        <span className="metric-label">{label}</span>
        <Icon size={16} className="metric-icon" />
      </div>
      <div className="metric-body">
        <h3 className="metric-value">{value}</h3>
        <div className={`metric-trend ${trend > 0 ? "positive" : "negative"}`}>
          {trend > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{Math.abs(trend)}%</span>
        </div>
      </div>
      <div className="metric-sparkline">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="sparkline-bar"
            style={{ height: `${20 + Math.random() * 30}px` }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="content">
          <div className="dashboard-header">
            <div className="header-left">
              <div className="search-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search courses, users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={18} className="search-icon" />
              </div>
            </div>
            <div className="header-actions">
              <button className="header-btn btn-secondary">
                <Filter size={18} />
                Filters
              </button>
              <button className="header-btn btn-secondary">
                <Download size={18} />
                Export
              </button>
              {/* <button
                style={{ color: "black", fontSize: "1rem" }}
                className="header-btn btn-secondary notification-btn"
              >
                <Bell size={18} />
                {notifications > 0 && (
                  <span className="notification-badge">{notifications}</span>
                )}
              </button>
              <button className="header-btn btn-primary">
                <BookOpen size={18} />
                New Course
              </button> */}
            </div>
          </div>

          <div className="stats-row">
            <StatCard
              icon={BookOpen}
              label="Total Courses"
              value={animatedValues.courses?.toString().padStart(2, "0")}
              color="#667eea"
            />
            <StatCard
              icon={Users}
              label="Total Students"
              value={animatedValues.students?.toString().padStart(2, "0")}
              color="#764ba2"
            />
            <StatCard
              icon={Award}
              label="Total Trainers"
              value={animatedValues.trainers?.toString().padStart(2, "0")}
              color="#f59e0b"
            />
          </div>

          <div className="filter-tabs">
            {["Today", "Weekly", "Monthly", "Yearly"].map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${
                  timeFilter === filter ? "active" : ""
                }`}
                onClick={() => setTimeFilter(filter)}
              >
                {filter}
              </button>
            ))}
            <div className="date-picker">
              <Calendar size={16} />
              {selectedDateRange}
              <ChevronDown size={16} />
            </div>
          </div>

          <div className="metrics-grid">
            {dummyData.summaryMetrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          <div className="charts-row">
            <div className="chart-container">
              <div className="chart-header">
                <div>
                  <h3 className="chart-title">Users' Chart</h3>
                  <p className="chart-subtitle">May 2025 - July 2025</p>
                </div>
              </div>
              <div className="bar-chart">
                <div className="bars-container">
                  {months.map((month, index) => (
                    <div key={month} className="bar-group">
                      <div
                        className="bar trainees"
                        style={{
                          height: `${
                            (dummyData.monthlyData.trainees[index] / 120) * 100
                          }%`,
                        }}
                        onMouseEnter={() => setHoveredBar(`${month}-trainees`)}
                        onMouseLeave={() => setHoveredBar(null)}
                      />
                      <div
                        className="bar trainers"
                        style={{
                          height: `${
                            (dummyData.monthlyData.trainers[index] / 120) * 100
                          }%`,
                        }}
                        onMouseEnter={() => setHoveredBar(`${month}-trainers`)}
                        onMouseLeave={() => setHoveredBar(null)}
                      />
                    </div>
                  ))}
                </div>
                <div className="x-axis">
                  {months.map((month) => (
                    <span key={month} className="x-label">
                      {month}
                    </span>
                  ))}
                </div>
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <div
                    className="legend-color"
                    style={{
                      background: "#7ca1dcff",
                    }}
                  />
                  <span className="legend-label">Trainees</span>
                </div>
                <div className="legend-item">
                  <div
                    className="legend-color"
                    style={{
                      background: "#3b82f6",
                    }}
                  />
                  <span className="legend-label">Trainers</span>
                </div>
              </div>
            </div>

            <div className="chart-container">
              <div className="chart-header">
                <h3 className="chart-title">Active Users</h3>
              </div>
              <div className="pie-chart-container">
                <div className="pie-chart">
                  <svg className="pie-svg" viewBox="0 0 100 100">
                    <circle
                      className="pie-slice"
                      cx="50"
                      cy="50"
                      r="30"
                      stroke="#f0f0f0"
                      strokeDasharray="188.5 0"
                    />
                    <circle
                      className="pie-slice"
                      cx="50"
                      cy="50"
                      r="30"
                      stroke="#667eea"
                      strokeDasharray="125.6 62.9"
                      strokeLinecap="round"
                      strokeWidth="10"
                      fill="none"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="pie-center-text">
                    <h4 style={{ fontSize: "18px", color: "#333" }}>67%</h4>
                    <p style={{ fontSize: "12px", color: "#666" }}>
                      Active Users
                    </p>
                  </div>
                </div>
                <div className="chart-legend">
                  {dummyData.systemUsers.slice(0, 3).map((user, idx) => (
                    <div key={idx} className="legend-item">
                      <div
                        className="legend-color"
                        style={{
                          background: ["#667eea", "#764ba2", "#f59e0b"][
                            idx % 3
                          ],
                        }}
                      />
                      <span className="legend-label">{user.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-row">
            <div className="line-chart-container">
              <div className="chart-header">
                <h3 className="chart-title">User Feedback Trends</h3>
                <p className="chart-subtitle">Scores over months</p>
              </div>
              <div className="line-chart">
                <svg className="line-chart-svg" viewBox="0 0 300 100">
                  {dummyData.userFeedback.map((point, index) => {
                    const x =
                      (index / (dummyData.userFeedback.length - 1)) * 300;
                    const y = 100 - (point.score1 / 5) * 100;
                    return (
                      <circle key={index} cx={x} cy={y} r="3" fill="#667eea" />
                    );
                  })}
                  {/* Simple connecting line (score1) */}
                  <polyline
                    fill="none"
                    stroke="#667eea"
                    strokeWidth="2"
                    points={dummyData.userFeedback
                      .map((point, index) => {
                        const x =
                          (index / (dummyData.userFeedback.length - 1)) * 300;
                        const y = 100 - (point.score1 / 5) * 100;
                        return `${x},${y}`;
                      })
                      .join(" ")}
                  />
                </svg>
              </div>
            </div>
            <div className="line-chart-container">
              <div className="chart-header">
                <h3 className="chart-title">Course Completion</h3>
              </div>
              <div className="horizontal-bars">
                {dummyData.topCourses.map((course, idx) => (
                  <div className="h-bar-item" key={idx}>
                    <div className="h-bar-label">{course.name}</div>
                    <div className="h-bar-container">
                      <div
                        className="h-bar-fill"
                        style={{ width: `${course.completion}%` }}
                      >
                        <span className="h-bar-value">
                          {course.completion}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bottom-row">
            <div className="activities-section">
              <div className="chart-header">
                <h3 className="chart-title">Recent Activities</h3>
              </div>
              <div className="activity-list">
                {dummyData.recentActivities.map((activity, idx) => (
                  <div className="activity-item" key={idx}>
                    <div className="activity-avatar">{activity.user[0]}</div>
                    <div className="activity-content">
                      <div className="activity-text">
                        <strong>{activity.user}</strong> {activity.action}{" "}
                        <strong>{activity.course}</strong>
                      </div>
                      <div className="activity-time">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="top-courses-section">
              <div className="chart-header">
                <h3 className="chart-title">Top Courses</h3>
              </div>
              <div className="course-list">
                {dummyData.topCourses.map((course, idx) => {
                  const completion = course.completion;
                  const radius = 22;
                  const circumference = 2 * Math.PI * radius;
                  const offset =
                    circumference - (completion / 100) * circumference;

                  return (
                    <div className="course-item" key={idx}>
                      <div className="course-info">
                        <div className="course-name">{course.name}</div>
                        <div className="course-stats">
                          <span>{course.enrolled} enrolled</span>
                          <span>{completion}% completed</span>
                        </div>
                      </div>
                      <div className="course-completion">
                        <svg className="completion-circle" viewBox="0 0 50 50">
                          <circle
                            cx="25"
                            cy="25"
                            r={radius}
                            stroke="#f0f0f0"
                            strokeWidth="5"
                            fill="none"
                          />
                          <circle
                            cx="25"
                            cy="25"
                            r={radius}
                            stroke="#667eea"
                            strokeWidth="5"
                            fill="none"
                            strokeDasharray={`${circumference}`}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            style={{ transition: "stroke-dashoffset 0.5s" }}
                          />
                        </svg>
                        <div className="completion-text">{completion}%</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
