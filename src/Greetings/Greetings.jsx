import React from 'react'
import styles from './Greetings.module.css'
import GreetingsOutput from "./GreetingsOutput/GreetingsOutput"
import GreetingsTitle from "./GreetingsTitle/GreetingsTitle"
import AddText from "./AddText/AddText";

class Greetings extends React.Component {
  render = () => {
    let greetingsOutputEls = this.props.greetings.greetingsOutput.map((item, index) => {
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
    });
    return (
      <div className={styles.greetingsWrapper}>
        <GreetingsTitle greetingsTitle={this.props.greetings.greetingsTitle}/>
        <AddText addGreetingsOutput={this.props.addGreetingsOutput}/>
        <div className={styles.greetingsOutputWrapper}>
          <h4 className={styles.outputTitle}>Записались:</h4>
          {greetingsOutputEls}
        </div>
      </div>
    )
  }
}

export default Greetings
