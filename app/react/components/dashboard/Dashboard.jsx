import React from 'react';
import TodoList from './TodoList';
import Activities from './Activities';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="row">
        <TodoList />
        <Activities />
      </div>
    )
  }
}
