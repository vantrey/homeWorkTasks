import React from 'react';
import PropType from 'prop-types';
import DateComponent from "./DateComponent/DateComponent"
import getCurrentDate from "./currentDate"

class TodoListTask extends React.Component {
  state = {
    editMode: false,
    isDateVisible: false,
  }
  activateEditMode = () => {
    this.setState({editMode: true})
  }
  deactivateEditMod = () => {
    this.setState({editMode: false})
  }
  onIsDoneChanged = (e) => {
    if (e.currentTarget.checked) {
      this.props.changeStatus(this.props.task.id, e.currentTarget.checked, getCurrentDate())
    } else {
      this.props.changeStatus(this.props.task.id, e.currentTarget.checked, 'never')
    }
  }
  onTitleChanged = (e) => {
    this.props.changeTaskTitle(this.props.task.id, e.currentTarget.value, getCurrentDate())
  }
  onTitleMouseOver = () => {
    this.setState({isDateVisible: true})
  }
  onTitleMouseOut = () => {
    this.setState({isDateVisible: false})
  }

  render = () => {
    let classForTask = this.props.task.isDone ? 'todoList-task done' : 'todoList-task'
    let classForPriority = this.props.task.priority === 'high' ? 'priority-high' :
      this.props.task.priority === 'medium' ? "priority-medium" : 'priority-low'

    return (
      <div className={'taskWrapper'}
           onMouseOver={this.onTitleMouseOver}
           onMouseOut={this.onTitleMouseOut}
      >
        <div className={classForTask}>
          <input type={'checkbox'}
                 checked={this.props.task.isDone}
                 onChange={this.onIsDoneChanged}/>
          {this.state.editMode
            ? <input
              autoFocus={true}
              value={this.props.task.title}
              onBlur={this.deactivateEditMod}
              onChange={this.onTitleChanged}
            />
            : < span onClick={this.activateEditMode}>
            {this.props.task.id} -
            <span className='titleTask'>{this.props.task.title}</span> -
            priority: <span className={classForPriority}>{this.props.task.priority}</span>
          </span>}
        </div>
        {
          this.state.isDateVisible &&
          <DateComponent
            created={this.props.task.created}
            updated={this.props.task.updated}
            finished={this.props.task.finished}
          />
        }
      </div>
    );
  }
}

export default TodoListTask;

TodoListTask.propTypes = {
  title: PropType.string,
  isDone: PropType.bool,
  priority: PropType.string,
}