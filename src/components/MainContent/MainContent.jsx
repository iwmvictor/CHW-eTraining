import React from 'react'
import Navigation from '../Navigation/Navigation'
import Calendar from '../Calendar/Calendar'
import styles from './MainContent.module.scss'

function MainContent() {
  return (
    <main className={styles.main}>
      <Navigation />
      <div className={styles.calendar}>
        <Calendar />
      </div>
    </main>
  )
}

export default MainContent