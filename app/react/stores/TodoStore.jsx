import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import { EventEmitter } from "events";

let _todos = [];
const CHANGE_EVENT = "CHANGE";

class TodoEventEmitter extends EventEmitter {

  getAll() {
    return _todos.map(todo => {
      // tweet.formattedDate = moment(tweet.created_at).fromNow();
      return todo;
    });
  }
  emitChange () {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

}

let TodoStore = new TodoEventEmitter();

AppDispatcher.register( action => {

  switch(action.actionType) {
    case ActionTypes.RECIEVED_TODOS:
      console.log(4, "TodoStore");
      _todos = action.rawTodos;
      TodoStore.emitChange();
      break;
    case ActionTypes.RECIEVED_ONE_TODO:
      _todos.unshift(action.rawTodo);
      TodoStore.emitChange();
      break;
    case ActionTypes.DELETE_TODO_PROCESSED:
      _todos = _todos.filter(todo => todo.id != action.deletedTodo.id);
      TodoStore.emitChange();
      break;
    case ActionTypes.UPDATE_TODO_PROCESSED:
      let i = _todos.findIndex( todo => todo.id === action.updatedTodo.id);
      _todos[i].complete = !_todos[i].complete;
      console.log(_todos);
      TodoStore.emitChange();
    default:
  }
});

export default TodoStore;
