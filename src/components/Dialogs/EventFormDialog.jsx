import React, { useState, useEffect } from 'react'
import { useEvents } from '../../contexts/EventContext'
import { validateEvent } from '../../utils/event'
import Dialog from './Dialog'
import styles from './EventFormDialog.module.scss'

const timeOptions = Array.from({ length: 48 }, (_, i) => {
  const minutes = i * 30
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
  const ampm = hours < 12 ? 'AM' : 'PM'
  return {
    value: minutes,
    label: `${displayHours}:${mins.toString().padStart(2, '0')} ${ampm}`
  }
})

const endTimeOptions = [...timeOptions, { value: 1440, label: '12:00 AM' }]

function EventFormDialog() {
  const { 
    isEventFormOpen, 
    eventFormMode, 
    eventFormData, 
    closeEventForm, 
    createEvent, 
    updateEvent,
    addToast 
  } = useEvents()

  const [formData, setFormData] = useState({
    id: null,
    title: '',
    date: '',
    startTime: 0,
    endTime: 30,
    color: '#2563eb'
  })

  useEffect(() => {
    if (isEventFormOpen && eventFormData) {
      if (eventFormMode === 'create') {
        setFormData({
          id: null,
          title: '',
          date: eventFormData.date.toISOString().substr(0, 10),
          startTime: eventFormData.startTime || 600,
          endTime: eventFormData.endTime || 960,
          color: '#2563eb'
        })
      } else if (eventFormMode === 'edit') {
        setFormData({
          id: eventFormData.id,
          title: eventFormData.title,
          date: eventFormData.date.toISOString().substr(0, 10),
          startTime: eventFormData.startTime,
          endTime: eventFormData.endTime,
          color: eventFormData.color
        })
      }
    }
  }, [isEventFormOpen, eventFormMode, eventFormData])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'startTime' || name === 'endTime' ? parseInt(value, 10) : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const eventData = {
      ...formData,
      id: formData.id || Date.now(),
      date: new Date(formData.date)
    }

    const validationError = validateEvent(eventData)
    if (validationError) {
      addToast('error', validationError)
      return
    }

    if (eventFormMode === 'create') {
      createEvent(eventData)
    } else {
      updateEvent(eventData)
    }

    closeEventForm()
  }

  const handleClose = () => {
    closeEventForm()
    setFormData({
      id: null,
      title: '',
      date: '',
      startTime: 0,
      endTime: 30,
      color: '#2563eb'
    })
  }

  return (
    <Dialog isOpen={isEventFormOpen} onClose={handleClose}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.dialogWrapper}>
          <div className={styles.dialogHeader}>
            <h2 className={styles.dialogTitle}>
              {eventFormMode === 'create' ? 'Create event' : 'Edit event'}
            </h2>
            <button 
              className="button button--icon button--secondary" 
              type="button" 
              onClick={handleClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="button__icon">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div className={styles.dialogContent}>
            <div className={styles.formFields}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="title">Title</label>
                <input 
                  className="input input--fill" 
                  id="title" 
                  name="title" 
                  type="text" 
                  placeholder="My awesome event!"
                  value={formData.title}
                  onChange={handleInputChange}
                  required 
                  autoFocus 
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="date">Date</label>
                <input 
                  className="input input--fill" 
                  id="date" 
                  name="date" 
                  type="date" 
                  value={formData.date}
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className={styles.formSplit}>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="startTime">Start time</label>
                  <div className="select select--fill">
                    <select 
                      className="select__select" 
                      id="startTime" 
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleInputChange}
                    >
                      {timeOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="select__icon">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>

                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="endTime">End time</label>
                  <div className="select select--fill">
                    <select 
                      className="select__select" 
                      id="endTime" 
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleInputChange}
                    >
                      {endTimeOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="select__icon">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Color</label>
                <div className={styles.colorSelect}>
                  {['#2563eb', '#ea580c', '#16a34a', '#7c3aed', '#e11d48'].map(color => (
                    <label 
                      key={color}
                      className={styles.colorSelectItem} 
                      style={{ '--color-select-item-color': color }}
                    >
                      <input 
                        className={styles.colorSelectInput} 
                        type="radio" 
                        name="color" 
                        value={color}
                        checked={formData.color === color}
                        onChange={handleInputChange}
                      />
                      <div className={styles.colorSelectColor}>
                        <div className={styles.colorSelectColorInner}></div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.dialogFooter}>
            <div className={styles.dialogActions}>
              <button className="button button--secondary" type="button" onClick={handleClose}>
                Cancel
              </button>
              <button className="button button--primary" type="submit">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </Dialog>
  )
}

export default EventFormDialog