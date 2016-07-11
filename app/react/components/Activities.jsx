import React from 'react';
import ActivityStore from '../stores/ActivityStore';
import Activity from "./Activity";

import ActivityActions from '../actions/ActivityActions';
ActivityActions.getAllActivities();

let getActivityState = () => {
  return { activityList: ActivityStore.getAll() };
}

export default class Activities extends React.Component {

  constructor(props) {
    super(props);
    this.state = getActivityState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    ActivityStore.addChangeListener(this._onChange)
  }
  componentWillUnmount() {
    ActivityStore.removeChangeListener(this._onChange)
  }
  _onChange() {
    console.log(5, "_onChange");
    this.setState(getActivityState());
  }

  render() {
    let activities = this.state.activityList.map( activity => <Activity key={activity.id} {...activity} />);
    return (
      <div className="col s12 m6">
        <h3>Activities</h3>
        <ul className="collection">
          {activities}
        </ul>
      </div>
    )
  }
}
