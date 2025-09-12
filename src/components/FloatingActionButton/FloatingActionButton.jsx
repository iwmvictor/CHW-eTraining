import React from 'react'
import { useEvents } from '../../contexts/EventContext'
import { useCalendar } from '../../contexts/CalendarContext'
import styles from './FloatingActionButton.module.scss'

function FloatingActionButton() {
  const { openEventForm } = useEvents()
  const { selectedDate } = useCalendar()

  const handleClick = () => {
    openEventForm('create', {
      date: selectedDate,
      startTime: 600,
      endTime: 960
    })
  }

  return (
    <button className={`${styles.fab} mobile-only`} onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.fabIcon}>
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    </button>
  )
}

export default FloatingActionButton