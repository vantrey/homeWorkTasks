import React from 'react'
import styles from './GreetingsOutput.module.css'

class GreetingsOutput extends React.Component {
  stl=this.props.cln
  render = () => {
    return (
      <div className={styles.greetingsOutput}>
        {this.props.greetingsOutputText}
      </div>
    )
  }
}

export default GreetingsOutput