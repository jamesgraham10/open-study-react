import React from 'react';
import faker from 'Faker';
faker.locale = "en_GB";

import ChatUser from './ChatUser';

let _onlineUsers = [];

let generateFakeUsers = function () {
  let fakeUsers = [];
  for (var i = 0; i < 51; i++) {
    let fakeUser = {
      id: faker.random.number(),
      avatar: faker.image.avatar(),
      user_name: faker.name.findName(),
      working_on: faker.hacker.phrase()
    }
    fakeUsers.push(fakeUser);
  }
  _onlineUsers = fakeUsers;
  return fakeUsers;
}

export default class ChatUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { _onlineUsers: generateFakeUsers() }
  }
  render() {
    let userList = this.state._onlineUsers.map( user => <ChatUser key={user.id} {...user}/>);
    return (
      <ul className="collection with-header chat-list user-list">
        <li className="collection-header">
          <h4>Online Users</h4>
        </li>
        {userList}
      </ul>
    )
  }
}
