import React from 'react';
import style from './PresentName.module.css'

class PresentName extends React.Component {
  render = () => {
    return (
      <div className={style.presentName}>
        {this.props.presentsName}
      </div>
    );
  }
}

export default PresentName;

