const addBtn = document.getElementById("add-todo-btn");
const todoInput = document.getElementById("todo-input");
const todosContainer = document.querySelector(".todos-container");

//to store all todos
let todos = [];

addBtn.addEventListener("click", () => {
    // <p> learn front end ...</p>
    //append --> todos container

    const todoPara = document.createElement("p");
    todoPara.innerText = todoInput.value;

    todosContainer.append(todoPara);
    todoInput.value = ""

})