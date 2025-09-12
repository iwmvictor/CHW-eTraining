import React from 'react'
import { useEvents } from '../../contexts/EventContext'
import { eventTimeToDate, isEventAllDay } from '../../utils/event'
import styles from './Event.module.scss'

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric"
});

function Event({ event, isDynamic = false, style = {} }) {
  const { openEventDetails } = useEvents()

  const handleClick = () => {
    openEventDetails(event)
  }

  const startDate = eventTimeToDate(event, event.startTime)
  const endDate = eventTimeToDate(event, event.endTime)

  const eventClasses = [
    styles.event,
    isEventAllDay(event) || isDynamic ? styles.eventFilled : '',
    isDynamic ? styles.eventDynamic : ''
  ].filter(Boolean).join(' ')

  return (
    <button 
      className={eventClasses}
      onClick={handleClick}
      style={{
        '--event-color': event.color,
        ...style
      }}
    >
      <span className={styles.eventColor}></span>
      <span className={styles.eventTitle}>{event.title}</span>
      <span className={styles.eventTime}>
        <time>{dateFormatter.format(startDate)}</time> - <time>{dateFormatter.format(endDate)}</time>
      </span>
    </button>
  )
}

export default Event