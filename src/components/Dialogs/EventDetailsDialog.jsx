import React from 'react'
import { useEvents } from '../../contexts/EventContext'
import { eventTimeToDate } from '../../utils/event'
import Dialog from './Dialog'
import styles from './EventDetailsDialog.module.scss'

const eventDateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const eventTimeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: 'numeric',
  minute: 'numeric'
});

function EventDetailsDialog() {
  const { 
    isEventDetailsOpen, 
    selectedEvent, 
    closeEventDetails, 
    openEventDelete,
    openEventForm
  } = useEvents()

  const handleClose = () => {
    closeEventDetails()
  }

  const handleDelete = () => {
    closeEventDetails()
    setTimeout(() => {
      openEventDelete(selectedEvent)
    }, 100)
  }

  const handleEdit = () => {
    closeEventDetails()
    setTimeout(() => {
      openEventForm('edit', selectedEvent)
    }, 100)
  }

  if (!selectedEvent) return null

  return (
    <Dialog isOpen={isEventDetailsOpen} onClose={handleClose}>
      <div className={styles.dialogWrapper}>
        <div className={styles.dialogHeader}>
          <h2 className={styles.dialogTitle}>Event details</h2>
          <div className={styles.dialogHeaderActions}>
            <button 
              className="button button--icon button--secondary" 
              onClick={handleDelete}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="button__icon">
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
            </button>

            <button 
              className="button button--icon button--secondary" 
              onClick={handleEdit}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="button__icon">
                <path
                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                <path d="m15 5 4 4" />
              </svg>
            </button>

            <div className={styles.dialogHeaderActionsDivider}></div>

            <button 
              className="button button--icon button--secondary" 
              onClick={handleClose}
              autoFocus
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="button__icon">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.dialogContent}>
          <div 
            className={styles.eventDetails}
            style={{ '--event-color': selectedEvent.color }}
          >
            <div className={styles.eventDetailsLine}></div>
            <div className={styles.eventDetailsContent}>
              <div className={styles.eventDetailsTitle}>
                {selectedEvent.title}
              </div>
              <div className={styles.eventDetailsTime}>
                <time>{eventDateFormatter.format(selectedEvent.date)}</time> <br />
                <time>{eventTimeFormatter.format(eventTimeToDate(selectedEvent, selectedEvent.startTime))}</time> - <time>{eventTimeFormatter.format(eventTimeToDate(selectedEvent, selectedEvent.endTime))}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default EventDetailsDialog