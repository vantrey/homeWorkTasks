import React from 'react';
import './Tuesday.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import {restoreState, saveState} from "./actualState"

class Tuesday extends React.Component {
  componentDidMount() {
    restoreState(this.setStateFromSave, this.nextTaskId)
  }

  state = {
    tasks: [],
    filterValue: 'All'
  }

  nextTaskId = 0

  setStateFromSave = (state, nextTaskId) => {
    this.setState(state)
    this.nextTaskId = nextTaskId
  }

  addTask = (newTitleText, priority) => {
    let newTask = {
      id: this.nextTaskId,
      title: newTitleText,
      isDone: false,
      priority: priority
    }
    this.nextTaskId++
    let newTasks = [...this.state.tasks, newTask]
    this.setState({tasks: newTasks}, () => {
      saveState(this.state)
    })
  }
  changeFilter = (newFilterValue) => {
    this.setState({filterValue: newFilterValue}, () => {
      saveState(this.state)
    })
  }
  delTask = () => {
    let newTasks = this.state.tasks.filter(t => !t.isDone)
    this.setState({tasks: newTasks}, () => {
      saveState(this.state)
    })
  }
  changeStatus = (taskId, isDone) => {
    this.changeTask(taskId, {isDone: isDone})
  }
  changeTaskTitle = (taskId, title) => {
    this.changeTask(taskId, {title: title})
  }
  changeTask = (taskId, obj) => {
    let newTask = this.state.tasks.map(t => {
      if (t.id === taskId) {
        return {...t, ...obj}
      } else {
        return t
      }
    })
    this.setState({tasks: newTask}, () => {
      saveState(this.state)
    })
  }

  render = () => {
    const filteredTasks = this.state.tasks.filter(t => {
      if (this.state.filterValue === 'Active') {
        return !t.isDone
      } else if (this.state.filterValue === 'Completed') {
        return t.isDone
      } else if (this.state.filterValue === 'All') {
        return true
      } else {
        return true
      }
    })

    return (
      <div className="tuesday">
        <div className="todoList">
          <TodoListHeader addTask={this.addTask}/>
          <TodoListTasks
            changeTaskTitle={this.changeTaskTitle}
            changeStatus={this.changeStatus}
            tasks={filteredTasks}/>
          <TodoListFooter
            delTask={this.delTask}
            changeFilter={this.changeFilter}
            filterValue={this.state.filterValue}
          />
        </div>
      </div>
    );
  }
}

export default Tuesday;

