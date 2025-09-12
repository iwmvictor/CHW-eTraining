import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { today } from '../utils/date'

const CalendarContext = createContext()

const initialState = {
  selectedDate: today(),
  selectedView: 'month',
  deviceType: window.innerWidth >= 768 ? 'desktop' : 'mobile'
}

function calendarReducer(state, action) {
  switch (action.type) {
    case 'SET_DATE':
      return { ...state, selectedDate: action.payload }
    case 'SET_VIEW':
      return { ...state, selectedView: action.payload }
    case 'SET_DEVICE_TYPE':
      return { ...state, deviceType: action.payload }
    default:
      return state
  }
}

export function CalendarProvider({ children }) {
  const [state, dispatch] = useReducer(calendarReducer, initialState)

  useEffect(() => {
    const handleResize = () => {
      const deviceType = window.innerWidth >= 768 ? 'desktop' : 'mobile'
      dispatch({ type: 'SET_DEVICE_TYPE', payload: deviceType })
      
      if (deviceType === 'mobile' && state.selectedView === 'month') {
        dispatch({ type: 'SET_VIEW', payload: 'week' })
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [state.selectedView])

  useEffect(() => {
    // Initialize mobile view
    if (state.deviceType === 'mobile' && state.selectedView === 'month') {
      dispatch({ type: 'SET_VIEW', payload: 'week' })
    }
  }, [])

  const setDate = (date) => {
    dispatch({ type: 'SET_DATE', payload: date })
  }

  const setView = (view) => {
    dispatch({ type: 'SET_VIEW', payload: view })
  }

  const value = {
    ...state,
    setDate,
    setView
  }

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )
}

export function useCalendar() {
  const context = useContext(CalendarContext)
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider')
  }
  return context
}