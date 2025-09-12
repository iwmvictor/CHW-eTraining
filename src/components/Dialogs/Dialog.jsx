import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './Dialog.module.scss'

function Dialog({ isOpen, onClose, children, className = '' }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [isOpen])

  const handleCancel = (e) => {
    e.preventDefault()
    onClose()
  }

  const handleClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose()
    }
  }

  return createPortal(
    <dialog 
      ref={dialogRef}
      className={`${styles.dialog} ${className}`}
      onCancel={handleCancel}
      onClick={handleClick}
    >
      {children}
    </dialog>,
    document.body
  )
}

export default Dialog