
function ToDoList() {
  this.list = [];
}

function Item(item) {
  this.item = item;
}

ToDoList.prototype.addItem = function(item) {
  let item = $().val();
  this.list.push(item);
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

