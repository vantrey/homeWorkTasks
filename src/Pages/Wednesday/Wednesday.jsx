import React from "react"
import styles from "./Wednesday.module.css"

import {connect} from "react-redux"

class Wednesday extends React.Component {

  setStyle = () => {

  }


  render = () => {
    let style = this.props.style === 'green' ? `${styles.wednesday} ${styles.green}` :
      `${styles.wednesday}`
    return (
      <div className={style}>

        <input type={`radio`}/> светлая
        <input type={`radio`}/>
        <input type={`radio`}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    style: state.settings.style
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Wednesday)