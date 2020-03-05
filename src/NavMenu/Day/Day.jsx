import React from 'react';
import styles from './Day.module.css';
import {NavLink} from "react-router-dom";

class Day extends React.Component {

  render = () => {
    return (
      <NavLink
        to={this.props.pathName}
        activeClassName={styles.active}
        onClick={this.props.onClickCurrPage}
      >
        {this.props.dayName}
      </NavLink>
    )
  }
}

export default Day
