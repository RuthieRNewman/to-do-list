//user interface logic
$(document).ready(function() {
  $("form#toDo").submit(function(event){
    event.preventDefault();
    let item = ($("input#itemInput");
    let toDoListOutput = Item(item);

  }

  //business logic
function ToDoList() {
  this.list = [];
}

function Item(item) {
  this.item = item;
}

ToDoList.prototype.addItem = function(item) {
  this.list.push(item);
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

