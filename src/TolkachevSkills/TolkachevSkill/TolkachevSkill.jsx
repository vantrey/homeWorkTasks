import React from "react";
import style from './TolkachevSkill.module.css'

const TolkachevSkill = (props) => {

  return (
    <div className={style.skill}>
      <span>{props.skill}</span>
    </div>
  );
};
export default TolkachevSkill;
