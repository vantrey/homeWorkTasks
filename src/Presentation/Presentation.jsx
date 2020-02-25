import React from 'react';
import style from './Presentation.module.css'
import PresentTemplate from "./PresentTemplate/PresentTemplate";
import PresentName from "./PresentName/PresentName";

class Presentation extends React.Component {
  render = () => {
    return (
      <div className={style.presentation}>
      <PresentTemplate presentTemplate={this.props.presentation.presentTemplate}/>
      <PresentName presentsName={this.props.presentation.presentName}/>
      </div>
    );
  }
}

export default Presentation;

