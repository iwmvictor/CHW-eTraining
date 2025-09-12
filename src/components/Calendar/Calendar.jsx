import React from 'react'
import { useCalendar } from '../../contexts/CalendarContext'
import MonthCalendar from './MonthCalendar'
import WeekCalendar from './WeekCalendar'

function Calendar() {
  const { selectedView, selectedDate, deviceType } = useCalendar()

  if (selectedView === 'month') {
    return <MonthCalendar date={selectedDate} />
  } else if (selectedView === 'week') {
    return <WeekCalendar date={selectedDate} isSingleDay={false} deviceType={deviceType} />
  } else {
    return <WeekCalendar date={selectedDate} isSingleDay={true} deviceType={deviceType} />
  }
}

export default Calendar