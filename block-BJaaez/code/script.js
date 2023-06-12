let inputText = document.querySelector("#text");
let root = document.querySelector("ul");
let btn = document.querySelector(".clr");

let alltodos = [];

function handleInput(event){
if(event.keyCode=== 13 && event.target.value !== ""){

let todo = {
  name: event.target.value,
  isDone: false
}
alltodos.push(todo);
event.target.value = ""
createUi(alltodos,root);
}}
inputText.addEventListener("keyup",handleInput)

function handleDelete(event){

let id = event.target.dataset.id;
alltodos.splice(id,1);

createUi(alltodos,root);
}

function handleToggle(event){
let id = event.target.dataset.id;
alltodos[id].isDone = !alltodos[id].isDone
createUi(alltodos,root)

}



function createUi(data,rootelm){
  rootelm.innerHTML = "";
data.forEach((todo,index) => {
let li = document.createElement("li");
let input = document.createElement("input");
input.type = "checkbox"
input.checked = todo.isDone
input.setAttribute("data-id",index)
input.addEventListener("click",handleToggle);
let p = document.createElement("p")
p.innerText = todo.name;
let span = document.createElement("span");
span.innerText = "X";
span.addEventListener("click",handleDelete);
span.setAttribute("data-id",index)
li.append(input, p, span);
rootelm.append(li);
});

}
createUi(alltodos,root);






function handleClear() {
  alltodos = alltodos.filter(todo => !todo.isDone);
  createUi(alltodos, root);
}


btn.addEventListener("click", handleClear);


function filterTodos(filterType) {
  let filteredTodos;

  if (filterType === 'active') {
    filteredTodos = alltodos.filter(todo => !todo.isDone);
  } else if (filterType === 'completed') {
    filteredTodos = alltodos.filter(todo => todo.isDone);
  } else {
    filteredTodos = alltodos;
  }

  createUi(filteredTodos, root);
}
