import React from 'react';
import PropTypes from 'prop-types';

class TodoListHeader extends React.Component {
  state = {
    error: false,
    title: '',
    priority: 'low', // medium, high
  }

  onAddTaskClick = () => {
    let newTitle = this.state.title
    if (!newTitle) {
      this.setState({error: true})
    } else {
      this.setState({error: false, title: ''})
      this.props.addTask(newTitle, this.state.priority)
    }
  }

  onChangeTitle = (e) => {
    this.setState({title: e.currentTarget.value, error: false})
  }

  onAddTaskKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onAddTaskClick()
    }
  }
  onChangeSelect = (e) => {
    this.setState({priority: e.currentTarget.value})
  }
  render = () => {
    let classError = this.state.error ? 'error' : ''
    return (
      <div className="todoList-header">
        <h3 className="todoList-header__title">What to Learn</h3>
        <div className="todoList-newTaskForm">
          <div className={'toDoListSet'}>
            <input
              value={this.state.title}
              onKeyPress={this.onAddTaskKeyPress}
              onChange={this.onChangeTitle}
              type="text"
              placeholder="New task name"
              className={classError}
            />
            <div className='prioritySet'>
            <span> Set priority </span>
            <select  onChange={this.onChangeSelect}>
              <option value={`low`}>low</option>
              <option value={`medium`}>medium</option>
              <option value={`high`}>high</option>
            </select>
            </div>
          </div>
          <button onClick={this.onAddTaskClick}>Add</button>
        </div>
      </div>
    );
  }
}

export default TodoListHeader;

TodoListHeader.propTypes = {
  onAddTaskClick: PropTypes.func,
}
