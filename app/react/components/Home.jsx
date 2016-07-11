import React from 'react';
import Todos from './Todos';
import Activities from './Activities';
import Chat from './Chat';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Todos />
          <Activities />
        </div>
        <Chat className="row"/>
      </div>
    )
  }
}
