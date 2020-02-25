import React from 'react';
import style from './Presentation.module.css'
import PresentTemplate from "./PresentTemplate/PresentTemplate";
import PresentName from "./PresentName/PresentName";

class Presentation extends React.Component {
  render = () => {
    return (
      <div className={style.presentation}>
      <PresentTemplate/>
      <PresentName/>
      </div>
    );
  }
}

export default Presentation;

