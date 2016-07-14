import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "../AppEventEmitter";

let _todos = [];

class TodoEventEmitter extends AppEventEmitter {

  getAll() {
    return _todos;
  }

}

let TodoStore = new TodoEventEmitter();

AppDispatcher.register( action => {

  switch(action.actionType) {
    case ActionTypes.RECIEVED_TODOS:
      _todos = action.rawTodos;
      TodoStore.emitChange();
      break;
    case ActionTypes.RECIEVED_ONE_TODO:
      _todos.push(action.rawTodo);
      TodoStore.emitChange();
      break;
    case ActionTypes.RECIEVED_COMPLETED_TODO:
      let i = _todos.findIndex( todo => todo.id === action.completedTodo.id);
      _todos[i] = action.completedTodo;
      TodoStore.emitChange();
      break;
    case ActionTypes.DELETE_TODO_PROCESSED:
      _todos = _todos.filter(todo => todo.id != action.deletedTodo.id);
      TodoStore.emitChange();
      break;
    default:
  }
});

export default TodoStore;
