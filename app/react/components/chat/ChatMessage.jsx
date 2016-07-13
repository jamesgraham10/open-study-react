import React from 'react';
import Moment from 'moment';

export default class ChatMessage extends React.Component {
  render() {
    return (
      <li>
        <div className="chat-msg__text">{this.props.body}</div>
        <div className="chat-msg__context">
          {this.props.user_name}
          <span className="chat-msg__time ">{
              Moment(this.props.created_at).format('LT')}
          </span>
        </div>
      </li>
    )
  }
}
