import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";

export default {
  recievedTodos(rawTodos) {
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
  },
  recievedResources(rawResources) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_RESOURCES,
      rawResources
    })
  },
  recievedOneResource(rawResource) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_ONE_RESOURCE,
      rawResource
    })
  },
  recievedEditedResource(editedResource) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECIEVED_EDITED_RESOURCE,
      editedResource
    })
  }
}
