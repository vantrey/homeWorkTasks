import React from "react"
import TodoList from "./TodoList"
import "./Tuesday.css"
import Loading from "../../Loading/Loading"
import {connect} from "react-redux"
import {setLoading} from "../../redux/loadingReduser"

class Tuesday extends React.Component {

  componentDidMount() {
    this.props.setLoading(true)
    setTimeout(() => {
      this.props.setLoading(false)
    }, 3000)
  }

  render = () => {
    return (
      <div className="tuesday">
        {
          (this.props.isLoading && <Loading/>) ||
          (!this.props.isLoading && <TodoList/>)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.loading.isLoading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (isLoading) => {
      dispatch(setLoading(isLoading))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tuesday)