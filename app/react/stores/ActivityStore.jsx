import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "../AppEventEmitter";

let _activities = [];

class ActivityEventEmitter extends AppEventEmitter {

  getAll() {
    return _activities;
   }

}

let ActivityStore = new ActivityEventEmitter();

AppDispatcher.register( action => {

  switch(action.actionType) {

    case ActionTypes.RECIEVED_COMPLETED_TODO:
      if (action.completedTodo.complete) { _activities.push(action.completedTodo); }
      else { _activities = _activities.filter( activity => activity.id != action.completedTodo.id ); }
      ActivityStore.emitChange();
      break;

    case ActionTypes.RECIEVED_ACTIVITIES:
      _activities = action.rawActivities;
      ActivityStore.emitChange();
      break;
    default:
  }
});

export default ActivityStore;
