import React from "react"
import TodoList from "./TodoList"
import "./Tuesday.css"
import Loading from "./Loading/Loading"
import {connect} from "react-redux"

class Tuesday extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.setLoading(false)
    }, 3000)
  }

  render = () => {
    return (
      <div className="tuesday">
        {
          (this.props.loading && <Loading/>) ||
          (!this.props.loading && <TodoList/>)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setLoading: (loading) => {
      const action = {
        type: 'SET_LOADING',
        loading: loading
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tuesday)