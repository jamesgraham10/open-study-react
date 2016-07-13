import React from 'react';
import Todos from './Todos';
import Activities from './Activities';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Todos />
          <Activities />
        </div>
      </div>
    )
  }
}
