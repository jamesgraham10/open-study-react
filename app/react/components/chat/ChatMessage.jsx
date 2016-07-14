import React from 'react';
import Moment from 'moment';

export default class ChatMessage extends React.Component {
  render() {
    return (
      <li className="collection-item avatar chat-message">
        <img src={this.props.avatar} alt={this.props.user_name} className="circle"/>
        <span className="title title--muted">{this.props.user_name} @ {
            Moment(this.props.created_at).format('LT')}
        </span>
        <p>{this.props.body}</p>
      </li>
    )
  }
}
