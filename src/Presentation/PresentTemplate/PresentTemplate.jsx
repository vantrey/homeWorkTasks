import React from 'react';
import style from './PresentTemplate.module.css'

class PresentTemplate extends React.Component {
  render = () => {
    return (
      <div className={style.presentTemplate}>
        {this.props.presentTemplate}
      </div>
    );
  }
}

export default PresentTemplate;

