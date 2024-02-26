const todoList = document.getElementById("todo-list");

const fetchTodo = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) {
      throw "something wrong";
    }
    const data = await res.json();
    displayTodo(data);
  } catch (err) {
    console.log("Error on Fetch Todo!",err);
  }
};
// display Todo List
function displayTodo(todoApp) {
    todoApp.forEach((todo) => {
    const { title, userId } = todo;
  
    const listItem = document.createElement("li");
    listItem.classList.add("todo");

    // create user ID
    const usersId = document.createElement("p");
    usersId.textContent = userId;
    usersId.classList.add("usersId__todo");
    listItem.appendChild(usersId);

    // create todo title
    const todoTitle = document.createElement("p");
    todoTitle.textContent = title;
    todoTitle.classList.add("todo-title");
    listItem.appendChild(todoTitle);

    todoList.appendChild(listItem);
    });
  }
  fetchTodo();
