import React from 'react';
import { Link } from 'react-router';

export default class Resources extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Link to="resources/new">
            <span className="col s1 offset-s10">Add <i className="small material-icons">library_add</i></span>
          </Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}
