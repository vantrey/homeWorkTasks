import React from 'react'
import styles from './GreetingsButton.module.css'

class GreetingsButton extends React.Component {
onAddGreetingsOutput = () => {
  this.props.addGreetingsOutput()
}
  render = () => {
    return (
      <button
        className={styles.greetingsButton}
        onClick={this.onAddGreetingsOutput}
      >
        Сказать привет
      </button>
    )
  }
}

export default GreetingsButton