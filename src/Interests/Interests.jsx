import React from "react";
import Interest from "./Interest/Interest";
import styles from './Interests.module.css'
import InterestsTitle from "./InterestsTitle/InterestsTitle";

class Interests extends React.Component {

  render = () => {
    let interestsEl = this.props.interests.map((interest, index) => {
        return <Interest key={index} interest={interest}/>
      }
    )
    return (
      <div className={styles.interestsWrapper}>
        <InterestsTitle/>
        <div className={styles.interests}>
          {interestsEl}
        </div>
      </div>
    )
  }
}

export default Interests;
