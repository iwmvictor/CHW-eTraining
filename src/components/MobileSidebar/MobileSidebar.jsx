import React from 'react'
import { useEvents } from '../../contexts/EventContext'
import { useCalendar } from '../../contexts/CalendarContext'
import Dialog from '../Dialogs/Dialog'
import MiniCalendar from '../MiniCalendar/MiniCalendar'
import styles from './MobileSidebar.module.scss'

function MobileSidebar() {
  const { isMobileSidebarOpen, closeMobileSidebar } = useEvents()
  const { setDate } = useCalendar()

  const handleClose = () => {
    closeMobileSidebar()
  }

  // Close sidebar when date changes
  React.useEffect(() => {
    const handleDateChange = () => {
      closeMobileSidebar()
    }

    if (isMobileSidebarOpen) {
      document.addEventListener('date-change', handleDateChange)
      return () => document.removeEventListener('date-change', handleDateChange)
    }
  }, [isMobileSidebarOpen, closeMobileSidebar])

  return (
    <Dialog 
      isOpen={isMobileSidebarOpen} 
      onClose={handleClose}
      className={styles.dialogSidebar}
    >
      <div className={styles.dialogWrapper}>
        <div className={styles.dialogContent}>
          <MiniCalendar />
        </div>
      </div>
    </Dialog>
  )
}

export default MobileSidebar