import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
      }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem} className="toDoForm">
            <input className="inputText" 
              placeholder="Task" 
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput} />
            <button className="btnToDo" type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList