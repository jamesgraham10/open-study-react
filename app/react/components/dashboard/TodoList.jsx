import React from 'react';
import Todo from './Todo';
import TodoEditor from './TodoEditor';

import TodoStore from '../../stores/TodoStore';
import TodoActions from '../../actions/TodoActions';
TodoActions.getAllTodos();

let getTodoState = () => {
  return { todosList: TodoStore.getAll() };
}

export default class TodoList extends React.Component {
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
    this.setState(getTodoState());
  }

  render() {
    let todos = this.state.todosList.map(todo => <Todo key={todo.id} {...todo} />);
    return (
      <div className="col s12 m6">
        <div className="card">
          <ul className="collection with-header">
            <li className="collection-header"><h4>Tasks</h4></li>
            {todos}
            <TodoEditor/>
          </ul>
        </div>
      </div>
    )
  }
}
