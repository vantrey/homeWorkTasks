import React from 'react'
import styles from './Button.module.css'

class Button extends React.Component {
  render = () => {
    return (
      <button
        className={styles.button}
        onClick={this.props.onBtnClick}
      >
        <span className={styles.buttonTitle}>Записаться</span>
      </button>
    )
  }
}

export default Button