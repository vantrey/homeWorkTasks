import React from 'react';
import styles from './NavMenu.module.css';
import Button from "./Button/Button";
import Day from "./Day/Day";

class NavMenu extends React.Component {
  state = {
    currentPage: 'Monday',
    isHidden: false,
  }
  onClickCurrPage = (e) => {
    this.setState({currentPage: e.currentTarget.innerHTML})
  }
  onShowFilterClick = () => {
    this.setState({isHidden: false})
  }
  onHideFilterClick = () => {
    this.setState({isHidden: true})
  }
  render = () => {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let daysEls = days.map((day, i) => {
      return (
        <Day key={i} dayName={day} pathName={`/${day}`} onClickCurrPage={this.onClickCurrPage}/>
      )
    })

    return (
      <nav className={styles.navMenuWrapper}>
        <div className={styles.navMenuTitle}>
          <h3>MENU</h3>
          {this.state.isHidden && <Button title={`show`} onBtnClick={this.onShowFilterClick}/>}
          {!this.state.isHidden && <Button title={`hide`} onBtnClick={this.onHideFilterClick}/>}
        </div>
        {!this.state.isHidden &&
        <div className={styles.navMenu}>
          {daysEls}
        </div>
        }
      </nav>
    )
  }
}

export default NavMenu
