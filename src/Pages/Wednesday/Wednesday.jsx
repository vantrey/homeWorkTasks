import React from "react"
import styles from "./Wednesday.module.css"

import {connect} from "react-redux"
import StyleSwitcher from "./StyleSwitcher/StyleSwitcher"
import {setStyleAC} from "../../redux/settingsReducer"

class Wednesday extends React.Component {

  setStyle = (value) => {
    this.props.setStyle(value)
  }

  render = () => {
    return (
      <div className={`${styles.wrapper} ${this.props.style.content}`}>
        <div className={styles.themeSwitcherWrap}>
          {this.props.stylesSwitchers.map((s, i) =>
            <StyleSwitcher
              key={i}
              value={s.value}
              checked={s.checked}
              title={s.title}
              setStyle={this.setStyle}/>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    style: state.settings.style,
    stylesSwitchers: state.settings.stylesSwitchers
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setStyle: (style) => {
      dispatch(setStyleAC(style))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wednesday)