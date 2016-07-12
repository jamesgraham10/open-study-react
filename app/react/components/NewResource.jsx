import React from 'react';
import { Link } from 'react-router';
import ResourceActions from '../actions/ResourceActions';

export default class Resources extends React.Component {
  componentDidMount() {
    $('select').material_select();
    $('textarea#resource__description').characterCounter();
  }
  createResource(event) {
    event.preventDefault();
    let newResource = {
      id: Date.now(),
      upvotes: 0,
      type: this.refs.resourceType.value,
      title: this.refs.resourceTitle.value,
      link: this.refs.resourceLink.value,
      description: this.refs.resourceDescription.value
    };
    this.refs.resourceType.value = '';
    this.refs.resourceTitle.value = '';
    this.refs.resourceLink.value = '';
    this.refs.resourceDescription.value = '';

    ResourceActions.createResource(newResource);
  }
  render() {
    return (
      <form onSubmit={this.createResource.bind(this)}>
        <div className="row">
          <div className="input-field col s6">
            <select ref="resourceType">
              <option value="" disabled>Choose your option</option>
              <option value="Blogpost">Blogpost</option>
              <option value="Book">Book</option>
              <option value="YouTube">YouTube</option>
              <option value="Paid Course">Paid Course</option>
            </select>
            <label>Select Resource Type</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input ref="resourceTitle" placeholder="Resource Title" id="resouce-title" type="text" className="validate"/>
            <label htmlFor="resouce-title">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input ref="resourceLink" placeholder="Link" id="resouce-link" type="text" className="validate"/>
            <label htmlFor="resouce-link">Link</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea ref="resourceDescription" id="resource-description" className="materialize-textarea" data-length="120"></textarea>
            <label htmlFor="resource-description">Description</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light" type="submit" name="action">Add Resource
          <i className="material-icons right">send</i>
        </button>

      </form>

    )
  }
}
