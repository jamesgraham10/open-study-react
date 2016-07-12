import React from 'react';
import Todo from "./Todo";
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class TodoList extends React.Component {
  render() {
    let todos = this.props.todos.map(todo => {
      return <div>
        <ListItem>
          <Todo key={todo.id} {...todo} />
        </ListItem>
        <Divider/>
      </div>
    });

    return (
        <List>
          {todos}
        </List>
    )
  }
}
