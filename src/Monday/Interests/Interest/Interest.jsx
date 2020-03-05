import React from "react";
import styles from './Interest.module.css'

class Interest extends React.Component {
  render = () => {
    return (
      <div className={styles.interest}>
        {this.props.interest.interestName}
      </div>
    )
  }
}

export default Interest;
