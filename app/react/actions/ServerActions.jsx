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
  recievedCompletedTodo(completedTodo) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_COMPLETED_TODO,
      completedTodo
    })
  },
  recievedActivities(rawActivities) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_ACTIVITIES,
      rawActivities
    })
  }
}
