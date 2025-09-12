import React, { useState, useEffect } from 'react'
import { useCalendar } from '../../contexts/CalendarContext'
import { generateMonthCalendarDays, today, isTheSameDay, addMonths, subtractMonths } from '../../utils/date'
import styles from './MiniCalendar.module.scss'

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: 'long',
  year: 'numeric'
});

function MiniCalendar() {
  const { selectedDate, setDate } = useCalendar()
  const [miniCalendarDate, setMiniCalendarDate] = useState(selectedDate)

  useEffect(() => {
    setMiniCalendarDate(selectedDate)
  }, [selectedDate])

  const handlePrevious = () => {
    setMiniCalendarDate(subtractMonths(miniCalendarDate, 1))
  }

  const handleNext = () => {
    setMiniCalendarDate(addMonths(miniCalendarDate, 1))
  }

  const handleDayClick = (day) => {
    setDate(day)
  }

  const calendarDays = generateMonthCalendarDays(miniCalendarDate)

  return (
    <div className={styles.miniCalendar}>
      <div className={styles.header}>
        <time className={styles.date}>
          {dateFormatter.format(miniCalendarDate)}
        </time>

        <div className={styles.controls}>
          <button 
            className="button button--icon button--secondary button--sm" 
            onClick={handlePrevious}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="button__icon">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button 
            className="button button--icon button--secondary button--sm" 
            onClick={handleNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="button__icon">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <ul className={styles.dayOfWeekList}>
          <li className={styles.dayOfWeek}>S</li>
          <li className={styles.dayOfWeek}>M</li>
          <li className={styles.dayOfWeek}>T</li>
          <li className={styles.dayOfWeek}>W</li>
          <li className={styles.dayOfWeek}>T</li>
          <li className={styles.dayOfWeek}>F</li>
          <li className={styles.dayOfWeek}>S</li>
        </ul>

        <ul className={styles.dayList}>
          {calendarDays.map((day, index) => {
            const isToday = isTheSameDay(today(), day)
            const isSelected = isTheSameDay(selectedDate, day)
            const isOtherMonth = miniCalendarDate.getMonth() !== day.getMonth()

            return (
              <li key={index} className={styles.dayListItem}>
                <button 
                  className={`button button--sm ${styles.day} ${isOtherMonth ? styles.dayOther : ''} ${isToday ? styles.dayHighlight : ''} ${isSelected ? 'button--primary' : 'button--secondary'}`}
                  onClick={() => handleDayClick(day)}
                >
                  {day.getDate()}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MiniCalendar