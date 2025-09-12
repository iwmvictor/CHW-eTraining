import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { isTheSameDay } from '../utils/date'

const EventContext = createContext()

const initialState = {
  events: [],
  selectedEvent: null,
  isEventFormOpen: false,
  isEventDetailsOpen: false,
  isEventDeleteOpen: false,
  isMobileSidebarOpen: false,
  eventFormMode: 'create',
  eventFormData: null,
  toasts: []
}

function eventReducer(state, action) {
  switch (action.type) {
    case 'LOAD_EVENTS':
      return { ...state, events: action.payload }
    case 'ADD_EVENT':
      return { ...state, events: [...state.events, action.payload] }
    case 'UPDATE_EVENT':
      return {
        ...state,
        events: state.events.map(event =>
          event.id === action.payload.id ? action.payload : event
        )
      }
    case 'DELETE_EVENT':
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload.id)
      }
    case 'SET_SELECTED_EVENT':
      return { ...state, selectedEvent: action.payload }
    case 'OPEN_EVENT_FORM':
      return {
        ...state,
        isEventFormOpen: true,
        eventFormMode: action.payload.mode,
        eventFormData: action.payload.data
      }
    case 'CLOSE_EVENT_FORM':
      return {
        ...state,
        isEventFormOpen: false,
        eventFormMode: 'create',
        eventFormData: null
      }
    case 'OPEN_EVENT_DETAILS':
      return {
        ...state,
        isEventDetailsOpen: true,
        selectedEvent: action.payload
      }
    case 'CLOSE_EVENT_DETAILS':
      return { ...state, isEventDetailsOpen: false, selectedEvent: null }
    case 'OPEN_EVENT_DELETE':
      return {
        ...state,
        isEventDeleteOpen: true,
        selectedEvent: action.payload
      }
    case 'CLOSE_EVENT_DELETE':
      return { ...state, isEventDeleteOpen: false, selectedEvent: null }
    case 'OPEN_MOBILE_SIDEBAR':
      return { ...state, isMobileSidebarOpen: true }
    case 'CLOSE_MOBILE_SIDEBAR':
      return { ...state, isMobileSidebarOpen: false }
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [...state.toasts, { ...action.payload, id: Date.now() }]
      }
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload)
      }
    default:
      return state
  }
}

export function EventProvider({ children }) {
  const [state, dispatch] = useReducer(eventReducer, initialState)

  useEffect(() => {
    // Load events from localStorage on mount
    const savedEvents = localStorage.getItem('events')
    if (savedEvents) {
      try {
        const events = JSON.parse(savedEvents).map(event => ({
          ...event,
          date: new Date(event.date)
        }))
        dispatch({ type: 'LOAD_EVENTS', payload: events })
      } catch (error) {
        console.error('Failed to load events from localStorage:', error)
      }
    }
  }, [])

  useEffect(() => {
    // Save events to localStorage whenever events change
    const eventsToSave = state.events.map(event => ({
      ...event,
      date: event.date.toISOString()
    }))
    localStorage.setItem('events', JSON.stringify(eventsToSave))
  }, [state.events])

  const getEventsByDate = (date) => {
    return state.events.filter(event => isTheSameDay(event.date, date))
  }

  const createEvent = (eventData) => {
    const event = {
      ...eventData,
      id: Date.now()
    }
    dispatch({ type: 'ADD_EVENT', payload: event })
    dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: 'Event has been created' } })
  }

  const updateEvent = (eventData) => {
    dispatch({ type: 'UPDATE_EVENT', payload: eventData })
    dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: 'Event has been updated' } })
  }

  const deleteEvent = (event) => {
    dispatch({ type: 'DELETE_EVENT', payload: event })
    dispatch({ type: 'ADD_TOAST', payload: { type: 'success', message: 'Event has been deleted' } })
  }

  const openEventForm = (mode = 'create', data = null) => {
    dispatch({ type: 'OPEN_EVENT_FORM', payload: { mode, data } })
  }

  const closeEventForm = () => {
    dispatch({ type: 'CLOSE_EVENT_FORM' })
  }

  const openEventDetails = (event) => {
    dispatch({ type: 'OPEN_EVENT_DETAILS', payload: event })
  }

  const closeEventDetails = () => {
    dispatch({ type: 'CLOSE_EVENT_DETAILS' })
  }

  const openEventDelete = (event) => {
    dispatch({ type: 'OPEN_EVENT_DELETE', payload: event })
  }

  const closeEventDelete = () => {
    dispatch({ type: 'CLOSE_EVENT_DELETE' })
  }

  const openMobileSidebar = () => {
    dispatch({ type: 'OPEN_MOBILE_SIDEBAR' })
  }

  const closeMobileSidebar = () => {
    dispatch({ type: 'CLOSE_MOBILE_SIDEBAR' })
  }

  const addToast = (type, message) => {
    dispatch({ type: 'ADD_TOAST', payload: { type, message } })
  }

  const removeToast = (id) => {
    dispatch({ type: 'REMOVE_TOAST', payload: id })
  }

  const value = {
    ...state,
    getEventsByDate,
    createEvent,
    updateEvent,
    deleteEvent,
    openEventForm,
    closeEventForm,
    openEventDetails,
    closeEventDetails,
    openEventDelete,
    closeEventDelete,
    openMobileSidebar,
    closeMobileSidebar,
    addToast,
    removeToast
  }

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  )
}

export function useEvents() {
  const context = useContext(EventContext)
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider')
  }
  return context
}