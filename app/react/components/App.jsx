import React from 'react';
import { Link, Navigation } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        // NAVIGATION HERE
        <h1>Open Study</h1>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="chat">Chat</Link></li>
            <li><Link to="resources">Resources</Link></li>
          </ul>
        {this.props.children}
      </div>
    )
  }
}
