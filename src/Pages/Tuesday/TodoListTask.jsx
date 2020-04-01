import React from 'react';
import PropType from 'prop-types';

class TodoListTask extends React.Component {
  state = {
    editMode: false,
  }
  activateEditMode = () => {
    this.setState({editMode: true})
  }
  deactivateEditMod = () => {
    this.setState({editMode: false})
  }
  onIsDoneChanged = (e) => {
    if (e.currentTarget.checked) {
      let finishDate = `at ${new Date().toLocaleTimeString()}`
      this.props.changeStatus(this.props.task.id, e.currentTarget.checked, finishDate)
      console.log(finishDate)
    } else {
      this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    }
  }
  onTitleChanged = (e) => {
    let updDate = `at ${new Date().toLocaleTimeString()}`
    this.props.changeTaskTitle(this.props.task.id, e.currentTarget.value, updDate)
    console.log(updDate)
  }
  render = () => {
    let classForTask = this.props.task.isDone ? 'todoList-task done' : 'todoList-task'
    let classForPriority = this.props.task.priority === 'high' ? 'priority-high' :
      this.props.task.priority === 'medium' ? "priority-medium" : 'priority-low'

    return (
      <div className={classForTask} onMouseOver={()=>{alert()}}>
        <input type={'checkbox'}
               checked={this.props.task.isDone}
               onChange={this.onIsDoneChanged}/>
        {
          this.state.editMode
            ? <input
              autoFocus={true}
              value={this.props.task.title}
              onBlur={this.deactivateEditMod}
              onChange={this.onTitleChanged}
            />
            : <span onClick={this.activateEditMode}>
            {this.props.task.id} -
            <span className='titleTask'>{this.props.task.title}</span> -
            priority: <span className={classForPriority}>{this.props.task.priority}</span>
          </span>
        }
        <div className={`date`}>
          <div>created {this.props.task.created}</div>
          <div>updated {this.props.task.updated}</div>
          <div>finished {this.props.task.finished}</div>
        </div>
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