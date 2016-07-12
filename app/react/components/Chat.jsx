import React from 'react';
import ChatMessage from './ChatMessage';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

let socket;

let _chatMessages = [];

export default class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { _chatMessages, chatMsg : '' };
    this.startChatConnection();
  }
  startChatConnection () {
    socket = io('http://localhost:5000');
    socket.on('new message', msg => {

      _chatMessages.push(msg);
      this.setState({_chatMessages});

      // Make sure scroll stays at bottom when chat message is sent
      let desiredScrollTop = $(".paper").prop('scrollHeight');
      $(".paper").scrollTop(desiredScrollTop);
    });
  }
  sendMessage(event) {
    event.preventDefault();
    let chatMsg = {body: this.state.chatMsg, id: this.state._chatMessages.length + 1, created_at: Date.now(), user_name: 'Jason Millhouse'};
    this.state.chatMsg = '';
    socket.emit('chat message', chatMsg);
  }
  handleChange(event) {
    this.setState({ chatMsg : event.target.value });
  }
  render() {
    let chatMessages = this.state._chatMessages.map( chatMsg => <ChatMessage key={chatMsg.id} {...chatMsg} />);
    return (
        <div>
          <Paper className="paper"
            style={{
              height: '80vh',
              overflow: 'scroll'
            }}>
            <List>
              {chatMessages}
            </List>
            <form onSubmit={this.sendMessage.bind(this)} ref="chatMsg">
              <TextField
                underlineShow={false}
                id='chatMessage'
                value={this.state.chatMsg}
                onChange={this.handleChange.bind(this)}
              />
            </form>
          </Paper>
        </div>

    )
  }
}
