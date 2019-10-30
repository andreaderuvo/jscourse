import Todo from './todo_composition.js';
import User from './user.js';

//import Entity from './entity.js';

let user = new User(100, "Mario", "Rossi", "mario@rossi.it");
let todo = new Todo({ id: 3, title: "title1", user: user, completed: true });

//let entity = new Entity();

console.log(todo);