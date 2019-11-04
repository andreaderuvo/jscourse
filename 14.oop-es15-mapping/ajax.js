import Todo from './todo.js';

var url = "https://jsonplaceholder.typicode.com/todos";

var todoObjects = [];
fetch(url)
    .then(function(response) {
        //deserialization
        return response.json();
    })
    .then(function(todos) {
        for (let todo of todos) {
            let todoObject = new Todo(todo);
            todoObjects.push(todoObject);
        }
        console.log(todoObjects);
    });