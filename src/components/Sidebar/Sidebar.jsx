import React from "react";
import { useEvents } from "../../contexts/EventContext";
import { useCalendar } from "../../contexts/CalendarContext";
import MiniCalendar from "../MiniCalendar/MiniCalendar";
import { today } from "../../utils/date";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  const { openEventForm } = useEvents();
  const { selectedDate } = useCalendar();

  const handleCreateEvent = () => {
    openEventForm("create", {
      date: selectedDate,
      startTime: 600,
      endTime: 960,
    });
  };

  return (
    <div className={`${styles.sidebar} desktop-only`}>
      <div className={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </svg>
        <span className={styles.title}>Scheduler/Planner</span>
      </div>

      <button
        className="button button--primary button--lg"
        onClick={handleCreateEvent}
      >
        Create event
      </button>

      <MiniCalendar />
    </div>
  );
}

export default Sidebar;
