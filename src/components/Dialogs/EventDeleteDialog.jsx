import React from 'react'
import { useEvents } from '../../contexts/EventContext'
import Dialog from './Dialog'
import styles from './EventDeleteDialog.module.scss'

function EventDeleteDialog() {
  const { 
    isEventDeleteOpen, 
    selectedEvent, 
    closeEventDelete, 
    deleteEvent 
  } = useEvents()

  const handleClose = () => {
    closeEventDelete()
  }

  const handleDelete = () => {
    if (selectedEvent) {
      deleteEvent(selectedEvent)
    }
    closeEventDelete()
  }

  if (!selectedEvent) return null

  return (
    <Dialog isOpen={isEventDeleteOpen} onClose={handleClose}>
      <div className={styles.dialogWrapper}>
        <div className={styles.dialogHeader}>
          <h2 className={styles.dialogTitle}>Delete event</h2>

          <button 
            className="button button--icon button--secondary" 
            onClick={handleClose}
            autoFocus
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="button__icon">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className={styles.dialogContent}>
          <p>Do you really want to delete <strong>{selectedEvent.title}</strong>?</p>
        </div>

        <div className={styles.dialogFooter}>
          <div className={styles.dialogActions}>
            <button className="button button--secondary" onClick={handleClose}>
              Cancel
            </button>
            <button className="button button--danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default EventDeleteDialog