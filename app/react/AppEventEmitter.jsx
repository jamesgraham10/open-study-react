import ActionTypes from "./constants";
import { EventEmitter } from "events";

export default class AppEventEmitter extends EventEmitter {
  emitChange () {
    this.emit(ActionTypes.CHANGE_EVENT);
  }
  addChangeListener (callback) {
    this.on(ActionTypes.CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(ActionTypes.CHANGE_EVENT, callback);
  }
}
