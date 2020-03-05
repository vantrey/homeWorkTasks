import React from 'react';
import styles from './NavMenu.module.css';
import {NavLink} from "react-router-dom";
import Button from "./Button/Button";

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
    return (
      <nav className={styles.navMenuWrapper}>
        <div className={styles.navMenuTitle}>
          <h3>MENU</h3>
          {this.state.isHidden && <Button title={`show`} onBtnClick={this.onShowFilterClick}/>}
          {!this.state.isHidden && <Button title={`hide`} onBtnClick={this.onHideFilterClick}/>}
        </div>
        {!this.state.isHidden &&
        <div className={styles.navMenu}>
          <NavLink to='/Monday' activeClassName={styles.active} onClick={this.onClickCurrPage}>Monday</NavLink>
          <NavLink to='/Tuesday' activeClassName={styles.active} onClick={this.onClickCurrPage}>Tuesday</NavLink>
          <NavLink to='/Wednesday' activeClassName={styles.active} onClick={this.onClickCurrPage}>Wednesday</NavLink>
          <NavLink to='/Thursday' activeClassName={styles.active} onClick={this.onClickCurrPage}>Thursday</NavLink>
          <NavLink to='/Friday' activeClassName={styles.active} onClick={this.onClickCurrPage}>Friday</NavLink>
        </div>
        }
      </nav>
    )
  }
}

export default NavMenu
