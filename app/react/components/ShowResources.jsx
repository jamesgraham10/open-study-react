import React from 'react';
import { Link } from 'react-router';

import Resource from "./Resource";
import ResourceStore from '../stores/ResourceStore';
import ResourceActions from '../actions/ResourceActions';

ResourceActions.getAllResources();

let getResourceState = () => {
  return { resourceList: ResourceStore.getAll() }
}

export default class ShowResources extends React.Component {
  constructor(props) {
    super(props);
    this.state = getResourceState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    ResourceStore.addChangeListener(this._onChange)
  }
  componentWillUnmount() {
    ResourceStore.removeChangeListener(this._onChange)
  }
  _onChange() {
    this.setState(getResourceState());
  }
  render() {
    let resources = this.state.resourceList.map( resource => <Resource key={resource.id} {...resource} />)
    return (
      <ul>
        {resources}
      </ul>
    )
  }
}
