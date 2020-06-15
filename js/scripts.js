//user interface logic
$(document).ready(function() {
  $("form#toDo").submit(function(event){
    event.preventDefault();
    let item = $("input#userInput").val();
    let toDoListOutput = ToDoList(item);

    $("#results").text(item);
  });
});


  //business logic
function ToDoList() {
  this.items = [];
}

ToDoList.prototype.addItem = function(item) {
  this.items.push(item);
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

