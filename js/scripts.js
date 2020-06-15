//user interface logic
$(document).ready(function() {
  $("form#toDo").submit(function(event){
    event.preventDefault();
    //let item = $("input#userInput").val();
    //$('#results').append('<li>' + item + '</li>')
    
    $('button').click(function(){
      let newItem = $('#userInput').val();
      $('#results').append('<li>' + newItem + '</li>')
    let toDoListOutput = ToDoList(newItem);

    //$("#results").text(item);
    });
  });  
});

//function newItem()

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

