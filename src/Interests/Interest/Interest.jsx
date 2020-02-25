import React from "react";
import style from './Interest.module.css'

class Interest extends React.Component {
  render = () => {
    return (
      <div className={style.interest}>
        <span className={style.interestTitle}>{this.props.interest.interestTitle}</span>
      </div>
    )
  }
}

export default Interest;
