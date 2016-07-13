import React from 'react';
import TodoActions from '../../actions/TodoActions';

export default class Todo extends React.Component {
  componentDidMount() {
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  }
  deleteTodo() { TodoActions.deleteTodo(this.props); }
  completeTodo() { TodoActions.completeTodo(this.props); }
  addDate() {
    console.log("hey!");
  }
  render() {
    return (
      <li className={"collection-item todo-item todo__status--" + (this.props.complete ? 'done' : 'default') }>
        <span onClick={this.completeTodo.bind(this)}>{this.props.body}</span>
        <input placeholder="Due date..." className="datepicker"/>
      </li>
    )
  }
}
