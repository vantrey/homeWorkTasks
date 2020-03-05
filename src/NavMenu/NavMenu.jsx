import React from 'react';
import styles from './NavMenu.module.css';
import {NavLink} from "react-router-dom";

class NavMenu extends React.Component {
  state = {
    currentPage: '',
    isHidden: false,
  }
  onClickCurrPage = (e) => {
    this.setState({currentPage: e.currentTarget.innerHTML})
    console.log(this.state.currentPage)
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
          {this.state.isHidden && <button onClick={this.onShowFilterClick}>show</button>}
          {!this.state.isHidden && <button onClick={this.onHideFilterClick}>hide</button>}
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
