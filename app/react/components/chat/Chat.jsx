import React from 'react';
import ChatMessage from './ChatMessage';

let socket;

let _chatMessages = [];

export default class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { _chatMessages };
    this.startChatConnection();
  }
  startChatConnection () {
    socket = io('http://localhost:5000');
    socket.on('new message', msg => {
      _chatMessages.push(msg);
      this.setState({_chatMessages});

      // Make sure scroll stays at bottom when chat message is sent
      let desiredScrollTop = $(".chatList").prop('scrollHeight');
      $(".chatList").scrollTop(desiredScrollTop);
    });
  }
  sendMessage(event) {
    event.preventDefault();
    let chatMsg = {body: this.refs.chatMsg.value, id: this.state._chatMessages.length + 1, created_at: Date.now(), user_name: 'Jason Millhouse'};
    this.refs.chatMsg.value = '';
    socket.emit('chat message', chatMsg);
  }
  render() {
    let chatMessages = this.state._chatMessages.map( chatMsg => <ChatMessage key={chatMsg.id} {...chatMsg} />);
    return (
        <div>
            <ul className="chatList">
              {chatMessages}
            </ul>
            <form onSubmit={this.sendMessage.bind(this)}>
              <input type="text" ref="chatMsg"></input>
            </form>
        </div>

    )
  }
}
