import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "../AppEventEmitter";

let _resources = [];

class ResourceEventEmitter extends AppEventEmitter {

  getAll() {
    return _resources.sort( (a, b) => { return a.upvotes - b.upvotes }).reverse(); 
  }

}

let ResourceStore = new ResourceEventEmitter();

AppDispatcher.register( action => {

  switch(action.actionType) {
    case ActionTypes.RECIEVED_RESOURCES:
      _resources = action.rawResources;
      ResourceStore.emitChange();
      break;
    case ActionTypes.RECIEVED_ONE_RESOURCE:
      _resources.unshift(action.rawResource);
      ResourceStore.emitChange();
      break;
    default:
  }
});

export default ResourceStore;
