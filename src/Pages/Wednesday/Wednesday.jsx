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
    let checkedStyle = this.props.styles.find(style => style.checked)
    return (
      <div className={`${styles.wednesday} ${styles[checkedStyle.value]}`}>
        <div className={styles.themeWrapper}>
          {this.props.styles.map((s, i) =>
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
    styles: state.settings.styles
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