export function isEventAllDay(event) {
  return event.startTime === 0 && event.endTime === 1440;
}

export function eventStartsBefore(eventA, eventB) {
  return eventA.startTime < eventB.startTime;
}

export function eventEndsBefore(eventA, eventB) {
  return eventA.endTime < eventB.endTime;
}

export function eventCollidesWith(eventA, eventB) {
  const maxStartTime = Math.max(eventA.startTime, eventB.startTime);
  const minEndTime = Math.min(eventA.endTime, eventB.endTime);
  return minEndTime > maxStartTime;
}

export function eventTimeToDate(event, eventTime) {
  return new Date(
    event.date.getFullYear(),
    event.date.getMonth(),
    event.date.getDate(),
    0,
    eventTime
  );
}

export function validateEvent(event) {
  if (event.startTime >= event.endTime) {
    return "Event end time must be after start time";
  }
  return null;
}

export function generateEventId() {
  return Date.now();
}