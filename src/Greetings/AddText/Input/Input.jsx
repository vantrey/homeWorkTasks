import React from 'react';
import styles from './Input.module.css'

class Input extends React.Component {

  render = () => {
    let classForEl = this.props.isError ? `${styles.input} ${styles.error}` : styles.input
    return (
      <input className={classForEl}
             type='text'
             placeholder='введи свое имя'
             value={this.props.currentValue}
             onChange={this.props.onInputChange}
             onKeyPress={this.props.onEnterPress}
      />
    )
  }
}

export default Input
