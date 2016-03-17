
window.onload = function() {

  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  function addToDoItem() {

    var listItemElement = document.createElement("li");
    var todoInputElement = document.getElementById("todo-input");

    if(todoInputElement.value !== "") {
      listItemElement.innerText = todoInputElement.value;
      var todoList = document.querySelector(".todo-list-items");
      todoList.appendChild(listItemElement);

      todoInputElement.value = "";
    }

    todoInputElement.focus();

  }

  function markAsDone() {

    var firsTodoListItem = document.querySelector(".todo-list-items").querySelector("li");
    if(firsTodoListItem !== null) {
      var doneList = document.querySelector(".done-list-items");

      firsTodoListItem.classList.add('done');
      doneList.appendChild(firsTodoListItem);
    }

  }
  
}
