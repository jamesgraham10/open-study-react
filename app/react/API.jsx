import ServerActions from "./actions/ServerActions";

let mockTodos = [
  {id: 1, body: 'Buy milk', complete: false},
  {id: 2, body: 'Get bread', complete: false},
  {id: 3, body: 'Go to shops', complete: false},
  {id: 4, body: 'Find local shop', complete: false}
]

let mockResources = [
  { id: 1,
    type: 'Book',
    title: 'Day of the Triffis',
    description: 'Sci-fi book about angry plants',
    link: 'https://en.wikipedia.org/wiki/The_Day_of_the_Triffids',
    upvotes: 10
  },
  { id: 2,
    type: 'Blogpost',
    title: 'Leveling Up With React: React Router',
    description: 'Blogpost about react router',
    link: 'https://css-tricks.com/learning-react-router/',
    upvotes: 4
  },
  { id: 3,
    type: 'YouTube',
    title: 'var, let and const - What, why and how - ES6 JavaScript Features',
    description: 'In ES5, we only had one type of variable, var, but in ES6, we have three. types of variables: var, let and const. In this video, we explore the what, why, and how of var, let and const, and I also do a little lecture on the value of minimising mutable state. ',
    link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8',
    upvotes: 6
  },
  { id: 4,
    type: 'Book',
    title: 'Accelerating Through Angular 2',
    description: 'Create the future of web applications by taking Angular 2 for a test drive.',
    link: 'https://www.codeschool.com/courses/accelerating-through-angular-2',
    upvotes: 5
  },
]


export default {
  getAllTodos() {
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
  completeTodo(todo) {
    // Make patch request to server, return completed todo
    let completedTodo = {
      id: todo.id,
      body: todo.body,
      complete: !todo.complete,
      completedAt: Date.now() };
    ServerActions.recievedCompletedTodo(completedTodo);
  },
  getAllActivities() {
    // Hand over empty array for now...
    let rawActivities = [];
    ServerActions.recievedActivities(rawActivities);
  },
  getAllResources() {
    ServerActions.recievedResources(mockResources)
  },
  createResource(newResource) {
    // send to rails, get response
    let rawResource = newResource;
    ServerActions.recievedOneResource(rawResource);
  }
}
