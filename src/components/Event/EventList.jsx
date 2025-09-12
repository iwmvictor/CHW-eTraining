import React from 'react'
import Event from './Event'
import styles from './EventList.module.scss'

function EventList({ events }) {
  return (
    <ul className={styles.eventList}>
      {events.map((event) => (
        <li key={event.id} className={styles.eventListItem}>
          <Event event={event} />
        </li>
      ))}
    </ul>
  )
}

export default EventList