import React from 'react';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import TodoStore from '../stores/TodoStore';

import TodoActions from '../actions/TodoActions';
TodoActions.getAllTodos();

let getTodoState = () => {
  return { todosList: TodoStore.getAll() };
}

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = getTodoState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    TodoStore.addChangeListener(this._onChange)
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange)
  }
  _onChange() {
    console.log(5, "_onChange");
    this.setState(getTodoState());
  }

  render() {
    return (
      <div className="col s12 m6">
        <TodoEditor />
        <TodoList todos={this.state.todosList} />
      </div>
    )
  }
}
