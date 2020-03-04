import React from 'react';
import styles from './GreetingsInput.module.css'

class GreetingsInput extends React.Component {

  state = {
    currentValue: '',
  }

  onInputChange = (e) => {
    this.setState({currentValue: e.currentTarget.value})
    console.log(this.state.currentValue)
  }
  onEnterPress = (e) => {
    if( e.key === 'Enter') {
      alert(this.state.currentValue)
      this.props.addGreetingsOutput(this.state.currentValue)
    }
  }

  //
  // onEnterKeyDown = (e) => {
  //   if (this.props.inputRef.current.value.trim() && e.keyCode === 13) {  // keyCode of "enter" = 13
  //     this.props.addGreetingsOutput()
  //   }
  // };
  // onInputText = () => {
  //   this.props.swishButtonDisable()
  // };

  render = () => {
    return (
      <input className={styles.input}
             type='text'
             placeholder='введи свое имя'
             value={this.state.currentValue}
             ref={this.props.inputRef}
             onChange={this.onInputChange}
             onKeyPress={this.onEnterPress}
      />
    )
  }
}

export default GreetingsInput
