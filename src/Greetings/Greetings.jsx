import React from 'react'
import styles from './Greetings.module.css'
import GreetingsInput from "./GreetingsInput/GreetingsInput"
import GreetingsButton from "./GreetingsButton/GreetingsButton"
import GreetingsOutput from "./GreetingsOutput/GreetingsOutput"
import GreetingsTitle from "./GreetingsTitle/GreetingsTitle"

class Greetings extends React.Component {

  render = () => {

    return (
      <div className={styles.greetingsWrapper}>
        <GreetingsTitle greetingsTitle={this.props.greetings.greetingsTitle}/>
        <GreetingsInput inputRef={this.props.inputRef}/>
        <GreetingsButton addGreetingsOutput={this.props.addGreetingsOutput}/>
        <GreetingsOutput/>
      </div>

    )
  }
}

export default Greetings
