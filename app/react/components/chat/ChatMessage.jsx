import React from 'react';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

import {List, ListItem} from 'material-ui/List';
import Moment from 'moment';

export default class ChatMessage extends React.Component {
  render() {
    return (
      <div>
        <ListItem
          secondaryText={
            <div className="chat-msg__text">{this.props.body}</div>
          }
          primaryText={
            <div className="chat-msg__context">
              {this.props.user_name}
              <span className="chat-msg__time ">{Moment(this.props.created_at).format('LT')}</span>
            </div>}
          leftAvatar={<Avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/73.jpg" />}
        />
      <Divider/>
      </div>

    )
  }
}
