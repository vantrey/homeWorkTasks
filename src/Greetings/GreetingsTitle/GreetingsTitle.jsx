import React from 'react'
import styles from './GreetingsTitle.module.css'

class GreetingsTitle extends React.Component {
  render = () => {
    return (
      <h3 className={styles.greetingsTitle}>
        Скажи привет
      </h3>
    )
  }
}

export default GreetingsTitle
