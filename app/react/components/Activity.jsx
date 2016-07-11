import React from 'react';
import Moment from 'moment';

export default class Activity extends React.Component {
  render() {
    return (
      <li className="collection-item">
        James completed {this.props.body} @ {Moment(this.props.completedAt).fromNow()}
        <i className="secondary-content material-icons">delete</i>
      </li>
    )
  }
}
