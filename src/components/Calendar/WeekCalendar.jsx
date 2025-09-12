import React, { useRef, useEffect } from 'react'
import { generateWeekDays, isTheSameDay, today } from '../../utils/date'
import { useEvents } from '../../contexts/EventContext'
import { useCalendar } from '../../contexts/CalendarContext'
import { isEventAllDay, eventStartsBefore, eventCollidesWith } from '../../utils/event'
import EventList from '../Event/EventList'
import Event from '../Event/Event'
import styles from './WeekCalendar.module.scss'

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: 'short'
});

function WeekCalendar({ date, isSingleDay, deviceType }) {
  const { getEventsByDate, openEventForm } = useEvents()
  const { selectedDate, setDate, setView } = useCalendar()
  const scrollRef = useRef(null)

  const weekDays = isSingleDay ? [date] : generateWeekDays(date)

  useEffect(() => {
    // Scroll to 8 AM on mount
    if (scrollRef.current) {
      const scrollTop = (8 * 4 * 64) // 8 hours * 4 cells per hour * 64px per cell
      scrollRef.current.scrollTop = scrollTop
    }
  }, [])

  const handleDayClick = (day) => {
    setDate(day)
    if (deviceType !== 'mobile') {
      setView('day')
    }
  }

  const handleCellClick = (day, startTime) => {
    openEventForm('create', {
      date: day,
      startTime,
      endTime: startTime + 60
    })
  }

  const sortEventsByTime = (events) => {
    return events.sort((eventA, eventB) => {
      if (eventStartsBefore(eventA, eventB)) return -1
      if (eventStartsBefore(eventB, eventA)) return 1
      return eventA.endTime < eventB.endTime ? 1 : -1
    })
  }

  const calculateEventsDynamicStyles = (events) => {
    const { eventGroups, totalColumns } = groupEvents(events)
    const columnWidth = 100 / totalColumns
    const initialEventGroupItems = []

    for (const eventGroup of eventGroups) {
      for (const eventGroupItem of eventGroup) {
        if (eventGroupItem.isInitial) {
          initialEventGroupItems.push(eventGroupItem)
        }
      }
    }

    return initialEventGroupItems.map((eventGroupItem) => {
      const topPercentage = 100 * (eventGroupItem.event.startTime / 1440)
      const bottomPercentage = 100 - 100 * (eventGroupItem.event.endTime / 1440)
      const leftPercentage = columnWidth * eventGroupItem.columnIndex
      const rightPercentage = columnWidth * (totalColumns - eventGroupItem.columnIndex - eventGroupItem.columnSpan)

      return {
        event: eventGroupItem.event,
        styles: {
          top: `${topPercentage}%`,
          bottom: `${bottomPercentage}%`,
          left: `${leftPercentage}%`,
          right: `${rightPercentage}%`
        }
      }
    })
  }

  const groupEvents = (events) => {
    if (events.length === 0) {
      return { eventGroups: [], totalColumns: 0 }
    }

    const firstEventGroup = [
      {
        event: events[0],
        columnIndex: 0,
        isInitial: true,
        eventIndex: 0
      }
    ]

    const eventGroups = [firstEventGroup]

    for (let i = 1; i < events.length; i += 1) {
      const lastEventGroup = eventGroups[eventGroups.length - 1]
      const loopEvent = events[i]

      const lastEventGroupCollidingItems = lastEventGroup.filter((eventGroupItem) => 
        eventCollidesWith(eventGroupItem.event, loopEvent)
      )

      if (lastEventGroupCollidingItems.length === 0) {
        const newEventGroupItem = {
          event: loopEvent,
          columnIndex: 0,
          isInitial: true,
          eventIndex: i
        }

        const newEventGroup = [newEventGroupItem]
        eventGroups.push(newEventGroup)
        continue
      }

      if (lastEventGroupCollidingItems.length === lastEventGroup.length) {
        const newEventGroupItem = {
          event: loopEvent,
          columnIndex: lastEventGroup.length,
          isInitial: true,
          eventIndex: i
        }

        lastEventGroup.push(newEventGroupItem)
        continue
      }

      let newColumnIndex = 0
      while (true) {
        const isColumnIndexInUse = lastEventGroupCollidingItems.some((eventGroupItem) => 
          eventGroupItem.columnIndex === newColumnIndex
        )

        if (isColumnIndexInUse) {
          newColumnIndex += 1
        } else {
          break
        }
      }

      const newEventGroupItem = {
        event: loopEvent,
        columnIndex: newColumnIndex,
        isInitial: true,
        eventIndex: i
      }

      const newEventGroup = [
        ...lastEventGroupCollidingItems.map((eventGroupItem) => ({
          ...eventGroupItem,
          isInitial: false
        })),
        newEventGroupItem
      ]

      eventGroups.push(newEventGroup)
    }

    let totalColumns = 0
    for (const eventGroup of eventGroups) {
      for (const eventGroupItem of eventGroup) {
        totalColumns = Math.max(totalColumns, eventGroupItem.columnIndex + 1)
      }
    }

    for (const eventGroup of eventGroups) {
      eventGroup.sort((columnGroupItemA, columnGroupItemB) => {
        return columnGroupItemA.columnIndex < columnGroupItemB.columnIndex ? -1 : 1
      })

      for (let i = 0; i < eventGroup.length; i += 1) {
        const loopEventGroupItem = eventGroup[i]
        if (i === eventGroup.length - 1) {
          loopEventGroupItem.columnSpan = totalColumns - loopEventGroupItem.columnIndex
        } else {
          const nextLoopEventGroupItem = eventGroup[i + 1]
          loopEventGroupItem.columnSpan = nextLoopEventGroupItem.columnIndex - loopEventGroupItem.columnIndex
        }
      }
    }

    for (let i = 0; i < events.length; i += 1) {
      let lowestColumnSpan = Infinity

      for (const eventGroup of eventGroups) {
        for (const eventGroupItem of eventGroup) {
          if (eventGroupItem.eventIndex === i) {
            lowestColumnSpan = Math.min(lowestColumnSpan, eventGroupItem.columnSpan)
          }
        }
      }

      for (const eventGroup of eventGroups) {
        for (const eventGroupItem of eventGroup) {
          if (eventGroupItem.eventIndex === i) {
            eventGroupItem.columnSpan = lowestColumnSpan
          }
        }
      }
    }

    return { eventGroups, totalColumns }
  }

  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i === 0 ? 12 : i > 12 ? i - 12 : i
    const ampm = i < 12 ? 'AM' : 'PM'
    return `${hour}:00 ${ampm}`
  })

  return (
    <div className={`${styles.weekCalendar} ${isSingleDay ? styles.weekCalendarDay : ''}`}>
      <ul className={styles.dayOfWeekList}>
        {weekDays.map((day, index) => {
          const isToday = isTheSameDay(day, today())
          const isSelected = isTheSameDay(day, selectedDate)

          return (
            <li key={index} className={styles.dayOfWeek}>
              <button 
                className={`${styles.dayOfWeekButton} ${isToday ? styles.dayOfWeekButtonHighlight : ''} ${isSelected ? styles.dayOfWeekButtonSelected : ''}`}
                onClick={() => handleDayClick(day)}
              >
                <span className={styles.dayOfWeekDay}>
                  {dateFormatter.format(day)}
                </span>
                <span className={styles.dayOfWeekNumber}>
                  {day.getDate()}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <ul className={styles.allDayList}>
        {weekDays.map((day, index) => {
          if (deviceType === 'mobile' && !isTheSameDay(day, selectedDate)) {
            return null
          }

          const events = getEventsByDate(day)
          const allDayEvents = events.filter(event => isEventAllDay(event))

          return (
            <li key={index} className={styles.allDayListItem}>
              <EventList events={allDayEvents} />
            </li>
          )
        })}
      </ul>

      <div className={styles.content}>
        <div className={styles.contentInner} ref={scrollRef}>
          <ul className={styles.timeList}>
            {timeSlots.map((time, index) => (
              <li key={index} className={styles.timeItem}>
                <time className={styles.time}>{time}</time>
              </li>
            ))}
          </ul>

          <div className={styles.columns}>
            {weekDays.map((day, dayIndex) => {
              if (deviceType === 'mobile' && !isTheSameDay(day, selectedDate)) {
                return null
              }

              const events = getEventsByDate(day)
              const nonAllDayEvents = events.filter(event => !isEventAllDay(event))
              const sortedEvents = sortEventsByTime(nonAllDayEvents)
              const eventsWithStyles = calculateEventsDynamicStyles(sortedEvents)

              return (
                <div key={dayIndex} className={styles.column}>
                  {Array.from({ length: 24 }, (_, hourIndex) => (
                    <div 
                      key={hourIndex}
                      className={styles.cell}
                      onClick={() => handleCellClick(day, hourIndex * 60)}
                    />
                  ))}
                  
                  {eventsWithStyles.map((eventWithStyles, eventIndex) => (
                    <Event
                      key={eventIndex}
                      event={eventWithStyles.event}
                      isDynamic={true}
                      style={eventWithStyles.styles}
                    />
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeekCalendar