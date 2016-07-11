import React from 'react';
import Moment from 'moment';

export default class Activity extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/marcogomes/128.jpg" alt="" className="circle"/>
        <span className="title">James completed {this.props.body}</span>
        <p>{Moment(this.props.completedAt).fromNow()}</p>
      </li>
    )
  }
}
