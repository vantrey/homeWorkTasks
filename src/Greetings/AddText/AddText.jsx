import React from 'react'
import Input from "./Input/Input"
import Button from "./Button/Button"
import styles from "./AddText.module.css"

class AddText extends React.Component {
  state = {
    currentValue: '',
    isError: false,
  }
  onInputChange = (e) => {
    this.setState({
      currentValue: e.currentTarget.value,
      isError: false,
    })
  }
  addNewText = () => {
    if (!this.state.currentValue) {
      this.setState({isError: true})
    } else {
      alert(this.state.currentValue)
      this.props.addGreetingsOutput(this.state.currentValue)
      this.setState({currentValue: ''})
    }
  }
  onEnterPress = (e) => {
    e.key === 'Enter' && this.addNewText()
  }
  onBtnClick = () => {
    this.addNewText()
  }

  render = () => {
    return (
      <div className={styles.addTextWrapper}>
        <Input
          isError={this.state.isError}
          currentValue={this.state.currentValue}
          onInputChange={this.onInputChange}
          onEnterPress={this.onEnterPress}
        />
        <Button
          onBtnClick={this.onBtnClick}
        />
      </div>
    )
  }
}

export default AddText
