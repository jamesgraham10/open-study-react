import React from 'react';
import TodoActions from '../../actions/TodoActions';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton/IconButton';

export default class Todo extends React.Component {
  deleteTodo() { TodoActions.deleteTodo(this.props); }
  completeTodo() { TodoActions.completeTodo(this.props); }
  addDate() {
    console.log("hey!");
  }
  render() {
    return (
      <div>
        <div className={"todo__status--" + (this.props.complete ? 'done' : 'default') }
             onClick={this.completeTodo.bind(this)}>
             {this.props.body}
        </div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Send feedback" />
          <MenuItem primaryText="Settings" />
          <MenuItem primaryText="Help" />
          <MenuItem primaryText="Sign out" />
        </IconMenu>
      </div>

    )
  }
}
