import React from "react"
import styles from "./Wednesday.module.css"

import {connect} from "react-redux"
import StyleSwitcher from "./StyleSwitcher/StyleSwitcher"
import {setStyleAC} from "../../redux/settingsReducer"

class Wednesday extends React.Component {

  setStyle = (value) => {
    this.props.setStyle(value)
  }

  switchersEls = this.props.styles.map((s, i) =>
    <StyleSwitcher value={this.props.style} checked={this.props.checked} setStyle={this.setStyle}/>
  )

  render = () => {
    let style = this.props.style === 'green' ? `${styles.wednesday} ${styles.green}` :
      `${styles.wednesday}`
    return (
      <div className={style}>
        {this.switchersEls}
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