import React from 'react';
import style from './MyName.module.css'

class MyName extends React.Component {
  render = () => {
    return (
      <div className={style.myName}>
        Толкачёв Иван
      </div>
    );
  }
}

export default MyName;

