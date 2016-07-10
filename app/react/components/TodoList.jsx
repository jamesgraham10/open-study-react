import React from 'react';
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    let todos = this.props.todos.map(todo => <Todo key={todo.id} {...todo} />);
    return (
      <div>
        <ul className="collection">
          {todos}
        </ul>
      </div>
    )
  }
}
