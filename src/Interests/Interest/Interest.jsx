import React from "react";
import styles from './Interest.module.css'

class Interest extends React.Component {
  render = () => {
    return (
      <div className={styles.interest}>
        <span className={styles.interestTitle}>{this.props.interest.interestTitle}</span>
      </div>
    )
  }
}

export default Interest;
