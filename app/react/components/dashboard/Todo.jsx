import React from 'react';
import TodoActions from '../../actions/TodoActions';

export default class Todo extends React.Component {
  deleteTodo() { TodoActions.deleteTodo(this.props); }
  completeTodo() { TodoActions.completeTodo(this.props); }
  addDate() {
    console.log("hey!");
  }
  render() {
    return (
      <li className={"todo__status--" + (this.props.complete ? 'done' : 'default') }
          onClick={this.completeTodo.bind(this)}
      >
        {this.props.body}
      </li>
    )
  }
}
