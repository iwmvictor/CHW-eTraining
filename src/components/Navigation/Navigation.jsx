import React from 'react'
import { useCalendar } from '../../contexts/CalendarContext'
import { useEvents } from '../../contexts/EventContext'
import { today, addDays, addMonths, subtractDays, subtractMonths } from '../../utils/date'
import styles from './Navigation.module.scss'

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric"
});

function Navigation() {
  const { selectedDate, selectedView, setDate, setView, deviceType } = useCalendar()
  const { openMobileSidebar } = useEvents()

  const handleTodayClick = () => {
    setDate(today())
  }

  const handlePreviousClick = () => {
    if (selectedView === 'day') {
      setDate(subtractDays(selectedDate, 1))
    } else if (selectedView === 'week') {
      setDate(subtractDays(selectedDate, 7))
    } else {
      setDate(subtractMonths(selectedDate, 1))
    }
  }

  const handleNextClick = () => {
    if (selectedView === 'day') {
      setDate(addDays(selectedDate, 1))
    } else if (selectedView === 'week') {
      setDate(addDays(selectedDate, 7))
    } else {
      setDate(addMonths(selectedDate, 1))
    }
  }

  const handleViewChange = (e) => {
    setView(e.target.value)
  }

  return (
    <div className={styles.nav}>
      <button 
        className="button button--icon button--secondary mobile-only" 
        onClick={openMobileSidebar}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="button__icon">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      <div className={styles.dateInfo}>
        <div className={styles.controls}>
          <button 
            className="button button--secondary desktop-only" 
            onClick={handleTodayClick}
          >
            Today
          </button>
          <button 
            className="button button--icon button--secondary mobile-only" 
            onClick={handleTodayClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="button__icon">
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
          </button>

          <div className={styles.arrows}>
            <button 
              className="button button--icon button--secondary" 
              onClick={handlePreviousClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="button__icon">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button 
              className="button button--icon button--secondary" 
              onClick={handleNextClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="button__icon">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <time className={styles.date}>
          {dateFormatter.format(selectedDate)}
        </time>
      </div>

      <div className="select desktop-only">
        <select 
          className="select__select" 
          value={selectedView} 
          onChange={handleViewChange}
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="select__icon">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  )
}

export default Navigation