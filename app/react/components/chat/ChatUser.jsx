import React from 'react';

export default class ChatUser extends React.Component {
  render() {
    return (
      <li className="collection-item avatar chat-user">
        <img src={this.props.avatar} alt={this.props.user_name} className="circle"/>
        <span className="title">{this.props.user_name}</span>
      </li>
    )
  }
}
