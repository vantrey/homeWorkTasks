import React from 'react'
import styles from './GreetingsOutput.module.css'

class GreetingsOutput extends React.Component {
  render = () => {
    return (
      <div className={styles.greetingsOutput}>
        {this.props.greetingsOutputText}
      </div>
    )
  }
}

export default GreetingsOutput