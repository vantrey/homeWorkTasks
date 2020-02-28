import React from 'react';
import styles from './GreetingsInput.module.css'

class GreetingsInput extends React.Component {
  onInputText = () => {
    this.props.swishButtonDisable()
  }
  render = () => {
    return (
      <input className={styles.greetingsInput}
             type='text'
             placeholder='введи свок имя'
             ref={this.props.inputRef}
             onInput={this.onInputText}
      />
    )
  }
}

export default GreetingsInput
