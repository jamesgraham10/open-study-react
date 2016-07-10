import API from "../API";

export default {
  getAllTodos() {
    console.log(1, "TodoActions");
    API.getAllTodos();
  },
  createTodo(body) {
    API.createTodo(body);
  },
  deleteTodo(todo) {
    API.deleteTodo(todo);
  },
  updateTodo(todo) {
    API.updateTodo(todo);
  }
}
