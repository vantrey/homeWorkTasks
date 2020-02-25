import React from 'react'
import styles from './GreetingsButton.module.css'

class GreetingsButton extends React.Component {

  render = () => {
    return (
      <button
        className={styles.greetingsButton}
        onClick={console.log}
      >
        Сказать привет
      </button>
    )
  }
}

export default GreetingsButton