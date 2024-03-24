/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  
  add (task){
    this.todos.push(task);
  }
  remove(ind){
    if(ind >= this.todos.length)
      return("Invalid Index")
    this.todos.splice(ind,1);
  }
  update(ind, updates){
    if (ind >= this.todos.length) return "Invalid Index";
    this.todos.splice(ind, 1);
    this.todos.splice(ind, 0, updates);
  }
  getAll(){
    return this.todos;
  }
  get(ind){
    if (ind >= this.todos.length) return null;
    return this.todos[ind];
  }
  clear(){
    this.todos = [];
  }
}

module.exports = Todo;
