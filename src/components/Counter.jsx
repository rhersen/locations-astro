import React from 'react'
import styles from './Counter.module.css'

export default function Counter({locations}) {

  return (
    <div className={styles.counter}>
      <h1>Simple React Counter</h1>
      <p>Count: {locations.length}</p>
    </div>
  )
}
