import React from 'react';
import ChatMessage from './ChatMessage';
import faker from 'Faker';
faker.local = "en_GB";

let socket;

let _chatMessages = [];

let generateFakeMessages = function () {
  let chatMessages = [];
  for (var i = 0; i < 26; i++) {
    let chatMessage = {
      id: faker.random.number(),
      avatar: faker.image.avatar(),
      created_at: faker.date.recent(),
      body: faker.lorem.sentence(),
      user_name: faker.name.findName()
    }
    chatMessages.push(chatMessage);
  }
  // Sort chat messages by created_at
  chatMessages.sort( (a, b) => a.created_at - b.created_at );
  _chatMessages = chatMessages;
  return chatMessages;
}

export default class ChatMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { _chatMessages: generateFakeMessages() }
    this.startChatConnection();
  }
  componentDidMount() {
    this.scrollToEnd();
  }
  scrollToEnd() {
    let desiredScrollTop = $(".chat-list").prop('scrollHeight');
    $(".chat-list").scrollTop(desiredScrollTop);
  }
  startChatConnection () {
    socket = io('http://localhost:5000');
    socket.on('new message', msg => {
      _chatMessages.push(msg);
      this.setState({_chatMessages});
      this.scrollToEnd();
    });
  }
  sendMessage(event) {
    event.preventDefault();
    let chatMsg = {body: this.refs.chatMsg.value, id: this.state._chatMessages.length + 1, created_at: Date.now(), user_name: 'Jason Millhouse'};
    this.refs.chatMsg.value = '';
    socket.emit('chat message', chatMsg);
  }
  render() {
    let chatMessages = this.state._chatMessages ? this.state._chatMessages.map( chatMsg => <ChatMessage key={chatMsg.id} {...chatMsg} />) : [];
    return (
      <div>
          <ul className="collection chat-list">
            {chatMessages}
          </ul>
          <form className="chat-form" onSubmit={this.sendMessage.bind(this)}>
            <input placeholder="say something..." className="chat-input" type="text" ref="chatMsg"></input>
          </form>
      </div>
    )
  }
}
