import React, { useEffect } from 'react'
import { useEvents } from '../../contexts/EventContext'
import styles from './Toaster.module.scss'

function Toaster() {
  const { toasts, removeToast } = useEvents()

  useEffect(() => {
    toasts.forEach(toast => {
      const timer = setTimeout(() => {
        removeToast(toast.id)
      }, 3000)

      return () => clearTimeout(timer)
    })
  }, [toasts, removeToast])

  if (toasts.length === 0) return null

  return (
    <div className={styles.toaster}>
      {toasts.map(toast => (
        <div 
          key={toast.id} 
          className={`${styles.toast} ${styles[`toast${toast.type.charAt(0).toUpperCase() + toast.type.slice(1)}`]}`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}

export default Toaster