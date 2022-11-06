const toDoForm= document.querySelector(".todo-form");
const input= toDoForm.querySelector("input");
const toDoList= document.querySelector(".todo-list");

let TODO_ITEMS= [];
const LOCAL_STORAGE_KEY= "todos";

function saveToDos(){
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(TODO_ITEMS)); 
}

function deleteToDo(event){
    const deletedLi = event.target.parentElement;
    deletedLi.remove();
    TODO_ITEMS= TODO_ITEMS.filter((item) => item.id !== parseInt(deletedLi.id));
    console.log(TODO_ITEMS);
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id= newToDo.id;
    const span= document.createElement("span");
 
    span.innerText = newToDo.text;

    const icon= document.createElement("i");
    icon.setAttribute("class","fa-solid fa-eraser");
    icon.addEventListener("click",deleteToDo); 
    li.appendChild(span);
    li.appendChild(icon);
    toDoList.appendChild(li);
}

function handleToSubmit(event){
    event.preventDefault();

    const newToDo = input.value;
    input.value = "";

    const newTodoObj={
        text:newToDo,
        id:Date.now(),
    };

    TODO_ITEMS.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
    
toDoForm.addEventListener("submit", handleToSubmit);

const savedToDos= localStorage.getItem(LOCAL_STORAGE_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    TODO_ITEMS= parsedToDos;//
    parsedToDos.forEach(paintToDo);
    
}