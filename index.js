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
    console.log("Error on Fetch Todo!", err);
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

// Show Time
function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
}
showTime();
