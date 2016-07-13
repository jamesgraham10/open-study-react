import React from 'react';
import TodoActions from '../../actions/TodoActions';

export default class TodoEditor extends React.Component {
  createTodo(event) {
    event.preventDefault();
    TodoActions.createTodo(this.refs.todoInput.value);
    this.refs.todoInput.value = '';
  }
  render() {
    return (
      <form className="collection-item" onSubmit={this.createTodo.bind(this)}>
        <input placeholder="Add a task..." ref="todoInput" type="text"></input>
      </form>
    )
  }
}
