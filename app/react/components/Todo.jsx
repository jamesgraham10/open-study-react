import React from 'react';
import TodoActions from '../actions/TodoActions';

export default class Todo extends React.Component {
  deleteTodo() { TodoActions.deleteTodo(this.props); }
  completeTodo() { TodoActions.completeTodo(this.props); }
  render() {
    return (
      <li className="collection-item">
          <span className={"todo__status--" + (this.props.complete ? 'done' : 'default') } onClick={this.completeTodo.bind(this)}>{this.props.body}</span>
          <i className="secondary-content material-icons" onClick={this.deleteTodo.bind(this)}>delete</i>
      </li>
    )
  }
}
