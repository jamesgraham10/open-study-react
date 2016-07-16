import React from 'react';
import ResourceActions from '../../actions/ResourceActions';

export default class Resource extends React.Component {

  upvoteResource() {
    ResourceActions.editResourceUpvotes({upvote: true, resource: this.props});
  }
  downvoteResource() {
    ResourceActions.editResourceUpvotes({upvote: false, resource: this.props});
  }
  render() {
    return (
      <li className="collection-item resource">
        <div className="resource-upvotes">
          <i onClick={this.upvoteResource.bind(this)} className="small material-icons">keyboard_arrow_up</i>
          <span className="resource-upvotes__number">{this.props.upvotes}</span>
          <i onClick={this.downvoteResource.bind(this)} className="small material-icons">keyboard_arrow_down</i>
        </div>
        <div className="resource-details">
          <span className="resource-details__title"><a href={this.props.link} target="_blank">{this.props.title}</a></span>
          <p className="resource-details__description">{this.props.description}</p>
        </div>
      </li>
    )
  }
}
