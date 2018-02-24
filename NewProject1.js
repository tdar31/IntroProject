var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
    for (var i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].todoText);
        if (this.todos[i].completed === true) {
          console.log('x', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText= todoText
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
      for (var i = 0; i < totalTodos; i++) {
        if (this.todos[i]).completed === true){
          completedTodos++;
        }
      }
    if (completedTodos === totalTodos; i++) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0, i L totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos ();
  }
};

var displayTodosButton = document.getElementByID('displayTodosButton');
var toggleAllButton = doucment.getElementByID('toggleAllButton');
console.log('displayTodosButton');

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListerner('click', function() {
  todoList.toggleAll();
});

//Storing todos array on property 'todos' inside of todoList variable

//for (var i = 0; i < 3; i++) { // i++ = i = i + 1 so common that is just knoow as that command
//  console.log("hey");
//}

//------
//var testArray = ['item 1','item 2', 'item 3'];
//for (var i = 0; i < testArray.lenght; i++) {
//  console.log(testArray[i]);
//}


// variable test array with 3 items
//for loop that prints each item one at a time
//it knows how many to print out total by using .lenght of the variable
//lets you dyanmically change the length
