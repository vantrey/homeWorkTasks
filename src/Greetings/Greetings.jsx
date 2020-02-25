import React from 'react'
import styles from './Greetings.module.css'
import GreetingsInput from "./GreetingsInput/GreetingsInput"
import GreetingsButton from "./GreetingsButton/GreetingsButton"
import GreetingsOutput from "./GreetingsOutput/GreetingsOutput"
import GreetingsTitle from "./GreetingsTitle/GreetingsTitle"

class Greetings extends React.Component {
  /*constructor(props) {
    super(props);
    this.inputRef = React.createRef()
  }

  state = {
    counter: 0
  }

  OnClickHelloButton = () => {
    let inputValue = this.inputRef.current.value
    if (inputValue) {
      let UpdCounter = {
        counter: this.state.counter++
      }
      this.setState({UpdCounter})
      alert(`Greetings, ${inputValue}!`)
      this.inputRef.current.value = ''
    } else {
      alert(`Please, enter someone's name to greetings!`)
    }
  }*/

  render = () => {
    return (
      <div className={styles.greetingsWrapper}>
        <GreetingsTitle greetingsTitle={this.props.greetings.greetingsTitle}/>
        <GreetingsInput/>
        <GreetingsButton/>
        <GreetingsOutput/>
      </div>
      /*<div className={styles.container}>
        <span className={styles.counter}>{this.state.counter}</span>
        <input placeholder={`Enter someone's name`} ref={this.inputRef}/>
        <button className={styles.button} onClick={this.OnClickHelloButton}>Hello</button>
      </div>*/
    )
  }
}

export default Greetings
