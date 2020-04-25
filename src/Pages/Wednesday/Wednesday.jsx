import React from "react"
import {connect} from "react-redux"
import styles from "./Wednesday.module.css"
import StyleSwitcher from "./StyleSwitcher/StyleSwitcher"
import {setCheckbox, setStyle} from "../../redux/wednesdayReducer"
import {api} from "../../DAL/api"

class Wednesday extends React.Component {

  setStyle = (value) => {
    this.props.setStyle(value)
  }

  onRequestClick = () => {
    let success = this.props.isChecked
    let response = api.tryCatch(api.setServerStatus(success))
    response.then(res => {
      console.log('then', res)
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
          <div>
            <input onChange={this.onCheckboxChanged} type={`checkbox`} checked={this.props.isChecked}/>
            <button onClick={this.onRequestClick}>send
            </button>
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
  }
}

export default connect(mapStateToProps, {setCheckbox, setStyle})(Wednesday)