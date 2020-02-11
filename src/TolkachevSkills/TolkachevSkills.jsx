import React from "react";
import TolkachevSkill from "./TolkachevSkill/TolkachevSkill";
import style from './TolkachevSkills.module.css'

const TolkachevSkills = () => {
  let skills = [
    {skill: 'умный'},
    {skill: 'красивый'},
    {skill: 'обоятеленый'},
  ];
  let skillsElements = skills.map(item => {
    return (
      <TolkachevSkill skill={item.skill}/>
    )
  });
  return (
    <div className={style.skills}>
      {skillsElements}
    </div>
  )
};
export default TolkachevSkills;
