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
      <div>
        <h3>Your Todos</h3>
        <form onSubmit={this.createTodo.bind(this)}>
          <input placeholder="Add a todo..." ref="todoInput" type="text"></input>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
