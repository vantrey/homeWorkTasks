import React from 'react';
import styles from './GreetingsInput.module.css'

class GreetingsInput extends React.Component {

  render = () => {
    return (
      <input className={styles.greetingsInput}
             type='text'
             placeholder='введи свок имя'
             ref={this.props.inputRef}
      />
    )
  }
}

export default GreetingsInput
