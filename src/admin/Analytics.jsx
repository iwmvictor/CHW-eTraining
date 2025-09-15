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
import { LuBell } from "react-icons/lu";

// Dummy Data
const dummyData = {
  headerStats: {
    totalCourses: 3,
    totalStudents: 3,
    totalTrainers: 3,
  },
  monthlyData: {
    trainees: [100, 70, 90, 85, 100, 90, 85, 95, 88, 92, 87, 91],
    trainers: [70, 40, 60, 55, 90, 60, 55, 65, 58, 62, 57, 61],
  },
  summaryMetrics: [
    { label: "Total active users", value: 34, trend: 12, icon: Users },
    { label: "Total courses created", value: 12, trend: -5, icon: BookOpen },
    { label: "Course completion", value: 34, trend: 8, icon: Target },
    { label: "Avg session duration", value: "15 min", trend: 3, icon: Clock },
    {
      label: "Number of discussions",
      value: 34,
      trend: 15,
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
    { category: "Premium", count: 320 },
    { category: "Professional", count: 280 },
    { category: "Standard", count: 245 },
    { category: "Basic", count: 185 },
    { category: "Trial", count: 142 },
    { category: "Guest", count: 67 },
    { category: "Inactive", count: 23 },
    { category: "Pending", count: 8 },
  ],
  recentActivities: [
    {
      user: "Sarah Johnson",
      action: "completed",
      course: "React Advanced",
      time: "2 hours ago",
    },
    {
      user: "Mike Chen",
      action: "enrolled in",
      course: "Data Science 101",
      time: "3 hours ago",
    },
    {
      user: "Emma Davis",
      action: "submitted assignment for",
      course: "UX Design",
      time: "5 hours ago",
    },
    {
      user: "Alex Kumar",
      action: "started",
      course: "Python Basics",
      time: "6 hours ago",
    },
  ],
  topCourses: [
    { name: "React Development", enrolled: 145, completion: 89 },
    { name: "Data Science Fundamentals", enrolled: 132, completion: 76 },
    { name: "UX/UI Design", enrolled: 118, completion: 82 },
    { name: "Python Programming", enrolled: 105, completion: 91 },
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
    }, 300);

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
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .dashboard-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          background: #f5f5f5;
          min-height: 100vh;
          padding: 20px;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          background: rgba(255, 255, 255, 0.95);
          padding: 20px 30px;
          border-radius:8px;
          backdrop-filter: blur(10px);
        //   box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .dashboard-title {
          font-size: 28px;
          font-weight: 700;
          background: #3b82f6;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .search-bar {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-input {
          padding: 10px 40px 10px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          width: 300px;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #667eea;
        //   box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .search-icon {
          position: absolute;
          right: 15px;
          color: #999;
        }

        .header-actions {
          display: flex;
          gap: 15px;
        }

        .header-btn {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: #3b82f6;
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        //   box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
        }

        .btn-secondary {
          background: white;
          color: #333;
          border: 2px solid #e0e0e0;
        }

        .btn-secondary:hover {
          background: #f5f5f5;
        }

        .notificationbtn{
        position: relative;
        display: flex;
        align-items: center;
        justify-content:center;
        }

        .notification-btn {
          position: relative;
        //   width: 45px;
          height: 45px;
          fontsize: 1rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;

          
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #ff4757;
          color: white;
          border-radius:8px;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: bold;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 25px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        //   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .stat-card:hover {
          transform: translateY(-5px);
        //   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          color: #666;
          font-size: 14px;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-value {
          font-size: 36px;
          font-weight: 700;
          color: #333;
        }

        .filter-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 30px;
          background: rgba(255, 255, 255, 0.95);
          padding: 15px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .filter-tab {
          padding: 10px 20px;
          border: none;
          background: transparent;
          color: #666;
          font-weight: 600;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .filter-tab.active {
          background: #3b82f6;
          color: white;
        }

        .date-picker {
          margin-left: auto;
          padding: 10px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          background: white;
          color: #666;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .metric-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 20px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        //   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-3px);
        //   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .metric-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .metric-label {
          color: #666;
          font-size: 13px;
        }

        .metric-icon {
          color: #999;
        }

        .metric-body {
          display: flex;
          align-items: baseline;
          gap: 15px;
          margin-bottom: 15px;
        }

        .metric-value {
          font-size: 28px;
          font-weight: 700;
          color: #333;
        }

        .metric-trend {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius:8px;
          font-size: 12px;
          font-weight: 600;
        }

        .metric-trend.positive {
          background: #10b98120;
          color: #10b981;
        }

        .metric-trend.negative {
          background: #ef444420;
          color: #ef4444;
        }

        .metric-sparkline {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 40px;
        }

        .sparkline-bar {
          flex: 1;
          background: #3b82f6;
          border-radius:8px;
          transition: all 0.3s ease;
        }

        .sparkline-bar:hover {
          background: #3b82f6;
        }

        .charts-row {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .chart-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 25px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        //   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .chart-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        .chart-subtitle {
          color: #666;
          font-size: 14px;
        }

        .bar-chart {
          position: relative;
          height: 250px;
        }

        .bars-container {
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          gap: 20px;
        }

        .bar-group {
          display: flex;
          gap: 4px;
          align-items: flex-end;
        }

        .bar {
          width: 20px;
          border-radius: 4px 4px8px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .bar:hover {
          opacity: 0.8;
        }

        .bar.trainees {
          background:#3b82f6;
        }

        .bar.trainers {
          background:  #60a5fa;
        }

        .x-axis {
          display: flex;
          justify-content: space-around;
          padding: 10px 0;
          margin-top: 10px;
        }

        .x-label {
          font-size: 12px;
          color: #666;
        }

        .chart-legend {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 20px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius:8px;
        }

        .legend-label {
          font-size: 14px;
          color: #666;
        }

        .pie-chart-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pie-chart {
          width: 200px;
          height: 200px;
          position: relative;
          margin: 20px 0;
        }

        .pie-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .pie-slice {
          fill: transparent;
          stroke-width: 40;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .pie-center-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .bottom-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 20px;
        }

        .line-chart-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 25px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        //   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .line-chart {
          height: 200px;
          position: relative;
          margin-top: 20px;
        }

        .line-chart-svg {
          width: 100%;
          height: 100%;
        }

        .horizontal-bars {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .h-bar-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .h-bar-label {
          min-width: 80px;
          font-size: 13px;
          color: #666;
          text-align: right;
        }

        .h-bar-container {
          flex: 1;
          height: 28px;
          background: #f0f0f0;
          border-radius:8px;
          overflow: hidden;
          position: relative;
        }

        .h-bar-fill {
          height: 100%;
          background:  #3b82f6;
          border-radius:8px;
          transition: width 1s ease;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 10px;
        }

        .h-bar-value {
          color: white;
          font-size: 12px;
          font-weight: 600;
        }

        .activities-section {
          background: rgba(255, 255, 255, 0.95);
          padding: 25px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        //   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .activity-item:hover {
          background: #f0f0f0;
          transform: translateX(5px);
        }

        .activity-avatar {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background:  #667eea;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 14px;
        }

        .activity-content {
          flex: 1;
        }

        .activity-text {
          font-size: 13px;
          color: #333;
        }

        .activity-text strong {
          font-weight: 600;
          color: #667eea;
        }

        .activity-time {
          font-size: 11px;
          color: #999;
          margin-top: 2px;
        }

        .top-courses-section {
          background: rgba(255, 255, 255, 0.95);
          padding: 25px;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        //   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .course-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .course-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #f8f9fa;
          border-radius:8px;
          transition: all 0.3s ease;
        }

        .course-item:hover {
          background: #f0f0f0;
        }

        .course-info {
          flex: 1;
        }

        .course-name {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin-bottom: 4px;
        }

        .course-stats {
          display: flex;
          gap: 15px;
          font-size: 12px;
          color: #666;
        }

        .course-completion {
          width: 50px;
          height: 50px;
          position: relative;
        }

        .completion-circle {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .completion-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 12px;
          font-weight: 600;
          color: #333;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-card,
        .metric-card,
        .chart-container {
          animation: slideIn 1s ease-in-out forward;
        }

        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            gap: 15px;
          }

          .header-left {
            flex-direction: column;
            width: 100%;
          }

          .search-input {
            width: 100%;
          }

          .charts-row {
            grid-template-columns: 1fr;
          }

          .bottom-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

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
              <button
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
              </button>
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
                      background: "#3b82f6",
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
