import React from "react";
import Interest from "./Interest/Interest";
import style from './Interests.module.css'

class Interests extends React.Component {

  render = () => {
    let interestsEl = this.props.interests.map((interest, index) => {
        return <Interest key={index} interest={interest}/>
      }
    )
    return (
      <div className={style.interestsWrapper}>
        <h3 className={style.interestsTitle}>Мои интересы</h3>
        <div className={style.interests}>
          {interestsEl}
        </div>
      </div>
    )
  }
}

export default Interests;
