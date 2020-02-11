import React from "react";
import style from './TolkachevProgress.module.css'

const TolkachevProgress = (props) => {

  let daysDecoration =
    props.day === 'Monday' ? style.mondayDecoration :
      props.day === 'Tuesday' ? style.tuesdayDecoratin :
        props.day === 'Wednesday' ? style.wednesdayDecoratin :
          props.day === 'Thursday' ? style.thursdayDecoratin :
            props.day === 'Friday' ? style.fridayDecoratin : '';

  return (
    <div className={style.daysStyle}>
      <span className={daysDecoration}> {props.day} </span>
    </div>
  );
};
export default TolkachevProgress;













