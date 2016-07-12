import React from 'react';

export default class Resource extends React.Component {
  render() {
    return (
      <li className="collection-item">
        <span className="title">{this.props.title}</span>
        <p>{this.props.description}</p>
        <p>{this.props.link}</p>
        <p>{this.props.upvotes}</p>
      </li>
    )
  }
}
