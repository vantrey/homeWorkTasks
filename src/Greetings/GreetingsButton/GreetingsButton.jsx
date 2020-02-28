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
        disabled={this.props.buttonDisable}
      >
       <span className={styles.greetingsButtonText}>Записаться</span>
      </button>
    )
  }
}

export default GreetingsButton