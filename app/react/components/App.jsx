import React from 'react';
import { Link, Navigation } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Open Study</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="chat">Chat</Link></li>
            <li><Link to="resources">Resources</Link></li>
          </ul>
        </div>
      </nav>
      {this.props.children}
    </div>
    )
  }
}
