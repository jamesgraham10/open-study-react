import ServerActions from "./actions/ServerActions";

let mockTodos = [
  {id: 1, body: 'Buy milk', complete: false},
  {id: 2, body: 'Get bread', complete: true},
  {id: 3, body: 'Go to shops', complete: false},
  {id: 4, body: 'Find local shop', complete: false}
]

export default {
  getAllTodos() {
    console.log(2, "API.getAllTweets");
    // Return Mock Todos here
    ServerActions.recievedTodos(mockTodos);
    // $.get("/tweets")
    // .success( rawTweets => ServerActions.recievedTweets(rawTweets) )
    // .error(error => console.log(error));
  },
  createTodo(body) {
    let rawTodo = { id: mockTodos.length + 1, body: body  };
    // mockTodos.unshift(rawTodo);
    ServerActions.recievedOneTodo(rawTodo);

    // $.post("/tweets", {body})
    // .success( rawTweet => ServerActions.recievedOneTweet(rawTweet) )
    // .error( error => console.log(error));
  },
  deleteTodo(todo) {
    // Make del request to server, return todos list without todo
    ServerActions.deleteTodoProcessed(todo);
  },
  updateTodo(todo) {
    // Make patch request to server, return completed todo
    ServerActions.updateTodoProcessed(todo);
  }
}
