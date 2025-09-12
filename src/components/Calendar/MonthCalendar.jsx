import React from 'react'
import { generateMonthCalendarDays, today, isTheSameDay } from '../../utils/date'
import { useEvents } from '../../contexts/EventContext'
import { useCalendar } from '../../contexts/CalendarContext'
import { isEventAllDay, eventStartsBefore } from '../../utils/event'
import EventList from '../Event/EventList'
import styles from './MonthCalendar.module.scss'

function MonthCalendar({ date }) {
  const { getEventsByDate, openEventForm } = useEvents()
  const { setDate, setView } = useCalendar()

  const calendarDays = generateMonthCalendarDays(date)
  const calendarWeeks = calendarDays.length / 7

  const handleDayClick = (day) => {
    setDate(day)
    setView('day')
  }

  const handleEventCreate = (day) => {
    openEventForm('create', {
      date: day,
      startTime: 600,
      endTime: 960
    })
  }

  const sortCalendarDayEvents = (events) => {
    return events.sort((eventA, eventB) => {
      if (isEventAllDay(eventA)) return -1
      if (isEventAllDay(eventB)) return 1
      return eventStartsBefore(eventA, eventB) ? -1 : 1
    })
  }

  const getCalendarWeekClass = () => {
    const weekClasses = {
      4: styles.fourWeek,
      5: styles.fiveWeek,
      6: styles.sixWeek
    }
    return weekClasses[calendarWeeks] || ''
  }

  return (
    <div className={`${styles.monthCalendar} ${getCalendarWeekClass()}`}>
      <ul className={styles.dayOfWeekList}>
        <li className={styles.dayOfWeek}>Sun</li>
        <li className={styles.dayOfWeek}>Mon</li>
        <li className={styles.dayOfWeek}>Tue</li>
        <li className={styles.dayOfWeek}>Wed</li>
        <li className={styles.dayOfWeek}>Thu</li>
        <li className={styles.dayOfWeek}>Fri</li>
        <li className={styles.dayOfWeek}>Sat</li>
      </ul>

      <div className={styles.dayListWrapper}>
        <ul className={styles.dayList}>
          {calendarDays.map((day, index) => {
            const events = sortCalendarDayEvents(getEventsByDate(day))
            const isToday = isTheSameDay(today(), day)

            return (
              <li 
                key={index} 
                className={`${styles.day} ${isToday ? styles.dayHighlight : ''}`}
              >
                <button 
                  className={styles.dayLabel}
                  onClick={() => handleDayClick(day)}
                >
                  {day.getDate()}
                </button>
                <div 
                  className={styles.eventListWrapper}
                  onClick={() => handleEventCreate(day)}
                >
                  <EventList events={events} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MonthCalendar