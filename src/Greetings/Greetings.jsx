import React from 'react'
import styles from './Greetings.module.css'
import GreetingsInput from "./GreetingsInput/GreetingsInput"
import GreetingsButton from "./GreetingsButton/GreetingsButton"
import GreetingsOutput from "./GreetingsOutput/GreetingsOutput"
import GreetingsTitle from "./GreetingsTitle/GreetingsTitle"

class Greetings extends React.Component {

  render = () => {
    let greetingsOutputEl = this.props.greetings.greetingsOutput.map((item, index) => {
      if (index % 2) {
        return (
          <div key={index} className={styles.odd}>
            <GreetingsOutput greetingsOutputText={item}/>
          </div>
        )
      } else {
        return (
          <div key={index} className={styles.even}>
            <GreetingsOutput greetingsOutputText={item}/>
          </div>
        )
      }
    })
    return (
      <div className={styles.greetingsWrapper}>
        <GreetingsTitle greetingsTitle={this.props.greetings.greetingsTitle}/>
        <GreetingsInput
          swishButtonDisable={this.props.swishButtonDisable}
          inputRef={this.props.inputRef}
        />
        <GreetingsButton
          buttonDisable={this.props.greetings.buttonDisable}
          addGreetingsOutput={this.props.addGreetingsOutput}
        />
        <div className={styles.outputWrapper}>
          <h4 className={styles.outputTitle}>Записались:</h4>
          {greetingsOutputEl}
        </div>


      </div>
    )
  }
}

export default Greetings
