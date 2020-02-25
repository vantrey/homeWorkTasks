import React from "react";
import Interest from "./Interest/Interest";
import style from './Interests.module.css'

class Interests extends React.Component {
  skills = [
    {skill: 'умный'},
    {skill: 'красивый'},
    {skill: 'обоятеленый'},
  ];

  skillsElements = skills.map((item, i) => {
    return (
      <Interest key={i} skill={item.skill}/>
    )
  });
  render = () => {
    return (
      <div className={style.interestsTitle}>
        <h3 className={style.interestsTitle}>Мои интересы</h3>
        <div className={style.interests}>
          {skillsElements}
        </div>
      </div>
    )
  }
}
export default Interests;
