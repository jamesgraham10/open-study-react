import React from 'react';
import ChatMessages from './ChatMessages';
import ChatUsers from './ChatUsers';

export default class Chat extends React.Component {
  render() {
    return(
      <div className="row chat-container">
        <div className="col s8 chat-left"><ChatMessages/></div>
        <div className="col s4 chat-right"><ChatUsers /></div>
      </div>
    )
  }

}
