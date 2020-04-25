import React from "react"
import {connect} from "react-redux"
import styles from "./Wednesday.module.css"
import StyleSwitcher from "./StyleSwitcher/StyleSwitcher"
import {getServerStatus, setCheckbox, setStyle} from "../../redux/wednesdayReducer"
import {api} from "../../DAL/api"
import {setLoading} from "../../redux/loadingReduser"
import Preloader from "../../Loading/Preloader"

class Wednesday extends React.Component {

  setStyle = (value) => {
    this.props.setStyle(value)
  }

  onRequestClick = () => {
    this.props.setLoading(true)
    let success = this.props.isChecked
    let response = api.tryCatch(api.setServerStatus(success))
    response.then(data => {
      this.props.getServerStatus(data)
      this.props.setLoading(false)
    })
  }

  /*  request = () => {
      return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',
        {title: 'new title', success: this.props.isChecked}
      )
    }

    tryCatch = async (reqest) => {
      try {
        const response = await reqest()
        console.log('answer:', response.data)
        return response
      } catch (e) {
        console.log('error:', {...e})
        return 'error'
      }
    }*/

  onCheckboxChanged = (e) => {
    this.props.setCheckbox(e.target.checked)
  }

  render = () => {
    return (
      <div className={`${styles.wrapper} ${this.props.style.style}`}>
        <div className={styles.content}>
          {this.props.stylesSwitchers.map((s, i) =>
            <StyleSwitcher
              key={i}
              value={s.value}
              checked={s.checked}
              title={s.title}
              setStyle={this.setStyle}/>
          )}
          <div className={styles.sendBox}>
            <input onChange={this.onCheckboxChanged} type={`checkbox`} checked={this.props.isChecked}/>
            <button onClick={this.onRequestClick} disabled={this.props.isLoading}>
              send
            </button>
          </div>
          <div className={styles.serverStatus}>
            {this.props.isLoading
              ? <Preloader/>
              : <span>{this.props.serverStatus}</span>}
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    style: state.wednesday.style,
    stylesSwitchers: state.wednesday.stylesSwitchers,
    isChecked: state.wednesday.isChecked,
    serverStatus: state.wednesday.serverStatus,
    isLoading: state.loading.isLoading
  }
}

export default connect(mapStateToProps, {
  setCheckbox, setStyle, getServerStatus,
  setLoading
})(Wednesday)