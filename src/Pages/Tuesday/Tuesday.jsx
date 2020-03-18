import React from "react"
import TodoList from "./TodoList"
import "./Tuesday.css"
import Loading from "./Loading/Loading"

class Tuesday extends React.Component {
  state = {
    loading: true
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({loading: false})
    }, 3000)
  }

  render = () => {
    return (
      <div className="tuesday">
        {
          (this.state.loading && <Loading/>) ||
          (!this.state.loading && <TodoList/>)
        }
      </div>

    )
  }
}
export default Tuesday