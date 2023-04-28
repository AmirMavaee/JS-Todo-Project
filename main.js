const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click",addToDo)

function addToDo(event){
    event.preventDefault();

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");

    const newToDo = document.createElement("li");
    newToDo.innerText = todoInput.value;
    newToDo.classList.add("todo-item");

    toDoDiv.appendChild(newToDo);
    todoInput.value="";

    const completedbutton =document.createElement("button");
    completedbutton.innerHTML = "<i class='fas fa-check'></i>";
    completedbutton.classList.add("complete-btn");
    toDoDiv.appendChild(completedbutton);

    const trashbutton  = document.createElement("button");
    trashbutton.innerHTML = "<i class='fas fa-trash'></i>";
    trashbutton.classList.add("trash-btn");
    toDoDiv.appendChild(trashbutton);

    toDoList.appendChild(toDoDiv);
}

toDoList.addEventListener("click",deleteCompleteTodo);

function deleteCompleteTodo(event){
    const item = event.target;
    if(item.classList[0] === "trash-btn"){
        const toDo =item.parentElement;
        toDo.remove();
    }
    else if(item.classList[0] === "complete-btn"){
        const toDo =item.parentElement;
        toDo.classList.toggle("completed")
    }
}

filterOption.addEventListener("click",filterToDo)

function filterToDo(event){
   const toDos = toDoList.childNodes;
   toDos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                };
                break;
            case "uncompleted":
                if(todo.classList.contains("completed")){
                    todo.style.display="none";
                }else{
                    todo.style.display="flex";
                };
                break;
        }
   });
}