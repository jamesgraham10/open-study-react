import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";

export default {
  recievedTodos(rawTodos) {
    console.log(3, "ServerActions.recievedTodos");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_TODOS,
      rawTodos
    })
  },
  recievedOneTodo(rawTodo) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_ONE_TODO,
      rawTodo
    })
  },
  deleteTodoProcessed(deletedTodo) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.DELETE_TODO_PROCESSED,
      deletedTodo
    })
  },
  updateTodoProcessed(updatedTodo) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_TODO_PROCESSED,
      updatedTodo
    })
  }
}
