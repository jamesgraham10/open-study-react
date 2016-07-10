import React from 'react';
import Todos from './Todos';
import Achievements from './Achievements';
import Chat from './Chat';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Todos />
          <Achievements />
        </div>
        <Chat className="row"/>
      </div>
    )
  }
}
