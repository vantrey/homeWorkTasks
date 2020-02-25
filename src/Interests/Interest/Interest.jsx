import React from "react";
import style from './Interest.module.css'

const Interest = (props) => {

  return (
    <div className={style.interest}>
      <span>{props.skill}</span>
    </div>
  );
};
export default Interest;
