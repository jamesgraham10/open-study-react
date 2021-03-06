import API from "../API";

export default {
  getAllTodos() {
    API.getAllTodos();
  },
  createTodo(body) {
    API.createTodo(body);
  },
  deleteTodo(todo) {
    API.deleteTodo(todo);
  },
  completeTodo(todo) {
    API.completeTodo(todo);
  }
}
