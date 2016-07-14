import React from 'react';
import ActivityStore from '../../stores/ActivityStore';
import Activity from "./Activity";

import ActivityActions from '../../actions/ActivityActions';
ActivityActions.getAllActivities();

let getActivityState = () => {
  let activities = ActivityStore.getAll();
  let showEmpty = activities.length > 0 ? false : true;
  return {
    activityList: ActivityStore.getAll(),
    showEmpty
  }
}

export default class Activities extends React.Component {

  constructor(props) {
    super(props);
    this.state = getActivityState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    ActivityStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    ActivityStore.removeChangeListener(this._onChange)
  }
  _onChange() {
    this.setState(getActivityState());
  }

  render() {
    let activities = this.state.activityList.map( activity => <Activity key={activity.id} {...activity} />);
    return (
      <div className="col s12 m6">
        <div className="card">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Group Activity</h4>
          </li>
          {this.state.showEmpty ? <li className="collection-item">No recent activity.</li> : null }
          {activities}
        </ul>
        </div>
      </div>
    )
  }
}
